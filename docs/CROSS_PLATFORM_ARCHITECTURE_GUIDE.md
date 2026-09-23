# Cẩm Nang Kiến Trúc Đa Nền Tảng: Swift 6 + Native WebView (macOS & Windows)

Tài liệu này đúc kết toàn bộ kiến trúc, phương pháp kỹ thuật và kinh nghiệm thực chiến từ dự án **Codex Bridge** để làm tài liệu tham khảo xây dựng các ứng dụng desktop đa nền tảng (macOS & Windows) hiệu năng cao, dung lượng nhẹ bằng **Swift 6**.

---

## 1. Triết Lý Kiến Trúc: Split-Daemon + Thin Native WebView

Thay vì gánh nặng từ **Electron** (~150MB bộ nhớ nền, đóng gói nguyên trình duyệt Chromium và Node.js) hay sự phức tạp của **Flutter** khi can thiệp sâu vào API cấp thấp của OS, mô hình của Codex Bridge phân tách thành 2 tiến trình độc lập:

```
┌─────────────────────────────────────────────────────────────┐
│                 GUI Shell (Giao diện mỏng)                  │
│  • macOS: AppKit / WKWebView   • Windows: Win32 / WebView2  │
│  • Đảm nhiệm: Cửa sổ, Khay hệ thống (Tray), Render Web UI   │
└──────────────────────────────┬──────────────────────────────┘
                               │ IPC (Named Pipe / NSXPC)
┌──────────────────────────────▼──────────────────────────────┐
│           Headless Service (Daemon lõi chạy ngầm)           │
│  • 100% Swift 6 thuần (SQLite, State Machine, Task Engine)  │
│  • Không phụ thuộc UI: Có thể chạy CLI, Service nền         │
└─────────────────────────────────────────────────────────────┘
```

### Ưu điểm vượt trội:
1. **Khả năng chịu lỗi (Resilience):** GUI shell có thể tắt, crash hoặc restart cập nhật phiên bản mà không làm gián đoạn các tác vụ ngầm đang chạy trong Service.
2. **Tiết kiệm tài nguyên:** Sử dụng WebView có sẵn của hệ điều hành (`WKWebView` trên macOS, `WebView2 Evergreen` trên Windows). Binary siêu nhỏ, khởi động tức thì.
3. **100% Native Logic:** Viết bằng Swift 6, biên dịch trực tiếp ra mã máy (Machine code) cho cả x64 và ARM64, tối ưu tốc độ CPU và bảo mật bộ nhớ.

---

## 2. Tổ Chức Mã Nguồn Trong Swift Package Manager (SPM)

Dự án tổ chức theo dạng Monorepo Package (`Packages/BridgeCore/Package.swift`):

```text
Packages/BridgeCore/
├── Package.swift
└── Sources/
    ├── BridgeDomain/               # Models, Domain Logic thuần (dùng chung)
    ├── BridgeIPC/                  # Giao thức truyền tin giữa Shell & Daemon
    ├── BridgeServiceHost/          # Logic điều phối Daemon
    ├── BridgeDesktopUI/            # HTML/CSS/JS tĩnh đóng gói vào bundle
    ├── BridgeServiceAppShell/      # [macOS only] AppKit + WKWebView
    ├── BridgeWindowsShell/         # [Windows only] Win32 + WebView2
    ├── CodexBridgeServiceExecutable/ # Điểm khởi động daemon: codex-bridge-service
    └── CodexBridgeWindowsApp/      # Điểm khởi động GUI Windows: codex-bridge-windows-app
```

### Cấu hình Linker Flags cho Windows GUI App (`Package.swift`)
Khi build app desktop Windows bằng Swift, nếu không cấu hình Linker, Windows sẽ mặc định mở thêm một cửa sổ console màu đen. Bắt buộc phải thêm cờ liên kết subsystem:

```swift
var windowsApplicationLinkerFlags = [
  "-Xlinker", "/SUBSYSTEM:WINDOWS",        // Báo cho Windows đây là Win32 GUI App (không console)
  "-Xlinker", "/ENTRY:mainCRTStartup",      // Điểm khởi đầu chuẩn C-Runtime
  "-Xlinker", "/MANIFEST:EMBED",            // Nhúng Manifest hỗ trợ DPI Aware & ComCtl32 v6
  "-Xlinker", "/MANIFESTINPUT:Windows/CodexBridgeWindowsApp.manifest",
]

// Target ứng dụng Windows
.executableTarget(
  name: "CodexBridgeWindowsApp",
  dependencies: [
    "BridgeWindowsShell",
    "BridgeIPC",
  ],
  linkerSettings: [
    .unsafeFlags(windowsApplicationLinkerFlags, .when(platforms: [.windows]))
  ]
)
```

---

## 3. Cầu Nối Native Win32 + WebView2 (`import WinSDK`)

Swift trên Windows có khả năng gọi trực tiếp các API C của Win32 và COM mà không cần viết lớp bọc C/C++ trung gian:

### A. Vòng lặp giao diện Windows (`WindowsUIThread.swift`)
Do Win32 API yêu cầu tính bám dính luồng (Thread-affinity), vòng lặp thông điệp được chạy trên một Thread riêng biệt thay vì chặn `MainActor` của Swift:

```swift
// Chạy trong một Dedicated Thread
var msg = MSG()
while GetMessageW(&msg, nil, 0, 0) {
  TranslateMessage(&msg)
  DispatchMessageW(&msg)
}
```

### B. Khởi tạo WebView2 qua COM
App nạp thư viện `WebView2Loader.dll` và gọi COM Interface:
1. `CreateCoreWebView2EnvironmentWithOptions`: Khởi tạo môi trường WebView2.
2. `CreateCoreWebView2Controller`: Gắn instance WebView vào handle cửa sổ (`HWND`).
3. Đặt kích thước theo `RECT` của cửa sổ cha khi nhận sự kiện `WM_SIZE`.

### C. Giao tiếp 2 chiều giữa JavaScript và Swift Host:
1. **JS gửi về Swift (Incoming):**
   - **Windows:** Gọi `window.chrome.webview.postMessage(jsonString)`.
   - **macOS:** Gọi `window.webkit.messageHandlers.bridgeDesktopUI.postMessage(jsonString)`.
   - Phía Swift đăng ký callback `ICoreWebView2WebMessageReceivedEventHandler` để parse JSON và điều hướng lệnh (`BridgeDesktopCommandEnvelope`).
2. **Swift cập nhật Web UI (Outgoing):**
   - Không reload lại trang mà dùng kỹ thuật **State Diff Patching**.
   - Swift gọi: `webview.ExecuteScript("window.__BRIDGE_DISPATCH_PATCH__(\(patchJSON))")`.
   - Frontend JS nhận diff và cập nhật các node DOM tương ứng.

---

## 4. Trừu Tượng Hóa Hệ Thống (Platform Seams Pattern)

Để mã nguồn nghiệp vụ độc lập 100% với hệ điều hành, tạo các Swift Protocol tại tầng Core, sau đó viết implementation riêng cho từng nền tảng:

| Khả năng | macOS Implementation | Windows Implementation | File mẫu |
| :--- | :--- | :--- | :--- |
| **Giao tiếp IPC** | `NSXPC` (Mach Service) | `Named Pipe` (`\\.\pipe\...` frame: kind + u32le + payload) | `BridgeIPC/` |
| **Lưu mật khẩu an toàn** | Apple Keychain (`KeychainSecretStore`) | Windows Credential Manager (`CredReadW`/`CredWriteW`) | `BridgeSecurity/` |
| **Bảo vệ duyệt File** | POSIX `openat` + cờ `O_NOFOLLOW` | `CreateFileW` + kiểm tra Reparse Point (chống Symlink attack) | `BridgeFiles/` |
| **Tự khởi động cùng OS** | `SMAppService` (LaunchAgent) | Registry `HKCU\Software\Microsoft\Windows\CurrentVersion\Run` | `BridgeWindowsShell/` |
| **Mã hóa băm (Crypto)** | CryptoKit (Apple native) | `swift-crypto` (BoringSSL backend) | `BridgeSecurity/` |

---

## 5. Quy Trình Build & Đóng Gói Windows (Packaging Pipeline)

### Bước 1: Môi trường yêu cầu trên Windows
- **Swift Toolchain:** Swift 6.3+ (tải từ `swift.org`).
- **Build Tools:** Visual Studio 2022 (MSVC v143 + Windows 11 SDK).
- **Thư viện C:** Cài đặt qua `vcpkg` (ví dụ `vcpkg install sqlite3:x64-windows`).
- **Inno Setup:** Bản 7.x (dùng `ISCC.exe` đóng gói installer).

### Bước 2: Biên dịch bằng Swift CLI
Chạy lệnh biên dịch Release thông qua PowerShell (`Scripts/build-windows.ps1`):
```powershell
# Nạp biến môi trường INCLUDE và LIB từ MSVC và vcpkg
$swiftArgs = @("-c", "release", "-Xcc", "-I$vcpkgInc", "-Xlinker", "/LIBPATH:$vcpkgLib")
swift build @swiftArgs --product codex-bridge-service
swift build @swiftArgs --product codex-bridge-windows-app
```

### Bước 3: Thu thập DLL và đóng gói Portable Bundle
Tạo thư mục phân phối `windows-dist/x64/` gồm:
1. `codex-bridge-service.exe` & `codex-bridge-windows-app.exe`.
2. `WebView2Loader.dll` (lấy từ Microsoft.Web.WebView2 NuGet package).
3. `sqlite3.dll` (từ `vcpkg/installed/x64-windows/bin`).
4. **Swift Runtime DLLs:** `swiftCore.dll`, `swiftWinSDK.dll`, `swift_Concurrency.dll`,... (trích xuất từ bộ cài Swift toolchain).
5. **VC++ Runtime DLLs:** `msvcp140.dll`, `vcruntime140.dll`, `vcruntime140_1.dll`.

### Bước 4: Tạo Installer (Inno Setup)
Viết script `.iss` để đóng gói toàn bộ thư mục thành file `Setup.exe`.
- Kiểm tra registry xem máy người dùng đã có `Microsoft Edge WebView2 Runtime` chưa; nếu chưa, mở URL tải tự động.
- Cấu hình tự động dừng tiến trình cũ trước khi ghi đè file (`codex-bridge-service.exe --shutdown`).

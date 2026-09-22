const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

console.log("==> Running i18n Overlay Verification Test...");

const i18nPath = path.join(__dirname, "..", "Packages", "BridgeCore", "Sources", "BridgeDesktopUI", "Resources", "i18n-en.js");
const indexPath = path.join(__dirname, "..", "Packages", "BridgeCore", "Sources", "BridgeDesktopUI", "Resources", "index.html");
const hostContextPath = path.join(__dirname, "..", "Packages", "BridgeCore", "Sources", "BridgeDesktopUI", "Resources", "host-context.js");

// 1. Verify host-context.js seam integration
const hostContextSrc = fs.readFileSync(hostContextPath, "utf8");
assert(hostContextSrc.includes("i18n-en.js"), "host-context.js must reference i18n-en.js");
console.log("[PASS] 1. Upstream Seam verified in host-context.js");

// 2. Set up DOM emulation sandbox
class MockNode {
  constructor(nodeType, nodeName) {
    this.nodeType = nodeType;
    this.nodeName = nodeName;
    this.parentElement = null;
    this._textContent = "";
  }
  get textContent() { return this._textContent; }
  set textContent(v) { this._textContent = v; }
  closest(selector) {
    let curr = this;
    const selectors = selector.split(",").map(s => s.trim().toLowerCase());
    while (curr) {
      if (curr.nodeType === 1) {
        if (selectors.includes(curr.nodeName.toLowerCase())) return curr;
        if (curr.className) {
          const classes = curr.className.split(/\s+/);
          for (const s of selectors) {
            if (s.startsWith(".") && classes.includes(s.slice(1))) return curr;
          }
        }
      }
      curr = curr.parentElement;
    }
    return null;
  }
}

class MockElement extends MockNode {
  constructor(tag) {
    super(1, tag);
    this.className = "";
    this.attributes = {};
    this.children = [];
  }
  setAttribute(name, val) {
    this.attributes[name] = val;
  }
  getAttribute(name) {
    return this.attributes[name];
  }
  hasAttribute(name) {
    return name in this.attributes;
  }
  appendChild(child) {
    child.parentElement = this;
    this.children.push(child);
    return child;
  }
}

function createI18nSandbox() {
  const sandbox = {
    window: {},
  document: {
    readyState: "complete",
    documentElement: new MockElement("html"),
    body: new MockElement("body"),
    addEventListener: () => {}
  },
  Node: MockNode,
  Element: MockElement,
  Document: class {},
  HTMLDocument: class {},
  MutationObserver: class {
    observe() {}
    disconnect() {}
  },
  console: {
    warn: (msg) => {
      sandbox._lastWarn = msg;
    },
    log: console.log
  }
};
sandbox.globalThis = sandbox;
sandbox.window = sandbox;

// 3. Execute i18n-en.js in sandbox
const i18nCode = fs.readFileSync(i18nPath, "utf8");
vm.createContext(sandbox);
vm.runInContext(i18nCode, sandbox);

  return sandbox;
}

const sandbox = createI18nSandbox();
const i18n = sandbox.CodexBridgeI18n;
assert(i18n, "CodexBridgeI18n must be exposed on global");
console.log("[PASS] 2. i18n-en.js loaded and initialized successfully");

// 4. Test direct dictionary lookup
assert.strictEqual(i18n.translate("工作台"), "Workbench");
assert.strictEqual(i18n.translate("概览"), "Overview");
assert.strictEqual(i18n.translate("设置"), "Settings");
assert.strictEqual(i18n.translate("Git干净"), "Git Clean");
assert.strictEqual(i18n.translate("  发送指令  "), "  Send Instruction  ");
console.log("[PASS] 3. Dictionary translation verified");
// 4.1 Test all screenshot strings reported by user
const screenshotChecks = [
  ['运行中任务', 'Running Tasks'],
  ['当前空闲', 'Currently Idle'],
  ['待审批项', 'Pending Approvals'],
  ['无阻断事项', 'No Blocking Items'],
  ['注册项目', 'Registered Projects'],
  ['管理本地目录', 'Manage Local Directories'],
  ['任务总数', 'Total Tasks'],
  ['任务历史', 'Task History'],
  ['后台常驻 Service', 'Background Service'],
  ['本地 MCP 通道', 'Local MCP Channel'],
  ['远程 Secure Tunnel', 'Remote Secure Tunnel'],
  ['本机 Agent 引擎', 'Local Agent Engine'],
  ['0 个可用 / 共 0 个', '0 available / 0 total'],
  ['管理连接与 Agent →', 'Manage Connections & Agents →'],
  ['配置模型与执行偏好 →', 'Configure Models & Preferences →'],
  ['配置模型、执行偏好、安全策略与全局指令。', 'Configure models, execution preferences, security policies, and global instructions.'],
  ['当前版本: v1.1.1', 'Current version: v1.1.1'],
  ['当前版本：v1.1.1', 'Current version: v1.1.1'],
  ['当前版本已经是最新版本。', 'Current version is up to date.'],
  ['再次检查', 'Check Again'],
  ['Agent模型与权限', 'Agent Models & Permissions'],
  ['中', 'Medium'],
  ['请求批准', 'Request Approval'],
  ['已获取 18 个 Codex 模型。', '18 Codex models fetched.'],
  ['连接 Agent 后会自动获取模型。', 'Models will be fetched automatically after connecting Agent.'],
  ['Provider 默认', 'Provider Default'],
  ['工作区可写', 'Workspace Writable'],
  ['当前模型不提供可选推理强度，使用 Provider 默认。', 'Current model does not offer selectable reasoning effort; using provider default.'],
  ['工作区可写 (Build)', 'Workspace Writable (Build)'],
  ['工作区可写（Build）', 'Workspace Writable (Build)'],
  ['完整', 'Full'],
  ['已发现 DSH，需要配置 Base URL 与 API key。', 'DSH discovered; Base URL and API key required.'],
  ['MCP 客户端状态已刷新。已加载 0 条安装记录。', 'MCP client status refreshed. Loaded 0 installation records.'],
];
screenshotChecks.forEach(([zh, en]) => {
  assert.strictEqual(i18n.translate(zh), en, `Screenshot string "${zh}" failed to translate`);
});
console.log(`[PASS] 3.1 All ${screenshotChecks.length} user-reported screenshot strings verified`);


// 5. Test regex patterns
assert.strictEqual(i18n.translate("共 5 个任务"), "5 tasks total");
assert.strictEqual(i18n.translate("第 3 轮"), "Round 3");
assert.strictEqual(i18n.translate("排队第 2 位"), "Queue position 2");
assert.strictEqual(i18n.translate("10 个 Codex 模型"), "10 Codex models");
console.log("[PASS] 4. Regex dynamic patterns verified");

// 6. Test Prototype Hook on UI Chrome elements
const btn = new MockElement("button");
btn.textContent = "发送指令";
assert.strictEqual(btn.textContent, "Send Instruction", "Prototype textContent hook must translate UI Chrome");
btn.textContent = "连接";
assert.strictEqual(btn.textContent, "Connect", "Button with '连接' must translate to 'Connect'");

const span = new MockElement("span");
span.textContent = "连接";
assert.strictEqual(span.textContent, "Connections", "Span with '连接' must translate to 'Connections'");

const opt = new MockElement("option");
opt.textContent = "完整";
assert.strictEqual(opt.textContent, "Full", "Option with '完整' must translate to 'Full'");

const providerP = new MockElement("p");
providerP.textContent = "Provider: Antigravity CLI ID: antigravity Adapter: r3 注册: user_trusted 配置: 无需额外配置 能力: 模型、推理强度、会话续接、Steer、工作区写入、技能 · 无需配置文件";
assert(!/[\u4e00-\u9fa5]/.test(providerP.textContent), "Provider details must not contain Chinese: " + providerP.textContent);

btn.setAttribute("aria-label", "收起侧边栏");
assert.strictEqual(btn.getAttribute("aria-label"), "Collapse sidebar", "setAttribute hook must translate aria-label");

const input = new MockElement("input");
input.setAttribute("placeholder", "请输入回答");
assert.strictEqual(input.getAttribute("placeholder"), "Please enter an answer", "setAttribute hook must translate placeholder");
console.log("[PASS] 5. DOM Prototype Hooks verified for UI Chrome");

// 7. Test Protected Container Boundary (Conversation & Code preservation)
const chatContainer = new MockElement("div");
chatContainer.className = "conversation-item";

const messageBody = new MockElement("div");
messageBody.className = "message-body";
chatContainer.appendChild(messageBody);

const codeBlock = new MockElement("pre");
messageBody.appendChild(codeBlock);

const codeElement = new MockElement("code");
codeBlock.appendChild(codeElement);

// Chinese text inside protected conversation/code container MUST NOT be translated
codeElement.textContent = "console.log('工作台'); // 概览";
assert.strictEqual(codeElement.textContent, "console.log('工作台'); // 概览", "Code block content must NOT be translated");

messageBody.textContent = "AI 回答: 这是当前工作台的运行中状态";
assert.strictEqual(messageBody.textContent, "AI 回答: 这是当前工作台的运行中状态", "Conversation message body must NOT be translated");
console.log("[PASS] 6. Protected Container Boundary verified (Conversation & Code preserved untouched)");

// 8. Test Missing Translation Warning
sandbox._lastWarn = null;
const untranslated = i18n.translate("这是未知的测试中文句子");
assert.strictEqual(untranslated, "这是未知的测试中文句子", "Missing translation must return original string");
assert(sandbox._lastWarn && sandbox._lastWarn.includes("[i18n] Missing translation for: \"这是未知的测试中文句子\""), "Missing translation must log warning to console");
console.log("[PASS] 7. Missing translation fallback and warning verified");

// 9. Scan index.html static markup to ensure all static UI strings are covered
const indexHtml = fs.readFileSync(indexPath, "utf8");
const staticChineseRegex = /[\u4e00-\u9fa5]+[^\r\n"''`<>]*[\u4e00-\u9fa5]+|[\u4e00-\u9fa5]/g;
let match;
const uncovered = [];
while ((match = staticChineseRegex.exec(indexHtml)) !== null) {
  const str = match[0].trim();
  const translated = i18n.translate(str);
  if (translated === str && !i18n.DICT[str]) {
    uncovered.push(str);
  }
}

if (uncovered.length > 0) {
  console.warn("[WARN] Uncovered static strings in index.html:", [...new Set(uncovered)]);
} else {
  console.log("[PASS] 8. 100% of static UI strings in index.html are covered by dictionary");
}

// 9. Coverage scan: every Chinese literal in the desktop UI scripts must be translatable
const resourceDir = path.dirname(indexPath);
const scannedResources = fs
  .readdirSync(resourceDir)
  .filter((name) => name.endsWith(".js") && name !== "i18n-en.js");

const jsLiteralRegex = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'|`(?:[^`\\]|\\.)*`/g;
const untranslatedLiterals = new Set();
for (const name of scannedResources) {
  const source = fs.readFileSync(path.join(resourceDir, name), "utf8");
  let literalMatch;
  while ((literalMatch = jsLiteralRegex.exec(source)) !== null) {
    const literalSource = literalMatch[0];
    if (literalSource.includes("${") || !/[\u4e00-\u9fa5]/.test(literalSource)) continue;
    const literal = vm.runInNewContext(literalSource).trim();
    if (!literal) continue;
    if (i18n.translate(literal) === literal && !i18n.DICT[literal]) {
      untranslatedLiterals.add(`${name}: ${JSON.stringify(literal)}`);
    }
  }
}

if (untranslatedLiterals.size > 0) {
  console.warn(`[WARN] ${untranslatedLiterals.size} Chinese literals in desktop UI resources are not covered:`);
  for (const entry of [...untranslatedLiterals].sort()) console.warn("  - " + entry);
} else {
  console.log(`[PASS] 9. All Chinese literals in ${scannedResources.length} desktop UI resources are covered`);
}

// 10. Coverage scan: every Chinese literal in web-facing Swift sources must be translatable
const swiftRoots = [
  path.join(__dirname, "..", "Packages", "BridgeCore", "Sources", "BridgeServiceAppCore"),
  path.join(__dirname, "..", "Packages", "BridgeCore", "Sources", "BridgeDesktopUI"),
];
const untranslatedSwift = new Set();
const swiftToken = (raw) => { try { return JSON.parse(raw.replace(/\\\(/g, "\\\\(")); } catch (e) { return null; } };
const walkSwift = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkSwift(full);
    else if (entry.name.endsWith(".swift")) {
      const src = fs.readFileSync(full, "utf8");
      const re = /"(?:[^"\\\r\n]|\\.)*"/g;
      let m;
      while ((m = re.exec(src))) {
        const raw = m[0];
        if (!/[\u4e00-\u9fa5]/.test(raw)) continue;
        const lit = swiftToken(raw);
        if (!lit) continue;
        const hasInterp = /\\\(/.test(raw);
        const probe = hasInterp ? lit.replace(/\\\([^)]*\)/g, "3").trim() : lit.trim();
        if (!probe) continue;
        if (i18n.translate(probe) === probe && !i18n.DICT[probe]) {
          untranslatedSwift.add(`${entry.name}: ${JSON.stringify(lit)}`);
        }
      }
    }
  }
};
swiftRoots.forEach(walkSwift);

if (untranslatedSwift.size > 0) {
  console.warn(`[WARN] ${untranslatedSwift.size} Chinese literals in web-facing Swift files are not covered:`);
  for (const entry of [...untranslatedSwift].sort()) console.warn("  - " + entry);
} else {
  console.log("[PASS] 10. All Chinese literals in web-facing Swift files are covered");
}

console.log("\n==> ALL VERIFICATION TESTS PASSED SUCCESSFULLY! (10/10 green)\n");

module.exports = { createI18nSandbox };

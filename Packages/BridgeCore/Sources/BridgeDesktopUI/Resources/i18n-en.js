(function (global) {
  "use strict";

  if (global.__codexBridgeI18nLoaded) return;
  global.__codexBridgeI18nLoaded = true;

  var DICT = {
    "概览": "Overview",
    "工作台": "Workbench",
    "项目": "Projects",
    "日志": "Logs",
    "连接": "Connections",
    "设置": "Settings",
    "主导航": "Main Navigation",
    "页面导航": "Page Navigation",
    "收起侧边栏": "Collapse sidebar",
    "展开侧边栏": "Expand sidebar",
    "等待连接状态": "Waiting for connection status",
    "刷新状态": "Refresh status",
    "刷新": "Refresh",
    "刷新中": "Refreshing...",
    "正在读取本机 Service 状态…": "Loading local service status...",
    "正在读取本机 Service 状态": "Loading local service status",
    "后台 Service 不可用": "Background Service Unavailable",
    "无法读取本机 Service 状态。": "Cannot read local service status.",
    "待处理本机审批": "Pending Local Approvals",
    "连接中…": "Connecting...",
    "任务与项目统计": "Task & Project Statistics",
    "连接与服务拓扑全景": "Connection & Service Topology Overview",
    "最近任务": "Recent Tasks",
    "最近连接": "Recent Connections",
    "进入工作台": "Open Workbench",
    "在外部浏览器打开": "Open in External Browser",
    "连接与服务拓扑": "Connection & Service Topology",
    "本机 Service": "Local Service",
    "本机 MCP": "Local MCP",
    "本机 Service 已连接": "Local Service Connected",
    "本机 Service 未连接": "Local Service Disconnected",
    "本机 Service 正在连接": "Local Service Connecting...",
    "活动任务": "Active Tasks",
    "累计任务": "Total Tasks",
    "项目总数": "Total Projects",
    "个": "",
    "项": "items",
    "条": "",
    "轮": "",
    "全部": "All",
    "全部项目": "All Projects",
    "内置 ChatGPT 浏览器": "Embedded ChatGPT Browser",
    "内置浏览器": "Embedded Browser",
    "由宿主加载真实 ChatGPT 工作区": "Host loads actual ChatGPT workspace",
    "调整网页与 Agent 展示区域宽度": "Resize Browser and Agent Panes",
    "任务检查器": "Task Inspector",
    "工作台项目": "Workbench Project",
    "选择项目": "Select Project",
    "请选择一个项目": "Please select a project",
    "未命名会话": "Untitled Thread",
    "当前 Agent 会话": "Current Agent Thread",
    "选择 Agent 会话": "Select Agent Thread",
    "该项目目前没有 Agent 会话记录": "No agent thread records for this project",
    "该项目目前没有可读取的": "No readable items for this project",
    "刷新当前网页": "Refresh web page",
    "后退": "Back",
    "前进": "Forward",
    "操作网页": "Page Actions",
    "新会话": "New Thread",
    "重新开始": "Restart",
    "清空": "Clear",
    "清除": "Clear",
    "中断": "Interrupt",
    "中断请求中": "Interrupting...",
    "停止": "Stop",
    "发送": "Send",
    "发送指令": "Send Instruction",
    "输入下一条指令，沿用当前会话上下文": "Enter next instruction, continuing current session context",
    "加载更早的消息": "Load earlier messages",
    "正在加载更早的消息": "Loading earlier messages...",
    "正在加载更早消息": "Loading earlier messages...",
    "正在同步对话内容": "Syncing conversation content...",
    "刷新当前对话": "Refresh conversation",
    "刷新模型": "Refresh Models",
    "刷新模型列表": "Refresh Model List",
    "获取模型": "Fetch Models",
    "获取中": "Fetching...",
    "模型": "Model",
    "执行模型": "Execution Model",
    "默认模型": "Default Model",
    "执行推理强度": "Reasoning Effort",
    "推理强度": "Reasoning Effort",
    "快速模式": "Fast Mode",
    "完整模式": "Full Mode",
    "安全模式": "Safe Mode",
    "当前选中的默认模型不支持快速模式": "Selected default model does not support Fast Mode",
    "当前模型不提供可选推理强度，使用 Provider 默认": "Current model does not offer selectable reasoning effort; using provider default",
    "推理选项由 DSH 适配器提供，可能对不同模型返回相同选项；模型实际支持以 API 为准": "Reasoning options provided by DSH adapter; actual support depends on API",
    "连接 Agent 后会自动获取模型": "Models will be fetched automatically after connecting Agent",
    "删除会话": "Delete Thread",
    "删除会话？\\\\n这会删除 Codex Bridge 保存的全部轮次任务、事件和对话记录，无法撤销": "Delete thread?\\\\nThis will permanently delete all task runs, events, and conversation history saved by Codex Bridge. This cannot be undone.",
    "删除此会话的全部任务与记录": "Delete all tasks and records for this thread",
    "确认删除": "Confirm Delete",
    "使用原始指令在当前项目开启全新会话": "Start a new thread in current project using initial instructions",
    "按 Agent 分组查看项目会话与任务": "View project threads and tasks grouped by Agent",
    "Git干净": "Git Clean",
    "干净": "Clean",
    "有未提交改动": "Dirty (Uncommitted Changes)",
    "非Git项目": "Non-Git Project",
    "非 Git 项目": "Non-Git Project",
    "检查失败": "Check Failed",
    "就绪": "Ready",
    "运行中": "Running",
    "进行中": "In Progress",
    "处理中": "Processing",
    "等待中": "Waiting",
    "等待": "Waiting",
    "已完成": "Completed",
    "失败": "Failed",
    "已取消": "Cancelled",
    "取消中": "Cancelling...",
    "取消排队": "Cancel Queue",
    "已拒绝": "Denied",
    "已连接": "Connected",
    "未连接": "Disconnected",
    "断开连接": "Disconnect",
    "断开": "Disconnect",
    "连接中": "Connecting...",
    "请求中": "Requesting...",
    "未知": "Unknown",
    "状态未知": "Unknown Status",
    "未配置": "Unconfigured",
    "尚未就绪": "Not Ready",
    "未识别": "Unrecognized",
    "不可用": "Unavailable",
    "未协商": "Not Negotiated",
    "未发现": "Not Found",
    "未注册": "Unregistered",
    "未记录": "Not Recorded",
    "已启用": "Enabled",
    "已停用": "Disabled",
    "启用": "Enable",
    "停用": "Disable",
    "已获取": "Fetched",
    "已注册": "Registered",
    "已发现": "Discovered",
    "已发送": "Sent",
    "暂无": "None",
    "暂无说明": "No description",
    "当前正在执行": "Currently executing",
    "当前轮结束后继续": "Continue after current round",
    "当前轮完成后继续": "Will continue after current round completes",
    "当前任务结束后会继续安装": "Installation will proceed after current task finishes",
    "允许": "Allow",
    "拒绝": "Deny",
    "仅本次允许": "Allow Once",
    "本次会话允许": "Allow for Session",
    "允许此类命令": "Always Allow This Command",
    "允许此工具并写入 AGY Global 配置": "Allow tool and update AGY Global config",
    "安全审批策略": "Security Approval Policy",
    "客户端工具权限": "Client Tool Permissions",
    "工具权限被拒绝": "Tool permission denied",
    "工具调用": "Tool Call",
    "执行过程": "Execution Progress",
    "分析过程": "Analysis Progress",
    "等待 ChatGPT 指令": "Waiting for ChatGPT instruction",
    "等待执行": "Waiting for execution",
    "等待引擎状态": "Waiting for engine status",
    "等待本机": "Waiting for host",
    "等待本机 Service 提供浏览器状态": "Waiting for local service browser state",
    "等待|审批": "Waiting | Approval Required",
    "待确认规则": "Pending Rules",
    "生成允许规则": "Generate Allow Rule",
    "脱离沙箱": "Escape Sandbox",
    "需要脱离沙箱的目标": "Targets requiring sandbox escape",
    "确认交接": "Confirm Handoff",
    "交接内容": "Handoff Summary",
    "交给其他": "Handoff to Agent",
    "检查并编辑要交给目标 Agent 的摘要": "Review and edit the summary to hand off to target Agent",
    "提交前可编辑交接摘要；原会话记录会保留": "You can edit the handoff summary before submitting; original thread history will be preserved",
    "交接内容不能包含 NUL 字符，且不能超过 32768 字节": "Handoff content cannot contain NUL characters and must not exceed 32768 bytes",
    "指令不能包含 NUL 字符，且不能超过 32768 字节": "Instruction cannot contain NUL characters and must not exceed 32768 bytes",
    "内容过长或包含 NUL 字符": "Content too long or contains NUL characters",
    "提交回答": "Submit Answer",
    "请输入回答": "Please enter an answer",
    "其他回答": "Other Answers",
    "未收到可填写的问题": "No fillable questions received",
    "本次自动批准 AGY 工具并允许网络": "Auto-approve AGY tools & allow network this time",
    "本次自动批准 AGY 工具并允许网络？\\\\n\\\\n它仍受项目 Read Only/Write 硬策略约束，不会修改 AGY Global 配置": "Auto-approve AGY tools and allow network for this run?\\\\n\\\\nSubject to project Read Only/Write hard policy; will not modify AGY Global config.",
    "保存高风险 AGY Global 规则？\\\\n\\\\n该规则会影响使用同一 HOME 的其他 AGY CLI 任务。Bridge 的项目 Read Only/Write 硬策略保持不变": "Save high-risk AGY Global rule?\\\\n\\\\nThis will affect other AGY CLI tasks sharing HOME. Bridge project Read Only/Write policy remains enforced.",
    "写入 AGY Global 允许规则？\\\\n\\\\n将写入": "Write AGY Global allow rule?\\\\n\\\\nWill write to: ",
    "这会修改当前用户的 AGY Global 配置，并影响使用同一 HOME 的其他 AGY CLI 任务。Bridge 的项目 Read Only/Write 硬策略保持不变": "This modifies current user's AGY Global config and affects other AGY CLI tasks sharing HOME. Bridge Read Only/Write hard policy remains enforced.",
    "这会影响使用同一 HOME 的其他 AGY CLI 任务": "This affects other AGY CLI tasks sharing the same HOME",
    "无头任务需要自动通过工具执行。是否允许将本机 AGY 全局工具策略设为 Always Proceed（总是通过）并连接？这会影响使用同一配置的其他 AGY CLI 任务": "Headless tasks require auto-approving tools. Allow setting local AGY global tool policy to Always Proceed? This affects other AGY CLI tasks sharing this config.",
    "添加项目": "Add Project",
    "从 Codex Bridge 移除项目": "Remove project from Codex Bridge",
    "移除项目": "Remove Project",
    "尚未注册项目": "No registered projects",
    "已注册项目": "Registered Projects",
    "工作区": "Workspace",
    "访问与执行权限": "Access & Execution Permissions",
    "访问权限": "Access Permissions",
    "访问模式": "Access Mode",
    "只读": "Read-only",
    "可写": "Read & Write",
    "白名单": "Whitelist",
    "黑名单": "Blacklist",
    "本地命令": "Local Commands",
    "环境变量": "Environment Variables",
    "保存权限": "Save Permissions",
    "从左侧列表选择目录后，可以配置访问权限并查看项目资源": "Select a directory from the left list to configure permissions and view resources",
    "只有明确注册的本地目录才会暴露给 MCP 客户端": "Only explicitly registered local directories will be exposed to MCP clients",
    "项目可读取的技能清单；展开单项查看说明": "Skills list accessible to project; expand items for details",
    "规则适用于所有项目。优先级：黑名单 → 白名单 → 安全模式内置规则。命令按参数前缀匹配；项目访问权限和操作审批仍生效": "Rules apply to all projects. Precedence: Blacklist -> Whitelist -> Safe Mode rules. Commands match by argument prefix; permissions & approvals remain enforced.",
    "输入一条命令后点击添加，例如 git status 或 npm test。带空格的参数使用引号，不支持管道和重定向": "Enter a command then click Add, e.g. git status or npm test. Quote arguments with spaces; pipes and redirection unsupported.",
    "命令需填写绝对路径；参数每行一个": "Command requires absolute path; one argument per line",
    "参数（每行一个": "Arguments (one per line",
    "添加一行": "Add Row",
    "有效能力": "Effective Capabilities",
    "当前安装的有效能力不包含工作区写入，将按只读执行": "Current installation does not include workspace write capability; running read-only",
    "项目忙时排队": "Queue when project is busy",
    "本地磁盘文件不会受到影响": "Local disk files will not be affected",
    "设置页暂不可用": "Settings page currently unavailable",
    "全局自定义指令": "Global Custom Instructions",
    "保存指令": "Save Instructions",
    "保存后，将在新任务或继续对话时生效": "Changes take effect on new tasks or continued conversations",
    "发送给GPT/Qwen的mcp内置指令": "Built-in MCP instructions sent to GPT/Qwen",
    "这里只控制 ChatGPT/Qwen 客户端收到的 MCP 工具集合；Agent 任务仍单独受工作台只读/可写权限控制": "Controls MCP tool set exposed to ChatGPT/Qwen; Agent tasks remain governed by Workbench permissions",
    "的mcp插件权限与指令": " MCP plugin permissions and instructions",
    "本机 Agent 引擎连接": "Local Agent Engine Connections",
    "执行引擎": "Execution Engines",
    "首次使用时自动查找本机安装。安装新的 Agent 后，点击“扫描 Agent”更新列表": "Automatically searches for local installations on first run. After installing new Agents, click 'Scan Agents' to refresh",
    "扫描 Agent": "Scan Agents",
    "扫描": "Scan",
    "已发现本机安装，点击连接完成验证": "Local installation found; click Connect to verify",
    "本机未发现可用安装": "No available installation found on this machine",
    "连接本机": "Connect Local",
    "重试": "Retry",
    "验证命令": "Verify Command",
    "高级：按路径登记已有安装": "Advanced: Register existing installation by path",
    "由系统弹窗选取，或手动输入绝对路径": "Select via system dialog or manually enter absolute path",
    "可执行路径": "Executable Path",
    "配置路径": "Configuration Path",
    "显示名称": "Display Name",
    "按上方路径登记": "Register via path above",
    "弹窗选择文件登记": "Select File to Register...",
    "移除登记": "Remove Registration",
    "移除这条 Agent 登记？本机文件不会被删除": "Remove this Agent registration? Local files will not be deleted.",
    "确认新的 Agent 文件并重新检查": "Confirm new Agent files and recheck",
    "确认更新并检查": "Confirm update and check",
    "确认更新并连接": "Confirm update and connect",
    "需要确认本机 Agent 文件已由你更新": "Requires confirmation that local Agent files have been updated by you",
    "需确认更新": "Update Confirmation Required",
    "连接前需要同意为 AGY 启用无头模式": "Consent required to enable headless mode for AGY before connecting",
    "当前 Provider 无需配置文件": "Current provider does not require a config file",
    "无需配置文件": "No config file required",
    "保存模型偏好": "Save Model Preferences",
    "选择后自动保存": "Auto-saved on selection",
    "尚未读取 Agent 默认偏好": "Agent default preferences not loaded",
    "退出 App 后继续运行": "Keep running in background after closing app",
    "退出 App 后继续运行服务": "Keep running service after app exits",
    "开启后可在退出 App 后继续运行后台 Service，远程给本机发送任务时需同时将“远程任务启动”设为“自动批准": "Enable to keep background Service running after exiting App; set 'Remote Task Launch' to 'Auto Approve' to receive remote tasks",
    "远程任务启动": "Remote Task Launch",
    "远程任务接收": "Remote Task Reception",
    "自动批准": "Auto Approve",
    "手动确认": "Manual Approval",
    "打开登录项设置": "Open Login Items Settings",
    "连接页暂不可用": "Connections page currently unavailable",
    "连接本机 Service 后，可以管理 MCP 客户端、Codex、Secure Tunnel 与": "Connect to local Service to manage MCP clients, Codex, Secure Tunnel and ",
    "连接本机 Service 后，可以配置模型、安全审批与后台服务": "Connect to local Service to configure models, security approvals, and background service",
    "本地 MCP 客户端通道": "Local MCP Client Channels",
    "服务地址与客户端凭证由本机 Service 管理": "Service addresses and client credentials are managed by local Service",
    "复制 Qwen JSON 配置": "Copy Qwen JSON Config",
    "重新生成凭证": "Regenerate Credentials",
    "重新生成这个 MCP 客户端的凭证？现有配置将立即失效": "Regenerate credentials for this MCP client? Existing configuration will expire immediately.",
    "重新生成本地 MCP Endpoint？现有客户端地址将立即失效": "Regenerate local MCP Endpoint? Existing client addresses will expire immediately.",
    "重新生成": "Regenerate",
    "清除 Secure Tunnel 配置？\\\\n这会移除已保存的 Runtime Key 并重置 Tunnel 绑定": "Clear Secure Tunnel configuration?\\\\nThis will remove saved Runtime Key and reset Tunnel binding.",
    "清除配置": "Clear Configuration",
    "已就绪，可按需连接远程通道": "Ready to connect to remote tunnel on demand",
    "辅助工具缺失，本地 MCP 仍可用，但远程隧道不能启动": "Helper tools missing; local MCP available but remote tunnel cannot start",
    "当前环境没有可用 Helper，远程隧道不能启动": "No available Helper in current environment; remote tunnel cannot start",
    "需要检查凭据，请核对 Tunnel ID、Runtime Key 以及当前工作区权限": "Credential check required; verify Tunnel ID, Runtime Key, and current workspace permissions",
    "本地 MCP 端口被占用；不会静默更换地址，请主动生成新的": "Local MCP port in use; will not change silently, please generate a new endpoint",
    "保存并启动连接": "Save and Start Connection",
    "更新配置": "Update Configuration",
    "远程 AI 客户端": "Remote AI Clients",
    "服务仅在任务允许联网时连接": "Service connects only when task permits network",
    "尚未添加 MCP 服务": "No MCP services added",
    "删除这个 MCP 服务": "Delete this MCP service",
    "传输方式": "Transport",
    "请求头": "Headers",
    "网络": "Network",
    "隧道": "Tunnel",
    "已配置，留空保留": "Configured; leave blank to keep",
    "日志页暂不可用": "Logs page currently unavailable",
    "连接本机 Service 后，任务事件会显示在这里": "Connect to local Service to view task events here",
    "搜索日志摘要、命令或文件": "Search log summary, command, or file...",
    "更新时间": "Update Time",
    "更新进度": "Update Progress",
    "失败代码": "Error Code",
    "涉及路径": "Affected Paths",
    "变更文件": "Changed Files",
    "写入文件": "Write Files",
    "读取文件": "Read Files",
    "读取网页": "Read Web Page",
    "关闭命令执行": "Close Command Execution",
    "应用更新": "Application Updates",
    "检查更新": "Check for Updates",
    "检查更新失败": "Check for updates failed",
    "已是最新版本": "Already up to date",
    "当前版本已经是最新版本": "Current version is up to date",
    "发现新版本": "New version available",
    "新版已发布，点击立即更新": "New version released; click to update now",
    "可更新到": "Update available: ",
    "立即更新": "Update Now",
    "重试更新": "Retry Update",
    "重试检查": "Retry Check",
    "关闭提示": "Dismiss Notice",
    "关闭更新提示": "Dismiss update notification",
    "启动 App 时会自动检查更新": "Automatically checks for updates on app startup",
    "正在检查更新": "Checking for updates",
    "正在下载更新": "Downloading update",
    "正在安装更新": "Installing update",
    "正在下载": "Downloading...",
    "正在从发布源读取最新版本": "Checking release source for latest version...",
    "安装完成后 App 会重新启动": "App will restart once installation completes",
    "下载完成后会继续安装": "Installation will continue after download finishes",
    "更新失败": "Update failed",
    "可以重试下载和安装": "You can retry downloading and installing",
    "可以重试检查更新": "You can retry checking for updates",
    "等待任务完成后更新": "Waiting for task completion before update",
    "正在准备": "Preparing...",
    "正在启动": "Starting...",
    "正在处理任务": "Processing task...",
    "正在处理安装": "Processing installation...",
    "正在查找": "Searching...",
    "正在查找本机安装": "Searching for local installations...",
    "正在更新本机连接状态": "Updating local connection status...",
    "正在保存": "Saving...",
    "正在获取 Codex 模型": "Fetching Codex models...",
    "正在获取模型推理强度": "Fetching model reasoning effort...",
    "正在读取对话": "Reading conversation...",
    "正在从本机 Service 读取偏好设置": "Reading preferences from local Service...",
    "正在从本机 Service 读取执行事件": "Reading execution events from local Service...",
    "正在从本机 Service 读取连接状态": "Reading connection status from local Service...",
    "正在从本机 Service 读取项目状态": "Reading project status from local Service...",
    "查找失败": "Search failed",
    "查看详情": "View Details",
    "模型目录读取失败": "Failed to read model catalog",
    "模型目录失败": "Model catalog failed",
    "模型获取失败": "Failed to fetch models",
    "模型目录": "Model Catalog",
    "权限已更新，仅对新任务生效。请重新提交或续接任务": "Permissions updated; applies to new tasks only. Please resubmit or continue task.",
    "由 Bridge 自动管理，无需选择路径或配置文件": "Automatically managed by Bridge; no path or config file required",
    "连接成功后会显示在本行状态中": "Status will display in this row after successful connection",
    "可选。保存后由本机 Service 应用": "Optional. Applied by local Service after saving",
    "保存": "Save",
    "取消": "Cancel",
    "确认": "Confirm",
    "好": "OK",
    "删除": "Delete",
    "编辑": "Edit",
    "添加": "Add",
    "移除": "Remove",
    "复制": "Copy",
    "关闭": "Close",
    "完成": "Done",
    "确定": "OK",
    "稍后": "Later",
    "名称": "Name",
    "地址": "Address",
    "状态": "Status",
    "类型": "Type",
    "动作": "Action",
    "操作": "Action",
    "平台": "Platform",
    "效果": "Effect",
    "范围": "Scope",
    "目标": "Target",
    "值": "Value",
    "权限": "Permissions",
    "权限目标": "Permission Target",
    "命令": "Command",
    "命令行": "Command Line",
    "命令模式": "Command Mode",
    "工具": "Tools",
    "工具执行策略": "Tool Execution Policy",
    "用户": "User",
    "子代理": "Subagent",
    "会话": "Thread",
    "对话": "Conversation",
    "消息": "Messages",
    "错误": "Error",
    "处理": "Process",
    "登记": "Register",
    "已索引": "Indexed",
    "未打包": "Unpackaged",
    "未提供可执行路径": "No executable path provided",
    "模型与权限": "Models & Permissions",
    "当前版本": "Current Version",
    "例如": "e.g.",
    "运行中任务": "Running Tasks",
    "待审批项": "Pending Approvals",
    "注册项目": "Registered Projects",
    "任务总数": "Total Tasks",
    "当前空闲": "Currently Idle",
    "无阻断事项": "No Blocking Items",
    "管理本地目录": "Manage Local Directories",
    "任务历史": "Task History",
    "点击进入工作台": "Click to enter Workbench",
    "点击立即处理审批": "Click to review approvals",
    "后台常驻 Service": "Background Service",
    "本地 MCP 通道": "Local MCP Channel",
    "远程 Secure Tunnel": "Remote Secure Tunnel",
    "本机 Agent 引擎": "Local Agent Engine",
    "管理连接与 Agent →": "Manage Connections & Agents →",
    "配置模型与执行偏好 →": "Configure Models & Preferences →",
    "配置模型、执行偏好、安全策略与全局指令。": "Configure models, execution preferences, security policies, and global instructions.",
    "当前版本：": "Current Version: ",
    "当前版本:": "Current Version: ",
    "当前版本已经是最新版本。": "Current version is up to date.",
    "再次检查": "Check Again",
    "正在从发布源读取最新版本。": "Reading latest version from release source.",
    "新版已发布，点击立即更新。": "New version released; click to update now.",
    "下载完成后会继续安装。": "Installation will continue after download completes.",
    "安装完成后 App 会重新启动。": "App will restart after installation completes.",
    "启动 App 时会自动检查更新。": "Updates are checked automatically when the App starts.",
    "Agent模型与权限": "Agent Models & Permissions",
    "Agent权限": "Agent Permissions",
    "正在获取 Codex 模型…": "Fetching Codex models...",
    "正在获取模型推理强度…": "Fetching model reasoning effort...",
    "连接 Agent 后会自动获取模型。": "Models will be fetched automatically after connecting Agent.",
    "当前选中的默认模型不支持快速模式。": "Selected default model does not support Fast Mode.",
    "当前模型不提供可选推理强度，使用 Provider 默认。": "Current model does not offer selectable reasoning effort; using provider default.",
    "推理选项由 DSH 适配器提供，可能对不同模型返回相同选项；模型实际支持以 API 为准。": "Reasoning options provided by DSH adapter; actual support depends on API.",
    "当前安装的有效能力不包含工作区写入，将按只读执行。": "Current installation does not include workspace write capability; running read-only.",
    "自定义指令": "Custom Instructions",
    "保存自定义指令": "Save Custom Instructions",
    "自定义指令不能包含 NUL，且不能超过 32 KiB。": "Custom instructions cannot contain NUL and cannot exceed 32 KiB.",
    "自定义指令已保存。": "Custom instructions saved.",
    "自定义指令已保存": "Custom instructions saved",
    "后台 Service": "Background Service",
    "已注销": "Deregistered",
    "平台：": "Platform: ",
    "Windows 用户登录后自动启动后台 Service。": "Automatically start background Service after Windows user logs in.",
    "下次启动时会自动注册后台 Service。": "Background Service will register automatically on next startup.",
    "开启后可在退出窗口后继续运行后台 Service，远程给本机发送任务时需同时将“远程任务启动”设为“自动批准”。": "Keep background service running after closing window; remote tasks require \\",
    "开启后可在退出 App 后继续运行后台 Service，远程给本机发送任务时需同时将“远程任务启动”设为“自动批准”。": "Keep background service running after quitting app; remote tasks require \\",
    "任务启动审批": "Task Launch Approval",
    "Direct 命令审批": "Direct Command Approval",
    "Direct 审批": "Direct Approval",
    "保存审批设置": "Save Approval Settings",
    "审批设置已保存。": "Approval settings saved.",
    "审批设置已保存": "Approval settings saved",
    "Provider 默认": "Provider Default",
    "最低": "Minimal",
    "低": "Low",
    "中": "Medium",
    "高": "High",
    "极高": "Extra High",
    "最高": "Max",
    "无": "None",
    "请求批准": "Request Approval",
    "自动评审": "Auto Review",
    "完全访问": "Full Access",
    "工作区可写": "Workspace Writable",
    "工作区可写（Build）": "Workspace Writable (Build)",
    "工作区可写 (Build)": "Workspace Writable (Build)",
    "只读（Plan）": "Read-only (Plan)",
    "只读 (Plan)": "Read-only (Plan)",
    "自动": "Auto",
    "每次询问": "Ask Every Time",
    "需要本机批准": "Requires Local Approval",
    "禁止直接执行": "Disable Direct Execution",
    "在 ChatGPT 与本机任务证据之间保持同一工作上下文。": "Maintain the same working context between ChatGPT and local task evidence.",
    "项目查询失败": "Failed to query projects",
    "等待连接本机 Service": "Waiting to connect to local Service",
    "已连接本机 Codex 引擎": "Connected to local Codex engine",
    "等待你的回答": "Waiting for your answer",
    "等待回答": "Waiting for answer",
    "等待本机批准": "Waiting for local approval",
    "等待 Codex 审批": "Waiting for Codex approval",
    "中断当前轮并继续": "Interrupt current round and continue",
    "暂无待处理审批。": "No pending approvals.",
    "暂无对话记录。": "No conversation history.",
    "暂无任务事件。": "No task events.",
    "暂无会话。": "No threads.",
    "未选择任务": "No task selected",
    "未选择任务或会话": "No task or thread selected",
    "该项目目前没有 Agent 会话记录。": "No agent thread records for this project.",
    "该项目没有 Codex Thread。": "No Codex threads for this project.",
    "该项目目前没有可读取的 Skill。": "No readable skills for this project.",
    "交给其他 Agent": "Handoff to Another Agent",
    "目标 Agent": "Target Agent",
    "补充指令": "Supplementary Instructions",
    "交接内容不能包含 NUL 字符，且不能超过 32768 字节。": "Handoff content cannot contain NUL and cannot exceed 32768 bytes.",
    "检查并编辑要交给目标 Agent 的摘要…": "Review and edit summary for target agent...",
    "提交前可编辑交接摘要；原会话记录会保留。": "Summary can be edited before submit; original thread will be preserved.",
    "管理本地 MCP、Codex、本机 Agent 和 Secure Tunnel。": "Manage local MCP, Codex, local Agents, and Secure Tunnel.",
    "复制 Endpoint": "Copy Endpoint",
    "重新生成 Endpoint": "Regenerate Endpoint",
    "服务地址与客户端凭证由本机 Service 管理。": "Service endpoint and client credentials are managed by local Service.",
    "清除 Secure Tunnel 配置": "Clear Secure Tunnel Configuration",
    "清除 Secure Tunnel 配置？\\n这会移除已保存的 Runtime Key 并重置 Tunnel 绑定。": "Clear Secure Tunnel configuration?\\nThis will remove the saved Runtime Key and reset Tunnel binding.",
    "重新生成本地 MCP Endpoint？现有客户端地址将立即失效。": "Regenerate local MCP endpoint? Existing client URLs will become invalid immediately.",
    "重新生成这个 MCP 客户端的凭证？现有配置将立即失效。": "Regenerate credentials for this MCP client? Existing config will become invalid immediately.",
    "删除这个 MCP 服务？": "Delete this MCP service?",
    "Helper 已就绪，可按需连接远程通道。": "Helper is ready; remote tunnel can be connected on demand.",
    "当前环境没有可用 Helper，远程隧道不能启动。": "No available Helper in current environment; remote tunnel cannot start.",
    "连接 Codex": "Connect Codex",
    "连接本机 Agent": "Connect Local Agent",
    "登记 Agent": "Register Agent",
    "添加 MCP": "Add MCP",
    "保存 MCP": "Save MCP",
    "本地命令（stdio）": "Local Command (stdio)",
    "HTTP 地址": "HTTP URL",
    "HTTP 请求头": "HTTP Headers",
    "参数（每行一个）": "Arguments (one per line)",
    "命令需填写绝对路径；参数每行一个。": "Commands must use absolute paths; one argument per line.",
    "HTTP 服务仅在任务允许联网时连接。": "HTTP services only connect when tasks permit network access.",
    "启用 Qwen Studio": "Enable Qwen Studio",
    "停用 Qwen Studio": "Disable Qwen Studio",
    "已复制 Qwen Studio JSON 配置。": "Copied Qwen Studio JSON configuration.",
    "已复制本地 MCP Endpoint。": "Copied local MCP endpoint.",
    "已复制 Tunnel ID": "Copied Tunnel ID",
    "这里只控制 ChatGPT/Qwen 客户端收到的 MCP 工具集合；Agent 任务仍单独受工作台只读/可写权限控制。": "Controls only the MCP tools exposed to ChatGPT/Qwen; Agent tasks remain governed by Workbench read/write permissions.",
    "首次使用时自动查找本机安装。安装新的 Agent 后，点击“扫描 Agent”更新列表。": "Automatically scans local installations on first run. Click \\",
    "仅需选择本机可执行文件（.exe 或脚本），无需单独配置文件。": "Only requires local executable (.exe or script); no separate config file needed.",
    "需要选择可执行文件与独立的配置文件（如 cordis.yml）。": "Requires local executable and separate config file (e.g. cordis.yml).",
    "需要配置时填写（如 cordis.yml）": "Fill when configuration is needed (e.g. cordis.yml)",
    "确认新的 Agent 文件并重新检查？": "Confirm new agent files and recheck?",
    "需要确认本机 Agent 文件已由你更新。": "Confirmation required that local agent files were updated by you.",
    "连接成功后会显示在本行状态中。": "Will display in this row status after successful connection.",
    "连接前需要同意为 AGY 启用无头模式 Always Proceed。": "Requires consent to enable headless Always Proceed for AGY before connecting.",
    "弹窗选择文件登记…": "Browse file to register...",
    "选择 Agent 可执行文件": "Select Agent Executable",
    "选择 Agent 配置文件": "Select Agent Config File",
    "未找到可连接的 Agent Provider。": "No connectable Agent Providers found.",
    "本机未发现可用安装。": "No local installations discovered.",
    "尚未添加 MCP 服务。": "No MCP services added yet.",
    "尚未注册项目。": "No registered projects yet.",
    "管理项目登记、访问权限与项目资源。": "Manage project registration, permissions, and resources.",
    "项目名称和绝对路径不能为空。": "Project name and absolute path cannot be empty.",
    "从左侧列表选择目录后，可以配置访问权限并查看项目资源。": "Select a directory from the left list to configure permissions and view resources.",
    "只有明确注册的本地目录才会暴露给 MCP 客户端。": "Only explicitly registered local directories will be exposed to MCP clients.",
    "项目可读取的技能清单；展开单项查看说明。": "Skills accessible to the project; expand item to view description.",
    "规则适用于所有项目。优先级：黑名单 → 白名单 → 安全模式内置规则。命令按参数前缀匹配；项目访问权限和操作审批仍生效。": "Rules apply to all projects. Priority: Blacklist -> Whitelist -> Safe mode defaults. Matches by argument prefix; project permissions and approvals remain effective.",
    "输入一条命令后点击添加，例如 git status 或 npm test。带空格的参数使用引号，不支持管道和重定向。": "Enter a command and click Add, e.g. git status or npm test. Use quotes for parameters with spaces; pipes and redirects are not supported.",
    "保存项目策略": "Save Project Policy",
    "项目策略已保存生效。": "Project policy saved and effective.",
    "项目策略已保存生效": "Project policy saved and effective",
    "添加目录": "Add Directory",
    "检查任务事件、命令、文件与错误证据。": "Inspect task events, commands, files, and error evidence.",
    "全部类型": "All Types",
    "文件": "File",
    "其他": "Other",
    "复制日志": "Copy Logs",
    "已复制": "Copied",
    "搜索日志摘要、命令或文件…": "Search log summary, command, or file...",
    "没有匹配的日志事件。": "No matching log events.",
    "暂无日志事件。": "No log events.",
    "当前任务结束后会继续安装。": "Installation will continue after current task finishes.",
    "可以重试下载和安装。": "You can retry downloading and installing.",
    "可以重试检查更新。": "You can retry checking for updates.",
    "正在处理安装…": "Processing installation...",
    "正在下载…": "Downloading...",
    "处理 →": "Handle →",
    "重新检查": "Recheck",
    "移除这条 Agent 登记？本机文件不会被删除。": "Remove this agent registration? Local files will not be deleted.",
    "· 有效能力": "· Effective capabilities",
    "输入 API key": "Enter API key",
    "处理中…": "Processing...",
    "查看详情 ·": "View details ·",
    "个本机安装": "local installations",
    "本机索引失败，请稍后重试。": "Local indexing failed, please try again later.",
    "已发现本机安装，点击连接完成验证。": "Local installation discovered, click Connect to complete verification.",
    "正在查找本机安装…": "Searching for local installations...",
    "已连接 ·": "Connected ·",
    "· 另有": "· Additional",
    "个安装": "installations",
    "需要 Base URL 和 API key": "Base URL and API key required",
    "暂无可连接的 Agent Provider。": "No connectable Agent Providers available.",
    "AGY 无头任务需要自动通过工具执行。是否允许将本机 AGY 全局工具策略设为 Always Proceed（总是通过）并连接？这会影响使用同一配置的其他 AGY CLI 任务。": "AGY headless tasks require automatic tool execution. Allow setting local AGY global tool policy to Always Proceed and connect? This will affect other AGY CLI tasks sharing this configuration.",
    "Codex 执行引擎": "Codex Execution Engine",
    "Codex 由 Bridge 自动管理，无需选择路径或配置文件。": "Codex is automatically managed by Bridge; no path or configuration file needed.",
    "模型目录读取失败：": "Failed to read model directory: ",
    "刷新中…": "Refreshing...",
    "输入 Tunnel ID": "Enter Tunnel ID",
    "不会写入 UI 状态": "Will not be written to UI state",
    "活动 Session：": "Active Sessions: ",
    "· 最近连接：": "· Last connected: ",
    "暂无本地 MCP 客户端。": "No local MCP clients.",
    "Agent 名称": "Agent Name",
    "请选择要登记的 Agent Provider。": "Please select an Agent Provider to register.",
    "OpenCode CLI 引擎。无需配置文件。点击“弹窗选择文件登记…”选中 opencode.exe（npm 全局安装通常位于 %APPDATA%\\npm\\opencode.cmd）。": "OpenCode CLI engine. No config file needed. Click \"Browse file to register...\" and select opencode.exe (npm global install is usually at %APPDATA%\\npm\\opencode.cmd).",
    "Antigravity CLI 引擎。无需配置文件。点击“弹窗选择文件登记…”选中 agy.exe（通常位于 PATH 或自定义安装目录）。": "Antigravity CLI engine. No config file needed. Click \"Browse file to register...\" and select agy.exe (usually in PATH or custom install directory).",
    "DeepSeek Harness。需要可执行文件及只读 cordis.yml 配置文件。点击“弹窗选择文件登记…”将依次弹出系统窗口指导选择。": "DeepSeek Harness. Requires executable and read-only cordis.yml config. Click \"Browse file to register...\" to follow system file dialogs.",
    "远程 AI 客户端 (OpenAI Secure Tunnel)": "Remote AI Client (OpenAI Secure Tunnel)",
    "Secure MCP 隧道": "Secure MCP Tunnel",
    "ChatGPT / Qwen 客户端工具权限": "ChatGPT / Qwen Client Tool Permissions",
    "正在从本机 Service 读取连接状态。": "Reading connection status from local Service...",
    "连接本机 Service 后，可以管理 MCP 客户端、Codex、Secure Tunnel 与 Agent。": "After connecting to local Service, you can manage MCP clients, Codex, Secure Tunnel, and Agents.",
    "本机 MCP Endpoint": "Local MCP Endpoint",
    "Endpoint 尚未就绪": "Endpoint not ready",
    "仅监听 127.0.0.1；凭证由本机安全存储管理，不进明文状态或 SQLite。": "Listens only on 127.0.0.1; credentials managed by secure storage, never plaintext in state or SQLite.",
    "本地 MCP 端口被占用；不会静默更换地址，请主动生成新的 Endpoint。": "Local MCP port is in use; address will not silently change. Please regenerate a new Endpoint.",
    "请求中…": "Requesting...",
    "配置状态": "Configuration Status",
    "已配置": "Configured",
    "Helper 辅助工具缺失，本地 MCP 仍可用，但远程隧道不能启动。": "Helper utility missing; local MCP is usable, but remote tunnel cannot start.",
    "Tunnel 需要检查凭据，请核对 Tunnel ID、Runtime Key 以及当前工作区权限。": "Tunnel credentials verification required. Check Tunnel ID, Runtime Key, and workspace permissions.",
    "尚未配置": "Unconfigured",
    "保存后，将在新任务或继续对话时生效。": "After saving, changes will take effect for new tasks or continued conversations.",
    "例如：filesystem": "e.g. filesystem",
    "例如：/usr/local/bin/npx（Windows：C:\\Tools\\npx.cmd）": "e.g. /usr/local/bin/npx (Windows: C:\\Tools\\npx.cmd)",
    "例如：https://example.com/mcp": "e.g. https://example.com/mcp",
    "例如：API_KEY": "e.g. API_KEY",
    "例如：Authorization": "e.g. Authorization",
    "个 MCP 服务。": "MCP services.",
    "Direct 工作区": "Direct Workspace",
    "例如：git status": "e.g. git status",
    "例如：git push": "e.g. git push",
    "正在从本机 Service 读取执行事件。": "Reading execution events from local Service...",
    "连接本机 Service 后，任务事件会显示在这里。": "After connecting to local Service, task events will appear here.",
    "安装：": "Installation: ",
    "安装": "Installation",
    "启用 “": "Enable \"",
    "”？\n\n这会修改当前用户的 AGY Global 配置，并影响使用同一 HOME 的其他 AGY CLI 任务。Bridge 的项目 Read Only/Write 硬策略保持不变。": "\"?\n\nThis will modify the AGY Global configuration and affect other AGY CLI tasks sharing this HOME. Bridge project Read Only/Write policies remain unchanged.",
    "保存高风险 AGY Global 规则？\n\n该规则会影响使用同一 HOME 的其他 AGY CLI 任务。Bridge 的项目 Read Only/Write 硬策略保持不变。": "Save high-risk AGY Global rule?\n\nThis rule affects other AGY CLI tasks sharing this HOME. Bridge project Read Only/Write policies remain unchanged.",
    "AGY 工具权限被拒绝": "AGY tool permission denied",
    "AGY Global 权限已更新，仅对新任务生效。请重新提交或续接任务。": "AGY Global permissions updated; applies to new tasks only. Please resubmit or continue task.",
    "正在准备…": "Preparing...",
    "正在保存…": "Saving...",
    "写入 AGY Global 允许规则？\n\n将写入：": "Write AGY Global allow rule?\n\nWill write: ",
    "\n\n这会影响使用同一 HOME 的其他 AGY CLI 任务。": "\n\nThis will affect other AGY CLI tasks sharing this HOME.",
    "本次自动批准 AGY 工具并允许网络？\n\n它仍受项目 Read Only/Write 硬策略约束，不会修改 AGY Global 配置。": "Auto-approve AGY tool and allow network for this session?\n\nGoverned by project Read Only/Write policy; will not modify AGY Global config.",
    "MCP 工具": "MCP Tools",
    "例如：swift test": "e.g. swift test",
    "例如：example.com": "e.g. example.com",
    "例如：server/tool": "e.g. server/tool",
    "例如：/path/to/project/*": "e.g. /path/to/project/*",
    "Agent 会话": "Agent Threads",
    "按 Agent 分组查看项目会话与任务。": "View project threads and tasks grouped by Agent.",
    "暂无 Skill。": "No skills.",
    "范围：": "Scope: ",
    "暂无说明。": "No description.",
    "未知 Agent": "Unknown Agent",
    "轮 ·": "rounds ·",
    "删除此会话的全部任务与记录？": "Delete all tasks and records for this thread?",
    "读取": "Read",
    "写入": "Write",
    "正在从本机 Service 读取项目状态。": "Reading project status from local Service...",
    "共": "Total ",
    "个目录": "directories",
    "从 Codex Bridge 移除项目“": "Remove project \"",
    "”？\n本地磁盘文件不会受到影响。": "\" from Codex Bridge?\nLocal disk files will not be affected.",
    "选择后自动保存。": "Auto-saved after selection.",
    "尚未读取 Agent 默认偏好。": "Agent default preferences not loaded.",
    "可选。保存后由本机 Service 应用。": "Optional. Applied by local Service after saving.",
    "/ 32768 字节": "/ 32768 bytes",
    "· 内容过长或包含 NUL 字符": "· Content too long or contains NUL characters",
    "获取中…": "Fetching...",
    "模型获取失败：": "Failed to fetch models: ",
    "个 Codex 模型。": "Codex models.",
    "GPT/Qwen的mcp插件权限与指令": "GPT/Qwen MCP Permissions & Instructions",
    "连接本机 Service 后，可以配置模型、安全审批与后台服务。": "After connecting to local Service, you can configure models, security approvals, and background service.",
    "正在从本机 Service 读取偏好设置。": "Reading preferences from local Service...",
    "Direct 操作": "Direct Operations",
    "策略仍由本机 Service 和项目权限强制执行。": "Policies are still enforced by local Service and project permissions.",
    "等待本机 Service": "Waiting for local Service",
    "发送方式": "Send Mode",
    "指令不能包含 NUL 字符，且不能超过 32768 字节。": "Instruction cannot contain NUL and cannot exceed 32768 bytes.",
    "使用原始指令在当前项目开启全新会话？": "Start a new thread in current project using original instruction?",
    "正在加载更早消息…": "Loading earlier messages...",
    "正在同步对话内容…": "Syncing conversation...",
    "工具：": "Tool: ",
    "输入": "Input",
    "输出": "Output",
    "正在读取对话…": "Reading conversation...",
    "正在加载更早的消息…": "Loading earlier messages...",
    "正在处理任务…": "Processing task...",
    "中断请求中…": "Interrupting...",
    "取消中…": "Cancelling...",
    "排队第": "Queue position ",
    "位": "",
    "· 等待": "· Waiting",
    "选择 Agent 会话 (": "Select Agent Thread (",
    "执行过程（": "Execution process (",
    "条）": " items)",
    "未收到可填写的问题。": "No fillable questions received.",
    "在左侧 ChatGPT 网页版发起提问并调用 MCP 工具，本面板将实时呈现任务流与所选 Provider 的执行结果。": "Ask questions in ChatGPT web on the left to invoke MCP tools. This panel displays the real-time task stream and Provider execution results.",
    "删除会话？\n这会删除 Codex Bridge 保存的全部轮次任务、事件和对话记录，无法撤销。": "Delete thread?\nThis will permanently delete all task runs, events, and conversation history saved by Codex Bridge. This cannot be undone.",
    "内置 MCP 说明，随工具一并提供给 GPT/Qwen": "Built-in MCP instructions sent to GPT/Qwen along with tools",
    "退出 App 后保持 Service 运行": "Keep running service after app exits",
    "关闭窗口后继续在后台运行": "Keep running in background after closing window",
    "关闭 App 后继续在后台运行": "Keep running in background after closing app",
    "完整": "Full",
    "已发现 DSH，需要配置 Base URL 与 API key。": "DSH discovered; Base URL and API key required.",
    "已发现 DSH，需要配置 Base URL 与 API key": "DSH discovered; Base URL and API key required",
    "MCP 客户端状态已刷新。": "MCP client status refreshed.",
    "MCP 客户端状态已刷新": "MCP client status refreshed",
    // 1.1.2 additions: Codex engine path configuration, update guidance, tunnels
    "Codex 由 Bridge 自动发现；安装在非常规位置时，可在此指定可执行文件。": "Codex is discovered automatically by Bridge; if it is installed in a non-standard location, specify the executable here.",
    "可执行文件路径（可选）": "Executable Path (Optional)",
    "留空自动发现；也可填写 codex.exe 或 npm 的 codex.cmd 绝对路径": "Leave empty for auto-discovery; or enter the absolute path to codex.exe or npm's codex.cmd",
    "保存路径": "Save Path",
    "恢复自动发现": "Restore Auto-Discovery",
    "自动发现": "Auto-Discovery",
    "当前使用": "Currently In Use",
    "未找到": "Not Found",
    "指定的路径当前不可用，请重新选择或恢复自动发现。": "The specified path is currently unavailable; choose another path or restore auto-discovery.",
    "若 Codex 装在非常规位置，请在路径输入框填写 codex.exe 或 codex.cmd 的绝对路径后重试。": "If Codex is installed in a non-standard location, enter the absolute path to codex.exe or codex.cmd in the path field and retry.",
    "新版已发布，点击立即更新。更新后请在 ChatGPT 刷新一次插件，以防保留旧版缓存。": "A new version is available; click to update now. After updating, refresh the plugin in ChatGPT once to avoid a stale cache.",
    "安装完成后 App 会重新启动。更新后请在 ChatGPT 刷新一次插件，以防保留旧版缓存。": "The app restarts after installation. After updating, refresh the plugin in ChatGPT once to avoid a stale cache.",
    "清除 Secure Tunnel 配置？\n这会移除已保存的 Runtime Key 并重置 Tunnel 绑定。": "Clear Secure Tunnel configuration?\nThis will remove the saved Runtime Key and reset the tunnel binding.",
    "应用已更新，请在 ChatGPT 刷新一次插件以防保留旧版缓存": "App updated; refresh the plugin in ChatGPT once to avoid a stale cache",
    "Codex 已恢复自动发现": "Codex auto-discovery restored",
    "Codex 可执行文件已更新": "Codex executable updated",
    // Swift presentation strings (BridgeServiceAppCore / BridgeDesktopUI)
    "未知工具": "Unknown tool",
    "正在读取文件": "Reading file",
    "已读取文件": "File read",
    "正在搜索文件": "Searching files",
    "已搜索文件": "Files searched",
    "搜索文件": "Search files",
    "正在列出文件": "Listing files",
    "已列出文件": "Files listed",
    "列出文件": "List files",
    "正在编辑文件": "Editing file",
    "已编辑文件": "File edited",
    "编辑文件": "Edit file",
    "正在运行命令": "Running command",
    "已运行命令": "Command ran",
    "运行命令": "Run command",
    "正在搜索网页": "Searching web",
    "已搜索网页": "Web searched",
    "搜索网页": "Search web",
    "正在读取网页": "Reading web page",
    "已读取网页": "Web page read",
    "正在调用子代理": "Calling subagent",
    "子代理已完成": "Subagent completed",
    "调用子代理": "Call subagent",
    "正在分析": "Analyzing",
    "分析完成": "Analysis complete",
    "正在调用 MCP 工具": "Calling MCP tool",
    "MCP 工具已完成": "MCP tool completed",
    "调用 MCP 工具": "Call MCP tool",
    "正在执行工作流": "Running workflow",
    "工作流已完成": "Workflow completed",
    "执行工作流": "Run workflow",
    "正在读取后台任务输出": "Reading background task output",
    "已读取后台任务输出": "Background task output read",
    "读取后台任务输出": "Read background task output",
    "正在执行技能": "Running skill",
    "技能已完成": "Skill completed",
    "执行技能": "Run skill",
    "未知决策": "Unknown decision",
    "可用决策：仅本次允许、拒绝": "Available decisions: Allow once, Deny",
    "更新信息无效": "Invalid update information",
    "更新文件信息无效": "Invalid update file information",
    "更新文件地址无效": "Invalid update file URL",
    "没有匹配当前平台的更新文件": "No update file matches the current platform",
    "更新文件匹配不唯一": "Ambiguous update file match",
    "更新文件完整性校验失败": "Update file integrity check failed",
    "后台 Service 与本 App 的 IPC 版本不一致，请重新注册或重启后台 Service。": "Background Service IPC version does not match this app; re-register or restart the background Service.",
    "需要配置文件": "Config file required",
    "无需额外配置": "No extra configuration",
    "Git 干净": "Git Clean",
    "可用": "Available",
    "需复核": "Needs review",
    "不兼容": "Incompatible",
    "需要重新连接": "needs reconnection",
    "个 Agent 需要重新连接": "agents need reconnection",
    "会话续接": "Thread Resume",
    "工作区写入": "Workspace Write",
    "技能": "Skills",
    "本机 App": "Local App",
    "本机任务": "Local Tasks",
    "需要回答": "Needs answer",
    "(providerName) 排队中…": "(providerName) queued...",
    "等待批准": "Waiting for approval",
    "配置缺失": "Missing configuration",
    "本地 MCP 当前不可用，请检查后台 Service 状态。": "Local MCP is currently unavailable; check the background Service status.",
    "接手以下项目任务，先核对当前工作区，再继续未完成事项。": "Take over the following project task: check the current workspace first, then continue the remaining work.",
    "起始要求：": "Starting requirement: ",
    "要求摘自起始轮与最近六轮；较早补充可在来源会话中查看。": "Requirements come from the starting run and the six most recent runs; earlier follow-ups are viewable in the source thread.",
    "已有结果：": "Existing results: ",
    "最后记录步骤：": "Last recorded step: ",
    "记录的改动文件：": "Recorded changed files: ",
    "已记录命令结果：": "Recorded command results: ",
    "（摘要节选；完整记录可按来源任务查看）": "(summary excerpt; full records are available from the source task)",
    "等待 Provider 输出…": "Waiting for Provider output...",
    "补充指令不能为空。": "Follow-up instruction cannot be empty.",
    "补充指令超过 32768 字节限制。": "Follow-up instruction exceeds the 32768 byte limit.",
    "补充指令包含非法空字符。": "Follow-up instruction contains an invalid null character.",
    "未命名命令": "Unnamed command",
    "未设置可执行文件": "No executable configured",
    "项目根目录": "Project Root",
    "需要网络": "Network required",
    "不需要网络": "No network needed",
    "高风险": "High Risk",
    "普通": "Normal",
    "完全模式": "Full mode",
    "事件": "Event",
    "排队中": "Queued",
    "已中断": "Interrupted",
    "未命名任务": "Untitled Task",
    "工具执行异常": "Tool execution error",
    "用户拒绝执行": "User denied execution",
    "由宿主加载 ChatGPT 工作区": "Host loads the ChatGPT workspace",
    "后台 Service 在 App 退出后继续提供本机 MCP 服务。": "Background Service keeps serving local MCP after the app exits.",
    "允许": "Allowed",
    "拒绝": "Deny",
    "仅本次允许": "Allow once",
    "本次会话允许": "Allow for session",
    "允许此类命令": "Allow similar commands",
    "需要本机批准": "Requires local approval",
    "已启用": "Enabled",
    "已停用": "Disabled",
    "未识别": "Not detected",
    "未协商": "Not negotiated",
    "不可用": "Unavailable",
    "无": "None",
    "有未提交改动": "Uncommitted changes",
    "非 Git 项目": "Not a Git project",
    "检查失败": "Check failed",
  };

  var LABELS = {
    "Agent": "Agent",
    "Provider": "Provider",
    "ID": "ID",
    "Adapter": "Adapter",
    "信任配置": "Trust profile",
    "有效能力": "Effective capabilities",
    "状态": "Status",
    "可执行路径": "Executable path",
    "版本": "Version",
    "ACP 协议": "ACP protocol",
    "Probe 错误": "Probe error",
    "读取": "Read",
    "写入": "Write",
    "网络": "Network",
    "项目": "Project",
    "任务": "Task",
    "摘要": "Summary",
    "时间": "Time",
    "序号": "Sequence",
    "类型": "Type",
    "标题": "Title",
    "原因": "Reason",
    "请求内容": "Request",
    "目标路径": "Target path",
    "审批 ID": "Approval ID",
    "创建时间": "Created at",
    "可用决策": "Available decisions",
    "来源": "Source",
    "来源任务": "Source task",
    "来源 Agent": "Source Agent",
    "模型": "Model",
    "推理强度": "Reasoning effort",
    "当前步骤": "Current step",
    "网络访问": "Network access",
    "命令": "Command",
    "可执行文件": "Executable",
    "参数前缀": "Argument prefix",
    "工作目录": "Working directory",
    "风险": "Risk",
    "范围": "Scope",
    "描述": "Description",
    "触发词": "Triggers",
    "动作": "Actions",
    "任务状态": "Task status",
    "最近 Git 状态": "Recent Git status",
    "失败记录": "Failure record",
    "补充要求": "Follow-up requirement",
    "未知决策": "Unknown decision",
    "未知": "Unknown",
    "需要回答": "Needs answer",
    "更新版本号": "Update version",
    "更新版本号无效": "Invalid update version",
  };

      var REGEX_RULES = [
    { pattern: /^MCP\s*客户端状态已刷新[。.]?\s*已加载\s*(\d+)\s*条安装记录[。.]?$/, replace: "MCP client status refreshed. Loaded $1 installation records." },
    { pattern: /^已加载\s*(\d+)\s*条安装记录[。.]?$/, replace: "Loaded $1 installation records." },
    { pattern: /^MCP\s*客户端状态已刷新[。.]?$/, replace: "MCP client status refreshed." },
    { pattern: /^选择\s*Agent\s*会话\s*[（(](\d+)[）)]$/, replace: "Select Agent Thread ($1)" },
    { pattern: /^选择\s*Agent\s*会话\s*[（(](.+)[）)]$/, replace: "Select Agent Thread ($1)" },
    { pattern: /^选择\s*Agent\s*会话$/, replace: "Select Agent Thread" },
    { pattern: /^共\s*(\d+)\s*个目录$/, replace: "$1 directories total" },
    { pattern: /^(\d+)\s*个$/, replace: "$1" },
    { pattern: /^(.+)\s*会话$/, replace: "$1 Threads" },
    { pattern: /^共\s*(\d+)\s*个任务$/, replace: "$1 tasks total" },
    { pattern: /^共\s*(\d+)\s*个项目$/, replace: "$1 projects total" },
    { pattern: /^共\s*(\d+)\s*个$/, replace: "$1 total" },
    { pattern: /^(\d+)\s*个\s*Codex\s*模型$/, replace: "$1 Codex models" },
    { pattern: /^(\d+)\s*个\s*MCP\s*服务$/, replace: "$1 MCP services" },
    { pattern: /^(\d+)\s*个目录$/, replace: "$1 directories" },
    { pattern: /^(\d+)\s*个项目$/, replace: "$1 projects" },
    { pattern: /^(\d+)\s*个本机安装$/, replace: "$1 local installations" },
    { pattern: /^(\d+)\s*个安装$/, replace: "$1 installations" },
    { pattern: /^(\d+)\s*项$/, replace: "$1 items" },
    { pattern: /^(\d+)\s*条$/, replace: "$1 items" },
    { pattern: /^(\d+)\s*\/\s*32768\s*字节(.*)$/, replace: "$1 / 32768 bytes$2" },
    { pattern: /^(\d+)\s*字节$/, replace: "$1 bytes" },
    { pattern: /^(\d+)\s*轮$/, replace: "$1 rounds" },
    { pattern: /^第\s*(\d+)\s*轮$/, replace: "Round $1" },
    { pattern: /^排队第\s*(\d+)\s*位$/, replace: "Queue position $1" },
    { pattern: /^另有\s*(\d+)\s*项$/, replace: "$1 more items" },
    { pattern: /^可更新到\s*(.+)$/, replace: "Update available: $1" },
    { pattern: /^发现新版本\s*(.+)$/, replace: "New version available: $1" },
    { pattern: /^当前版本[：:]\s*(.+)$/, replace: "Current version: $1" },
    { pattern: /^平台[：:]\s*(.+)$/, replace: "Platform: $1" },
    { pattern: /^安装[：:]\s*(.+)$/, replace: "Installation: $1" },
    { pattern: /^活动 Session[：:]\s*(.+)$/, replace: "Active Sessions: $1" },
    { pattern: /^· 最近连接[：:]\s*(.+)$/, replace: "· Last connected: $1" },
    { pattern: /^· 有效能力\s*(\d+)\s*项$/, replace: "· Effective capabilities: $1 items" },
    { pattern: /^· 另有\s*(\d+)\s*项$/, replace: "· $1 more items" },
    { pattern: /^· 另有\s*(\d+)\s*个安装$/, replace: "· $1 more installations" },
    { pattern: /^查看详情\s*·\s*(\d+)\s*个本机安装$/, replace: "View Details · $1 local installations" },
    { pattern: /^(\d+)\s*个可用\s*\/\s*共\s*(\d+)\s*个$/, replace: "$1 available / $2 total" },
    { pattern: /^已获取\s*(\d+)\s*个\s*Codex\s*模型[。.]?$/, replace: "$1 Codex models fetched." },
    { pattern: /^已配置\s*(\d+)\s*个\s*MCP\s*服务[。.]?$/, replace: "$1 MCP services configured." },
    { pattern: /^扫描完成，发现\s*(\d+)\s*个本机\s*Agent[。.]?$/, replace: "Scan complete: discovered $1 local Agents." },
    { pattern: /^当前有\s*(\d+)\s*个远程任务或执行器操作等待你本机确认或拒绝。$/, replace: "There are currently $1 remote tasks or runner operations awaiting your local approval or rejection." },
    { pattern: /^(.+) 正在启动…$/, replace: "$1 starting..." },
    { pattern: /^等待本机批准 (.+) 任务…$/, replace: "Waiting for local approval of $1 task..." },
    { pattern: /^等待本机批准 (.+) 操作…$/, replace: "Waiting for local approval of $1 operation..." },
    { pattern: /^等待本机批准 (.+) 任务$/, replace: "Waiting for local approval of $1 task" },
    { pattern: /^(.+) 已完成$/, replace: "$1 completed" },
    { pattern: /^(.+) 执行失败$/, replace: "$1 failed" },
    { pattern: /^(.+) 已中断$/, replace: "$1 interrupted" },
    { pattern: /^(.+) 状态未知$/, replace: "$1 status unknown" },
    { pattern: /^(.+) 正在处理任务…$/, replace: "$1 processing task..." },
    { pattern: /^(.+) 正在输出…$/, replace: "$1 streaming output..." },
    { pattern: /^(.+) 正在分析…$/, replace: "$1 analyzing..." },
    { pattern: /^(.+) 正在分析$/, replace: "$1 analyzing" },
    { pattern: /^(.+) 分析过程$/, replace: "$1 analysis" },
    { pattern: /^(.+) 排队中…$/, replace: "$1 queued..." },
    { pattern: /^(.+) 任务$/, replace: "$1 task" },
    { pattern: /^正在使用 (.+) 工具：(.+)$/, replace: "Using $1 tool: $2" },
    { pattern: /^已使用 (.+) 工具：(.+)$/, replace: "Used $1 tool: $2" },
    { pattern: /^使用 (.+) 工具：(.+)$/, replace: "Use $1 tool: $2" },
    { pattern: /^(.+) \[(.+)轮\]$/, replace: "$1 [$2 rounds]" },
    { pattern: /^工具 (.+) 执行异常$/, replace: "Tool $1 execution error" },
    { pattern: /^\[错误\] (.+)$/, replace: "[Error] $1" },
    { pattern: /^\[工具：(.+)\]$/, replace: "[Tool: $1]" },
    { pattern: /^安全审批 · (.+) — (.+)$/, replace: "Security approval · $1 — $2" },
    { pattern: /^Direct 审批 · (.+) — (.+)$/, replace: "Direct approval · $1 — $2" },
    { pattern: /^类型：任务审批（(.+)）$/, replace: "Type: Task approval ($1)" },
    { pattern: /^类型：Direct 审批（(.+)）$/, replace: "Type: Direct approval ($1)" },
    { pattern: /^补充要求（(.+)）：$/, replace: "Follow-up requirement ($1):" },
    { pattern: /^更新服务器返回错误（HTTP (.+)）$/, replace: "Update server returned an error (HTTP $1)" },
    { pattern: /^更新文件大小校验失败（应为 (.+) 字节，收到 (.+) 字节）$/, replace: "Update file size check failed (expected $1 bytes, got $2 bytes)" },
    { pattern: /^(\d+) 个 Agent 需要重新连接$/, replace: "$1 agents need reconnection" },
    { pattern: /^(\d+) 个问题$/, replace: "$1 questions" },
    { pattern: /^网络访问：允许$/, replace: "Network access: Allowed" },
    { pattern: /^网络访问：关闭$/, replace: "Network access: Off" },
    { pattern: /^描述：无$/, replace: "Description: None" },
    { pattern: /^触发词：无$/, replace: "Triggers: None" },
    { pattern: /^有效能力：无$/, replace: "Effective capabilities: None" },
    { pattern: /^版本：未识别$/, replace: "Version: Not detected" },
    { pattern: /^ACP 协议：未协商$/, replace: "ACP protocol: Not negotiated" },
  ];

  var warned = new Set();

  function isProtected(node) {
    if (!node) return false;
    var el = node.nodeType === 1 ? node : node.parentElement;
    if (!el) return false;
    if (el.id === "browser-slot-note" || el.closest("#browser-slot-note")) {
      return false;
    }
    if (el.closest(
      ".conversation-item, .message-body, .conversation-stream, " +
      "pre, code, .terminal-output, .markdown-body, " +
      "[data-i18n-skip]"
    )) {
      return true;
    }
    return false;
  }

    function translate(str, node, depth) {
    if (typeof str !== "string") return str;
    if (!/[\u4e00-\u9fa5]/.test(str)) return str;

    var leading = str.match(/^\s*/)[0];
    var trailing = str.match(/\s*$/)[0];
    var trimmed = str.trim();

    // Context-sensitive translation: Button "连接" -> "Connect" vs Nav "连接" -> "Connections"
    if (trimmed === "连接") {
      var isNav = node && (
        (node.closest && node.closest("#navigation, .sidebar, .navigation, #main-sidebar")) ||
        (node.classList && (node.classList.contains("nav-title") || node.classList.contains("nav-button")))
      );
      if (isNav) {
        return leading + "Connections" + trailing;
      }
      var isButton = node && (
        node.tagName === "BUTTON" ||
        (node.closest && (node.closest("button") || node.closest(".button") || node.closest(".icon-button"))) ||
        (node.getAttribute && node.getAttribute("role") === "button") ||
        (node.classList && (node.classList.contains("button") || node.classList.contains("action-btn")))
      );
      if (isButton) {
        return leading + "Connect" + trailing;
      }
    }

    if (DICT.hasOwnProperty(trimmed)) {
      return leading + DICT[trimmed] + trailing;
    }

    // Compound provider details: "Provider: ... 注册: ... 配置: ... 能力: ..."
    if (trimmed.indexOf("注册：") >= 0 || trimmed.indexOf("注册:") >= 0 || trimmed.indexOf("配置：") >= 0 || trimmed.indexOf("能力：") >= 0) {
      var res = trimmed
        .replace(/注册[：:]/g, "Registration: ")
        .replace(/配置[：:]/g, "Configuration: ")
        .replace(/能力[：:]/g, "Capabilities: ")
        .replace(/无需额外配置/g, "No extra config")
        .replace(/需要配置文件/g, "Config file required")
        .replace(/无需配置文件/g, "No config file required")
        .replace(/需要 Base URL 和 API key/g, "Base URL and API key required")
        .replace(/需要配置 Base URL 与 API key/g, "Base URL and API key required")
        .replace(/模型/g, "Models")
        .replace(/推理强度/g, "Reasoning Effort")
        .replace(/会话续接/g, "Thread Resume")
        .replace(/工作区写入/g, "Workspace Write")
        .replace(/技能/g, "Skills")
        .replace(/、/g, ", ")
        .replace(/已索引/g, "Indexed");
      return leading + res + trailing;
    }
    if (typeof str !== "string") return str;
    if (!/[\u4e00-\u9fa5]/.test(str)) return str;

    var leading = str.match(/^\s*/)[0];
    var trailing = str.match(/\s*$/)[0];
    var trimmed = str.trim();

    if (DICT.hasOwnProperty(trimmed)) {
      return leading + DICT[trimmed] + trailing;
    }

    // Punctuation normalisation fallback
    if (trimmed.endsWith("。")) {
      var unpunct = trimmed.slice(0, -1);
      if (DICT.hasOwnProperty(unpunct)) {
        return leading + DICT[unpunct] + "." + trailing;
      }
    }
    if (trimmed.endsWith("：") || trimmed.endsWith(":")) {
      var uncolon = trimmed.slice(0, -1);
      if (DICT.hasOwnProperty(uncolon)) {
        return leading + DICT[uncolon] + ": " + trailing;
      }
    }
    if (trimmed.endsWith("…")) {
      var unellipsis = trimmed.slice(0, -1);
      if (DICT.hasOwnProperty(unellipsis)) {
        return leading + DICT[unellipsis] + "..." + trailing;
      }
    }
    if (trimmed.endsWith("？") || trimmed.endsWith("?")) {
      var unq = trimmed.slice(0, -1);
      if (DICT.hasOwnProperty(unq)) {
        return leading + DICT[unq] + "?" + trailing;
      }
    }

    for (var i = 0; i < REGEX_RULES.length; i++) {
      var rule = REGEX_RULES[i];
      if (rule.pattern.test(trimmed)) {
        var res = trimmed.replace(rule.pattern, rule.replace);
        return leading + res + trailing;
      }
    }
    // Label: Value presentation lines ("状态：...", "项目：...")
    var labelMatch = trimmed.match(/^([^：\n]{1,16})：([\s\S]+)$/);
    if (labelMatch && LABELS.hasOwnProperty(labelMatch[1]) && (depth || 0) < 2) {
      var rawVal = labelMatch[2];
      var translatedVal = rawVal;
      if (/[、，]/.test(rawVal)) {
        var sep = rawVal.indexOf("、") >= 0 ? "、" : "，";
        var joiner = sep === "、" ? ", " : ", ";
        translatedVal = rawVal
          .split(sep)
          .map(function (part) { return translate(part.trim(), node, (depth || 0) + 1); })
          .join(joiner);
      } else {
        translatedVal = translate(rawVal.trim(), node, (depth || 0) + 1);
      }
      return leading + LABELS[labelMatch[1]] + ": " + translatedVal + trailing;
    }

    if (!warned.has(trimmed)) {
      warned.add(trimmed);
      if (global.console && typeof global.console.warn === "function") {
        global.console.warn('[i18n] Missing translation for: "' + trimmed + '"');
      }
    }

    return str;
  }

  var isTranslating = false;

  // 1. Prototype Setter Hook: Node.prototype.textContent
  var origSetText = Object.getOwnPropertyDescriptor(Node.prototype, "textContent");
  if (origSetText && origSetText.set) {
    Object.defineProperty(Node.prototype, "textContent", {
      set: function (val) {
        if (!isTranslating && typeof val === "string" && !isProtected(this)) {
          val = translate(val, this);
        }
        return origSetText.set.call(this, val);
      },
      get: origSetText.get,
      configurable: true,
      enumerable: true
    });
  }

  // 2. Prototype Setter Hook: Element.prototype.setAttribute
  var origSetAttr = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (name, val) {
    if (!isTranslating && typeof val === "string" && (name === "aria-label" || name === "title" || name === "placeholder")) {
      if (!isProtected(this)) {
        val = translate(val, this);
      }
    }
    return origSetAttr.call(this, name, val);
  };

  // 3. Document title hook
  var origDocTitle = Object.getOwnPropertyDescriptor(Document.prototype, "title") ||
                     Object.getOwnPropertyDescriptor(HTMLDocument.prototype, "title");
  if (origDocTitle && origDocTitle.set) {
    Object.defineProperty(document, "title", {
      set: function (val) {
        return origDocTitle.set.call(document, translate(val));
      },
      get: origDocTitle.get,
      configurable: true,
      enumerable: true
    });
  }

  // 4. Translate existing DOM node tree
  function translateSubtree(root) {
    if (!root || isProtected(root)) return;

    if (root.nodeType === 3) { // Text node
      var text = root.nodeValue;
      if (text && /[\u4e00-\u9fa5]/.test(text)) {
        var translated = translate(text, root.parentElement);
        if (translated !== text) {
          isTranslating = true;
          root.nodeValue = translated;
          isTranslating = false;
        }
      }
      return;
    }

    if (root.nodeType === 1) { // Element node
      if (root.hasAttribute("aria-label")) {
        var aVal = root.getAttribute("aria-label");
        var aTrans = translate(aVal, root);
        if (aTrans !== aVal) {
          isTranslating = true;
          root.setAttribute("aria-label", aTrans);
          isTranslating = false;
        }
      }
      if (root.hasAttribute("title")) {
        var tVal = root.getAttribute("title");
        var tTrans = translate(tVal, root);
        if (tTrans !== tVal) {
          isTranslating = true;
          root.setAttribute("title", tTrans);
          isTranslating = false;
        }
      }
      if (root.hasAttribute("placeholder")) {
        var pVal = root.getAttribute("placeholder");
        var pTrans = translate(pVal, root);
        if (pTrans !== pVal) {
          isTranslating = true;
          root.setAttribute("placeholder", pTrans);
          isTranslating = false;
        }
      }

      var child = root.firstChild;
      while (child) {
        translateSubtree(child);
        child = child.nextSibling;
      }
    }
  }

  // 5. Initial Static DOM Pass
  function onReady() {
    if (document.documentElement) {
      document.documentElement.lang = "en";
    }
    translateSubtree(document.body || document.documentElement);

    // 6. Observer for dynamic innerHTML insertions
    var observer = new MutationObserver(function (mutations) {
      if (isTranslating) return;
      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];
        if (m.type === "childList") {
          for (var j = 0; j < m.addedNodes.length; j++) {
            translateSubtree(m.addedNodes[j]);
          }
        } else if (m.type === "characterData") {
          if (!isProtected(m.target) && /[\u4e00-\u9fa5]/.test(m.target.nodeValue)) {
            var val = m.target.nodeValue;
            var trans = translate(val, m.target.parentElement);
            if (trans !== val) {
              isTranslating = true;
              m.target.nodeValue = trans;
              isTranslating = false;
            }
          }
        } else if (m.type === "attributes") {
          if (!isProtected(m.target)) {
            var attrName = m.attributeName;
            if (attrName === "aria-label" || attrName === "title" || attrName === "placeholder") {
              var attrVal = m.target.getAttribute(attrName);
              if (attrVal && /[\u4e00-\u9fa5]/.test(attrVal)) {
                var transAttr = translate(attrVal, m.target);
                if (transAttr !== attrVal) {
                  isTranslating = true;
                  m.target.setAttribute(attrName, transAttr);
                  isTranslating = false;
                }
              }
            }
          }
        }
      }
    });

    observer.observe(document.body || document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["aria-label", "title", "placeholder"]
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }

  global.CodexBridgeI18n = {
    DICT: DICT,
    translate: translate,
    isProtected: isProtected,
    translateSubtree: translateSubtree
  };
})(typeof window !== "undefined" ? window : globalThis);

const { chromium } = require("playwright");
const path = require("path");

(async () => {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: true
  });
  const page = await browser.newPage();

  const logs = [];
  const errors = [];

  page.on("console", msg => {
    logs.push(`[${msg.type()}] ${msg.text()}`);
  });

  page.on("pageerror", err => {
    errors.push(err.stack || err.message);
  });

  const targetURL = "file:///C:/Users/monet/AppData/Local/Programs/CodexBridge/BridgeCore_BridgeDesktopUI.bundle/index.html?platform=windows";
  console.log("Navigating to:", targetURL);

  try {
    await page.goto(targetURL, { waitUntil: "load", timeout: 10000 });
    await page.waitForTimeout(2000);
  } catch (e) {
    console.error("Navigation error:", e.message);
  }

  console.log("=== CONSOLE LOGS ===");
  logs.forEach(l => console.log(l));

  console.log("=== PAGE ERRORS ===");
  errors.forEach(e => console.error(e));

  const bodyState = await page.evaluate(() => {
    const appShell = document.getElementById("app-shell");
    return {
      title: document.title,
      appShellState: appShell ? appShell.dataset.state : "missing",
      appShellClasses: appShell ? appShell.className : "",
      sidebarHTML: document.getElementById("main-sidebar") ? "exists" : "missing",
      htmlContentPreview: document.documentElement.outerHTML.substring(0, 500)
    };
  });

  console.log("=== DOM STATE ===");
  console.log(JSON.stringify(bodyState, null, 2));

  await browser.close();
})();

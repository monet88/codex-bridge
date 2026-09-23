(function () {
  "use strict";

  var platform = new URLSearchParams(window.location.search).get("platform");
  if (platform === "windows") {
    document.documentElement.dataset.platform = platform;
  }

  // Runtime Translation Overlay (Upstream Seam)
  if (!window.__codexBridgeI18nLoaded) {
    document.write('<script src="i18n-en.js"><\/script>');
  }
}());

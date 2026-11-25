/* =============================================================
   Two jobs: remember which steep you like, and keep the
   comments frame in step with it. Nothing else.
   ============================================================= */
(function () {
  "use strict";

  var KEY = "steep";
  var root = document.documentElement;

  function get() {
    try { return window.localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function save(v) {
    try { window.localStorage.setItem(KEY, v); } catch (e) {}
  }

  function giscus(theme) {
    var frame = document.querySelector("iframe.giscus-frame");
    if (!frame || !frame.contentWindow) { return; }
    frame.contentWindow.postMessage(
      { giscus: { setConfig: { theme: theme === "night" ? "transparent_dark" : "light" } } },
      "https://giscus.app"
    );
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "night" ? "#17130f" : "#f2ebdf");
    }
    var btn = document.getElementById("steep");
    if (btn) {
      btn.textContent = theme === "night" ? "\u25D3 night steep" : "\u25D2 day steep";
      btn.setAttribute("aria-label",
        "Switch to " + (theme === "night" ? "day" : "night") + " steep");
    }
    giscus(theme);
  }

  function start() {
    var saved = get();
    if (saved !== "day" && saved !== "night") {
      saved = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "night" : "day";
    }
    apply(saved);

    var btn = document.getElementById("steep");
    if (btn) {
      btn.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "night" ? "day" : "night";
        apply(next);
        save(next);
      });
    }

    // giscus loads late and announces itself; re-send the theme then
    window.addEventListener("message", function (e) {
      if (e.origin === "https://giscus.app") {
        giscus(root.getAttribute("data-theme"));
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();

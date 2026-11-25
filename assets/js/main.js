/* =============================================================
   Three jobs: remember which steep you like, fetch the comment
   thread when someone asks for it, and keep that thread in step
   with the steep. Nothing else.
   ============================================================= */
(function () {
  "use strict";

  var KEY = "steep";
  var UTTERANCES = "https://utteranc.es";
  var root = document.documentElement;

  function get() {
    try { return window.localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function save(v) {
    try { window.localStorage.setItem(KEY, v); } catch (e) {}
  }

  function box() {
    return document.getElementById("comments");
  }

  /* utterances offers no way to restyle a frame once it is up, so
     changing steep means building the frame again from scratch. */
  function mount() {
    var el = box();
    if (!el) { return; }
    var slot = el.querySelector(".comments-mount");
    if (!slot) { return; }

    while (slot.firstChild) { slot.removeChild(slot.firstChild); }

    var s = document.createElement("script");
    s.src = UTTERANCES + "/client.js";
    s.async = true;
    s.crossOrigin = "anonymous";
    s.setAttribute("repo", el.getAttribute("data-repo"));
    s.setAttribute("issue-term", el.getAttribute("data-issue-term"));
    s.setAttribute("label", el.getAttribute("data-label"));
    s.setAttribute(
      "theme",
      root.getAttribute("data-theme") === "night" ? "github-dark" : "github-light"
    );
    slot.appendChild(s);

    el.setAttribute("data-loaded", "true");
  }

  function remount() {
    var el = box();
    if (el && el.getAttribute("data-loaded") === "true") { mount(); }
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "night" ? "#2b241c" : "#f2ebdf");
    }
    var btn = document.getElementById("steep");
    if (btn) {
      btn.textContent = theme === "night" ? "◓ night steep" : "◒ day steep";
      btn.setAttribute("aria-label",
        "Switch to " + (theme === "night" ? "day" : "night") + " steep");
    }
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
        remount();
      });
    }

    var el = box();
    if (!el) { return; }
    var opener = el.querySelector(".comments-open");

    /* pages that already have a thread open it straight away */
    if (el.getAttribute("data-autoload") === "true") {
      if (opener) { opener.hidden = true; }
      mount();
      return;
    }

    if (opener) {
      opener.addEventListener("click", function () {
        opener.hidden = true;
        mount();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();

/* ==========================================================================
   EighteenLiu · 站点交互脚本
   功能：侧边栏抽屉、分区分组筛选、小节滚动高亮、站内检索
   依赖：无外部库，原生 JavaScript
   ========================================================================== */
(function () {
  "use strict";

  var doc = document;
  var body = doc.body;

  /* -------------------- 侧边栏抽屉 -------------------- */
  var sidebar = doc.getElementById("sidebar");
  var overlay = doc.getElementById("overlay");
  var toggle = doc.getElementById("menuToggle");

  function openSidebar() {
    if (!sidebar) return;
    sidebar.classList.add("is-open");
    if (overlay) overlay.classList.add("is-open");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
  }
  function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove("is-open");
    if (overlay) overlay.classList.remove("is-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      if (sidebar.classList.contains("is-open")) closeSidebar();
      else openSidebar();
    });
  }
  if (overlay) overlay.addEventListener("click", closeSidebar);
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) closeSidebar();
  });

  /* -------------------- 侧边栏分组筛选 -------------------- */
  var filter = doc.getElementById("navFilter");
  if (filter) {
    filter.addEventListener("input", function () {
      var q = filter.value.trim().toLowerCase();
      var groups = doc.querySelectorAll(".nav-group");
      Array.prototype.forEach.call(groups, function (group) {
        var hit = 0;
        var items = group.querySelectorAll(".nav-item");
        Array.prototype.forEach.call(items, function (item) {
          var text = (item.getAttribute("data-keywords") || item.textContent || "").toLowerCase();
          var match = !q || text.indexOf(q) !== -1;
          item.classList.toggle("is-hidden", !match);
          if (match) hit++;
        });
        group.classList.toggle("is-hidden", hit === 0);
        if (q && hit > 0) {
          Array.prototype.forEach.call(group.querySelectorAll(".nav-item"), function (item) {
            if (!item.classList.contains("is-hidden")) item.classList.add("is-open");
          });
        } else if (!q) {
          Array.prototype.forEach.call(group.querySelectorAll(".nav-item"), function (item) {
            if (!item.classList.contains("is-current-section")) item.classList.remove("is-open");
          });
        }
      });
    });
  }

  /* -------------------- 小节滚动高亮 -------------------- */
  var subLinks = Array.prototype.slice.call(doc.querySelectorAll(".nav-sub a[href^='#']"));
  if (subLinks.length) {
    var targets = subLinks
      .map(function (link) {
        var id = link.getAttribute("href").slice(1);
        var el = doc.getElementById(id);
        return el ? { link: link, el: el } : null;
      })
      .filter(Boolean);

    function setCurrent(active) {
      subLinks.forEach(function (l) { l.classList.remove("is-current"); });
      if (active) active.classList.add("is-current");
    }

    /* 判定依据：小节标题是否已经越过视口上方的一条「判定线」。
       用滚动位置计算，比交叉比例稳：窄屏下小节很长，交叉比例的写法会
       长时间停在第一个小节不动。 */
    function updateCurrent() {
      if (!targets.length) return;
      var line = Math.max(120, window.innerHeight * 0.3);
      var current = targets[0];
      targets.forEach(function (t) {
        if (t.el.getBoundingClientRect().top <= line) current = t;
      });
      var atBottom = window.innerHeight + window.pageYOffset >= doc.documentElement.scrollHeight - 4;
      if (atBottom) current = targets[targets.length - 1];
      setCurrent(current.link);
    }

    /* 50ms 节流，避免滚动时反复触发布局计算 */
    var lastTick = 0;
    function onScroll() {
      var now = Date.now();
      if (now - lastTick < 50) return;
      lastTick = now;
      updateCurrent();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateCurrent();
    // 桌面端窄屏时，点击小节后收起抽屉
    subLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 1024) closeSidebar();
      });
    });
  }

  /* -------------------- 站内检索 -------------------- */
  var searchWrap = doc.getElementById("searchbox");
  var searchInput = doc.getElementById("searchInput");
  var searchResults = doc.getElementById("searchResults");
  var searchButtons = doc.querySelectorAll("[data-open-search]");
  var indexData = null;
  var indexState = "idle";

  function openSearch() {
    if (!searchWrap) return;
    searchWrap.classList.add("is-open");
    if (searchInput) { searchInput.value = ""; searchInput.focus(); }
    renderResults("");
    loadIndex();
  }
  function closeSearch() {
    if (!searchWrap) return;
    searchWrap.classList.remove("is-open");
  }

  function loadIndex() {
    if (indexState !== "idle") return;
    indexState = "loading";
    var url = searchWrap.getAttribute("data-index");
    if (!url) { indexState = "error"; return; }
    fetch(url, { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(function (data) {
        indexData = Array.isArray(data) ? data : [];
        indexState = "ready";
        if (searchInput) renderResults(searchInput.value);
      })
      .catch(function () {
        indexState = "error";
        if (searchResults) {
          searchResults.innerHTML =
            '<p class="search-empty">检索索引需要以 HTTP 方式访问站点后可用（本地直接双击打开的 file:// 页面会受浏览器安全策略限制）。</p>';
        }
      });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function renderResults(q) {
    if (!searchResults) return;
    if (indexState === "loading") { searchResults.innerHTML = '<p class="search-empty">正在载入检索索引…</p>'; return; }
    if (indexState === "error") return;
    if (!indexData) return;

    var query = (q || "").trim().toLowerCase();
    if (!query) {
      var quick = indexData.slice(0, 8);
      searchResults.innerHTML =
        '<p class="search-empty" style="text-align:left;padding:10px 12px;">输入关键词检索站内分区与条目，例如：大创、奖学金、澳门、学生会。</p>' +
        quick.map(renderItem).join("");
      return;
    }
    var words = query.split(/\s+/);
    var hits = indexData.filter(function (item) {
      var hay = (item.title + " " + (item.section || "") + " " + (item.text || "") + " " + (item.keywords || "")).toLowerCase();
      return words.every(function (w) { return hay.indexOf(w) !== -1; });
    }).slice(0, 40);

    if (!hits.length) {
      searchResults.innerHTML = '<p class="search-empty">未找到与「' + escapeHtml(q) + '」相关的条目。</p>';
      return;
    }
    searchResults.innerHTML = hits.map(renderItem).join("");
  }

  function renderItem(item) {
    return (
      '<a href="' + escapeHtml(item.url) + '">' +
      '<span class="r-title">' + escapeHtml(item.title) + "</span>" +
      '<span class="r-meta"> · ' + escapeHtml(item.section || "") + "</span>" +
      (item.text ? '<div class="r-snippet">' + escapeHtml(String(item.text).slice(0, 96)) + "</div>" : "") +
      "</a>"
    );
  }

  Array.prototype.forEach.call(searchButtons, function (btn) {
    btn.addEventListener("click", openSearch);
  });
  if (searchInput) {
    searchInput.addEventListener("input", function () { renderResults(searchInput.value); });
  }
  if (searchWrap) {
    searchWrap.addEventListener("click", function (e) {
      if (e.target === searchWrap) closeSearch();
    });
  }
  doc.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeSearch(); closeSidebar(); }
    var tag = (e.target && e.target.tagName) || "";
    var typing = tag === "INPUT" || tag === "TEXTAREA" || (e.target && e.target.isContentEditable);
    if (!typing && (e.key === "/" || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k"))) {
      e.preventDefault();
      openSearch();
    }
  });

  /* -------------------- 年份 -------------------- */
  Array.prototype.forEach.call(doc.querySelectorAll("[data-year]"), function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();

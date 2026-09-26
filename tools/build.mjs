/* ==========================================================================
   EighteenLiu · 静态站点生成器
   用法：node tools/build.mjs
   作用：读取 content/ 下的内容数据，生成首页、分区页、文章页、404 页、
        检索索引与站点地图。生成的 HTML 为纯静态文件，可直接部署到
        GitHub Pages（master 分支根目录）。
   ========================================================================== */
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { site, nav, sections } from "../content/site-content.mjs";
import { posts } from "../content/posts.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(here, "..");

/* 输出目录：默认写回仓库根目录；可用 --out=<绝对路径> 生成到其他目录。
   这样做是为了适配受限环境下「生成与写入分离」的部署方式。 */
const outArg = process.argv.slice(2).find((a) => a.startsWith("--out="));
const OUT = outArg ? resolve(outArg.slice("--out=".length)) : ROOT;

/* ------------------------------ 工具函数 ------------------------------ */
const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function write(relPath, html) {
  const full = join(OUT, relPath);
  mkdirSync(dirname(full), { recursive: true });
  const output = html.replace(/[ \t]+(?=\r?$)/gm, "");
  writeFileSync(full, output, "utf8");
  const bytes = Buffer.byteLength(output, "utf8");
  console.log(`  生成 ${relPath}  (${(bytes / 1024).toFixed(1)} KB)`);
}

const ICONS = {
  overview: '<path d="M3 11.2 12 4l9 7.2"/><path d="M5.5 10v10h13V10"/>',
  profile: '<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c1.2-3.8 4-5.8 7.5-5.8S18.3 16.2 19.5 20"/>',
  academics: '<path d="M3 7.5 12 3.5l9 4-9 4z"/><path d="M7 10.5V16c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6v-5.5"/>',
  projects: '<path d="M4 6.5h6l1.6 2H20v10.5H4z"/><path d="M8.5 13.5h7"/><path d="M12 10.5v6"/>',
  honors: '<circle cx="12" cy="9.5" r="5"/><path d="M8.6 13.6 7 21l5-2.4L17 21l-1.6-7.4"/>',
  leadership: '<circle cx="9" cy="8.5" r="3.2"/><path d="M3 19.5c.9-3 3-4.6 6-4.6s5.1 1.6 6 4.6"/><path d="M16 6.5a3 3 0 0 1 0 6"/><path d="M17.5 19.5c-.3-1.6-.9-2.9-1.8-3.9"/>',
  media: '<path d="M4 5.5h13v10H4z"/><path d="M17 9l3.5-2v9L17 14"/><path d="M7 19.5h7"/>',
  campus: '<path d="M3 20h18"/><path d="M5.5 20V9.5L12 5l6.5 4.5V20"/><path d="M10 20v-5.5h4V20"/>',
  skills: '<path d="M9 4.5 4 12l5 7.5"/><path d="M15 4.5 20 12l-5 7.5"/><path d="M13 4l-2 16"/>',
  gallery: '<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><circle cx="9" cy="10.5" r="1.6"/><path d="M4.5 16.5 9.5 12l3.5 3 3-2.2 4 3.7"/>',
  future: '<path d="M12 3.5c3.6 0 6.5 2.9 6.5 6.5 0 4.2-6.5 10.5-6.5 10.5S5.5 14.2 5.5 10C5.5 6.4 8.4 3.5 12 3.5z"/><circle cx="12" cy="10" r="2.2"/>',
  sources: '<path d="M6 3.5h9.5L19 7v13.5H6z"/><path d="M15 3.5V7h4"/><path d="M9 11.5h7M9 14.5h7M9 17h4"/>',
  posts: '<path d="M5 4.5h14v15H5z"/><path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="m15.5 15.5 4 4"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
};

const svg = (name, cls = "") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.overview}</svg>`;

function urlPrefix(depth) {
  return depth === 0 ? "" : "../".repeat(depth);
}

/* 站内相对链接：按当前渲染深度自动补齐 ../ 前缀 */
let RENDER_DEPTH = 0;
function rel(href) {
  if (!href) return href;
  if (/^([a-z]+:)?\/\//i.test(href) || href.startsWith("#") || href.startsWith("/")) return href;
  return urlPrefix(RENDER_DEPTH) + href;
}

/* ------------------------------ 侧边栏 ------------------------------ */
function renderSidebar(activeSectionId, depth, subBlocks) {
  const p = urlPrefix(depth);
  const groups = [];
  nav.forEach((item) => {
    let g = groups.find((x) => x.label === item.group);
    if (!g) { g = { label: item.group, items: [] }; groups.push(g); }
    g.items.push(item);
  });

  const groupsHtml = groups
    .map((g) => {
      const items = g.items
        .map((item) => {
          const active = item.id === activeSectionId;
          const keywords = [item.title, item.group, ...(item.keywords || [])].join(" ");
          let sub = "";
          if (active && subBlocks && subBlocks.length) {
            sub = `<ul class="nav-sub">${subBlocks
              .map((b) => `<li><a href="#${esc(b.id)}">${esc(b.title)}</a></li>`)
              .join("")}</ul>`;
          }
          return `<li class="nav-item${active ? " is-active is-open is-current-section" : ""}" data-keywords="${esc(keywords)}">
  <a class="nav-item__link" href="${p}${item.path}">${svg(item.icon)}<span>${esc(item.title)}</span></a>
  ${sub}
</li>`;
        })
        .join("");
      return `<div class="nav-group"><div class="nav-group__label">${esc(g.label)}</div><ul style="list-style:none;margin:0;padding:0;">${items}</ul></div>`;
    })
    .join("");

  return `<aside class="sidebar" id="sidebar" aria-label="站点分区导航">
  <div class="sidebar__brand">
    <img class="brand__mark" src="${p}assets/images/bistu-logo.png" alt="北京信息科技大学校徽" width="42" height="42">
    <div class="brand__text">
      <span class="brand__name">刘家梁 · 个人档案</span>
      <span class="brand__sub">Personal Archive</span>
    </div>
  </div>
  <div class="sidebar__filter">
    <label class="visually-hidden" for="navFilter" style="position:absolute;left:-9999px;">筛选分区</label>
    <input id="navFilter" type="search" placeholder="筛选分区，如：大创 / 奖学金" autocomplete="off">
  </div>
  <nav class="sidebar__nav">${groupsHtml}</nav>
  <div class="sidebar__foot">
    <div>北京信息科技大学 · 计算机学院</div>
    <div>内容依据 <strong>${esc(site.updated)}</strong> 归档材料整理</div>
    <div>全部内容 100% 来自可核验材料</div>
  </div>
</aside>`;
}

/* ------------------------------ 页头 / 页脚 ------------------------------ */
function renderTopbar(depth, crumbs, badge) {
  const p = urlPrefix(depth);
  return `<header class="topbar">
  <button class="icon-btn menu-toggle" id="menuToggle" aria-label="打开分区导航" aria-expanded="false" aria-controls="sidebar">${svg("menu")}</button>
  <nav class="crumbs" aria-label="面包屑">
    <a href="${p}index.html">首页</a>
    ${crumbs.map((c) => (c.href ? `<span class="sep">/</span><a href="${p}${c.href}">${esc(c.label)}</a>` : `<span class="sep">/</span><span class="current">${esc(c.label)}</span>`)).join("")}
  </nav>
  <div class="topbar__spacer"></div>
  <button class="icon-btn" data-open-search aria-label="站内检索">${svg("search")}</button>
  <span class="topbar__badge"><span class="dot"></span>${esc(badge || site.updated)}</span>
</header>`;
}

function renderSearchBox(depth) {
  const p = urlPrefix(depth);
  return `<div class="searchbox" id="searchbox" data-index="${p}assets/data/search-index.json" role="dialog" aria-modal="true" aria-label="站内检索">
  <div class="search-panel">
    <div class="search-panel__inner">
      <div class="search-panel__bar">${svg("search", "s-icon")}<input id="searchInput" type="search" placeholder="检索站内分区与小节…（Esc 关闭）" autocomplete="off"></div>
      <div class="search-results" id="searchResults"></div>
    </div>
  </div>
</div>`;
}

function renderFoot(depth) {
  const p = urlPrefix(depth);
  return `<footer class="site-foot">
  <div>© <span data-year>2026</span> 刘家梁 · 本站内容来自本人学习与生活材料的整理，全部真实，不含虚构。</div>
  <div>本站为静态站点，源码与内容数据存放于 <a href="https://github.com/EighteenLiu/EighteenLiu.github.io" target="_blank" rel="noopener">GitHub 仓库</a>。</div>
  <div><a href="${p}index.html">返回总览</a> · <a href="${p}sections/sources/index.html">资料来源与真实性与隐私说明</a></div>
</footer>`;
}

function pageShell({ depth, title, desc, activeSectionId, subBlocks, crumbs, bodyHtml, badge, canonical, robots }) {
  const p = urlPrefix(depth);
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="author" content="刘家梁">
<meta name="theme-color" content="#05070d">
<link rel="icon" href="${p}assets/images/bistu-logo.png" type="image/png">
<link rel="stylesheet" href="${p}assets/css/site.css">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
${canonical ? `<link rel="canonical" href="${esc(canonical)}">` : ""}
${robots ? `<meta name="robots" content="${esc(robots)}">` : ""}
</head>
<body>
<a class="skip-link" href="#main">跳到主要内容</a>
<div class="layout">
${renderSidebar(activeSectionId, depth, subBlocks)}
<div class="overlay" id="overlay"></div>
<main class="main" id="main">
${renderTopbar(depth, crumbs, badge)}
<div class="content">
${bodyHtml}
</div>
</main>
</div>
${renderSearchBox(depth)}
<script src="${p}assets/js/site.js" defer></script>
</body>
</html>
`;
}

/* ------------------------------ 内容块渲染 ------------------------------ */
function isSub(block) {
  return block.nav !== false && block.title && block.type !== "hero";
}

function renderBlock(block) {
  const id = block.id ? ` id="${esc(block.id)}"` : "";
  switch (block.type) {
    case "prose":
      return sectionWrap(block, `<div class="card">${block.html}</div>`);
    case "list":
      return sectionWrap(
        block,
        `<div class="card"><ul class="clean">${block.items.map((i) => `<li>${i}</li>`).join("")}</ul></div>`
      );
    case "note":
      return sectionWrap(block, `<div class="note${block.variant === "warn" ? " note--warn" : ""}"><span class="note__icon">${block.variant === "warn" ? "注意" : "说明"}</span><div>${block.html}</div></div>`);
    case "stats":
      return sectionWrap(
        block,
        `<div class="grid cols-${block.cols || 4}">${block.items
          .map((s) => `<div class="stat${s.accent ? " stat--accent" : ""}"><div class="stat__value">${s.value}${s.unit ? `<small>${esc(s.unit)}</small>` : ""}</div><div class="stat__label">${esc(s.label)}</div></div>`)
          .join("")}</div>`
      );
    case "kv":
      return sectionWrap(
        block,
        `<div class="card"><dl class="kv">${block.items.map((i) => `<dt>${esc(i.k)}</dt><dd>${i.v}</dd>`).join("")}</dl></div>`
      );
    case "timeline":
      return sectionWrap(
        block,
        `<ol class="timeline">${block.items
          .map((i) => `<li><div class="tl-date">${esc(i.date)}</div><div class="tl-title">${i.title}</div><p class="tl-desc">${i.desc}</p>${i.source ? `<span class="src">来源：${esc(i.source)}</span>` : ""}</li>`)
          .join("")}</ol>`
      );
    case "table":
      return sectionWrap(
        block,
        `<div class="table-wrap"><table class="data"><thead><tr>${block.columns
          .map((c) => `<th>${esc(c)}</th>`)
          .join("")}</tr></thead><tbody>${block.rows
          .map((r) => `<tr>${r.map((c, i) => `<td${block.numeric && block.numeric.includes(i) ? ' class="num"' : ""}>${c}</td>`).join("")}</tr>`)
          .join("")}</tbody></table></div>${block.footnote ? `<p class="src">${block.footnote}</p>` : ""}`
      );
    case "cards":
      return sectionWrap(
        block,
        `<div class="grid cols-${block.cols || 2}">${block.items
          .map(
            (c) => `<article class="card"><h3 class="card__title">${c.title}</h3>${c.sub ? `<p class="card__sub">${esc(c.sub)}</p>` : ""}
${c.html || ""}
${c.tags ? `<div class="tags" style="margin-top:12px;">${c.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
${c.source ? `<span class="src">来源：${esc(c.source)}</span>` : ""}</article>`
          )
          .join("")}</div>`
      );
    case "entries":
      return sectionWrap(
        block,
        `<div class="grid cols-${block.cols || 3}">${block.items
          .map((c) => `<a class="entry" href="${esc(rel(c.href))}"><span class="entry__no">${esc(c.no)}</span><h3 class="entry__title">${esc(c.title)}</h3><p class="entry__desc">${esc(c.desc)}</p></a>`)
          .join("")}</div>`
      );
    case "tags":
      return sectionWrap(
        block,
        `<div class="card"><div class="tags">${block.items
          .map((t) => `<span class="tag${t.tone ? ` tag--${t.tone}` : ""}">${esc(typeof t === "string" ? t : t.label)}</span>`)
          .join("")}</div></div>`
      );
    case "raw":
      return sectionWrap(block, block.html);
    default:
      return "";
  }
}

function sectionWrap(block, inner) {
  const id = block.id ? ` id="${esc(block.id)}"` : "";
  const head = block.title
    ? `<h2 class="block-title">${block.idx ? `<span class="idx">${esc(block.idx)}</span>` : ""}${esc(block.title)}</h2>${block.note ? `<p class="block-note">${block.note}</p>` : ""}`
    : "";
  return `<section class="block"${id}>${head}${inner}</section>`;
}

/* ------------------------------ 生成分区页 ------------------------------ */
function buildSectionPage(section, index) {
  RENDER_DEPTH = 2;
  const subBlocks = section.blocks.filter(isSub).map((b) => ({ id: b.id, title: b.title }));
  const body = section.blocks.map(renderBlock).join("\n");
  const prev = sections[index - 1];
  const next = sections[index + 1];
  /* 分区页位于 sections/<分区>/index.html：
     同级分区用 ../<路径>，位于站点根目录的分区（总览）用 ../../<路径>。
     这样即使以后某个分区不放在 sections/ 下，翻页链接也不会失效。 */
  const secHref = (s) => (s.path.indexOf("sections/") === 0 ? "../" + s.path.slice("sections/".length) : "../../" + s.path);
  const pager = `<nav class="pager">
  ${prev ? `<a class="prev" href="${secHref(prev)}"><span>上一分区</span>${esc(prev.title)}</a>` : `<a class="prev" href="../../index.html"><span>返回</span>站点总览</a>`}
  ${next ? `<a class="next" href="${secHref(next)}"><span>下一分区</span>${esc(next.title)}</a>` : `<a class="next" href="../../posts/index.html"><span>继续</span>博客文章</a>`}
</nav>`;

  const head = `<div class="page-head">
  <span class="eyebrow">${esc(section.eyebrow || section.id.toUpperCase())}</span>
  <h1 class="page-title">${esc(section.title)}</h1>
  <p class="page-lede">${section.lede}</p>
</div>`;

  const html = pageShell({
    depth: 2,
    title: `${section.title} · 刘家梁个人档案`,
    desc: section.lede.replace(/<[^>]+>/g, "").slice(0, 150),
    activeSectionId: section.id,
    subBlocks,
    crumbs: [{ label: section.title }],
    bodyHtml: `${head}\n${body}\n${pager}\n${renderFoot(2)}`,
    canonical: `${site.baseUrl}/sections/${section.id}/`,
  });
  write(section.path, html);
}

/* ------------------------------ 生成首页 ------------------------------ */
function buildHome(overview) {
  RENDER_DEPTH = 0;
  const subBlocks = overview.blocks.filter(isSub).map((b) => ({ id: b.id, title: b.title }));
  const body = overview.blocks.map(renderBlock).join("\n");
  const html = pageShell({
    depth: 0,
    title: site.title,
    desc: site.description,
    activeSectionId: overview.id,
    subBlocks,
    crumbs: [],
    bodyHtml: `${body}\n${renderFoot(0)}`,
    canonical: site.baseUrl + "/",
    badge: site.updated,
  });
  write("index.html", html);
}

/* ------------------------------ 生成文章页 ------------------------------ */
function buildPosts() {
  RENDER_DEPTH = 1;
  const listBody = `<div class="page-head">
  <span class="eyebrow">NOTES</span>
  <h1 class="page-title">博客文章</h1>
  <p class="page-lede">这里保存的是建站初期记录的技术问题与笔记，内容保持原始状态。个人经历类内容已整理进左侧各分区。</p>
</div>
<div class="grid cols-2">${posts
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(
      (p) => `<a class="entry" href="${p.slug}/index.html"><span class="entry__no">${esc(p.date)}</span><h3 class="entry__title">${esc(p.title)}</h3><p class="entry__desc">${esc(p.summary)}</p></a>`
    )
    .join("")}</div>
<div class="pager"><a class="prev" href="../index.html"><span>返回</span>站点总览</a><a class="next" href="../sections/sources/index.html"><span>继续</span>资料来源与说明</a></div>
${renderFoot(1)}`;

  write(
    "posts/index.html",
    pageShell({
      depth: 1,
      title: "博客文章 · 刘家梁个人档案",
      desc: "建站初期的技术笔记与文章列表。",
      activeSectionId: "posts",
      subBlocks: [],
      crumbs: [{ label: "博客文章" }],
      bodyHtml: listBody,
      canonical: `${site.baseUrl}/posts/`,
    })
  );

  posts.forEach((post) => {
    RENDER_DEPTH = 2;
    const body = `<div class="page-head">
  <span class="eyebrow">NOTE · ${esc(post.date)}</span>
  <h1 class="page-title">${esc(post.title)}</h1>
  <p class="page-lede">${esc(post.summary)}</p>
</div>
<section class="block"><div class="card">${post.html}</div></section>
<div class="pager"><a class="prev" href="../index.html"><span>返回</span>文章列表</a><a class="next" href="../../index.html"><span>返回</span>站点总览</a></div>
${renderFoot(2)}`;
    write(
      `posts/${post.slug}/index.html`,
      pageShell({
        depth: 2,
        title: `${post.title} · 刘家梁个人档案`,
        desc: post.summary,
        activeSectionId: "posts",
        subBlocks: [],
        crumbs: [{ label: "博客文章", href: "posts/index.html" }, { label: post.title }],
        bodyHtml: body,
        canonical: `${site.baseUrl}/posts/${post.slug}/`,
      })
    );
  });
}

/* ------------------------------ 生成 404 页 ------------------------------ */
function build404() {
  const body = `<div class="page-head">
  <span class="eyebrow">404</span>
  <h1 class="page-title">没有找到这个页面</h1>
  <p class="page-lede">你访问的地址不存在，可能是链接已经调整。可以从左侧分区导航继续浏览，或回到站点总览。</p>
</div>
<div class="pager"><a class="prev" href="/index.html"><span>返回</span>站点总览</a><a class="next" href="/sections/sources/index.html"><span>查看</span>资料索引</a></div>
${renderFoot(0)}`;
  write("404.html", pageShell({ depth: 0, title: "页面不存在 · 刘家梁个人档案", desc: "页面不存在。", activeSectionId: "overview", subBlocks: [], crumbs: [], bodyHtml: body, robots: "noindex, follow" }));
}

/* ------------------------------ 检索索引 ------------------------------ */
function buildSearchIndex() {
  const items = [];
  sections.forEach((s) => {
    items.push({
      title: s.title,
      section: "分区",
      url: `/${s.path.replace(/\\/g, "/")}`,
      text: s.lede.replace(/<[^>]+>/g, ""),
      keywords: (s.keywords || []).join(" "),
    });
    s.blocks.forEach((b) => {
      if (!b.id) return;
      const plain = {};
      items.push({
        title: `${s.title} · ${b.title || "小节"}`,
        section: "小节",
        url: `/${s.path.replace(/\\/g, "/")}#${b.id}`,
        text: blockPlainText(b),
        keywords: (s.keywords || []).join(" "),
      });
    });
  });
  posts.forEach((p) => {
    items.push({ title: p.title, section: "博客文章", url: `/posts/${p.slug}/`, text: p.summary, keywords: "文章 笔记" });
  });
  write("assets/data/search-index.json", JSON.stringify(items, null, 2));
}

function blockPlainText(b) {
  const out = [];
  const push = (v) => { if (typeof v === "string") out.push(v.replace(/<[^>]+>/g, " ")); };
  ["html", "note", "footnote"].forEach((k) => push(b[k]));
  (b.items || []).forEach((i) => {
    if (typeof i === "string") push(i);
    else { push(i.title); push(i.desc); push(i.label); push(i.value); push(i.k); push(i.v); }
  });
  (b.rows || []).forEach((r) => r.forEach((c) => push(c)));
  return out.join(" ").replace(/\s+/g, " ").trim().slice(0, 400);
}

/* ------------------------------ 站点地图 ------------------------------ */
function buildSitemap() {
  const urls = [""]
    .concat(sections.map((s) => `/${s.path.replace(/\\/g, "/").replace(/index\.html$/, "")}`))
    .concat(["posts/", "sections/"])
    .concat(posts.map((p) => `posts/${p.slug}/`));
  const xml = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `<url><loc>${site.baseUrl}/${u.replace(/^\/+/, "")}</loc><changefreq>monthly</changefreq><priority>${u === "" ? "1.0" : "0.7"}</priority></url>`)
  .join("\n")}
</urlset>
`;
  write("sitemap.xml", xml);
}

/* ------------------------------ 主流程 ------------------------------ */
console.log(`开始构建站点… 输出目录：${OUT}`);
const overview = sections.find((s) => s.id === "overview");
if (!overview) throw new Error("content 中缺少 id 为 overview 的分区");
buildHome(overview);
sections.forEach((s, i) => { if (s.id !== "overview") buildSectionPage(s, i); });
buildPosts();
build404();
buildSearchIndex();
buildSitemap();
console.log("构建完成。");

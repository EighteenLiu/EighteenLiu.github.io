# EighteenLiu · 个人博客站点说明

线上地址：<https://eighteenliu.github.io/>
仓库：<https://github.com/EighteenLiu/EighteenLiu.github.io>

这是刘家梁的个人档案式博客。它不做「一次性展示页」，而是把大学阶段真实留下的课程、项目、工作与生活记录整理成
「分区 + 小节」的长期档案，后续会持续加入旅游、课程等新分区。

**站内每一段经历都来自我真实保存的材料和公开工程记录，不编写没有发生过的事情。**
不同记录出现冲突时怎么处理、哪些内容不公开，都整理在 `CONTENT_SOURCES.md`。

---

## 一、站点特征

| 特征 | 说明 |
| --- | --- |
| 零依赖 | 无框架、无外链 CDN；生成器只用 Node 内置模块 |
| 左侧固定侧边栏 | 分组导航 + 当前分区的小节二级导航，可输入关键词筛选 |
| 分区阅读 | 可在个人、经历、生活、延伸等分组间切换；进入分区后按小节阅读，滚动时自动高亮 |
| 个人照片 | 首页使用我本人照片，其余含他人肖像的影像不公开 |
| 总览时间轴 | 串联 2022—2026 本科阶段和研究生阶段开头的重要节点 |
| 内容与页面分离 | 页面由 `content/` 数据 + `tools/build.mjs` 生成，改内容不改 HTML |
| 纯静态 | 产物是 HTML/CSS/JS，直接放 GitHub Pages 即可 |
| 相对路径 | 页面对资源一律用相对路径，站点可放在任意子目录 |
| 可扩展 | 新增分区只需加数据与导航项，生成器自动出页面、更新检索与站点地图 |
| 科技感视觉 | 深色底 + 青蓝高光 + 等宽字体点缀，克制、不中二 |
| 图形化表达 | 时间线、数据条、流程链、能力标签和主题分布图，把复杂经历讲清楚 |

---

## 二、目录结构

```text
EighteenLiu.github.io/
├─ index.html                     总览页（生成产物）
├─ 404.html                       404 页（生成产物）
├─ sitemap.xml                    站点地图（生成产物）
├─ sections/<分区>/index.html     各分区页（生成产物）
├─ posts/index.html               文章列表（生成产物）
├─ posts/<slug>/index.html        文章页（生成产物）
├─ assets/
│  ├─ css/site.css                样式（源）
│  ├─ js/site.js                  交互（源）
│  ├─ images/*                    图片资源（源）
│  └─ data/search-index.json      检索索引（生成产物）
├─ content/
│  ├─ site-content.mjs            ★ 全站内容唯一数据源（源）
│  └─ posts.mjs                   历史文章数据（源）
├─ tools/
│  └─ build.mjs                   ★ 静态站点生成器（源）
├─ README.md                      本文件
├─ SITE_STRUCTURE.md              站点结构、URL 对照、区块类型
└─ CONTENT_SOURCES.md             内容整理、冲突处理、隐私边界
```

更细的「源文件 vs 生成产物」「URL ↔ 源文件」对照见 `SITE_STRUCTURE.md`。

---

## 三、本地预览

```powershell
cd D:\桌面\文件\_blog_repo
python -m http.server 8791 --bind 127.0.0.1
# 浏览器打开 http://127.0.0.1:8791/index.html
```

直接双击 `index.html` 也能看，但走 HTTP 服务更接近线上效果（相对路径、检索索引加载都正常）。

---

## 四、修改内容并重新构建

1. 打开 `content/site-content.mjs`（全站内容的唯一来源）。
2. 修改 / 新增对应的分区与区块。
3. 执行构建：

```powershell
cd D:\桌面\文件\_blog_repo
node tools/build.mjs
```

生成器会重新写出：首页、每个分区页、文章列表与文章页、404 页、检索索引、站点地图。写入前会统一清理生成文本的行尾空白。404 页会额外输出 `<meta name="robots" content="noindex, follow">`，避免错误地址被搜索引擎收录，同时保留站内链接抓取。

### 如果 Node 写入仓库报 EPERM

部分受限环境下 Node 无法直接写入仓库目录，此时用「生成到中转目录 + 复制回仓库」的方式：

```powershell
cd D:\桌面\文件\_blog_repo
node tools/build.mjs --out='D:\桌面\文件\_blog_out'

# 再逐文件复制回仓库。批量 Copy-Item -Recurse 在部分环境下会报
# "Access denied"，逐文件循环最稳。生成器不产出 assets/css、assets/js、
# assets/images，因此这一步不会覆盖仓库里已有的样式、脚本与图标。
$src='D:\桌面\文件\_blog_out'; $dst='D:\桌面\文件\_blog_repo'
Get-ChildItem -LiteralPath $src -Recurse -File | ForEach-Object {
  $rel = $_.FullName.Substring($src.Length + 1)
  $target = Join-Path $dst $rel
  $dir = Split-Path -Parent $target
  if (-not (Test-Path -LiteralPath $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  Copy-Item -LiteralPath $_.FullName -Destination $target -Force
}
```

`--out=` 不传时，默认写回仓库根目录。

---

## 五、如何新增一个分区（例如「旅游」）

1. 在 `content/site-content.mjs` 中仿照已有分区新增一个对象，例如：

```js
const travel = {
  id: "travel",
  title: "旅行记录",
  eyebrow: "PART 12 · TRAVEL",
  path: "sections/travel/index.html",
  keywords: ["旅行", "城市", "行程"],
  lede: "一句话说明这个分区记录什么。",
  blocks: [
    { id: "trip-1", idx: "01", title: "某次旅行", type: "prose", html: "<p>正文……</p>" },
  ],
};
```

2. 把它加进文件末尾的 `sections` 数组（**数组顺序 = 翻页顺序**）。
3. 在 `nav` 数组里加一条导航，`path` 与上面的 `path` 保持一致，`group` 决定它落在侧边栏哪一组（如新增一组「旅行」）。
4. 重新构建。

生成器会自动产出 `sections/travel/index.html`、更新检索索引与站点地图，无需改 `build.mjs`。

---

## 六、可用的区块类型

| 类型 | 用途 | 关键字段 |
| --- | --- | --- |
| `prose` | 普通正文 | `html` |
| `stats` | 关键数据卡 | `cols`、`items[{value, unit, label, accent}]` |
| `table` | 表格 | `columns[]`、`rows[][]`、`footnote` |
| `timeline` | 时间线 | `items[{date, title, desc}]` |
| `cards` | 卡片组 | `items[{title, desc, ...}]`、`footnote` |
| `list` | 列表 | `items[]` |
| `kv` | 键值对 | `items[{k, v}]` |
| `tags` | 标签 | `items[]` |
| `entries` | 条目组 | `items[{title, desc, ...}]` |
| `note` | 提示块 | `html` |
| `raw` | 原样输出 | `html`（通常配 `nav: false`；页面里的流程链、数据条等图形组件也通过它实现） |

字段细节直接对照 `content/site-content.mjs` 里已有的区块——它们已经覆盖了全部类型的使用示例。

---

## 七、侧边栏、导航与翻页

- 侧边栏由 `content/site-content.mjs` 的 `nav` 数组驱动，`group` 字段决定分组：
  概览 / 个人 / 经历 / 生活 / 延伸 / 其他。
- 进入某个分区时，该分区在侧边栏高亮，并展开它的小节（二级导航）；滚动时自动切到当前小节。
- 侧边栏顶部可按关键词筛选分区（匹配导航项的 `keywords` 与文字）。
- 窄屏下侧边栏收成抽屉，由顶栏菜单按钮开合。
- 页面底部「上一分区 / 下一分区」按 `sections` 数组顺序翻页。

> `nav` 的顺序与 `sections` 的顺序是**两套独立顺序**。新增分区时两处都要更新，
> 否则会出现「侧边栏顺序」与「翻页顺序」不一致。

---

## 八、真实记录约定（新增内容必须遵守）

1. 只写我真实做过和真实发生的事；没有记录支持的内容不写。
2. 同一件事如果有不同说法，以正式证书、结题文件或盖章材料为准，不挑更省事的版本；
   差异会整理在 `CONTENT_SOURCES.md`。
3. 没有独立记录支持的说法，不当成已经确认的事实使用。
4. 不写推测、不写心理活动、不写对话、不写文学化情节。
5. 自我评价类文字只摘录本人材料原文，并注明是摘录。
6. 涉及数据的表述（绩点、排名、时长、金额、篇数）都与对应记录一致，
   不同学年分开写，不做合并换算。

---

## 九、隐私边界（不公开）

以下内容一律不发布（正文、图片、附件、检索索引中都不得出现）：

- 身份证号、手机号、邮箱、家庭住址（籍贯只公开到市一级）
- 银行卡、家庭经济状况、家庭成员信息（`家庭文件/` 整体不入站）
- 他人联系方式、他人身份证件信息
- 判决书原文、标注「禁止转发」的案例库材料
- 证件照、成绩单原图、含他人肖像的照片
- 学号、考生号等唯一标识（如确需引用，先做遮蔽）

相册与推文只登记条目（标题 / 时间 / 题材），不搬运图片与正文。

---

## 十、仓库中的遗留文件

以下文件是**旧 Hugo 模板时期的残留**，当前站点不使用，也未被任何页面引用：

```text
categories/  tags/  en/  page/  posts/page/  index.xml
fonts/  css/  icons/  images/  TheProblems.md
```

另外 `__t.txt` 是构建过程留下的 1 字节临时文件。

这些都属于「未经允许不删除」的范围：确认无用后可以清理，清理前请先确认线上没有旧链接指向它们
（`posts/myfirstblog/`、`posts/theproblems/` 是保留可用的旧文章页，**不要**归入待删清单）。

---

## 十一、部署

站点托管在 GitHub Pages，发布分支为 `master`，发布目录为仓库根目录。

```powershell
cd D:\桌面\文件\_blog_repo
git status
git add -A
git commit -m "更新站点内容"
git push origin master
```

推送后等待 Pages 构建完成，再访问 <https://eighteenliu.github.io/> 复核。

---

## 十二、相关文档

| 文档 | 内容 |
| --- | --- |
| `SITE_STRUCTURE.md` | 源文件与生成产物、URL 对照、侧边栏结构、各分区小节锚点、数据结构、区块类型、检索索引范围 |
| `CONTENT_SOURCES.md` | 各分区对应的真实材料、不同记录冲突的处理、隐私边界与后续扩展记录 |
| `README.md` | 本文件：站点特征、构建与扩展方法、真实记录约定、隐私边界 |
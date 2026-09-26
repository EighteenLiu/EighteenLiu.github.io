# 站点结构说明（SITE_STRUCTURE.md）

本文件说明 `EighteenLiu.github.io` 仓库中哪些文件是源、哪些是生成产物、线上 URL 对应哪个源文件，以及内容数据与图形组件的写法约定。

---

## 一、源文件 vs 生成产物

| 类别 | 文件 | 说明 |
| --- | --- | --- |
| 源（手工维护） | `content/site-content.mjs` | 全站内容唯一数据源：站点信息、侧边栏导航、总览与 15 个分区 |
| 源（手工维护） | `content/posts.mjs` | 历史文章数据 |
| 源（手工维护） | `tools/build.mjs` | 生成器脚本 |
| 源（手工维护） | `assets/css/site.css` | 样式，包含首页照片区与图形组件样式 |
| 源（手工维护） | `assets/js/site.js` | 交互：侧边栏抽屉、筛选、滚动高亮、站内检索 |
| 源（手工维护） | `assets/images/*` | 图片资源 |
| 源（手工维护） | `README.md`、`SITE_STRUCTURE.md`、`CONTENT_SOURCES.md` | 说明文档 |
| **生成产物** | `index.html`、`404.html`、`sitemap.xml` | 构建时覆盖 |
| **生成产物** | `sections/*/index.html` | 构建时覆盖 |
| **生成产物** | `posts/index.html`、`posts/*/index.html` | 构建时覆盖 |
| **生成产物** | `assets/data/search-index.json` | 构建时覆盖 |

> 生成产物不要手改，下次构建会覆盖。要改内容请改 `content/` 下的数据文件。`404.html` 由 `build404()` 生成，会带 `noindex, follow`，用于阻止错误地址被搜索引擎收录，同时保留站内链接抓取。

---

## 二、URL ↔ 源文件对照

| 线上 URL | 生成产物 | 内容来源（`site-content.mjs` 中的变量） |
| --- | --- | --- |
| `/` | `index.html` | `overview` |
| `/sections/profile/` | `sections/profile/index.html` | `profile` |
| `/sections/academics/` | `sections/academics/index.html` | `academics` |
| `/sections/courses/` | `sections/courses/index.html` | `courses` |
| `/sections/skills/` | `sections/skills/index.html` | `skills` |
| `/sections/thesis/` | `sections/thesis/index.html` | `thesis` |
| `/sections/projects/` | `sections/projects/index.html` | `projects` |
| `/sections/honors/` | `sections/honors/index.html` | `honors` |
| `/sections/leadership/` | `sections/leadership/index.html` | `leadership` |
| `/sections/media/` | `sections/media/index.html` | `media` |
| `/sections/internship/` | `sections/internship/index.html` | `internship` |
| `/sections/graduate/` | `sections/graduate/index.html` | `graduate` |
| `/sections/campus/` | `sections/campus/index.html` | `campus` |
| `/sections/gallery/` | `sections/gallery/index.html` | `gallery` |
| `/sections/future/` | `sections/future/index.html` | `future` |
| `/sections/sources/` | `sections/sources/index.html` | `sources` |
| `/posts/` | `posts/index.html` | `posts.mjs` |
| `/posts/<slug>/` | `posts/<slug>/index.html` | `posts.mjs` |

> `sections/` 这个 URL 目录本身没有独立页面（生成器只在 `sitemap.xml` 中登记），浏览时从侧边栏或首页进入具体分区。

---

## 三、侧边栏导航结构

侧边栏由 `content/site-content.mjs` 中的 `nav` 数组驱动，`group` 字段决定分组：

| 分组 | 导航项 |
| --- | --- |
| 概览 | 总览 |
| 个人 | 个人档案、学业轨迹、课程学习、自学与技术栈 |
| 经历 | 毕业设计、项目与研究、竞赛与荣誉、学生工作、新闻采编、实习与工程实践 |
| 生活 | 校园生活、影像档案 |
| 延伸 | 研究生阶段、未来规划、关于博客 |
| 其他 | 博客文章 |

**当前分区**会在侧边栏中高亮，并展开该分区的小节列表（二级导航），滚动时自动切换到当前小节。

- 分组顺序 = `nav` 数组中首次出现的 `group` 顺序。
- 导航项顺序 = `nav` 数组顺序。
- 分区翻页（页面底部“上一分区 / 下一分区”）顺序 = `sections` 数组顺序，最后一个分区之后是“博客文章”。

> `nav` 的顺序与 `sections` 的顺序是两套独立顺序。新增分区时两处都要更新，否则侧边栏顺序与翻页顺序会不一致。

---

## 四、各分区的小节（二级导航锚点）

锚点 `id` 同时是小节标题的 HTML `id`，也是侧边栏二级导航的目标。

### 总览 `index.html`
| # | 锚点 | 小节 |
| --- | --- | --- |
| 01 | `at-a-glance` | 关键数据 |
| 02 | `timeline` | 大学四年时间轴 |
| 03 | `map` | 分区导航 |
| 04 | `reading` | 关于这座站点 |

### 个人档案 `sections/profile/`
`basic` 基本信息 · `education` 教育背景与主修课程 · `certs` 技能与证书 · `self` 材料中的自我描述 · `privacy` 关于隐私（提示块，不进导航）

### 学业轨迹 `sections/academics/`
`gpa` 逐年学业数据 · `scholarship` 奖学金明细 · `honor-titles` 荣誉称号时间线 · `volunteer` 志愿服务时长 · `academic-note` 关于成绩的说明

### 课程学习 `sections/courses/`
`scope` 归档范围 · `semesters` 八个学期的归档课程 · `exam` 六级与考研备考 · `thesis-link` 与毕业设计的衔接

### 自学与技术栈 `sections/skills/`
`languages` 编程语言与工具 · `frontend` 前端技术自学 · `practice` 算法与编程练习 · `stack` 技术栈速览

### 毕业设计 `sections/thesis/`
`basic` 题目与基本信息 · `thesis-flow` 系统数据流 · `modules` 架构与功能 · `functions` 功能闭环 · `testing` 答辩测试路径 · `limits` 论文与答辩中明确写出的局限 · `truth` 需要区分的内容

### 项目与研究 `sections/projects/`
`projects-overview` 项目概览 · `innovation` 市级大创 · `innovation-note` 口径说明 · `datalaw` 数据法治竞赛 · `datalaw-note` 口径说明 · `challenge-cup` 挑战杯 · `challenge-note` 口径说明 · `coursework` 课程设计 · `papers` 学术成果与论文 · `project-note` 关于角色表述

### 竞赛与荣誉 `sections/honors/`
`awards` 竞赛获奖 · `participated` 参与过的其他竞赛 · `titles` 荣誉称号汇总 · `cert-volume` 证书归档情况 · `honors-note` 不展示的内容

### 学生工作 `sections/leadership/`
`roles` 任职时间线 · `work` 工作内容 · `proposals` 学生代表大会提案 · `leadership-note` 关于“服务人次”类表述

### 新闻采编 `sections/media/`
`role` 岗位与工作方式 · `topics` 推文选题清单 · `topic-chart` 选题主题分布 · `themes` 选题分布 · `media-note` 关于推文原文

### 实习与工程实践 `sections/internship/`
`overview` 工程实践概览 · `nature` 这段实习的技术性质 · `workflow` 报表自动化流程 · `repos` 仓库清单与技术内容 · `stack` 技术栈与工程约束 · `boundary` 实习页的公开边界

### 研究生阶段 `sections/graduate/`
`scope` 归档概览 · `mainline` 科研主线 · `research-flow` 研究链路 · `weekly` 研究推进时间线 · `programs` 平台中的四个程序 · `patent` 论文、软著与专利材料 · `ccf` CCF 灵巧操作挑战 · `other` 其他研究生项目归档 · `boundary` 研究生页只写到材料能支撑的层级

### 校园生活 `sections/campus/`
`class` 班级与学籍轨迹 · `dorm` 宿舍生活 · `military` 2023 年军训 · `macau` 2024 年京澳研学交流 · `volunteer` 志愿服务 · `campus-note` 关于同学与第三方

### 影像档案 `sections/gallery/`
`inventory` 归档总览 · `why` 为什么站内几乎没有照片 · `todo` 待确认可公开的影像

### 未来规划 `sections/future/`
`graduation` 本科毕业去向 · `graduate` 研究生阶段 · `blog-plan` 这个站点接下来怎么扩展 · `principles` 维护原则

### 关于博客 `sections/sources/`
`why` 为什么做这个博客 · `rules` 内容原则 · `privacy` 隐私边界 · `update` 更新方式 · `next` 接下来要扩展什么 · `tech` 站点是怎么生成的

---

## 五、内容数据结构

### 分区对象

```js
{
  id: "travel",                 // 同时用作目录名与锚点前缀，需全站唯一
  title: "旅行记录",             // 侧边栏与页面标题
  eyebrow: "PART · TRAVEL",      // 页面顶部小标签
  path: "sections/travel/index.html",
  keywords: ["旅行", "城市"],    // 用于侧边栏筛选与检索
  lede: "分区导语",
  blocks: [ /* 区块数组 */ ],
}
```

### 区块对象

```js
{
  id: "trip-1",        // 是侧边栏二级导航锚点；不写 id 的块不进导航
  idx: "01",           // 序号角标
  title: "某次旅行",     // 小节标题
  type: "prose",
  nav: false,          // 可选：显式声明不进二级导航
  ...                  // 其余字段随 type 变化
}
```

### 生成器支持的区块类型

| type | 关键字段 |
| --- | --- |
| `prose` | `html` |
| `stats` | `cols`、`items[{value, unit, label, accent}]` |
| `table` | `columns[]`、`rows[][]`、`footnote` |
| `timeline` | `items[{date, title, desc}]` |
| `cards` | `items[{title, desc, ...}]`、`footnote` |
| `list` | `items[]` |
| `kv` | `items[{k, v}]` |
| `tags` | `items[]` |
| `entries` | `items[{title, desc, ...}]` |
| `note` | `html` |
| `raw` | `html`（原样输出，通常配 `nav: false`；`viz-bars`、`viz-flow`、`viz-chain` 等图形组件也用它承载） |

> 表格、卡片、图形等类型的字段细节，直接对照 `content/site-content.mjs` 中已有区块。

---

## 六、检索索引的生成范围

`buildSearchIndex()` 会把每个分区的标题、导语，以及每个区块的 `html` / `note` / `footnote`、`items`、`rows` 抽取为纯文本（去标签、压空白、截断 400 字），连同分区路径与锚点一起写入 `assets/data/search-index.json`。因此新增分区或区块后必须重新构建，否则站内检索找不到新内容。

---

## 七、样式与交互约定

- 样式全部集中在 `assets/css/site.css`，使用 CSS 变量定义配色（`--text-dim`、`--line` 等），改主题只需改变量。
- 交互全部在 `assets/js/site.js`：侧边栏抽屉、侧边栏筛选、滚动高亮二级导航、站内检索浮层、年份占位替换。
- 二级导航的滚动高亮按“小节标题是否越过视口上方的判定线”判定，判定线取 `max(120px, 视口高度 × 30%)`，滚动时以 50ms 节流重算。
- 站点尊重系统的“减少动态效果”偏好：`site.css` 末尾的 `@media (prefers-reduced-motion: reduce)` 会把过渡动画压到近乎瞬时，并把 `scroll-behavior` 改为 `auto`。
- 页面之间只使用相对路径引用资源，因此新增页面务必放在 `sections/<id>/` 或 `posts/<slug>/` 这一层，`build.mjs` 会自动补齐 `../` 前缀。
- 首页个人照片来自 `assets/images/profile-liu-jialiang.jpg`；照片区域使用 `hero__profile`、`hero__photo-wrap`、`hero__photo` 等样式类。
- `viz-bars` 用于横向数据分布，`viz-flow` 用于纵向系统数据流，`viz-chain` 用于多步骤技术链路；新闻采编页的主题分布图使用 `topic-chart`。
- 页面可见文字保持第一人称或客观陈述，语气自然，避免公文腔和材料说明书腔。
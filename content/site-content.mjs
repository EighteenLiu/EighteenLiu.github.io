/* ==========================================================================
   站点内容数据 · 第一部分
   本文件是博客的唯一内容源：修改这里，再执行 `node tools/build.mjs`
   即可重新生成全部静态页面。
   真实性约定：
     - 所有条目均可追溯到 D:\桌面\文件 中的原始材料；
     - 材料之间存在口径差异时，保留原始说明并在"资料索引与来源"中标注；
     - 涉及隐私的内容（证件号、联系方式、家庭信息、他人信息）一律不入站。
   ========================================================================== */

export const site = {
  title: "刘家梁 · 个人档案",
  baseUrl: "https://eighteenliu.github.io",
  updated: "2026.09.26",
  description:
    "北京信息科技大学计算机学院 2022 级本科生刘家梁的个人档案：学业轨迹、项目研究、竞赛荣誉、学生工作、新闻采编、校园生活与资料来源。全部内容来自可核验材料，不含虚构。",
};

export const nav = [
  { id: "overview", title: "总览", group: "概览", path: "index.html", icon: "overview", keywords: ["首页", "概览", "刘家梁"] },
  { id: "profile", title: "个人档案", group: "个人", path: "sections/profile/index.html", icon: "profile", keywords: ["基本信息", "政治面貌", "教育背景", "技能证书", "四六级", "普通话"] },
  { id: "academics", title: "学业轨迹", group: "个人", path: "sections/academics/index.html", icon: "academics", keywords: ["绩点", "排名", "奖学金", "成绩", "学分"] },
  { id: "skills", title: "自学与技术栈", group: "个人", path: "sections/skills/index.html", icon: "skills", keywords: ["前端", "HTML", "CSS", "JavaScript", "Python", "C++", "技术栈", "自学"] },
  { id: "projects", title: "项目与研究", group: "经历", path: "sections/projects/index.html", icon: "projects", keywords: ["大创", "区块链", "数据法治", "挑战杯", "课程设计", "论文", "科研"] },
  { id: "honors", title: "竞赛与荣誉", group: "经历", path: "sections/honors/index.html", icon: "honors", keywords: ["获奖", "证书", "奖学金", "三好学生", "优秀团员", "数学竞赛"] },
  { id: "leadership", title: "学生工作", group: "经历", path: "sections/leadership/index.html", icon: "leadership", keywords: ["学生会", "主席", "副主席", "团干部", "学代会", "活动"] },
  { id: "media", title: "新闻采编", group: "经历", path: "sections/media/index.html", icon: "media", keywords: ["采编部", "推文", "新闻中心", "公众号", "写作"] },
  { id: "campus", title: "校园生活", group: "生活", path: "sections/campus/index.html", icon: "campus", keywords: ["班级", "宿舍", "军训", "研学", "澳门", "志愿"] },
  { id: "gallery", title: "影像档案", group: "生活", path: "sections/gallery/index.html", icon: "gallery", keywords: ["相册", "照片", "影像", "档案"] },
  { id: "future", title: "未来规划", group: "延伸", path: "sections/future/index.html", icon: "future", keywords: ["升学", "研究生", "规划", "扩展"] },
  { id: "sources", title: "资料索引与来源", group: "延伸", path: "sections/sources/index.html", icon: "sources", keywords: ["来源", "真实性", "隐私", "口径", "说明"] },
  { id: "posts", title: "博客文章", group: "其他", path: "posts/index.html", icon: "posts", keywords: ["文章", "笔记", "建站"] },
];

/* ==========================================================================
   分区一：总览
   ========================================================================== */
const overview = {
  id: "overview",
  title: "总览",
  eyebrow: "OVERVIEW",
  path: "index.html",
  keywords: ["刘家梁", "总览", "北京信息科技大学", "个人档案"],
  lede: "本站是刘家梁的个人档案库，按学业、项目、竞赛、学生工作、校园生活等分区长期维护。所有内容都来自可核验的原始材料，不含任何虚构情节。",
  blocks: [
    {
      type: "raw",
      nav: false,
      html: `<div class="hero">
  <div class="hero__id">
    <img class="hero__avatar" src="assets/images/bistu-logo.png" alt="北京信息科技大学校徽" width="70" height="70">
    <div class="hero__meta">
      <p class="hero__name">刘家梁</p>
      <p class="hero__role">BISTU · 计算机学院 · 计算机科学与技术 · 2022 级本科</p>
    </div>
  </div>
  <h1 class="hero__title">把大学四年，<span>一条一条记录下来</span></h1>
  <p class="hero__lede">2022 年入学，2026 年毕业。四年里做过三个项目、两份学生工作、若干次竞赛与志愿服务。这个站点做的事情很简单：把散落在文件夹里的材料，按可追溯的方式整理成一份长期可扩展的个人档案，供自己回看，也供需要了解我的人快速了解。</p>
</div>`,
    },
    {
      id: "at-a-glance",
      idx: "01",
      title: "关键数据",
      note: "以下数字全部来自 <code>D:\\桌面\\文件</code> 中的原始材料，统计口径在「资料索引与来源」中逐条说明。",
      type: "stats",
      cols: 4,
      items: [
        { value: "4", unit: "项", label: "主持或深度参与的项目", accent: true },
        { value: "8", unit: "项", label: "本科期间获得的奖学金" },
        { value: "3", unit: "个", label: "学生工作岗位（副部长 / 副主席 / 主席）" },
        { value: "116", unit: "小时", label: "累计志愿服务时长（材料口径）" },
      ],
    },
    {
      id: "timeline",
      idx: "02",
      title: "大学四年时间轴",
      note: "只串联已有材料中能确定时间节点的事实；每个节点都附来源，具体展开见对应分区。",
      type: "timeline",
      items: [
        { date: "2022.09", title: "入学北京信息科技大学", desc: "进入计算机学院计算机类实验班（计类实验 2202），专业分流后为计科 2205。", source: "个人文件 · 个人简历（2025 版）" },
        { date: "2023.07.01", title: "建立个人博客", desc: "使用 Hugo 搭建博客，发布第一篇技术笔记。", source: "posts/myfirstblog" },
        { date: "2023.11.27", title: "获学习优秀二等奖学金、社会贡献奖学金", desc: "2022—2023 学年。", source: "证书集 · 2023.11学习优秀.jpg、2023.11社会贡献.jpg" },
        { date: "2023.12", title: "获校级「三好学生」", desc: "2022—2023 学年三好学生称号。", source: "证书集 · 2023.12三好学生.jpg" },
        { date: "2023—2024 学年", title: "任学生会副主席、新闻采编部副部长", desc: "聘书签发于 2024.09；参与学院学生活动组织与新闻采编工作。", source: "证书集 · 2024.09副主席聘书.jpg、2024.09采编部副部长.jpg" },
        { date: "2024.01—2024.12", title: "担任市级大创项目负责人", desc: "项目《面向企业碳排放溯源交易的分层区块链方案研究》，2025.03 结题。", source: "个人文件 · 竞赛 · 大创" },
        { date: "2024.04.07", title: "普通话二级甲等 90.4 分", desc: "北京开放大学语言文字测试分中心。", source: "证书集 · 2024.04普通话证书.jpg" },
        { date: "2024.07.07—07.13", title: "参加澳门科技大学京澳研学", desc: "「创业创新力」交流项目。", source: "证书集 · 2024.07年暑期澳门研学实践活动" },
        { date: "2024.09.07", title: "获大学生数据法治实验模型竞赛一等奖", desc: "在团队中负责数据分析与监督测试。", source: "证书集 · 2024.09暑假大学生数据法制竞赛一等奖.jpg" },
        { date: "2024—2025 学年", title: "任计算机学院学生会主席", desc: "聘书签发于 2025.09；负责学生会整体工作的统筹与推进。", source: "证书集 · 2025.09年主席聘书.jpg" },
        { date: "2025 年", title: "获挑战杯首都赛特等奖", desc: "「青聚 AI」人工智能+专项赛，项目「凌目智算（LynxAI）」，负责算法分析与文本撰写。", source: "证书集 · 2025.10挑战本人工智能+专项赛特等奖.jpg" },
        { date: "2025.11.28", title: "获科技创新三等奖学金、社会贡献奖学金", desc: "2024—2025 学年。", source: "证书集 · 2025.11科创奖学金三等奖.jpg、2025.11社会贡献奖学金.jpg" },
        { date: "2025.12.15", title: "获国家励志奖学金", desc: "连续第三年获得。", source: "证书集 · 2025.12国家励志奖学金.jpg" },
        { date: "2026.07", title: "本科毕业，境内升学", desc: "材料中仅记载「境内升学」，不写具体院校或方向。", source: "2026 年优秀毕业生申报材料" }
      ],
    },
    {
      id: "map",
      idx: "03",
      title: "分区导航",
      note: "侧边栏的每一个分区都可以单独打开；分区内部的小节会跟随滚动自动高亮，也可以直接点击跳转。",
      type: "entries",
      cols: 3,
      items: [
        { no: "PART 01", title: "个人档案", desc: "基本信息、教育背景、政治面貌、技能证书与自我定位。", href: "sections/profile/index.html" },
        { no: "PART 02", title: "学业轨迹", desc: "逐年绩点与排名、8 项奖学金明细、四六级与普通话成绩。", href: "sections/academics/index.html" },
        { no: "PART 03", title: "项目与研究", desc: "市级大创、数据法治竞赛项目、挑战杯项目与四次课程设计。", href: "sections/projects/index.html" },
        { no: "PART 04", title: "竞赛与荣誉", desc: "按时间排列的全部获奖与荣誉称号，附证明材料出处。", href: "sections/honors/index.html" },
        { no: "PART 05", title: "学生工作", desc: "计算机学院学生会副主席、主席与新闻采编部副部长的工作记录。", href: "sections/leadership/index.html" },
        { no: "PART 06", title: "新闻采编", desc: "2023—2024 年在新闻中心采编部参与的 22 个推文选题。", href: "sections/media/index.html" },
        { no: "PART 07", title: "校园生活", desc: "班级、宿舍、军训、学代会提案、澳门研学与志愿服务。", href: "sections/campus/index.html" },
        { no: "PART 08", title: "自学与技术栈", desc: "前端三件套课件、CSP 练习、常用编程语言与工具。", href: "sections/skills/index.html" },
        { no: "PART 09", title: "未来规划", desc: "本科毕业去向、研究生阶段的材料归档与博客扩展计划。", href: "sections/future/index.html" },
      ],
    },
    {
      id: "reading",
      idx: "04",
      title: "关于这座站点",
      type: "prose",
      html: `<p>这个站点最初是 2023 年 7 月用 Hugo 建的一个空白博客，只留下一篇关于 <code>git init</code> 报错的笔记。2026 年 9 月，它被改造成现在这个结构：左侧固定分区栏，右侧内容区，所有页面由同一份内容数据生成。</p>
<p>之所以这样改，是因为接下来还会不断有新的材料进来——旅游、课程、研究生阶段等等。与其一页一页手写，不如把内容做成数据，新增一个分区只需要加一条记录。</p>
<p>站内所有内容遵循三条规则：</p>
<ul class="clean">
  <li><strong>只写材料里有的</strong>：没有材料支撑的事情，一句也不写。</li>
  <li><strong>口径冲突时写明冲突</strong>：原始材料之间说法不一致的，以更接近原始凭证的一份为准，并保留说明。</li>
  <li><strong>隐私内容不上站</strong>：证件号码、联系方式、家庭信息、他人信息一律剔除。</li>
</ul>
<p>更详细的说明见 <a href="sections/sources/index.html">资料索引与来源</a>。</p>`,
    },
  ],
};
/* ==========================================================================
   分区二：个人档案
   ========================================================================== */
const profile = {
  id: "profile",
  title: "个人档案",
  eyebrow: "PART 01 · PROFILE",
  path: "sections/profile/index.html",
  keywords: ["个人信息", "党员", "教育背景", "技能证书", "四六级", "普通话"],
  lede: "关于我是谁：基本信息、教育背景、技能证书，以及材料里对我个人的客观描述。这一页只放可以被材料证明的内容。",
  blocks: [
    {
      id: "basic",
      idx: "01",
      title: "基本信息",
      type: "kv",
      items: [
        { k: "姓名", v: "刘家梁" },
        { k: "出生年份", v: "2004 年 2 月" },
        { k: "民族", v: "汉族" },
        { k: "籍贯", v: "山东泰安 <span class=\"src\" style=\"display:inline;border:0;padding:0;margin:0;\">（公开到市一级；更细的地址不公开）</span>" },
        { k: "政治面貌", v: "中共党员" },
        { k: "学历", v: "本科（2026 届）" },
        { k: "毕业院校", v: "北京信息科技大学" },
        { k: "学院 / 专业", v: "计算机学院 · 计算机科学与技术" },
        { k: "班级", v: "计类实验 2202（大类实验班）→ 分专业后为计科 2205" },
        { k: "在校时间", v: "2022 年 9 月 — 2026 年 7 月" },
        { k: "毕业去向", v: "境内升学" },
      ],
    },
    {
      id: "education",
      idx: "02",
      title: "教育背景与主修课程",
      type: "prose",
      html: `<p>2022 年 9 月入学北京信息科技大学计算机学院，先进入计算机类实验班（计类实验 2202），专业分流后就读计算机科学与技术专业（计科 2205），2026 年 7 月本科毕业。</p>
<p>按个人简历记载，本科期间的主修课程包括：</p>
<div class="tags" style="margin:14px 0 4px;">
  <span class="tag tag--cyan">高等数学</span>
  <span class="tag tag--cyan">程序设计基础（C 语言）</span>
  <span class="tag tag--cyan">电路与电子技术 A</span>
  <span class="tag tag--cyan">数据结构与算法（C）</span>
  <span class="tag tag--cyan">C++ 程序设计</span>
  <span class="tag tag--cyan">计算机体系结构</span>
  <span class="tag tag--cyan">软件工程</span>
  <span class="tag tag--cyan">人工智能</span>
  <span class="tag tag--cyan">数据库原理与应用</span>
  <span class="tag tag--cyan">CPU 设计</span>
  <span class="tag tag--cyan">信息安全</span>
  <span class="tag tag--cyan">编译原理</span>
</div>
<span class="src">来源：个人文件 · 个人简历 2025 版（个人简历2025版.pdf）</span>`,
    },
    {
      id: "certs",
      idx: "03",
      title: "技能与证书",
      type: "table",
      columns: ["证书 / 成绩", "结果", "时间", "出具或核验来源"],
      rows: [
        ["普通话水平测试", "二级甲等 · 90.4 分", "2024.04.07 测试", "证书集 · 2024.04普通话证书.jpg（测试机构：北京开放大学语言文字测试分中心）"],
        ["大学英语六级（CET-6）", "524 分（听力 182 / 阅读 211 / 写作和翻译 131）", "成绩查询截图", "相册 · 重要照片 · 六级成绩.jpg"],
        ["大学英语四级（CET-4）", "已通过", "本科期间", "个人简历 2025 版记载「大学英语四/六级」"],
        ["计算机相关编程语言", "C / C++ / Java / Python / HTML", "本科期间", "个人简历 2025 版技能栏 + 各项目材料"],
      ],
      footnote: "说明：本站不公开任何证书编号、准考证号、证件号码与成绩单原图，只保留可核验的结果表述。",
    },
    {
      id: "self",
      idx: "04",
      title: "材料中的自我描述",
      type: "prose",
      html: `<p>在奖学金与荣誉申请材料里，有几段相对客观的自我总结，原文摘录如下（保留材料原本表述）：</p>
<blockquote style="margin:16px 0;padding:12px 18px;border-left:2px solid var(--cyan);background:rgba(53,214,245,.05);border-radius:0 8px 8px 0;color:var(--text-dim);">
「我曾在大一学年荣获『雨厚』新生奖学金、学习优秀奖学金、社会贡献奖学金、国家励志奖学金和『三好学生』称号；在大二学年荣获国家励志奖学金和优秀团员称号。」
</blockquote>
<blockquote style="margin:16px 0;padding:12px 18px;border-left:2px solid var(--cyan);background:rgba(53,214,245,.05);border-radius:0 8px 8px 0;color:var(--text-dim);">
「他积极参加各类文体活动和社会实践，不断丰富自己的阅历和见识。他关心他人，乐于助人，与同学相处融洽。」
</blockquote>
<p>从四年积累的项目与课程材料看，我的技术兴趣主要分布在四个方向：<strong>自然语言处理与文本建模</strong>（数据法治竞赛的信息抽取管线）、<strong>区块链与分布式系统设计</strong>（市级大创的分层共识方案）、<strong>多模态与小样本学习</strong>（挑战杯项目的算法分析工作），以及<strong>移动端与服务端工程实现</strong>（Android 本地 C/S 通信应用、前端三件套自学）。</p>
<span class="src">来源：个人文件 · 大学荣誉申请 / 个人经历2026.docx / 个人简历2025版.pdf</span>`,
    },
    {
      id: "privacy",
      type: "note",
      variant: "warn",
      nav: true,
      title: "关于隐私",
      html: "本站刻意不收录身份证号、手机号、邮箱、家庭住址、家庭成员信息、同学联系方式、成绩单原图与证件照。凡是涉及第三方的材料（判决书、他人申请表、通讯录、宿舍成员信息表）一律不进站，也不做任何转述。",
    },
  ],
};

/* ==========================================================================
   分区三：学业轨迹
   ========================================================================== */
const academics = {
  id: "academics",
  title: "学业轨迹",
  eyebrow: "PART 02 · ACADEMICS",
  path: "sections/academics/index.html",
  keywords: ["绩点", "排名", "奖学金", "成绩", "学业"],
  lede: "逐一列出本科四年的绩点、专业排名与奖学金记录。不同学年、不同材料的统计口径并不一致，这里按材料原样标注，不做合并。",
  blocks: [
    {
      id: "gpa",
      idx: "01",
      title: "逐年学业数据",
      note: "同一学年的数据在不同材料中口径不同（例如「班级排名」与「专业排名」混用）。下表按材料原始表述分行列出，请勿跨行合并理解。",
      type: "table",
      columns: ["统计时间 / 学年", "指标", "数值", "材料来源"],
      rows: [
        ["大一学年（2022—2023）", "必修课加权平均绩点", "<strong>3.82</strong>", "2023 年三好学生 / 优秀学生干部申请材料"],
        ["大一学年（2022—2023）", "专业排名", "<strong>4 / 48</strong>", "同上"],
        ["大一学年（2022—2023）", "平均学分绩点", "<strong>3.81</strong>", "2024 年优秀团员评选材料"],
        ["大一学年（2022—2023）", "计算机科学与技术专业排名", "<strong>31 / 145</strong>", "同上"],
        ["大二上学期", "平均学分绩点", "<strong>3.52</strong>", "2024 年优秀团员评选材料"],
        ["本科总评（2026 届）", "GPA", "<strong>3.55</strong>", "2026 年北京市普通高等学校优秀毕业生审批表"],
        ["本科总评（2026 届）", "专业排名", "<strong>前 15%</strong>", "同上"],
      ],
      footnote: "口径提示：3.82 与 3.81、4/48 与 31/145 分别来自两份不同材料，统计范围和时间点可能不同，本站不做取舍，全部保留。",
    },
    {
      id: "scholarship",
      idx: "02",
      title: "奖学金明细",
      note: "本科四年共获得 8 项奖学金，其中「国家励志奖学金」连续三年获得。",
      type: "table",
      columns: ["学年", "奖学金名称", "等级", "时间", "凭证"],
      rows: [
        ["2022—2023", "雨厚新生奖学金", "—", "2023 年", "个人经历2026.docx / 大学荣誉申请 · 雨厚奖学金"],
        ["2022—2023", "学习优秀奖学金", "二等奖", "2023.11.27", "证书集 · 2023.11学习优秀.jpg"],
        ["2022—2023", "社会贡献奖学金", "—", "2023.11.27", "证书集 · 2023.11社会贡献.jpg"],
        ["2022—2023", "国家励志奖学金", "—", "2023 年", "个人简历 / 个人经历2026.docx"],
        ["2023—2024", "国家励志奖学金", "—", "2024.12.15", "证书集 · 2024.12国家励志.jpg"],
        ["2024—2025", "科技创新奖学金", "三等奖", "2025.11.28", "证书集 · 2025.11科创奖学金三等奖.jpg"],
        ["2024—2025", "社会贡献奖学金", "—", "2025.11.28", "证书集 · 2025.11社会贡献奖学金.jpg"],
        ["2024—2025", "国家励志奖学金", "—", "2025.12.15", "证书集 · 2025.12国家励志奖学金.jpg"],
      ],
    },
    {
      id: "honor-titles",
      idx: "03",
      title: "荣誉称号时间线",
      type: "timeline",
      items: [
        { date: "2022 年", title: "泰安市「优秀班干部」", desc: "高中阶段荣誉，记载于个人经历材料。", source: "个人文件 · 个人经历2026.docx" },
        { date: "2023 年 12 月", title: "校级「三好学生」", desc: "2022—2023 学年三好学生称号。", source: "证书集 · 2023.12三好学生.jpg" },
        { date: "2024 年 6 月", title: "校级「优秀团员」", desc: "2023—2024 学年优秀团员。", source: "证书集 · 2024.06优秀团员.jpg" },
        { date: "2024 年", title: "校级「优秀志愿者」", desc: "材料记载累计志愿服务时长 116 小时，其中 2024 年度 62.5 小时。", source: "大学荣誉申请 · 2024校级优秀志愿者" },
        { date: "2025 年 6 月", title: "校级「优秀团干部」", desc: "2024—2025 学年优秀团干部。", source: "证书集 · 2025.06优秀团干部.jpg" },
        { date: "2025 年 12 月", title: "校级「优秀学生干部」", desc: "2024—2025 学年优秀学生干部。", source: "证书集 · 2025.12优秀学生干部.jpg" },
        { date: "2026 年", title: "北京市普通高等学校「优秀毕业生」", desc: "2026 届优秀毕业生审批表已填写，毕业去向为境内升学。", source: "大学荣誉申请 · 优秀毕业生" },
      ],
    },
    {
      id: "volunteer",
      idx: "04",
      title: "志愿服务时长",
      type: "stats",
      cols: 3,
      items: [
        { value: "116", unit: "小时", label: "累计志愿服务时长（优秀志愿者材料口径）", accent: true },
        { value: "53.5", unit: "小时", label: "2023 年度志愿服务时长" },
        { value: "62.5", unit: "小时", label: "2024 年度志愿服务时长" },
      ],
    },
    {
      id: "academic-note",
      type: "note",
      title: "关于成绩的说明",
      html: "本站只展示绩点、排名与证书结果，不上传成绩单截图，也不展示单科分数。所有数值均可在「资料索引与来源」中找到对应的材料文件名。",
    },
  ],
};
/* ==========================================================================
   分区四：项目与研究
   ========================================================================== */
const projects = {
  id: "projects",
  title: "项目与研究",
  eyebrow: "PART 03 · PROJECTS",
  path: "sections/projects/index.html",
  keywords: ["大创", "区块链", "碳交易", "数据法治", "挑战杯", "凌目智算", "课程设计", "论文"],
  lede: "本科期间参与过的三个正式项目，以及四次课程设计。每个项目都标注了真实角色、技术路线与材料出处；材料之间说法不一致的地方单独说明。",
  blocks: [
    {
      id: "projects-overview",
      idx: "01",
      title: "项目概览",
      type: "stats",
      cols: 4,
      items: [
        { value: "1", unit: "项", label: "主持的市级大学生创新创业训练计划", accent: true },
        { value: "2", unit: "项", label: "参与的学科竞赛项目（数据法治 / 挑战杯）" },
        { value: "4", unit: "次", label: "课程设计（App / 网页 / CPU / Android）" },
        { value: "1", unit: "篇", label: "论文获期刊录用（大创成果）" },
      ],
    },

    /* ---------------- 大创 ---------------- */
    {
      id: "innovation",
      idx: "02",
      title: "市级大创：面向企业碳排放溯源交易的分层区块链方案研究",
      type: "cards",
      cols: 1,
      items: [
        {
          title: "项目基本信息",
          sub: "2024 年大学生创新创业训练计划 · 项目负责人",
          html: `<dl class="kv">
  <dt>项目名称</dt><dd>面向企业碳排放溯源交易的分层区块链方案研究</dd>
  <dt>项目级别</dt><dd>市级（以结题证书为准，详见下方口径说明）</dd>
  <dt>项目周期</dt><dd>2024 年 1 月 — 2024 年 12 月，2025 年 3 月获结题证书</dd>
  <dt>我的角色</dt><dd>项目负责人</dd>
  <dt>项目成员</dt><dd>裴浩喃、程璐、范新辉、罗明松</dd>
  <dt>指导教师</dt><dd>范艳芳（副教授）</dd>
</dl>`,
          source: "个人文件 · 竞赛 · 大创（结题材料、结题证书）",
        },
        {
          title: "技术路线",
          html: `<p>项目要解决的是碳排放权交易过程中的两个现实问题：一是传统单链区块链的全局共识导致确认延迟偏长，难以支撑碳交易的实时更新；二是市场参与者可能上报虚假数据。</p>
<p>针对这两点，方案做了三层设计：</p>
<ul class="clean">
  <li><strong>分层区块链架构</strong>：把碳数据的采集、溯源与交易按层级拆分，减少单链全局共识带来的瓶颈。</li>
  <li><strong>分组 PBFT 共识 + 跨集群轻量级共识</strong>：组内用 PBFT 保证一致性，跨集群走轻量级共识，降低通信开销。</li>
  <li><strong>基于节点行为的信誉机制</strong>：用节点历史行为计算信誉值，抑制恶意节点对交易秩序的影响。</li>
</ul>
<p>验证方式是在 Python 环境下实现共识机制仿真，围绕吞吐量、时延与交易成功率设计实验对比。</p>`,
          tags: ["分层区块链", "PBFT", "信誉机制", "Python 仿真"],
          source: "个人文件 · 竞赛 · 大创 · 技术报告与代码材料",
        },
        {
          title: "项目成果",
          html: `<ul class="clean">
  <li><strong>技术报告 1 篇</strong>（结题支撑材料）</li>
  <li><strong>论文 1 篇获期刊录用</strong>：《面向企业碳排放溯源交易的分层区块链方案研究》，2024 年 12 月收到编辑部录用通知，拟刊于 2025 年第 13 期。</li>
  <li><strong>结题证书 1 份</strong>：2025 年 3 月，项目级别记为「市级」。</li>
</ul>
<p>个人经历材料中还提到另有 1 篇论文处于返修状态，该说法目前只有本人材料的文字记载，未找到独立的录用或审稿凭证，因此本站只作为「材料记载」列出。</p>`,
          source: "录用邮件.jpg / 论文.pdf / 2025.03年度大创结题证书.jpg",
        },
      ],
    },
    {
      id: "innovation-note",
      type: "note",
      variant: "warn",
      nav: true,
      title: "口径说明：项目级别",
      html: "个人简历（2025 版）把该项目写作「省级大学生创新创业项目」，但结题证书上的项目级别明确标注为「<strong>市级</strong>」，项目文件夹名同样为「2022011270_刘家梁_2024_<strong>市级</strong>_面向企业碳排放溯源交易的分层区块链方案研究」。本站以结题证书和归档文件夹名为准，记为<strong>市级</strong>。",
    },

    /* ---------------- 数据法治 ---------------- */
    {
      id: "datalaw",
      idx: "03",
      title: "数据法治竞赛：商业维权判决的文本建模",
      type: "cards",
      cols: 1,
      items: [
        {
          title: "项目基本信息",
          sub: "2024 年大学生数据法治实验模型竞赛 · 一等奖",
          html: `<dl class="kv">
  <dt>项目名称</dt><dd>商业维权案件赔额纳入税收征管范围的可视化管理——基于 31066 份商业式维权判决的文本建模</dd>
  <dt>主办单位</dt><dd>中国政法大学数据法治研究院</dd>
  <dt>获奖情况</dt><dd>2024 年大学生数据法治实验模型竞赛一等奖（2024 年 9 月 7 日）</dd>
  <dt>团队构成</dt><dd>项目负责人：赵韫淏（北京工商大学，法学）；成员：戴雨如、刘家梁、高原</dd>
  <dt>指导教师</dt><dd>陈敦 教授</dd>
  <dt>我的分工</dt><dd>数据分析与监督测试</dd>
</dl>`,
          source: "个人文件 · 竞赛 · 数据法治竞赛（获奖证书、项目技术文档）",
        },
        {
          title: "技术实现",
          html: `<p>项目的核心任务是把 31066 份商业维权判决书转化为可统计、可视化的结构化数据，为「赔额是否应纳入税收征管范围」这个法学问题提供数据支撑。整条管线如下：</p>
<ul class="clean">
  <li><strong>数据预处理</strong>：Python + Jieba 中文分词，停用词过滤与词性标注。</li>
  <li><strong>文本特征</strong>：TF-IDF 与向量空间模型完成文本表示。</li>
  <li><strong>标注平台</strong>：用 Docker 部署 Doccano 进行人工标注，数据以 JSONL 格式导出。</li>
  <li><strong>模型微调</strong>：按 8:1:1 划分训练 / 验证 / 测试集，微调 UIE-Base 预训练模型完成裁判文书信息抽取。</li>
  <li><strong>分析与可视化</strong>：RStudio 完成矩阵处理与可视化呈现。</li>
</ul>
<p>我在其中负责数据分析与监督测试环节：参与语料处理流程的搭建，并对模型抽取结果进行校验与一致性检查。</p>`,
          tags: ["Python", "Jieba", "TF-IDF", "Doccano", "UIE-Base", "RStudio"],
          source: "个人文件 · 竞赛 · 数据法治竞赛 · 项目技术文档",
        },
      ],
    },
    {
      id: "datalaw-note",
      type: "note",
      variant: "warn",
      nav: true,
      title: "口径说明：模型与角色",
      html: "个人简历与优秀毕业生材料中提到该项目使用「Llama3 + LoRA」，并把本人写作「模型开发负责人」。但项目技术文档中记录的抽取模型是 <strong>UIE-Base</strong>，团队分工中本人为<strong>数据分析与监督测试</strong>，项目负责人为赵韫淏。本站以项目技术文档为准：模型写 UIE-Base，角色写团队成员。",
    },

    /* ---------------- 挑战杯 ---------------- */
    {
      id: "challenge-cup",
      idx: "04",
      title: "挑战杯：凌目智算（LynxAI）低空探测系统",
      type: "cards",
      cols: 1,
      items: [
        {
          title: "项目基本信息",
          sub: "2025 年「青聚 AI」人工智能+专项赛 · 特等奖",
          html: `<dl class="kv">
  <dt>项目名称</dt><dd>凌目智算（LynxAI）——小样本学习与多模态融合的低空探测系统</dd>
  <dt>获奖情况</dt><dd>「青创北京」2025 年「挑战杯」首都大学生课外学术科技作品竞赛「青聚 AI」人工智能+专项赛 特等奖</dd>
  <dt>证书编号</dt><dd>2025BJTZBRGZN0019</dd>
  <dt>团队成员</dt><dd>王之懿、钱孝东、陆禹嘉、刘家梁、高原、刘丛恺、张灿、李怡宁、秦岚、孙琦</dd>
  <dt>指导教师</dt><dd>朱敏玲、邹智元、焦健</dd>
  <dt>我的分工</dt><dd>算法分析与文本撰写</dd>
</dl>`,
          source: "个人文件 · 竞赛 · 挑战杯（获奖证书、项目材料）",
        },
        {
          title: "技术方向",
          html: `<p>项目面向低空探测场景，处理的是「样本少、模态多、环境变化快」这三类困难。团队的技术路线主要包括：</p>
<ul class="clean">
  <li><strong>目标检测与小样本学习</strong>：以 YOLO 系列检测器为基线，通过元学习（MAML）、半监督与自监督策略提升小样本条件下的泛化能力。</li>
  <li><strong>多模态融合</strong>：融合可见光、红外与深度信息，缓解单一模态在夜间、逆光、遮挡条件下的失效问题。</li>
  <li><strong>跨模态语义对齐</strong>：借助 BiT、CLIP 等模型完成跨模态特征对齐。</li>
  <li><strong>端云协同</strong>：以 Astra S 深度相机搭配树莓派构成端侧采集与推理单元，与云端算力协同。</li>
  <li><strong>持续学习</strong>：让模型在新增场景数据下持续更新而不明显遗忘旧能力。</li>
</ul>
<p>我负责的部分是算法分析与技术文本撰写：梳理上述算法路线，比较不同策略在项目场景下的适用性，并完成论文与专利技术文档的写作与规范化。</p>`,
          tags: ["YOLO", "MAML 元学习", "半监督 / 自监督", "多模态融合", "CLIP", "树莓派端云协同"],
          source: "个人文件 · 竞赛 · 挑战杯 · 项目材料",
        },
      ],
    },
    {
      id: "challenge-note",
      type: "note",
      variant: "warn",
      nav: true,
      title: "口径说明：竞赛级别",
      html: "个人材料中有处把这项赛事写作「国家级」。但证书上写明的赛事名称是「「青创北京」2025 年「挑战杯」<strong>首都</strong>大学生课外学术科技作品竞赛」，属于首都（北京市）级赛事。本站按证书表述记为<strong>首都级特等奖</strong>，不写国家级。",
    },

    /* ---------------- 课程设计 ---------------- */
    {
      id: "coursework",
      idx: "05",
      title: "课程设计",
      note: "以下四项来自个人经历材料中对课程设计的记录，按时间顺序排列。",
      type: "cards",
      cols: 2,
      items: [
        {
          title: "罕见病 App 设计",
          sub: "大一学年",
          html: "<p>大一学年的课程设计，围绕罕见病相关的信息展示与辅助需求完成移动端应用设计。</p>",
          source: "个人文件 · 个人经历2026.docx",
        },
        {
          title: "情商答题网页",
          sub: "大二学年 · 组长",
          html: "<p>大二学年作为组长带领团队开发的情商答题类网页项目，负责分工与整体推进。</p>",
          source: "个人文件 · 个人经历2026.docx",
        },
        {
          title: "CPU 基本指令实现乘法与平方运算",
          sub: "计算机体系结构 / CPU 设计相关",
          html: "<p>在 CPU 设计课程中，用基本指令实现乘法与平方运算，验证指令集与数据通路的配合。</p>",
          source: "个人文件 · 个人经历2026.docx",
        },
        {
          title: "基于 Android 的本地 C/S 架构即时通信与多媒体应用",
          sub: "2025.06 — 2025.07 · 项目负责人",
          html: `<p>这是一个把「网络通信 + 多媒体 + 本地持久化」放在一台 Android 设备上跑通的项目：设备自身作为本地服务器，同时充当客户端。</p>
<ul class="clean">
  <li>以 Android 设备作为本地服务器，基于 Socket 实现移动端 C/S 即时通信机制；自定义基础消息协议（用户标识、消息类型、内容载荷）。</li>
  <li>采用多线程模型处理连接监听与数据传输，避免网络 I/O 阻塞主线程；实现消息的异步分发与 UI 更新。</li>
  <li>完成聊天记录本地持久化与展示逻辑。</li>
  <li>用 RecyclerView 构建视频信息流页面并管理播放生命周期，用 MediaPlayer 实现本地音乐播放与权限控制。</li>
  <li>整体负责功能拆分、模块划分，以及注册登录、个人信息管理与核心业务流程设计。</li>
</ul>`,
          tags: ["Android", "Socket", "多线程", "RecyclerView", "MediaPlayer"],
          source: "个人文件 · 个人经历2026.docx（项目负责人 2025.06—2025.07）",
        },
      ],
    },

    /* ---------------- 学术成果 ---------------- */
    {
      id: "papers",
      idx: "06",
      title: "学术成果与论文",
      type: "table",
      columns: ["论文题目", "状态（材料口径）", "佐证材料"],
      rows: [
        ["《面向企业碳排放溯源交易的分层区块链方案研究》", "已获《计算机应用文摘》编辑部录用，拟刊 2025 年第 13 期", "结题支撑材料 · 录用邮件.jpg、论文.pdf（已核对编辑部录用邮件截图）"],
        ["《VEC 中基于边云协同的负载均衡任务卸载方案》", "个人材料记载为北大中文核心（未找到独立佐证）", "个人文件 · 个人经历2026.docx"],
        ["《基于区块链的车联网数据共享综述》", "个人材料记载为北大中文核心（未找到独立佐证）", "个人文件 · 个人经历2026.docx"],
      ],
      footnote: "这三篇论文中，只有第一篇有独立的录用邮件与论文正文可供核对，因此标注「已录用」；后两篇目前仅见于本人撰写的经历材料，本站如实标注「未找到独立佐证」，不做期刊级别的结论。",
    },
    {
      id: "project-note",
      type: "note",
      title: "关于角色表述",
      html: "本站对项目角色做了保守处理：只有当材料明确写「项目负责人」时才写负责人；本人材料中把参与写成负责的表述，一律按原始凭证（结题证书、技术文档、证书落款）校正。",
    },
  ],
};
/* ==========================================================================
   分区五：竞赛与荣誉
   ========================================================================== */
const honors = {
  id: "honors",
  title: "竞赛与荣誉",
  eyebrow: "PART 04 · HONORS",
  path: "sections/honors/index.html",
  keywords: ["获奖", "证书", "竞赛", "数学竞赛", "挑战杯", "数据法治", "奖学金"],
  lede: "全部获奖与荣誉称号按时间排列。每一条都标明了对应材料的出处，没有原始凭证的一律不写。",
  blocks: [
    {
      id: "awards",
      idx: "01",
      title: "竞赛获奖",
      type: "timeline",
      items: [
        {
          date: "2024 年 9 月 7 日",
          title: "大学生数据法治实验模型竞赛 · 一等奖",
          desc: "主办单位：中国政法大学数据法治研究院。参赛项目为「商业维权案件赔额纳入税收征管范围的可视化管理——基于 31066 份商业式维权判决的文本建模」，本人在团队中负责数据分析与监督测试。",
          source: "证书集 · 2024.09暑假大学生数据法制竞赛一等奖.jpg",
        },
        {
          date: "2025 年",
          title: "「青创北京」挑战杯 · 首都大学生课外学术科技作品竞赛「青聚 AI」人工智能+专项赛 · 特等奖",
          desc: "参赛项目为「凌目智算（LynxAI）——小样本学习与多模态融合的低空探测系统」，本人负责算法分析与文本撰写。证书编号 2025BJTZBRGZN0019。",
          source: "证书集 · 2025.10挑战本人工智能+专项赛特等奖.jpg",
        },
        {
          date: "2025 年 11 月",
          title: "北京市第三十六届大学生数学竞赛（非数学专业乙组）· 三等奖",
          desc: "主办单位：北京数学会。",
          source: "证书集 · 2025.11数学竞赛三等奖.jpg",
        },
      ],
    },
    {
      id: "participated",
      idx: "02",
      title: "参与过的其他竞赛",
      note: "以下赛事在材料中只记载为「曾参加」，没有获奖记录，本站如实表述，不写作获奖。",
      type: "prose",
      html: `<div class="tags" style="margin:6px 0 14px;">
  <span class="tag tag--violet">数学建模大赛</span>
  <span class="tag tag--violet">数学竞赛（另有多届参赛记录）</span>
  <span class="tag tag--violet">蓝桥杯</span>
</div>
<span class="src">来源：个人文件 · 个人经历2026.docx（原文：「曾参加数学建模大赛，数学竞赛，蓝桥杯。」）</span>`,
    },
    {
      id: "titles",
      idx: "03",
      title: "荣誉称号汇总",
      type: "table",
      columns: ["时间", "称号", "层级 / 说明", "凭证"],
      rows: [
        ["2022 年", "优秀班干部", "泰安市（高中阶段）", "个人经历2026.docx"],
        ["2023 年 12 月", "三好学生", "校级 · 2022—2023 学年", "证书集 · 2023.12三好学生.jpg"],
        ["2024 年 6 月", "优秀团员", "校级 · 2023—2024 学年", "证书集 · 2024.06优秀团员.jpg"],
        ["2024 年", "优秀志愿者", "校级", "大学荣誉申请 · 2024校级优秀志愿者"],
        ["2025 年 6 月", "优秀团干部", "校级 · 2024—2025 学年", "证书集 · 2025.06优秀团干部.jpg"],
        ["2025 年 12 月", "优秀学生干部", "校级 · 2024—2025 学年", "证书集 · 2025.12优秀学生干部.jpg"],
        ["2026 年", "北京市普通高等学校优秀毕业生", "市级 · 2026 届", "大学荣誉申请 · 优秀毕业生"],
      ],
    },
    {
      id: "cert-volume",
      idx: "04",
      title: "证书归档情况",
      type: "stats",
      cols: 3,
      items: [
        { value: "19", unit: "份", label: "证书集中单独归档的图片凭证", accent: true },
        { value: "8", unit: "项", label: "本科期间获得的奖学金" },
        { value: "6", unit: "项", label: "校级及以上荣誉称号" },
      ],
      // 说明：19 = 证书集目录内 19 张 jpg（不含 证书-刘家梁.pdf 汇总件）
    },
    {
      id: "honors-note",
      type: "note",
      title: "本站不展示的内容",
      html: "所有证书的原始图片、成绩单截图与身份证件照都不上传到站点，只保留文字化的结果表述。原因有两个：一是证书上通常含有编号与个人信息，二是原始扫描件容易在网络转载中被滥用。",
    },
  ],
};

/* ==========================================================================
   分区六：学生工作
   ========================================================================== */
const leadership = {
  id: "leadership",
  title: "学生工作",
  eyebrow: "PART 05 · LEADERSHIP",
  path: "sections/leadership/index.html",
  keywords: ["学生会", "主席", "副主席", "团干部", "学代会", "活动", "新闻中心"],
  lede: "本科期间在计算机学院学生会与新闻中心两个组织任职三年，从干事做到部长、副主席、主席。这一页记录真实职务、任期与承办过的工作。",
  blocks: [
    {
      id: "roles",
      idx: "01",
      title: "任职时间线",
      type: "timeline",
      items: [
        { date: "2022 年（大一）", title: "加入计算机学院学生会、新闻中心", desc: "大一入学后同时加入学院学生会与新闻中心，从基础工作做起。", source: "个人文件 · 大学荣誉申请材料" },
        { date: "2023—2024 学年", title: "计算机学院学生会 · 副主席", desc: "聘书签发时间 2024 年 9 月。任期内参与学院学生活动的组织与统筹。", source: "证书集 · 2024.09副主席聘书.jpg" },
        { date: "2023—2024 学年", title: "新闻中心新闻采编部 · 副部长", desc: "聘书签发时间 2024 年 9 月。负责学院新闻与推文的选题、撰写与稿件整理。", source: "证书集 · 2024.09采编部副部长.jpg" },
        { date: "2024—2025 学年", title: "计算机学院学生会 · 主席", desc: "聘书签发时间 2025 年 9 月。负责学生会整体工作的统筹与推进。", source: "证书集 · 2025.09年主席聘书.jpg" },
        { date: "2025 年 6 月 / 2025 年 12 月", title: "优秀团干部 / 优秀学生干部", desc: "学生工作的两个年度考核性荣誉。", source: "证书集 · 2025.06优秀团干部.jpg、2025.12优秀学生干部.jpg" },
      ],
    },
    {
      id: "work",
      idx: "02",
      title: "工作内容",
      type: "cards",
      cols: 2,
      items: [
        {
          title: "学生活动组织",
          sub: "学生会 · 副主席 / 主席",
          html: `<p>任期内累计组织与参与的活动，在归档材料中可以查到的主要有：</p>
<ul class="clean">
  <li>学生会招新（2023 年、2024 年）与全校学生会工作交流</li>
  <li>新生运动会（2024.10.30）、学院篮球赛（2024.10）</li>
  <li>学风建设月相关活动、学习部期末活动策划、学院期末加油站</li>
  <li>2024 年「我为学生办实事」专项</li>
  <li>2025 年学院大会（250305）、吾爱吾师评选活动</li>
  <li>校园文化艺术节（第七届、第八届活动立项申报）、学院板书活动</li>
  <li>校运会 / 大运会（2025 年）、无律动不青春健康跑活动</li>
  <li>宿舍检查与优秀宿舍评选</li>
  <li>21 天打卡活动、「我与校园初见面」活动策划</li>
</ul>`,
          source: "个人文件 · 副主席（活动材料、策划案、立项申请表）",
        },
        {
          title: "制度与文档性工作",
          sub: "学生会 · 副主席 / 主席",
          html: `<ul class="clean">
  <li>起草「我与校园初见面」活动策划案</li>
  <li>填报北京信息科技大学第七届、第八届文化艺术节活动立项申请表</li>
  <li>参与学生会换届工作（换届报名表、干部信息整理）</li>
  <li>整理学院参会人员名单与活动统计表</li>
</ul>
<p>这些工作大多是幕后的表格、流程与材料，不太出现在活动照片里，但它们是学生组织运转中比较耗时的部分。</p>`,
          source: "个人文件 · 副主席 目录下的策划案与表格文件",
        },
      ],
    },
    {
      id: "proposals",
      idx: "03",
      title: "学生代表大会提案",
      type: "prose",
      html: `<p>在校学生代表大会期间，提交了两份提案征集表（均为本人署名的独立文档）：</p>
<div class="grid cols-2" style="margin-top:16px;">
  <div class="card" style="margin:0;">
    <h3 class="card__title">关于第一食堂招商的建议</h3>
    <p class="card__sub">学生代表大会提案征集表</p>
    <p style="margin:0;font-size:14px;color:var(--text-dim);">针对第一食堂的商户结构与就餐体验提出改进建议。</p>
  </div>
  <div class="card" style="margin:0;">
    <h3 class="card__title">亲民健身房提案</h3>
    <p class="card__sub">学生代表大会提案征集表</p>
    <p style="margin:0;font-size:14px;color:var(--text-dim);">围绕校内健身设施的可及性与价格提出建议。</p>
  </div>
</div>
<span class="src">来源：学代会 · 北京信息科技大学第 X 次学生代表大会提案征集表（第一食堂招商建议、亲民健身房提案），均为刘家梁署名文档。</span>`,
    },
    {
      id: "leadership-note",
      type: "note",
      variant: "warn",
      title: "关于「服务人次」类表述",
      html: "本人的优秀学生干部材料里有一句「累计服务同学逾万人次」。这个数字无法从归档材料中复核，因此本站不采用，只客观列出实际组织或参与过的活动名称。",
    },
  ],
};

/* ==========================================================================
   分区七：新闻采编
   ========================================================================== */
const media = {
  id: "media",
  title: "新闻采编",
  eyebrow: "PART 06 · EDITORIAL",
  path: "sections/media/index.html",
  keywords: ["采编部", "推文", "新闻中心", "公众号", "撰稿", "选题"],
  lede: "2023 到 2024 年在计算机学院新闻中心新闻采编部担任副部长，负责学院新闻与公众号推文的选题、撰稿与整理。这一页列出归档的全部 22 个选题。",
  blocks: [
    {
      id: "role",
      idx: "01",
      title: "岗位与工作方式",
      type: "prose",
      html: `<p>新闻中心是学院对外发布信息的主要出口之一。采编部的工作流程大致是：拿到活动通知或素材 → 确定选题与角度 → 撰写初稿 → 配图与排版 → 送审发布。</p>
<p>我在这条链条上承担的是选题与文字部分。归档的推文素材按选题分文件夹保存，每个文件夹里是当年的初稿或成稿文档，加上配套照片。</p>
<span class="src">来源：采编部推文（22 个选题目录，含文案与配图）、证书集 · 2024.09采编部副部长.jpg</span>`,
    },
    {
      id: "topics",
      idx: "02",
      title: "推文选题清单",
      note: "以下 22 个选题按归档目录名原样列出，未做删减或美化。",
      type: "table",
      columns: ["序号", "选题（归档目录名）", "序号", "选题（归档目录名）"],
      numeric: [0, 2],
      rows: [
        ["01", "2023 萌新寄语", "12", "考风考纪"],
        ["02", "2023 学代会", "13", "考研推文"],
        ["03", "20 级搬迁", "14", "母亲节"],
        ["04", "23 国庆假期推文", "15", "期末诚信考试"],
        ["05", "安全（安全教育）", "16", "图书漂流活动"],
        ["06", "诚信考试（2023.11）", "17", "新闻中心换届大会"],
        ["07", "党史答题活动", "18", "新闻中心全体大会"],
        ["08", "「典」亮新时代", "19", "新闻中心招新"],
        ["09", "冬至", "20", "疫情时防疫四条"],
        ["10", "计算机学院 2019 级「自强励志之星」推荐材料", "21", "元宵节"],
        ["11", "节约水资源", "22", "运动会"],
      ],
    },
    {
      id: "themes",
      idx: "03",
      title: "选题分布",
      type: "tags",
      items: [
        { label: "迎新与毕业季", tone: "cyan" },
        { label: "节假日（国庆 / 冬至 / 元宵 / 母亲节）", tone: "cyan" },
        { label: "考试与学风（诚信考试 / 考风考纪 / 考研）", tone: "violet" },
        { label: "安全教育", tone: "violet" },
        { label: "党建与理论学习（党史答题 /「典」亮新时代）", tone: "mint" },
        { label: "学院活动（运动会 / 图书漂流 / 换届 / 招新）", tone: "mint" },
        { label: "服务信息（节约水资源 / 防疫提示）", tone: "cyan" },
      ],
    },
    {
      id: "media-note",
      type: "note",
      title: "关于推文原文",
      html: "归档中的推文初稿文档包含具体活动细节与照片，其中不少照片拍到其他同学。为了不给他人带来困扰，本站只公开选题名称，不搬运推文正文与照片。",
    },
  ],
};
/* ==========================================================================
   分区八：校园生活
   ========================================================================== */
const campus = {
  id: "campus",
  title: "校园生活",
  eyebrow: "PART 07 · CAMPUS",
  path: "sections/campus/index.html",
  keywords: ["班级", "宿舍", "4052", "军训", "澳门", "研学", "志愿", "运动会"],
  lede: "班级、宿舍、军训、研学与志愿服务。这些内容构成了学业与学生工作之外的另一半大学生活。",
  blocks: [
    {
      id: "class",
      idx: "01",
      title: "班级与学籍轨迹",
      type: "kv",
      items: [
        { k: "2022—2023 学年", v: "计类实验 2202（计算机类实验班）" },
        { k: "专业分流后", v: "计科 2205（计算机科学与技术）" },
        { k: "学籍档案", v: "归档了班级名册、学期课表、选课通知、重修报名表、导师报名表等班级材料" },
        { k: "班级活动", v: "党的二十大宣讲会观后感、二十大感言、给老师的一封信等" },
      ],
    },
    {
      id: "dorm",
      idx: "02",
      title: "宿舍生活",
      type: "prose",
      html: `<p>本科期间住校，宿舍为学二 B 座 4052。围绕宿舍归档的材料主要有三类：</p>
<div class="grid cols-3" style="margin-top:16px;">
  <div class="card" style="margin:0;">
    <h3 class="card__title">宿舍公约</h3>
    <p style="margin:0;font-size:13.6px;color:var(--text-dim);">宿舍成员共同约定的作息、卫生与相处规则。</p>
  </div>
  <div class="card" style="margin:0;">
    <h3 class="card__title">宿舍样板间打造申报表</h3>
    <p style="margin:0;font-size:13.6px;color:var(--text-dim);">参与学校「宿舍样板间打造」项目的申报材料。</p>
  </div>
  <div class="card" style="margin:0;">
    <h3 class="card__title">优秀宿舍相关材料</h3>
    <p style="margin:0;font-size:13.6px;color:var(--text-dim);">宿舍评优相关的推荐名单与现场照片。</p>
  </div>
</div>
<p style="margin-top:16px;">另外还归档了《计算机学院 2022 级本科生劳动月活动工作方案》与宿舍劳动相关记录。</p>
<span class="src">来源：宿舍文件（4052宿舍公约.docx、宿舍样板间打造申报表.docx、优秀宿舍相关材料、宿舍劳动.docx）</span>`,
    },
    {
      id: "military",
      idx: "03",
      title: "2023 年军训",
      type: "prose",
      html: `<p>2023 年参加学校组织的学生军训，编入计算机学院五营。归档材料包括：</p>
<ul class="clean">
  <li>《2023 年学生军训工作手册》（教师使用版）</li>
  <li>计算机学院五营各连队推荐宿舍名单（含终稿）</li>
  <li>军训宿舍相关表格</li>
</ul>
<p>需要说明的是，这些是学院层面的工作文件，本站只把它们当作「参加 2023 年军训」这一事实的佐证，不对本人在军训中的具体角色做任何推断。</p>
<span class="src">来源：军训（工作手册、五营推荐宿舍名单、宿舍.xlsx）</span>`,
    },
    {
      id: "macau",
      idx: "04",
      title: "2024 年京澳研学交流",
      type: "prose",
      html: `<p>2024 年 7 月 7 日至 7 月 13 日，参加由澳门科技大学研究生院管理培训与发展中心组织的<strong>京澳师生「创业创新力」交流项目</strong>，完成为期一周的研学交流并获结业证书。</p>
<dl class="kv" style="margin-top:16px;">
  <dt>项目名称</dt><dd>京澳师生「创业创新力」交流项目（Beijing-Macao Teachers and Students "Entrepreneurship and Innovation" Exchange Program）</dd>
  <dt>时间</dt><dd>2024 年 7 月 7 日 — 7 月 13 日</dd>
  <dt>组织方</dt><dd>澳门科技大学研究生院 · 管理培训与发展中心</dd>
  <dt>结果</dt><dd>完成项目，获结业证书（Certificate of Completion）</dd>
</dl>
<span class="src">来源：证书集 · 2024.07年暑期澳门研学实践活动.jpg</span>`,
    },
    {
      id: "volunteer",
      idx: "05",
      title: "志愿服务",
      type: "prose",
      html: `<p>志愿服务是本科期间持续在做的一件事。根据优秀志愿者申报材料的记载：</p>
<ul class="clean">
  <li>累计志愿服务时长 <strong>116 小时</strong></li>
  <li>2023 年度志愿服务时长 <strong>53.5 小时</strong></li>
  <li>2024 年度志愿服务时长 <strong>62.5 小时</strong></li>
</ul>
<p>2024 年获评校级「优秀志愿者」。</p>
<span class="src">来源：个人文件 · 大学荣誉申请 · 2024校级优秀志愿者；2023 年数据另见三好学生 / 优秀学生干部申请材料</span>`,
    },
    {
      id: "campus-note",
      type: "note",
      title: "关于同学与第三方",
      html: "班级名册、宿舍成员信息、同学联系方式等材料虽然存在于本地归档中，但不属于可以公开的内容。本站不会以任何形式（包括截图、转述、名单）发布这些信息。",
    },
  ],
};

/* ==========================================================================
   分区九：自学与技术栈
   ========================================================================== */
const skills = {
  id: "skills",
  title: "自学与技术栈",
  eyebrow: "PART 08 · SKILLS",
  path: "sections/skills/index.html",
  keywords: ["前端", "HTML", "CSS", "JavaScript", "Python", "C", "C++", "Java", "自学", "技术栈"],
  lede: "课程之外自己补的技术内容，以及四年里实际用过的语言与工具。这一页只列真实用过或用课件学过的，不做能力等级包装。",
  blocks: [
    {
      id: "languages",
      idx: "01",
      title: "编程语言与工具",
      type: "table",
      columns: ["语言 / 工具", "使用场景（来自项目材料）"],
      rows: [
        ["C", "程序设计基础课程、CSP 类算法练习（词频统计、文本相似度计算、化学方程式配平）"],
        ["C++", "C++ 程序设计课程、数据结构与算法课程"],
        ["Java", "Android 移动应用开发（即时通信与多媒体应用课程设计）"],
        ["Python", "大创共识机制仿真、数据法治竞赛文本处理管线、Jieba / TF-IDF / Transformers 模型微调"],
        ["HTML / CSS / JavaScript", "前端开发技术实践自学、情商答题网页课程设计"],
        ["R", "数据法治竞赛中的矩阵处理与可视化（RStudio）"],
        ["Docker", "部署 Doccano 标注平台"],
        ["Android 组件", "RecyclerView、MediaPlayer、Socket、多线程编程"],
      ],
      footnote: "技能栏按「实际出现在项目材料中的使用场景」列出，不标注熟练度等级。",
    },
    {
      id: "frontend",
      idx: "02",
      title: "前端技术自学",
      type: "prose",
      html: `<p>自学前端时使用的是一套完整的三份课件（22 级前端开发技术实践），覆盖 HTML、CSS、JavaScript 三个部分：</p>
<div class="grid cols-3" style="margin-top:16px;">
  <div class="card" style="margin:0;"><h3 class="card__title">HTML</h3><p class="card__sub">22级-前端开发技术实践-HTML.pptx</p><p style="margin:0;font-size:13.6px;color:var(--text-dim);">页面结构与语义化标签。</p></div>
  <div class="card" style="margin:0;"><h3 class="card__title">CSS</h3><p class="card__sub">22级-前端开发技术实践-CSS.pptx</p><p style="margin:0;font-size:13.6px;color:var(--text-dim);">选择器、盒模型、布局与样式组织。</p></div>
  <div class="card" style="margin:0;"><h3 class="card__title">JavaScript</h3><p class="card__sub">22级-前端开发技术实践-JavaScript.pptx</p><p style="margin:0;font-size:13.6px;color:var(--text-dim);">基础语法、DOM 操作与交互逻辑。</p></div>
</div>
<p style="margin-top:16px;">现在这个博客站点本身就是这套技能的延续：左侧侧边栏的抽屉、分区筛选、小节滚动高亮与站内检索，都是用原生 JavaScript 手写的，没有引入任何前端框架。</p>
<span class="src">来源：自学（22 级前端开发技术实践三份课件）；站点实现见仓库 tools/ 与 assets/ 目录</span>`,
    },
    {
      id: "practice",
      idx: "03",
      title: "算法与编程练习",
      type: "prose",
      html: `<p>课程之外用 C 语言写过一些基础算法练习，归档的题目类型包括：</p>
<ul class="clean">
  <li><strong>词频统计</strong>：读入文本，统计并排序输出各词出现次数。</li>
  <li><strong>文本相似度计算</strong>：通过特征比较计算两段文本的相似程度。</li>
  <li><strong>化学方程式配平</strong>：解析方程式并通过求解线性关系确定配平系数。</li>
</ul>
<p>这些练习本身规模不大，但覆盖了字符串处理、数据结构选择与基础数值求解三类常见思路。</p>`,
    },
    {
      id: "stack",
      idx: "04",
      title: "技术栈速览",
      type: "tags",
      items: [
        { label: "C", tone: "cyan" }, { label: "C++", tone: "cyan" }, { label: "Java", tone: "cyan" },
        { label: "Python", tone: "cyan" }, { label: "HTML / CSS", tone: "cyan" }, { label: "JavaScript", tone: "cyan" },
        { label: "R / RStudio", tone: "violet" }, { label: "Docker", tone: "violet" }, { label: "Socket 编程", tone: "violet" },
        { label: "多线程", tone: "violet" }, { label: "Android 开发", tone: "violet" },
        { label: "Jieba / TF-IDF", tone: "mint" }, { label: "Transformers 微调", tone: "mint" },
        { label: "YOLO / 元学习", tone: "mint" }, { label: "多模态融合", tone: "mint" },
        { label: "区块链共识（PBFT）", tone: "mint" }, { label: "Git", tone: "cyan" },
      ],
    },
  ],
};

/* ==========================================================================
   分区十：影像档案
   ========================================================================== */
const gallery = {
  id: "gallery",
  title: "影像档案",
  eyebrow: "PART 09 · ARCHIVE",
  path: "sections/gallery/index.html",
  keywords: ["相册", "照片", "影像", "档案", "校徽"],
  lede: "截至目前，本地影像与文档归档的实际情况，以及本站选择公开与不公开的边界。这一页刻意保持克制：影像类内容涉及他人时，一律不公开。",
  blocks: [
    {
      id: "inventory",
      idx: "01",
      title: "归档总览",
      type: "table",
      columns: ["归档目录", "主要内容", "是否在站内公开"],
      rows: [
        ["个人文件", "简历、获奖材料、竞赛材料、证书集、荣誉申请材料", "部分公开（文字化后）"],
        ["采编部推文", "22 个推文选题，含文案与活动照片", "仅公开选题名称"],
        ["班级文件", "课表、选课通知、班级活动材料、班级名册", "仅公开与本人相关的学业信息"],
        ["宿舍文件", "宿舍公约、样板间申报、劳动月材料", "公开条目名称与类型"],
        ["军训", "军训工作手册、五营推荐宿舍名单、宿舍表格", "公开条目名称"],
        ["学代会", "两份提案征集表", "公开提案主题"],
        ["研究生期间", "创新创业基地入驻项目申请表模板（空白）", "公开说明"],
        ["自学", "前端开发技术实践三份课件", "公开条目名称"],
        ["相册", "校徽、壁纸、证件照、成绩截图、生活照片", "仅公开校徽"],
        ["其他", "课程参考资料等", "不公开"],
        ["家庭文件", "家庭相关信息", "<strong>不公开</strong>"],
      ],
    },
    {
      id: "why",
      idx: "02",
      title: "为什么站内几乎没有照片",
      type: "prose",
      html: `<p>本地归档里照片数量很大——单是运动会就有上百张。但这些照片有一个共同点：<strong>画面里基本都有别人</strong>。</p>
<p>本人照片可以自己决定要不要公开，同学、老师、路人的肖像却不能由我代为决定。因此本站目前的处理方式是：</p>
<ul class="clean">
  <li>公开校徽等不涉及他人的视觉元素；</li>
  <li>活动类照片在本站以「条目 + 时间 + 说明」的形式登记，不放图像本体；</li>
  <li>本人个人照片（证件照、生活照）暂不公开，等本人逐张确认后再考虑新增。</li>
</ul>
<p>这会让站点看起来比实际材料「素」很多，但它是一个可以长期维持、不会给任何人带来麻烦的做法。</p>`,
    },
    {
      id: "todo",
      idx: "03",
      title: "待确认可公开的影像",
      note: "以下类别需要本人逐张确认后再决定是否上线，确认后只需在内容数据中新增条目即可。",
      type: "list",
      items: [
        "<strong>校园与建筑</strong>：不含人像的校园风景、教学楼与宿舍楼外景。",
        "<strong>个人活动记录</strong>：仅本人出镜、或已获得同框者同意的活动照片。",
        "<strong>成果实物</strong>：证书、奖杯、作品界面的拍摄（需先打码证书编号与个人信息）。",
        "<strong>项目界面</strong>：大创仿真结果图、Android 应用界面、数据可视化图表。",
      ],
    },
  ],
};

/* ==========================================================================
   分区十一：未来规划
   ========================================================================== */
const future = {
  id: "future",
  title: "未来规划",
  eyebrow: "PART 10 · NEXT",
  path: "sections/future/index.html",
  keywords: ["升学", "研究生", "规划", "扩展", "创业基地"],
  lede: "本科毕业去向、研究生阶段的材料归档现状，以及这个档案站接下来准备怎么扩展。",
  blocks: [
    {
      id: "graduation",
      idx: "01",
      title: "本科毕业去向",
      type: "kv",
      items: [
        { k: "毕业时间", v: "2026 年 7 月" },
        { k: "毕业去向", v: "境内升学" },
        { k: "材料依据", v: "2026 年北京市普通高等学校优秀毕业生审批表（本人填写，去向栏为「境内升学」）" },
      ],
    },
    {
      id: "graduate",
      idx: "02",
      title: "研究生阶段",
      type: "prose",
      html: `<p>研究生阶段目前只有一项归档材料：<code>研究生期间\\407创业基地申请\\附件1：国家级创新创业教育实践基地入驻项目申请表.docx</code>。</p>
<div class="note note--warn" style="margin-top:16px;">
  <span class="note__icon">注意</span>
  <div>该申请表<strong>是一份尚未填写的空白模板</strong>，没有项目名称、没有申报内容。因此本站不写「已申请」或「已入驻」，只如实记录「已开始归档研究生阶段材料，目前包含一份空白申请表模板」。</div>
</div>
<p style="margin-top:16px;">等真正提交、立项或有其他进展后，这一页会按材料更新。</p>`,
    },
    {
      id: "blog-plan",
      idx: "03",
      title: "这个站点接下来怎么扩展",
      type: "list",
      items: [
        "<strong>旅游</strong>：按「城市 / 时间 / 行程 / 见闻」的四段式建一个独立分区，旅行照片经确认后放入。",
        "<strong>课程</strong>：把本科课程按学期整理，记录每门课做了什么、学到什么、留下了什么成果。",
        "<strong>研究生阶段</strong>：读研后的课程、科研、项目材料持续追加。",
        "<strong>技术笔记</strong>：把现有博客文章区改造成技术笔记区，记录真实踩过的坑。",
        "<strong>时间轴</strong>：把目前已按分区整理的内容再抽出一条贯通的时间轴，方便一眼看完四年。",
      ],
    },
    {
      id: "principles",
      idx: "04",
      title: "维护原则",
      type: "prose",
      html: `<ul class="clean">
  <li><strong>内容可追溯</strong>：每条事实都能对应到本地归档中的具体文件。</li>
  <li><strong>不美化、不夸大</strong>：材料里没有的不写，参与的不写成负责，参加的不写成获奖。</li>
  <li><strong>隐私优先</strong>：涉及本人敏感信息与第三方信息的内容，一律不入站。</li>
  <li><strong>可长期维护</strong>：内容集中在一份数据文件中，新增分区只需加一条记录并重新生成页面。</li>
</ul>`,
    },
  ],
};
/* ==========================================================================
   分区十二：资料索引与来源
   ========================================================================== */
const sources = {
  id: "sources",
  title: "资料索引与来源",
  eyebrow: "PART 11 · SOURCES",
  path: "sections/sources/index.html",
  keywords: ["来源", "真实性", "隐私", "口径", "说明", "索引"],
  lede: "本站最重要的一页：所有内容出自哪里、材料之间哪里有冲突、哪些内容被主动剔除，以及这个站点是怎么生成出来的。",
  blocks: [
    {
      id: "principle",
      idx: "01",
      title: "真实性规则",
      type: "prose",
      html: `<p>本站的全部内容来自本地归档目录 <code>D:\\桌面\\文件</code> 中的原始材料。整理过程中遵循四条规则：</p>
<ul class="clean">
  <li><strong>有据可查</strong>：每一条事实都必须能在归档文件中找到出处，出处标注到具体文件名。</li>
  <li><strong>原始凭证优先</strong>：当本人撰写的简历 / 申请材料与证书、结题文件、项目技术文档出现冲突时，以原始凭证为准。</li>
  <li><strong>冲突保留</strong>：不删除冲突信息，而是在对应分区标注口径差异，让读者看到材料原貌。</li>
  <li><strong>不做推断</strong>：材料没有写的内容，即使「按理说应该是这样」，也不写进站点。</li>
</ul>`,
    },
    {
      id: "conflicts",
      idx: "02",
      title: "口径冲突一览",
      note: "这是整理过程中发现的六处口径冲突，本站的处理方式一并列出。",
      type: "table",
      columns: ["事项", "个人材料中的说法", "原始凭证中的说法", "本站采用"],
      rows: [
        ["大创项目级别", "个人简历（2025 版）写作「省级大学生创新创业项目」", "结题证书标注「市级」；归档文件夹名为「…_2024_<strong>市级</strong>_…」", "<strong>市级</strong>"],
        ["数据法治竞赛所用模型与本人角色", "个人简历写作「Transformer 框架」，优秀毕业生材料写作「Llama3 + LoRA」，并称本人为「模型开发负责人」", "项目技术文档记录模型为 <strong>UIE-Base</strong>，团队分工中本人为<strong>数据分析与监督测试</strong>，项目负责人为赵韫淏", "<strong>UIE-Base</strong>；本人为团队成员"],
        ["挑战杯赛事级别", "个人材料中有处写作「国家级」", "证书载明为「<strong>首都</strong>大学生课外学术科技作品竞赛」", "<strong>首都级特等奖</strong>"],
        ["论文期刊级别", "个人经历材料称《VEC 中基于边云协同的负载均衡任务卸载方案》《基于区块链的车联网数据共享综述》为「北大中文核心」", "未找到这两篇论文的录用通知或期刊页面等独立佐证", "只作为「材料记载」列出，不下期刊级别结论"],
        ["大创论文成果数量", "材料称「1 篇在投、1 篇返修」", "归档中有 1 篇论文正文与 1 封录用邮件（拟刊 2025 年第 13 期）", "录用 1 篇；其余仅记为「材料记载」"],
        ["学生工作服务规模", "优秀学生干部材料称「服务逾万人次」", "无对应统计凭证", "不采用该数字，改为列出实际活动名称"],
      ],
    },
    {
      id: "excluded",
      idx: "03",
      title: "被主动剔除的内容",
      type: "list",
      items: [
        "<strong>身份证号、准考证号、学号、证书编号（部分保留）</strong>：证书编号仅在竞赛证书等公开可查场景下保留，其余一律不公开。",
        "<strong>手机号、邮箱、即时通信账号</strong>：全部剔除。",
        "<strong>家庭住址与家庭成员信息</strong>：<code>家庭文件</code> 目录整体不公开，籍贯只公开到市一级。",
        "<strong>家庭经济状况材料</strong>：困难证明、助学基金申请表中的经济信息不公开。",
        "<strong>第三方信息</strong>：同学联系方式、宿舍成员信息表、司法判决书原文、案例库（标注「禁止转发」）中的任何内容。",
        "<strong>证件照与成绩单原图</strong>：不上传图像，只保留文字化结果。",
        "<strong>含他人肖像的照片</strong>：不上传，改为登记条目名称。",
      ],
    },
    {
      id: "index",
      idx: "04",
      title: "材料来源索引",
      type: "table",
      columns: ["分区内容", "主要来源文件 / 目录"],
      rows: [
        ["基本信息、教育背景、技能证书", "个人文件 · 个人简历2025版.pdf、个人简历.docx、个人经历2026.docx"],
        ["学业数据、绩点与排名", "个人文件 · 大学荣誉申请（2023 年三好优干申请、20245 月优秀团员评选、大二上 / 大三上 / 大四上奖学金申请、优秀毕业生）"],
        ["奖学金与荣誉证书", "个人文件 · 证书集（19 张证书图片 + 证书汇总 PDF）"],
        ["市级大创项目", "个人文件 · 竞赛 · 大创（项目申报表、结题支撑材料、结题证书）"],
        ["数据法治竞赛", "个人文件 · 竞赛 · 数据法治竞赛（获奖证书、项目技术文档）"],
        ["挑战杯项目", "个人文件 · 竞赛 · 挑战杯（获奖证书、项目材料）"],
        ["学生工作", "个人文件 · 副主席（活动材料、策划案、立项申请表、换届表）；证书集中的聘书"],
        ["新闻采编", "采编部推文（22 个选题目录）"],
        ["班级与学代", "班级文件（课表、选课通知、班级活动材料）；学代会（两份提案征集表）"],
        ["宿舍与军训", "宿舍文件（宿舍公约、样板间申报表、劳动月材料）；军训（工作手册、推荐宿舍名单）"],
        ["研学与志愿服务", "证书集 · 2024.07年暑期澳门研学实践活动.jpg；大学荣誉申请 · 2024校级优秀志愿者"],
        ["技术自学", "自学（22 级前端开发技术实践三份课件）"],
        ["研究生阶段", "研究生期间 · 407创业基地申请（空白申请表模板）"],
        ["博客历史文章", "仓库中原有的 posts/myfirstblog 与 posts/theproblems 页面"],
      ],
    },
    {
      id: "not-included",
      idx: "05",
      title: "尚未纳入本站的内容",
      note: "以下内容已在本地归档，但尚未整理进站点（部分需要本人确认）。",
      type: "list",
      items: [
        "<strong>照片与影像</strong>：运动会、班级活动、澳门研学、宿舍等照片，需逐张确认是否可公开。",
        "<strong>推文正文</strong>：22 个选题的原始文案内容，需确认是否存在涉第三方信息。",
        "<strong>课程学习资料</strong>：各学期课件、作业、实验报告，后续按「课程」分区整理。",
        "<strong>旅游记录</strong>：尚待提供对应文件夹。",
        "<strong>家庭相关材料</strong>：已在本地归档，但按私密材料处理，不纳入公开站点。",
        "<strong>德国暑假交流申请材料</strong>：<code>个人文件/竞赛/德国暑假交流活动</code> 中只有答辩文档与奖学金申请表，未找到入选、成行或结业凭证，因此不写成「参加过」。",
        "<strong>大学生创新大赛（互联网+）材料</strong>：<code>个人文件/竞赛/互联网+</code> 中只有赛事通知、任务分工与设计文档，未找到报名或提交凭证，因此不写成「参加过」。",
        "<strong>CSP 算法练习</strong>：<code>个人文件/竞赛/CSP.docx</code> 中是 3 道题的代码练习，没有考试时间、分数或证书，只作学习痕迹，不入经历清单。",
      ],
    },
    {
      id: "tech",
      idx: "06",
      title: "站点是怎么生成的",
      type: "prose",
      html: `<p>这个站点不是手写的一堆 HTML。它的结构是：</p>
<pre style="margin:16px 0;padding:14px 16px;border:1px solid var(--line);border-radius:10px;background:rgba(8,12,22,.7);overflow-x:auto;font-family:var(--mono);font-size:12.5px;line-height:1.7;color:var(--text-dim);">content/site-content.mjs   全部内容数据（分区、小节、表格、时间线）
content/posts.mjs          历史文章内容
tools/build.mjs            生成器：读取数据 → 输出静态页面
assets/css/site.css        站点样式（深色科技风、侧边栏、响应式）
assets/js/site.js          交互脚本（抽屉、筛选、滚动高亮、站内检索）</pre>
<p>执行 <code>node tools/build.mjs</code> 会重新生成：首页、每个分区页、文章列表与文章页、404 页、站内检索索引与站点地图。新增一个分区（比如「旅游」）只需要在 <code>content/site-content.mjs</code> 里加一条记录，然后在导航数组中加一项。</p>
<p>站点部署在 GitHub Pages 的 <code>master</code> 分支根目录，因此生成的 HTML 必须是纯静态文件——这也是选择「生成器 + 静态产物」而非前端框架的原因。</p>`,
    },
    {
      id: "changelog",
      idx: "07",
      title: "更新记录",
      type: "timeline",
      items: [
        { date: "2023.07.01", title: "博客建立", desc: "使用 Hugo 搭好博客，发布第一篇技术笔记（git init 报错的解决方法）。", source: "posts/myfirstblog" },
        { date: "2026.09.26", title: "站点重构与内容整理", desc: "依据本地归档材料重建全站：新增左侧分区侧边栏、11 个内容分区、站内检索与来源说明，全部内容数据化。", source: "本次整理" },
      ],
    },
  ],
};

/* ==========================================================================
   导出：分区顺序即侧边栏与翻页顺序
   ========================================================================== */
export const sections = [
  overview,
  profile,
  academics,
  skills,
  projects,
  honors,
  leadership,
  media,
  campus,
  gallery,
  future,
  sources,
];

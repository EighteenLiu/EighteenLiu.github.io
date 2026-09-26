/* ==========================================================================
   站点内容数据 · 第一部分
   本文件是博客的唯一内容源：修改这里，再执行 `node tools/build.mjs`
   即可重新生成全部静态页面。
   真实性约定：
     - 我写下的每件事，都对应着我大学期间真实留下的学习记录、工作记录与项目文件；
     - 遇到前后说法不一致的地方，我会在页面里说明，而不是挑一个好看的说法；
     - 证件号、联系方式、家庭信息、他人信息这些内容，我不会放到公开页面上。
   ========================================================================== */

export const site = {
  title: "刘家梁 · 个人档案",
  baseUrl: "https://eighteenliu.github.io",
  updated: "2026.09.26",
  description:
    "我是刘家梁，北京信息科技大学计算机学院 2022 级本科生。这里记录我的课程学习、毕业设计、项目研究、研究生阶段、实习与工程实践、学生工作、新闻采编与校园生活，内容全部真实，没有虚构情节。",
};

export const nav = [
  { id: "overview", title: "总览", group: "概览", path: "index.html", icon: "overview", keywords: ["首页", "概览", "刘家梁", "个人档案"] },
  { id: "profile", title: "个人档案", group: "个人", path: "sections/profile/index.html", icon: "profile", keywords: ["基本信息", "政治面貌", "教育背景", "技能证书", "四六级", "普通话"] },
  { id: "academics", title: "学业轨迹", group: "个人", path: "sections/academics/index.html", icon: "academics", keywords: ["绩点", "排名", "奖学金", "成绩", "学分"] },
  { id: "courses", title: "课程学习", group: "个人", path: "sections/courses/index.html", icon: "academics", keywords: ["课程", "课件", "作业", "实验", "期末", "学期", "培养方案", "考研", "六级"] },
  { id: "skills", title: "自学与技术栈", group: "个人", path: "sections/skills/index.html", icon: "skills", keywords: ["前端", "HTML", "CSS", "JavaScript", "Python", "C++", "技术栈", "自学"] },
  { id: "thesis", title: "毕业设计", group: "经历", path: "sections/thesis/index.html", icon: "projects", keywords: ["毕设", "毕业论文", "LLM", "双语课程", "RAG", "Django", "Vue3", "Chroma"] },
  { id: "projects", title: "项目与研究", group: "经历", path: "sections/projects/index.html", icon: "projects", keywords: ["大创", "区块链", "数据法治", "挑战杯", "课程设计", "论文", "科研"] },
  { id: "honors", title: "竞赛与荣誉", group: "经历", path: "sections/honors/index.html", icon: "honors", keywords: ["获奖", "证书", "奖学金", "三好学生", "优秀团员", "数学竞赛"] },
  { id: "leadership", title: "学生工作", group: "经历", path: "sections/leadership/index.html", icon: "leadership", keywords: ["学生会", "主席", "副主席", "团干部", "学代会", "活动"] },
  { id: "media", title: "新闻采编", group: "经历", path: "sections/media/index.html", icon: "media", keywords: ["采编部", "推文", "新闻中心", "公众号", "写作", "副部长"] },
  { id: "internship", title: "实习与工程实践", group: "经历", path: "sections/internship/index.html", icon: "projects", keywords: ["实习", "工程实践", "Python", "报表", "自动化", "Excel", "Word", "GitHub"] },
  { id: "graduate", title: "研究生阶段", group: "延伸", path: "sections/graduate/index.html", icon: "future", keywords: ["研究生", "工控固件", "二进制代码", "LLM4Decompile", "数据集", "CCF", "KLBS", "信创"] },
  { id: "campus", title: "校园生活", group: "生活", path: "sections/campus/index.html", icon: "campus", keywords: ["班级", "宿舍", "军训", "研学", "澳门", "志愿"] },
  { id: "gallery", title: "影像档案", group: "生活", path: "sections/gallery/index.html", icon: "gallery", keywords: ["相册", "照片", "影像", "档案"] },
  { id: "future", title: "未来规划", group: "延伸", path: "sections/future/index.html", icon: "future", keywords: ["升学", "研究生", "规划", "扩展"] },
  { id: "sources", title: "关于博客", group: "延伸", path: "sections/sources/index.html", icon: "sources", keywords: ["说明", "隐私", "更新", "计划"] },
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
  lede: "我是刘家梁。这里按学业、项目、竞赛、学生工作、校园生活等分区，长期记录我大学四年真实经历过的事情。",
  blocks: [
    {
      type: "raw",
      nav: false,
      html: `<div class="hero">
  <div class="hero__profile">
    <div class="hero__photo-wrap">
      <svg class="hero__photo-ring" viewBox="0 0 220 220" aria-hidden="true">
        <circle cx="110" cy="110" r="104" fill="none" stroke="rgba(53,214,245,.35)" stroke-width="1"/>
        <circle cx="110" cy="110" r="96" fill="none" stroke="rgba(53,214,245,.12)" stroke-width="1" stroke-dasharray="4 8"/>
      </svg>
      <img class="hero__photo" src="assets/images/profile-liu-jialiang.jpg" alt="刘家梁本人照片" width="220" height="220">
    </div>
    <div class="hero__meta">
      <p class="hero__name">刘家梁</p>
      <p class="hero__role">北京信息科技大学 · 计算机学院</p>
      <p class="hero__role hero__role--sub">计算机科学与技术 · 2022 级本科</p>
      <div class="hero__chips">
        <span class="chip">境内升学</span>
        <span class="chip">工控固件与二进制代码数据集</span>
        <span class="chip">2026 届本科毕业</span>
      </div>
    </div>
  </div>
  <h1 class="hero__title">把大学四年，<span>一条一条记录下来</span></h1>
  <p class="hero__lede">2022 年入学，2026 年本科毕业并继续境内升学。我把课程、毕业设计、科研项目、实习与工程实践、学生工作、新闻采编和校园生活整理成一份长期更新的个人档案：方便自己回看，也方便想了解我的人一次看懂。</p>
</div>`,
    },
    {
      id: "at-a-glance",
      idx: "01",
      title: "关键数据",
      note: "这些数字来自我自己的课程归档、项目文件与 GitHub 仓库，具体展开见对应分区。",
      type: "stats",
      cols: 4,
      items: [
        { value: "4", unit: "项", label: "本科阶段主持或深度参与的项目", accent: true },
        { value: "8", unit: "项", label: "本科期间获得的奖学金" },
        { value: "3", unit: "个", label: "学生工作岗位（副部长 / 副主席 / 主席）" },
        { value: "116", unit: "小时", label: "累计志愿服务时长" },
      ],
    },
    {
      id: "timeline",
      idx: "02",
      title: "大学四年时间轴",
      note: "把已经能确定时间的事串在一起，点开每个分区可以看到更完整的过程。",
      type: "timeline",
      items: [
        { date: "2022.09", title: "入学北京信息科技大学", desc: "进入计算机学院计算机类实验班（计类实验 2202），专业分流后为计科 2205。" },
        { date: "2023.07.01", title: "建立个人博客", desc: "使用 Hugo 搭建博客，发布第一篇技术笔记。" },
        { date: "2023.11.27", title: "获学习优秀二等奖学金、社会贡献奖学金", desc: "2022—2023 学年。" },
        { date: "2023.12", title: "获校级「三好学生」", desc: "2022—2023 学年三好学生称号。" },
        { date: "2023—2024 学年", title: "任学生会副主席、新闻采编部副部长", desc: "聘书签发于 2024.09；参与学院学生活动组织与新闻采编工作。" },
        { date: "2024.01—2024.12", title: "担任市级大创项目负责人", desc: "项目《面向企业碳排放溯源交易的分层区块链方案研究》，2025.03 结题。" },
        { date: "2024.04.07", title: "普通话二级甲等 90.4 分", desc: "北京开放大学语言文字测试分中心。" },
        { date: "2024.07.07—07.13", title: "参加澳门科技大学京澳研学", desc: "「创业创新力」交流项目。" },
        { date: "2024.09.07", title: "获大学生数据法治实验模型竞赛一等奖", desc: "在团队中负责数据分析与监督测试。" },
        { date: "2024—2025 学年", title: "任计算机学院学生会主席", desc: "聘书签发于 2025.09；负责学生会整体工作的统筹与推进。" },
        { date: "2025 年", title: "获挑战杯首都赛特等奖", desc: "「青聚 AI」人工智能+专项赛，项目「凌目智算（LynxAI）」，负责算法分析与文本撰写。" },
        { date: "2025.11.28", title: "获科技创新三等奖学金、社会贡献奖学金", desc: "2024—2025 学年。" },
        { date: "2025.12.15", title: "获国家励志奖学金", desc: "连续第三年获得。" },
        { date: "2026.02.23—06.12", title: "完成本科毕业设计", desc: "《基于 LLM 的双语课程辅助学习平台的设计与实现》，指导教师范艳芳。" },
        { date: "2026.05—08", title: "集中建设报表自动化工具", desc: "公开仓库提交记录覆盖日报、周报、月报、台账拆分、数据汇总与统一报表系统，作为实习与工程实践的主要内容。" },
        { date: "2026.06—09", title: "进入研究生阶段科研与项目", desc: "围绕工控固件、二进制代码数据集、机器语言模型、反向分析工具与平台交付开展研究；同时参加 CCF 灵巧操作挑战备赛与调研。" },
        { date: "2026.07", title: "本科毕业，境内升学", desc: "我目前已确认继续境内升学，具体方向留到研究生阶段分区里逐步补充。" }
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
        { no: "PART 03", title: "课程学习", desc: "八个本科 semester 的课程档案、课件、作业、实验与考研备考材料。", href: "sections/courses/index.html" },
        { no: "PART 04", title: "自学与技术栈", desc: "前端三件套课件、CSP 练习、常用编程语言与工具。", href: "sections/skills/index.html" },
        { no: "PART 05", title: "毕业设计", desc: "基于 LLM 的双语课程辅助学习平台，从需求、架构到测试与局限。", href: "sections/thesis/index.html" },
        { no: "PART 06", title: "项目与研究", desc: "市级大创、数据法治竞赛项目、挑战杯项目与四次课程设计。", href: "sections/projects/index.html" },
        { no: "PART 07", title: "竞赛与荣誉", desc: "按时间排列的获奖与荣誉称号。", href: "sections/honors/index.html" },
        { no: "PART 08", title: "学生工作", desc: "计算机学院学生会副主席、主席与新闻采编部副部长的工作记录。", href: "sections/leadership/index.html" },
        { no: "PART 09", title: "新闻采编", desc: "2022—2023 年在新闻中心采编部保存的 22 个推文选题与 345 个文件。", href: "sections/media/index.html" },
        { no: "PART 10", title: "实习与工程实践", desc: "近半年 15 个公开工程仓库：台账清洗、报表生成与桌面工具。", href: "sections/internship/index.html" },
        { no: "PART 11", title: "研究生阶段", desc: "工控固件、二进制代码数据集、机器语言模型与研究生项目记录。", href: "sections/graduate/index.html" },
        { no: "PART 12", title: "校园生活", desc: "班级、宿舍、军训、学代会提案、澳门研学与志愿服务。", href: "sections/campus/index.html" },
        { no: "PART 13", title: "影像档案", desc: "影像材料的公开边界与待确认清单。", href: "sections/gallery/index.html" },
        { no: "PART 14", title: "未来规划", desc: "本科毕业去向、研究生阶段与博客扩展计划。", href: "sections/future/index.html" },
      ],
    },
    {
      id: "reading",
      idx: "04",
      title: "关于这座站点",
      type: "prose",
      html: `<p>这个站点最初是 2023 年 7 月用 Hugo 建的一个空白博客，只留下一篇关于 <code>git init</code> 报错的笔记。2026 年 9 月，它被改造成现在这个结构：左侧固定分区栏，右侧内容区，所有页面由同一份内容数据生成。</p>
<p>之所以这样改，是因为接下来还会不断有新的材料进来——旅游、课程补充、研究生阶段等等。与其一页一页手写，不如把内容做成数据，新增一个分区只需要加一条记录。</p>
<p>我给自己定了三条规矩：</p>
<ul class="clean">
  <li><strong>只写真实发生过的</strong>：没有真实经历过的事，一句也不写。</li>
  <li><strong>说法不一致时如实说明</strong>：记录之间不一致的地方，我会把两种说法都写出来并说明原因。</li>
  <li><strong>保护隐私</strong>：证件号码、联系方式、家庭信息、他人信息都不公开。</li>
</ul>
<p>更多说明见 <a href="sections/sources/index.html">关于博客</a>。</p>`,
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
<span class="src">2025 版个人简历</span>`,
    },
    {
      id: "certs",
      idx: "03",
      title: "技能与证书",
      type: "table",
      columns: ["证书 / 成绩", "结果", "时间", "相关记录"],
      rows: [
        ["普通话水平测试", "二级甲等 · 90.4 分", "2024.04.07 测试", "证书集 · 2024.04普通话证书.jpg（测试机构：北京开放大学语言文字测试分中心）"],
        ["大学英语六级（CET-6）", "524 分（听力 182 / 阅读 211 / 写作和翻译 131）", "成绩查询截图", "相册 · 重要照片 · 六级成绩.jpg"],
        ["大学英语四级（CET-4）", "已通过", "本科期间", "个人简历 2025 版记载「大学英语四/六级」"],
        ["计算机相关编程语言", "C / C++ / Java / Python / HTML", "本科期间", "个人简历 2025 版技能栏 + 各项目材料"],
      ],
      footnote: "我不会公开证书编号、准考证号、证件号码与成绩单原图，这里只写结果。",
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
<span class="src">大学荣誉申请材料与个人简历</span>`,
    },
    {
      id: "privacy",
      type: "note",
      variant: "warn",
      nav: true,
      title: "关于隐私",
      html: "我不会公开身份证号、手机号、邮箱、家庭住址、家庭成员信息、同学联系方式或成绩单原图；涉及他人的信息，也不会转述。",
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
      columns: ["统计时间 / 学年", "指标", "数值", "记录说明"],
      rows: [
        ["大一学年（2022—2023）", "必修课加权平均绩点", "<strong>3.82</strong>", "2023 年三好学生 / 优秀学生干部申请材料"],
        ["大一学年（2022—2023）", "专业排名", "<strong>4 / 48</strong>", "同上"],
        ["大一学年（2022—2023）", "平均学分绩点", "<strong>3.81</strong>", "2024 年优秀团员评选材料"],
        ["大一学年（2022—2023）", "计算机科学与技术专业排名", "<strong>31 / 145</strong>", "同上"],
        ["大二上学期", "平均学分绩点", "<strong>3.52</strong>", "2024 年优秀团员评选材料"],
        ["本科总评（2026 届）", "GPA", "<strong>3.55</strong>", "2026 年北京市普通高等学校优秀毕业生审批表"],
        ["本科总评（2026 届）", "专业排名", "<strong>前 15%</strong>", "同上"],
      ],
      footnote: "3.82 与 3.81、4/48 与 31/145 是不同时间点、不同统计范围下的数字，我把它们都保留下来，不做取舍。",
    },
    {
      id: "scholarship",
      idx: "02",
      title: "奖学金明细",
      note: "本科四年共获得 8 项奖学金，其中「国家励志奖学金」连续三年获得。",
      type: "table",
      columns: ["学年", "奖学金名称", "等级", "时间"],
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
        { date: "2022 年", title: "泰安市「优秀班干部」", desc: "高中阶段荣誉，记载于个人经历材料。" },
        { date: "2023 年 12 月", title: "校级「三好学生」", desc: "2022—2023 学年三好学生称号。" },
        { date: "2024 年 6 月", title: "校级「优秀团员」", desc: "2023—2024 学年优秀团员。" },
        { date: "2024 年", title: "校级「优秀志愿者」", desc: "材料记载累计志愿服务时长 116 小时，其中 2024 年度 62.5 小时。" },
        { date: "2025 年 6 月", title: "校级「优秀团干部」", desc: "2024—2025 学年优秀团干部。" },
        { date: "2025 年 12 月", title: "校级「优秀学生干部」", desc: "2024—2025 学年优秀学生干部。" },
        { date: "2026 年", title: "北京市普通高等学校「优秀毕业生」", desc: "2026 届优秀毕业生审批表已填写，毕业去向为境内升学。" },
      ],
    },
    {
      id: "volunteer",
      idx: "04",
      title: "志愿服务时长",
      type: "stats",
      cols: 3,
      items: [
        { value: "116", unit: "小时", label: "累计志愿服务时长", accent: true },
        { value: "53.5", unit: "小时", label: "2023 年度志愿服务时长" },
        { value: "62.5", unit: "小时", label: "2024 年度志愿服务时长" },
      ],
    },
    {
      id: "academic-note",
      type: "note",
      title: "关于成绩的说明",
      html: "这里只写绩点、排名与获奖结果，不上传成绩单截图，也不展示单科分数。",
    },
  ],
};
/* ==========================================================================
   分区四：课程学习
   ========================================================================== */
const courses = {
  id: "courses",
  title: "课程学习",
  eyebrow: "PART 03 · COURSEWORK",
  path: "sections/courses/index.html",
  keywords: ["课程", "课件", "作业", "实验报告", "期末复习", "考研", "六级", "培养方案"],
  lede: "我把 <code>D:\\桌面\\学习文件</code> 里的资料按八个学期、六级备考、考研备考和毕业设计四类整理出来。这里写的是我实际保存下来的课程与材料，不完全等于培养方案，也不把课件里老师的内容算成我自己的成果。",
  blocks: [
    {
      id: "scope",
      idx: "01",
      title: "归档范围",
      note: "统计范围包含普通课件、作业、实验报告、源码、复习资料、音视频等；跳过依赖与缓存目录。",
      type: "stats",
      cols: 4,
      items: [
        { value: "2974", unit: "个", label: "学习文件归档文件数", accent: true },
        { value: "822", unit: "个", label: "学习文件归档目录数" },
        { value: "8", unit: "个", label: "本科课程学期目录" },
        { value: "269", unit: "个", label: "考研备考目录文件数" },
      ],
    },
    {
      id: "semesters",
      idx: "02",
      title: "八个学期的归档课程",
      note: "以下课程名取自归档的一级课程目录；同一课程可能同时保存课件、作业、实验与复习材料，不代表只有一种文件。",
      type: "table",
      columns: ["学期", "归档文件数", "归档中可见课程 / 材料"],
      numeric: [1],
      rows: [
        ["大一上学期", "175", "IT 素养、名作译读、大学体育、大学英语、形势与政策、思想道德与法治、程序设计基础（C 语言）、线性代数、英语口语、英语演讲、计算机导论、高等数学"],
        ["大一下学期", "247", "2023 夏开源课、Java、习近平新时代中国特色社会主义思想、大学物理、大学英语、形势与政策、离散数学、马克思主义基本原理、高等数学"],
        ["大二上学期", "443", "AI 认知课、军事理论、大学英语、大学物理、形势与政策、数据结构与算法、机器人、概率论、电路与电子技术、电路实验、离散数学、程序设计实践、中国近现代史纲要"],
        ["大二下学期", "975", "C++、Linux、Web 应用系统实践、专业英语、人工智能、大学英语竞赛、学术英语、形势与政策、数据库、数据结构程序设计（C）、毛泽东思想概论、算法设计与分析、计算机组成原理、高级 Java"],
        ["大三上学期", "303", "CPU 设计、中文信息处理、云计算导论、多媒体技术、形势与政策、操作系统、汇编语言与微机接口技术、计算机网络、软件工程"],
        ["大三下学期", "340", "信息安全、嵌入式操作系统、嵌入式系统、移动应用开发、编译原理、形势与政策、计算机体系结构、计算机视觉"],
        ["大四上学期", "27", "创新开发实践、就业实践、拓尔思课程材料、形势与政策"],
        ["大四下学期", "5", "2022011270-刘家梁（毕业设计相关归档）"],
      ],
    },
    {
      id: "semester-chart",
      idx: "03",
      title: "各学期资料量的对比",
      note: "横条长度按每个学期保存下来的文件数换算。大二下学期最多，主要因为 C++、数据结构、计组、数据库几门课的实验与复习材料都在那学期。",
      type: "raw",
      html: `<div class="viz-panel">
  <div class="viz-panel__head">
    <span class="viz-panel__title">学期 · 文件数</span>
    <span class="viz-panel__meta">8 个学期 / 共 2515 个文件</span>
  </div>
  <div class="viz-bars">
    <div class="viz-bar"><span class="viz-bar__label">大一上</span><span class="viz-bar__track"><i style="--w:18%"></i></span><span class="viz-bar__value">175</span></div>
    <div class="viz-bar"><span class="viz-bar__label">大一下</span><span class="viz-bar__track"><i style="--w:25%"></i></span><span class="viz-bar__value">247</span></div>
    <div class="viz-bar"><span class="viz-bar__label">大二上</span><span class="viz-bar__track"><i style="--w:45%"></i></span><span class="viz-bar__value">443</span></div>
    <div class="viz-bar"><span class="viz-bar__label">大二下</span><span class="viz-bar__track"><i style="--w:100%"></i></span><span class="viz-bar__value">975</span></div>
    <div class="viz-bar"><span class="viz-bar__label">大三上</span><span class="viz-bar__track"><i style="--w:31%"></i></span><span class="viz-bar__value">303</span></div>
    <div class="viz-bar"><span class="viz-bar__label">大三下</span><span class="viz-bar__track"><i style="--w:35%"></i></span><span class="viz-bar__value">340</span></div>
    <div class="viz-bar"><span class="viz-bar__label">大四上</span><span class="viz-bar__track"><i style="--w:3%"></i></span><span class="viz-bar__value">27</span></div>
    <div class="viz-bar"><span class="viz-bar__label">大四下</span><span class="viz-bar__track"><i style="--w:1%"></i></span><span class="viz-bar__value">5</span></div>
  </div>
  <p class="viz-panel__foot">另外还有考研备考 269 个文件、六级真题 25 个文件、毕业设计 150 个文件，单独放在对应小节里。</p>
</div>`,
    },
    {
      id: "materials",
      idx: "04",
      title: "课程材料里能确认到的东西",
      type: "cards",
      cols: 3,
      items: [
        { title: "编程与基础课", sub: "C / Java / C++ / 数据结构", html: "<p>归档包含实验指导、个人实验报告、课程作业与复习资料。例如 C 语言实验报告以“学号_班级_姓名_实验编号_日期”的方式命名，能与本人直接对应。</p>" },
        { title: "计算机核心课程", sub: "计组 / 操作系统 / 计网 / 编译原理", html: "<p>按课程保存了课件、实验材料与复习资料；计算机组成原理目录还包含实验指导书与实验相关内容。</p>" },
        { title: "可视化与人工智能", sub: "人工智能 / 计算机视觉 / 多媒体", html: "<p>人工智能课程有课件与材料；计算机视觉归档包含相机、光照、滤波、SIFT、光流、拟合、Hough、对极几何、识别与分割等课程课件。</p>" },
      ],
    },
    {
      id: "exam-prep",
      idx: "04",
      title: "六级与考研备考",
      type: "prose",
      html: `<p><strong>六级：</strong>归档目录为 <code>六级考试/2015-2022年9月英语四六级真题</code>，保存真题与备考资料，共 25 个文件。六级成绩已单独写在「个人档案」分区里。</p>
<p style="margin-top:14px;"><strong>考研：</strong>目录里包含初试、北信科夏令营、复试、就业、调剂五个部分，共 269 个文件。我把备考过程如实放上来，但不会把“准备过复试”或“参加过夏令营”写成录取结果。</p>
<span class="src">学习文件 · 六级考试与考研目录</span>`,
    },
    {
      id: "boundary",
      type: "note",
      variant: "warn",
      title: "课程页的公开边界",
      html: "课件里可能包含教师讲义、教材扫描件和其他同学的作业，这些内容我不会上传。这里只写我实际学过什么、做过什么。",
    },
  ],
};

/* ==========================================================================
   分区五：毕业设计
   ========================================================================== */
const thesis = {
  id: "thesis",
  title: "毕业设计",
  eyebrow: "PART 05 · GRADUATION PROJECT",
  path: "sections/thesis/index.html",
  keywords: ["毕业设计", "毕业论文", "LLM", "双语课程", "RAG", "Django", "Vue3", "Chroma"],
  lede: "本科毕业设计《基于 LLM 的双语课程辅助学习平台的设计与实现》，指导教师范艳芳，起止时间 2026 年 2 月 23 日至 6 月 12 日。这些内容来自我的论文、答辩 PPT 和代码仓库。",
  blocks: [
    {
      id: "basic",
      idx: "01",
      title: "题目与基本信息",
      type: "kv",
      items: [
        { k: "题目", v: "《基于 LLM 的双语课程辅助学习平台的设计与实现》" },
        { k: "指导教师", v: "范艳芳" },
        { k: "起止时间", v: "2026.02.23 — 2026.06.12" },
        { k: "归档材料", v: "开题、中期、论文、答辩 PPT、查重报告、抽检材料、代码与数据" },
        { k: "公开仓库", v: "<a href=\"https://github.com/EighteenLiu/Learning_Assistant_based_on_LLM\">Learning_Assistant_based_on_LLM</a>（Python，2026.04.22 创建，2026.06.04 最后推送）" },
      ],
    },
    {
      id: "thesis-flow",
      idx: "02",
      title: "系统数据流",
      note: "从课件上传到问答与生成，整条链路的走向。",
      type: "raw",
      html: `<div class="viz-flow">
  <div class="viz-flow__node"><span class="viz-flow__tag">前端</span><b>Vue3 + TypeScript</b><small>上传 / 预览 / 问答 / 记录</small></div>
  <div class="viz-flow__arrow">↓</div>
  <div class="viz-flow__node"><span class="viz-flow__tag">接口</span><b>Django REST Framework</b><small>JWT 鉴权 · 课件 / 翻译 / 问答接口</small></div>
  <div class="viz-flow__arrow">↓</div>
  <div class="viz-flow__split">
    <div class="viz-flow__node"><span class="viz-flow__tag">解析</span><b>PPT / PPTX / PDF</b><small>分页提取文本、表格、坐标</small></div>
    <div class="viz-flow__node"><span class="viz-flow__tag">翻译</span><b>双语翻译与缓存</b><small>译后预览 · 导出文件</small></div>
    <div class="viz-flow__node"><span class="viz-flow__tag">检索</span><b>Chroma 向量检索</b><small>分块 + 页面级召回</small></div>
  </div>
  <div class="viz-flow__arrow">↓</div>
  <div class="viz-flow__node viz-flow__node--accent"><span class="viz-flow__tag">输出</span><b>问答 / 摘要 / 要点 / 术语 / 思维导图</b><small>回答时给出引用页</small></div>
</div>`,
    },
    {
      id: "architecture",
      idx: "03",
      title: "系统架构",
      type: "cards",
      cols: 2,
      items: [
        { title: "后端", sub: "Django REST Framework", html: "<p>提供课件、翻译、问答、学习记录等接口；使用 JWT 完成鉴权。</p>" },
        { title: "前端", sub: "Vue3 + TypeScript + Element Plus", html: "<p>前后端分离，负责课件管理、翻译进度、译后预览、问答与学习记录交互。</p>" },
        { title: "数据层", sub: "SQLite + Chroma", html: "<p>SQLite 保存业务数据；Chroma 作为向量数据库，用于课件内容的检索增强生成。</p>" },
        { title: "文档解析", sub: "PPT / PPTX / PDF", html: "<p>按页提取文本、备注、标题、布局、表格单元格、坐标、尺寸与页面顺序，为后续翻译和检索建立结构化数据。</p>" },
      ],
    },
    {
      id: "functions",
      idx: "03",
      title: "功能闭环",
      type: "list",
      items: [
        "<strong>课件上传与解析</strong>：支持 PPT、PPTX、PDF，解析结果按页保存。",
        "<strong>双语翻译</strong>：对课件内容执行翻译，并提供译后预览。",
        "<strong>整份课件问答 / 单页问答</strong>：基于 RAG 检索课件内容，回答时给出引用页。",
        "<strong>摘要与学习材料</strong>：生成摘要、要点、术语与思维导图。",
        "<strong>学习记录管理</strong>：保存学习过程相关数据。",
        "<strong>译后文件导出</strong>：将翻译结果导出为可继续使用的文件。",
        "<strong>数据处理机制</strong>：分页解析、文本分块、翻译缓存、异常兜底与用户数据隔离。",
      ],
    },
    {
      id: "testing",
      idx: "04",
      title: "答辩测试路径",
      type: "table",
      columns: ["步骤", "测试内容", "材料记录"],
      rows: [
        ["1", "用户注册与登录", "答辩 PPT 测试用例"],
        ["2", "上传并解析 PPTX", "答辩 PPT 测试用例"],
        ["3", "启动翻译任务", "答辩 PPT 测试用例"],
        ["4", "查看译后预览", "答辩 PPT 测试用例"],
        ["5", "课件问答与引用页", "答辩 PPT 测试用例"],
        ["6", "生成总结内容", "答辩 PPT 测试用例"],
        ["7", "导出译后文件", "答辩 PPT 测试用例"],
      ],
    },
    {
      id: "limits",
      idx: "05",
      title: "论文与答辩中明确写出的局限",
      type: "list",
      items: [
        "后台线程方案适合本地演示，高并发场景可引入 Celery + Redis。",
        "批量上传尚未实现。",
        "复杂图片文字和特殊版式仍需要 OCR 支持。",
        "向量检索目前以页面为粒度，后续可细化为段落级。",
        "教师端、课程分组与学习统计属于可扩展方向。",
      ],
    },
    {
      id: "truth",
      type: "note",
      title: "需要区分的内容",
      html: "这里写的是我实际完成的设计、实现与测试。<strong>计划做的和已经做完的分开写，答辩演示不等于正式上线，也没有虚构用户量或性能数据。</strong>",
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
  lede: "本科期间我参与的三个正式项目和四次课程设计，如实写下我承担的角色、用到的技术路线；不同记录有出入的地方我会单独说明。",
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
        },
        {
          title: "项目成果",
          html: `<ul class="clean">
  <li><strong>技术报告 1 篇</strong>（结题支撑材料）</li>
  <li><strong>论文 1 篇获期刊录用</strong>：《面向企业碳排放溯源交易的分层区块链方案研究》，2024 年 12 月收到编辑部录用通知，拟刊于 2025 年第 13 期。</li>
  <li><strong>结题证书 1 份</strong>：2025 年 3 月，项目级别记为「市级」。</li>
</ul>
<p>我还在经历材料里写过另有 1 篇论文处于返修状态。这件事目前只有我自己的文字记录，没有更进一步的录用或审稿信息，所以我只作为「我当时的记录」列出。</p>`,
        },
      ],
    },
    {
      id: "innovation-note",
      type: "note",
      variant: "warn",
      nav: true,
      title: "口径说明：项目级别",
      html: "2025 版个人简历里我把这个项目写成了「省级」，但结题证书上明确标注为「<strong>市级</strong>」，文件夹名里也是「市级」。以结题证书为准，这里记为<strong>市级</strong>。",
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
        },
      ],
    },
    {
      id: "datalaw-note",
      type: "note",
      variant: "warn",
      nav: true,
      title: "口径说明：模型与角色",
      html: "我在简历和优秀毕业生材料里写过该项目用「Llama3 + LoRA」、我担任「模型开发负责人」。但项目技术文档记录的抽取模型是 <strong>UIE-Base</strong>，分工中我是<strong>数据分析与监督测试</strong>，项目负责人是赵韫淏。这里按技术文档写：模型是 UIE-Base，我是团队成员。",
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
        },
      ],
    },
    {
      id: "challenge-note",
      type: "note",
      variant: "warn",
      nav: true,
      title: "口径说明：竞赛级别",
      html: "我在个别材料里把这项赛事写成了「国家级」，但证书上的名称是「「青创北京」2025 年「挑战杯」<strong>首都</strong>大学生课外学术科技作品竞赛」。按证书记为<strong>首都级特等奖</strong>，不写国家级。",
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
        },
        {
          title: "情商答题网页",
          sub: "大二学年 · 组长",
          html: "<p>大二学年作为组长带领团队开发的情商答题类网页项目，负责分工与整体推进。</p>",
        },
        {
          title: "CPU 基本指令实现乘法与平方运算",
          sub: "计算机体系结构 / CPU 设计相关",
          html: "<p>在 CPU 设计课程中，用基本指令实现乘法与平方运算，验证指令集与数据通路的配合。</p>",
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
        },
      ],
    },

    /* ---------------- 学术成果 ---------------- */
    {
      id: "papers",
      idx: "06",
      title: "学术成果与论文",
      type: "table",
      columns: ["论文题目", "状态", "相关记录"],
      rows: [
        ["《面向企业碳排放溯源交易的分层区块链方案研究》", "已获《计算机应用文摘》编辑部录用，拟刊 2025 年第 13 期", "结题支撑材料 · 录用邮件.jpg、论文.pdf（已核对编辑部录用邮件截图）"],
        ["《VEC 中基于边云协同的负载均衡任务卸载方案》", "我在经历材料中记为北大中文核心，但没有进一步信息", "个人经历材料"],
        ["《基于区块链的车联网数据共享综述》", "我在经历材料中记为北大中文核心，但没有进一步信息", "个人经历材料"],
      ],
      footnote: "三篇论文里，只有第一篇我能找到录用邮件和正文，所以写「已录用」；后两篇只出现在我自己的经历材料里，因此只写成「我当时的记录」，不下期刊级别的结论。",
    },
    {
      id: "project-note",
      type: "note",
      title: "关于角色表述",
      html: "项目角色我尽量写准确：只有记录里明确写「项目负责人」时我才写负责人，其它情况按结题证书、技术文档和证书落款来写。",
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
  lede: "全部获奖与荣誉称号按时间排列，只写我确实拿到过的。",
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
        },
        {
          date: "2025 年",
          title: "「青创北京」挑战杯 · 首都大学生课外学术科技作品竞赛「青聚 AI」人工智能+专项赛 · 特等奖",
          desc: "参赛项目为「凌目智算（LynxAI）——小样本学习与多模态融合的低空探测系统」，本人负责算法分析与文本撰写。证书编号 2025BJTZBRGZN0019。",
        },
        {
          date: "2025 年 11 月",
          title: "北京市第三十六届大学生数学竞赛（非数学专业乙组）· 三等奖",
          desc: "主办单位：北京数学会。",
        },
      ],
    },
    {
      id: "participated",
      idx: "02",
      title: "参与过的其他竞赛",
      note: "以下赛事只记载为「曾参加」，没有获奖记录，因此不写作获奖。",
      type: "prose",
      html: `<div class="tags" style="margin:6px 0 14px;">
  <span class="tag tag--violet">数学建模大赛</span>
  <span class="tag tag--violet">数学竞赛（另有多届参赛记录）</span>
  <span class="tag tag--violet">蓝桥杯</span>
</div>
`,
    },
    {
      id: "titles",
      idx: "03",
      title: "荣誉称号汇总",
      type: "table",
      columns: ["时间", "称号", "层级 / 说明"],
      rows: [
        ["2022 年", "优秀班干部", "泰安市（高中阶段）"],
        ["2023 年 12 月", "三好学生", "校级 · 2022—2023 学年"],
        ["2024 年 6 月", "优秀团员", "校级 · 2023—2024 学年"],
        ["2024 年", "优秀志愿者", "校级"],
        ["2025 年 6 月", "优秀团干部", "校级 · 2024—2025 学年"],
        ["2025 年 12 月", "优秀学生干部", "校级 · 2024—2025 学年"],
        ["2026 年", "北京市普通高等学校优秀毕业生", "市级 · 2026 届"],
      ],
    },
    {
      id: "cert-volume",
      idx: "04",
      title: "证书归档情况",
      type: "stats",
      cols: 3,
      items: [
        { value: "19", unit: "份", label: "单独归档的证书图片", accent: true },
        { value: "8", unit: "项", label: "本科期间获得的奖学金" },
        { value: "6", unit: "项", label: "校级及以上荣誉称号" },
      ],
      // 说明：19 = 证书集目录内 19 张 jpg（不含 证书-刘家梁.pdf 汇总件）
    },
    {
      id: "honors-note",
      type: "note",
      title: "不公开的证书原图",
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
  lede: "本科期间我在学院学生会和新闻中心都做过，从基础工作开始，后来担任副部长、副主席和主席。这里记录我真实的职务、任期和做过的事。",
  blocks: [
    {
      id: "roles",
      idx: "01",
      title: "任职时间线",
      type: "timeline",
      items: [
        { date: "2022 年（大一）", title: "加入计算机学院学生会、新闻中心", desc: "大一入学后同时加入学院学生会与新闻中心，从基础工作做起。" },
        { date: "2023—2024 学年", title: "计算机学院学生会 · 副主席", desc: "聘书签发时间 2024 年 9 月。任期内参与学院学生活动的组织与统筹。" },
        { date: "2023—2024 学年", title: "新闻中心新闻采编部 · 副部长", desc: "聘书签发时间 2024 年 9 月。负责学院新闻与推文的选题、撰写与稿件整理。" },
        { date: "2024—2025 学年", title: "计算机学院学生会 · 主席", desc: "聘书签发时间 2025 年 9 月。负责学生会整体工作的统筹与推进。" },
        { date: "2025 年 6 月 / 2025 年 12 月", title: "优秀团干部 / 优秀学生干部", desc: "学生工作的两个年度考核性荣誉。" },
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
        },
      ],
    },
    {
      id: "proposals",
      idx: "03",
      title: "学生代表大会提案",
      type: "prose",
      html: `<p>2023 年学生代表大会期间，我提交了两份提案，都是生活保障类，落款为我本人，学生签字日期为 2023 年 9 月 11 日：</p>
<div class="grid cols-2" style="margin-top:16px;">
  <div class="card" style="margin:0;">
    <h3 class="card__title">关于第一食堂招商的建议</h3>
    <p class="card__sub">学生代表大会提案征集表</p>
    <p style="margin:0;font-size:14px;color:var(--text-dim);">针对第一食堂的商户结构和就餐体验提出改进建议。</p>
  </div>
  <div class="card" style="margin:0;">
    <h3 class="card__title">亲民健身房提案</h3>
    <p class="card__sub">学生代表大会提案征集表</p>
    <p style="margin:0;font-size:14px;color:var(--text-dim);">围绕校内健身设施的可及性和价格提出建议。</p>
  </div>
</div>
<span class="src">两份提案的「同意立案 / 不同意立案」处理栏当时都是空白，所以我只写提交过，不写是否立案或落实。</span>`,
    },
    {
      id: "leadership-note",
      type: "note",
      variant: "warn",
      title: "关于「服务人次」类表述",
      html: "我在优秀学生干部材料里写过「累计服务同学逾万人次」。这个数字没有更细的统计，所以我不采用它，只列出实际组织或参与过的活动名称。",
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
  keywords: ["采编部", "推文", "新闻中心", "公众号", "撰稿", "选题", "图表"],
  lede: "2023 到 2024 年我在学院新闻中心新闻采编部担任副部长，负责学院新闻与公众号推文的选题、撰稿与整理。我保存下来的采编资料一共 22 个选题、345 个文件。",
  blocks: [
    {
      id: "role",
      idx: "01",
      title: "岗位与工作方式",
      type: "prose",
      html: `<p>新闻中心是学院对外发布信息的主要出口之一。采编部的工作流程大致是：拿到活动通知或素材 → 确定选题与角度 → 撰写初稿 → 配图与排版 → 送审发布。</p>
<p>我在这条链条上承担的是选题与文字部分。归档的推文素材按选题分文件夹保存，每个文件夹里是当年的初稿或成稿文档，加上配套照片。</p>
<span class="src">我保存的采编部推文素材，按选题分文件夹保存</span>`,
    },
    {
      id: "topics",
      idx: "02",
      title: "推文选题清单",
      note: "以下 22 个选题按我当年的目录名原样列出，没有删减或改动。",
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
      id: "topic-chart",
      idx: "03",
      title: "选题主题分布",
      note: "按选题内容归并，22 个选题不重复计入。",
      type: "raw",
      html: `<div class="viz-panel">
  <div class="viz-panel__head">
    <span class="viz-panel__title">主题 · 选题数</span>
    <span class="viz-panel__meta">7 个主题 / 22 个选题</span>
  </div>
  <div class="viz-bars">
    <div class="viz-bar"><span class="viz-bar__label">学院活动</span><span class="viz-bar__track"><i style="--w:100%"></i></span><span class="viz-bar__value">5</span></div>
    <div class="viz-bar"><span class="viz-bar__label">考试与学风</span><span class="viz-bar__track"><i style="--w:80%"></i></span><span class="viz-bar__value">4</span></div>
    <div class="viz-bar"><span class="viz-bar__label">节假日</span><span class="viz-bar__track"><i style="--w:80%"></i></span><span class="viz-bar__value">4</span></div>
    <div class="viz-bar"><span class="viz-bar__label">服务与安全</span><span class="viz-bar__track"><i style="--w:60%"></i></span><span class="viz-bar__value">3</span></div>
    <div class="viz-bar"><span class="viz-bar__label">迎新与搬迁</span><span class="viz-bar__track"><i style="--w:40%"></i></span><span class="viz-bar__value">2</span></div>
    <div class="viz-bar"><span class="viz-bar__label">党建与理论学习</span><span class="viz-bar__track"><i style="--w:40%"></i></span><span class="viz-bar__value">2</span></div>
    <div class="viz-bar"><span class="viz-bar__label">会议与人物材料</span><span class="viz-bar__track"><i style="--w:40%"></i></span><span class="viz-bar__value">2</span></div>
  </div>
</div>`,
    },    {
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
      html: "推文初稿里有很多活动细节和照片，其中不少照片拍到了其他同学。为了不给别人带来困扰，我只公开选题名称，不搬运正文和照片。",
    },
  ],
};
/* ==========================================================================
   分区十：实习与工程实践
   ========================================================================== */
const internship = {
  id: "internship",
  title: "实习与工程实践",
  eyebrow: "PART 10 · ENGINEERING PRACTICE",
  path: "sections/internship/index.html",
  keywords: ["实习", "工程实践", "Python", "报表", "自动化", "Excel", "Word", "桌面工具", "GitHub"],
  lede: "2026 年上半年到暑期，我集中做了这批报表自动化开发，这也是我的实习经历。我把公开仓库里的技术工作整理在这里，不写雇主名称、岗位、薪资和合同信息。",
  blocks: [
    {
      id: "overview",
      idx: "01",
      title: "工程实践概览",
      note: "统计的是我 GitHub 账号 EighteenLiu 近半年的公开仓库；去掉个人博客仓库和毕业设计仓库，其余 15 个仓库计入工程实践。",
      type: "stats",
      cols: 4,
      items: [
        { value: "15", unit: "个", label: "公开工程实践仓库", accent: true },
        { value: "2026.05—08", unit: "", label: "仓库创建与集中提交时间" },
        { value: "4", unit: "类", label: "西城 / 海淀 / 平谷 / 通用工具" },
        { value: "Python", unit: "主", label: "主要语言（部分前端任务为 HTML/JS）" },
      ],
    },
    {
      id: "nature",
      idx: "02",
      title: "这段实习的技术性质",
      type: "prose",
      html: `<p>这批评审与统计报表工作有比较固定的链路：</p>
<pre style="margin:16px 0;padding:14px 16px;border:1px solid var(--line);border-radius:10px;background:rgba(8,12,22,.7);overflow-x:auto;font-family:var(--mono);font-size:12.5px;line-height:1.7;color:var(--text-dim);">原始台账（.xls / .xlsx）
  → 字段清理与标准化
  → 有效案件筛选与指标统计
  → 写入 Excel 模板 / 生成统计表
  → 用 Word 模板渲染报告
  → 输出日志、校验数量与结果
  → 清理运行期临时文件</pre>
<p>从仓库说明可以确认的实现原则包括：模板与旧项目只读、运行期临时目录固定在项目目录而不写入 C 盘、批处理结束后清理中间文件、数据库一致性校验、以及把面向桌面的操作封装为 Tkinter 或 PyQt 类界面。</p>
<span class="src">我 GitHub 近半年仓库的 README、提交记录与项目结构</span>`,
    },
    {
      id: "pipeline",
      idx: "03",
      title: "报表自动化流程",
      note: "这段实习里，几乎每个工具都遵循同一条链路。",
      type: "raw",
      html: `<div class="viz-chain">
  <div class="viz-chain__step"><b>01</b><span>读取台账 .xls / .xlsx</span></div>
  <div class="viz-chain__step"><b>02</b><span>字段清理与标准化</span></div>
  <div class="viz-chain__step"><b>03</b><span>有效案件筛选与统计</span></div>
  <div class="viz-chain__step"><b>04</b><span>写入 Excel 模板</span></div>
  <div class="viz-chain__step"><b>05</b><span>Word 模板渲染报告</span></div>
  <div class="viz-chain__step"><b>06</b><span>输出日志与数量校验</span></div>
  <div class="viz-chain__step viz-chain__step--end"><b>07</b><span>清理运行期临时文件</span></div>
</div>`,
    },
    {
      id: "repos",
      idx: "04",
      title: "仓库清单与技术内容",
      note: "创建时间与最后推送时间取自 GitHub 公开元数据；工作内容取自各仓库 README。",
      type: "table",
      columns: ["仓库", "时间", "我做过的工作内容"],
      rows: [
        ["YiZhongQingTing_MonthlyWord", "2026.05.27—08.20", "交投点月报生成；把检查台账与 Word 模板结合输出月报。"],
        ["Daily-Word", "2026.05.22—08.20", "日报生成：支持 .xls/.xlsx、docxtpl/Jinja2 Word 模板、图片自动匹配插入、图片压缩与批量输出。"],
        ["Monthly-Word", "2026.05.21—08.20", "西城区中转站、密闭式清洁站日报和月报；统一桌面窗口下完成台账读取与报告生成。"],
        ["Ledger_Entry_Summary", "2026.05.28—08.13", "Python Tkinter 台账汇总控制台：按文件名关键词选择 Excel 模板 Sheet，汇总 .xls 台账。"],
        ["xls-producer", "2026.05.25—08.13", "街道问题月报汇总表生成、补充统计项，并生成 Word 工作报告。"],
        ["DailyStreetWord_Extract", "2026.06.08", "提取日报内容并生成汇总表格。"],
        ["Urban-Report", "2026.07.21—07.22", "按街道与日期范围读取三份台账，汇总市级检查、区级检查、外摆桶问题与照片，渲染垃圾分类检查分析报告。"],
        ["PG-Daily-xlsx", "2026.07.23—08.20", "台账处理与拆分：字段删除、列序调整、基础台账、问题台账、居民自主投放表与值守率统计。"],
        ["PG-Weekly-Word", "2026.07.23—08.20", "平谷区垃圾分类周报：区级基础台账 + 市级检查台账 + Jinja DOCX 模板 + 街乡镇分组。"],
        ["PG-Monthly-Word", "2026.08.12—08.20", "平谷区垃圾分类月报：更新检查打分表、结合月报问题台账与可回收物体系台账生成报告。"],
        ["Haidian-Report-Producer", "2026.08.11—08.12", "按街道生成案件明细 xlsx 和运行情况分析报告 docx。"],
        ["Haidian-Resident-Word", "2026.08.14—08.20", "农村人居环境报告：主数据 + 村指标字典 + 道路台账 → 统计台账 xlsx → 分析报告 docx；含有效案件筛选、指标映射与道路匹配。"],
        ["Haidian-Satellite-Word", "2026.08.18", "从卫星垃圾堆放点 Excel 中识别区级案件工作表，统计上账、未上账与人居保留村等指标并生成报告。"],
        ["Haidian-Video-Word", "2026.08.18—08.20", "根据视频监控上报数据、解决数据与可选 AI 情况说明，生成视频监控报告 Word。"],
        ["Report_produce", "2026.08.20", "统一桌面报表系统：整合五个既有报表项目；运行时优先调用本地只读快照，不写入旧项目。"],
      ],
    },
    {
      id: "stack",
      idx: "04",
      title: "技术栈与工程约束",
      type: "tags",
      items: [
        { label: "Python", tone: "cyan" },
        { label: "Tkinter / 桌面 GUI", tone: "cyan" },
        { label: "openpyxl / xlrd / Excel 自动化", tone: "violet" },
        { label: "python-docx / docxtpl / Jinja2", tone: "violet" },
        { label: "pywin32 / Word 后处理", tone: "mint" },
        { label: "pandas 类表格处理", tone: "mint" },
        { label: "模板只读与 legacy 快照", tone: "cyan" },
        { label: "运行日志与结果校验", tone: "violet" },
        { label: "临时目录不写入 C 盘", tone: "mint" },
      ],
    },
    {
      id: "boundary",
      type: "note",
      variant: "warn",
      title: "实习页的公开边界",
      html: "公开仓库里没有雇主、岗位、合同或薪资信息，我也不会从账号名、目录名或个人材料推断这些字段。原始台账、内部数据、模板原件与报告样例都不公开，这里只写代码仓库中已经公开的技术内容。",
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
`,
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
<p>这些是学院层面的工作文件，只用于记下我参加 2023 年军训这件事，不对具体角色作额外推断。</p>
`,
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
`,
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
`,
    },
    {
      id: "campus-note",
      type: "note",
      title: "关于同学与第三方",
      html: "班级名册、宿舍成员信息、同学联系方式都属于个人隐私，不适合公开，我不会以截图、转述或名单等形式发布。",
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
`,
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
  lede: "这里记录我目前保存的影像与文档，以及公开时遵守的原则。涉及他人的影像，一律不公开。",
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
<p>我的照片可以由自己决定是否公开，同学、老师与路人的肖像却不能由我代为决定。因此目前的做法是：</p>
<ul class="clean">
  <li>公开校徽等不涉及他人的视觉元素；</li>
  <li>活动照片只记录时间与事件，不公开图像本体；</li>
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
   分区十三：研究生阶段
   ========================================================================== */
const graduate = {
  id: "graduate",
  title: "研究生阶段",
  eyebrow: "PART 13 · GRADUATE",
  path: "sections/graduate/index.html",
  keywords: ["研究生", "工控固件", "二进制代码", "LLM4Decompile", "数据集", "CCF", "KLBS", "信创"],
  lede: "2026 年本科毕业后进入研究生阶段。截至 2026 年 9 月，归档目录包含 703 个文件、199 个目录，主线是工控固件与二进制代码数据集、机器语言模型，以及围绕它们的数据标注、平台交付与论文材料。",
  blocks: [
    {
      id: "scope",
      idx: "01",
      title: "归档概览",
      note: "统计范围为 D:\\桌面\\研究生，时间截至 2026.09.26；不含系统依赖与缓存目录。",
      type: "stats",
      cols: 4,
      items: [
        { value: "703", unit: "个", label: "研究生目录文件数", accent: true },
        { value: "199", unit: "个", label: "研究生目录数" },
        { value: "345", unit: "个", label: "04_官网项目文件数" },
        { value: "235", unit: "个", label: "08_实训平台项目文件数" },
      ],
    },
    {
      id: "mainline",
      idx: "02",
      title: "科研主线：从固件到可训练的数据集",
      type: "prose",
      html: `<p>围绕工控系统安全分析，当前材料可以串出这样一条链路：</p>
<pre style="margin:16px 0;padding:14px 16px;border:1px solid var(--line);border-radius:10px;background:rgba(8,12,22,.7);overflow-x:auto;font-family:var(--mono);font-size:12.5px;line-height:1.7;color:var(--text-dim);">多源数据接入与标准化
  → 资产层、事件层、关联信息
  → 首轮标签生成
  → 受约束的多源互标注
  → 交叉验证与冲突仲裁
  → 自动评价与标签更新
  → 多轮循环与版本回滚
  → 版本化数据集输出</pre>
<p>专利交底书中把<strong>受约束的多源互标注与交叉验证</strong>列为核心创新点。这里记录的是项目技术材料中的设计，不等同于已经完成产业落地。</p>
`,
    },
    {
      id: "research-flow",
      idx: "03",
      title: "研究链路",
      note: "这是我在研究生阶段主要推进的一条技术链路，从多源数据到版本化数据集。",
      type: "raw",
      html: `<div class="viz-chain">
  <div class="viz-chain__step"><b>01</b><span>多源数据接入</span></div>
  <div class="viz-chain__step"><b>02</b><span>标准化</span></div>
  <div class="viz-chain__step"><b>03</b><span>资产 / 事件 / 关联信息</span></div>
  <div class="viz-chain__step"><b>04</b><span>首轮标签生成</span></div>
  <div class="viz-chain__step"><b>05</b><span>受约束的多源互标注</span></div>
  <div class="viz-chain__step"><b>06</b><span>交叉验证与冲突仲裁</span></div>
  <div class="viz-chain__step"><b>07</b><span>自动评价</span></div>
  <div class="viz-chain__step"><b>08</b><span>标签更新</span></div>
  <div class="viz-chain__step"><b>09</b><span>多轮循环 / 版本回滚</span></div>
  <div class="viz-chain__step viz-chain__step--end"><b>10</b><span>版本化数据集</span></div>
</div>`,
    },
    {
      id: "weekly",
      idx: "04",
      title: "研究推进时间线",
      type: "timeline",
      items: [
        { date: "2026.07.10", title: "本地部署与模型验证", desc: "本地部署 LLM4Binary/llm4decompile-9b-v2，配置 CUDA、REST API，并验证 /health 与 /ready；尝试 22B 模型（9 个分片下载并做 sha256 校验），8GB 显存无法加载，出现 CUDA OOM；随后通过远程 6.7B 服务验证 analyze_function。" },
        { date: "2026.08.21", title: "数据集结构与软著材料", desc: "推进数据集结构、导航、数据导出与前端展示；整理软著材料，记录 3000 行源码、1500/1501 断点与结构检查；继续调研专利和训练数据方向。" },
        { date: "2026.09.03", title: "系统架构与交付迁移", desc: "梳理四个程序的总体架构与流程关系；大体量数据放文件系统，SQLite 保存路径、状态、数量、任务记录与关联 ID；完成服务器部署迁移与数据库一致性校验；审校论文《面向工控系统安全分析的二进制代码数据集管理系统设计与实现》。" },
        { date: "2026.09.17", title: "专利交底与平台迁移", desc: "完成专利交底书 Markdown、Word 与渲染检查 PDF，绘制 6 张附图；把程序从实验室服务器迁移到华为信创服务器并做完整性校验；同步更新中期报告与 PPT。" },
      ],
    },
    {
      id: "programs",
      idx: "05",
      title: "平台中的四个程序",
      type: "cards",
      cols: 2,
      items: [
        { title: "固件提取新版 / 旧版", sub: "项目流程起点", html: "<p>负责从设备或镜像中提取固件，为后续反汇编、分析、标注与数据集构建提供输入。9.3 周报把它们列入平台总体流程。</p>" },
        { title: "ReversePlatformQt", sub: "反向分析平台", html: "<p>面向反汇编与伪代码分析的工具，属于平台四个程序之一。具体实现细节以项目内交付文档为准。</p>" },
        { title: "AnomalyDetection", sub: "异常检测", html: "<p>平台四个程序之一，承接固件/二进制分析结果与异常检测任务。</p>" },
        { title: "FirmwareAnalysisPlatform", sub: "固件分析平台", html: "<p>平台四个程序之一，包含数据库、PPT 说明、项目技术文档、实施记录与模块重构记录。</p>" },
      ],
    },
    {
      id: "hardware",
      idx: "05",
      title: "中期报告中的硬件与逆向工作",
      type: "prose",
      html: `<p>中期报告记录了项目中的硬件提取与逆向流程。这部分是<strong>团队一起做的工作</strong>，我不能都写成自己独立完成的：</p>
<ul class="clean">
  <li><strong>罗克韦尔 Micro830</strong>：涉及 M29W320ET Flash、飞思卡尔 MCF5372（ColdFire 架构）；报告记录了 BGA 取芯片、BGA 烧录座与 RT809HSE 等流程。</li>
  <li><strong>施耐德 Modicon M241 / TM241CE24T</strong>：通过以太网连接、Controller Assistant 与镜像读取开展提取。</li>
  <li><strong>Micro830 固件分析</strong>：记录 16-bit 字节序修复、Binwalk、IDA Pro，以及复位入口 0x560 等分析点。</li>
  <li><strong>ChipWhisperer</strong>：我做的只是原理演示与流程仿真，<strong>没有真实硬件验证</strong>，这里也不会写成已完成硬件攻击或验证。</li>
</ul>
<span class="src">研究生阶段中期报告及配套 PPT</span>`,
    },
    {
      id: "patent",
      idx: "06",
      title: "论文、软著与专利材料",
      type: "list",
      items: [
        "<strong>论文</strong>：《面向工控系统安全分析的二进制代码数据集管理系统设计与实现》，归档中有论文正文与审校记录。",
        "<strong>软件著作权</strong>：归档软著材料，记录 3000 行源码、1500/1501 断点与结构校验。",
        "<strong>专利交底书</strong>：完成 Markdown 源文、Word 版、渲染检查 PDF 与 6 张附图；技术主线为多源数据接入、关联、受约束互标注、交叉验证、冲突仲裁、自动评价、版本回滚与版本化数据集输出。",
        "<strong>交付文档</strong>：平台技术文档、数据库说明、架构与模块重构记录、部署与接口说明等。",
        "<strong>说明</strong>：论文录用、专利授权与软著证书在正式结果出来之前，我只写“材料已形成”，不写“已授权”或“已录用”。",
      ],
    },
    {
      id: "ccf",
      idx: "07",
      title: "CCF 灵巧操作挑战：备赛与调研",
      type: "prose",
      html: `<p>参加 2026 CCF 灵巧操作精英挑战，队伍名为 <strong>bstu灵巧小先锋</strong>。8 月 10 日的会议记录显示已提交报名表，并讨论仿真平台、成员分工、算力与真机数据；9 月 3 日有现场参观学习 PPT 导读。</p>
<p>目前能确认的是我完成了<strong>报名、备赛、调研与现场参观学习</strong>，还没有获奖或决赛成绩，所以这里不写任何名次。</p>
<span class="src">CCF 灵巧操作挑战备赛与现场参观记录</span>`,
    },
    {
      id: "other",
      idx: "08",
      title: "其他研究生项目归档",
      type: "cards",
      cols: 3,
      items: [
        { title: "KLBS 项目", sub: "66 个文件 / 21 个目录", html: "<p>归档包含文档整理、AI 辅助运维 SVG、产出文档、会议记录、生成内容与演示文稿。详细职责待补充材料后展开。</p>" },
        { title: "深圳工厂项目", sub: "2 个文件", html: "<p>这个项目目前只留下 2 个文件。为避免写错，我先记录它存在，等我把内容确认清楚再补充。</p>" },
        { title: "实训平台项目", sub: "235 个文件 / 63 个目录", html: "<p>归档涉及项目要求、会议内容、参考文件、O7B 三维模型与 URDF、单手开发 Web 项目、视频与 PPT 材料。</p>" },
      ],
    },
    {
      id: "boundary",
      type: "note",
      variant: "warn",
      title: "研究生页只写到材料能支撑的层级",
      html: "科研项目通常是团队一起做的，我不会把团队成果全部算到自己名下，不把计划写成完成，也不公开服务器地址、内部数据、未公开论文全文和专利细节。",
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
        { k: "毕业去向说明", v: "我已确认继续境内升学，具体院校与方向留到研究生阶段分区补充" },
      ],
    },
    {
      id: "graduate",
      idx: "02",
      title: "研究生阶段",
      type: "prose",
      html: `<p>研究生阶段我做的事情已经单独放在「研究生阶段」分区里：工控固件提取、二进制代码数据集、机器语言模型、平台交付与论文写作等。这一页只讲整体去向和接下来准备做的事。</p>
<div class="note" style="margin-top:16px;">
  <span class="note__icon">说明</span>
  <div>创业基地这类申请在正式结果出来之前，我只记录准备过程，不写「已申请」或「已入驻」。</div>
</div>
<p style="margin-top:16px;">等这些事有明确进展，我会再回来更新。</p>`,
    },
    {
      id: "blog-plan",
      idx: "03",
      title: "接下来我准备写什么",
      type: "list",
      items: [
        "<strong>旅游</strong>：按「城市 / 时间 / 行程 / 见闻」的四段式建一个独立分区，旅行照片经确认后放入。",
        "<strong>课程</strong>：把八个学期的课程继续写细，记下每门课实际做了什么。",
        "<strong>研究生阶段</strong>：科研、项目、专利与论文的进展持续追加。",
        "<strong>技术笔记</strong>：把现有博客文章区改造成技术笔记区，记录真实踩过的坑。",
        "<strong>时间轴</strong>：把各分区的内容再抽出一条贯通的时间轴，方便一眼看完整段经历。",
      ],
    },
    {
      id: "principles",
      idx: "04",
      title: "维护原则",
      type: "prose",
      html: `<ul class="clean">
  <li><strong>只写真实发生过的</strong>：没有经历过的事不写，参与的不写成负责。</li>
  <li><strong>不美化、不夸大</strong>：材料里没有的不写，参与的不写成负责，参加的不写成获奖。</li>
  <li><strong>保护隐私</strong>：我的敏感信息和涉及他人的内容都不公开。</li>
  <li><strong>方便长期更新</strong>：内容集中在一份数据文件里，以后新增分区只要加一条记录。</li>
</ul>`,
    },
  ],
};
/* ==========================================================================
   分区十二：关于博客
   ========================================================================== */
const sources = {
  id: "sources",
  title: "关于博客",
  eyebrow: "PART 15 · ABOUT",
  path: "sections/sources/index.html",
  keywords: ["说明", "隐私", "更新", "计划", "博客"],
  lede: "这里写下我为什么开始记录、哪些内容不会公开，以及这个博客接下来会怎样继续生长。",
  blocks: [
    {
      id: "why",
      idx: "01",
      title: "我为什么写这个博客",
      type: "prose",
      html: `<p>大学四年过得很快，很多事当时觉得普通，过两年就记不清了。课程、比赛、学生工作、实习、研究生阶段的项目，散在电脑里的各种文件夹里。所以我想做一个地方，把它们按时间、按主题整理好。</p>
<p>对我自己来说，这是一个可以不断更新的回忆录和作品集；对想看的人，它是一份比简历更完整、更具体的自我介绍。</p>`,
    },
    {
      id: "rules",
      idx: "02",
      title: "我写内容的三条规矩",
      type: "prose",
      html: `<ul class="clean">
  <li><strong>只写真实发生过的</strong>：没有经历过的事不写，参与的不写成负责，参加的不写成获奖。</li>
  <li><strong>说法不一致时如实说明</strong>：同一件事在不同地方记录不一致时，我会把差异写出来，而不是挑一个好看的说法。</li>
  <li><strong>不做推断</strong>：没有记录的内容，即使看起来「应该是这样」，我也不写。</li>
</ul>`,
    },
    {
      id: "privacy",
      idx: "03",
      title: "我不会公开的内容",
      type: "list",
      items: [
        "<strong>身份证号、学号、准考证号、证书编号</strong>：不公开。",
        "<strong>手机号、邮箱、即时通信账号</strong>：不公开。",
        "<strong>家庭住址与家庭成员信息</strong>：不公开，籍贯只写到市一级。",
        "<strong>家庭经济状况相关材料</strong>：困难证明、助学申请中的经济信息不公开。",
        "<strong>他人的信息</strong>：同学联系方式、宿舍成员信息、他人肖像、判决书原文等，一律不公开、不转述。",
        "<strong>证件与成绩单原图</strong>：不上传，只保留必要的文字说明。",
      ],
    },
    {
      id: "update",
      idx: "04",
      title: "更新记录",
      type: "timeline",
      items: [
        { date: "2023.07.01", title: "博客建立", desc: "用 Hugo 搭好博客，发布第一篇技术笔记，写的是安装时 git init 报错的解决方法。" },
        { date: "2026.09.26", title: "整体重构", desc: "把博客改成左侧分区栏的结构，加入课程学习、毕业设计、实习与工程实践、研究生阶段等分区，并放入本人照片。" },
      ],
    },
    {
      id: "next",
      idx: "05",
      title: "接下来会继续写什么",
      type: "list",
      items: [
        "<strong>旅游</strong>：按城市和时间记录行程与见闻，照片确认后放入。",
        "<strong>课程</strong>：把八个学期的课程继续写细，记下每门课实际做了什么。",
        "<strong>研究生阶段</strong>：科研、项目、专利与论文的进展持续更新。",
        "<strong>技术笔记</strong>：把踩过的坑和解决问题的过程写下来，方便自己也方便别人。",
      ],
    },
    {
      id: "tech",
      idx: "06",
      title: "这个博客是怎么搭的",
      type: "prose",
      html: `<p>它不是手写的一堆 HTML，而是一份内容数据加一个生成器：</p>
<pre style="margin:16px 0;padding:14px 16px;border:1px solid var(--line);border-radius:10px;background:rgba(8,12,22,.7);overflow-x:auto;font-family:var(--mono);font-size:12.5px;line-height:1.7;color:var(--text-dim);">content/site-content.mjs   全部内容数据（分区、小节、表格、时间线）
content/posts.mjs          历史文章内容
tools/build.mjs            生成器：读取数据，输出静态页面
assets/css/site.css        样式（深色科技风、侧边栏、响应式）
assets/js/site.js          交互（抽屉、筛选、滚动高亮、站内检索）</pre>
<p>执行 <code>node tools/build.mjs</code> 会重新生成首页、各分区页、文章页、404 页、站内检索和站点地图。以后新增一个分区——比如旅游——只需要在内容数据里加一条记录，再放一张照片。</p>
<p>博客部署在 GitHub Pages，所以生成的都必须是纯静态文件。</p>`,
    },
  ],
};
export const sections = [
  overview,
  profile,
  academics,
  courses,
  skills,
  thesis,
  projects,
  honors,
  leadership,
  media,
  internship,
  campus,
  gallery,
  graduate,
  future,
  sources,
];

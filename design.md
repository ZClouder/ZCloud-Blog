# 设计规范 · 流雲の宝藏

本文档是本站视觉与交互设计的唯一事实来源。后续任何页面/组件的新增或修改，都应先检查是否与本文档冲突；如需偏离，先更新本文档。

## 1. 设计定位

- **结构与骨架参考** diygod.cc：极简单栏布局、卡片式文章列表、点线装饰、克制的动效节奏。
- **排印哲学参考** Yohaku：内容优先、留白充分、字重对比作为主要层级手段（而非依赖颜色/边框）。
- **视觉身份不做 diygod.cc 的像素级复刻**：diygod.cc 实际使用中性灰阶 + 系统字体 + 少量蓝色点缀（已通过 design-extractor 提取确认，见下方"提取数据"）。本站刻意选择了暖色（米白背景 + 赭石色点缀）与自定义中日文衬线/黑体字体组合，以避免"AI 生成站点"常见的 Inter/系统字体 + 冷灰配色 + 紫色渐变的通病，形成独立可辨识的视觉身份。两者共享的是**结构比例与动效克制感**，不是**色彩与字体**。

## 2. 提取数据摘要（来源：diygod.cc，design-extractor）

- 圆角尺度：`rounded-lg`(0.5rem) → `rounded-xl`(0.75rem) → `rounded-2xl`(1rem) → `rounded-3xl`(1.5rem) → `rounded-full`
- 阴影尺度：Tailwind 标准 `shadow-sm` / `shadow` / `shadow-lg` / `shadow-xl`
- 过渡时长：150ms / 200ms / 300ms（交互反馈）、700ms（较大位移/淡入淡出）；缓动以 `ease-out` / `ease-in-out` 为主
- 关键帧：
  - `slide-up`：opacity 0→1 + translateY 20px→0，0.3s ease-out（内容入场）
  - `setting` / `rising`：太阳/月亮图标随主题切换做垂直位移动画，1s ease（主题切换按钮的标志性交互）
  - `shimmer`：1.5s ease infinite（骨架屏/加载态，本站暂不需要）
- 字体：未使用自定义字体，纯系统字体栈 `ui-sans-serif, system-ui, ...`
- 首页结构：Header（logo + 居中/右对齐导航 + 语言切换）→ Hero（大号问候语 + 简介 + 社交图标行）→ 虚线分隔的锚点指示 → 文章卡片列表（虚线边框卡片，标题加粗黑，摘要灰字，日期+分类灰小字）→ "查看所有文章" 黑色胶囊按钮 → 项目区块 → Footer
- 装饰细节：整站背景铺满浅灰虚线网格（低调的纹理点缀，非功能性）

## 3. 本站设计令牌

### 3.1 颜色（CSS 变量，定义于 `src/styles/global.css`）

| Token | Light | Dark | 用途 |
|---|---|---|---|
| `--color-bg` | `#faf8f4` | `#161512` | 页面背景 |
| `--color-surface` | `#ffffff` | `#201f1b` | 卡片/浮层背景 |
| `--color-text` | `#26241f` | `#ece7dc` | 正文 |
| `--color-text-muted` | `#6b6558` | `#a39c8b` | 次要文字（日期/标签/说明） |
| `--color-border` | `#e5e0d5` | `#35322b` | 描边/分隔线 |
| `--color-accent` | `#a8562f` | `#e08b5f` | 链接/强调/标签底色文字 |
| `--color-accent-soft` | `#f0e2d3` | `#3a2a1e` | 标签底色/行内代码底色 |

### 3.2 字体

- 标题 `--font-heading`：LXGW WenKai → Noto Sans SC → serif（手写感衬线，用于 h1-h4，强化"随笔/宝藏"的个人化调性）
- 正文 `--font-sans`：Noto Sans SC → system-ui → sans-serif
- 代码 `--font-mono`：JetBrains Mono → monospace

### 3.3 圆角与阴影（沿用 diygod.cc 的尺度，直接使用 Tailwind 默认值）

- 卡片：`rounded-xl`（0.75rem）
- 标签/胶囊按钮：`rounded-full`
- 行内代码：`0.35em`；代码块：`0.75em`（已在 `.prose-blog` 中实现）
- 阴影仅用于悬浮态（如卡片 hover），克制使用，避免默认阴影，保持内容页面的"纸感"而非"卡片浮空感"

### 3.4 动效节奏

- 微交互（hover/focus）：150-200ms ease-out
- 主题切换（颜色过渡）：300ms ease
- 内容入场（可选，非必须）：参考 diygod.cc 的 `slide-up`，如需加入列表卡片入场动画，使用 `opacity 0→1 + translateY 12px→0，0.3s ease-out`，避免过度动效
- 主题切换按钮：当前实现为图标 `hidden` 类切换（简单可靠）；如后续要还原 diygod.cc 的太阳/月亮位移动画，可在 `Header.astro` 的 `<script>` 中改为对图标施加 `setting`/`rising` 关键帧动画，非 MVP 必需项

### 3.5 布局

- 内容最大宽度：`max-w-3xl`（文章页/关于页），首页文章列表区可用 `max-w-3xl` 保持阅读宽度一致
- 页面横向内边距：`px-6`
- 垂直节奏：区块间 `py-16`，段落间 `1.25em`（见 `.prose-blog`）

## 4. 组件复用来源

- 排版层级、间距节奏、字重对比：借鉴 Yohaku 的排印系统（无需引入其代码，仅参考设计语言）
- 页面信息架构（Header 导航结构、文章卡片信息密度、Footer 极简度）：参考 diygod.cc 与 ursb.me
- 具体实现均为本项目原创 Astro 组件，未直接复制任何第三方源码

## 5. 待办 / 可选增强（非 MVP 阻塞项）

- [ ] 太阳/月亮主题切换动画（参考 diygod.cc 的 `setting`/`rising` 关键帧）
- [ ] 背景虚线网格纹理（参考 diygod.cc 首页装饰）
- [ ] 文章卡片虚线边框风格（当前为实色 `--color-border`，可选改为 `border-dashed`）

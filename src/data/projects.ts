export interface Project {
  name: string;
  href: string;
  tagline: string;
  description: string;
  tags: string[];
  demo?: string;
  license?: string;
  badge?: string;
}

// 手动维护：只放有实质内容的原创项目。
// 排除规则：fork 的他人项目一律不收（含 ARTEX、WeFlow、learn-claude-code、claw-code、
// MODULAR-RAG-MCP-SERVER、ChatGPT-Next-Web）、空仓库（cloud-blog-v2）、
// 未成形的脚手架（Cloud_Blog，只有 create-next-app 默认内容）。
export const projects: Project[] = [
  {
    name: 'Auro-Agent',
    href: 'https://github.com/ZClouder/Auro-Agent',
    tagline: '企业级 AI 工作流可视化编排平台',
    description:
      '前端用 ReactFlow 拖拽编排大模型与工具节点，后端 Spring Boot 负责存储、调度与执行，DAG 引擎之外还接了 LangGraph4j 状态图。已接入 OpenAI、DeepSeek、通义千问、智谱。',
    tags: ['Java 21', 'Spring Boot', 'React', 'ReactFlow', 'LangGraph4j'],
  },
  {
    name: 'PR-Agent',
    href: 'https://github.com/ZClouder/PR-Agent',
    tagline: '多 Agent 代码评审工具',
    description:
      '读取 Git diff 后，由 Security、Correctness、Test、Maintainability 四路 reviewer 产出候选问题，再经 critic 与 lead controller 质疑、补证、去重、裁决，最终输出 Markdown / JSON / SARIF 报告。',
    tags: ['Python', 'Multi-Agent', 'LLM'],
  },
  {
    name: 'Agent-RAG-MCP',
    href: 'https://github.com/ZClouder/Agent-RAG-MCP',
    tagline: '模块化 RAG 服务框架',
    description:
      '把 Hybrid Search + Rerank、多模态图像描述、Ragas 评估与 LLM 生成串成可运行的工程，通过 MCP 协议对外暴露工具接口，可被 Copilot、Claude 等助手直接调用。',
    tags: ['Python', 'RAG', 'MCP'],
    license: 'MIT',
  },
  {
    name: 'cloud-midas',
    href: 'https://github.com/ZClouder/cloud-midas',
    tagline: '把实习经历变成扛得住追问的简历',
    description:
      '6 个 AI Skill 串起认知校准、价值发现、经历包装、压力面试、逐字稿与交付门禁。不止把话说漂亮，而是确保这些话能在面试里活过 30 秒。',
    tags: ['Claude Code Skills', 'Prompt Engineering'],
    license: 'MIT',
  },
  {
    name: 'chongqu-desktop',
    href: 'https://github.com/ZClouder/chongqu-desktop',
    tagline: '把任务死亡过程映射成昆虫变态发育',
    description:
      '蛆虫任务 · 电脑版。一个 Windows 桌面浮层工具，用昆虫变态发育的隐喻可视化任务的消亡过程。',
    tags: ['Electron', 'JavaScript'],
  },
  {
    name: 'ZCloud-Blog',
    href: 'https://github.com/ZClouder/ZCloud-Blog',
    tagline: '本站源码',
    description:
      '你正在看的这个博客。Astro + Tailwind v4 静态站，Primer 色板、Pagefind 全站搜索、giscus 评论，部署在 Vercel。',
    tags: ['Astro', 'Tailwind CSS', 'TypeScript'],
    demo: 'https://zcloud.ren',
  },
];

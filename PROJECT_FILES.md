# Project Files

- `package.json`, `package-lock.json`: npm scripts and dependency lockfile.
- `astro.config.mjs`: Astro site configuration.
- `tsconfig.json`: TypeScript configuration.
- `src/pages/`: Astro pages and routes, including `index.astro`, `about.astro`, `rss.xml.ts`, and `posts/[id].astro`.
- `src/layouts/BaseLayout.astro`: Shared page shell.
- `src/components/`: Shared UI components: `Header`, `Footer`, `PostCard`.
- `src/content.config.ts`: Content collection schema/config.
- `src/content/posts/`: Markdown blog posts.
- `src/styles/global.css`: Global styles.
- `public/`: Static assets such as favicon files.
- `AGENTS.md`, `CLAUDE.md`, `README.md`, `design.md`: Project instructions and documentation.

## Commands

- Install: `npm install`
- Dev server: `astro dev --background`
- Build: `npm run build`
- Preview: `npm run preview`

## Ignore

- `node_modules/`
- `dist/`
- `.astro/`
- `.git/`

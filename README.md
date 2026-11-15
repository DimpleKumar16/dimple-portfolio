# Dimple Kumar – Portfolio (React + TypeScript + Vite)

Stack: React 18, TypeScript, Vite, Framer Motion, Lucide React. Styling is hand-written CSS (no utility framework).

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview
```

## Update content
Edit `src/data/portfolio.ts`: links, skills, experience, projects, education.
- Resume: put `resume.pdf` in `public/` and set `links.resume = './resume.pdf'`.
- Email: set `links.email`; the contact form then opens a real `mailto:` message.
- BCA: fill in college and duration in `education.bca`.
- Project repos: set `repo` on a project to show a GitHub button.

## Deploy
**Vercel:** push to GitHub, import the repo at vercel.com. Framework preset Vite, build `npm run build`, output `dist`.
**GitHub Pages:** the build uses relative paths (`base: './'`). Run `npm run build`, then publish `dist/` (for example `npx gh-pages -d dist`) and enable Pages on the `gh-pages` branch.

## Structure
- `src/app` — page shell, one component per concern (Loader, Header, NetworkCanvas, CustomCursor, ScrollProgress, BackToTop, Footer), each with its own colocated `.css`.
- `src/sections` — one component per page section (Hero, About, Skills, Experience, Projects, Education, Contact), each with its own colocated `.css`.
- `src/components` — shared pieces used by sections (Reveal, Orbit).
- `src/hooks` — one hook per file (`useTheme`, `useScrollSpy`, `useTyping`, `useCursorTrail`, `useNetworkCanvas`), re-exported from `src/hooks/index.ts`.
- `src/data/portfolio.ts` — all editable content.
- `src/styles` — global entry: `tokens.css` (light/dark CSS variables) + `base.css` (layout, type, buttons, shared keyframes).
- `design/` — Figma spec and design tokens (kept in sync with `src/styles/tokens.css`).

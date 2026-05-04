# Claude FedStart 101 — Training Site

## What It Does
A static React training website that teaches VA employees how to use Claude AI on the FedStart platform. Covers 15 lessons from basics to advanced features (Connectors, Extended Thinking, Skills).

## How to Run Locally
```bash
cd claude-fedstart-101
npm install       # first time only
npm run dev       # starts dev server at http://localhost:5173
```

## How to Build for GitHub Pages
```bash
npm run build     # outputs to dist/
```

Deploy the `dist/` folder to GitHub Pages. The site is configured with `base: '/claude-fedstart-101/'` in `vite.config.js` — update this if your repo name differs.

### GitHub Pages Setup
1. Create a repo named `claude-fedstart-101` (or whatever you prefer)
2. Push the code
3. In repo Settings → Pages → Source, select "GitHub Actions" or point to the `dist/` folder
4. If your repo name differs from `claude-fedstart-101`, update the `base` in `vite.config.js`

## Tech Stack
- **Vite** + **React 18** (no TypeScript, plain JSX)
- **React Router** (HashRouter for GitHub Pages compatibility)
- No external UI library — all custom CSS with Claude branding + futuristic theme

## Structure
- `src/pages/` — One component per lesson
- `src/components/` — Sidebar, LessonNav, Accordion, PromptPlayground
- `src/lessonData.js` — Lesson titles, paths, and descriptions (single source of truth for navigation)
- `src/styles/global.css` — Theme variables and shared styles

## Adding a New Lesson
1. Create a new page component in `src/pages/`
2. Add an entry to `src/lessonData.js` (path, title, description)
3. Import and add a `<Route>` in `src/App.jsx`

## Interactive Features
- **Sidebar navigation** with active state highlighting
- **Previous/Next arrows** at the bottom of each lesson
- **Expandable accordion sections** for detailed content
- **Prompt Playground** — fake Claude-like chat UI for practicing prompts
- **Mobile responsive** — hamburger menu on small screens

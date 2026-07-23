# Wachira Ratayapitak — Portfolio

Personal portfolio website that automatically showcases my GitHub repositories,
language statistics, and skills. Built to demonstrate modern frontend practices.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool
- **TailwindCSS v4** — styling
- **Framer Motion** — animations
- **GitHub REST API** — live repository & language data

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Configuration

Edit `src/config.ts`:

- `githubUsername` — your GitHub username (**required**)
- `name`, `role`, `email`, `tagline`, `location` — personal info
- `about` — short bio paragraphs
- `experience` — work / project timeline (can start with internship, freelance, or self-study projects)
- `linkedin` — full LinkedIn URL (leave empty to hide the button)
- `skills` — list with simple-icons slugs
- `maxRepos` — number of featured repositories

## Resume

Place your real `resume.pdf` into the `public/` folder. The **Download Resume** button links to `/resume.pdf`.

## Build & Deploy

```bash
npm run build
```

Output is in `dist/`. Deploy for free on:

- **Vercel / Netlify** — connect the repo, zero config
- **GitHub Pages** — set `base: '/<repo-name>/'` in `vite.config.ts` first

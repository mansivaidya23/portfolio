# Mansi Vaidya — Portfolio

A clean, professional single-page portfolio built for recruiters and hiring managers evaluating roles in Project Management, Operations, Business/Data Analytics, and Engineering Management.

## Stack

- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion (subtle animations)
- Lucide React (icons)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Customize your content

All editable content lives in `src/data/`:

| File | What to edit |
|------|--------------|
| `site.ts` | Name, title, intro, email, LinkedIn, GitHub, resume link |
| `education.ts` | Education entries |
| `skills.ts` | Skill categories and tags |
| `projects.ts` | Project case studies (cards + modal content) |

### Resume link

In `src/data/site.ts`, update `resumeUrl` to your PDF:

```ts
resumeUrl: "/resume.pdf",  // place file in /public
// or
resumeUrl: "https://your-link.com/resume.pdf",
```

## Project structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── HeroVisual.tsx
│   ├── Education.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectModal.tsx
│   ├── ProjectThumbnail.tsx
│   ├── Contact.tsx
│   └── ui/Section.tsx
├── data/
│   ├── site.ts
│   ├── education.ts
│   ├── skills.ts
│   └── projects.ts
├── App.tsx
└── index.css
```

## Build

```bash
npm run build
npm run preview
```

## Publish on GitHub Pages

This repo includes `.github/workflows/deploy-pages.yml`. On every push to `main`, GitHub Actions builds the site and publishes it to Pages.

1. Create a **public** GitHub repository (for example `portfolio`).
2. Push this project to `main`:

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions** (if not already selected).
4. Wait for the **Deploy to GitHub Pages** workflow to finish on the **Actions** tab.

Your site will be at:

- `https://YOUR_USERNAME.github.io/portfolio/` (repo name `portfolio`)
- `https://YOUR_USERNAME.github.io/` if the repo is named `YOUR_USERNAME.github.io`

The workflow sets the Vite `base` path automatically for project sites vs. user sites.

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

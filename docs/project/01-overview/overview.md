# Project Name: omooladev Portfolio

## What is this?
A modern, responsive personal portfolio website for Omosuyi Olawole (omooladev), a Full-Stack Software Engineer. It introduces who he is, showcases his projects with live previews and detailed case-study pages, lists his work experience, and gives visitors several ways to get in touch.

## Target Users
- Recruiters and hiring managers evaluating his work
- Potential clients looking for a developer to hire
- Fellow developers and collaborators
- Anyone who received his portfolio link and wants to learn about him

## Core Value
- A single, polished place that presents his skills, projects, and experience
- Live previews of real deployed projects, viewable without leaving the site
- Detailed per-project pages (features, challenges, release history, screenshots)
- Fast, mobile-friendly, and installable as a Progressive Web App (works offline)
- One-click contact via WhatsApp, email, and social links

## Tech Stack
### Frontend
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3.4
- Framer Motion (animations)
- Boxicons & Font Awesome (icons)

### Backend
- None — the site is statically generated (SSG); project and experience data live in typed files under `data/`

### Cloud
- Static image assets served from `public/` (no external image cloud yet)

### Others
- Render / Vercel (deployment)
- Progressive Web App with a service worker for offline support
- GitHub, Git

## Current Status
- Live and in production, migrated from vanilla HTML/CSS/JS to Next.js 15.
- Home, all-projects, and project-details pages are complete; dark/light theme, PWA offline support, and SEO metadata are in place.
- Active work: enriching project detail pages — most recently a screenshots **Gallery** section with a lightbox.

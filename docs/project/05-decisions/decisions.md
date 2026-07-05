# Decision Log

## 2025-11-23
- Migrated the portfolio from vanilla HTML/CSS/JS to Next.js 15 with the App Router, TypeScript, and Tailwind CSS
- Reason: type safety, component reuse, static generation for speed, and dynamic routing for per-project pages

## 2025-11-23
- Keep project and experience content in typed data files (`data/projects.ts`, `data/experience.ts`) instead of a CMS or database
- Reason: the content changes rarely and is small; typed files are simpler, free, and let the whole site stay statically generated

## 2026-07-05
- Store all image assets as static files under `public/` (no image cloud yet)
- Reason: no cloud storage is set up; static files are simple, served from our own domain, and can be migrated to a cloud later without code changes

## 2026-07-05
- Reference image paths in lowercase, matching the actual file names on disk
- Reason: the production host is case-sensitive. Files named `knowli.png` were referenced as `knowli.PNG`, which worked on Windows locally but broke on the live domain, leaving images invisible

## 2026-07-05
- Added a screenshots Gallery to the project details page as a separate `"use client"` component (`ProjectGallery.tsx`)
- Reason: the details page is a server component, but the gallery lightbox needs interactive state and keyboard handling — isolating it keeps the rest of the page server-rendered

## 2026-07-05
- Standardize gallery images at 1280×720 (16:9) with fixed width/height on the Next.js `<Image>`
- Reason: source screenshots vary in size; a single fixed ratio keeps the thumbnail grid and lightbox uniform and prevents layout shift

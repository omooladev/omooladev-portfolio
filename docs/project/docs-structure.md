# Documentation Structure

This document explains how the project documentation is organized and how to navigate it.

## Folder Overview

### /01-overview
High-level explanation of the product: what it is, who it is for, the problem it solves, the tech stack, and the current status. Written once, updated rarely.

### /02-pages
Breakdown of each page in the product (home, all-projects, project details). Each file covers the purpose of the page, the sections that exist on it, the features on that page, and the current build status of each section.

For standalone pages, one file is enough (e.g. `home-page.md`). When a section of the app has multiple sub-pages, create a subfolder named after that section and put one file per sub-page inside it. This keeps each file focused and prevents a single file from becoming unmanageable.

### /03-features
Features are grouped by page. Each page gets its own subfolder (e.g. `/03-features/project-details-page/`), and inside it there is one file per UI component or feature (e.g. `gallery.md`). Each file is a complete spec — what the feature does now, how it behaves, what is planned next, and the reasoning behind key decisions. A developer working on any feature should only need to read that one file.

### /04-roadmap
Future plans organized by timeline. Two files: `features.md` for confirmed upcoming work broken into phases, and `ideas.md` for exploratory or unconfirmed ideas.

### /05-decisions
A running log of key technical and product decisions. Each entry records the date, what was decided, and why. Used so future developers understand the reasoning behind choices without having to reverse-engineer the code.

### /06-releases
A human-friendly record of what shipped in each version, written from the user's point of view — not the technical one. One file per release (e.g. `v1.md`, `v2.md`). Each file answers a single question: *what can users now do that they could not before?* Anyone — developer, stakeholder, or non-technical collaborator — should be able to read it and understand the product's progress without touching the code or the commit history.

### /07-testing
A plain-language testing checklist for the whole product, organized by page (one file per page, mirroring `/02-pages`). Each file lists every check a person should run on that page, written as a simple "do this → expect this" with a checkbox in front. Anyone — including a non-technical client or someone you have handed the project to — can open these files, work through them top to bottom, tick off what works, and see at a glance what they have already tested and what still needs checking. To test the entire app, move through the files in order. This folder never uses code, file names, or jargon — if a non-technical person could not follow a step, it is written wrong.

## How to Use This Documentation

- Start with `/01-overview` to understand the product
- Move to `/02-pages` to understand the user experience, page by page
- Check `/03-features` for implementation details on any specific component
- Review `/04-roadmap` to understand what is coming next
- Use `/05-decisions` to understand why things were built a certain way
- Read `/06-releases` to understand what each version delivered to users, in plain language
- Open `/07-testing` to verify the product works — go through a page's checks and tick off each one as you confirm it

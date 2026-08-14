# Daylight Gallery Screenshots

Tracking checklist for the Daylight project's gallery on the portfolio's project details page (`data/projects.ts`, `daylight.gallery`). Not part of the numbered `/0X-*` structure (see `docs/project/docs-structure.md`) — this is an operational tracking doc, not a product spec, same pattern as Daylight's own `go-live.md`.

All images are resized/center-cropped to **1280×720 (16:9)** and saved as lowercase-named `.jpg` files in `public/project-images/gallery/daylight/`, per the gallery feature's own conventions (`docs/project/03-features/project-details-page/gallery.md`).

## Captured

- [x] **Home page** — `home-page.jpg` — the live public marketing landing
- [x] **Register page** — `register-page.jpg`
- [x] **Login page** — `login-page.jpg`
- [x] **Help Center** — `help-page.jpg` — the 8-article layout
- [x] **Feedback page** — `feedback-page.jpg`
- [x] **Support page** — `support-page.jpg`

## Still to capture

Tier 1 — the core diary story (highest priority; these are what actually differentiate Daylight):

- [ ] **Onboarding** — choosing an AI assistant persona (Sol / Lumi / Ray)
- [ ] **Dashboard / entry list** — the diary overview
- [ ] **Writing an entry** — showing the live "Saving…" / "Saved" autosave status
- [ ] **AI title generation or AI entry refine in action** — the single most distinctive feature
- [ ] **Full entry view** — the handwritten-style reading experience

Tier 2 — rounds out the feature set:

- [ ] **Search & filter** entries
- [ ] **Export** flow
- [ ] **Entry sharing** — the password-protected share link screen
- [ ] **Settings → Analytics** — "Titles generated" / "Entries refined" usage stats
- [ ] **Referral page** — shareable link + points
- [ ] **In-app notifications**

Tier 3 — shows platform maturity (admin side, `/admin`):

- [ ] **Admin dashboard home**
- [ ] **Admin waitlist/referral leaderboard**
- [ ] **Admin support or feedback review list**

## Workflow

1. Drop new raw screenshots into `C:\Users\User\Downloads\daylight\`.
2. They get resized/center-cropped to 1280×720 and moved into `public/project-images/gallery/daylight/` as lowercase `.jpg` files (originals removed from Downloads once copied over).
3. `data/projects.ts`'s `daylight.gallery` array gets a new entry (`src`, `alt`, `caption`) per image.
4. Check the box above.

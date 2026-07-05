# Gallery

## Purpose
Show extra screenshots of a project on its details page so visitors can see the product itself — not just the single hero thumbnail — before reading the text-heavy feature and release sections.

## Current Features
- A "Gallery" section on the project details page, placed right after "About This Project".
- Renders only for projects that have a `gallery` array in their data; projects without one are unaffected.
- Responsive thumbnail grid (2 columns on mobile, 3 on desktop).
- Shows only the first 6 images as a preview to avoid a long scroll. When there are more, the 6th tile becomes a "+N / View more" tile.
- Optional caption overlaid on the bottom of each thumbnail.
- Click a thumbnail (or the "+N more" tile) to open a full-screen lightbox; the lightbox cycles through **all** the project's images, not just the preview.
- Lightbox supports previous / next navigation when there is more than one image.
- Every image uses the Next.js `<Image>` component with fixed dimensions (1280×720, 16:9) so the grid stays uniform.

## Behavior
- **Click a thumbnail:** opens the lightbox on that image.
- **Click the "+N more" tile:** opens the lightbox; use the arrows/keyboard to reach every image beyond the preview.
- **Keyboard (lightbox open):** `←` previous, `→` next, `Esc` closes.
- **Click outside the image / the ✕ button:** closes the lightbox.
- **While the lightbox is open:** background page scrolling is locked.
- **Hover a thumbnail:** it zooms slightly.
- **Resize / mobile:** grid drops from 3 columns to 2; the lightbox image scales to fit the viewport (max 85% of viewport height).

## Planned
- Populate real gallery images for the remaining projects. Knowli has a full set (17 images); images live in `public/project-images/gallery/<project>/`.

## Ideas / Future Improvements
- Swipe gestures for the lightbox on touch devices.
- Lazy-load thumbnails below the fold.
- Support per-image aspect ratios instead of enforcing 16:9.

## Decisions (Why things are done)
- **Separate client component (`ProjectGallery.tsx`).** The details page is a server component; the lightbox needs state and keyboard handling, so the gallery is isolated as a `"use client"` component to keep the rest of the page server-rendered.
- **Fixed 1280×720 dimensions.** All source images are resized to a single 16:9 size so the grid and lightbox render uniformly regardless of the original screenshot size. The size is defined as constants at the top of the component — change them there to switch ratios.
- **Static images in `/public`.** Images are served from the project itself (no image cloud yet). This keeps things simple and can be migrated to a cloud later without changing the component.
- **Lowercase file paths.** Image paths must be lowercase — the production host is case-sensitive, so an uppercase extension (e.g. `.PNG`) that works locally on Windows breaks live.
- **Preview cap of 6 instead of a separate gallery page.** With 17 images, showing them all inline made the details page too long. Rather than build a dedicated gallery route, the grid caps at 6 (a "+N more" tile) and reuses the existing lightbox to browse the rest — less code, no extra route to maintain. The cap is the `PREVIEW_COUNT` constant in `ProjectGallery.tsx`.

## Status
- Gallery component + lightbox ✅
- Real gallery images for all projects ⏳

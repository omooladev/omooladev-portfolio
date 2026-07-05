"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/data/projects";

// Every gallery image should be exported at these dimensions (16:9) so the
// grid and lightbox stay uniform. Change here if you standardise on another ratio.
const IMAGE_WIDTH = 1280;
const IMAGE_HEIGHT = 720;

// How many thumbnails to show on the details page before the "+N more" tile.
// The lightbox still cycles through every image once opened.
const PREVIEW_COUNT = 6;

interface ProjectGalleryProps {
  images: GalleryImage[];
  projectName: string;
}

export default function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpen = activeIndex !== null;
  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  // Keyboard controls + lock body scroll while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, showPrev, showNext]);

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  const previewImages = images.slice(0, PREVIEW_COUNT);
  const remainingCount = images.length - previewImages.length;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {previewImages.map((image, index) => {
          // The last preview tile doubles as the "+N more" entry point when
          // there are additional images beyond the preview.
          const isMoreTile = remainingCount > 0 && index === previewImages.length - 1;

          return (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative block overflow-hidden rounded-lg border border-gray-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
              aria-label={
                isMoreTile
                  ? `View all ${images.length} ${projectName} screenshots`
                  : `View ${image.caption || image.alt || `${projectName} screenshot ${index + 1}`}`
              }
            >
              <Image
                src={image.src}
                alt={image.alt || `${projectName} screenshot ${index + 1}`}
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
                className="w-full h-auto aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {isMoreTile ? (
                <span className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white transition-colors group-hover:bg-black/70">
                  <span className="text-2xl font-bold leading-none">+{remainingCount}</span>
                  <span className="mt-1 text-sm">View more</span>
                </span>
              ) : (
                image.caption && (
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-sm text-white">
                    {image.caption}
                  </span>
                )
              )}
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {isOpen && activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName} gallery`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white"
            aria-label="Close gallery"
          >
            <i className="bx bx-x text-4xl" />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 p-2 text-white/80 hover:text-white"
              aria-label="Previous image"
            >
              <i className="bx bx-chevron-left text-5xl" />
            </button>
          )}

          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={activeImage.src}
              alt={activeImage.alt || `${projectName} screenshot`}
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            {activeImage.caption && (
              <figcaption className="mt-3 text-center text-white/80">
                {activeImage.caption}
              </figcaption>
            )}
          </figure>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 p-2 text-white/80 hover:text-white"
              aria-label="Next image"
            >
              <i className="bx bx-chevron-right text-5xl" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

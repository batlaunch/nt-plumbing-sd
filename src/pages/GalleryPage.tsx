import { useState } from "react";
import { allPhotos } from "@/data/photos";
import { X } from "lucide-react";

export default function GalleryPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <>
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-4xl font-bold">Photo Gallery</h1>
            <p className="text-muted-foreground">All 44 photos from NTP's Yelp listing — no stock photos</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {allPhotos.map((photo, idx) => (
              <button
                key={photo.id}
                onClick={() => setSelectedIdx(idx)}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={photo.thumbnail}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/10" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setSelectedIdx(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-background/20 p-2 text-background hover:bg-background/40"
            onClick={() => setSelectedIdx(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={allPhotos[selectedIdx].url}
            alt={allPhotos[selectedIdx].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 text-center text-sm text-background/60">
            {selectedIdx + 1} / {allPhotos.length}
          </div>
          {/* Nav */}
          {selectedIdx > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/20 px-3 py-2 text-lg text-background hover:bg-background/40"
              onClick={(e) => { e.stopPropagation(); setSelectedIdx(selectedIdx - 1); }}
            >
              ‹
            </button>
          )}
          {selectedIdx < allPhotos.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/20 px-3 py-2 text-lg text-background hover:bg-background/40"
              onClick={(e) => { e.stopPropagation(); setSelectedIdx(selectedIdx + 1); }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}

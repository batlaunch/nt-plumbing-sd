import { useState } from "react";
import { allPhotos } from "@/data/photos";
import { X } from "lucide-react";
import Seo from "@/components/Seo";
import PageBreadcrumb from "@/components/PageBreadcrumb";

export default function GalleryPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <>
      <Seo
        title="Plumbing Work Photo Gallery | NTP Plumbing San Diego"
        description="Browse photos of NTP Plumbing's recent jobs across Greater San Diego — drain cleaning, water heaters, hydro jetting, sewer liner repairs, and more."
        path="/gallery"
      />
      <PageBreadcrumb trail={[{ name: "Gallery", path: "/gallery" }]} className="max-w-6xl" />
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-4xl font-bold">NTP Plumbing Photo Gallery</h1>
            <p className="text-muted-foreground">A look at our previous plumbing work across San Diego</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {allPhotos.map((photo, idx) => (
              <button
                key={photo.id}
                onClick={() => setSelectedIdx(idx)}
                aria-label={`View photo: ${photo.alt}`}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={photo.thumbnail}
                  alt={photo.alt}
                  width={300}
                  height={300}
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
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={allPhotos[selectedIdx].url}
            alt={allPhotos[selectedIdx].alt}
            width={allPhotos[selectedIdx].width}
            height={allPhotos[selectedIdx].height}
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
              aria-label="Previous photo"
            >
              ‹
            </button>
          )}
          {selectedIdx < allPhotos.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/20 px-3 py-2 text-lg text-background hover:bg-background/40"
              onClick={(e) => { e.stopPropagation(); setSelectedIdx(selectedIdx + 1); }}
              aria-label="Next photo"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}

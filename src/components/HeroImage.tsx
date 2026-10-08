import type { Photo } from "@/data/photos";

/**
 * Full-bleed, above-the-fold background photo: loads eagerly at high priority
 * (it's the LCP element). Uses the compressed -hero.webp variant, which is
 * fine under the dark overlay and much lighter than the full-size photo.
 */
export default function HeroImage({ photo }: { photo: Photo }) {
  return (
    <img
      src={photo.hero}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading="eager"
      decoding="async"
      // React 18 doesn't know the camelCase prop yet; the DOM attribute works.
      {...{ fetchpriority: "high" }}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

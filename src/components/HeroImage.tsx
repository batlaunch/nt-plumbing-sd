import type { Photo } from "@/data/photos";

/**
 * Full-bleed, above-the-fold background photo: loads eagerly at high priority
 * (it's the LCP element) with a 640w variant for phones.
 */
export default function HeroImage({ photo }: { photo: Photo }) {
  return (
    <img
      src={photo.url}
      srcSet={`${photo.url640} 640w, ${photo.url} ${photo.width}w`}
      sizes="100vw"
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

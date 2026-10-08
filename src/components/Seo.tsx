import { Helmet } from "react-helmet-async";
import { SITE_URL } from "@/lib/business";
import { OG_IMAGE } from "@/data/photos";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  /** Keep the page out of search indexes (404, unpublished drafts). */
  noindex?: boolean;
}

const DEFAULT_OG_IMAGE = `${SITE_URL}${OG_IMAGE}`;

export default function Seo({ title, description, path, ogImage = DEFAULT_OG_IMAGE, ogType = "website", noindex = false }: SeoProps) {
  const url = `${SITE_URL}${path}`;
  const image = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      {!noindex && <link rel="canonical" href={url} />}
      <meta property="og:site_name" content="NTP Plumbing" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

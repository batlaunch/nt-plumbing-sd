// Every URL the site serves, derived from the content data so new service
// pages and blog posts are prerendered and added to sitemap.xml automatically.
import { servicePages } from "@/data/servicePages";
import { blogPosts } from "@/data/blog";
import { cityPages } from "@/data/cityPages";

export interface SiteRoute {
  path: string;
  /** YYYY-MM-DD — when the page's content last meaningfully changed. */
  lastmod: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: number;
  /**
   * false = drafted but awaiting client confirmation. Still prerendered (with
   * noindex) so it can be previewed, but kept out of the sitemap, nav, and
   * llms.txt.
   */
  published: boolean;
}

// Prerendered to dist/404.html; the host serves it with HTTP 404 for unknown paths.
export const NOT_FOUND_PATH = "/404";

const STATIC_ROUTES: SiteRoute[] = [
  { path: "/", lastmod: "2026-10-08", changefreq: "weekly", priority: 1.0, published: true },
  { path: "/services", lastmod: "2026-10-08", changefreq: "monthly", priority: 0.9, published: true },
  { path: "/service-area", lastmod: "2026-10-08", changefreq: "monthly", priority: 0.8, published: true },
  { path: "/about", lastmod: "2026-10-08", changefreq: "monthly", priority: 0.7, published: true },
  { path: "/reviews", lastmod: "2026-10-08", changefreq: "monthly", priority: 0.7, published: true },
  { path: "/contact", lastmod: "2026-10-08", changefreq: "monthly", priority: 0.8, published: true },
  { path: "/gallery", lastmod: "2026-10-08", changefreq: "monthly", priority: 0.5, published: true },
  { path: "/blog", lastmod: "2026-10-08", changefreq: "weekly", priority: 0.7, published: true },
];

export function getSiteRoutes(): SiteRoute[] {
  return [
    ...STATIC_ROUTES,
    ...servicePages.map((s) => ({
      path: `/services/${s.slug}`,
      lastmod: s.lastmod,
      changefreq: "monthly" as const,
      priority: 0.8,
      published: s.published,
    })),
    ...cityPages.map((c) => ({
      path: `/${c.slug}`,
      lastmod: c.lastmod,
      changefreq: "monthly" as const,
      priority: 0.7,
      published: c.published,
    })),
    ...blogPosts.map((p) => ({
      path: `/blog/${p.meta.slug}`,
      lastmod: p.meta.dateModified ?? p.meta.dateISO,
      changefreq: "yearly" as const,
      priority: 0.6,
      published: true,
    })),
  ];
}

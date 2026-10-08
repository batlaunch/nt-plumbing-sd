// City landing pages (/plumber-<city>). Each one is written individually —
// no find-and-replace templates.
import type { Faq } from "@/lib/schema";

export interface CityPageData {
  slug: string;
  city: string;
  published: boolean;
  lastmod: string;
  seoTitle: string;
  seoDescription: string;
  heroSubtitle: string;
  /** Rich text (see components/RichText). */
  body: string;
  /** Service slugs to feature, most-requested first. */
  topServices: string[];
  faqs: Faq[];
}

export const cityPages: CityPageData[] = [];

export function getCityPage(slug: string): CityPageData | undefined {
  return cityPages.find((c) => c.slug === slug);
}

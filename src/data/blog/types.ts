import type { Faq } from "@/lib/schema";

export type BlogCategory =
  | "Water Heaters"
  | "Leaks & Water Lines"
  | "Drains & Sewer"
  | "Water Quality"
  | "Backflow"
  | "Prevention & Maintenance";

export interface BlogPostMeta {
  slug: string;
  /** H1 — phrased the way people search. */
  title: string;
  excerpt: string;
  /** Display date, e.g. "October 8, 2026". */
  date: string;
  dateISO: string;
  /** YYYY-MM-DD; defaults to dateISO. */
  dateModified?: string;
  author: string;
  readTime: string;
  category: BlogCategory;
  /** Service pages featured at the end of the post (published services only). */
  relatedServiceSlugs: string[];
  seoTitle: string;
  seoDescription: string;
  /**
   * Photo id from data/photos. Without one, the post shows a visible TODO
   * placeholder describing the image we still need, using `alt`.
   */
  featuredImage: { photo?: string; alt: string };
  faqs: Faq[];
}

export interface BlogPost {
  meta: BlogPostMeta;
  /**
   * Rich text (components/RichText). The first paragraph must answer the
   * title question directly.
   */
  body: string;
}

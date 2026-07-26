import type { ComponentType } from "react";

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  author: string;
  readTime: string;
  category: string;
  relatedServiceSlug?: string;
  seoTitle: string;
  seoDescription: string;
}

export interface BlogPost {
  meta: BlogPostMeta;
  Content: ComponentType;
}

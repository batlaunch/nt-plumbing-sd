import type { BlogCategory, BlogPost } from "./types";
import { post as waterHeaterCost } from "./water-heater-replacement-cost-san-diego";
import { post as tanklessVsTank } from "./tankless-vs-tank-water-heater-san-diego";
import { post as slabLeakSigns } from "./slab-leak-signs";
import { post as hardWater } from "./hard-water-san-diego-plumbing";
import { post as trenchless } from "./trenchless-sewer-repair-vs-replacement";
import { post as highWaterBill } from "./high-water-bill-hidden-leaks";
import { post as whenToRepipe } from "./when-to-repipe-a-house";
import { post as backflow } from "./backflow-testing-requirements-san-diego";
import { post as waterHeaterSigns } from "./water-heater-replacement-signs";
import { post as frozenPipes } from "./preventing-frozen-pipes-san-diego";
import { post as hydroJetting } from "./hydro-jetting-vs-snaking";

export type { BlogPost, BlogPostMeta, BlogCategory } from "./types";

// New post: add a file in this folder exporting `post`, then add it here.
// Order = display order (newest first).
export const blogPosts: BlogPost[] = [
  waterHeaterCost,
  slabLeakSigns,
  highWaterBill,
  tanklessVsTank,
  hardWater,
  trenchless,
  whenToRepipe,
  backflow,
  waterHeaterSigns,
  hydroJetting,
  frozenPipes,
];

export const blogCategories: BlogCategory[] = [
  "Water Heaters",
  "Leaks & Water Lines",
  "Drains & Sewer",
  "Water Quality",
  "Backflow",
  "Prevention & Maintenance",
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.meta.slug === slug);
}

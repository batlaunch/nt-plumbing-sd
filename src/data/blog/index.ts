import type { BlogPost } from "./types";
import { meta as waterHeaterMeta } from "./water-heater-replacement-signs";
import WaterHeaterContent from "./water-heater-replacement-signs";
import { meta as frozenPipesMeta } from "./preventing-frozen-pipes-san-diego";
import FrozenPipesContent from "./preventing-frozen-pipes-san-diego";
import { meta as hydroJettingMeta } from "./hydro-jetting-vs-snaking";
import HydroJettingContent from "./hydro-jetting-vs-snaking";

export type { BlogPost, BlogPostMeta } from "./types";

// New posts: create a new file in this folder exporting `meta` and a default
// Content component (see any existing post for the pattern), then add both
// imports and one entry here.
export const blogPosts: BlogPost[] = [
  { meta: waterHeaterMeta, Content: WaterHeaterContent },
  { meta: frozenPipesMeta, Content: FrozenPipesContent },
  { meta: hydroJettingMeta, Content: HydroJettingContent },
].sort((a, b) => (a.meta.dateISO < b.meta.dateISO ? 1 : -1));

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.meta.slug === slug);
}

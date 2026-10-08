// Prints the visible word count of <main> for each prerendered page in dist/.
// Usage: node scripts/word-count.mjs [route ...]   (defaults to every page)
import { readFile } from "node:fs/promises";
import { readdirSync } from "node:fs";
import path from "node:path";

const DIST = path.resolve(import.meta.dirname, "..", "dist");
const routes = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readdirSync(DIST, { recursive: true }).filter((f) => f.endsWith("index.html")).map((f) => "/" + path.dirname(f)).map((r) => (r === "/." ? "/" : r)).sort();

for (const route of routes) {
  const html = await readFile(path.join(DIST, route, "index.html"), "utf8");
  const main = html.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1] ?? "";
  const text = main
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ");
  const words = text.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
  console.log(String(words).padStart(5), route);
}

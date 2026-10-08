// Post-build step: renders every route to static HTML so crawlers that don't run
// JavaScript (GPTBot, ClaudeBot, PerplexityBot, Google's first pass, link-preview
// bots) get the full page — title, meta, canonical, H1, body copy, JSON-LD.
//
// Runs in plain Node against the SSR bundle from `vite build --ssr
// src/entry-server.tsx` — no headless browser. (The previous Playwright-based
// version silently skipped on the Coolify build host because Chromium wasn't
// available, so production was shipping an empty shell for every URL.)
//
// Outputs, all into dist/:
//   <route>/index.html  one per route (published or draft)
//   404.html            served by the host with HTTP 404 for unknown paths
//   sitemap.xml         published routes only, with lastmod
//
// Unlike the old script this one FAILS the build on error: a silent fallback to
// an unrendered shell is exactly the bug that went unnoticed in production.

import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SSR_DIST = path.join(ROOT, "dist-ssr");
const SITE_URL = "https://ntpplumbing.com";

const { render, getSiteRoutes, NOT_FOUND_PATH, buildLlmsTxt } = await import(
  pathToFileURL(path.join(SSR_DIST, "entry-server.js")).href
);
const template = await readFile(path.join(DIST, "index.html"), "utf8");

function renderPage(url) {
  const { html, head } = render(url);
  return template.replace("<!--app-head-->", head).replace("<!--app-html-->", html);
}

// --- SEO invariants -------------------------------------------------------
const problems = [];
const warnings = [];
// Length / uniqueness / JSON-LD-presence rules. Flip to true once every page
// complies so regressions fail the build.
const STRICT = true;
const soft = (msg) => (STRICT ? problems : warnings).push(msg);
const seen = { title: new Map(), description: new Map() };
const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");

function check(route, page) {
  const title = decode(page.match(/<title[^>]*>([^<]*)<\/title>/)?.[1] ?? "");
  const description = decode(page.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/)?.[1] ?? "");
  const h1Count = (page.match(/<h1[\s>]/g) ?? []).length;
  const jsonLd = [...page.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];

  if (!title) problems.push(`${route}: missing <title>`);
  if (title.length > 60) soft(`${route}: title is ${title.length} chars (max 60): "${title}"`);
  if (!description) problems.push(`${route}: missing meta description`);
  if (description.length > 155) soft(`${route}: description is ${description.length} chars (max 155)`);
  if (h1Count !== 1) problems.push(`${route}: expected exactly 1 <h1>, found ${h1Count}`);
  if (route !== NOT_FOUND_PATH && jsonLd.length === 0) soft(`${route}: no JSON-LD`);
  for (const [, body] of jsonLd) {
    try {
      JSON.parse(body);
    } catch {
      problems.push(`${route}: invalid JSON-LD`);
    }
  }
  for (const [key, value] of [["title", title], ["description", description]]) {
    if (seen[key].has(value)) soft(`${route}: duplicate ${key} (also on ${seen[key].get(value)})`);
    seen[key].set(value, route);
  }
}

// --- Render ---------------------------------------------------------------
const routes = getSiteRoutes();
for (const route of routes) {
  const page = renderPage(route.path);
  check(route.path, page);
  const outDir = route.path === "/" ? DIST : path.join(DIST, route.path.slice(1));
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "index.html"), page);
  console.log(`prerendered ${route.path}${route.published ? "" : "  (draft, noindex)"}`);
}

const notFound = renderPage(NOT_FOUND_PATH);
check(NOT_FOUND_PATH, notFound);
await writeFile(path.join(DIST, "404.html"), notFound);
console.log("prerendered 404.html");

// --- sitemap.xml ----------------------------------------------------------
const published = routes.filter((r) => r.published);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${published
  .map(
    (r) =>
      `  <url><loc>${SITE_URL}${r.path}</loc><lastmod>${r.lastmod}</lastmod><changefreq>${r.changefreq}</changefreq><priority>${r.priority.toFixed(1)}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;
await writeFile(path.join(DIST, "sitemap.xml"), sitemap);
console.log(`sitemap.xml: ${published.length} URLs (${routes.length - published.length} drafts excluded)`);

// --- llms.txt -------------------------------------------------------------
if (buildLlmsTxt) {
  await writeFile(path.join(DIST, "llms.txt"), buildLlmsTxt());
  console.log("llms.txt written");
}

await rm(SSR_DIST, { recursive: true, force: true });

if (warnings.length) console.warn(`\nSEO warnings (${warnings.length}):\n  - ${warnings.join("\n  - ")}`);
if (problems.length) {
  console.error(`\nPrerender SEO checks failed (${problems.length}):\n  - ${problems.join("\n  - ")}`);
  process.exit(1);
}
console.log(`\nPrerendered ${routes.length} routes + 404. All SEO checks passed.`);

// Post-build step: renders each known route in a real (headless) browser against
// the built dist/ output and writes the fully-rendered HTML to dist/<route>/index.html.
//
// This is a pure client-rendered SPA (no SSR/hydration) — react-helmet-async only
// updates <head> after JS runs, so a plain `vite build` ships the same generic
// index.html for every route. Any crawler or link-preview bot that doesn't execute
// JS would see identical, wrong meta tags for every page. This script fixes that by
// snapshotting the post-render DOM for each route into its own static file.
//
// Relies on the host serving path/index.html when it exists before falling back to
// the SPA catch-all (the standard `try_files $uri $uri/ /index.html` nginx pattern,
// which most static hosts — including what this site already needs for client-side
// routing — use by default).

import { chromium } from "@playwright/test";
import { preview } from "vite";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");

// Add new /blog/:slug and /services/:slug routes here when they're added to
// src/data/blog or src/data/servicePages — this plain Node script can't import
// those TSX data files directly, so the list has to be kept in sync by hand.
const ROUTES = [
  "/",
  "/about",
  "/services",
  "/services/drain-cleaning-hydro-jetting",
  "/services/water-heater-repair",
  "/services/leak-detection",
  "/services/fixture-installation-repair",
  "/services/sewer-line-repair",
  "/services/backflow-testing",
  "/gallery",
  "/reviews",
  "/contact",
  "/service-area",
  "/blog",
  "/blog/signs-you-need-a-water-heater-replacement",
  "/blog/preventing-frozen-pipes-san-diego",
  "/blog/hydro-jetting-vs-snaking",
];

async function main() {
  const previewServer = await preview({
    root: ROOT,
    configFile: path.join(ROOT, "vite.config.ts"),
    preview: { port: 0, strictPort: false },
  });
  const base = previewServer.resolvedUrls.local[0].replace(/\/$/, "");

  try {
    const browser = await chromium.launch();
    try {
      const page = await browser.newPage();
      let ok = 0;
      for (const route of ROUTES) {
        await page.goto(`${base}${route}`, { waitUntil: "networkidle" });
        // Give react-helmet-async's rAF-deferred head commit a moment to land.
        await page.waitForTimeout(150);
        const html = await page.content();

        const outDir = route === "/" ? DIST : path.join(DIST, route.slice(1));
        await mkdir(outDir, { recursive: true });
        await writeFile(path.join(outDir, "index.html"), html);
        ok++;
        console.log(`prerendered ${route}`);
      }
      console.log(`Prerendered ${ok}/${ROUTES.length} routes.`);
    } finally {
      await browser.close();
    }
  } finally {
    await previewServer.close();
  }
}

// Prerendering is a progressive enhancement on top of the plain `vite build`
// output that already exists in dist/ — it must never fail the build. If the
// host environment doesn't have Playwright's browser available (e.g. a fresh
// deploy container without the postinstall step having run), skip it and let
// the already-built, still-fully-functional CSR site ship as-is.
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Prerendering failed — shipping build without it:", err.message);
    process.exit(0);
  });

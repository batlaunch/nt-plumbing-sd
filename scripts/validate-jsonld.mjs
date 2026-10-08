// Parses every JSON-LD block in dist/ and checks the fields each schema type
// needs. Prints the parsed objects for the given sample routes.
// Usage: node scripts/validate-jsonld.mjs [--print /route ...]
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const DIST = path.resolve(import.meta.dirname, "..", "dist");
const printRoutes = new Set(process.argv.includes("--print") ? process.argv.slice(process.argv.indexOf("--print") + 1) : []);

const EXPECTED_ADDRESS = {
  streetAddress: "270 E Douglas Ave",
  addressLocality: "El Cajon",
  addressRegion: "CA",
  postalCode: "92020",
  addressCountry: "US",
};

const ok = (cond, label) => (cond ? true : label);

const required = {
  Plumber: (o) => [
    ok(o["@id"], "@id"),
    ok(o.name === "NTP Plumbing", "name"),
    ok(o.legalName === "NTP Inc", "legalName"),
    ok(o.telephone === "+1-619-550-7371", "telephone"),
    ok(o.url, "url"),
    ...Object.entries(EXPECTED_ADDRESS).map(([k, v]) => ok(o.address?.[k] === v, `address.${k}`)),
    ok(typeof o.geo?.latitude === "number", "geo.latitude"),
    ok(typeof o.geo?.longitude === "number", "geo.longitude"),
    ok(o.foundingDate === "2018", "foundingDate"),
    ok(o.hasCredential?.identifier === "1040373", "hasCredential.identifier"),
    ok(Array.isArray(o.areaServed) && o.areaServed.length === 10, "areaServed (10 cities)"),
  ],
  Service: (o) => [ok(o.name, "name"), ok(o.serviceType, "serviceType"), ok(o.provider?.["@id"], "provider.@id"), ok(o.areaServed, "areaServed")],
  BreadcrumbList: (o) => [
    ok(o.itemListElement?.length >= 2, "itemListElement"),
    ok(o.itemListElement?.every((i, n) => i.position === n + 1 && i.item?.startsWith("https://ntpplumbing.com")), "positions/items"),
  ],
  FAQPage: (o) => [
    ok(o.mainEntity?.length >= 3, "mainEntity (>=3)"),
    ok(o.mainEntity?.every((q) => q.name && q.acceptedAnswer?.text && !q.acceptedAnswer.text.includes("{{")), "Question/Answer text"),
  ],
  BlogPosting: (o) => [
    ok(o.headline, "headline"),
    ok(/^\d{4}-\d{2}-\d{2}$/.test(o.datePublished), "datePublished"),
    ok(/^\d{4}-\d{2}-\d{2}$/.test(o.dateModified), "dateModified"),
    ok(o.author?.name === "NTP Plumbing", "author"),
    ok(o.image, "image"),
    ok(o.mainEntityOfPage, "mainEntityOfPage"),
  ],
};

async function* pages(dir = DIST) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* pages(p);
    else if (e.name === "index.html") yield p;
  }
}

const counts = {};
let errors = 0;
for await (const file of pages()) {
  const route = "/" + path.relative(DIST, path.dirname(file)).replace(/^$/, "");
  const html = await readFile(file, "utf8");
  if (html.includes('content="noindex')) continue; // drafts
  const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  const types = blocks.map((b) => b["@type"]);
  if (!types.includes("Plumber")) { errors++; console.log(`✗ ${route}: missing sitewide Plumber`); }
  if (route !== "/" && !types.includes("BreadcrumbList")) { errors++; console.log(`✗ ${route}: missing BreadcrumbList`); }
  if (route.startsWith("/services/") && !types.includes("Service")) { errors++; console.log(`✗ ${route}: missing Service`); }
  if (route.startsWith("/blog/") && !types.includes("BlogPosting")) { errors++; console.log(`✗ ${route}: missing BlogPosting`); }
  for (const b of blocks) {
    counts[b["@type"]] = (counts[b["@type"]] ?? 0) + 1;
    const missing = (required[b["@type"]]?.(b) ?? []).filter((r) => r !== true);
    if (missing.length) { errors++; console.log(`✗ ${route} ${b["@type"]}: ${missing.join(", ")}`); }
  }
  if (printRoutes.has(route)) {
    console.log(`\n----- ${route}: ${types.join(", ")}`);
    for (const b of blocks.filter((b) => b["@type"] !== "Plumber" || route === "/")) console.log(JSON.stringify(b, null, 2));
  }
}
console.log(`\nSchema blocks found: ${Object.entries(counts).map(([k, v]) => `${k}=${v}`).join(", ")}`);
console.log(errors ? `✗ ${errors} problem(s)` : "✓ All JSON-LD parsed and required fields present on every indexable page");
process.exit(errors ? 1 : 0);

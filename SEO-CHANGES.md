# SEO overhaul — ntpplumbing.com

Branch: `seo-overhaul` · Phases 1–7 from the SEO brief, one commit per phase.
Outstanding client info is listed in **[TODO-CLIENT.md](TODO-CLIENT.md)**.

## The headline finding

**The live site has been serving an empty shell to every crawler.** Every URL on ntpplumbing.com returns the same 2,539-byte `index.html` (same ETag), with the same `<title>` and no body text. The old post-build Playwright prerender skips silently when Chromium isn't installed, and it isn't on the Coolify build host. Anything that doesn't run JavaScript (GPTBot, ClaudeBot, PerplexityBot, link previews, and often Google's first pass) saw nothing.

This branch replaces it with a pure-Node SSR prerender (no browser), and the build now **fails loudly** instead of silently shipping a shell.

## Every page

| URL | Title | H1 | Primary keyword | Words* | Status |
|---|---|---|---|---:|---|
| `/` | Plumber in El Cajon, CA \| 24/7 Service \| NTP Plumbing | Plumber in El Cajon, CA | plumber El Cajon | 1069 | rewritten |
| `/services` | Plumbing Services in El Cajon & East County \| NTP Plumbing | Plumbing Services in El Cajon & East County | plumbing services El Cajon | 659 | rewritten |
| `/service-area` | Plumber Serving El Cajon, La Mesa, Santee & East County | Plumber Serving East County San Diego | plumber East County San Diego | 690 | rewritten |
| `/about` | About NTP Plumbing \| Licensed El Cajon Plumber | About NTP Plumbing | licensed plumber El Cajon | 481 | rewritten |
| `/reviews` | NTP Plumbing Reviews \| El Cajon Plumber | NTP Plumbing Reviews | NTP Plumbing reviews | 813 | rewritten |
| `/contact` | Contact NTP Plumbing \| Call a Plumber in El Cajon | Contact NTP Plumbing | (brand / contact) | 207 | rewritten |
| `/gallery` | Plumbing Project Photos \| NTP Plumbing El Cajon | Plumbing Project Photos | (supporting) | 36 | updated |
| `/blog` | Plumbing Tips & Advice \| NTP Plumbing El Cajon | Plumbing Tips & Advice | (supporting) | 577 | updated |
| `/services/emergency-plumber` | 24/7 Emergency Plumber in El Cajon \| NTP Plumbing | 24/7 Emergency Plumber in El Cajon | emergency plumber El Cajon | 1349 | new |
| `/services/drain-cleaning-hydro-jetting` | Drain Cleaning & Hydro Jetting in El Cajon \| NTP Plumbing | Drain Cleaning & Hydro Jetting in El Cajon | drain cleaning El Cajon | 1524 | rewritten |
| `/services/water-heater-repair` | Water Heater Repair & Replacement in El Cajon \| NTP Plumbing | Water Heater Repair & Replacement in El Cajon | water heater repair El Cajon | 1308 | rewritten |
| `/services/tankless-water-heaters` | Tankless Water Heater Installation in El Cajon | Tankless Water Heater Installation in El Cajon | tankless water heater installation San Diego | 1116 | new |
| `/services/leak-detection` | Leak Detection & Slab Leak Repair in El Cajon \| NTP Plumbing | Leak Detection & Slab Leak Repair in El Cajon | leak detection El Cajon | 1335 | rewritten |
| `/services/sewer-line-repair` | Sewer Line Repair & Replacement in El Cajon \| NTP Plumbing | Sewer Line Repair & Replacement in El Cajon | sewer line repair El Cajon | 1336 | rewritten |
| `/services/fixture-installation-repair` | Faucet, Toilet & Fixture Repair in El Cajon \| NTP Plumbing | Faucet, Toilet & Fixture Repair in El Cajon | fixture repair El Cajon | 1168 | rewritten |
| `/services/backflow-testing` | Backflow Testing & Certification in El Cajon \| NTP Plumbing | Backflow Testing & Certification in El Cajon | backflow testing El Cajon | 1149 | rewritten |
| `/services/repiping` | Whole-House Repiping in El Cajon \| NTP Plumbing | Whole-House Repiping in El Cajon | repipe / PEX repipe | 887 | **draft** (noindex) |
| `/services/gas-line-repair` | Gas Line Repair & Installation in El Cajon \| NTP Plumbing | Gas Line Repair & Installation in El Cajon | gas line repair | 826 | **draft** (noindex) |
| `/services/water-softeners-filtration` | Water Softener Installation in El Cajon \| NTP Plumbing | Water Softener Installation in El Cajon | water softener / hard water San Diego | 751 | **draft** (noindex) |
| `/plumber-la-mesa` | Plumber in La Mesa, CA \| NTP Plumbing | Plumber in La Mesa, CA | plumber La Mesa | 751 | new |
| `/plumber-santee` | Plumber in Santee, CA \| NTP Plumbing | Plumber in Santee, CA | plumber Santee | 659 | new |
| `/plumber-lakeside` | Plumber in Lakeside, CA \| NTP Plumbing | Plumber in Lakeside, CA | plumber Lakeside | 654 | new |
| `/plumber-spring-valley` | Plumber in Spring Valley, CA \| NTP Plumbing | Plumber in Spring Valley, CA | plumber Spring Valley | 648 | new |
| `/plumber-rancho-san-diego` | Plumber in Rancho San Diego, CA \| NTP Plumbing | Plumber in Rancho San Diego, CA | plumber Rancho San Diego | 665 | new |
| `/blog/signs-you-need-a-water-heater-replacement` | 7 Signs You Need a Water Heater Replacement \| NTP Plumbing | 7 Signs You Need a Water Heater Replacement (Not Just a Repair) | water heater replacement signs | 1388 | rewritten |
| `/blog/hydro-jetting-vs-snaking` | Hydro Jetting vs. Snaking a Drain: What's the Difference? | Hydro Jetting vs. Snaking: Which Does Your Clogged Drain Actually Need? | hydro jetting vs snaking | 1322 | rewritten |
| `/blog/preventing-frozen-pipes-san-diego` | Protecting Pipes on Cold East County Nights \| NTP Plumbing | Protecting Your Pipes on Cold East County Nights: Alpine, the Foothills, and Beyond | protect pipes cold nights East County | 1328 | rewritten |
| `/blog/water-heater-replacement-cost-san-diego` | Water Heater Replacement Cost in San Diego \| NTP Plumbing | How Much Does Water Heater Replacement Cost in San Diego? | water heater replacement cost San Diego | 1313 | new |
| `/blog/tankless-vs-tank-water-heater-san-diego` | Tankless vs. Tank Water Heater for San Diego Homes | Tankless vs. Tank Water Heaters: Which Is Better for San Diego Homes? | tankless vs tank water heater | 1351 | new |
| `/blog/slab-leak-signs` | Slab Leak Signs: How to Tell If You Have One \| NTP Plumbing | Slab Leak Signs: How to Tell If You Have a Leak Under Your Foundation | slab leak signs | 1316 | new |
| `/blog/hard-water-san-diego-plumbing` | Hard Water in San Diego: Plumbing Damage & Fixes \| NTP | How Hard Water in San Diego Damages Your Plumbing (and What to Do) | hard water San Diego | 1351 | new |
| `/blog/trenchless-sewer-repair-vs-replacement` | Trenchless Sewer Repair vs. Replacement \| NTP Plumbing | Sewer Line Replacement vs. Trenchless Repair: What East County Homeowners Should Know | trenchless sewer repair cost | 1328 | new |
| `/blog/high-water-bill-hidden-leaks` | Why Is My Water Bill So High? 7 Leaks to Check \| NTP | Why Is My Water Bill So High? 7 Hidden Leaks to Check | high water bill leak | 1324 | new |
| `/blog/when-to-repipe-a-house` | When to Repipe a House: Pipe Warning Signs \| NTP Plumbing | When to Repipe Your Home: Galvanized and Polybutylene Pipe Warning Signs | when to repipe a house | 1317 | new |
| `/blog/backflow-testing-requirements-san-diego` | Backflow Testing Requirements in San Diego County \| NTP | Backflow Testing in San Diego County: Who Needs It and How Often | backflow testing requirements San Diego | 1300 | new |

\* Visible words inside `<main>`, including shared blocks (related services, FAQ, CTA). Blog article bodies alone are 1,000–1,100 words plus a 4-question FAQ. City page bodies are roughly 500–600 words.
Drafts are prerendered with `noindex` for preview, and are excluded from the sitemap, nav, footer, and llms.txt. The build fails if a published page links to one.

## What changed, by phase

**1 — Crawlability.** `vite build --ssr` + `scripts/prerender.mjs` render every route to `dist/<route>/index.html` with a unique title, description, canonical, OG/Twitter tags, a single H1, full body, and JSON-LD. The client hydrates. The route list is derived from content data, so new pages are prerendered and added to the sitemap automatically. A real 404 page (noindex) is written to `dist/404.html`. `sitemap.xml` is generated with lastmod. `robots.txt` explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, and Google-Extended. Static title/JSON-LD were removed from `index.html`.

**Build-time guards** (fail the build): one H1 per page; title ≤ 60 and description ≤ 155 characters, both unique; valid JSON-LD on every page; every internal link resolves; no published page links to a draft; every referenced `/images/…` file exists.

**2 — Technical SEO.** `src/lib/business.ts` is the single source of NAP and license facts. Sitewide `Plumber` JSON-LD carries a stable `@id`, legalName, address, geo (32.79415, −116.95925: OpenStreetMap rooftop point, matching the Census geocoder within ~30 m), foundingDate, `hasCredential` (CSLB C-36 #1040373), 24/7 hours, 10-city areaServed, and sameAs. `Service`, `FAQPage`, `BreadcrumbList`, and `BlogPosting` reference it. The footer NAP line on every page reads exactly: *NTP Plumbing · 270 E Douglas Ave, El Cajon, CA 92020 · (619) 550-7371 · CA Lic. #1040373 (C-36)*. Mobile header has click-to-call. Google Map of the office on /contact and /service-area. Breadcrumbs on all inner pages. Related-service links on every service page.

**Images:** the gallery was rebuilt from the client's original uploads as WebP in three sizes, with descriptive filenames (e.g. `gas-water-heater-installation.webp`). Heroes get a `-hero.webp` variant. Width/height are set on every image, and below-the-fold images lazy-load. **The old alt text was wrong on most photos.** For example, the "water heater" hero showed open drain pipes and the "backflow" hero showed a shower valve. Alts were rewritten from what each photo actually shows, and heroes were reassigned to matching photos.

**3 — Existing pages rewritten** around the keyword table. Service pages follow H1 → Quick answer → signs → how we do it → cost (TODO prices) → why NTP → East County context → FAQ → related → CTA. Each runs about 1,000–1,400 words.

**4 — New pages.** Emergency plumber and tankless pages are published (both already advertised on the old site). Repiping, gas lines, and water softeners are drafts. Five individually written city pages (La Mesa, Santee, Lakeside, Spring Valley, Rancho San Diego), linked from /service-area, the homepage, and the footer.

**5 — Blog.** 3 posts rewritten (same URLs; the frozen-pipes post is refocused on Alpine and foothill cold nights) and 8 new answer-first posts. Each has BlogPosting and FAQPage schema, a featured image (a real photo or a visible placeholder), links to 2+ service pages, and a CTA. /blog is grouped by category.

**6 — AI search.** `/llms.txt` is generated from the same data as the site (it can't drift). Every service page has a quotable "Quick answer" block. NAP is identical everywhere (verified below).

## Things removed or changed on purpose
- **Review/AggregateRating markup copied from Yelp** was removed. Google's guidelines don't allow marking up reviews sourced from another site, and self-serving LocalBusiness review stars aren't eligible anyway. The reviews still display, linked to Yelp.
- **Unverifiable or contradictory claims removed:** "hundreds of happy customers" (with 9 reviews), "family owned", "dispatchers", and "20+ years" on the homepage, which read as years in business next to "licensed since 2018". Retained old-site claims are listed in TODO-CLIENT.md for confirmation.
- **Service-area focus** moved from "Greater San Diego" to East County. The wider county list is kept as a secondary section, since NTP does still take those jobs.
- Unused react-query, toast, and tooltip providers were dropped. Brand blue and muted text are a few percent darker to pass WCAG contrast.

## Hosting change (proposed — NOT applied)

The site is served by nginx on a Coolify-managed host (not Amplify/CloudFront), and its config isn't in the repo. The proposed config is in **`deploy/nginx.conf`**. The key rules:

```nginx
absolute_redirect off;
rewrite ^/(.+)/$ /$1 permanent;              # /about/ -> /about (canonical)

location / {
    try_files $uri $uri/index.html =404;     # serve prerendered page; no SPA catch-all
}

error_page 404 /404.html;                    # unknown paths -> 404.html with HTTP 404
location = /404.html { internal; }
```

It also adds long-lived caching for hashed `/assets/` and gzip. Tested locally with nginx against `dist/`: real routes return 200 with their own HTML, `/about/` 301s to `/about`, and unknown paths return HTTP 404 with the 404 page.

**Why apply it:** without it, unknown paths keep returning the homepage with HTTP 200 (soft 404s). And depending on Coolify's default rules, `/about` may 301 to `/about/`, which conflicts with the canonical URLs. Apply it in Coolify → the app → *Custom Nginx Configuration* (static build). After deploying, confirm with:

```sh
curl -sI https://ntpplumbing.com/does-not-exist | head -1   # expect 404
curl -s -A GPTBot https://ntpplumbing.com/services/leak-detection | grep -o "<title[^<]*"
```

**Build note:** `npm run build` now runs the SSR prerender. The `postinstall` Playwright/Chromium download is no longer needed and was removed, which speeds up deploys.

## Verification (Phase 7)

Local build served by nginx with the proposed config.

**Raw HTML as GPTBot** (`scripts/check-crawler-view.sh`): `/`, `/services/water-heater-repair`, `/services/leak-detection`, `/plumber-la-mesa`, and `/blog/slab-leak-signs` all return HTTP 200 with a unique title, meta description, canonical, og:title, one H1, 760–1,360 words of body text, and JSON-LD.

**404:** `/this-page-does-not-exist`, `/services/fake-service`, `/blog/nope`, and `/plumber-chula-vista` all return **HTTP 404** with the noindex 404 page. `/about/` returns 301 to `/about`.

**JSON-LD** (`scripts/validate-jsonld.mjs`): all blocks parse. Plumber ×32 (address fields and geo checked), BreadcrumbList ×31, Service ×13, FAQPage ×26, BlogPosting ×11. Required fields are present on every indexable page.

**NAP consistency** (grep of `dist/`): `streetAddress` is always `270 E Douglas Ave` (36/36). The display phone is always `(619) 550-7371`, links are always `tel:+16195507371`, and schema is always `+1-619-550-7371`. There are no other variants. The footer NAP line appears on 36/36 HTML files.

**Lighthouse (mobile, local):**

| Page | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| `/` | 91 (was 70 before fixes) | 96 | 100 | **100** |
| `/services/water-heater-repair` | 91 | 96 | 100 | **100** |

Fixes made during verification: homepage LCP 8.6s → 2.9s (lighter hero variant), CLS 0.125 → 0 (metric-matched fallback font), contrast tokens. The remaining accessibility flag is white text on the brand orange (`--accent`). That's left as a design decision.

## Maintenance

- **Change business details:** `src/lib/business.ts` (flows into every page, schema, footer, and llms.txt).
- **Publish a draft:** set `published: true` in `src/data/services/<slug>.ts`.
- **New service:** add a file in `src/data/services/` and one line in `src/data/servicePages.tsx`.
- **New blog post:** add a file in `src/data/blog/` and one line in `src/data/blog/index.ts`.
- **New city:** add an entry in `src/data/cityPages.ts`.
- **Checks:** `npm run build` (all SEO guards), `node scripts/validate-jsonld.mjs`, `node scripts/word-count.mjs`.

# TODO — information needed from NTP Plumbing

Everything here is a placeholder or an unconfirmed claim on the `seo-overhaul` branch. On the site, placeholders render as yellow `{{TODO: …}}` highlights so they're impossible to miss. **Don't deploy to production until the "Before launch" items are resolved.** Find any remaining ones with:

```sh
grep -rn "TODO" src/ | grep -v node_modules
```

---

## Before launch (blocking)

### Business identity & NAP
- [ ] **Google Business Profile address formatting.** The site uses `270 E Douglas Ave, El Cajon, CA 92020` everywhere (site, schema, footer, llms.txt). Confirm it matches the GBP **character for character**, and whether there's a **suite/unit number**. If either changes, edit only `src/lib/business.ts`.
- [ ] ⚠️ **Shared address.** OpenStreetMap lists a different business, *"Friar's Plumbing Heating and AC Repair"*, at 270 E Douglas Ave. Two plumbing businesses at one address can cause Google to filter one of them out of local results. Is this a shared building, a suite, or a virtual/mailing address? (Google also requires GBP addresses to be staffed during business hours.)
- [ ] **Phone `(619) 550-7371`.** Matches the number already on the site ✅. Confirm it's the number on the GBP.
- [ ] **CSLB license #1040373 status.** Confirm it shows **Active** at [cslb.ca.gov](https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx). (The lookup needs an interactive form, so it couldn't be checked automatically.) Placeholder on `/about`.
- [ ] **24/7 availability.** The old site advertised 24/7, so the new site keeps it (homepage title, schema hours, `/services/emergency-plumber`). If it's not accurate, set `open24x7: false` in `src/lib/business.ts`, set `published: false` in `src/data/services/emergency-plumber.ts`, and drop "24/7 Service" from the homepage title.
- [ ] **Profile links** for `sameAs` / `hasMap` schema: **Google Business Profile URL**, **BBB**, **Facebook** (and any others: Nextdoor, Angi, etc.). Add them to `src/lib/business.ts`. Yelp is already included.
- [ ] **Google "write a review" link** for `/reviews`.
- [ ] **priceRange** for schema (`$`, `$$`, or a range). Left out of the JSON-LD until supplied.

### Claims carried over from the old site — confirm or remove
These were already live, so they were kept. Please confirm each one is still true:
- [ ] "5.0 stars on Yelp" (homepage, reviews page). Still accurate?
- [ ] "Licensed & **insured**". Your brief says bonded; insurance wasn't on the verified list. The new copy says "licensed and bonded" only. Confirm whether NTP carries general liability insurance and we'll add it.
- [ ] "**No overtime fees. No trip charges.**" Removed from the footer, and asked about in cost sections. Still your policy?
- [ ] "**Free estimates / free quote**" (CTA button). Still offered?
- [ ] "**Upfront pricing** — price before work starts" (service pages). OK to state?
- [ ] Payment: **cash, check, credit cards, Zelle**. Still accurate?
- [ ] "**20+ years of experience**" (owner). Removed from the homepage because it reads like "years in business" next to "licensed since 2018". Supply an owner bio for `/about` (name, role, years of experience, background).

### Draft pages — confirm NTP offers these (kept out of nav, sitemap, and llms.txt; served with `noindex`)
Set `published: true` in the file to launch. The build automatically adds the page to the sitemap, nav, footer, and llms.txt.
- [ ] `/services/repiping` (`src/data/services/repiping.ts`). Whole-house PEX/copper repipes. Also: materials used, typical duration, drywall patching included?, permits.
- [ ] `/services/gas-line-repair` (`src/data/services/gas-line-repair.ts`). Gas leak repair, appliance lines. Which projects (range, dryer, BBQ, pool heater, fireplace)? Permits?
- [ ] `/services/water-softeners-filtration` (`src/data/services/water-softeners-filtration.ts`). Which systems/brands? Water testing? Local brine-discharge rules?
- [ ] Also confirm the two published additions: **tankless installation** (`/services/tankless-water-heaters`, published because the old water heater page listed it) and **slab leak reroutes** (described on `/services/leak-detection`).
- [ ] **Sewer scope:** the sewer page title says "Repair & Replacement" (gallery photos show excavated replacements). Confirm NTP does full replacements and **trenchless lining** (the old site listed full and sectional liners), and NTP's scope on **septic** properties (line only vs. tank work).

---

## Pricing (all prices are placeholders, nothing was invented)

Give a typical range for each, or tell us to remove the line:

| Service | Placeholder(s) |
|---|---|
| Drain cleaning | standard drain cleaning; main line clearing; hydro jetting; snaking (blog) |
| Water heaters | common repairs; 40/50-gal gas tank replacement (installed); tank-to-tankless conversion; tankless replacement; descaling |
| Leak detection | leak detection; slab leak spot repair; slab leak reroute |
| Sewer | camera inspection; sectional repair; trenchless lining (per foot or per job); full replacement |
| Fixtures | faucet repair/replacement; toilet repair; toilet install; shower valve replacement; garbage disposal install |
| Backflow | annual test per device; repair kit + retest; new assembly install; filing fee included? |
| Emergency | emergency call / typical emergency repair; after-hours/holiday rate? |
| Drafts | repipe; gas leak repair; new gas line; water softener; whole-house filter |

## Operations questions (placeholders on service pages)
- [ ] **Typical response time**: standard call vs. emergency / after-hours.
- [ ] **Warranty** on labor and parts, per service type (drains, water heaters, leak repairs, sewer, fixtures, backflow, emergency).
- [ ] **Permits**: does NTP pull permits for water heater, tankless, sewer, gas, and repipe work? Is the fee included in quotes?
- [ ] Water heater **haul-away** included?
- [ ] **Heat pump water heaters**: offered?
- [ ] **Tankless brands** installed and serviced.
- [ ] **Leak detection equipment** used (acoustic, thermal imaging, line locator, pressure testing).
- [ ] Sewer camera inspections: **recorded video/report** provided?
- [ ] Policy on installing **customer-supplied fixtures**, and the warranty impact.
- [ ] **Backflow tester certification** number and certifying body, and which **water agencies** NTP is approved to submit reports to (Helix, Padre Dam, Otay, Lakeside WD…).

## Content & photos
- [ ] **A recent job** in each city: La Mesa, Santee, Lakeside, Spring Valley, Rancho San Diego (neighborhood, problem, fix, outcome; photo if possible).
- [ ] **Featured photos** for blog posts that show a placeholder: tankless water heater install, slab leak detection, hard-water scale on fixtures, water meter / leak indicator, backflow test.
- [ ] A photo of a **tankless install** for `/services/tankless-water-heaters` (currently uses a tank photo).
- [ ] A photo of a **backflow assembly** for `/services/backflow-testing` (currently uses a main-line pressure regulator photo).
- [ ] Review the rewritten **image alt text** (`src/data/photos.ts`). It was written from what each photo shows, without city names, because job locations aren't known. Locations can be added if you know them.

## Hosting (needs someone with Coolify access)
- [ ] Review and apply `deploy/nginx.conf` (see SEO-CHANGES.md → *Hosting change*). Until it's applied, unknown URLs keep returning the homepage with HTTP 200.

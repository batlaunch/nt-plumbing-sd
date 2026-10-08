import { whyNtp, type ServiceContent } from "./types";

// DRAFT: not mentioned on the existing site. TODO-CLIENT: confirm NTP offers
// whole-house repiping before publishing.
export const repiping: ServiceContent = {
  slug: "repiping",
  published: false,
  lastmod: "2026-10-08",
  navTitle: "Whole-House Repiping",
  cardDesc: "PEX and copper repipes to replace aging galvanized or leak-prone pipe.",
  title: "Whole-House Repiping in El Cajon",
  heroSubtitle: "Replace corroded galvanized or leak-prone pipe once, and stop chasing leaks",
  heroPhoto: "pex-repipe-inside-wall",
  seoTitle: "Whole-House Repiping in El Cajon | NTP Plumbing",
  seoDescription:
    "Whole-house repiping in El Cajon and East County: PEX repipes, galvanized pipe replacement, and slab leak reroutes. Licensed plumber: (619) 550-7371.",
  serviceType: "Whole-house repiping",
  quickAnswer:
    "NTP Plumbing repipes homes in El Cajon and East County San Diego, replacing old galvanized steel, polybutylene, or leak-prone copper water lines with new PEX or copper. Most repipes route new lines through the attic and walls instead of under the slab. Call (619) 550-7371 for an estimate.",
  sections: [
    {
      heading: "Signs your home needs a repipe",
      body: `
- **Repeated leaks**: a second or third slab leak or pinhole leak in a few years.
- **Low water pressure throughout the house**, especially in older homes with galvanized pipe that has narrowed from internal corrosion.
- **Rusty or brown water**, particularly first thing in the morning.
- **Galvanized steel supply lines**, common in homes built before the 1960s.
- **Polybutylene pipe** (usually gray plastic, installed roughly from the late 1970s to the mid-1990s), which is known for failing at fittings.
- **Planning a remodel** that already opens walls.

For more detail, read [when to repipe a house](/blog/when-to-repipe-a-house).`,
    },
    {
      heading: "Whole-house repiping in El Cajon: how it works",
      body: `
1. **Inspect and plan.** We confirm what pipe you have, where it runs, and the best route for new lines, usually through the attic and down interior walls.
2. **Choose the material.** PEX is flexible, resists scale, and needs fewer fittings. Copper is the traditional choice. We'll explain the tradeoffs for your home. {{TODO: confirm which materials NTP installs (PEX-A, PEX-B, copper)}}
3. **Protect the house and install.** New lines run to every fixture, the water heater, and hose bibs, with new shutoff valves throughout.
4. **Pressure-test and inspect.** Lines are pressure-tested, and the work is inspected where a permit is required. {{TODO: confirm permit handling}}
5. **Patch access openings.** {{TODO: confirm whether drywall patching is included or subcontracted}}

Most homes keep water service overnight during a repipe. {{TODO: typical repipe duration for a 3-bedroom, 2-bath home}}`,
    },
    {
      heading: "PEX repipe vs. copper",
      body: `
**PEX** is the most common repipe material today. It's flexible enough to snake through walls with fewer openings, holds up well against hard water scale, and costs less to install. **Copper** is durable and familiar, but it's more labor-intensive to install, and in some water conditions it can develop pinhole leaks over time. Both are code-approved in California.`,
    },
    {
      heading: "Cost of repiping a house in El Cajon",
      body: `
- **Home size and number of bathrooms and fixtures**
- **Single-story vs. two-story**, and attic access
- **Material** (PEX vs. copper)
- **Drywall patching and permits**

Typical range: {{TODO: repipe price range for a typical East County home}}.`,
    },
    {
      heading: "Why homeowners in East County call NTP",
      body: whyNtp(["**Leak history, solved.** A repipe ends the cycle of patching one leak after another."], "repiping"),
    },
    {
      heading: "Repiping older East County homes",
      body: `
Homes in El Cajon, La Mesa, Lemon Grove, and Spring Valley built in the 1950s and early 1960s often still have galvanized steel supply lines. These corrode from the inside, so pressure drops and water discolors long before they leak. Homes from the 1960s onward commonly have copper under the slab, where repeated [slab leaks](/services/leak-detection) are the usual trigger for a repipe. And some East County homes and mobile homes built from the late 1970s to the mid-1990s have polybutylene.`,
    },
  ],
  faqs: [
    {
      q: "How long does it take to repipe a house?",
      a: "It depends on the home's size and layout. Many single-story homes can be repiped in a few days, and water is typically restored at the end of each workday.",
    },
    {
      q: "Is PEX better than copper for a repipe?",
      a: "Both are code-approved. PEX costs less to install, needs fewer wall openings, and resists scale from hard water. Copper is very durable but more labor-intensive. The best choice depends on the home and your priorities.",
    },
    {
      q: "Should I repipe or repair a slab leak?",
      a: "If it's the first leak and the rest of the pipe is in good condition, repair it. If you've had multiple leaks or the pipe is corroded, a repipe or reroute is usually the better long-term value.",
    },
    {
      q: "Does a repipe increase home value?",
      a: "Replacing galvanized or polybutylene pipe removes a common concern for buyers and inspectors, and it can make a home easier to insure and sell.",
    },
  ],
  related: ["leak-detection", "water-heater-repair", "fixture-installation-repair"],
};

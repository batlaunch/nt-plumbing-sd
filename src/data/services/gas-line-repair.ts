import { whyNtp, type ServiceContent } from "./types";

// DRAFT: not mentioned on the existing site. TODO-CLIENT: confirm NTP offers
// gas line repair/installation before publishing.
export const gasLineRepair: ServiceContent = {
  slug: "gas-line-repair",
  published: false,
  lastmod: "2026-10-08",
  navTitle: "Gas Line Repair & Installation",
  cardDesc: "Gas leak repair and new gas lines for stoves, dryers, water heaters, and BBQs.",
  title: "Gas Line Repair & Installation in El Cajon",
  heroSubtitle: "Gas leak repair and new lines for appliances, installed and tested to code",
  heroPhoto: "gas-water-heater-replacement",
  seoTitle: "Gas Line Repair & Installation in El Cajon | NTP Plumbing",
  seoDescription:
    "Gas line repair and installation in El Cajon and East County: gas leak repair, new lines for stoves, dryers, and water heaters. Call (619) 550-7371.",
  serviceType: "Gas line repair and installation",
  quickAnswer:
    "NTP Plumbing repairs and installs residential gas lines in El Cajon and East County San Diego: gas leak repair, and new lines for a stove, dryer, water heater, fireplace, or outdoor BBQ. If you smell gas, leave the house and call SDG&E or 911 first. For repairs and new lines, call (619) 550-7371.",
  sections: [
    {
      heading: "If you smell gas",
      body: `
**Leave the house first.** Don't turn lights or appliances on or off, don't use a phone inside, and don't try to find the leak. From a safe distance outside, call SDG&E's emergency line or 911. Once the utility has made the situation safe, a licensed plumber can find and repair the leak.`,
    },
    {
      heading: "Signs you need gas line repair",
      body: `
- A **rotten-egg or sulfur smell** near an appliance or gas meter
- A **hissing sound** near a gas line or connection
- **Dead or browning vegetation** along the path of a buried gas line
- A **gas bill that's higher** than usual without a change in use
- **Old, uncoated brass appliance connectors**, which should be replaced with modern, code-compliant connectors`,
    },
    {
      heading: "Gas line installation and repair in El Cajon: how we do it",
      body: `
1. **Locate the leak or plan the new line.** For repairs, we use a gas detector and leak solution to pinpoint the source. For new lines, we size the pipe for the total gas demand of every appliance on it.
2. **Make the repair or run the new line**, with appliance shutoff valves and approved connectors.
3. **Pressure-test** the system before it's put back in service.
4. **Light and check appliances**, and confirm no leaks at any connection.
5. **Permit and inspection** where required. {{TODO: confirm NTP pulls gas line permits and coordinates inspection}}

Common projects include gas lines for a new range or dryer, a tankless water heater conversion, a fireplace insert, a pool heater, or an outdoor kitchen. {{TODO: confirm which of these NTP does}}`,
    },
    {
      heading: "Cost of gas line repair in El Cajon",
      body: `
- **Length of the run** and whether it's inside, in the attic, or underground
- **Pipe size** needed for the appliance load
- **Wall, floor, or trenching access**
- **Permits and inspection**

Typical ranges: gas leak repair {{TODO: price range}}, new appliance gas line {{TODO: price range}}.`,
    },
    {
      heading: "Why homeowners in East County call NTP",
      body: whyNtp(["**Tested before we leave.** Every gas repair and new line is pressure-tested."], "gas line work"),
    },
    {
      heading: "Gas lines in older East County homes",
      body: `
Many East County homes have original black iron gas piping from the 1950s–1970s, and appliance connectors that are decades old. Outdoor lines to BBQs, pool heaters, and detached garages are often run underground. Adding a gas appliance, or converting a water heater to [tankless](/services/tankless-water-heaters), often means the existing line is too small and needs to be upsized.`,
    },
  ],
  faqs: [
    {
      q: "What should I do if I smell gas in my house?",
      a: "Leave the house immediately without operating switches or appliances, and call SDG&E's emergency line or 911 from outside. Don't go back in until the utility says it's safe.",
    },
    {
      q: "Can a plumber install a gas line for a stove or dryer?",
      a: "Yes. Licensed plumbing contractors in California install and repair gas piping, including lines for ranges, dryers, water heaters, and outdoor appliances.",
    },
    {
      q: "Do I need a permit for a new gas line?",
      a: "Generally, yes. New gas piping typically requires a permit and inspection from your city or the county. Your plumber should handle or coordinate this.",
    },
    {
      q: "How do I know what size gas line I need?",
      a: "Gas pipe is sized by the total demand of every appliance on the line and the length of the run. A plumber calculates this before installation. An undersized line can starve appliances like tankless water heaters.",
    },
  ],
  related: ["water-heater-repair", "tankless-water-heaters", "emergency-plumber"],
};

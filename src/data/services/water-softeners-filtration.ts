import { whyNtp, type ServiceContent } from "./types";

// DRAFT: not mentioned on the existing site. TODO-CLIENT: confirm NTP installs
// water softeners / filtration before publishing.
export const waterSoftenersFiltration: ServiceContent = {
  slug: "water-softeners-filtration",
  published: false,
  lastmod: "2026-10-08",
  navTitle: "Water Softeners & Filtration",
  cardDesc: "Water softener and whole-house filtration installation for San Diego's hard water.",
  title: "Water Softener Installation in El Cajon",
  heroSubtitle: "Protect your water heater, fixtures, and pipes from San Diego's hard water",
  heroPhoto: "copper-water-line-repair",
  seoTitle: "Water Softener Installation in El Cajon | NTP Plumbing",
  seoDescription:
    "Water softener and whole-house filtration installation in El Cajon and East County. Fight hard water scale on heaters and fixtures. (619) 550-7371.",
  serviceType: "Water softener and whole-house filtration installation",
  quickAnswer:
    "NTP Plumbing installs water softeners and whole-house filtration systems in El Cajon and East County San Diego. San Diego County's water is hard, and a softener reduces the scale that shortens the life of water heaters, fixtures, and appliances. Call (619) 550-7371 to discuss options for your home.",
  sections: [
    {
      heading: "Signs of hard water in your home",
      body: `
- **White, crusty buildup** on faucets, showerheads, and glass shower doors
- **Spots on dishes** and glassware
- **Water heater popping or rumbling** from sediment
- **Faucet cartridges and toilet parts** wearing out quickly
- **Soap and shampoo** that don't lather well
- **Reduced flow** at showerheads and aerators

For background, see [how hard water in San Diego damages your plumbing](/blog/hard-water-san-diego-plumbing).`,
    },
    {
      heading: "Water softener installation in El Cajon: how it works",
      body: `
1. **Test your water** so the system is sized to your actual hardness. {{TODO: confirm NTP performs water hardness testing}}
2. **Choose a system**: a salt-based ion-exchange softener, a salt-free conditioner, whole-house carbon filtration for chlorine and chloramine taste and odor, or a combination. {{TODO: confirm which system types and brands NTP installs}}
3. **Install a loop** at the main line if your home doesn't have one, with a bypass valve so the system can be serviced.
4. **Connect the drain and power**, and set up the brine tank for salt-based systems.
5. **Program and test** the system, and show you how to maintain it.`,
    },
    {
      heading: "Softener vs. filter vs. conditioner",
      body: `
A **water softener** removes the calcium and magnesium that cause scale, which makes it the most effective option against buildup. A **salt-free conditioner** changes how minerals behave so they scale less, but it doesn't remove them. A **whole-house filter** targets taste, odor, chlorine, and sediment, not hardness. Many homes pair a softener with a carbon filter.

California restricts some salt-discharging softeners in certain areas because of brine in wastewater. Ask about local rules before choosing a system. {{TODO: confirm any local restrictions for East County sewer agencies}}`,
    },
    {
      heading: "Cost of a water softener in El Cajon",
      body: `
- **System type and capacity**
- **Whether a plumbing loop already exists**
- **Drain and electrical access**
- **Ongoing costs**: salt, filter cartridges, service

Typical ranges: water softener installed {{TODO: price range}}, whole-house filter installed {{TODO: price range}}.`,
    },
    {
      heading: "Why homeowners in East County call NTP",
      body: whyNtp(["**Plumbers, not salespeople.** We see what hard water does to [water heaters](/services/water-heater-repair) and fixtures every week."], "softener and filtration installations"),
    },
  ],
  faqs: [
    {
      q: "Is San Diego water hard?",
      a: "Yes. Much of San Diego County's water is imported from the Colorado River and Northern California, and it's considered hard to very hard. That causes scale on fixtures, water heaters, and appliances.",
    },
    {
      q: "Do I need a water softener in San Diego?",
      a: "It's not required, but it helps if scale is shortening the life of your water heater, fixtures, and appliances, or if spotting and buildup are a constant problem.",
    },
    {
      q: "Will a water softener make my water salty?",
      a: "A properly set-up softener adds a small amount of sodium, and the water doesn't taste salty. Some homeowners keep one unsoftened tap for drinking water or add a filter at the kitchen sink.",
    },
    {
      q: "How long does a water softener last?",
      a: "With regular maintenance, many water softeners last a decade or more. The resin and control valve are the main wear items.",
    },
  ],
  related: ["water-heater-repair", "fixture-installation-repair", "tankless-water-heaters"],
};

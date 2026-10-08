import { whyNtp, type ServiceContent } from "./types";

// Published because the existing water heater page already listed tankless
// installation. TODO-CLIENT: confirm, and supply a photo of a tankless install.
export const tanklessWaterHeaters: ServiceContent = {
  slug: "tankless-water-heaters",
  published: true,
  lastmod: "2026-10-08",
  navTitle: "Tankless Water Heaters",
  cardDesc: "Tankless water heater installation, tank-to-tankless conversions, descaling, and repair.",
  title: "Tankless Water Heater Installation in El Cajon",
  heroSubtitle: "Endless hot water, sized and installed correctly for your home",
  heroPhoto: "water-heater-replacement-closet",
  seoTitle: "Tankless Water Heater Installation in El Cajon",
  seoDescription:
    "Tankless water heater installation, conversion and repair in El Cajon and East County San Diego. Sized right, installed to code. Call (619) 550-7371.",
  serviceType: "Tankless water heater installation and repair",
  quickAnswer:
    "NTP Plumbing installs, repairs, and maintains tankless water heaters in El Cajon and East County San Diego, including tank-to-tankless conversions. We size the unit to your household's hot water use and check gas supply and venting before recommending one. Call (619) 550-7371 for an estimate.",
  sections: [
    {
      heading: "Is a tankless water heater right for you?",
      body: `
Tankless water heaters heat water only when you open a tap, so you don't run out of hot water and you aren't paying to keep a tank hot 24 hours a day. They also free up floor space and typically outlast tank heaters. The tradeoffs:

- **Higher upfront cost**, especially when converting from a tank (gas line, venting, and sometimes electrical work).
- **Flow-rate limits.** A unit is sized by how many fixtures it can supply at once. An undersized unit means lukewarm showers when the dishwasher is running.
- **Maintenance matters more.** With San Diego County's hard water, tankless units need periodic descaling to keep working well.

A tankless unit tends to make the most sense for households that run out of hot water with a tank, want to reclaim garage or closet space, or plan to stay in the home long enough to recover the higher upfront cost. For a full comparison, read [tankless vs. tank water heaters for San Diego homes](/blog/tankless-vs-tank-water-heater-san-diego).`,
    },
    {
      heading: "Signs your tankless water heater needs service",
      body: `
- Water that **fluctuates between hot and cold** during a shower
- **Error codes** on the unit's display
- **Reduced flow** or hot water taking longer to arrive than it used to
- The unit **shutting off** when several fixtures are running
- It's been more than a year or two since the unit was **descaled**`,
    },
    {
      heading: "Tankless water heater installation in El Cajon: how we do it",
      body: `
1. **Size the unit.** We count fixtures and appliances that might run at the same time, and account for San Diego's incoming water temperature, to choose the right flow capacity.
2. **Check the gas supply.** Gas tankless units typically need much more gas capacity at full fire than a tank heater. We verify your gas line and meter can supply it, and upgrade the line if needed. {{TODO: confirm NTP performs gas line upgrades for tankless installs}}
3. **Plan venting and placement.** Tankless units have specific venting requirements, and indoor and outdoor models are installed differently. Placement also affects how quickly hot water reaches the far bathroom.
4. **Install to code**, with isolation valves for future descaling, proper condensate drainage on condensing units, and any required permits. {{TODO: confirm NTP pulls permits for tankless installations}}
5. **Commission and walk you through it**: temperature setting, error codes, and the maintenance schedule.`,
    },
    {
      heading: "Tankless water heater maintenance and repair",
      body: `
Hard water is the biggest enemy of a tankless unit in San Diego County. Scale builds up on the heat exchanger, which reduces efficiency, triggers error codes, and shortens the unit's life. Periodic **descaling** (flushing the heat exchanger with a descaling solution through the service valves) keeps it running properly. Many manufacturers' warranties assume it's done.

We also repair tankless units: ignition and flame sensor problems, flow sensor faults, venting issues, and error-code diagnosis. {{TODO: list tankless brands NTP installs and services}}`,
    },
    {
      heading: "Cost of tankless water heater installation in El Cajon",
      body: `
A tankless installation is priced around the unit and the work needed to support it:

- **The unit**: flow capacity, condensing vs. non-condensing, indoor vs. outdoor.
- **Conversion work**: gas line upsizing, new venting, electrical for the unit, and relocating water lines.
- **Location**: replacing an existing tankless is simpler than converting from a tank.
- **Permits** where required.

Typical ranges: tank-to-tankless conversion {{TODO: price range}}, tankless replacement {{TODO: price range}}, descaling service {{TODO: price}}. Our article on [water heater replacement cost in San Diego](/blog/water-heater-replacement-cost-san-diego) breaks down the line items.`,
    },
    {
      heading: "Why homeowners in East County call NTP",
      body: whyNtp(
        [
          "**Honest sizing.** If a tank heater is the better fit for your home and budget, we'll say so.",
          "**Tank and tankless.** We install and repair both, so the recommendation isn't driven by what we sell. See our [water heater repair and replacement](/services/water-heater-repair) service.",
        ],
        "tankless installations",
      ),
    },
  ],
  faqs: [
    {
      q: "Is a tankless water heater worth it in San Diego?",
      a: "It can be, for households that run out of hot water, want the space back, or plan to stay long enough to recover the higher upfront cost. San Diego's mild climate helps tankless performance, but hard water means descaling is a must.",
    },
    {
      q: "How long do tankless water heaters last?",
      a: "Tankless units typically last longer than tank heaters, often 15–20 years, when they're descaled on schedule. Neglected units in hard water areas can fail much sooner.",
    },
    {
      q: "How often should a tankless water heater be descaled?",
      a: "Follow the manufacturer's guidance. In hard water areas like San Diego County, that's commonly about once a year, more often if the unit shows scale-related error codes.",
    },
    {
      q: "Can I replace my tank water heater with a tankless one?",
      a: "Usually, yes, but the conversion often needs a larger gas line, new venting, and sometimes electrical work. A plumber should check gas capacity and venting options before you buy a unit.",
    },
    {
      q: "Why does my tankless water heater go cold in the shower?",
      a: "Common causes are scale buildup, a flow rate too low to trigger the burner (such as a low-flow showerhead turned down), too many fixtures running at once for the unit's size, or a gas supply problem. Descaling and a diagnostic check usually find it.",
    },
  ],
  related: ["water-heater-repair", "leak-detection", "emergency-plumber"],
};

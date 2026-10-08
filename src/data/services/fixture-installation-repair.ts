import { whyNtp, type ServiceContent } from "./types";

export const fixtureRepair: ServiceContent = {
  slug: "fixture-installation-repair",
  published: true,
  lastmod: "2026-10-08",
  navTitle: "Faucet, Toilet & Fixture Repair",
  cardDesc: "Faucets, toilets, shower valves, bathtubs, and garbage disposals: repaired or installed.",
  title: "Faucet, Toilet & Fixture Repair in El Cajon",
  heroSubtitle: "Dripping faucets, running toilets, shower valves, tubs, and garbage disposals",
  heroPhoto: "toilet-and-vanity-installation",
  seoTitle: "Faucet, Toilet & Fixture Repair in El Cajon | NTP Plumbing",
  seoDescription:
    "Faucet, toilet, shower valve, bathtub and garbage disposal repair and installation in El Cajon and East County. Licensed plumber: (619) 550-7371.",
  serviceType: "Plumbing fixture repair and installation",
  quickAnswer:
    "NTP Plumbing repairs and installs plumbing fixtures in El Cajon and East County San Diego: faucets, toilets, shower valves, bathtubs, and garbage disposals. We tell you straight whether a repair or a replacement makes more sense. Call (619) 550-7371 to book. We're a licensed plumber, and we take urgent calls 24/7.",
  sections: [
    {
      heading: "Signs a fixture needs repair or replacement",
      body: `
Small fixture problems waste water and tend to get worse. Call when you notice:

- **A dripping faucet or showerhead.** Usually a worn cartridge, washer, or seat.
- **A toilet that runs, refills on its own, or rocks.** Running and phantom refills are usually the flapper or fill valve. A rocking toilet can mean a failing wax seal and a slow leak into the subfloor.
- **A shower that's hard to temper or suddenly goes hot or cold.** That points to a worn or failing shower valve cartridge.
- **Low flow at one fixture only.** Usually a clogged aerator, cartridge, or supply stop rather than a whole-house problem.
- **A garbage disposal that hums, leaks, or trips its reset** repeatedly.
- **Water under the sink or around the tub**, or soft drywall behind a shower.

Some of these are a five-minute repair. Others point to a hidden leak behind the wall, in which case our [leak detection](/services/leak-detection) service is the next step.`,
    },
    {
      heading: "Fixture repair in El Cajon: what we work on",
      body: `
### Faucets
Kitchen, bathroom, and laundry faucets: cartridge and valve repairs, full replacements, and new installs. That includes swapping corroded shutoff valves and supply lines while we're there.

### Toilets
Running toilets, weak flushes, leaks at the base or tank, wax ring replacement, and new toilet installation.

### Shower valves and tub/shower fixtures
Cartridge replacement, full shower valve replacement, trim kits, and handheld shower installs. If a valve has to be replaced from behind the wall, we'll explain how the wall will be opened and closed.

### Bathtubs
Bathtub replacement and installation, including drain and overflow connections. In many cases a tub can be swapped without a full bathroom remodel. It depends on how the tub and surround were installed.

### Garbage disposals
Repair, replacement, and new installation, including the drain and dishwasher connections.`,
    },
    {
      heading: "How we handle a fixture call",
      body: `
1. **Figure out what's actually failing.** A drip can be a $10 part or a fixture that's done.
2. **Give you the repair-or-replace options with prices.** If a repair is the better value, that's what we'll recommend.
3. **Install the right part.** We match replacement parts and fixtures to your existing connections. Already bought a fixture? {{TODO: confirm NTP's policy on installing customer-supplied fixtures and whether it affects the warranty}}
4. **Protect your home.** Fixture work happens in kitchens and bathrooms, so we work clean and haul away the old parts.
5. **Test everything**: supply connections, drain connections, and the fixture under normal use.`,
    },
    {
      heading: "Cost of fixture repair in El Cajon",
      body: `
Fixture work is usually the most predictable plumbing cost. What moves the price:

- **Repair vs. replacement**, and whether you're supplying the new fixture.
- **Access.** A faucet under a cramped sink or a shower valve that has to be reached from behind tile takes more time.
- **Related parts.** Corroded shutoff valves, supply lines, or drain parts are often worth replacing during the same visit.

Typical ranges: faucet repair or replacement {{TODO: price range}}, toilet repair {{TODO: price range}}, toilet installation {{TODO: price range}}, shower valve replacement {{TODO: price range}}, garbage disposal installation {{TODO: price range}}. You'll know the price before we start.`,
    },
    {
      heading: "Why homeowners in East County call NTP",
      body: whyNtp(
        [
          "**Straight answers on repair vs. replace.** We'll tell you when a fixture is worth saving.",
          "**Careful in-home work.** We protect floors and finishes and clean up after the job.",
        ],
        "fixture repairs and installations",
      ),
    },
    {
      heading: "Hard water and fixtures in East County",
      body: `
San Diego County's hard water leaves mineral scale on everything it touches. On fixtures, that shows up as:

- **Crusty aerators and showerheads** that slowly lose flow.
- **Faucet and shower cartridges that stiffen and start dripping** sooner than they should.
- **Toilet fill valves and flappers** that wear out and start running.
- **White spotting and buildup** on fixtures and glass.

Soaking aerators and showerheads in vinegar helps with buildup. But if you're replacing cartridges and flappers every year or two, the water is the root cause. Our post on [hard water in San Diego](/blog/hard-water-san-diego-plumbing) explains your options.

Older homes from the 1950s to the 1970s add another wrinkle: original shutoff valves under sinks and behind toilets are often seized or leaking. If a shutoff won't turn when you need it, it's worth replacing before it becomes the reason a small leak turns into a flooded bathroom.`,
    },
  ],
  faqs: [
    {
      q: "Is it worth repairing a dripping faucet?",
      a: "Usually, yes. Most drips are a worn cartridge or washer and a quick repair. If the faucet body is corroded, parts are no longer available, or it's been repaired several times, replacing it is often the better value.",
    },
    {
      q: "Why does my toilet keep running?",
      a: "The most common causes are a worn flapper that lets water leak into the bowl, or a fill valve that's set too high or failing. Both are inexpensive repairs, and a running toilet can waste a lot of water, so it's worth fixing promptly.",
    },
    {
      q: "Can you replace a shower valve without redoing the whole shower?",
      a: "Often, yes. Many valves can be repaired by replacing the cartridge from the front. If the valve body itself needs replacing, it may be reachable from an access panel or the wall behind the shower. We'll explain your options before opening anything.",
    },
    {
      q: "Do you install garbage disposals?",
      a: "Yes. NTP Plumbing repairs, replaces, and installs garbage disposals, including the sink drain and dishwasher connections.",
    },
  ],
  related: ["drain-cleaning-hydro-jetting", "water-heater-repair", "leak-detection"],
};

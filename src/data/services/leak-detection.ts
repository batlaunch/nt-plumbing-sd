import { whyNtp, type ServiceContent } from "./types";

export const leakDetection: ServiceContent = {
  slug: "leak-detection",
  published: true,
  lastmod: "2026-10-08",
  navTitle: "Leak Detection & Slab Leak Repair",
  cardDesc: "Hidden leaks found without tearing up your home: slab leaks, wall leaks, and high water bills.",
  title: "Leak Detection & Slab Leak Repair in El Cajon",
  heroSubtitle: "Find the hidden leak first, then fix it with as little demolition as possible",
  heroPhoto: "bathtub-valve-pex-repipe",
  seoTitle: "Leak Detection & Slab Leak Repair in El Cajon | NTP Plumbing",
  seoDescription:
    "Leak detection and slab leak repair in El Cajon and East County. Hidden leaks, high water bills and warm floors found and fixed. Call (619) 550-7371.",
  serviceType: "Leak detection and slab leak repair",
  quickAnswer:
    "NTP Plumbing finds and repairs hidden water leaks in El Cajon and East County San Diego: slab leaks under the foundation, leaks inside walls and ceilings, and underground supply line leaks. We pinpoint the leak before opening anything, so repairs take less demolition. Call (619) 550-7371. We're a licensed plumber, available 24/7.",
  sections: [
    {
      heading: "Signs of a hidden water leak or slab leak",
      body: `
Most hidden leaks show up on the water bill before you see any water. Watch for:

- **A water bill that jumps** without any change in how you use water.
- **The water meter moving with everything turned off.** That's the simplest leak test you can do yourself. Turn off every faucet and appliance, then watch the meter's leak indicator (usually a small dial or triangle) for a few minutes.
- **The sound of running water** when nothing is on.
- **Warm spots on the floor**, a classic sign of a hot water line leaking under a slab.
- **Damp or stained drywall, baseboards, or ceilings**, bubbling paint, or a musty smell.
- **Cracks in tile or flooring**, or carpet that's damp along one area.
- **Low water pressure** or a water heater that runs constantly.
- **A soggy patch in the yard** in the same spot even when it hasn't rained.

Our post on [slab leak signs](/blog/slab-leak-signs) goes into each of these in detail. For a step-by-step check of where else water can be going, see [why your water bill is so high](/blog/high-water-bill-hidden-leaks).`,
    },
    {
      heading: "Leak detection in El Cajon: how we find the leak",
      body: `
1. **Confirm there is a leak.** We start at the meter and isolate the house from the irrigation system. That tells us whether the loss is inside, outside, hot side, or cold side.
2. **Narrow it down with non-invasive tools.** Pressure testing isolates which line is losing water. Acoustic listening equipment picks up the sound of water escaping under a slab or behind a wall. Thermal imaging can trace a hot water leak by the heat it gives off. {{TODO: confirm which leak detection equipment NTP uses (acoustic, thermal imaging, line locator, pressure test gauges)}}
3. **Mark the spot before cutting anything.** Opening the right square foot of floor or drywall is the difference between a small patch and a remodel.
4. **Recommend the repair that fits the pipe.** For a single leak in otherwise healthy pipe, we make a spot repair. If the line has more than one leak or is badly corroded, rerouting the line through the walls or attic is often the more permanent fix than breaking up the slab again next year.
5. **Test the repair** under pressure before closing anything up.`,
    },
    {
      heading: "Slab leak repair options",
      body: `
There are three common ways to fix a slab leak, and the right one depends on the pipe:

- **Spot repair through the slab.** We open the floor directly over the leak, repair the pipe, and close it back up. This makes sense when the rest of the pipe is in good shape.
- **Reroute the line.** We abandon the leaking section under the slab and run a new line through the walls or attic. This usually means less floor demolition, and it's the better choice when the copper under the slab is thinning in more than one place.
- **Repipe.** If leaks keep happening across the house, a [whole-house repipe](/blog/when-to-repipe-a-house) may be the most cost-effective long-term answer.`,
    },
    {
      heading: "Cost of leak detection and slab leak repair in El Cajon",
      body: `
Leak detection is usually priced separately from the repair, because the repair depends on what the detection finds. What affects the cost:

- **How many lines we have to isolate and test.**
- **Where the leak is.** Under a slab, in a wall, in a ceiling, or underground in the yard.
- **What's covering it.** Tile, hardwood, carpet, cabinets, or concrete all take different work to open and close.
- **Repair method.** A spot repair, a reroute, or a repipe.

Typical ranges: leak detection {{TODO: price range for leak detection}}, slab leak spot repair {{TODO: price range}}, slab leak reroute {{TODO: price range}}. You'll get a price for the repair once we know exactly where the leak is.`,
    },
    {
      heading: "Why homeowners in East County call NTP",
      body: whyNtp(
        [
          "**Locate first, open second.** We don't start cutting until we've narrowed down where the leak is.",
          "**Leaks don't wait.** Water under a slab or behind a wall keeps causing damage. We're available 24/7.",
        ],
        "leak repairs",
      ),
    },
    {
      heading: "Why slab leaks are common in East County",
      body: `
Most homes in El Cajon, La Mesa, Santee and Spring Valley are built on concrete slab foundations, with the water lines running under or through the slab. Many homes built from the 1960s on used copper supply lines under the slab. Over decades, a few things wear that copper down:

- **Hard water and water chemistry** cause pinhole corrosion from the inside.
- **Abrasion**: pipes expand and contract against concrete and gravel every time hot water runs.
- **Ground movement and settling** stress the pipe where it passes through the slab.

Older homes with galvanized steel supply lines have a different problem: those pipes corrode and narrow from the inside, which shows up as low pressure and rusty water before it shows up as leaks. Either way, the answer starts with finding exactly where the water is going.`,
    },
  ],
  faqs: [
    {
      q: "What are the signs of a slab leak?",
      a: "Common signs include a water bill that jumps unexpectedly, the water meter moving with all fixtures off, warm spots on the floor, the sound of running water, damp or cracked flooring, and a water heater that runs constantly.",
    },
    {
      q: "Is a slab leak covered by homeowners insurance?",
      a: "It depends on your policy. Many policies cover the water damage a sudden leak causes, and sometimes the cost of opening the floor to reach the pipe, but not the repair of the pipe itself. Call your insurer with your policy number before or right after the repair, and keep photos and the plumber's invoice.",
    },
    {
      q: "Can you find a leak without tearing up my floor?",
      a: "In most cases, yes. Pressure testing, acoustic listening equipment, and thermal imaging narrow the leak down to a small area before anything is opened, so the repair only disturbs the spot that needs it.",
    },
    {
      q: "Should I repair a slab leak or reroute the pipe?",
      a: "Spot-repair a single leak in otherwise healthy pipe. Reroute if the pipe under the slab is corroded or has leaked before, because the next leak is often close behind and rerouting avoids breaking the slab again.",
    },
    {
      q: "How do I check for a leak myself?",
      a: "Turn off every faucet, appliance, and the irrigation system, then watch the water meter's leak indicator for 10–15 minutes. If it moves, water is going somewhere. Call a plumber to find where.",
    },
  ],
  related: ["water-heater-repair", "sewer-line-repair", "fixture-installation-repair"],
};

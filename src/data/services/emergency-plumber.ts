import { whyNtp, type ServiceContent } from "./types";

// Published because the existing site already advertises 24/7 emergency
// service. TODO-CLIENT: confirm 24/7 is accurate; if not, set published: false.
export const emergencyPlumber: ServiceContent = {
  slug: "emergency-plumber",
  published: true,
  lastmod: "2026-10-08",
  navTitle: "24/7 Emergency Plumbing",
  cardDesc: "Burst pipes, sewer backups, and leaking water heaters, answered day or night.",
  title: "24/7 Emergency Plumber in El Cajon",
  heroSubtitle: "Burst pipes, sewage backups, and major leaks, answered nights, weekends, and holidays",
  heroPhoto: "broken-sewer-pipe-exposed",
  seoTitle: "24/7 Emergency Plumber in El Cajon | NTP Plumbing",
  seoDescription:
    "24/7 emergency plumber in El Cajon and East County: burst pipe repair, sewer backups, leaking water heaters, after-hours service. Call (619) 550-7371.",
  serviceType: "Emergency plumbing",
  quickAnswer:
    "NTP Plumbing is a 24/7 emergency plumber in El Cajon serving East County San Diego. Call (619) 550-7371 any time, day or night, including weekends and holidays, for burst pipes, sewer backups, leaking water heaters, and other plumbing emergencies. While you wait, shut off your main water valve if water is leaking.",
  sections: [
    {
      heading: "What counts as a plumbing emergency?",
      body: `
If water or sewage is going where it shouldn't, and you can't stop it, it's an emergency. Call right away for:

- **A burst or actively leaking pipe**, in a wall, ceiling, under a sink, or in the yard.
- **Sewage backing up** into a tub, shower, or floor drain.
- **A leaking water heater**, especially water coming from the tank itself.
- **No water at all** to the house (after confirming with your water district that there's no outage).
- **A toilet overflowing** that won't stop when you close its supply valve.
- **The smell of gas** near a water heater or gas appliance. Leave the house first, then call SDG&E's emergency line or 911 from outside.

Some problems can safely wait for a scheduled appointment: a dripping faucet, a single slow drain, or a running toilet you can shut off. If you're not sure, call and describe what's happening. We'll tell you honestly whether it needs someone tonight.`,
    },
    {
      heading: "What to do before the plumber arrives",
      body: `
A few minutes of the right steps can save thousands in water damage:

1. **Shut off the water.** Your main shutoff is usually where the water line enters the house (often near the front hose bib or in the garage) or at the meter box by the street. For a single fixture, use the small shutoff valve under the sink or behind the toilet.
2. **Turn off the water heater** if it's leaking: close the cold supply valve on top, then turn the gas control to "off" or switch off the breaker.
3. **Stop using water** if sewage is backing up. Every flush and every running faucet adds to it.
4. **Turn off electricity** to any area where water is near outlets or appliances, but only if you can reach the panel safely and you're standing somewhere dry.
5. **Move valuables and start drying.** Towels, buckets, and a wet vac help. Take photos for insurance.

Not sure where your main shutoff is? Find it now, before you need it.`,
    },
    {
      heading: "Emergency plumber in El Cajon: how we respond",
      body: `
1. **You call (619) 550-7371.** We ask what's happening and walk you through shutting off the water if it's still running.
2. **We head out.** Our office is on E Douglas Ave in El Cajon, central to East County. Typical emergency response: {{TODO: typical after-hours response time}}.
3. **Stop the damage first.** Isolate the leak, clear the main line, or make the water heater safe, so your home is stable tonight.
4. **Explain the permanent fix.** Sometimes the emergency repair is the permanent repair. Sometimes it's a temporary fix that holds until a scheduled repair, like a [slab leak reroute](/services/leak-detection) or a [sewer line repair](/services/sewer-line-repair). We'll tell you which, and what it costs.`,
    },
    {
      heading: "Burst pipe repair",
      body: `
Burst and split pipes are rare in San Diego's climate, but they do happen. The usual causes are an old galvanized line that finally corrodes through, a copper line that develops a pinhole under pressure, a fitting that fails, or, on cold nights in Alpine and the foothills, an exposed pipe that freezes. We repair the damaged section, check the rest of the line, and pressure-test before restoring water. If the pipe is failing throughout the house, we'll talk about longer-term options.

High water pressure also stresses pipes and fittings. If you've had more than one leak, it's worth having your pressure regulator checked.`,
    },
    {
      heading: "Cost of an emergency plumber in El Cajon",
      body: `
The cost of an emergency call depends mostly on what's wrong, not on when you call:

- **The repair itself**: a burst supply line, a main line clog, and a water heater replacement are very different jobs.
- **Access**: a leak inside a finished wall or under a slab takes more work to reach than one under a sink.
- **Parts on hand**: most common repairs can be completed on the first visit.
- **After-hours pricing**: {{TODO: confirm whether NTP charges an after-hours or holiday rate. The old site said "No overtime fees, no trip charges"}}

Typical ranges: {{TODO: emergency service call / typical emergency repair price range}}. We give you the price before starting the repair.`,
    },
    {
      heading: "Why homeowners in East County call NTP in an emergency",
      body: whyNtp(
        [
          "**Available 24/7**, including weekends and holidays.",
          "**Damage control first.** We stabilize the problem before discussing anything else.",
        ],
        "emergency repairs",
      ),
    },
    {
      heading: "Common emergencies in East County homes",
      body: `
Most of the emergency calls we get trace back to the age of the housing. In El Cajon, La Mesa, and Spring Valley, many homes from the 1950s–1970s still have original **clay or cast iron sewer laterals**. Root intrusion or a collapsed section causes sudden main line backups. Many have **copper water lines under concrete slabs**, where a pinhole leak can turn into a flooded floor. And **water heaters** shortened by San Diego's hard water tend to fail without much warning.

Our planning guides cover the warning signs for each: [slab leak signs](/blog/slab-leak-signs), [signs you need a water heater replacement](/blog/signs-you-need-a-water-heater-replacement), and [how to protect pipes on cold East County nights](/blog/preventing-frozen-pipes-san-diego).`,
    },
  ],
  faqs: [
    {
      q: "Is there a 24 hour plumber in El Cajon?",
      a: "Yes. NTP Plumbing, based at 270 E Douglas Ave in El Cajon, answers emergency calls 24 hours a day, 7 days a week, including holidays. Call (619) 550-7371.",
    },
    {
      q: "What should I do if a pipe bursts?",
      a: "Close your home's main water shutoff right away, which is usually where the line enters the house or at the meter. Turn off electricity to wet areas if you can do so safely, and call an emergency plumber. Take photos for your insurance claim.",
    },
    {
      q: "Where is my main water shutoff valve?",
      a: "In most San Diego County homes, it's on the water line where it enters the house, often near a front hose bib or in the garage. There's also a shutoff at the meter, usually in a box near the street, which may need a meter key.",
    },
    {
      q: "Is a clogged toilet an emergency?",
      a: "Not usually, if it's the only toilet and you can stop it from overflowing by closing its supply valve. It is an emergency if sewage is coming up in tubs or showers, or if every drain in the house is backing up. That's a main line clog.",
    },
    {
      q: "What if I smell gas?",
      a: "Leave the house immediately without operating switches or appliances, then call SDG&E's emergency line or 911 from outside. Once the utility has made the area safe, a plumber can repair the gas line or appliance connection.",
    },
  ],
  related: ["leak-detection", "drain-cleaning-hydro-jetting", "water-heater-repair"],
};

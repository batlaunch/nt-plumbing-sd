// City landing pages (/plumber-<city>). Each one is written individually —
// no find-and-replace templates. Distances are straight-line from the office
// at 270 E Douglas Ave, El Cajon.
import type { Faq } from "@/lib/schema";

export interface CityPageData {
  slug: string;
  city: string;
  published: boolean;
  lastmod: string;
  seoTitle: string;
  seoDescription: string;
  heroSubtitle: string;
  /** Rich text (see components/RichText). The first paragraph answers "who/where/how to reach". */
  body: string;
  /** Service slugs to feature, most-requested first (top 4 are linked). */
  topServices: string[];
  faqs: Faq[];
}

export const cityPages: CityPageData[] = [
  {
    slug: "plumber-la-mesa",
    city: "La Mesa",
    published: true,
    lastmod: "2026-10-08",
    seoTitle: "Plumber in La Mesa, CA | NTP Plumbing",
    seoDescription:
      "Licensed plumber serving La Mesa, CA from El Cajon, about 4 miles east. Drain and sewer repair, water heaters, slab leaks. 24/7: (619) 550-7371.",
    heroSubtitle: "Licensed plumbing for La Mesa homes, from the Village to Lake Murray",
    body: `
NTP Plumbing is a licensed plumber serving La Mesa, CA from our office at 270 E Douglas Ave in El Cajon, about 4 miles east of La Mesa Village. Most of La Mesa is a 10–15 minute drive for us along I-8 or Fletcher Parkway, and we answer the phone 24/7 at (619) 550-7371.

## Where we work in La Mesa

We take calls from every part of La Mesa: **La Mesa Village** and the streets around downtown, the **Grossmont** area near Grossmont Center, **Lake Murray**, the neighborhoods north of I-8 along Fletcher Parkway, and the hillside streets on the La Mesa side of **Mount Helix**. Zip codes 91941 and 91942.

## La Mesa homes and their plumbing

La Mesa is one of East County's older cities. It was incorporated in 1912, and much of its housing was built in the decades after World War II, with some older homes closer to the Village. That age shows up in the plumbing:

- **Clay and cast iron sewer laterals.** Many original sewer lines in La Mesa are vitrified clay or cast iron. Decades of root growth from established street and yard trees, plus shifting soil on hilly lots, lead to cracked joints, root intrusion, and recurring main line backups.
- **Galvanized water lines** in some of the oldest homes, which narrow from internal corrosion and cause low pressure and rusty water.
- **Copper under slab foundations** in mid-century homes, where pinhole leaks eventually develop. A rising water bill or a warm spot on the floor is the usual first sign.
- **Hard water**, the same as everywhere in San Diego County, shortens water heater life and wears out faucet cartridges and toilet parts faster than you'd expect.
- **Steep lots and long drain runs** around Lake Murray and Mount Helix make a camera inspection especially useful before any sewer repair, so the dig, if there is one, is in the right place.

## What La Mesa homeowners call us for most

1. **[Drain cleaning and hydro jetting](/services/drain-cleaning-hydro-jetting)**: kitchen line grease and main lines blocked by roots.
2. **[Sewer line repair and replacement](/services/sewer-line-repair)**: camera inspection, then a sectional repair, liner, or replacement of aging clay pipe.
3. **[Water heater repair and replacement](/services/water-heater-repair)**: no hot water, leaking tanks, and code updates when a garage heater is replaced.
4. **[Leak detection and slab leak repair](/services/leak-detection)**: finding hidden leaks before opening floors or walls.

## A recent job in La Mesa

{{TODO: recent job in La Mesa (neighborhood, problem, what NTP did, outcome; photo if available)}}

## Buying an older home in La Mesa?

If you're under contract on a pre-1970s home in La Mesa, a sewer camera inspection before closing is one of the best-value checks you can make. Standard home inspections usually don't run a camera down the sewer lateral, and replacing a failed clay line is a significant expense. Knowing its condition upfront gives you room to negotiate.`,
    topServices: ["drain-cleaning-hydro-jetting", "sewer-line-repair", "water-heater-repair", "leak-detection"],
    faqs: [
      {
        q: "Do you serve all of La Mesa?",
        a: "Yes. NTP Plumbing serves all of La Mesa (zip codes 91941 and 91942) from our El Cajon office about 4 miles away, including La Mesa Village, Grossmont, Lake Murray, and the Mount Helix area.",
      },
      {
        q: "Why do older La Mesa homes get so many sewer backups?",
        a: "Many have original clay or cast iron sewer laterals. Clay pipe has joints every few feet that roots can enter, and cast iron corrodes and scales inside. A camera inspection shows which problem you have and whether cleaning, a liner, or a repair is the right fix.",
      },
      {
        q: "Are you available for emergencies in La Mesa at night?",
        a: "Yes. NTP Plumbing answers emergency calls 24/7, including weekends and holidays. Call (619) 550-7371.",
      },
    ],
  },
  {
    slug: "plumber-santee",
    city: "Santee",
    published: true,
    lastmod: "2026-10-08",
    seoTitle: "Plumber in Santee, CA | NTP Plumbing",
    seoDescription:
      "Licensed plumber serving Santee, CA, about 3 miles north of our El Cajon office. Water heaters, slab leaks, drains, backflow. 24/7: (619) 550-7371.",
    heroSubtitle: "Licensed plumbing for Santee homes, from Carlton Hills to Sky Ranch",
    body: `
NTP Plumbing is a licensed plumber serving Santee, CA from our office at 270 E Douglas Ave in El Cajon, about 3 miles south of Santee Town Center. Santee is one of the closest communities to our shop, a short drive up Magnolia Avenue or SR-67, and we're available 24/7 at (619) 550-7371.

## Where we work in Santee

All of Santee (zip code 92071): **Carlton Hills**, **Carlton Oaks**, **Sky Ranch**, the neighborhoods around **Santee Town Center** and **Santee Lakes**, the streets along the **San Diego River** corridor, and the newer developments on Santee's north side.

## Santee homes and their plumbing

Santee grew quickly from the 1960s through the 1980s, and that era still makes up a large share of its housing, alongside newer developments and a number of manufactured-home communities. Homes from those decades tend to share a set of problems:

- **Water heaters past their prime.** Many Santee homes are on their second or third water heater, and San Diego County's hard water wears tanks out faster than the label suggests. Popping noises, rusty hot water, or a damp spot under the tank are all signs it's time to look at replacement.
- **Slab leaks.** Most Santee homes sit on concrete slabs with copper water lines underneath. After 40–50 years, those lines can develop pinhole leaks. A warm floor, a meter that moves with everything off, or a jump in your water bill are the usual clues.
- **Plastic supply pipe from the 1980s–1990s.** Some homes and manufactured homes from this period were plumbed with polybutylene, which is known for failing at fittings.
- **Irrigation backflow devices.** Many Santee yards and HOA common areas have irrigation systems with backflow assemblies that need annual testing, per your water agency's notice.

## What Santee homeowners call us for most

1. **[Water heater repair and replacement](/services/water-heater-repair)**: repairs, tank replacements, and code updates.
2. **[Leak detection and slab leak repair](/services/leak-detection)**: pinpointing leaks under slabs and in walls before anything is opened.
3. **[Drain cleaning](/services/drain-cleaning-hydro-jetting)**: kitchen lines, bathroom drains, and main line clogs.
4. **[Backflow testing](/services/backflow-testing)**: annual tests with the report filed to your water agency.

## A recent job in Santee

{{TODO: recent job in Santee (neighborhood, problem, what NTP did, outcome; photo if available)}}

## Considering tankless?

If your Santee home's water heater is due for replacement, it's a good time to weigh a [tankless water heater](/services/tankless-water-heaters). We'll check your gas supply and venting and give you an honest comparison with a standard tank, including how San Diego's hard water affects maintenance on both.`,
    topServices: ["water-heater-repair", "leak-detection", "drain-cleaning-hydro-jetting", "backflow-testing"],
    faqs: [
      {
        q: "How far is NTP Plumbing from Santee?",
        a: "Our office at 270 E Douglas Ave in El Cajon is about 3 miles south of Santee Town Center, which makes Santee one of the closest communities we serve.",
      },
      {
        q: "Do you test backflow devices in Santee?",
        a: "Yes. We test, repair, and install backflow prevention assemblies for Santee homes, HOAs, and businesses, and file the test report your water agency requires.",
      },
      {
        q: "Do you offer emergency plumbing in Santee?",
        a: "Yes. NTP Plumbing is available 24/7 for emergencies in Santee, including burst pipes, sewer backups, and leaking water heaters. Call (619) 550-7371.",
      },
    ],
  },
  {
    slug: "plumber-lakeside",
    city: "Lakeside",
    published: true,
    lastmod: "2026-10-08",
    seoTitle: "Plumber in Lakeside, CA | NTP Plumbing",
    seoDescription:
      "Licensed plumber serving Lakeside, CA, about 5 miles from our El Cajon office. Septic and sewer lines, water heaters, backflow. 24/7: (619) 550-7371.",
    heroSubtitle: "Plumbing for Lakeside homes, ranches, and rural properties",
    body: `
NTP Plumbing is a licensed plumber serving Lakeside, CA from our office at 270 E Douglas Ave in El Cajon, about 5 miles south-southwest of Lakeside's town center on Maine Avenue. We're a quick run up SR-67, and we answer calls 24/7 at (619) 550-7371.

## Where we work in Lakeside

The whole Lakeside area (zip code 92040): the **town center** around Maine Avenue, **Winter Gardens**, **Eucalyptus Hills**, **Blossom Valley**, the area around **Lake Jennings**, and nearby **Flinn Springs**. That includes larger lots, ranch and horse properties, and homes well off the main roads.

## Lakeside properties and their plumbing

Lakeside isn't a typical suburban tract, and its plumbing reflects that:

- **Septic systems.** Many properties in Lakeside's more rural areas aren't connected to a public sewer. Clogs and backups often trace to the line between the house and the septic tank: roots, a sagging section, or a broken pipe. We clear and camera-inspect those lines. {{TODO: confirm NTP's scope on septic properties (line only vs. tank work)}}
- **Long service lines.** Larger lots mean long water service lines and long sewer or septic runs. Leaks in a long buried water line often show up first as a higher bill or a wet patch in the yard.
- **Wells and irrigation.** Properties with a private well, agricultural water use, or large irrigation systems often need backflow prevention assemblies tested annually, as required by the water agency.
- **Hard water.** Lakeside's water is hard like the rest of the county. On top of that, properties with older well systems can see extra mineral content, which is hard on water heaters and fixtures.
- **Older homes in the town center**, with the same aging cast iron, clay, and galvanized pipe we see throughout East County.

## What Lakeside homeowners call us for most

1. **[Sewer and septic line repair](/services/sewer-line-repair)**: camera inspection and repair of the line from the house to the street or tank.
2. **[Drain cleaning](/services/drain-cleaning-hydro-jetting)**: main line clogs and slow drains, including on septic properties.
3. **[Water heater repair and replacement](/services/water-heater-repair)**.
4. **[Backflow testing](/services/backflow-testing)** for wells, irrigation, and agricultural connections.

## A recent job in Lakeside

{{TODO: recent job in Lakeside (area, problem, what NTP did, outcome; photo if available)}}

## Know where your shutoffs are

On a large property, finding the main water shutoff in an emergency can take time you don't have. Locate it now. It's usually where the line enters the house, plus a valve at the meter or well. Make sure everyone in the household knows where it is. If yours is seized or missing, we can replace it.`,
    topServices: ["sewer-line-repair", "drain-cleaning-hydro-jetting", "water-heater-repair", "backflow-testing"],
    faqs: [
      {
        q: "Do you work on properties with septic systems in Lakeside?",
        a: "Yes. We clear, camera-inspect, and repair the drain line from the house to the septic tank. Many backups on septic properties start in that line rather than in the tank itself.",
      },
      {
        q: "Do you serve rural parts of Lakeside like Blossom Valley and Eucalyptus Hills?",
        a: "Yes. NTP Plumbing serves the whole Lakeside area, including Winter Gardens, Eucalyptus Hills, Blossom Valley, Lake Jennings, and Flinn Springs.",
      },
      {
        q: "Is NTP Plumbing available 24/7 in Lakeside?",
        a: "Yes. Call (619) 550-7371 any time for plumbing emergencies in Lakeside.",
      },
    ],
  },
  {
    slug: "plumber-spring-valley",
    city: "Spring Valley",
    published: true,
    lastmod: "2026-10-08",
    seoTitle: "Plumber in Spring Valley, CA | NTP Plumbing",
    seoDescription:
      "Licensed plumber serving Spring Valley, CA, about 4 miles from our El Cajon office. Sewer lines, drains, leaks, water heaters. 24/7: (619) 550-7371.",
    heroSubtitle: "Licensed plumbing for Spring Valley and La Presa homes",
    body: `
NTP Plumbing is a licensed plumber serving Spring Valley, CA from our office at 270 E Douglas Ave in El Cajon, about 4 miles northeast of central Spring Valley. We reach most of Spring Valley in minutes via SR-94 or Jamacha Road, and we're available 24/7 at (619) 550-7371.

## Where we work in Spring Valley

All of Spring Valley (zip codes 91977 and 91978): **La Presa**, the neighborhoods around **Dictionary Hill**, the **Sweetwater** area, the streets off **Jamacha Boulevard** and **Campo Road**, and the neighboring communities of **Casa de Oro** and **Mount Helix**.

## Spring Valley homes and their plumbing

Spring Valley is an unincorporated community, and much of its housing went up between the 1950s and 1970s, a lot of it on hillside lots. Common plumbing problems we see there:

- **Aging sewer laterals.** Original clay and cast iron sewer lines, many now 50+ years old, crack, shift, and let roots in. On hillside lots, a sewer lateral can be long and deep, so a camera inspection before any repair is essential.
- **Drain lines under the house.** Cast iron drain lines inside older homes scale up and eventually crack. Recurring clogs in the same fixture are often the first sign.
- **Galvanized and aging copper supply lines**, causing low pressure, discolored water, and leaks under slabs.
- **Hard water**, which wears out water heaters and faucet parts early.

## What Spring Valley homeowners call us for most

1. **[Sewer line repair and replacement](/services/sewer-line-repair)**: from sectional repairs to full replacement of old clay laterals.
2. **[Drain cleaning and hydro jetting](/services/drain-cleaning-hydro-jetting)**: main line clogs and recurring kitchen and bathroom backups.
3. **[Leak detection](/services/leak-detection)**: slab leaks and hidden wall leaks found before anything is opened.
4. **[Water heater repair and replacement](/services/water-heater-repair)**.

## A recent job in Spring Valley

{{TODO: recent job in Spring Valley (neighborhood, problem, what NTP did, outcome; photo if available)}}

## Sewer lateral responsibility in Spring Valley

In unincorporated areas like Spring Valley, the sewer system is run by a county or district agency rather than a city. As in most of San Diego County, the homeowner is generally responsible for the private sewer lateral from the house to the public main. The details of who owns the connection vary, so check with your sewer agency if a problem is near the street. We can locate and camera-inspect the line to show exactly where the damage is.`,
    topServices: ["sewer-line-repair", "drain-cleaning-hydro-jetting", "leak-detection", "water-heater-repair"],
    faqs: [
      {
        q: "Do you serve La Presa and Casa de Oro?",
        a: "Yes. NTP Plumbing serves all of Spring Valley including La Presa, plus neighboring Casa de Oro and Mount Helix, from our El Cajon office about 4 miles away.",
      },
      {
        q: "Who is responsible for a broken sewer line in Spring Valley?",
        a: "Generally the homeowner is responsible for the private sewer lateral from the house to the public main. Exactly where responsibility ends at the street varies by agency, so check with your sewer provider. A camera inspection shows where the damage is.",
      },
      {
        q: "Can you come out at night in Spring Valley?",
        a: "Yes. NTP Plumbing answers emergency calls 24/7. Call (619) 550-7371.",
      },
    ],
  },
  {
    slug: "plumber-rancho-san-diego",
    city: "Rancho San Diego",
    published: true,
    lastmod: "2026-10-08",
    seoTitle: "Plumber in Rancho San Diego, CA | NTP Plumbing",
    seoDescription:
      "Licensed plumber serving Rancho San Diego, about 3.5 miles from our El Cajon office. Water heaters, tankless, leaks, repairs. 24/7: (619) 550-7371.",
    heroSubtitle: "Plumbing for Rancho San Diego homes as they reach their first major replacements",
    body: `
NTP Plumbing is a licensed plumber serving Rancho San Diego, CA from our office at 270 E Douglas Ave in El Cajon, about 3.5 miles north-northwest of Rancho San Diego. It's a short drive down Jamacha Road, and we answer calls 24/7 at (619) 550-7371.

## Where we work in Rancho San Diego

All of Rancho San Diego (zip codes 91978 and parts of 92019): the neighborhoods along **Jamacha Road** and **Avocado Boulevard**, the area around **Cuyamaca College**, **Steele Canyon**, and the communities bordering **Jamul** and **Spring Valley**.

## Rancho San Diego homes and their plumbing

Rancho San Diego is newer than most of East County. Much of it was built from the 1980s onward, often in planned communities with HOAs. That means different problems than the 1950s homes in El Cajon and La Mesa:

- **Original systems reaching replacement age.** Homes built 30–40 years ago are now replacing water heaters, supply valves, and fixtures that have been in service since construction, and hard water has worn many of them down faster.
- **Plastic supply pipe.** Some homes built in the 1980s to the mid-1990s were plumbed with polybutylene, a gray plastic pipe known for failing at its fittings. If you're not sure what you have, we can tell you.
- **Copper pinhole leaks.** Copper supply lines can develop pinhole leaks over time, sometimes under the slab, where the first sign is a water bill that won't come down.
- **Tankless upgrades.** When a tank water heater fails, many Rancho San Diego homeowners weigh switching to tankless. Larger homes with several bathrooms are often good candidates.
- **Irrigation backflow.** Landscaped yards and HOA common areas often have backflow assemblies that need annual testing.

## What Rancho San Diego homeowners call us for most

1. **[Water heater repair and replacement](/services/water-heater-repair)**: replacing original and second-generation tanks.
2. **[Tankless water heater installation](/services/tankless-water-heaters)**: conversions, sizing, and descaling.
3. **[Leak detection](/services/leak-detection)**: slab and wall leaks found without unnecessary demolition.
4. **[Faucet, toilet, and fixture repair](/services/fixture-installation-repair)**: cartridges, fill valves, and fixture upgrades.

## A recent job in Rancho San Diego

{{TODO: recent job in Rancho San Diego (neighborhood, problem, what NTP did, outcome; photo if available)}}

## HOA and remodel work

Planning a kitchen or bath remodel in an HOA community? Check your HOA's approval requirements for exterior work, such as a tankless water heater mounted outside, before scheduling. We're happy to provide equipment specs for your application.`,
    topServices: ["water-heater-repair", "tankless-water-heaters", "leak-detection", "fixture-installation-repair"],
    faqs: [
      {
        q: "Does my Rancho San Diego home have polybutylene pipe?",
        a: "Some homes built from the late 1970s to the mid-1990s used polybutylene, a flexible gray plastic supply pipe often stamped 'PB2110'. Check exposed pipe at the water heater or under sinks, or have a plumber take a look.",
      },
      {
        q: "Is a tankless water heater a good fit for a Rancho San Diego home?",
        a: "Often, especially in larger homes that run out of hot water. A tankless conversion usually needs gas line and venting changes, so get a sizing check before choosing a unit. Hard water also means annual descaling.",
      },
      {
        q: "How quickly can you get to Rancho San Diego?",
        a: "Our El Cajon office is about 3.5 miles away. For emergencies, call (619) 550-7371 any time, 24/7.",
      },
    ],
  },
];

export function getCityPage(slug: string): CityPageData | undefined {
  return cityPages.find((c) => c.slug === slug);
}

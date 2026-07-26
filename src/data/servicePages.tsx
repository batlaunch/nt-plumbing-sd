import { Droplets, Flame, Search, ShowerHead, CircleDot, Zap, type LucideIcon } from "lucide-react";

export interface ServicePageData {
  slug: string;
  icon: LucideIcon;
  navTitle: string;
  cardDesc: string;
  title: string;
  heroSubtitle: string;
  heroImage: { src: string; width: number; height: number; alt: string };
  seoTitle: string;
  seoDescription: string;
  intro: string;
  includes: string[];
  whyPoints: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

export const servicePages: ServicePageData[] = [
  {
    slug: "drain-cleaning-hydro-jetting",
    icon: Droplets,
    navTitle: "Drain Cleaning & Hydro Jetting",
    cardDesc: "Hydro jetting and drain clearing for stubborn clogs and buildups.",
    title: "Drain Cleaning & Hydro Jetting",
    heroSubtitle: "Fast, Thorough Clog Removal Across Greater San Diego",
    heroImage: {
      src: "/images/gallery/5nkn7xgWq7pKxh7_ymzcNw-o.webp",
      width: 750,
      height: 1000,
      alt: "NTP Plumbing hydro jetting a clogged drain line in Greater San Diego, CA",
    },
    seoTitle: "Drain Cleaning & Hydro Jetting in San Diego, CA | NTP Plumbing",
    seoDescription: "Professional drain cleaning and hydro jetting in Greater San Diego. Clear stubborn clogs, grease buildup, and tree root intrusions fast. Available 24/7.",
    intro:
      "A slow or backed-up drain is rarely just an inconvenience — left alone, it can turn into a full line blockage or a burst pipe. NTP Plumbing clears drains using professional-grade equipment, and for tougher buildup — grease, scale, or tree roots — we bring in hydro jetting, which uses high-pressure water to scour the inside of the pipe clean rather than just punching a hole through the clog.",
    includes: [
      "Kitchen and bathroom drain clearing",
      "Main line and sewer line clogs",
      "Hydro jetting for grease buildup and tree root intrusion",
      "Diagnosis of recurring or repeat clogs",
      "Preventive drain maintenance",
    ],
    whyPoints: [
      { title: "Right Tool for the Clog", text: "Simple clogs get cleared with a snake; stubborn grease or roots get hydro jetted — we don't guess, we diagnose first." },
      { title: "Protects Older Pipes", text: "Hydro jetting pressure is calibrated to the line, so it clears buildup without damaging aging pipe material." },
      { title: "Available 24/7", text: "A backed-up main line doesn't wait for business hours, and neither do we." },
    ],
    faqs: [
      { q: "What is hydro jetting?", a: "Hydro jetting uses a high-pressure water stream to scour the full interior of a drain or sewer line, removing grease, scale, and root intrusion rather than just breaking a path through the clog like a standard snake." },
      { q: "Is hydro jetting safe for older pipes?", a: "Yes, when done correctly. We assess the pipe material and condition first and adjust pressure accordingly." },
      { q: "How do I know if I need hydro jetting instead of regular drain cleaning?", a: "Recurring clogs in the same spot, slow drains throughout the house, or gurgling sounds are all signs of buildup that a standard snake may not fully clear. We can diagnose this with a camera inspection if needed." },
    ],
  },
  {
    slug: "water-heater-repair",
    icon: Flame,
    navTitle: "Water Heater Installation & Repair",
    cardDesc: "Installation, repair, and replacement of all water heater types.",
    title: "Water Heater Installation & Repair",
    heroSubtitle: "Tank & Tankless Water Heaters, Installed and Repaired Right",
    heroImage: {
      src: "/images/gallery/NqNt8yyl-XcxU0kM5Q3aoA-o.webp",
      width: 750,
      height: 1000,
      alt: "NTP Plumbing water heater installation and repair in Greater San Diego, CA",
    },
    seoTitle: "Water Heater Installation & Repair in San Diego, CA | NTP Plumbing",
    seoDescription: "Tank and tankless water heater installation, repair, and replacement in Greater San Diego. No hot water? NTP Plumbing responds 24/7.",
    intro:
      "No hot water is one of the most common calls we get — and one of the most urgent. NTP Plumbing installs and repairs both traditional tank and tankless water heaters, and diagnoses issues like pilot light failures, leaking tanks, and inconsistent temperature before recommending a repair or replacement.",
    includes: [
      "Tank water heater installation and replacement",
      "Tankless water heater installation",
      "Water heater repair and diagnostics",
      "Pilot light, thermostat, and heating element issues",
      "Leaking or rusted tank replacement",
      "Routine water heater maintenance and flushing",
    ],
    whyPoints: [
      { title: "Tank or Tankless", text: "We'll walk you through the tradeoffs for your household size and usage before you decide." },
      { title: "Same-Day Response", text: "A leaking or failed water heater is treated as the emergency it is." },
      { title: "Upfront Pricing", text: "You'll know the cost before any work starts — no surprises." },
    ],
    faqs: [
      { q: "Tank vs. tankless — which is right for me?", a: "Tank water heaters cost less upfront and are simpler to service. Tankless units cost more initially but take up less space and provide continuous hot water. We can help you weigh the tradeoffs for your household." },
      { q: "My water heater is leaking — is that an emergency?", a: "Yes. A leaking tank can fail completely or cause water damage. Call us right away and shut off the water supply to the unit if you're able to." },
      { q: "How long does a water heater installation take?", a: "A standard tank replacement is typically completed same-day. Tankless installations can take longer depending on venting and gas line requirements." },
      { q: "Do you repair both gas and electric water heaters?", a: "Yes, we service both gas and electric tank and tankless units." },
    ],
  },
  {
    slug: "leak-detection",
    icon: Search,
    navTitle: "Leak Detection",
    cardDesc: "Advanced camera and line locating technology to find hidden leaks.",
    title: "Leak Detection",
    heroSubtitle: "Find Hidden Leaks Before They Become Bigger Problems",
    heroImage: {
      src: "/images/gallery/mdd_JtWbfytG7Ctffbh5UQ-o.webp",
      width: 750,
      height: 1000,
      alt: "NTP Plumbing leak detection equipment used on a job in Greater San Diego, CA",
    },
    seoTitle: "Leak Detection in San Diego, CA | NTP Plumbing",
    seoDescription: "Hidden leak behind a wall, under a slab, or in the yard? NTP Plumbing uses non-invasive leak detection to find it fast, without tearing up your property.",
    intro:
      "Not every leak announces itself with a puddle. A rising water bill, a warm spot on the floor, or the sound of running water when nothing's on are all signs of a hidden leak — behind a wall, under a slab, or underground. NTP Plumbing uses leak detection equipment to pinpoint the source before any repair work begins, so we're not guessing where to dig or cut.",
    includes: [
      "Slab leak detection",
      "Hidden wall and ceiling leak detection",
      "Underground and yard line leak detection",
      "Investigation of unexplained water bill increases",
      "Non-invasive electronic detection methods",
      "Leak repair once the source is confirmed",
    ],
    whyPoints: [
      { title: "Find It Before You Dig", text: "We locate the leak precisely first, which means less demolition and a faster, cheaper repair." },
      { title: "Experienced Diagnosis", text: "20+ years of finding leaks other plumbers couldn't track down." },
      { title: "Available 24/7", text: "A slab leak can cause real damage the longer it runs — we respond fast." },
    ],
    faqs: [
      { q: "What are the signs of a hidden leak?", a: "A higher-than-usual water bill, the sound of running water with everything off, warm or damp spots on the floor, or a musty smell are all common signs." },
      { q: "Can you find a leak without tearing up my floor or yard?", a: "In most cases, yes. We use non-invasive detection methods to narrow down the leak's location before any digging or cutting happens." },
      { q: "How much does leak detection cost?", a: "It depends on the scope of the search. Contact us for a free estimate based on your situation." },
    ],
  },
  {
    slug: "fixture-installation-repair",
    icon: ShowerHead,
    navTitle: "Fixture Installation & Repair",
    cardDesc: "Installation and repair of bathtubs, faucets, and garbage disposals.",
    title: "Fixture Installation & Repair",
    heroSubtitle: "Bathtubs, Faucets, and Garbage Disposals — Installed & Repaired",
    heroImage: {
      src: "/images/gallery/de4SMRc925ShmJz4-M7jLg-o.webp",
      width: 750,
      height: 1000,
      alt: "NTP Plumbing bathtub installation in Greater San Diego, CA",
    },
    seoTitle: "Bathtub, Faucet & Garbage Disposal Repair in San Diego, CA | NTP Plumbing",
    seoDescription: "Bathtub, faucet, and garbage disposal installation and repair in Greater San Diego. Licensed, insured, and available 24/7.",
    intro:
      "From a dripping faucet to a full bathtub replacement, NTP Plumbing handles fixture work of every size. We install and repair bathtubs, faucets, and garbage disposals for all makes and models, and we'll always let you know if a repair is a better call than a replacement.",
    includes: [
      "Bathtub installation and repair, all types and sizes",
      "Faucet installation, repair, and replacement",
      "Garbage disposal installation, repair, and replacement",
      "Toilet repair",
      "Shower fixture replacement",
    ],
    whyPoints: [
      { title: "Repair or Replace — Your Call", text: "We'll tell you honestly when a repair makes sense versus when replacement is the better value." },
      { title: "All Makes & Models", text: "From standard fixtures to higher-end brands, we've installed and repaired them all." },
      { title: "Clean, Careful Work", text: "Fixture work happens inside your home — we treat it that way." },
    ],
    faqs: [
      { q: "My faucet is dripping — is that worth fixing or should I replace it?", a: "Often a drip is a worn washer or cartridge and a quick repair. If the fixture is old or the body itself is damaged, replacement may be more cost-effective long term. We'll tell you which applies to your situation." },
      { q: "Do you install garbage disposals?", a: "Yes, we install, repair, and replace garbage disposal units of all major brands." },
      { q: "Can you replace a bathtub without a full remodel?", a: "In many cases, yes — we can swap a tub without tearing out surrounding tile or walls, depending on the setup." },
    ],
  },
  {
    slug: "sewer-line-repair",
    icon: CircleDot,
    navTitle: "Sewer Line Repair & Camera Inspection",
    cardDesc: "Trenchless sewer liner repairs — full liners and sectional liners.",
    title: "Sewer Line Repair & Camera Inspection",
    heroSubtitle: "Trenchless Sewer Repair & Camera Diagnostics",
    heroImage: {
      src: "/images/gallery/sRqEsIZfvz9Z3s-AOUXfpQ-o.webp",
      width: 1000,
      height: 750,
      alt: "NTP Plumbing sewer camera inspection equipment used in Greater San Diego, CA",
    },
    seoTitle: "Sewer Line Repair & Camera Inspection in San Diego, CA | NTP Plumbing",
    seoDescription: "Sewer camera inspection, line locating, and trenchless sewer liner repair in Greater San Diego. Diagnose and fix sewer line problems without full excavation.",
    intro:
      "Sewer line problems are hard to diagnose from the surface — that's why we start with a camera. NTP Plumbing runs a camera down the line to see exactly what's wrong and where, then repairs it using trenchless sewer liner technology where possible, which restores the pipe from the inside without digging up your yard or driveway.",
    includes: [
      "Sewer camera inspection",
      "Sewer line locating",
      "Trenchless sewer liner installation (full liners)",
      "Sectional point repairs for localized damage",
      "Root intrusion repair",
      "Pre-purchase sewer line inspections",
    ],
    whyPoints: [
      { title: "See Before We Dig", text: "Camera inspection tells us exactly what's wrong before we recommend any repair." },
      { title: "Trenchless When Possible", text: "Relining a damaged section from the inside means no full excavation of your yard or driveway." },
      { title: "Full Liners or Sectional Repairs", text: "We match the repair to the actual damage instead of defaulting to the most expensive option." },
    ],
    faqs: [
      { q: "What is trenchless sewer repair?", a: "Trenchless repair relines the inside of a damaged sewer pipe with a new liner, restoring it without digging a trench along the full length of the line. It's faster and less disruptive than traditional excavation for many types of damage." },
      { q: "Do I need a full liner or just a sectional repair?", a: "It depends on how much of the line is damaged. A camera inspection tells us whether the problem is localized (sectional repair) or spans a longer section (full liner)." },
      { q: "Can you inspect a sewer line before I buy a house?", a: "Yes, we offer camera inspections for pre-purchase due diligence." },
    ],
  },
  {
    slug: "backflow-testing",
    icon: Zap,
    navTitle: "Backflow Testing",
    cardDesc: "Certified backflow prevention testing and device installation.",
    title: "Backflow Testing",
    heroSubtitle: "Certified Backflow Prevention Testing & Device Installation",
    heroImage: {
      src: "/images/gallery/IuIF4tRLC6oBwHO9x4mR5g-o.webp",
      width: 750,
      height: 1000,
      alt: "NTP Plumbing backflow prevention device testing in Greater San Diego, CA",
    },
    seoTitle: "Backflow Testing in San Diego, CA | NTP Plumbing",
    seoDescription: "Certified backflow prevention testing and device installation in Greater San Diego. Keep your property compliant and your water supply protected.",
    intro:
      "Backflow prevention devices keep contaminated water from flowing back into the clean water supply — and most water agencies require annual testing to confirm they're working. NTP Plumbing tests, installs, and repairs backflow prevention devices for residential and commercial properties across Greater San Diego.",
    includes: [
      "Annual backflow prevention device testing",
      "Backflow device installation",
      "Test report submission to water agencies where required",
      "Repair and replacement of faulty devices",
    ],
    whyPoints: [
      { title: "Stay Compliant", text: "We handle the testing and reporting so you don't have to track deadlines yourself." },
      { title: "Residential & Commercial", text: "We test and service backflow devices for homes and businesses alike." },
      { title: "Fast Turnaround", text: "We know these tests often have a compliance deadline attached — we work around it." },
    ],
    faqs: [
      { q: "What is a backflow prevention device?", a: "It's a device that stops water from flowing backward into the public water supply, which could otherwise let contaminants enter the clean water system." },
      { q: "Why does my backflow device need annual testing?", a: "Most local water agencies require yearly testing to confirm the device is functioning correctly and to keep your property in compliance." },
      { q: "What happens if my backflow device fails the test?", a: "We'll let you know what's needed — sometimes a repair, sometimes a full device replacement — and can typically handle it during the same visit." },
    ],
  },
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((s) => s.slug === slug);
}

import { whyNtp, type ServiceContent } from "./types";

export const backflowTesting: ServiceContent = {
  slug: "backflow-testing",
  published: true,
  lastmod: "2026-10-08",
  navTitle: "Backflow Testing & Certification",
  cardDesc: "Annual backflow tests, repairs, and device installation, with results filed with your water agency.",
  title: "Backflow Testing & Certification in El Cajon",
  heroSubtitle: "Annual backflow tests, repairs, and new assemblies for homes and businesses",
  heroPhoto: "pressure-regulator-main-shutoff-installation",
  seoTitle: "Backflow Testing & Certification in El Cajon | NTP Plumbing",
  seoDescription:
    "Annual backflow testing, certification, repair and installation in El Cajon and East County. Test reports filed with your water agency. (619) 550-7371.",
  serviceType: "Backflow prevention assembly testing, certification and repair",
  quickAnswer:
    "NTP Plumbing tests, repairs, and installs backflow prevention assemblies for homes and businesses in El Cajon and East County San Diego, and handles the test report your water agency requires. If you've received an annual backflow test notice, call (619) 550-7371 and we'll schedule the test before your deadline.",
  sections: [
    {
      heading: "Do you need a backflow test?",
      body: `
A backflow prevention assembly is a valve that stops water from your property from flowing backward into the public water supply. That protects drinking water from things like fertilizer in irrigation lines or chemicals in a commercial system. You probably have one if your property has:

- **A landscape irrigation system** connected to the potable water supply.
- **A fire sprinkler system.**
- **A commercial or industrial water use**: restaurants, medical and dental offices, car washes, and similar.
- **A second water source**, such as a well or recycled water, on the same property.
- **A pool, spa, or boiler** with an auto-fill connection, depending on how it's plumbed.

Testing requirements are set by your local water agency (for example, Helix Water District, Padre Dam Municipal Water District, or Otay Water District, depending on where you live). If your property has an assembly that requires testing, your water agency will typically mail you a notice with a due date. When in doubt, check with your water district directly. They have the official record of what's required at your address. Our guide to [backflow testing requirements in San Diego County](/blog/backflow-testing-requirements-san-diego) explains more.`,
    },
    {
      heading: "Backflow testing in El Cajon: how it works",
      body: `
1. **Schedule before your deadline.** Send us the notice from your water agency, or just the address and device location.
2. **Test the assembly.** A certified tester uses a calibrated differential pressure gauge to check that each check valve and relief valve holds and opens at the right pressures. Water is briefly shut off during the test, usually a short interruption.
3. **Report the results.** We complete the test report and submit it to your water agency as required, and you get a copy for your records.
4. **Repair if it fails.** A failed assembly usually needs new internal parts (rubber checks, springs, seats) or occasionally a full replacement. We'll explain what failed, repair it, and retest.

**Tester certification:** {{TODO: NTP's backflow tester certification number and certifying body, plus which water agencies NTP is an approved tester with}}`,
    },
    {
      heading: "Backflow device installation and repair",
      body: `
We also install new backflow assemblies when one is required, for example after adding an irrigation system, or when an old device is beyond repair. The common assembly types are:

- **Reduced pressure principle assemblies (RP)**, used for higher-hazard connections.
- **Double check valve assemblies (DC)**, used for lower-hazard connections such as many fire systems.
- **Pressure vacuum breakers (PVB)**, common on residential irrigation systems.

Which type is required is set by your water agency based on the hazard. We'll confirm the right device before installing.`,
    },
    {
      heading: "Cost of backflow testing in El Cajon",
      body: `
Backflow testing is typically a flat fee per assembly. Things that change the total:

- **The number of assemblies** on the property.
- **Device type and size.**
- **Whether the device passes**, or needs repair parts and a retest.
- **Report filing** with your water agency. {{TODO: confirm whether the filing fee, if any, is included}}

Typical ranges: annual backflow test {{TODO: price per device}}, repair kit and retest {{TODO: price range}}, new assembly installation {{TODO: price range}}. Ask about testing multiple properties or devices at once.`,
    },
    {
      heading: "Why homeowners and businesses in East County call NTP",
      body: whyNtp(
        [
          "**We handle the paperwork.** Testing, reporting, and repairs in one visit where possible, so you're not juggling deadlines.",
          "**Residential and commercial.** Single-family irrigation devices through commercial assemblies.",
        ],
        "backflow repairs and installations",
      ),
    },
    {
      heading: "Backflow in East County",
      body: `
East County properties often have large irrigated yards, hillside landscaping, and rural lots with wells or agricultural water use. All of these can involve backflow prevention requirements. Commercial strips along Main Street, Broadway, and Fletcher Parkway include many restaurants and medical offices with assemblies that must be tested annually.

Annual testing exists because these valves are mechanical: rubber seals harden, springs weaken, and debris can hold a check valve open. San Diego County's hard water speeds that wear. A device that looks fine from the outside can fail a test, which is exactly why agencies require a yearly check.`,
    },
  ],
  faqs: [
    {
      q: "How often does a backflow device need to be tested in San Diego County?",
      a: "Most water agencies require testable backflow assemblies to be tested at least once a year, and after installation or repair. Your water district sets the exact requirement and will usually mail a notice with the due date.",
    },
    {
      q: "Who needs backflow testing?",
      a: "Properties with a testable backflow prevention assembly, which commonly protects irrigation systems, fire sprinklers, commercial water uses, and properties with a well or recycled water. Your water agency keeps the official record of which devices at your address require testing.",
    },
    {
      q: "What happens if my backflow device fails the test?",
      a: "It needs to be repaired or replaced and then retested, and the results reported to your water agency. Most failures are fixed with replacement internal parts during the same visit.",
    },
    {
      q: "Does the water get shut off during a backflow test?",
      a: "Yes, briefly. Water to the protected line is shut off while the assembly is tested, usually a short interruption.",
    },
    {
      q: "What happens if I miss my backflow test deadline?",
      a: "Water agencies can follow up with reminders, fees, or, in some cases, suspension of service until the test is completed. Policies vary by district, so if you're past due, schedule the test and contact your agency.",
    },
  ],
  related: ["leak-detection", "sewer-line-repair", "fixture-installation-repair"],
};

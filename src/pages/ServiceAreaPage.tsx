import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, MapPin, Wrench, BadgeCheck, ArrowRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import MapEmbed from "@/components/MapEmbed";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Seo from "@/components/Seo";
import { cityPages } from "@/data/cityPages";
import { BUSINESS } from "@/lib/business";

// Distances are straight-line from the office at 270 E Douglas Ave.
const eastCounty = [
  {
    city: "El Cajon",
    zips: "92019, 92020, 92021",
    distance: "Home base",
    text: "Our office is on E Douglas Ave, just off Main Street. From Fletcher Hills to Granite Hills, El Cajon is where we do the most work, much of it in homes built in the 1950s–1970s.",
  },
  {
    city: "La Mesa",
    zips: "91941, 91942",
    distance: "About 4 miles west",
    text: "La Mesa Village, Grossmont, Lake Murray, and the neighborhoods off Fletcher Parkway. Older drain and sewer lines, slab leaks, and water heaters are the common calls.",
  },
  {
    city: "Santee",
    zips: "92071",
    distance: "About 3 miles north",
    text: "Carlton Hills, Carlton Oaks, Sky Ranch, and the neighborhoods around Santee Town Center and the San Diego River.",
  },
  {
    city: "Lakeside",
    zips: "92040",
    distance: "About 5 miles north-northeast",
    text: "Lakeside, Winter Gardens, Eucalyptus Hills, and Blossom Valley, including larger and rural lots with long sewer runs, septic systems, and irrigation backflow devices.",
  },
  {
    city: "Spring Valley",
    zips: "91977, 91978",
    distance: "About 4 miles southwest",
    text: "Spring Valley, La Presa, and the hillside neighborhoods around Dictionary Hill and Sweetwater, where many homes date from the 1950s–1970s.",
  },
  {
    city: "Rancho San Diego",
    zips: "91978, 92019",
    distance: "About 3.5 miles south-southeast",
    text: "The neighborhoods along Jamacha Road and around Cuyamaca College and Steele Canyon, mostly 1980s-and-newer homes, where water heaters and supply lines are reaching replacement age.",
  },
  {
    city: "Lemon Grove",
    zips: "91945",
    distance: "About 5.5 miles southwest",
    text: "Lemon Grove's mid-century neighborhoods, with older cast iron and clay drain lines and galvanized supply pipe in some homes.",
  },
  {
    city: "Alpine",
    zips: "91901",
    distance: "About 12 miles east",
    text: "Alpine and the foothills along I-8. Cold winter nights at elevation, well and septic properties, and long service lines make it a different kind of plumbing.",
  },
  {
    city: "Casa de Oro",
    zips: "91977",
    distance: "About 2 miles south-southwest",
    text: "Casa de Oro's established neighborhoods along Campo Road, between El Cajon and Spring Valley.",
  },
  {
    city: "Mount Helix",
    zips: "91941, 91977",
    distance: "About 2.5 miles southwest",
    text: "Hillside homes on and around Mount Helix, where steep lots and long drain runs make camera inspection especially useful.",
  },
];

const greaterSanDiego = [
  {
    name: "Central San Diego",
    cities: [
      "Chula Vista", "City Heights", "Clairemont Mesa", "College Area", "Downtown San Diego", "Encanto", "Kearny Mesa",
      "La Jolla", "Linda Vista", "Mission Valley", "National City", "Normal Heights", "North Park", "Ocean Beach",
      "Pacific Beach", "Point Loma", "San Carlos", "Scripps Ranch", "Serra Mesa", "Tierrasanta", "University City",
    ],
  },
  {
    name: "North County",
    cities: ["Carlsbad", "Del Mar", "Encinitas", "Escondido", "Oceanside", "Poway", "Ramona", "San Marcos", "Solana Beach", "Vista"],
  },
  {
    name: "South Bay & Back Country",
    cities: ["Bonita", "Flinn Springs", "Imperial Beach", "Jamul", "Pine Valley", "San Diego Country Estates"],
  },
];

const whyCards = [
  { icon: MapPin, title: "Based in El Cajon", text: `Our office is at ${BUSINESS.addressLine}, the center of East County, not across the county.` },
  { icon: BadgeCheck, title: "Licensed Since 2018", text: "California C-36 Plumbing Contractor license #1040373, verifiable on the CSLB website." },
  { icon: Shield, title: "Bonded", text: "NTP Inc carries the contractor's bond required by the CSLB." },
  { icon: Clock, title: "Available 24/7", text: "Emergencies get answered nights, weekends, and holidays." },
  { icon: Wrench, title: "Full-Service Plumbing", text: "Drains, water heaters, leaks, sewer lines, fixtures, and backflow testing. One call covers it." },
  { icon: Phone, title: "Straight Answers", text: "We diagnose first and tell you whether a repair will hold before recommending a replacement." },
];

export default function ServiceAreaPage() {
  const cityLinks = new Map(cityPages.filter((c) => c.published).map((c) => [c.city, `/${c.slug}`]));

  return (
    <>
      <Seo
        title="Plumber Serving El Cajon, La Mesa, Santee & East County"
        description="NTP Plumbing serves East County San Diego from El Cajon: La Mesa, Santee, Lakeside, Spring Valley, Rancho San Diego, Alpine and more. (619) 550-7371."
        path="/service-area"
      />

      {/* Hero */}
      <section className="bg-[#1a3a5c] px-4 py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">Plumber Serving East County San Diego</h1>
          <p className="mx-auto mb-8 max-w-2xl text-base text-white/85 md:text-lg">
            NTP Plumbing is a licensed plumber serving East County San Diego from our office in El Cajon. That covers La Mesa,
            Santee, Lakeside, Spring Valley, Rancho San Diego, Lemon Grove, Alpine, Casa de Oro, and Mount Helix, 24/7.
          </p>
          <a href={BUSINESS.phoneHref}>
            <Button size="lg" className="gap-2 bg-[#e8a020] text-white shadow-lg hover:bg-[#e8a020]/90">
              <Phone className="h-5 w-5" /> Call {BUSINESS.phoneDisplay}
            </Button>
          </a>
        </div>
      </section>
      <PageBreadcrumb trail={[{ name: "Service Area", path: "/service-area" }]} className="max-w-6xl" />

      {/* East County */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-3xl font-bold text-[#1a3a5c]">East County Communities We Serve</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-[#2d2d2d]">
            Because we're based in El Cajon, these communities are all within a short drive of our office. That matters most
            when water is on the floor.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {eastCounty.map((c) => {
              const href = cityLinks.get(c.city);
              return (
                <div key={c.city} className="flex flex-col rounded-xl border bg-[#f4f6f8] p-5">
                  <h3 className="text-lg font-semibold text-[#1a3a5c]">Plumber in {c.city}, CA</h3>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {c.distance} · {c.zips}
                  </p>
                  <p className="flex-1 text-sm text-[#2d2d2d]">{c.text}</p>
                  {href && (
                    <Link to={href} className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                      Plumbing in {c.city} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#f4f6f8] px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-[#1a3a5c]">Our El Cajon Office</h2>
          <MapEmbed />
        </div>
      </section>

      {/* Greater San Diego */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-2xl font-bold text-[#1a3a5c] md:text-3xl">Also Serving Greater San Diego County</h2>
          <p className="mb-8 max-w-3xl text-[#2d2d2d]">
            East County is our focus, but we also take jobs across San Diego County. If you're outside the area above, call{" "}
            {BUSINESS.phoneDisplay} and we'll let you know if we can get to you.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {greaterSanDiego.map((r) => (
              <div key={r.name}>
                <h3 className="mb-3 font-semibold text-[#1a3a5c]">{r.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{r.cities.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NTP */}
      <section className="bg-[#f4f6f8] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#1a3a5c]">Why East County Calls NTP Plumbing</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((c) => (
              <div key={c.title} className="rounded-xl border bg-white p-6">
                <c.icon className="mb-3 h-8 w-8 text-[#e8a020]" aria-hidden="true" />
                <h3 className="mb-2 text-lg font-semibold text-[#1a3a5c]">{c.title}</h3>
                <p className="text-sm text-[#2d2d2d]">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* Mobile sticky call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e8a020]/40 bg-[#1a3a5c] px-4 py-3 shadow-lg md:hidden">
        <a
          href={BUSINESS.phoneHref}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-[#e8a020] px-4 py-3 text-base font-bold text-white"
        >
          <Phone className="h-5 w-5" /> Call {BUSINESS.phoneDisplay}
        </a>
      </div>
    </>
  );
}

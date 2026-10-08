import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Star, Shield, MapPin, Wrench } from "lucide-react";
import Seo from "@/components/Seo";
import MapEmbed from "@/components/MapEmbed";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const REGION_ANCHORS: Record<string, string> = {
  "San Diego Core": "san-diego-core",
  "North County San Diego": "north-county",
  "South Bay & East County": "south-bay-east-county",
};

const regions = [
  {
    name: "San Diego Core",
    description:
      "The heart of NTP Plumbing's service area. From Downtown San Diego to the coastal communities of La Jolla and Ocean Beach, we're your neighborhood plumber across all of central San Diego.",
    cities: [
      ["Balboa Park / Bankers Hill", "92101, 92103"],
      ["Barrio Logan", "92113"],
      ["Chula Vista (North)", "91910, 91911"],
      ["Chula Vista (East/Otay)", "91913, 91914, 91915"],
      ["City Heights", "92105"],
      ["Clairemont Mesa", "92111, 92117"],
      ["College Area", "92115"],
      ["Downtown San Diego", "92101"],
      ["East San Diego", "92102, 92105"],
      ["El Cajon", "92019, 92020, 92021"],
      ["Encanto", "92114"],
      ["Golden Hill", "92102"],
      ["Grant Hill", "92102"],
      ["Imperial Beach", "91932"],
      ["Kearny Mesa", "92111, 92123"],
      ["La Jolla", "92037"],
      ["La Mesa", "91941, 91942, 91943, 91944"],
      ["Lemon Grove", "91945"],
      ["Linda Vista", "92111"],
      ["Logan Heights", "92113"],
      ["Midway District", "92110"],
      ["Miramar", "92126, 92145"],
      ["Mission Hills", "92103"],
      ["Mission Valley", "92108"],
      ["National City", "91950"],
      ["Normal Heights", "92116"],
      ["North Park", "92104"],
      ["Ocean Beach", "92107"],
      ["Old Town San Diego", "92110"],
      ["Pacific Beach", "92109"],
      ["Point Loma", "92106, 92107"],
      ["Rancho Bernardo", "92127, 92128"],
      ["Rancho Peñasquitos", "92129"],
      ["San Carlos", "92119"],
      ["Santee", "92071"],
      ["Scripps Ranch", "92131"],
      ["Serra Mesa", "92123"],
      ["Skyline", "92114"],
      ["Tierrasanta", "92124"],
      ["University City", "92122"],
      ["University Heights", "92116"],
    ],
  },
  {
    name: "North County San Diego",
    description:
      "From the coastal beauty of Oceanside and Carlsbad to the inland communities of Escondido and Ramona, NTP Plumbing covers all of North San Diego County.",
    cities: [
      ["Bonsall", "92003"],
      ["Borrego Springs", "92004"],
      ["Carlsbad", "92008, 92009, 92010, 92011"],
      ["Del Mar", "92014"],
      ["Encinitas", "92023, 92024"],
      ["Escondido", "92025, 92026, 92027, 92029"],
      ["Fallbrook", "92028"],
      ["Leucadia", "92024"],
      ["Oceanside", "92054, 92056, 92057, 92058"],
      ["Poway", "92064"],
      ["Rainbow", "92028"],
      ["Ramona", "92065"],
      ["San Marcos", "92069, 92078"],
      ["Solana Beach", "92075"],
      ["Valley Center", "92082"],
      ["Vista", "92081, 92083, 92084"],
    ],
  },
  {
    name: "South Bay & East County",
    description:
      "NTP Plumbing proudly serves the South Bay communities and the diverse neighborhoods of East County San Diego, from the foothills of Alpine to the valley communities of Spring Valley and Lakeside.",
    cities: [
      ["Alpine", "91901"],
      ["Bonita", "91902"],
      ["Casa de Oro / Mount Helix", "91941, 91977"],
      ["Flinn Springs", "92021"],
      ["Jamul", "91935"],
      ["Lakeside", "92040"],
      ["Pine Valley", "91962"],
      ["Potrero", "91963"],
      ["Rancho San Diego", "91978"],
      ["San Diego Country Estates", "92065"],
      ["Spring Valley", "91977, 91978, 91979"],
    ],
  },
];

const whyCards = [
  { icon: Clock, title: "Available 24/7", text: "Plumbing emergencies don't keep business hours. Our team is dispatched day and night, including weekends and holidays." },
  { icon: Star, title: "5-Star Rated", text: "Consistently top-rated on Yelp across our entire service area. Our reputation is built one job at a time." },
  { icon: Shield, title: "Licensed & Insured", text: "Fully licensed, bonded, and insured in the state of California. You're in safe hands on every job." },
  { icon: MapPin, title: "Local & Family Owned", text: "We're not a national chain. We're your neighbors — and we treat every home like our own." },
  { icon: Wrench, title: "Full-Service Plumbing", text: "Drain cleaning, water heaters, hydro jetting, leak detection, sewer repair, and more — one call covers it all." },
  { icon: Phone, title: "Fast Response Times", text: "We know you can't wait. Our dispatchers prioritize your call and get a technician to you as fast as possible." },
];

export default function ServiceAreaPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [location]);

  return (
    <>
      <Seo
        title="NTP Plumbing Service Area | Greater San Diego, CA"
        description="NTP Plumbing serves all of Greater San Diego, CA. View our full list of cities, towns, and zip codes served. Available 24/7 for emergency plumbing."
        path="/service-area"
      />
      <PageBreadcrumb trail={[{ name: "Service Area", path: "/service-area" }]} />

      {/* Hero */}
      <section className="bg-[#1a3a5c] px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            NTP Plumbing Service Area
          </h1>
          <p className="mb-6 text-xl font-semibold text-[#e8a020] md:text-2xl">
            Serving Greater San Diego, CA — 24/7
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-base text-white/85 md:text-lg">
            Whether you're in coastal San Diego, the East County foothills, or anywhere in between, NTP Plumbing is ready to respond. We serve dozens of cities and hundreds of zip codes across San Diego County with the same fast, 5-star rated service our customers have come to count on.
          </p>
          <a href="tel:+16195507371">
            <Button size="lg" className="gap-2 bg-[#e8a020] text-white shadow-lg hover:bg-[#e8a020]/90">
              <Phone className="h-5 w-5" /> Call Now — Available 24/7: (619) 550-7371
            </Button>
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#1a3a5c]">Our Full Service Area</h2>
          <p className="text-base text-[#2d2d2d] md:text-lg">
            NTP Plumbing is based in Greater San Diego and has built a reputation as one of the region's most trusted plumbing companies. We proudly cover all of San Diego County — from the coast to the North County and East County communities. No matter where you are in Greater San Diego, our licensed, insured technicians can be at your door — day or night.
          </p>
        </div>
      </section>
      <section className="bg-white px-4 pb-16">
        <div className="mx-auto max-w-4xl">
          <MapEmbed />
        </div>
      </section>

      {/* Regions */}
      <section className="bg-[#f4f6f8] px-4 py-16">
        <div className="mx-auto max-w-6xl space-y-14">
          {regions.map((region) => (
            <div key={region.name} id={REGION_ANCHORS[region.name]} className="scroll-mt-24">
              <h2 className="mb-3 text-2xl font-bold text-[#1a3a5c] md:text-3xl">{region.name}</h2>
              <p className="mb-6 max-w-3xl text-[#2d2d2d]">{region.description}</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {region.cities.map(([city, zips]) => (
                  <div key={city} className="rounded-lg border bg-white p-4 shadow-sm">
                    <div className="font-semibold text-[#1a3a5c]">{city}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{zips}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why NTP */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#1a3a5c]">
            Why Greater San Diego Chooses NTP Plumbing
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((c) => (
              <div key={c.title} className="rounded-xl border bg-[#f4f6f8] p-6">
                <c.icon className="mb-3 h-8 w-8 text-[#e8a020]" />
                <h3 className="mb-2 text-lg font-semibold text-[#1a3a5c]">{c.title}</h3>
                <p className="text-sm text-[#2d2d2d]">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1a3a5c] px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Ready to Book? We Serve Your Area.</h2>
          <p className="mb-8 text-white/85">
            Call now or request service online. Available 24/7 across Greater San Diego.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+16195507371">
              <Button size="lg" className="gap-2 bg-[#e8a020] text-white hover:bg-[#e8a020]/90">
                <Phone className="h-5 w-5" /> Call (619) 550-7371
              </Button>
            </a>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-[#1a3a5c]">
                Back to Homepage →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile sticky call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e8a020]/40 bg-[#1a3a5c] px-4 py-3 shadow-lg md:hidden">
        <a
          href="tel:+16195507371"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-[#e8a020] px-4 py-3 text-base font-bold text-white"
        >
          <Phone className="h-5 w-5" /> Call (619) 550-7371
        </a>
      </div>
    </>
  );
}

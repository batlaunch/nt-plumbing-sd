import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import FaqSection from "@/components/FaqSection";
import HeroImage from "@/components/HeroImage";
import JsonLd from "@/components/JsonLd";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Seo from "@/components/Seo";
import { servicePages } from "@/data/servicePages";
import { getPhoto } from "@/data/photos";
import { BUSINESS } from "@/lib/business";
import { faqSchema } from "@/lib/schema";

const heroPhoto = getPhoto("cast-iron-drain-stack-repair");

const faqs = [
  {
    q: "Do you offer emergency plumbing services?",
    a: "Yes. NTP Plumbing is available 24 hours a day, 7 days a week, including weekends and holidays, for emergency plumbing calls in El Cajon and East County San Diego.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in El Cajon and serve East County San Diego, including La Mesa, Santee, Lakeside, Spring Valley, Rancho San Diego, Lemon Grove, Alpine, Casa de Oro, and Mount Helix. We also take jobs elsewhere in San Diego County.",
  },
  {
    q: "Do you work on homes and businesses?",
    a: "Yes. Most of our work is residential plumbing for homeowners, and we also serve commercial properties, including backflow testing for businesses.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, check, credit cards, and Zelle.",
  },
  {
    q: "Are you licensed?",
    a: "Yes. NTP Plumbing (NTP Inc) holds California C-36 Plumbing Contractor license #1040373, issued in 2018, and is bonded. You can verify the license on the CSLB website.",
  },
];

export default function ServicesPage() {
  const services = servicePages.filter((s) => s.published);

  return (
    <>
      <Seo
        title="Plumbing Services in El Cajon & East County | NTP Plumbing"
        description="Residential plumbing services and repair in El Cajon and East County San Diego: drains, water heaters, leaks, sewer, fixtures, backflow. (619) 550-7371."
        path="/services"
      />
      <JsonLd data={faqSchema(faqs)} />
      <section className="relative flex min-h-[260px] items-center justify-center overflow-hidden px-4">
        <HeroImage photo={heroPhoto} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">Plumbing Services in El Cajon &amp; East County</h1>
          <p className="mt-2 text-primary-foreground/80">Residential and commercial plumbing repair from a licensed local plumber</p>
        </div>
      </section>
      <PageBreadcrumb trail={[{ name: "Services", path: "/services" }]} className="max-w-6xl" />

      <section className="px-4 pt-12">
        <div className="prose prose-slate mx-auto max-w-3xl">
          <p className="lead">
            NTP Plumbing provides plumbing services in El Cajon and across East County San Diego. We handle everything from a
            single dripping faucet to a full sewer line replacement, for homeowners, landlords, and businesses. We're a licensed
            C-36 plumbing contractor (CA Lic. #1040373) working out of {BUSINESS.addressLine}, and we're available 24/7.
          </p>
        </div>
      </section>

      <section className="section-padding !pt-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold">What We Do</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="service-card-hover flex flex-col rounded-xl border bg-card p-6">
                <s.icon className="mb-3 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mb-1 text-lg font-semibold">{s.navTitle}</h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">{s.cardDesc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="prose prose-slate mx-auto max-w-3xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          <h2>Residential plumbing repair, start to finish</h2>
          <p>
            Most of our calls come from homeowners with a specific problem: water where it shouldn't be, no hot water, or a
            drain that won't drain. Every job follows the same approach:
          </p>
          <ol>
            <li>
              <strong>Diagnose before recommending anything.</strong> For drains and sewer lines that often means a camera
              inspection. For leaks it means pinpointing the source before opening walls or floors.
            </li>
            <li>
              <strong>Give you the options and the price up front.</strong> Repair vs. replace, and what each one costs, before
              work starts.
            </li>
            <li>
              <strong>Do the work to code</strong>, with the right materials for your home's existing plumbing.
            </li>
            <li>
              <strong>Test it and clean up.</strong>
            </li>
          </ol>
          <h2>Common plumbing problems in East County homes</h2>
          <p>
            Much of El Cajon, La Mesa, Spring Valley, and Lemon Grove was built between the 1950s and 1970s, and San Diego
            County's water is hard. That combination produces a familiar set of problems:
          </p>
          <ul>
            <li>
              Root intrusion and cracked joints in older clay and cast iron sewer lines. See{" "}
              <Link to="/services/sewer-line-repair">sewer line repair</Link> and{" "}
              <Link to="/services/drain-cleaning-hydro-jetting">drain cleaning and hydro jetting</Link>.
            </li>
            <li>
              Pinhole leaks in copper water lines under concrete slabs. See{" "}
              <Link to="/services/leak-detection">leak detection and slab leak repair</Link>.
            </li>
            <li>
              Scale-shortened water heater life. See{" "}
              <Link to="/services/water-heater-repair">water heater repair and replacement</Link>.
            </li>
            <li>
              Dripping cartridges, running toilets, and seized shutoff valves. See{" "}
              <Link to="/services/fixture-installation-repair">fixture repair</Link>.
            </li>
          </ul>
          <p>
            Not sure what you need? Call <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a> and describe what's
            happening. We'll tell you what it most likely is and what the next step should be. You can also check whether we
            cover your neighborhood on our <Link to="/service-area">service area page</Link>.
          </p>
        </div>
      </section>

      <FaqSection faqs={faqs} />

      <CTABanner />
    </>
  );
}

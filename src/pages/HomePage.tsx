import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Star, MapPin, BadgeCheck, ArrowRight } from "lucide-react";
import { allPhotos, getPhoto } from "@/data/photos";
import { servicePages } from "@/data/servicePages";
import { cityPages } from "@/data/cityPages";
import { blogPosts } from "@/data/blog";
import CTABanner from "@/components/CTABanner";
import FaqSection from "@/components/FaqSection";
import HeroImage from "@/components/HeroImage";
import JsonLd from "@/components/JsonLd";
import Seo from "@/components/Seo";
import { Todo } from "@/components/RichText";
import { BUSINESS } from "@/lib/business";
import { faqSchema } from "@/lib/schema";

const heroPhoto = getPhoto("copper-water-line-repair");

const homeFaqs = [
  {
    q: "Is NTP Plumbing a licensed plumber?",
    a: "Yes. NTP Plumbing (NTP Inc) holds California C-36 Plumbing Contractor license #1040373, issued by the Contractors State License Board in 2018, and is bonded.",
  },
  {
    q: "Do you offer emergency plumbing in El Cajon?",
    a: "Yes. NTP Plumbing is available 24 hours a day, 7 days a week, including weekends and holidays, for emergencies like burst pipes, sewer backups, leaking water heaters, and no hot water.",
  },
  {
    q: "What areas does NTP Plumbing serve?",
    a: "We're based at 270 E Douglas Ave in El Cajon and serve East County San Diego, including El Cajon, La Mesa, Santee, Lakeside, Spring Valley, Rancho San Diego, Lemon Grove, Alpine, Casa de Oro, and Mount Helix.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We accept cash, check, credit cards, and Zelle.",
  },
];

export default function HomePage() {
  const services = servicePages.filter((s) => s.published);
  const cityLinks = new Map(cityPages.filter((c) => c.published).map((c) => [c.city, `/${c.slug}`]));
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Seo
        title="Plumber in El Cajon, CA | 24/7 Service | NTP Plumbing"
        description="Licensed El Cajon plumber (CA Lic. #1040373) serving East County San Diego 24/7. Drains, water heaters, leaks, sewer lines. Call (619) 550-7371."
        path="/"
      />
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Emergency Banner */}
      <div className="bg-accent px-4 py-2 text-center text-sm font-semibold text-accent-foreground">
        24/7 emergency plumbing in El Cajon & East County. Call {BUSINESS.phoneDisplay}
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden md:min-h-[600px]">
        <HeroImage photo={heroPhoto} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Plumber in El Cajon, CA
          </h1>
          <p className="mb-6 text-xl font-semibold tracking-tight text-[#e8a020] md:text-2xl">
            Licensed since 2018 · Available 24/7 · 5.0 stars on Yelp
          </p>
          <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/90">
            NTP Plumbing is a licensed plumber in El Cajon serving homes and businesses across East County San Diego: drain
            cleaning, water heaters, leak detection, sewer lines, and emergency repairs, day or night.
          </p>
          <a href={BUSINESS.phoneHref}>
            <Button size="lg" className="gap-2 text-base shadow-lg">
              <Phone className="h-5 w-5" /> Call {BUSINESS.phoneDisplay}
            </Button>
          </a>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b bg-card py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 px-4 md:gap-10">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-accent" aria-hidden="true" />
            <span className="text-sm font-semibold">5.0 Stars on Yelp</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="text-sm font-semibold">Open 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="text-sm font-semibold">{BUSINESS.license.short}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="text-sm font-semibold">Licensed Since 2018 · Bonded</span>
          </div>
        </div>
      </section>

      {/* Local intro */}
      <section className="section-padding">
        <div className="prose prose-slate mx-auto max-w-3xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          <h2>Your local El Cajon plumber</h2>
          <p>
            When something goes wrong with your plumbing, you want someone close by who answers the phone and knows the
            homes in your neighborhood. NTP Plumbing works out of an office at {BUSINESS.addressLine}. That's minutes from
            most of El Cajon, and a short drive to <Link to="/plumber-la-mesa">La Mesa</Link>,{" "}
            <Link to="/plumber-santee">Santee</Link>, <Link to="/plumber-lakeside">Lakeside</Link>,{" "}
            <Link to="/plumber-spring-valley">Spring Valley</Link>, and{" "}
            <Link to="/plumber-rancho-san-diego">Rancho San Diego</Link>.
          </p>
          <p>
            We're a licensed plumbing contractor (California C-36, license #1040373, issued in 2018) and bonded. We work on the
            everyday problems that bring most people to a plumber: a <Link to="/services/drain-cleaning-hydro-jetting">clogged
            drain or backed-up main line</Link>, <Link to="/services/water-heater-repair">no hot water</Link>, a{" "}
            <Link to="/services/leak-detection">hidden leak or slab leak</Link>, a{" "}
            <Link to="/services/sewer-line-repair">failing sewer line</Link>, or a{" "}
            <Link to="/services/fixture-installation-repair">dripping faucet or running toilet</Link>. We also handle annual{" "}
            <Link to="/services/backflow-testing">backflow testing</Link> for homes and businesses.
          </p>
          <p>
            A lot of East County housing dates from the 1950s through the 1970s, and San Diego County's water is hard. In
            practice that means aging cast iron and clay drain lines, copper under concrete slabs, and water heaters and
            fixtures that scale up faster than the manufacturer expects. We see these problems every week, and we'll tell you
            plainly whether a repair will hold or whether replacement is the better value.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">Plumbing Services</h2>
            <p className="text-muted-foreground">Residential and commercial plumbing repair across El Cajon and East County</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="service-card-hover rounded-xl border bg-card p-6">
                <s.icon className="mb-3 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mb-1 text-lg font-semibold">{s.navTitle}</h3>
                <p className="text-sm text-muted-foreground">{s.cardDesc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services">
              <Button variant="outline">View All Plumbing Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="section-padding">
        <div className="prose prose-slate mx-auto max-w-3xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          <h2>Emergency plumber in El Cajon, day or night</h2>
          <p>
            Burst pipes, sewage coming up into a tub, and a water heater leaking into the garage don't wait for business
            hours, and neither do we. NTP Plumbing answers emergency calls 24 hours a day, 7 days a week, including weekends
            and holidays. Response time: <Todo>typical emergency response time</Todo>.
          </p>
          <p>While you wait, a few steps limit the damage:</p>
          <ul>
            <li>
              <strong>Burst or leaking pipe:</strong> close your home's main water shutoff, usually where the water line
              enters the house or at the meter.
            </li>
            <li>
              <strong>Leaking water heater:</strong> close the cold water valve on top of the tank, and turn the gas control to
              "off" or switch off the breaker.
            </li>
            <li>
              <strong>Sewer backup:</strong> stop running water and flushing toilets until the main line is cleared.
            </li>
          </ul>
          <p>
            Then call <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>.
          </p>
        </div>
      </section>

      {/* Before & After */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold">Before &amp; After</h2>
            <p className="text-muted-foreground">Sewer camera footage from a drain cleaning job</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-xl border shadow-sm">
              <img src="/images/sewer-line-before-hydro-jetting.webp" alt="Sewer camera view of a drain line before cleaning, coated in heavy buildup and debris" width={800} height={589} className="aspect-[4/3] w-full object-cover" loading="lazy" decoding="async" />
              <figcaption className="bg-background px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">Before</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-xl border shadow-sm">
              <img src="/images/sewer-line-after-hydro-jetting.webp" alt="The same drain line after cleaning, with the pipe walls scoured clean" width={800} height={591} className="aspect-[4/3] w-full object-cover" loading="lazy" decoding="async" />
              <figcaption className="bg-background px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">After</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="overflow-hidden bg-muted py-8">
        <div className="flex gap-2 overflow-x-auto px-4 pb-2">
          {allPhotos.slice(0, 10).map((p) => (
            <img
              key={p.id}
              src={p.thumbnail}
              alt={p.alt}
              width={300}
              height={300}
              className="h-40 w-56 shrink-0 rounded-lg object-cover"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link to="/gallery" className="text-sm font-medium text-primary hover:underline">
            See photos of our plumbing work →
          </Link>
        </div>
      </section>

      {/* Areas */}
      <section className="section-padding bg-[#f4f6f8]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 flex items-center justify-center gap-2">
            <MapPin className="h-6 w-6 text-[#1a3a5c]" aria-hidden="true" />
            <h2 className="text-center text-3xl font-bold text-[#1a3a5c]">A Plumbing Company for East County San Diego</h2>
          </div>
          <p className="mx-auto mb-8 max-w-3xl text-center text-muted-foreground">
            From our El Cajon office we cover the communities of East County. Looking for a licensed plumber near you? If
            you're in one of these areas, you're in our backyard.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {BUSINESS.areaServed.map((city) => {
              const to = city === "El Cajon" ? "/service-area" : cityLinks.get(city) ?? "/service-area";
              return (
                <Link
                  key={city}
                  to={to}
                  className="rounded-full bg-[#e8f0f8] px-4 py-1.5 text-sm font-medium text-[#1a3a5c] transition-colors hover:bg-[#e8a020] hover:text-white"
                >
                  {city}
                </Link>
              );
            })}
          </div>
          <div className="mt-10 rounded-xl bg-[#1a3a5c] px-6 py-8 text-center">
            <p className="mb-4 text-lg text-white">
              Outside East County? We also take jobs across greater San Diego County. Call {BUSINESS.phoneDisplay} to check.
            </p>
            <Link to="/service-area">
              <Button className="gap-2 bg-[#e8a020] text-white hover:bg-[#e8a020]/90">View Full Service Area →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest posts */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Plumbing Advice for East County Homeowners</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {latestPosts.map((p) => (
              <Link key={p.meta.slug} to={`/blog/${p.meta.slug}`} className="service-card-hover rounded-xl border bg-card p-6">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-primary">{p.meta.category}</p>
                <h3 className="mb-2 text-lg font-semibold">{p.meta.title}</h3>
                <p className="text-sm text-muted-foreground">{p.meta.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              More plumbing tips <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <FaqSection faqs={homeFaqs} className="section-padding bg-muted" />

      <CTABanner />

      {/* Get In Touch */}
      <section className="bg-[#1a3a5c] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="text-white">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get In Touch</h2>
              <p className="mb-8 max-w-md text-white/80">
                Available 24 hours a day, 7 days a week, including holidays. Call for emergencies or to schedule service
                anywhere in El Cajon and East County.
              </p>
              <a href={BUSINESS.phoneHref} className="mb-2 inline-block text-4xl font-extrabold text-[#e8a020] transition-opacity hover:opacity-90 md:text-5xl">
                {BUSINESS.phoneDisplay}
              </a>
              <p className="mb-8 text-sm text-white/70">Tap to call. We answer 24/7.</p>
              <address className="space-y-1 border-t border-white/20 pt-6 not-italic">
                <p className="font-semibold">{BUSINESS.name}</p>
                <p className="text-white/80">{BUSINESS.addressLine}</p>
                <p className="text-white/80">{BUSINESS.license.short}</p>
              </address>
            </div>

            <div className="flex flex-col justify-center gap-6 text-white">
              <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm md:p-8">
                <h3 className="mb-4 text-xl font-semibold">Why Call NTP Plumbing?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#e8a020]" aria-hidden="true" />
                    <span>24/7 emergency service: nights, weekends, and holidays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="mt-0.5 h-5 w-5 shrink-0 text-[#e8a020]" aria-hidden="true" />
                    <span>CSLB-licensed since 2018 (C-36 #1040373) and bonded</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#e8a020]" aria-hidden="true" />
                    <span>Local office on E Douglas Ave in El Cajon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="mt-0.5 h-5 w-5 shrink-0 text-[#e8a020]" aria-hidden="true" />
                    <span>
                      5.0 stars on <Link to="/reviews" className="underline">Yelp reviews</Link> from East County customers
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

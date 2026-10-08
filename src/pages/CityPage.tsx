import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTABanner from "@/components/CTABanner";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import RichText from "@/components/RichText";
import Seo from "@/components/Seo";
import { getServicePage, type ServicePageData } from "@/data/servicePages";
import type { CityPageData } from "@/data/cityPages";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { BUSINESS_ID, faqSchema } from "@/lib/schema";

export default function CityPage({ page }: { page: CityPageData }) {
  const path = `/${page.slug}`;
  const services = page.topServices
    .map(getServicePage)
    .filter((s): s is ServicePageData => !!s?.published)
    .slice(0, 4);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Plumbing services in ${page.city}, CA`,
    serviceType: "Plumbing",
    url: `${SITE_URL}${path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "City", name: `${page.city}, CA` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Plumbing services in ${page.city}`,
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.navTitle, url: `${SITE_URL}/services/${s.slug}` },
      })),
    },
  };

  return (
    <>
      <Seo title={page.seoTitle} description={page.seoDescription} path={path} noindex={!page.published} />
      <JsonLd data={[serviceJsonLd, faqSchema(page.faqs)]} />

      <section className="bg-[#1a3a5c] px-4 py-14 text-white md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#e8a020]">
            <MapPin className="h-4 w-4" aria-hidden="true" /> Serving {page.city} from El Cajon
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">Plumber in {page.city}, CA</h1>
          <p className="mb-8 text-lg text-white/85">{page.heroSubtitle}</p>
          <a href={BUSINESS.phoneHref}>
            <Button size="lg" className="gap-2 bg-[#e8a020] text-white shadow-lg hover:bg-[#e8a020]/90">
              <Phone className="h-5 w-5" /> Call {BUSINESS.phoneDisplay}
            </Button>
          </a>
        </div>
      </section>

      <PageBreadcrumb
        trail={[
          { name: "Service Area", path: "/service-area" },
          { name: page.city, path },
        ]}
        className="max-w-3xl"
      />

      <article className="section-padding">
        <div className="prose prose-slate mx-auto max-w-3xl prose-headings:font-bold prose-h2:mt-10 prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          <RichText source={page.body} />
        </div>
      </article>

      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Plumbing Services in {page.city}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="service-card-hover flex flex-col rounded-xl border bg-card p-6">
                <s.icon className="mb-3 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mb-1 text-lg font-semibold">{s.navTitle}</h3>
                <p className="flex-1 text-sm text-muted-foreground">{s.cardDesc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm font-medium sm:flex-row sm:gap-8">
            <Link to="/services" className="inline-flex items-center gap-1 text-primary hover:underline">
              All plumbing services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/service-area" className="inline-flex items-center gap-1 text-primary hover:underline">
              Other East County areas we serve <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-1 text-primary hover:underline">
              Contact NTP Plumbing <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <FaqSection faqs={page.faqs} heading={`${page.city} Plumbing FAQ`} />

      <CTABanner />
    </>
  );
}

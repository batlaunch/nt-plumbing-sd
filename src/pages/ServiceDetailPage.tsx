import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CTABanner from "@/components/CTABanner";
import Seo from "@/components/Seo";
import { getServicePage, servicePages } from "@/data/servicePages";

const SITE_URL = "https://ntpplumbing.com";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServicePage(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const path = `/services/${service.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.navTitle,
    name: service.navTitle,
    description: service.seoDescription,
    url: `${SITE_URL}${path}`,
    provider: {
      "@type": "Plumber",
      name: "NTP Plumbing",
      telephone: "(619) 550-7371",
      url: SITE_URL,
    },
    areaServed: { "@type": "City", name: "San Diego", containedInPlace: { "@type": "State", name: "California" } },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.navTitle, item: `${SITE_URL}${path}` },
    ],
  };

  return (
    <>
      <Seo title={service.seoTitle} description={service.seoDescription} path={path} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden">
        <img
          src={service.heroImage.src}
          alt={service.heroImage.alt}
          width={service.heroImage.width}
          height={service.heroImage.height}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">{service.title}</h1>
          <p className="mt-2 text-primary-foreground/70">{service.heroSubtitle}</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b bg-muted/40 px-4 py-3">
        <Breadcrumb className="mx-auto max-w-4xl">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/services">Services</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{service.navTitle}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Intro + Includes */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{service.intro}</p>
          <h2 className="mb-4 text-2xl font-bold">What's Included</h2>
          <ul className="mb-2 grid gap-3 sm:grid-cols-2">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-2 rounded-lg border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why NTP for this service */}
      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Why NTP Plumbing</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {service.whyPoints.map((w) => (
              <div key={w.title} className="rounded-xl border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {service.faqs.map((faq) => (
              <div key={faq.q} className="rounded-lg border bg-card p-5">
                <h3 className="mb-2 font-semibold">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Other Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="service-card-hover rounded-xl border bg-card p-6"
                >
                  <s.icon className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="mb-1 text-lg font-semibold">{s.navTitle}</h3>
                  <p className="text-sm text-muted-foreground">{s.cardDesc}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* Mobile sticky call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-primary px-4 py-3 shadow-lg md:hidden">
        <a
          href="tel:+16195507371"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-base font-bold text-accent-foreground"
        >
          <Phone className="h-5 w-5" /> Call (619) 550-7371
        </a>
      </div>
    </>
  );
}

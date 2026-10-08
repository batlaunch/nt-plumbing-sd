import { useParams } from "react-router-dom";
import { Phone, CheckCircle2 } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import HeroImage from "@/components/HeroImage";
import JsonLd from "@/components/JsonLd";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import RelatedServices from "@/components/RelatedServices";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { getServicePage } from "@/data/servicePages";
import { getPhoto } from "@/data/photos";
import { BUSINESS } from "@/lib/business";
import { faqSchema, serviceSchema } from "@/lib/schema";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServicePage(slug) : undefined;

  if (!service) {
    return <NotFound />;
  }

  const path = `/services/${service.slug}`;
  const hero = getPhoto(service.heroPhoto);

  return (
    <>
      <Seo title={service.seoTitle} description={service.seoDescription} path={path} ogImage={hero.url} noindex={!service.published} />
      <JsonLd
        data={[
          serviceSchema({ name: service.navTitle, serviceType: service.navTitle, description: service.seoDescription, path }),
          faqSchema(service.faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden">
        <HeroImage photo={hero} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">{service.title}</h1>
          <p className="mt-2 text-primary-foreground/70">{service.heroSubtitle}</p>
        </div>
      </section>

      <PageBreadcrumb trail={[{ name: "Services", path: "/services" }, { name: service.navTitle, path }]} />

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

      <RelatedServices slugs={service.related} />

      <CTABanner />

      {/* Mobile sticky call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-primary px-4 py-3 shadow-lg md:hidden">
        <a
          href={BUSINESS.phoneHref}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-base font-bold text-accent-foreground"
        >
          <Phone className="h-5 w-5" /> Call {BUSINESS.phoneDisplay}
        </a>
      </div>
    </>
  );
}

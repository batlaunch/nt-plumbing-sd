import { useParams } from "react-router-dom";
import { Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTABanner from "@/components/CTABanner";
import FaqSection from "@/components/FaqSection";
import HeroImage from "@/components/HeroImage";
import JsonLd from "@/components/JsonLd";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import RelatedServices from "@/components/RelatedServices";
import RichText, { Inline } from "@/components/RichText";
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
          serviceSchema({ name: service.title, serviceType: service.serviceType, description: service.quickAnswer, path }),
          faqSchema(service.faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden px-4">
        <HeroImage photo={hero} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">{service.title}</h1>
          <p className="mt-2 text-primary-foreground/80">{service.heroSubtitle}</p>
        </div>
      </section>

      <PageBreadcrumb trail={[{ name: "Services", path: "/services" }, { name: service.navTitle, path }]} className="max-w-3xl" />

      {/* Quick answer: written to be quotable on its own (search snippets, AI assistants) */}
      <section className="px-4 pt-10 md:pt-14">
        <div className="mx-auto max-w-3xl rounded-xl border-l-4 border-primary bg-primary/5 p-6">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
            <Zap className="h-4 w-4" aria-hidden="true" /> Quick answer
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            <Inline text={service.quickAnswer} />
          </p>
          <a href={BUSINESS.phoneHref} className="mt-4 inline-block">
            <Button className="gap-2">
              <Phone className="h-4 w-4" /> Call {BUSINESS.phoneDisplay}
            </Button>
          </a>
        </div>
      </section>

      <article className="section-padding !pt-10">
        <div className="prose prose-slate mx-auto max-w-3xl prose-headings:font-bold prose-h2:mt-12 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-li:my-1">
          {service.sections.map((sec) => (
            <section key={sec.heading}>
              <h2>{sec.heading}</h2>
              <RichText source={sec.body} />
            </section>
          ))}
        </div>
      </article>

      <FaqSection faqs={service.faqs} />

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

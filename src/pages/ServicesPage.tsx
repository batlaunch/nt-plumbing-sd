import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CTABanner from "@/components/CTABanner";
import Seo from "@/components/Seo";
import { servicePages } from "@/data/servicePages";

const faqs = [
  { q: "Do you offer emergency plumbing services?", a: "Yes! NTP is open 24 hours a day, 7 days a week. We're available for emergency plumbing calls at any time." },
  { q: "What areas do you serve?", a: "We serve El Cajon and the greater San Diego County area." },
  { q: "What payment methods do you accept?", a: "We accept cash, check, credit cards, and Zelle for your convenience." },
  { q: "Do you provide free estimates?", a: "Contact us for a free estimate on your plumbing project." },
  { q: "Are you licensed and insured?", a: "Yes — NTP is fully licensed and insured." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Plumbing Services in San Diego, CA | NTP Plumbing"
        description="Full-service plumbing in Greater San Diego: drain cleaning, hydro jetting, water heaters, leak detection, sewer liners, and 24/7 emergency repairs."
        path="/services"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <section className="relative flex min-h-[260px] items-center justify-center overflow-hidden">
        <img
          src="/images/gallery/Of6S0dEOrBOW3FAmeCv-Jg-o.webp"
          alt="NTP Plumbing water heater installation, one of our core plumbing services"
          width={750}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">Our Plumbing Services</h1>
          <p className="mt-2 text-primary-foreground/70">Trusted residential &amp; commercial plumbing across Greater San Diego</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold">What We Do</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((s) => (
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

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-lg border bg-card p-5">
                <h3 className="mb-2 font-semibold">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

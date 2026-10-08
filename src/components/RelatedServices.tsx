import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { getServicePage, type ServicePageData } from "@/data/servicePages";
import { BUSINESS } from "@/lib/business";

/**
 * Internal-linking block for service and city pages: 2–3 related services,
 * plus the service area page and contact. Unpublished (draft) services are
 * never linked from here.
 */
export default function RelatedServices({ slugs, heading = "Related Plumbing Services" }: { slugs: string[]; heading?: string }) {
  const services = slugs.map(getServicePage).filter((s): s is ServicePageData => !!s?.published);

  return (
    <section className="section-padding bg-muted">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold">{heading}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="service-card-hover rounded-xl border bg-card p-6">
              <s.icon className="mb-3 h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="mb-1 text-lg font-semibold">{s.navTitle}</h3>
              <p className="text-sm text-muted-foreground">{s.cardDesc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm font-medium sm:flex-row sm:gap-8">
          <Link to="/service-area" className="inline-flex items-center gap-2 text-primary hover:underline">
            <MapPin className="h-4 w-4" aria-hidden="true" /> See the East County areas we serve
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 text-primary hover:underline">
            <Phone className="h-4 w-4" aria-hidden="true" /> Contact NTP Plumbing — {BUSINESS.phoneDisplay}
          </Link>
          <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:underline">
            All plumbing services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

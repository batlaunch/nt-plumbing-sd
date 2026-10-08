import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { BUSINESS } from "@/lib/business";

const helpfulLinks = [
  { to: "/services", label: "Plumbing services" },
  { to: "/service-area", label: "Service area" },
  { to: "/blog", label: "Plumbing tips blog" },
  { to: "/contact", label: "Contact us" },
];

const NotFound = () => (
  <section className="section-padding">
    <Seo
      title="Page Not Found | NTP Plumbing"
      description="The page you're looking for doesn't exist. Call NTP Plumbing in El Cajon at (619) 550-7371 or browse our plumbing services."
      path="/404"
      noindex
    />
    <div className="mx-auto max-w-2xl text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">404</p>
      <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        That page doesn't exist or has moved. If you have a plumbing problem right now, the fastest way to reach us is by phone.
      </p>
      <a href={BUSINESS.phoneHref}>
        <Button size="lg" className="mb-10 gap-2">
          <Phone className="h-5 w-5" /> Call {BUSINESS.phoneDisplay}
        </Button>
      </a>
      <nav aria-label="Helpful links" className="flex flex-wrap justify-center gap-3">
        <Link to="/" className="rounded-full bg-muted px-4 py-2 text-sm font-medium hover:bg-primary/10">
          Home
        </Link>
        {helpfulLinks.map((l) => (
          <Link key={l.to} to={l.to} className="rounded-full bg-muted px-4 py-2 text-sm font-medium hover:bg-primary/10">
            {l.label}
          </Link>
        ))}
      </nav>
    </div>
  </section>
);

export default NotFound;

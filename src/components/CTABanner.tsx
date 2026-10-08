import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/business";

export default function CTABanner() {
  return (
    <section className="cta-gradient section-padding text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-3 text-3xl font-bold text-primary-foreground md:text-4xl">
          Need a Plumber? Call {BUSINESS.phoneDisplay}
        </h2>
        <p className="mb-6 text-primary-foreground/90">
          Licensed El Cajon plumber, available 24/7 for emergency and scheduled service throughout East County San Diego.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={BUSINESS.phoneHref}>
            <Button variant="secondary" size="lg" className="gap-2">
              <Phone className="h-4 w-4" /> Call {BUSINESS.phoneDisplay}
            </Button>
          </a>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="gap-2">
              Request a Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

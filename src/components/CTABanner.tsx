import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="cta-gradient section-padding text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-3 text-3xl font-bold text-primary-foreground md:text-4xl">
          Need a Plumber? Call Now!
        </h2>
        <p className="mb-6 text-primary-foreground/80">
          Available 24/7 for emergency and scheduled plumbing services throughout El Cajon and San Diego County.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="tel:+16195555555">
            <Button variant="secondary" size="lg" className="gap-2">
              <Phone className="h-4 w-4" /> Call for Immediate Service
            </Button>
          </a>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Request a Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

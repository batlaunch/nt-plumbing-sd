import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CreditCard, BadgeCheck } from "lucide-react";
import MapEmbed from "@/components/MapEmbed";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Seo from "@/components/Seo";
import { BUSINESS } from "@/lib/business";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact NTP Plumbing | Call a Plumber in El Cajon"
        description="Call NTP Plumbing at (619) 550-7371, 24/7. Office at 270 E Douglas Ave, El Cajon, CA 92020. Licensed plumber serving East County San Diego."
        path="/contact"
      />
      <PageBreadcrumb trail={[{ name: "Contact", path: "/contact" }]} />
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-3 text-4xl font-bold">Contact NTP Plumbing</h1>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground">
              The fastest way to reach a plumber is by phone. We answer 24/7 for emergencies and scheduled service anywhere in
              El Cajon and East County San Diego.
            </p>
            <a href={BUSINESS.phoneHref}>
              <Button size="lg" className="gap-2 text-base shadow-lg">
                <Phone className="h-5 w-5" /> Call {BUSINESS.phoneDisplay}
              </Button>
            </a>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Get in Touch</h2>
              <address className="space-y-5 not-italic">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href={BUSINESS.phoneHref} className="text-sm text-muted-foreground hover:text-primary">{BUSINESS.phoneDisplay}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-sm text-muted-foreground">{BUSINESS.name}<br />{BUSINESS.addressLine}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-sm text-muted-foreground">{BUSINESS.hoursDisplay}, including holidays</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium">License</p>
                    <p className="text-sm text-muted-foreground">{BUSINESS.license.short} · Bonded</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Payment</p>
                    <p className="text-sm text-muted-foreground">Cash, check, credit cards, Zelle</p>
                  </div>
                </div>
              </address>
            </div>

            <div className="prose prose-slate prose-sm prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              <h2>When you call</h2>
              <p>It helps to have a few details ready:</p>
              <ul>
                <li>Your address and the best number to reach you</li>
                <li>What's happening, and when it started</li>
                <li>Which fixtures are affected: one sink, or several at once?</li>
                <li>For water heaters, the age and whether it's gas or electric, if you know</li>
              </ul>
              <h2>Plumbing emergency?</h2>
              <p>
                If water is actively leaking, close your home's main shutoff valve first, usually where the line enters the
                house or at the meter. For a leaking water heater, close the cold supply valve on top of the tank. For a sewer
                backup, stop running water. Then call us.
              </p>
              <p>
                Not sure we cover your neighborhood? We serve all of East County. See our{" "}
                <Link to="/service-area">service area</Link> or just call.
              </p>
            </div>
          </div>

          <h2 className="mb-4 mt-12 text-xl font-semibold">Find Us</h2>
          <MapEmbed />
        </div>
      </section>
    </>
  );
}

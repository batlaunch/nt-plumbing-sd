import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CreditCard } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-bold">Contact NTP</h1>
          <p className="mb-2 text-lg font-medium text-foreground">Get in touch for a free quote</p>
          <p className="mb-6 text-muted-foreground">Call us anytime — available 24/7 for emergency and scheduled service</p>
          <a href="tel:+16195507371">
            <Button size="lg" className="gap-2 text-base shadow-lg">
              <Phone className="h-5 w-5" /> Call (619) 550-7371
            </Button>
          </a>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold">Get In Touch</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+16195507371" className="text-sm text-muted-foreground hover:text-primary">(619) 550-7371</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">Service Area</p>
                <p className="text-sm text-muted-foreground">Serving El Cajon, La Mesa, Spring Valley, National City, and San Diego Counties</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">Hours</p>
                <p className="text-sm text-muted-foreground">Open 24 Hours — 7 Days a Week</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">Payment</p>
                <p className="text-sm text-muted-foreground">Cash, Check, Credit Cards, Zelle</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

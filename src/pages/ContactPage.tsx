import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CreditCard } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-bold">Contact NTP</h1>
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

          {/* Map */}
          <div className="mt-6 overflow-hidden rounded-xl border">
            <iframe
              title="NTP Service Area - San Diego County, CA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107085.12310742869!2d-117.01564105!3d32.79485105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9536fad2923db%3A0x73a1fca09ea19acf!2sSan%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

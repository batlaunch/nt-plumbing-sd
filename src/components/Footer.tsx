import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
                N
              </div>
              <span className="text-lg font-bold">NTP</span>
            </div>
            <p className="text-sm opacity-70">
              Professional plumbing services in El Cajon and the greater San Diego area. Available 24/7 for all your plumbing needs.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-60">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm opacity-80">
              <Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link>
              <Link to="/gallery" className="hover:opacity-100 transition-opacity">Gallery</Link>
              <Link to="/reviews" className="hover:opacity-100 transition-opacity">Reviews</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-60">Contact</h4>
            <div className="flex flex-col gap-3 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Serving El Cajon, CA &amp; San Diego County</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>Open 24 Hours — 7 Days a Week</span>
              </div>
              <a href="tel:+16195555555" className="flex items-center gap-2 hover:opacity-100">
                <Phone className="h-4 w-4 shrink-0" />
                <span>[PHONE – EDIT THIS]</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-background/20 pt-6 text-center text-xs opacity-50">
          © {new Date().getFullYear()} NTP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

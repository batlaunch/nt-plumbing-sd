import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a3a5c] text-white">
      {/* Mobile: phone number at top */}
      <div className="border-b border-white/10 py-6 md:hidden">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="mb-1 text-sm text-white/60">Call Us Anytime</p>
          <a href="tel:+16195507371" className="text-2xl font-extrabold text-[#e8a020] transition-opacity hover:opacity-90">
            (619) 550-7371
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1 — Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
              </div>
              <span className="text-lg font-bold">NTP Plumbing</span>
            </div>
            <p className="mb-4 text-sm text-white/70">
              Greater San Diego's 24/7 Plumber
            </p>
            <a
              href="https://www.yelp.com/biz/ntp-el-cajon-4?osq=NTP+Plumbers&q=ntp+plumbers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-[#e8a020]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 14.5h-2.1l-1.4-2.6-1.4 2.6H9.5l2.3-4-2.4-4h2.2l1.4 2.6 1.4-2.6h2.1l-2.4 4 2.4 4z"/></svg>
              Read Our Reviews on Yelp
            </a>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/" className="text-white/80 transition-colors hover:text-[#e8a020]">Home</Link>
              <a href="/#services" className="text-white/80 transition-colors hover:text-[#e8a020]">Services</a>
              <Link to="/service-area" className="text-white/80 transition-colors hover:text-[#e8a020]">Service Area</Link>
            </nav>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">Call Us Anytime</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+16195507371" className="hidden text-2xl font-extrabold text-[#e8a020] transition-opacity hover:opacity-90 md:inline-block">
                (619) 550-7371
              </a>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="h-4 w-4 shrink-0" />
                <span>Available 24/7 — Every Day, Including Holidays</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Serving Greater San Diego &amp; Southern California</span>
              </div>
              <p className="text-xs text-white/50">No overtime fees. No trip charges.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#142d48]">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-white/50">
          © 2025 NTP Plumbing. All Rights Reserved. | Serving Greater San Diego &amp; Southern California
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { BUSINESS, NAP_LINE } from "@/lib/business";
import { servicePages } from "@/data/servicePages";
import { cityPages } from "@/data/cityPages";

const footerLink = "text-white/80 transition-colors hover:text-[#e8a020]";

export default function Footer() {
  const services = servicePages.filter((s) => s.published);
  const cities = cityPages.filter((c) => c.published);

  return (
    <footer className="bg-[#1a3a5c] text-white">
      {/* Mobile: phone number at top */}
      <div className="border-b border-white/10 py-6 md:hidden">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="mb-1 text-sm text-white/70">Call Us Anytime</p>
          <a href={BUSINESS.phoneHref} className="text-2xl font-extrabold text-[#e8a020] transition-opacity hover:opacity-90">
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand + NAP */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
              </div>
              <span className="text-lg font-bold">{BUSINESS.name}</span>
            </div>
            <p className="mb-4 text-sm text-white/80">
              Licensed plumber in El Cajon, serving East County San Diego since 2018.
            </p>
            <address className="space-y-2 text-sm not-italic text-white/80">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={BUSINESS.mapLinkUrl} target="_blank" rel="noopener noreferrer" className={footerLink}>
                  {BUSINESS.addressLine}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={BUSINESS.phoneHref} className={footerLink}>{BUSINESS.phoneDisplay}</a>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{BUSINESS.license.short}</span>
              </p>
            </address>
            <a
              href={BUSINESS.yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-[#e8a020]"
            >
              Read our reviews on Yelp
            </a>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">Services</h2>
            <nav aria-label="Services" className="flex flex-col gap-2 text-sm">
              {services.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className={footerLink}>
                  {s.navTitle}
                </Link>
              ))}
              <Link to="/services" className={footerLink}>All plumbing services</Link>
            </nav>
          </div>

          {/* Column 3 — Areas */}
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">Areas We Serve</h2>
            <nav aria-label="Service areas" className="flex flex-col gap-2 text-sm">
              <Link to="/" className={footerLink}>Plumber in El Cajon</Link>
              {cities.map((c) => (
                <Link key={c.slug} to={`/${c.slug}`} className={footerLink}>
                  Plumber in {c.city}
                </Link>
              ))}
              <Link to="/service-area" className={footerLink}>Full service area</Link>
            </nav>
          </div>

          {/* Column 4 — Company */}
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">Company</h2>
            <nav aria-label="Company" className="mb-6 flex flex-col gap-2 text-sm">
              <Link to="/about" className={footerLink}>About</Link>
              <Link to="/reviews" className={footerLink}>Reviews</Link>
              <Link to="/gallery" className={footerLink}>Photo gallery</Link>
              <Link to="/blog" className={footerLink}>Blog</Link>
              <Link to="/contact" className={footerLink}>Contact</Link>
            </nav>
            <a href={BUSINESS.phoneHref} className="hidden text-2xl font-extrabold text-[#e8a020] transition-opacity hover:opacity-90 md:inline-block">
              {BUSINESS.phoneDisplay}
            </a>
            <p className="mt-2 flex items-center gap-2 text-sm text-white/80">
              <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{BUSINESS.hoursDisplay}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar — exact NAP line, identical on every page */}
      <div className="border-t border-white/10 bg-[#142d48]">
        <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 text-center text-xs text-white/70">
          <p>{NAP_LINE}</p>
          <p>
            © {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved. | Website by{" "}
            <a href="https://batlaunch.com" target="_blank" rel="noopener" className="text-white/80 underline transition-colors hover:text-[#e8a020]">
              BatLaunch
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Star, Droplets, Wrench, Flame, ShowerHead, PipetteIcon, Zap } from "lucide-react";
import { allPhotos, getPhotoUrl } from "@/data/photos";
import CTABanner from "@/components/CTABanner";

const services = [
  { icon: Droplets, title: "Drain Cleaning", desc: "Hydro jetting and drain clearing for stubborn clogs and buildups." },
  { icon: Flame, title: "Water Heaters", desc: "Installation, repair, and replacement of all water heater types." },
  { icon: Wrench, title: "Leak Detection", desc: "Advanced camera and line locating technology to find hidden leaks." },
  { icon: ShowerHead, title: "Bathtub & Faucet", desc: "Installation and repair of bathtubs, showers, and faucets." },
  { icon: PipetteIcon, title: "Sewer Liners", desc: "Trenchless sewer liner repairs — full liners and sectional liners." },
  { icon: Zap, title: "Backflow Testing", desc: "Certified backflow prevention testing and device installation." },
];

export default function HomePage() {
  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-accent px-4 py-2 text-center text-sm font-semibold text-accent-foreground">
        🚨 24/7 Emergency Plumbing Available — Call Now for Fast Response!
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden md:min-h-[600px]">
        <img
          src={getPhotoUrl("xotUmIw4oPCgxALWxykLaQ", "o")}
          alt="NTP Plumbing work"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Reliable Plumbing Services in El Cajon, CA
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/80">
            Professional drain cleaning, water heater service, hydro jetting, leak detection, and more. Open 24 hours — serving the greater San Diego area.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/contact">
              <Button size="lg" className="gap-2 text-base">Request Service</Button>
            </Link>
            <a href="tel:+16195555555">
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base">
                <Phone className="h-4 w-4" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b bg-card py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 px-4 md:gap-10">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-accent" />
            <span className="text-sm font-semibold">5.0 Stars on Yelp</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold">Open 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold">[EXAMPLE – Licensed &amp; Insured]</span>
          </div>
          <div className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold">[EXAMPLE – 10+ Years Experience]</span>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">Our Services</h2>
            <p className="text-muted-foreground">Comprehensive plumbing solutions for residential and commercial properties</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="service-card-hover rounded-xl border bg-card p-6">
                <s.icon className="mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-1 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="overflow-hidden bg-muted py-8">
        <div className="flex gap-2 overflow-x-auto px-4 pb-2">
          {allPhotos.slice(0, 10).map((p) => (
            <img
              key={p.id}
              src={p.thumbnail}
              alt={p.alt}
              className="h-40 w-56 shrink-0 rounded-lg object-cover"
              loading="lazy"
            />
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link to="/gallery" className="text-sm font-medium text-primary hover:underline">
            View All 44 Photos →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}

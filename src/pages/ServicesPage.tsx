import { Droplets, Wrench, Flame, ShowerHead, Trash2, PipetteIcon, Zap, Search, Eye, Plug, Gauge, CircleDot } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { getPhotoUrl } from "@/data/photos";

const services = [
  { icon: ShowerHead, title: "Bathtub Installation & Repair", desc: "Full bathtub installation and repair services for all types and sizes." },
  { icon: Droplets, title: "Drain Installation & Repair", desc: "Professional drain installation and repair for kitchens, bathrooms, and utilities." },
  { icon: Wrench, title: "Faucet Installation & Repair", desc: "Expert faucet installation, repair, and replacement for all fixtures." },
  { icon: Trash2, title: "Garbage Disposal Installation & Repair", desc: "Installation, repair, and replacement of garbage disposal units." },
  { icon: Flame, title: "Water Heater Installation & Repair", desc: "Tank and tankless water heater installation, repair, and maintenance." },
  { icon: PipetteIcon, title: "Hydro Jetting", desc: "High-pressure water jetting to clear tough clogs, grease, and tree root intrusions." },
  { icon: Zap, title: "Backflow Testing", desc: "Certified backflow prevention testing and device installation to protect water supply." },
  { icon: Eye, title: "Camera & Locate", desc: "Sewer camera inspection and line locating to diagnose problems without digging." },
  { icon: Search, title: "Leak Detection", desc: "Advanced leak detection technology to pinpoint hidden leaks in walls, floors, and underground." },
  { icon: PipetteIcon, title: "Sewer Liner Repair", desc: "Trenchless sewer liner solutions — both full liners and sectional liners for minimal disruption." },
  { icon: Plug, title: "Drain Cleaning", desc: "Complete drain cleaning services using professional-grade equipment." },
  { icon: Gauge, title: "General Plumbing Service & Repair", desc: "Comprehensive plumbing service and repair for residential and commercial properties." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex min-h-[260px] items-center justify-center overflow-hidden">
        <img
          src={getPhotoUrl("Of6S0dEOrBOW3FAmeCv-Jg", "o")}
          alt="NTP Services"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">Our Services</h1>
          <p className="mt-2 text-primary-foreground/70">Verified services from NTP's Yelp listing</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="service-card-hover rounded-xl border bg-card p-6">
                <s.icon className="mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-1 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Do you offer emergency plumbing services?", a: "Yes! NTP is open 24 hours a day, 7 days a week. We're available for emergency plumbing calls at any time." },
              { q: "What areas do you serve?", a: "We serve El Cajon and the greater San Diego County area." },
              { q: "What payment methods do you accept?", a: "We accept credit cards and cryptocurrency for your convenience." },
              { q: "Do you provide free estimates?", a: "[EXAMPLE – EDIT THIS] Contact us for a free estimate on your plumbing project." },
              { q: "Are you licensed and insured?", a: "[EXAMPLE – EDIT THIS] Please contact NTP directly to confirm licensing and insurance details." },
            ].map((faq) => (
              <div key={faq.q} className="rounded-lg border bg-card p-5">
                <h3 className="mb-2 font-semibold">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

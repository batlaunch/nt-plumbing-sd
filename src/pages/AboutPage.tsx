import { Link } from "react-router-dom";
import { getPhoto } from "@/data/photos";
import CTABanner from "@/components/CTABanner";
import HeroImage from "@/components/HeroImage";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Todo } from "@/components/RichText";
import Seo from "@/components/Seo";
import { BUSINESS } from "@/lib/business";

const heroPhoto = getPhoto("tiled-shower-valve-installation");
const workPhoto1 = getPhoto("toilet-vanity-installation-bathroom");
const workPhoto2 = getPhoto("drain-vent-pipe-repair-in-wall");

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About NTP Plumbing | Licensed El Cajon Plumber"
        description="NTP Plumbing is a licensed El Cajon plumbing company (CA Lic. #1040373, C-36) serving East County San Diego since 2018. Meet the team behind the work."
        path="/about"
      />
      {/* Hero */}
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden px-4">
        <HeroImage photo={heroPhoto} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">About NTP Plumbing</h1>
          <p className="mt-2 text-primary-foreground/80">A local, licensed plumbing company based in El Cajon</p>
        </div>
      </section>
      <PageBreadcrumb trail={[{ name: "About", path: "/about" }]} className="max-w-3xl" />

      <section className="section-padding">
        <div className="prose prose-slate mx-auto max-w-3xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          <p className="lead">
            NTP Plumbing is a licensed plumber in El Cajon, serving homeowners and businesses across East County San Diego. We
            run a small local plumbing company out of an office on E Douglas Ave. The person who answers the phone knows the
            area, and the plumber who shows up knows the houses.
          </p>

          <h2>A licensed plumber in El Cajon since 2018</h2>
          <p>
            NTP Plumbing is the trade name of NTP Inc, a California corporation. We've held a California plumbing contractor
            license since June 2018:
          </p>
          <table>
            <tbody>
              <tr><th scope="row">License number</th><td>#{BUSINESS.license.number}</td></tr>
              <tr><th scope="row">Classification</th><td>C-36 Plumbing Contractor</td></tr>
              <tr><th scope="row">Issued by</th><td>California Contractors State License Board (CSLB)</td></tr>
              <tr><th scope="row">Issued</th><td>June 7, 2018</td></tr>
              <tr><th scope="row">Bonded</th><td>Yes</td></tr>
              <tr><th scope="row">Status</th><td><Todo>confirm license shows "Active" on the CSLB website</Todo></td></tr>
            </tbody>
          </table>
          <p>
            Hiring a licensed contractor matters. In California, anything beyond minor work must be done by a licensed
            contractor, and a license means the business has met the state's experience, exam, and bonding requirements. You can{" "}
            <a href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx" target="_blank" rel="noopener noreferrer">
              verify any contractor's license on the CSLB website
            </a>
            . We'd encourage you to do that with anyone you hire.
          </p>

          <h2>Who you'll work with</h2>
          <p>
            <Todo>Owner bio: full name, role, years of plumbing experience (the old site said "20+ years"), and background before starting NTP in 2018</Todo>
          </p>
          <p>
            Customers who review us mention the same things again and again: we come out quickly, we explain what's wrong,
            and we test the fix before we leave. You can read their words on our <Link to="/reviews">reviews page</Link>.
          </p>

          <h2>What we do</h2>
          <p>We're a full-service residential and commercial plumbing company. Most of our work falls into a few areas:</p>
          <ul>
            <li><Link to="/services/emergency-plumber">24/7 emergency plumbing</Link>: burst pipes, sewer backups, leaking water heaters</li>
            <li><Link to="/services/drain-cleaning-hydro-jetting">Drain cleaning and hydro jetting</Link>, from kitchen sinks to main sewer lines</li>
            <li><Link to="/services/water-heater-repair">Water heater repair and replacement</Link>, gas and electric, plus <Link to="/services/tankless-water-heaters">tankless installation</Link></li>
            <li><Link to="/services/leak-detection">Leak detection and slab leak repair</Link></li>
            <li><Link to="/services/sewer-line-repair">Sewer line repair and replacement</Link>, including camera inspection and trenchless liners</li>
            <li><Link to="/services/fixture-installation-repair">Faucet, toilet, shower valve, tub and garbage disposal work</Link></li>
            <li><Link to="/services/backflow-testing">Backflow testing and certification</Link></li>
          </ul>

          <h2>How we work</h2>
          <ul>
            <li><strong>Diagnose first.</strong> Camera inspections for drains and sewers, pinpoint leak detection before cutting anything.</li>
            <li><strong>Price before work starts.</strong> You'll know the options and the cost before we begin.</li>
            <li><strong>Repair when repair makes sense.</strong> We don't push replacements a repair would handle.</li>
            <li><strong>Available 24/7.</strong> Nights, weekends, and holidays.</li>
          </ul>

          <h2>Where we work</h2>
          <p>
            Our office is at {BUSINESS.addressLine}. From there we cover El Cajon and the rest of East County: La Mesa,
            Santee, Lakeside, Spring Valley, Rancho San Diego, Lemon Grove, Alpine, Casa de Oro, and Mount Helix. See the full{" "}
            <Link to="/service-area">service area</Link>.
          </p>
          <p>We accept cash, check, credit cards, and Zelle.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          {[workPhoto1, workPhoto2].map((p) => (
            <figure key={p.id}>
              <img
                src={p.url640}
                alt={p.alt}
                width={640}
                height={Math.round((p.height / p.width) * 640)}
                className="h-64 w-full rounded-xl object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground">{p.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}

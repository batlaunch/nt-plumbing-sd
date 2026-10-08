import { getPhoto } from "@/data/photos";
import CTABanner from "@/components/CTABanner";
import HeroImage from "@/components/HeroImage";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Seo from "@/components/Seo";

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
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden">
        <HeroImage photo={heroPhoto} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">About NTP Plumbing</h1>
          <p className="mt-2 text-primary-foreground/70">Your Trusted 24/7 Plumber in El Cajon &amp; Greater San Diego</p>
        </div>
      </section>
      <PageBreadcrumb trail={[{ name: "About", path: "/about" }]} className="max-w-3xl" />

      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold">About the Business</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            NTP is a professional plumbing company serving El Cajon and the greater San Diego County area.
            With 20+ years of experience, owner-operator Nick T. specializes in a wide range of plumbing services including:
          </p>
          <ul className="mb-6 list-inside list-disc space-y-1 text-muted-foreground">
            <li>Drain cleaning, service, and repair</li>
            <li>Backflow testing and prevention</li>
            <li>Camera inspection and line locating</li>
            <li>Hydro jetting</li>
            <li>Water heater installation and repair</li>
            <li>Leak detection</li>
            <li>Sewer liner repairs — full liners and sectional liners</li>
          </ul>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            With a perfect 5.0-star rating on Yelp and 9 glowing reviews, NTP has built a reputation for 
            reliable, high-quality workmanship and outstanding customer service. The business operates 24 hours 
            a day, 7 days a week, ensuring customers can get help whenever plumbing emergencies arise.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            NTP serves the El Cajon area and accepts cash, check, credit cards, and Zelle for
            added convenience.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <img
              src={workPhoto1.url640}
              alt={workPhoto1.alt}
              width={workPhoto1.width}
              height={workPhoto1.height}
              className="rounded-xl object-cover w-full h-64"
              loading="lazy"
            />
            <img
              src={workPhoto2.url640}
              alt={workPhoto2.alt}
              width={workPhoto2.width}
              height={workPhoto2.height}
              className="rounded-xl object-cover w-full h-64"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

import { getPhotoUrl } from "@/data/photos";
import CTABanner from "@/components/CTABanner";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden">
        <img
          src={getPhotoUrl("4dR7TDBrMzHypMEX7B962g", "o")}
          alt="NTP Plumbing team"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">About NTP</h1>
          <p className="mt-2 text-primary-foreground/70">Your Trusted Plumber in El Cajon, CA</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold">About the Business</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            NTP is a professional plumbing company serving El Cajon and the greater San Diego County area. 
            Owned and operated by Nick T., NTP specializes in a wide range of plumbing services including:
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
            NTP serves the El Cajon area and accepts credit cards as well as cryptocurrency payments for 
            added convenience.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <img
              src={getPhotoUrl("fLKMy8MJF_wGnLIodG377g", "l")}
              alt="NTP plumbing work example"
              className="rounded-xl object-cover w-full h-64"
              loading="lazy"
            />
            <img
              src={getPhotoUrl("3GsposTukR3DamGOb5_YAQ", "l")}
              alt="NTP plumbing work example"
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

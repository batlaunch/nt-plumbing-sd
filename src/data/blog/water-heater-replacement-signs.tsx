import { Link } from "react-router-dom";
import type { BlogPost } from "./types";

export const meta: BlogPost["meta"] = {
  slug: "signs-you-need-a-water-heater-replacement",
  title: "5 Signs You Need a Water Heater Replacement (Not Just a Repair)",
  excerpt:
    "A water heater on its last legs doesn't always fail all at once. Here's how to tell whether a repair will hold, or whether it's time to replace the unit before it fails on its own schedule.",
  date: "July 24, 2026",
  dateISO: "2026-07-24",
  author: "NTP Plumbing",
  readTime: "4 min read",
  category: "Water Heaters",
  relatedServiceSlug: "water-heater-repair",
  seoTitle: "5 Signs You Need a Water Heater Replacement | NTP Plumbing",
  seoDescription: "Rusty water, a tank that's leaking, or lukewarm showers — here are the real signs it's time to replace your water heater instead of repairing it again.",
};

export default function Content() {
  return (
    <>
      <p>
        Most water heaters give some warning before they fail completely — the problem is that the warning signs
        are easy to write off as one-off issues. A repair can fix any one of these symptoms individually. But when
        a few of them show up together, or the unit is already past its expected lifespan, a repair is often just
        delaying a replacement you're going to need anyway — usually at a less convenient time.
      </p>

      <h2>1. The tank is 10+ years old</h2>
      <p>
        Most standard tank water heaters are built to last 8–12 years. If yours is in or past that range, any new
        problem is worth evaluating with replacement on the table, not just a like-for-like repair. Tankless units
        typically last longer — often 15–20 years — but the same logic applies once they're near the end of that
        range.
      </p>

      <h2>2. The water coming out is rusty or discolored</h2>
      <p>
        Rust-colored hot water (that runs clear from the cold tap) usually means the inside of the tank itself is
        corroding, not just a fitting or valve. Once the tank's lining has broken down, there's no repair for that —
        it's a matter of time before it leaks.
      </p>

      <h2>3. You're finding water around the base of the tank</h2>
      <p>
        A little condensation is normal. Standing water or a slow drip at the base of the tank is not — it usually
        means a crack has formed in the tank itself from internal corrosion, and tanks don't get patched. If you see
        this, it's worth a same-day call rather than waiting to see if it gets worse.
      </p>

      <h2>4. Your hot water runs out faster than it used to</h2>
      <p>
        Sediment builds up at the bottom of a tank over years of use, and it takes up space that used to hold hot
        water. A flush can help early on, but if the tank has been neglected for a while, the sediment layer can be
        thick enough that flushing doesn't meaningfully restore capacity.
      </p>

      <h2>5. You're calling for the same repair more than once</h2>
      <p>
        A single repair — a new thermocouple, a heating element, a thermostat — is often the right call. A second or
        third repair on the same unit within a year or two is usually a sign the unit is degrading overall, not that
        you got unlucky with parts.
      </p>

      <h2>Repair or replace? We'll tell you straight.</h2>
      <p>
        We diagnose the actual condition of the tank or unit before recommending anything — not the other way
        around. If a repair will genuinely hold, that's what we'll suggest.{" "}
        <Link to="/services/water-heater-repair">
          See how we handle tank and tankless water heater installation and repair
        </Link>
        , or call for a same-day diagnosis if your water heater is acting up right now.
      </p>
    </>
  );
}

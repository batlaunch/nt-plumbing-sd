import { Link } from "react-router-dom";
import type { BlogPost } from "./types";

export const meta: BlogPost["meta"] = {
  slug: "preventing-frozen-pipes-san-diego",
  title: "Do Pipes Freeze in San Diego? What to Know Before the Next Cold Snap",
  excerpt:
    "San Diego rarely sees hard freezes, but the East County and inland communities do — and homes here are built for mild weather, not for it. Here's what actually puts your pipes at risk.",
  date: "July 24, 2026",
  dateISO: "2026-07-24",
  author: "NTP Plumbing",
  readTime: "3 min read",
  category: "Prevention & Maintenance",
  relatedServiceSlug: "leak-detection",
  seoTitle: "Do Pipes Freeze in San Diego? Prevention Tips | NTP Plumbing",
  seoDescription: "San Diego homes aren't built for freezing temperatures, which is exactly why inland cold snaps catch pipes off guard. Here's how to protect yours.",
};

export default function Content() {
  return (
    <>
      <p>
        Coastal San Diego almost never sees freezing temperatures, but inland and East County communities — El
        Cajon, Alpine, Ramona, Lakeside — regularly dip below freezing on winter nights, especially at elevation.
        The risk isn't the cold itself; it's that homes here are built for a mild climate, without the pipe
        insulation and setback standard in colder states. A cold snap that would be unremarkable in Denver can catch
        a San Diego County home completely unprepared.
      </p>

      <h2>Where pipes are most at risk</h2>
      <p>
        The pipes most likely to freeze are the ones with the least protection from the cold: exposed pipes in
        garages, crawl spaces, and exterior walls, along with hose bibs and irrigation lines that run outdoors. If
        your home has any plumbing running through an uninsulated garage or under the house in a vented crawl space,
        that's where to focus.
      </p>

      <h2>Before a cold snap hits</h2>
      <ul>
        <li>Disconnect and drain garden hoses, and shut off any exterior hose bib valves if yours have one.</li>
        <li>
          Let a faucet fed by an exposed pipe drip slightly overnight — moving water is much less likely to freeze
          than water sitting still.
        </li>
        <li>Open cabinet doors under sinks on exterior walls so warm household air can reach the pipes.</li>
        <li>
          If you know a pipe has frozen or nearly frozen in a past cold snap, that's the one worth insulating before
          the next one.
        </li>
      </ul>

      <h2>If a pipe does freeze</h2>
      <p>
        Turn off the water supply to that line if you can, and avoid using a torch or open flame to thaw it
        yourself — a frozen section can crack from pressure buildup without ever visibly bursting, and you won't
        know until it thaws and starts leaking. If a pipe has frozen, or you're not sure whether one has cracked, a
        proper leak check is the safer next step before turning the water back on to that line.
      </p>

      <p>
        Not sure if a cold snap left you with a hidden leak?{" "}
        <Link to="/services/leak-detection">We can check without tearing anything open</Link> — call us any time,
        we're available 24/7.
      </p>
    </>
  );
}

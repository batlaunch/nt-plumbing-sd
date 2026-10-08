// Photos of NTP Plumbing's own jobs, self-hosted in public/images/gallery and
// generated from the original uploads. File names and alt text describe what
// each photo actually shows. Every photo has three sizes:
//   <slug>.webp (<=1200px), <slug>-640w.webp, <slug>-thumb.webp (300x300).
// Photos used as page heroes also have <slug>-hero.webp: lightly blurred and
// heavily compressed, since heroes sit under a dark overlay (keeps LCP fast).

export interface Photo {
  id: string;
  category: string;
  alt: string;
  /** Intrinsic size of the full-size image. */
  width: number;
  height: number;
  url: string;
  url640: string;
  thumbnail: string;
  /** Only exists for photos used with <HeroImage>. */
  hero: string;
}

const photo = (id: string, category: string, alt: string, width: number, height: number): Photo => ({
  id,
  category,
  alt,
  width,
  height,
  url: `/images/gallery/${id}.webp`,
  url640: `/images/gallery/${id}-640w.webp`,
  thumbnail: `/images/gallery/${id}-thumb.webp`,
  hero: `/images/gallery/${id}-hero.webp`,
});

export const allPhotos: Photo[] = [
  photo("copper-water-line-repair", "Water Lines & Repiping", "New copper water supply line and hose bib installed along a home's exterior wall", 750, 1000),
  photo("gas-water-heater-installation", "Water Heaters", "Newly installed gas tank water heater with flexible gas connector and copper water lines", 744, 992),
  photo("water-heater-replacement-closet", "Water Heaters", "Replacement gas water heater installed in an exterior utility closet", 744, 992),
  photo("gas-water-heater-replacement", "Water Heaters", "Gas water heater replacement with new copper supply lines and seismic strapping", 744, 992),
  photo("water-heater-installation-laundry-room", "Water Heaters", "Tank water heater installed on a raised stand in a laundry room", 750, 1000),
  photo("sewer-camera-inspection-footage", "Sewer & Drain Lines", "Sewer camera inspection footage looking down the inside of a sewer pipe", 1000, 462),
  photo("two-way-sewer-cleanout-installation", "Sewer & Drain Lines", "New ABS sewer line with a two-way cleanout installed beside a house", 1000, 750),
  photo("sewer-line-cleanout-installation", "Sewer & Drain Lines", "New ABS sewer line and cleanout riser laid in an open trench", 750, 1000),
  photo("new-sewer-line-wye-fitting", "Sewer & Drain Lines", "Replacement sewer line with a wye fitting bedded in a dug trench", 750, 1000),
  photo("cast-iron-to-abs-sewer-transition", "Sewer & Drain Lines", "Excavated sewer line where old pipe is being transitioned to new ABS fittings", 1000, 750),
  photo("abs-sewer-line-replacement", "Sewer & Drain Lines", "Black ABS sewer pipe being installed in a trench along a fence line", 750, 1000),
  photo("sewer-line-replacement-trench-cleanout", "Sewer & Drain Lines", "Sewer line replacement trench with a new cleanout next to a brick wall", 750, 1000),
  photo("sewer-line-replacement-trench", "Sewer & Drain Lines", "Open trench with new sewer pipe running alongside a chain-link fence", 750, 1000),
  photo("sewer-line-trench-excavation", "Sewer & Drain Lines", "Long trench excavated across a yard for sewer line replacement", 750, 1000),
  photo("sewer-line-trench-narrow", "Sewer & Drain Lines", "Narrow excavated trench exposing a sewer line for replacement", 750, 1000),
  photo("sewer-cleanout-trench", "Sewer & Drain Lines", "Sewer cleanout riser installed in a trench on a sloped lot", 750, 1000),
  photo("sewer-line-trench-hillside", "Sewer & Drain Lines", "Sewer line trench dug on a rocky hillside property", 1000, 750),
  photo("sewer-trench-rocky-soil", "Sewer & Drain Lines", "Sewer line trench cut through rocky East County soil", 750, 1000),
  photo("sewer-lateral-repair-sidewalk", "Sewer & Drain Lines", "Sewer lateral excavation through a sidewalk with safety cones in place", 750, 1000),
  photo("broken-sewer-pipe-exposed", "Sewer & Drain Lines", "Excavated section of old sewer pipe showing a broken, deteriorated joint", 750, 1000),
  photo("broken-sewer-pipe-excavation", "Sewer & Drain Lines", "Close-up of a damaged sewer pipe uncovered during excavation", 750, 1000),
  photo("drain-line-repair-under-foundation", "Sewer & Drain Lines", "Drain line fittings exposed under a home's foundation during repair", 1000, 750),
  photo("drain-line-excavation-under-house", "Sewer & Drain Lines", "Excavation beneath a house exposing drain line connections", 1000, 750),
  photo("sewage-ejector-pump-installation", "Sewer & Drain Lines", "Sewage ejector pump installed with new ABS discharge piping", 750, 1000),
  photo("yard-backfilled-after-sewer-repair", "Sewer & Drain Lines", "Backyard graded and backfilled after a sewer line repair", 750, 1000),
  photo("yard-restored-after-sewer-replacement", "Sewer & Drain Lines", "Yard restored after sewer replacement, with the new cleanout at grade", 750, 1000),
  photo("sewer-trench-backyard", "Sewer & Drain Lines", "Sewer line trench running along a backyard fence near large boulders", 750, 1000),
  photo("water-line-replacement-trench", "Water Lines & Repiping", "New blue water supply line laid in an excavated trench", 1000, 750),
  photo("pex-repipe-inside-wall", "Water Lines & Repiping", "New PEX water supply lines routed inside an opened wall", 750, 1000),
  photo("bathtub-valve-pex-repipe", "Water Lines & Repiping", "Opened wall behind a bathtub showing new PEX supply lines to the tub valve", 1000, 750),
  photo("pressure-regulator-main-shutoff-installation", "Water Lines & Repiping", "Copper main water line with a new pressure regulator and shutoff valves", 750, 1000),
  photo("drain-vent-pipe-repair-in-wall", "Drains & Fixtures", "Opened stucco wall exposing a repaired drain and vent pipe", 750, 1000),
  photo("cast-iron-drain-stack-repair", "Drains & Fixtures", "Drain stack in an opened wall repaired with new pipe and no-hub couplings", 750, 1000),
  photo("shower-valve-replacement", "Drains & Fixtures", "New shower valve trim and handheld shower head on a fiberglass surround", 750, 1000),
  photo("shower-valve-handheld-installation", "Drains & Fixtures", "Shower valve and handheld shower installed in a new white surround", 750, 1000),
  photo("tiled-shower-valve-installation", "Drains & Fixtures", "Tiled shower with a newly installed shower valve and head", 750, 1000),
  photo("shower-surround-installation", "Drains & Fixtures", "New fiberglass shower surround installed with built-in shelves", 750, 1000),
  photo("shower-pan-installation", "Drains & Fixtures", "New shower pan with center drain installed", 750, 1000),
  photo("bathtub-shower-installation", "Drains & Fixtures", "Finished bathroom with a new bathtub, shower valve, and tiled surround", 750, 1000),
  photo("bathtub-replacement", "Drains & Fixtures", "New bathtub set in place during a bathroom remodel", 1000, 750),
  photo("bathtub-installation-remodel", "Drains & Fixtures", "Replacement bathtub installed with the wall opened for valve work", 1000, 750),
  photo("toilet-and-vanity-installation", "Drains & Fixtures", "Bathroom with a newly installed toilet, vanity sink, and faucet", 750, 1000),
  photo("toilet-vanity-installation-bathroom", "Drains & Fixtures", "Small bathroom with a new toilet and vanity installed", 750, 1000),
];

export function getPhoto(id: string): Photo {
  const p = allPhotos.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown photo: ${id}`);
  return p;
}

export const OG_IMAGE = "/images/gallery/ntp-plumbing-gas-water-heater-installation.jpg";

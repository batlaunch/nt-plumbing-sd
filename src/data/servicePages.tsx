import { Droplets, Flame, Search, ShowerHead, CircleDot, Zap, Siren, Thermometer, Wrench, Fuel, Filter, type LucideIcon } from "lucide-react";
import type { ServiceContent } from "./services/types";
import { drainCleaning } from "./services/drain-cleaning-hydro-jetting";
import { waterHeaterRepair } from "./services/water-heater-repair";
import { leakDetection } from "./services/leak-detection";
import { fixtureRepair } from "./services/fixture-installation-repair";
import { sewerLineRepair } from "./services/sewer-line-repair";
import { backflowTesting } from "./services/backflow-testing";
import { emergencyPlumber } from "./services/emergency-plumber";
import { tanklessWaterHeaters } from "./services/tankless-water-heaters";
import { repiping } from "./services/repiping";
import { gasLineRepair } from "./services/gas-line-repair";
import { waterSoftenersFiltration } from "./services/water-softeners-filtration";

export type ServicePageData = ServiceContent & { icon: LucideIcon };

// Order here is the order services appear in grids, nav and the footer.
// New service: add a file in ./services, then one entry here. Set
// `published: false` until the client confirms NTP offers it.
export const servicePages: ServicePageData[] = [
  { ...emergencyPlumber, icon: Siren },
  { ...drainCleaning, icon: Droplets },
  { ...waterHeaterRepair, icon: Flame },
  { ...tanklessWaterHeaters, icon: Thermometer },
  { ...leakDetection, icon: Search },
  { ...sewerLineRepair, icon: CircleDot },
  { ...fixtureRepair, icon: ShowerHead },
  { ...backflowTesting, icon: Zap },
  // Drafts (published: false) — awaiting client confirmation.
  { ...repiping, icon: Wrench },
  { ...gasLineRepair, icon: Fuel },
  { ...waterSoftenersFiltration, icon: Filter },
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((s) => s.slug === slug);
}

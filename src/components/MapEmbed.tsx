import { MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/business";

/** Google Map of the El Cajon office, plus the address as plain crawlable text. */
export default function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-xl border bg-card shadow-sm ${className}`}>
      <iframe
        title={`Map of ${BUSINESS.name} at ${BUSINESS.addressLine}`}
        src={BUSINESS.mapEmbedUrl}
        width="600"
        height="360"
        className="block h-[300px] w-full md:h-[360px]"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <figcaption className="flex items-start gap-2 px-4 py-3 text-sm">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
        <span>
          <span className="font-semibold">{BUSINESS.name}</span> · {BUSINESS.addressLine} ·{" "}
          <a href={BUSINESS.mapLinkUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Get directions
          </a>
        </span>
      </figcaption>
    </figure>
  );
}

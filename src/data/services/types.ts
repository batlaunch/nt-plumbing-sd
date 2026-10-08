import type { Faq } from "@/lib/schema";

/**
 * Content for one /services/<slug> page. Rich-text fields use the small
 * Markdown subset in components/RichText ([links](/path), **bold**, lists,
 * ### subheads, {{TODO: ...}} placeholders).
 *
 * Page order is fixed by ServiceDetailPage: H1 → quick answer → sections (in
 * order) → FAQ → related services → CTA.
 */
export interface ServiceContent {
  slug: string;
  /** false = awaiting client confirmation that NTP offers this; noindex + hidden from nav/sitemap. */
  published: boolean;
  /** YYYY-MM-DD, used for sitemap lastmod. */
  lastmod: string;
  navTitle: string;
  cardDesc: string;
  /** H1 — contains the primary keyword. */
  title: string;
  heroSubtitle: string;
  /** Photo id from data/photos. */
  heroPhoto: string;
  seoTitle: string;
  seoDescription: string;
  /** schema.org Service.serviceType */
  serviceType: string;
  /** 2–3 sentences an AI assistant could quote directly: what, where, how fast, phone. */
  quickAnswer: string;
  sections: { heading: string; body: string }[];
  faqs: Faq[];
  /** 2–3 closely related service slugs for internal linking. */
  related: string[];
}

/**
 * "Why homeowners in East County call NTP" — the verified facts stated the same
 * way on every service page, plus service-specific points.
 */
export function whyNtp(servicePoints: string[], warrantyTopic: string): string {
  return [
    "- **Licensed since 2018.** NTP Plumbing (NTP Inc) holds California C-36 Plumbing Contractor license #1040373, issued by the Contractors State License Board in June 2018. You can [look it up on the CSLB website](https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx) before we ever show up.",
    "- **Bonded.** We carry the contractor's bond required by the CSLB.",
    "- **Actually local.** Our office is at 270 E Douglas Ave in El Cajon, so La Mesa, Santee, Lakeside, Spring Valley and Rancho San Diego are a short drive, not a trip across the county.",
    ...servicePoints.map((p) => `- ${p}`),
    "- **Response time:** {{TODO: typical response time for a standard vs. emergency call}}",
    `- **Warranty:** {{TODO: warranty on ${warrantyTopic} (parts and labor)}}`,
  ].join("\n");
}

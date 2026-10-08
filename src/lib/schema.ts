// JSON-LD builders. The sitewide Plumber entity has a stable @id so every
// Service / BlogPosting / WebPage on the site can reference the same business
// instead of re-declaring a slightly different copy of it.
import { BUSINESS, SITE_URL } from "@/lib/business";
import { OG_IMAGE } from "@/data/photos";

export const BUSINESS_ID = `${SITE_URL}/#business`;

type Json = Record<string, unknown>;

const stripMarkup = (s: string) =>
  s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\{\{TODO:[^}]*\}\}/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();

export function businessSchema(): Json {
  const sameAs = [BUSINESS.yelpUrl, BUSINESS.googleBusinessProfileUrl, BUSINESS.bbbUrl, BUSINESS.facebookUrl].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    alternateName: "NTP Plumbing El Cajon",
    description: `Licensed plumbing contractor in El Cajon, CA (${BUSINESS.license.short}) serving East County San Diego.`,
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    image: `${SITE_URL}${OG_IMAGE}`,
    logo: `${SITE_URL}/favicon.png`,
    foundingDate: BUSINESS.foundingYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: `California C-36 Plumbing Contractor License #${BUSINESS.license.number}`,
      credentialCategory: "license",
      identifier: BUSINESS.license.number,
      dateCreated: BUSINESS.license.issued,
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: BUSINESS.license.issuer,
        url: "https://www.cslb.ca.gov/",
      },
    },
    // Only emitted while the site advertises 24/7 (TODO-CLIENT confirms).
    ...(BUSINESS.open24x7 ? {
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    } : {}),
    // priceRange intentionally omitted until the client supplies it (TODO-CLIENT).
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "City",
      name: `${name}, CA`,
    })),
    ...(BUSINESS.googleBusinessProfileUrl ? { hasMap: BUSINESS.googleBusinessProfileUrl } : {}),
    sameAs,
  };
}

export function serviceSchema(opts: { name: string; serviceType: string; description: string; path: string }): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: stripMarkup(opts.description),
    url: `${SITE_URL}${opts.path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "City", name: `${name}, CA` })),
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbSchema(crumbs: Crumb[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export interface Faq {
  q: string;
  a: string;
}

export function faqSchema(faqs: Faq[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: stripMarkup(f.a) },
    })),
  };
}

export function blogPostingSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}): Json {
  const url = `${SITE_URL}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { "@type": "Organization", "@id": BUSINESS_ID, name: BUSINESS.name, url: SITE_URL },
    publisher: { "@id": BUSINESS_ID },
    image: `${SITE_URL}${opts.image ?? OG_IMAGE}`,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-US",
  };
}

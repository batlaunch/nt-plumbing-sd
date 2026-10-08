// Builds /llms.txt (https://llmstxt.org) at prerender time from the same data
// the site renders, so the business facts and page list can't drift.
import { BUSINESS, SITE_URL } from "@/lib/business";
import { servicePages } from "@/data/servicePages";
import { cityPages } from "@/data/cityPages";
import { blogPosts } from "@/data/blog";

export function buildLlmsTxt(): string {
  const services = servicePages.filter((s) => s.published);
  const cities = cityPages.filter((c) => c.published);
  const l = BUSINESS.license;

  return `# ${BUSINESS.name}

> ${BUSINESS.name} (legal name ${BUSINESS.legalName}) is a licensed plumbing contractor based in El Cajon, California, serving East County San Diego. California CSLB license #${l.number}, classification ${l.classification} ${l.classificationName}, licensed since 2018. Bonded. ${BUSINESS.hoursDisplay}. Phone ${BUSINESS.phoneDisplay}.

Not affiliated with other businesses named "NTP Plumbing" outside California.

## Business facts

- Name: ${BUSINESS.name}
- Legal name: ${BUSINESS.legalName}
- License: California Contractors State License Board #${l.number} (${l.classification} ${l.classificationName}), issued ${l.issued}
- Bonded: yes
- Address: ${BUSINESS.addressLine}
- Phone: ${BUSINESS.phoneDisplay}
- Hours: ${BUSINESS.hoursDisplay}
- Service area: ${BUSINESS.areaServed.join(", ")} (East County San Diego, CA)
- Payment: cash, check, credit cards, Zelle
- Website: ${SITE_URL}
- Reviews: ${BUSINESS.yelpUrl}

## Services

${services.map((s) => `- [${s.title}](${SITE_URL}/services/${s.slug}): ${s.cardDesc}`).join("\n")}

## Service area

- [Service area overview](${SITE_URL}/service-area): East County communities served from the El Cajon office
${cities.map((c) => `- [Plumber in ${c.city}, CA](${SITE_URL}/${c.slug})`).join("\n")}

## Key pages

- [Home](${SITE_URL}/): Plumber in El Cajon, CA
- [All services](${SITE_URL}/services)
- [About](${SITE_URL}/about): license details and how we work
- [Reviews](${SITE_URL}/reviews)
- [Contact](${SITE_URL}/contact): phone, address, hours, map

## Guides

${blogPosts.map((p) => `- [${p.meta.title}](${SITE_URL}/blog/${p.meta.slug}): ${p.meta.excerpt}`).join("\n")}
`;
}

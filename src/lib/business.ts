// Single source of truth for NTP Plumbing's name, address, phone (NAP) and
// licensing. Every page, the footer, JSON-LD, and llms.txt read from here so the
// details stay identical everywhere — Google and AI assistants cross-check NAP
// consistency against the Google Business Profile.
//
// Unrelated businesses called "NTP Plumbing" exist in Texas, so anywhere the
// brand name appears in structured data it's paired with El Cajon and the CSLB
// license number to keep the entity distinct.

export const SITE_URL = "https://ntpplumbing.com";

export const BUSINESS = {
  name: "NTP Plumbing",
  legalName: "NTP Inc",
  phoneDisplay: "(619) 550-7371",
  phoneE164: "+1-619-550-7371",
  phoneHref: "tel:+16195507371",
  // Must match the Google Business Profile character for character.
  // TODO-CLIENT: confirm GBP formatting and whether there's a suite number.
  address: {
    street: "270 E Douglas Ave",
    city: "El Cajon",
    region: "CA",
    postalCode: "92020",
    country: "US",
  },
  addressLine: "270 E Douglas Ave, El Cajon, CA 92020",
  // OpenStreetMap rooftop point for 270 E Douglas Ave (Census geocoder agrees
  // to within ~30 m: 32.79387, -116.95925).
  geo: { latitude: 32.79415, longitude: -116.95925 },
  license: {
    number: "1040373",
    classification: "C-36",
    classificationName: "Plumbing Contractor",
    issuer: "California Contractors State License Board",
    issued: "2018-06-07",
    short: "CA Lic. #1040373 (C-36)",
  },
  foundingYear: "2018",
  // Existing site copy already advertises 24/7 availability.
  // TODO-CLIENT: confirm 24/7 is still accurate.
  open24x7: true,
  hoursDisplay: "Open 24 hours, 7 days a week",
  yelpUrl: "https://www.yelp.com/biz/ntp-el-cajon-4",
  // TODO-CLIENT: Google Business Profile, BBB, and Facebook URLs. Add them here
  // and they'll flow into sameAs/hasMap automatically.
  googleBusinessProfileUrl: "",
  bbbUrl: "",
  facebookUrl: "",
  mapEmbedUrl:
    "https://www.google.com/maps?q=270+E+Douglas+Ave,+El+Cajon,+CA+92020&z=15&output=embed",
  mapLinkUrl: "https://www.google.com/maps/search/?api=1&query=270+E+Douglas+Ave%2C+El+Cajon%2C+CA+92020",
  areaServed: [
    "El Cajon",
    "La Mesa",
    "Santee",
    "Lakeside",
    "Spring Valley",
    "Rancho San Diego",
    "Lemon Grove",
    "Alpine",
    "Casa de Oro",
    "Mount Helix",
  ],
} as const;

export const NAP_LINE = `${BUSINESS.name} · ${BUSINESS.addressLine} · ${BUSINESS.phoneDisplay} · ${BUSINESS.license.short}`;

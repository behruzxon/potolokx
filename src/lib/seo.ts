import type { Metadata } from "next";
import { site } from "./site";

type BuildMetaArgs = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  ogImage = "/og-default.svg",
}: BuildMetaArgs): Metadata {
  const url = `${site.url}${path}`;
  const allKeywords = Array.from(new Set([...site.keywords, ...keywords]));

  return {
    title,
    description,
    keywords: allKeywords,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title,
      description,
      locale: "uz_UZ",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function localBusinessJsonLd(extra?: { areaServed?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}#business`,
    name: site.name,
    alternateName: [
      "Vashpotolok",
      "PotolokX — Natijnoy potolok",
      "Natijnoy patalok",
      "Natijnoy potolok",
      "Натяжной потолок",
    ],
    legalName: site.legalName,
    image: `${site.url}/og-default.svg`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    description: site.description,
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Natijnoy potolok xizmatlari",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Natijnoy potolok o'rnatish",
            serviceType: "Stretch ceiling installation",
          },
        },
      ],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mustaqillik ko'chasi",
      addressLocality: site.baseCity,
      addressRegion: site.region,
      addressCountry: "UZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.8434,
      longitude: 65.7887,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    areaServed: (extra?.areaServed ?? [
      "Qarshi",
      "Shahrisabz",
      "Kitob",
      "Chiroqchi",
      "Yakkabog'",
      "Koson",
      "G'uzor",
      "Qamashi",
      "Muborak",
      "Nishon",
      "Kasbi",
      "Mirishkor",
      "Dehqonobod",
    ]).map((city) => ({ "@type": "City", name: city })),
    sameAs: [site.telegramUrl],
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; href: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}

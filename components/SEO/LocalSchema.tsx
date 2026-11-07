import { business, coordinatesConfigured } from "@/lib/business";
import { serviceAreas } from "@/lib/service-areas";

export function LocalSchema() {
  const locationIsReal = ![business.city, business.region].some((value) =>
    value.includes("["),
  );
  if (!locationIsReal) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": ["AutomotiveBusiness", "AutoRepair", "TowingService"],
    name: business.name,
    url: business.siteUrl,
    image: `${business.siteUrl}/opengraph-image`,
    telephone: business.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressRegion: business.region,
      addressCountry: business.country,
      ...(!business.streetAddress.includes("[") && {
        streetAddress: business.streetAddress,
      }),
      ...(!business.postalCode.includes("[") && {
        postalCode: business.postalCode,
      }),
    },
    ...(coordinatesConfigured && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.latitude,
        longitude: business.longitude,
      },
    }),
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
        ],
        opens: "09:00",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "15:30",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phone,
      contactType: "emergency dispatch",
      availableLanguage: "English",
      hoursAvailable: {
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
        opens: "00:00",
        closes: "23:59",
      },
    },
    areaServed: serviceAreas.map(({ name }) => ({
      "@type": "Place",
      name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Towing and auto repair services",
      itemListElement: [
        "Emergency towing",
        "Roadside assistance",
        "Brake repair",
        "Transmission service",
        "Engine diagnostics",
        "Oil change and maintenance",
        "New and used tires",
        "Suspension service and repair",
        "Engine tune-up",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

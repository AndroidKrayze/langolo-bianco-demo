import { hours, publicOrigin, site } from "@/site.config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    alternateName: [...site.alsoKnownAs],
    description: site.description,
    image: `${publicOrigin()}/opengraph-image`,
    telephone: site.phoneIntl,
    url: publicOrigin(),
    servesCuisine: site.cuisine,
    priceRange: site.priceSchema,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.city,
      addressRegion: "Greater London",
      postalCode: site.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.googleMapsPlace,
    openingHoursSpecification: hours.days.map((d) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: d.day,
      opens: d.opens,
      closes: d.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.ratings.google.rating,
      reviewCount: site.ratings.google.count,
      bestRating: 5,
    },
    sameAs: [
      site.instagram,
      site.thefork.reserve,
      site.tripadvisor,
      site.deliveroo,
    ],
    acceptsReservations: "True",
    menu: site.thefork.menu,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

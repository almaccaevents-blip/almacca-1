export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "Al-Macca Caterers",
    image: "https://almacca.com/images/logo.jpeg",
    description:
      "Premium catering services for weddings, corporate events, and special occasions in Karachi.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop no 2, Plot no R-955, Block 15, Dastagir, F.B Area",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      postalCode: "75950",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.932828,
      longitude: 67.086386,
    },
    url: "https://almacca.com",
    telephone: "+923001234567",
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
        opens: "11:00",
        closes: "23:00",
      },
    ],
    menu: "https://almacca.com/packages",
    servesCuisine: "Pakistani",
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

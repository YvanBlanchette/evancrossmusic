
export function ArtistSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "@id": "https://evancrossmusic.com/#artist",
    name: "Evan Cross",
    alternateName: "Evan Cross Music",
    url: "https://evancrossmusic.com",
    description:
      "Canadian singer-songwriter creating original country, soul, blues, and Americana music in English and French.",
    genre: [
      "Country",
      "Americana",
      "Soul",
      "Blues",
      "Country Rock",
    ],
    foundingLocation: {
      "@type": "Place",
      name: "Canada",
    },
    image:
      "https://evancrossmusic.com/og-image.jpg",
    sameAs: [
      "https://www.youtube.com/@evancrossmusic",
      "https://soundcloud.com/evancrossmusic",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}

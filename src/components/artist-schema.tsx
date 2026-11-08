"use client";

import { usePathname } from "next/navigation";
import { localeFromPath } from "@/lib/i18n";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://evancrossmusic.com"
).replace(/\/+$/, "");

export function ArtistSchema() {
  const locale = localeFromPath(usePathname());
  const french = locale === "fr";
  const pageUrl = `${siteUrl}${french ? "/fr" : ""}`;
  const description = french
    ? "Auteur-compositeur canadien indépendant, Evan Cross crée des chansons originales aux couleurs country, soul, blues et Americana, en français et en anglais."
    : "Canadian independent singer-songwriter Evan Cross creates original country, soul, blues, and Americana music in English and French.";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": `${siteUrl}/#artist`,
        name: "Evan Cross",
        alternateName: "Evan Cross Music",
        url: siteUrl,
        image: `${siteUrl}/assets/og-image.jpg`,
        description,
        genre: ["Country", "Americana", "Soul", "Blues", "Country Rock"],
        foundingLocation: { "@type": "Place", name: "Canada" },
        inLanguage: french ? "fr-CA" : "en-CA",
        sameAs: [
          "https://www.youtube.com/@evancrossmusic",
          "https://soundcloud.com/evancrossmusic",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: pageUrl,
        name: "Evan Cross Music",
        description,
        inLanguage: french ? "fr-CA" : "en-CA",
        publisher: { "@id": `${siteUrl}/#artist` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}

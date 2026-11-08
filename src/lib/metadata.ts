import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

export function localizedMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const frenchPath = `/fr${path === "/" ? "" : path}`;
  const canonical = locale === "fr" ? frenchPath : path;
  const openGraphLocale = locale === "fr" ? "fr_CA" : "en_CA";
  const keywords =
    locale === "fr"
      ? [
          "Evan Cross",
          "musique country canadienne",
          "auteur-compositeur canadien",
          "musique indépendante",
          "Americana",
          "soul",
          "blues",
          "chansons francophones",
          "paroles en français",
        ]
      : [
          "Evan Cross",
          "Canadian singer-songwriter",
          "Canadian country music",
          "independent music",
          "Americana",
          "soul",
          "blues",
          "English and French songs",
        ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        "en-CA": path,
        "fr-CA": frenchPath,
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      locale: openGraphLocale,
      url: canonical,
      images: ["/assets/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/og-image.jpg"],
    },
  };
}

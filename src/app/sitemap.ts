import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://evancrossmusic.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "about", "music", "lyrics", "videos"];

  return routes.flatMap((route) => {
    const englishPath = route ? `/${route}/` : "/";
    const frenchPath = route ? `/fr/${route}/` : "/fr/";
    const languages = {
      "en-CA": `${baseUrl}${englishPath}`,
      "fr-CA": `${baseUrl}${frenchPath}`,
    };
    return [
      {
        url: `${baseUrl}${englishPath}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.7,
        alternates: { languages },
      },
      {
        url: `${baseUrl}${frenchPath}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.7,
        alternates: { languages },
      },
    ];
  });
}

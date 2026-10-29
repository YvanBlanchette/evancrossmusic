import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://evancrossmusic.com";

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = ["", "/about", "/music", "/lyrics", "/videos"];

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: route === "" ? 1 : 0.7,
	}));
}

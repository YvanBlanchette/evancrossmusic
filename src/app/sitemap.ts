import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://evancrossmusic.com";

	const routes = ["", "/about", "/music", "/lyrics", "/videos"];

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: route === "" ? 1 : 0.7,
	}));
}

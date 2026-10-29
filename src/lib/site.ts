import songData from "./songs.json";

export const site = {
	name: "Evan Cross Music",
	description: "Canadian songwriter and independent artist blending country, soul, blues, and Americana. Music, lyrics, videos and stories.",
	socials: [
		{ name: "Facebook", url: "https://www.facebook.com/evancrosscmusic" },
		{ name: "Instagram", url: "https://www.instagram.com/evancrosscmusic" },
		{ name: "YouTube", url: "https://www.youtube.com/@evancrossmusic" },
		{ name: "TikTok", url: "https://www.tiktok.com/@evancrossmusic" },
	],
	platforms: [
		{ name: "Spotify", url: null },
		{ name: "Amazon Music", url: null },
		{ name: "Apple Music", url: null },
		{ name: "SoundCloud", url: "https://soundcloud.com/evancrossmusic" },
		{ name: "YouTube Music", url: null },
	],
	navigation: [
		{ title: "Home", href: "/" },
		{ title: "Music", href: "/music" },
		{ title: "Lyrics", href: "/lyrics" },
		// { title: "Videos", href: "/videos" },
		{ title: "About", href: "/about" },
	],
};
export type Song = {
	id: string;
	title: string;
	language: string;
	lyrics: string;
	excerpt?: string;
	links?: { name: string; url: string }[];
};
// Only add approved, published lyrics and owned/licensed audio excerpts here.
export const songs: Song[] = songData.map((song) => ({
	...song,
	lyrics: song.lyrics.join("\n"),
}));

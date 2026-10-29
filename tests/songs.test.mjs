import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const songs = JSON.parse(await readFile(new URL("../src/lib/songs.json", import.meta.url), "utf8"));

test("published songs have unique IDs and complete lyric data", () => {
	assert.equal(songs.length, 22);
	assert.equal(new Set(songs.map((song) => song.id)).size, songs.length);
	for (const song of songs) {
		assert.ok(song.title);
		assert.ok(["en", "fr"].includes(song.language));
		assert.ok(Array.isArray(song.lyrics) && song.lyrics.length > 0);
	}
});

test("catalog includes both English and French lyrics", () => {
	assert.ok(songs.some((song) => song.language === "en"));
	assert.ok(songs.some((song) => song.language === "fr"));
});

import type { Metadata } from "next";
import { MiniHero } from "@/components/mini-hero";
import { Songbook } from "@/components/songbook";
import { LyricsNotebook } from "@/components/lyrics-notebook";
export const metadata: Metadata = { title: "Lyrics" };
export default function LyricsPage() {
  return (
    <>
      <MiniHero page="lyrics" />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-12">
        <Songbook />
        <LyricsNotebook />
      </div>
    </>
  );
}

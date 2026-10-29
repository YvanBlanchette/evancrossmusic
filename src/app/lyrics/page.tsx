import "@fontsource/cormorant-garamond/400.css";
import type { Metadata } from "next";
import { MiniHero } from "@/components/mini-hero";
import { Songbook } from "@/components/songbook";
export const metadata: Metadata = {
  title: "Lyrics",
  description: "Read Evan Cross lyrics in English and French.",
};
export default function LyricsPage() {
  return (
    <>
      <MiniHero page="lyrics" />
      <section className="bg-[#17191a] text-[#f3eee6]">
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <Songbook />
        </div>
      </section>
    </>
  );
}

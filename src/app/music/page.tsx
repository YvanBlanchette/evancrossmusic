import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MiniHero } from "@/components/mini-hero";
import { GuitarPlayerSection } from "@/components/guitar-player-section";
import { songs } from "@/lib/site";
export const metadata: Metadata = {
  title: "Music",
  description:
    "Listen to Evan Cross, a Canadian songwriter blending country, soul, blues, and Americana.",
};
export default function MusicPage() {
  return (
    <>
      <MiniHero page="music" />
      {/* LISTENING ROOM */}
      <section className="bg-[#17191a] px-6 py-14 text-[#f3eee6] sm:px-12 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-[10px] font-medium tracking-[0.18em] text-[#d18a70]">
              THE COLLECTION
            </p>
            <h2 className="mt-5 max-w-sm font-editorial text-5xl leading-[1.02] sm:text-6xl">
              Stay for a song.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              Listen to the full Evan Cross collection on SoundCloud, from
              quiet reflections to songs with a little more fire.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="https://soundcloud.com/evancrossmusic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-3 bg-[#d18a70] px-5 text-xs font-semibold text-[#17191a] transition-colors hover:bg-[#f3eee6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Listen on SoundCloud <ArrowUpRight className="size-4" />
              </a>
              <a
                href="https://www.youtube.com/@evancrossmusic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-xs text-white/65 transition-colors hover:text-white"
              >
                Watch on YouTube <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
          <div className="grid min-w-0 gap-3 lg:aspect-[2.4] lg:grid-cols-[1.15fr_.85fr]">
            <figure className="relative aspect-video overflow-hidden lg:aspect-auto">
              <Image
                src="/assets/show-bar-stage.png"
                alt="Evan Cross performing with a band on stage"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-5 bottom-5 text-[9px] font-medium tracking-[0.16em] text-white sm:inset-x-7 sm:bottom-7">
                ON STAGE
              </figcaption>
            </figure>
            <figure className="relative aspect-video overflow-hidden lg:aspect-auto">
              <Image
                src="/assets/cheers.png"
                alt="Evan Cross raising a glass with his guitar among the band"
                fill
                sizes="(max-width: 1024px) 100vw, 370px"
                className="object-cover object-center -scale-x-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-5 bottom-5 text-[9px] font-medium tracking-[0.16em] text-white sm:inset-x-7 sm:bottom-7">
                A TOAST BETWEEN SONGS
              </figcaption>
            </figure>
          </div>
        </div>
        <GuitarPlayerSection className="-mx-6 mt-14 w-auto sm:-mx-12 sm:mt-20" />
      </section>

      {/* WORDS BEHIND THE MUSIC */}
      <section className="bg-background px-6 py-14 sm:px-12 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <p className="text-[10px] font-medium tracking-[0.18em] text-[#9b5b46]">
              WORDS IN ENGLISH & FRENCH
            </p>
            <h2 className="mt-5 max-w-lg font-editorial text-4xl leading-[1.05] text-foreground sm:text-5xl">
              Every song begins with something real.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
              Explore {songs.length} published lyrics about love, family,
              resilience, faith, and starting again.
            </p>
            <Link
              href="/lyrics"
              className="mt-6 inline-flex min-h-11 items-center gap-4 border-b border-foreground/30 text-sm font-semibold text-foreground transition-colors hover:text-[#9b5b46]"
            >
              Read the lyrics <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <figure className="relative aspect-[1.35] min-h-64 overflow-hidden">
            <Image
              src="/assets/songwriting.webp"
              alt="Evan Cross writing lyrics in the studio"
              fill
              sizes="(max-width: 768px) 100vw, 650px"
              className="object-cover object-center"
            />
          </figure>
        </div>
      </section>
    </>
  );
}

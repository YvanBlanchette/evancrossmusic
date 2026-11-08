import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MiniHero } from "@/components/mini-hero";
import { GuitarPlayerSection } from "@/components/guitar-player-section";
import { songs } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import { translations } from "@/lib/i18n";
export function MusicPage({ locale = "en" }: { locale?: Locale } = {}) {
  const copy = translations[locale].music;
  return (
    <>
      <MiniHero page="music" locale={locale} />
      {/* LISTENING ROOM */}
      <section className="bg-[#17191a] px-6 py-14 text-[#f3eee6] sm:px-12 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-[10px] font-medium tracking-[0.18em] text-[#d18a70]">
              {copy.collection}
            </p>
            <h2 className="mt-5 max-w-sm font-editorial text-5xl leading-[1.02] sm:text-6xl">
              {copy.stayForSong}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              {copy.collectionDescription}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="https://soundcloud.com/evancrossmusic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-3 bg-[#d18a70] px-5 text-xs font-semibold text-[#17191a] transition-colors hover:bg-[#f3eee6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {copy.listenOnSoundcloud} <ArrowUpRight className="size-4" />
              </a>
              <a
                href="https://www.youtube.com/@evancrossmusic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-xs text-white/65 transition-colors hover:text-white"
              >
                {copy.watchOnYoutube} <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
          <div className="grid min-w-0 gap-3 lg:aspect-[2.4] lg:grid-cols-[1.15fr_.85fr]">
            <figure className="relative aspect-video overflow-hidden lg:aspect-auto">
              <Image
                src="/assets/show-bar-stage.jpg"
                alt={copy.stageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-5 bottom-5 text-[9px] font-medium tracking-[0.16em] text-white sm:inset-x-7 sm:bottom-7">
                {copy.onStage}
              </figcaption>
            </figure>
            <figure className="relative aspect-video overflow-hidden lg:aspect-auto">
              <Image
                src="/assets/cheers.jpg"
                alt={copy.toastAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 370px"
                className="object-cover object-center -scale-x-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-5 bottom-5 text-[9px] font-medium tracking-[0.16em] text-white sm:inset-x-7 sm:bottom-7">
                {copy.toast}
              </figcaption>
            </figure>
          </div>
        </div>
        <GuitarPlayerSection
          className="-mx-6 mt-14 w-auto sm:-mx-12 sm:mt-20"
          locale={locale}
        />
      </section>

      {/* WORDS BEHIND THE MUSIC */}
      <section className="bg-background px-6 py-14 sm:px-12 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <p className="text-[10px] font-medium tracking-[0.18em] text-[#9b5b46]">
              {copy.wordsLanguages}
            </p>
            <h2 className="mt-5 max-w-lg font-editorial text-4xl leading-[1.05] text-foreground sm:text-5xl">
              {copy.everySongReal}
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
              {copy.lyricsDescription.replace("{count}", String(songs.length))}
            </p>
            <Link
              href={locale === "fr" ? "/fr/lyrics" : "/lyrics"}
              className="mt-6 inline-flex min-h-11 items-center gap-4 border-b border-foreground/30 text-sm font-semibold text-foreground transition-colors hover:text-[#9b5b46]"
            >
              {copy.readLyrics} <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <figure className="relative aspect-[1.35] min-h-64 overflow-hidden">
            <Image
              src="/assets/songwriting.jpg"
              alt={translations[locale].home.lyricsImageAlt}
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

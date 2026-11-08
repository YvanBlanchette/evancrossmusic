import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MiniHero } from "@/components/mini-hero";
import type { Locale } from "@/lib/i18n";
import { translations } from "@/lib/i18n";
export function VideosPage({ locale = "en" }: { locale?: Locale } = {}) {
  const copy = translations[locale].videos;
  return (
    <>
      <MiniHero page="videos" locale={locale} />
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-12">
        <a
          href="https://www.youtube.com/@evancrossmusic"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-video overflow-hidden rounded-xl bg-primary text-primary-foreground"
          aria-label={copy.exploreAria}
        >
          <Image
            src="/assets/recording.jpg"
            alt={copy.recordingAlt}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover brightness-75 transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none"
          />
          <span className="absolute inset-0 grid place-items-center">
            <ArrowUpRight className="size-16 rounded-full border border-white/50 bg-black/20 p-4 backdrop-blur-md" />
          </span>
          <span className="absolute bottom-6 left-6 text-[9px] tracking-[.2em]">
            {copy.exploreLabel}
          </span>
        </a>
        <div className="mt-7 flex flex-wrap justify-between gap-5">
          <h2 className="text-2xl tracking-tight sm:text-3xl">
            {copy.headline}
          </h2>
          <a
            href="https://www.youtube.com/@evancrossmusic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground"
          >
            {copy.watch} ↗
          </a>
        </div>
      </section>
    </>
  );
}

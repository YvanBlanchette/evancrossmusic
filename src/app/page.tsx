import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { GuitarPlayerSection } from "@/components/guitar-player-section";
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <section
        id="listen"
        className="mx-auto max-w-7xl scroll-mt-6 px-6 py-16 sm:px-12 sm:py-24"
      >
        <div className="mb-12 grid items-center gap-6 md:grid-cols-[.6fr_1.4fr_.8fr]">
          <span className="text-[9px] tracking-[.2em] text-muted-foreground">
            01 / THE MUSIC
          </span>
          <h2 className="text-4xl tracking-[-.04em] sm:text-6xl">
            Made to be <em className="font-serif text-[#9a7b52]">felt.</em>
          </h2>
          <p className="text-xs leading-6 text-muted-foreground">
            Country roots. Soulful stories.
            <br />A sound that stays with you.
          </p>
        </div>
        <div className="mb-10 grid items-center gap-10 md:grid-cols-[1.12fr_1fr] md:gap-16">
          <figure className="relative aspect-[1.45] overflow-hidden">
            <Image
              src="/assets/recording.jpg"
              alt="Evan Cross recording vocals in the studio"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover object-[40%_center]"
            />
            <figcaption className="absolute bottom-5 left-6 text-[8px] tracking-[.2em] text-white">
              IN THE STUDIO / EVAN CROSS
            </figcaption>
          </figure>
          <div>
            <p className="text-[8px] tracking-[.2em] text-muted-foreground">
              PRESS PLAY. STAY A WHILE.
            </p>
            <h3 className="mt-5 text-3xl leading-tight tracking-tight sm:text-4xl">
              A little country.
              <br />A whole lot of heart.
            </h3>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              Songs about the lives we live, the people we love, and the courage
              it takes to start again.
            </p>
            <TextLink href="/music">Explore the music</TextLink>
          </div>
        </div>
      </section>
      <GuitarPlayerSection className="mt-14 sm:mt-20" />
      <section className="bg-[#101511] px-6 py-16 text-[#f6f0e4] sm:px-12 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1fr_1.15fr] md:gap-20">
          <div>
            <p className="text-[9px] tracking-[.2em] text-white/50">
              02 / THE WORDS
            </p>
            <h2 className="mt-7 text-4xl leading-tight tracking-tight sm:text-6xl">
              Before the music,
              <br />
              there’s a <em className="font-serif text-accent">story.</em>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              A thought that won’t let go. A memory that finds its way onto the
              page. Every song begins with something real.
            </p>
            <TextLink href="/lyrics">Behind the lyrics</TextLink>
          </div>
          <figure className="relative aspect-[1.15] overflow-hidden">
            <Image
              src="/assets/songwriting-color.jpg"
              alt="Evan Cross writing song lyrics in the studio"
              fill
              sizes="(max-width: 768px) 100vw, 650px"
              className="object-cover object-[43%_center] grayscale"
            />
          </figure>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-black px-6 pt-96 pb-16 text-[#f6f0e4] sm:px-12 md:py-24">
        <Image
          src="/assets/about-portrait.jpg"
          alt="Evan Cross with his arms crossed"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[25%_top] md:object-[30%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/40 md:to-black" />
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="md:col-start-2 md:pl-12">
            <p className="text-[9px] tracking-[.2em] text-white/50">
              03 / THE ARTIST
            </p>
            <h2 className="mt-7 text-4xl leading-tight tracking-tight sm:text-6xl">
              Real life.
              <br />
              Honest <em className="font-serif text-accent">music.</em>
            </h2>
            <p className="mt-6 text-sm leading-7 text-white/60">
              Canadian songwriter. Independent artist.
              <br />
              Writing in English and French, from a place that’s personal.
            </p>
            <TextLink href="/about">Get to know Evan</TextLink>
          </div>
        </div>
      </section>
      <section className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 py-14 sm:px-12">
        <div>
          <p className="text-[8px] tracking-[.2em] text-muted-foreground">
            KEEP THE MUSIC CLOSE
          </p>
          <h2 className="mt-4 text-3xl tracking-tight">
            Let’s stay connected.
          </h2>
        </div>
        <div className="flex flex-wrap gap-7 text-xs">
          {[
            ["YouTube", "https://www.youtube.com/@evancrossmusic"],
            ["TikTok", "https://www.tiktok.com/@evancrossmusic"],
            ["Facebook", "https://www.facebook.com/evancrosscmusic"],
          ].map(([name, url]) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-border py-3"
            >
              {name} ↗
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="mt-6 inline-flex items-center gap-10 border-b border-current/30 py-3 text-xs font-semibold hover:text-[#9a7b52]"
    >
      {children}
      <ArrowUpRight className="size-5" />
    </Link>
  );
}

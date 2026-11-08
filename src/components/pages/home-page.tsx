import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { GuitarPlayerSection } from "@/components/guitar-player-section";
import { PrintifyShopSection } from "@/components/printify-shop-section";
import { getPrintifyProducts } from "@/lib/printify";
import type { Locale } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

export async function HomePage({ locale = "en" }: { locale?: Locale } = {}) {
  const products = await getPrintifyProducts();
  const shopUrl = process.env.PRINTIFY_SHOP_URL;
  const copy = translations[locale].home;

  return (
    <>
      <HomeHero locale={locale} />
      <section
        id="listen"
        className="mx-auto max-w-7xl scroll-mt-6 px-6 py-16 sm:px-12 sm:py-24"
      >
        <div className="mb-12 grid items-center gap-6 md:grid-cols-[.6fr_1.4fr_.8fr]">
          <span className="text-[9px] tracking-[.2em] text-muted-foreground">
            {copy.listen}
          </span>
          <h2 className="text-4xl tracking-[-.04em] sm:text-6xl">
            {copy.listenTitle}{" "}
            <em className="font-serif text-[#9a7b52]">{copy.listenEmphasis}</em>
          </h2>
          <p className="text-xs leading-6 text-muted-foreground">
            {copy.listenAside}
            <br />
            {copy.listenAsideSecond}
          </p>
        </div>
        <div className="mb-10 grid items-center gap-10 md:grid-cols-[1.12fr_1fr] md:gap-16">
          <figure className="relative aspect-[1.45] overflow-hidden">
            <Image
              src="/assets/recording.jpg"
              alt={translations[locale].home.studioAlt}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover object-[40%_center]"
            />
            <figcaption className="absolute bottom-5 left-6 text-[8px] tracking-[.2em] text-white">
              {copy.studio}
            </figcaption>
          </figure>
          <div>
            <p className="text-[8px] tracking-[.2em] text-muted-foreground">
              {copy.pressPlay}
            </p>
            <h3 className="mt-5 text-3xl leading-tight tracking-tight sm:text-4xl">
              {copy.country}
              <br />
              {copy.heart}
            </h3>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              {copy.musicDescription}
            </p>
            <TextLink href={locale === "fr" ? "/fr/music" : "/music"}>
              {copy.exploreMusic}
            </TextLink>
          </div>
        </div>
      </section>
      <GuitarPlayerSection className="mt-14 sm:mt-20" locale={locale} />
      <section className="bg-[#101511] px-6 py-16 text-[#f6f0e4] sm:px-12 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1fr_1.15fr] md:gap-20">
          <div>
            <p className="text-[9px] tracking-[.2em] text-white/50">
              {copy.words}
            </p>
            <h2 className="mt-7 text-4xl leading-tight tracking-tight sm:text-6xl">
              {copy.storyLead}
              <br />
              <em className="font-serif text-accent">{copy.storyEmphasis}</em>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              {translations[locale].home.wordsDescription}
            </p>
            <TextLink href={locale === "fr" ? "/fr/lyrics" : "/lyrics"}>
              {copy.behindLyrics}
            </TextLink>
          </div>
          <figure className="relative aspect-[1.15] overflow-hidden">
            <Image
              src="/assets/songwriting-color.jpg"
              alt={translations[locale].home.lyricsImageAlt}
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
          alt={translations[locale].home.artistImageAlt}
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[25%_top] md:object-[30%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/40 md:to-black" />
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="md:col-start-2 md:pl-12">
            <p className="text-[9px] tracking-[.2em] text-white/50">
              {copy.artist}
            </p>
            <h2 className="mt-7 text-4xl leading-tight tracking-tight sm:text-6xl">
              {copy.realLife}
              <br />
              <em className="font-serif text-accent">{copy.honestMusic}</em>
            </h2>
            <p className="mt-6 text-sm leading-7 text-white/60">
              {copy.artistDescription}
            </p>
            <TextLink href={locale === "fr" ? "/fr/about" : "/about"}>
              {copy.aboutLink}
            </TextLink>
          </div>
        </div>
      </section>
      <PrintifyShopSection
        products={products}
        shopUrl={shopUrl}
        locale={locale}
      />
      <section className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 py-14 sm:px-12">
        <div>
          <p className="text-[8px] tracking-[.2em] text-muted-foreground">
            {copy.stayConnected}
          </p>
          <h2 className="mt-4 text-3xl tracking-tight">
            {copy.stayConnectedTitle}
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

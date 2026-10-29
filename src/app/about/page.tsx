
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MiniHero } from "@/components/mini-hero";
import { songs } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Canadian songwriter Evan Cross and explore the country, soul, blues, and Americana roots behind his English and French songs.",
};

const themes = [
  {
    title: "Love, family, and care",
    songs:
      "Mon Petit Rayon de Soleil · Ça Va Bien Aller · La Vraie Force des Hommes",
    description:
      "Songs written as messages to the people who matter, holding tenderness and everyday details close.",
  },
  {
    title: "Resilience and self-worth",
    songs:
      "T'as Tout Déjà · War Inside My Bones · Un Ennemi Sous Ma Peau",
    description:
      "Stories about living through difficult seasons, finding your footing, and remembering you are more than what you face.",
  },
  {
    title: "Faith, doubt, and meaning",
    songs:
      "À Quoi Ça Sert, Mon Dieu · Est-Ce Que J’ai Le Droit ? · While I Wait On Heaven",
    description:
      "Open questions sit beside belief, grief, and the choice to reach for another person.",
  },
];

export default function AboutPage() {
  return (
    <>
      <MiniHero page="about" />

      {/* THE WRITING */}
      <section className="bg-background px-6 py-16 sm:px-12 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:gap-16">
            <div>
              <p className="text-[10px] font-medium tracking-[0.18em] text-[#9b5b46]">
                THE WRITING
              </p>

              <h2 className="mt-5 max-w-md font-editorial text-5xl leading-[1.02] text-foreground sm:text-6xl">
                Songs that make room for the whole story.
              </h2>
            </div>

            <div className="space-y-5 text-[15px] leading-8 text-muted-foreground">
              <p>
                These songs are personal, but they are not sealed off
                from the listener. They stay with small details: a
                late-night question, a familiar voice, or the kind
                of reassurance that can carry someone through a
                difficult day.
              </p>

              <p>
                Some lyrics offer comfort; others let doubt remain
                unresolved. Together, they treat honesty as a way
                to connect, not a requirement to have all the answers.
              </p>
            </div>
          </div>

          <dl className="mt-14 grid gap-6 border-y border-border py-7 sm:grid-cols-3 sm:gap-8">
            <div>
              <dt className="text-[9px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                Writing languages
              </dt>
              <dd className="mt-2 font-editorial text-2xl text-foreground">
                English & French
              </dd>
            </div>

            <div>
              <dt className="text-[9px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                Musical roots
              </dt>
              <dd className="mt-2 font-editorial text-2xl text-foreground">
                Country · Soul · Blues · Americana
              </dd>
            </div>

            <div>
              <dt className="text-[9px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                Published lyrics
              </dt>
              <dd className="mt-2 font-editorial text-2xl text-foreground">
                {String(songs.length).padStart(2, "0")} stories
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* THE SOUND */}
      <section className="bg-[#17191a] px-6 py-16 text-[#f3eee6] sm:px-12 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.05fr_.95fr] md:gap-16">
          <figure className="relative aspect-[1.2] overflow-hidden">
            <Image
              src="/assets/songwriting.jpg"
              alt="Evan Cross working on lyrics"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover object-center"
            />
          </figure>

          <div>
            <p className="text-[10px] font-medium tracking-[0.18em] text-[#d18a70]">
              THE SOUND
            </p>

            <h2 className="mt-5 font-editorial text-5xl leading-[1.02] sm:text-6xl">
              Country roots. Soul at heart.
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-7 text-white/65">
              <p>
                Country storytelling gives the songs their directness.
                Soul and blues bring emotional weight, while Americana
                leaves room for rough edges and stories that do not
                fit neatly into one genre.
              </p>

              <p>
                The result is a sound built around the words: intimate
                when a story calls for quiet, and open-hearted when
                it needs to rise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE SONGS HOLD */}
      <section className="bg-background px-6 py-16 sm:px-12 sm:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-2xl">
            <p className="text-[10px] font-medium tracking-[0.18em] text-[#9b5b46]">
              WHAT THE SONGS HOLD
            </p>

            <h2 className="mt-5 font-editorial text-5xl leading-[1.02] text-foreground sm:text-6xl">
              Different lives. Familiar feelings.
            </h2>
          </div>

          {/* TWO COLUMN LAYOUT */}
          <div className="grid items-start gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-16">

            {/* LEFT: THEMES */}
            <div className="min-w-0">
              {themes.map((theme, index) => (
                <article
                  key={theme.title}
                  className="grid gap-4 border-t border-border py-7 sm:grid-cols-[50px_1fr] sm:gap-6"
                >
                  <span className="font-editorial text-xl text-[#9b5b46]">
                    0{index + 1}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-editorial text-3xl leading-tight text-foreground">
                      {theme.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-[#9b5b46]">
                      {theme.songs}
                    </p>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
                      {theme.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* RIGHT: STAGE PHOTO */}
            <figure className="relative aspect-[3/4] w-full overflow-hidden lg:sticky lg:top-24">
              <Image
                src="/assets/show-bar-stage.jpg"
                alt="Evan Cross performing on stage"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover object-center"
              />
            </figure>

          </div>
        </div>
      </section>

      {/* KEEP EXPLORING */}
      <section className="bg-[#eee5d4] px-6 py-14 sm:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-8">

          <div>
            <p className="text-[10px] font-medium tracking-[0.18em] text-[#9b5b46]">
              KEEP EXPLORING
            </p>

            <h2 className="mt-3 font-editorial text-4xl text-foreground sm:text-5xl">
              Find a story that stays with you.
            </h2>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              href="/music"
              className="inline-flex min-h-11 items-center gap-3 border-b border-foreground/30 text-foreground transition-colors hover:text-[#9b5b46]"
            >
              Explore the music
              <ArrowUpRight className="size-4" />
            </Link>

            <Link
              href="/lyrics"
              className="inline-flex min-h-11 items-center gap-3 border-b border-foreground/30 text-foreground transition-colors hover:text-[#9b5b46]"
            >
              Read the lyrics
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { MiniHero } from "@/components/mini-hero";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = { title: "About" };
export default function AboutPage() {
  return (
    <>
      <MiniHero page="about" />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-12 sm:py-24 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-[9px] tracking-[.2em] text-muted-foreground">
            EVAN CROSS
          </p>
          <h2 className="mt-5 text-4xl leading-tight tracking-tight">
            Personal stories.
            <br />
            Shared feelings.
          </h2>
        </div>
        <div className="space-y-6 text-[15px] leading-8 text-muted-foreground">
          <p>
            Evan Cross is a Canadian songwriter and independent artist blending
            country, soul, blues, and Americana into deeply personal music.
          </p>
          <p>
            His songs explore love, heartbreak, resilience, and the quiet
            courage it takes to begin again. From the small moments that hold a
            relationship together to the experiences that change a life, the
            writing stays close to the heart.
          </p>
          <p>
            Writing in English and French, Evan makes space for vulnerability,
            hope, and the possibility that the next chapter still has something
            beautiful to offer.
          </p>
          <Button asChild>
            <Link href="/music">Meet the music ↗</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

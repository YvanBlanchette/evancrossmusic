import type { Metadata } from "next";
import { MiniHero } from "@/components/mini-hero";
import { SoundCloudPlayer } from "@/components/soundcloud-player";
import { songs } from "@/lib/site";
export const metadata: Metadata = { title: "Music" };
export default function MusicPage() {
  return (
    <>
      <MiniHero page="music" />
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-12 sm:py-20">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-[9px] tracking-[.2em] text-muted-foreground">
              THE COLLECTION
            </p>
            <h2 className="mt-4 text-3xl tracking-tight sm:text-4xl">
              Find your next song.
            </h2>
          </div>
          <a
            className="text-xs text-muted-foreground hover:text-foreground"
            href="https://soundcloud.com/evancrossmusic"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open SoundCloud ↗
          </a>
        </div>
        <SoundCloudPlayer />
        {songs.some((s) => s.excerpt) ? (
          <section className="mt-16">
            <h2 className="mb-6 text-3xl">Song excerpts</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {songs
                .filter((s) => s.excerpt)
                .map((song) => (
                  <article key={song.id} className="rounded-xl border p-6">
                    <h3 className="mb-4 text-xl">{song.title}</h3>
                    <audio
                      controls
                      preload="none"
                      aria-label={`Excerpt of ${song.title}`}
                      className="w-full"
                      src={song.excerpt}
                    />
                    {song.links?.map((link) => (
                      <a
                        key={link.url}
                        className="mt-3 inline-block text-xs underline"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name} ↗
                      </a>
                    ))}
                  </article>
                ))}
            </div>
          </section>
        ) : null}
      </section>
    </>
  );
}

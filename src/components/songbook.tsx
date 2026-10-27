"use client";
import { useState } from "react";
import { songs } from "@/lib/site";
export function Songbook() {
  const [selected, setSelected] = useState(songs[0]?.id);
  const song = songs.find((s) => s.id === selected);
  return (
    <section className="grid gap-8 border-t py-8 md:grid-cols-[220px_1fr]">
      <aside className="border-b pb-6 md:border-r md:border-b-0 md:pr-6">
        <h2 className="text-[9px] tracking-widest text-muted-foreground">
          THE SONGS
        </h2>
        {songs.length ? (
          songs.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelected(s.id)}
              aria-pressed={s.id === selected}
              className="mt-4 block w-full border-b py-3 text-left text-sm aria-pressed:font-semibold"
            >
              {s.title}
            </button>
          ))
        ) : (
          <p className="mt-6 text-xs text-muted-foreground">
            Lyrics coming soon.
          </p>
        )}
      </aside>
      <article>
        <p className="text-[9px] tracking-widest text-muted-foreground">
          LYRICS
        </p>
        <h2 className="mt-6 text-3xl tracking-tight">
          {song?.title ?? "The story starts here."}
        </h2>
        <div className="mt-7 min-h-36 max-w-3xl text-sm leading-8 whitespace-pre-wrap text-muted-foreground">
          {song?.lyrics ??
            "Published lyrics will appear here. Come back for a closer look at the words behind the songs."}
        </div>
      </article>
    </section>
  );
}

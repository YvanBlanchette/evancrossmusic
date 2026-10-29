"use client";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { songs } from "@/lib/site";
import { cn } from "@/lib/utils";
export function Songbook() {
  const [selected, setSelected] = useState(songs[0]?.id);
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("all");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredSongs = songs.filter(
    (item) =>
      (language === "all" || item.language === language) &&
      item.title.toLocaleLowerCase().includes(normalizedQuery),
  );
  const song =
    filteredSongs.find((item) => item.id === selected) ?? filteredSongs[0];
  const lyricBlocks = song?.lyrics.split(/\n{2,}/).filter(Boolean) ?? [];
  return (
    <section className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(260px,330px)_1fr] lg:gap-16">
      {/* SONG INDEX */}
      <aside className="min-w-0 border-b border-white/15 pb-8 lg:border-r lg:border-b-0 lg:pb-0 lg:pr-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-medium tracking-[0.18em] text-[#d18a70]">
              THE ARCHIVE
            </p>
            <h2 className="mt-2 font-editorial text-3xl text-[#f3eee6]">
              Song index
            </h2>
          </div>
          <span className="pb-1 font-editorial text-xl text-white/45">
            {String(songs.length).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-7 flex border-b border-white/15 pb-5">
          {[
            ["all", "All"],
            ["en", "English"],
            ["fr", "Français"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setLanguage(value)}
              aria-pressed={language === value}
              className={cn(
                "min-h-10 border-b-2 px-3 text-xs transition-colors first:pl-0 hover:text-[#f3eee6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d18a70]",
                language === value
                  ? "border-[#d18a70] text-[#f3eee6]"
                  : "border-transparent text-white/45",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <label className="relative mt-5 block">
          <span className="sr-only">Search songs</span>
          <Search className="pointer-events-none absolute top-1/2 left-0 size-4 -translate-y-1/2 text-white/45" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Find a song"
            className="h-11 w-full border-b border-white/20 bg-transparent pl-7 text-sm text-[#f3eee6] outline-none placeholder:text-white/40 focus:border-[#d18a70]"
          />
        </label>

        <div className="mt-5 lg:hidden">
          <label
            htmlFor="song-select"
            className="mb-1 block text-[9px] font-medium tracking-[0.16em] text-white/40 uppercase"
          >
            Choose a song
          </label>
          <div className="relative border-b border-white/20 focus-within:border-[#d18a70]">
            <select
              id="song-select"
              value={song?.id ?? ""}
              onChange={(event) => setSelected(event.target.value)}
              className="h-12 w-full appearance-none bg-transparent pr-9 font-editorial text-xl text-[#f3eee6] outline-none"
            >
              {filteredSongs.length ? (
                filteredSongs.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                    className="bg-[#1d2020] text-[#f3eee6]"
                  >
                    {item.title}
                  </option>
                ))
              ) : (
                <option value="">No matching songs</option>
              )}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-1 size-4 -translate-y-1/2 text-[#d18a70]"
            />
          </div>
        </div>

        <nav
          aria-label="Song index"
          className="mt-5 hidden max-h-[calc(100svh-17rem)] overflow-y-auto pr-2 lg:block"
        >
          {filteredSongs.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item.id)}
              aria-pressed={item.id === song?.id}
              className={cn(
                "group flex min-h-12 w-full items-center gap-3 border-b border-white/10 py-3 text-left transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d18a70]",
                item.id === song?.id ? "text-[#f3eee6]" : "text-white/55",
              )}
            >
              <span className="w-6 shrink-0 font-editorial text-sm text-[#d18a70]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-5">{item.title}</span>
            </button>
          ))}
        </nav>

        {!filteredSongs.length ? (
          <p className="mt-5 text-sm text-white/50">
            No songs match your search.
          </p>
        ) : null}
      </aside>

      {/* LYRIC READER */}
      <article className="min-w-0 select-none lg:pl-2">
        {song ? (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-5">
              <p
                className="text-[10px] font-medium tracking-[0.18em] text-[#d18a70]"
                lang={song.language}
              >
                {song.language === "fr" ? "PAROLES · FRANÇAIS" : "LYRICS · ENGLISH"}
              </p>
              <span className="text-[10px] tracking-[0.12em] text-white/40">
                {String(songs.findIndex((item) => item.id === song.id) + 1).padStart(2, "0")} / {String(songs.length).padStart(2, "0")}
              </span>
            </div>
            <h2 className="mt-7 max-w-3xl font-editorial text-5xl leading-[0.98] text-[#f3eee6] sm:text-6xl lg:text-7xl">
              {song.title}
            </h2>
            <p
              lang={song.language}
              className="mt-3 text-sm text-white/55"
            >
              {song.language === "fr"
                ? "Paroles de Yvan Junior Blanchette"
                : "Lyrics by Yvan Junior Blanchette"}
            </p>
            <div
              lang={song.language}
              className="mt-10 grid max-w-3xl gap-8 border-t border-white/15 pt-8 xl:grid-cols-2 xl:gap-x-10 xl:gap-y-10"
            >
              {lyricBlocks.map((block, index) => {
                const [firstLine, ...remainingLines] = block.split("\n");
                const hasSection = /^\[.+\]$/.test(firstLine);
                const sectionTitle = hasSection
                  ? firstLine.slice(1, -1)
                  : null;
                const verse = hasSection
                  ? remainingLines.join("\n")
                  : block;

                return (
                  <section key={`${song.id}-${index}`}>
                    {sectionTitle ? (
                      <h3 className="mb-3 text-[10px] font-medium tracking-[0.14em] text-[#d18a70] uppercase">
                        {sectionTitle}
                      </h3>
                    ) : null}
                    {verse ? (
                      <p className="font-editorial text-xl leading-[1.55] text-[#e6dfd4] sm:text-[22px]">
                        {verse}
                      </p>
                    ) : null}
                  </section>
                );
              })}
            </div>
          </>
        ) : (
          <p className="border-t border-white/15 pt-6 font-editorial text-3xl text-white/55">
            Choose a song to read its lyrics.
          </p>
        )}
      </article>
    </section>
  );
}

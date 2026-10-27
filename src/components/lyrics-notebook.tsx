"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import {
  parseDrafts,
  mergeDrafts,
  createDraftId,
  STORAGE_KEY,
} from "@/lib/drafts.mjs";
type Draft = { id: string; title: string; words: string };
export function LyricsNotebook() {
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [id, setId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [words, setWords] = useState("");
  const [status, setStatus] = useState("");
  const [ready, setReady] = useState(false);
  const [dirty, setDirty] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setDrafts(parseDrafts(saved));
    } catch {
      setStatus(
        "Drafts could not be loaded. Browser storage may be unavailable or damaged.",
      );
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);
  function persist(next: Draft[]) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setDrafts(next);
      return true;
    } catch {
      setStatus(
        "Could not save on this browser. Export a backup before leaving.",
      );
      return false;
    }
  }
  function canSwitch() {
    return (
      !dirty || window.confirm("Discard the unsaved changes to this draft?")
    );
  }
  function newDraft() {
    if (!canSwitch()) return;
    setId(null);
    setTitle("");
    setWords("");
    setDirty(false);
    setStatus("New draft.");
  }
  function download() {
    const current =
      title.trim() || words
        ? {
            id: id ?? createDraftId(),
            title: title.trim() || "Untitled",
            words,
          }
        : null;
    const list = current ? mergeDrafts(drafts, [current]) : drafts;
    const url = URL.createObjectURL(
      new Blob([JSON.stringify({ savedDrafts: list }, null, 2)], {
        type: "application/json",
      }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "evan-cross-lyrics.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus("Draft backup exported.");
  }
  async function importFile(file: File) {
    if (file.size > 5_000_000) {
      setStatus("Please choose a JSON backup smaller than 5 MB.");
      return;
    }
    if (!canSwitch()) return;
    try {
      const incoming = parseDrafts(await file.text());
      if (persist(mergeDrafts(drafts, incoming))) {
        setDirty(false);
        setStatus(`${incoming.length} draft(s) imported.`);
      }
    } catch {
      setStatus("This file is not a valid lyrics backup.");
    }
  }
  return (
    <details className="mt-8 rounded-xl border bg-secondary p-6 sm:p-8">
      <summary className="cursor-pointer text-sm font-medium">
        The writing room · Your local drafts
      </summary>
      <p className="mt-5 max-w-3xl text-xs leading-6 text-muted-foreground">
        Drafts are saved only in this browser, on this device. They are not
        published on the site. Export backups regularly. Drafts from the
        previous site can be imported with its JSON export.
      </p>
      <div className="mt-7 grid gap-8 lg:grid-cols-[220px_1fr]">
        <div className="space-y-2">
          <h3 className="mb-4 text-xs font-medium">Saved drafts</h3>
          {drafts.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => {
                if (!canSwitch()) return;
                setId(d.id);
                setTitle(d.title);
                setWords(d.words);
                setDirty(false);
                setStatus("Draft opened.");
              }}
              className="block w-full rounded-md border border-transparent px-3 py-2 text-left text-xs hover:border-border"
            >
              {d.title}
            </button>
          ))}
          {!drafts.length ? (
            <p className="text-xs text-muted-foreground">
              No saved drafts yet.
            </p>
          ) : null}
        </div>
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            const nextId = id ?? createDraftId();
            const entry = { id: nextId, title: title.trim(), words };
            if (!entry.title) return;
            if (persist(mergeDrafts(drafts, [entry]))) {
              setId(nextId);
              setDirty(false);
              setStatus("Draft saved on this browser.");
            }
          }}
        >
          <label className="block space-y-2 text-xs">
            <span>Song title</span>
            <Input
              required
              maxLength={150}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setDirty(true);
              }}
            />
          </label>
          <label className="block space-y-2 text-xs">
            <span>Lyrics</span>
            <Textarea
              required
              maxLength={100000}
              value={words}
              onChange={(e) => {
                setWords(e.target.value);
                setDirty(true);
              }}
              placeholder="Start with a line…"
            />
          </label>
          <div className="flex flex-wrap gap-3">
            <Button disabled={!ready} type="submit">
              Save draft
            </Button>
            <Button type="button" variant="outline" onClick={newDraft}>
              New draft
            </Button>
            <Button type="button" variant="outline" onClick={download}>
              Export
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => input.current?.click()}
              disabled={!ready}
            >
              Import
            </Button>
          </div>
          <input
            ref={input}
            type="file"
            accept="application/json,.json"
            aria-label="Import lyrics backup"
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) void importFile(file);
              e.target.value = "";
            }}
          />
          <p role="status" className="min-h-6 text-xs text-muted-foreground">
            {status}
          </p>
        </form>
      </div>
    </details>
  );
}

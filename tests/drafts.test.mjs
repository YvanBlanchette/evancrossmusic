import test from "node:test";
import assert from "node:assert/strict";
import { parseDrafts, mergeDrafts, createDraftId } from "../src/lib/drafts.mjs";
const draft = { id: "old-1", title: "A song", words: "Verse one\nChorus" };
test("imports legacy exports without losing line breaks", () =>
  assert.deepEqual(
    parseDrafts(JSON.stringify({ savedDrafts: [draft], currentDraft: {} })),
    [draft],
  ));
test("rejects malformed and oversized draft entries", () => {
  assert.throws(() => parseDrafts('{"wrong":[]}'));
  assert.throws(() => parseDrafts([{ ...draft, words: 12 }]));
  assert.throws(() => parseDrafts([{ ...draft, title: "x".repeat(151) }]));
});
test("merges imported drafts by ID while retaining unrelated drafts", () => {
  const other = { ...draft, id: "other" };
  const changed = { ...draft, words: "Edited" };
  assert.deepEqual(mergeDrafts([draft, other], [changed]), [changed, other]);
});

test("creates distinct local draft keys", () => {
  const keys = Array.from({ length: 100 }, () => createDraftId());
  assert.equal(new Set(keys).size, 100);
  assert.ok(keys.every((k) => typeof k === "string" && k.length > 10));
});

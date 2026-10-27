export const STORAGE_KEY = "ec-lyrics-v1";
export function parseDrafts(value) {
  const parsed = typeof value === "string" ? JSON.parse(value) : value;
  const list = Array.isArray(parsed) ? parsed : parsed?.savedDrafts;
  if (!Array.isArray(list) || list.length > 500)
    throw new Error("Invalid draft file.");
  return list.map((d) => {
    if (
      !d ||
      typeof d.id !== "string" ||
      typeof d.title !== "string" ||
      typeof d.words !== "string" ||
      !d.id ||
      d.title.length > 150 ||
      d.words.length > 100000
    )
      throw new Error("Invalid draft entry.");
    return { id: d.id, title: d.title, words: d.words };
  });
}
export function mergeDrafts(existing, incoming) {
  const merged = new Map(existing.map((d) => [d.id, d]));
  for (const draft of incoming) merged.set(draft.id, draft);
  return [...merged.values()];
}

// Draft identifiers are local record keys, not authentication tokens.
export function createDraftId() {
  return typeof globalThis.crypto?.randomUUID === "function"
    ? globalThis.crypto.randomUUID()
    : `draft-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

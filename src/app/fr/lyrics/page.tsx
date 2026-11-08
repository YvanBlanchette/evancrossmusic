import type { Metadata } from "next";
import { LyricsPage } from "@/components/pages/lyrics-page";
import { localizedMetadata } from "@/lib/metadata";

export const metadata: Metadata = localizedMetadata({
  locale: "fr",
  path: "/lyrics",
  title: "Paroles",
  description:
    "Lisez les paroles des chansons d’Evan Cross en français et en anglais.",
});

export default function FrenchLyricsPage() {
  return <LyricsPage locale="fr" />;
}

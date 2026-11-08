import type { Metadata } from "next";
import { MusicPage } from "@/components/pages/music-page";
import { localizedMetadata } from "@/lib/metadata";

export const metadata: Metadata = localizedMetadata({
  locale: "fr",
  path: "/music",
  title: "Musique",
  description:
    "Écoutez Evan Cross, auteur-compositeur canadien qui réunit country, soul, blues et Americana.",
});

export default function FrenchMusicPage() {
  return <MusicPage locale="fr" />;
}

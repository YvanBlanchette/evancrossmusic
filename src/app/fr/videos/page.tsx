import type { Metadata } from "next";
import { VideosPage } from "@/components/pages/videos-page";
import { localizedMetadata } from "@/lib/metadata";

export const metadata: Metadata = localizedMetadata({
  locale: "fr",
  path: "/videos",
  title: "Vidéos",
  description:
    "Regardez les vidéos musicales et les prestations en direct d’Evan Cross.",
});

export default function FrenchVideosPage() {
  return <VideosPage locale="fr" />;
}

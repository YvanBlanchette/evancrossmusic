import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about-page";
import { localizedMetadata } from "@/lib/metadata";

export const metadata: Metadata = localizedMetadata({
  locale: "fr",
  path: "/about",
  title: "À propos",
  description:
    "Découvrez Evan Cross, auteur-compositeur indépendant canadien, et les racines country, soul, blues et Americana de ses chansons.",
});

export default function FrenchAboutPage() {
  return <AboutPage locale="fr" />;
}

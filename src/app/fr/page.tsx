import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";
import { localizedMetadata } from "@/lib/metadata";

export const metadata: Metadata = localizedMetadata({
  locale: "fr",
  path: "/",
  title: "Accueil",
  description:
    "Découvrez Evan Cross, auteur-compositeur canadien à la croisée de la country, de la soul, du blues et de l’Americana.",
});

export default function FrenchHomePage() {
  return <HomePage locale="fr" />;
}

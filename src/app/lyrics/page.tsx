import { LyricsPage } from "@/components/pages/lyrics-page";
import { localizedMetadata } from "@/lib/metadata";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/lyrics",
  title: "Lyrics",
  description: "Read Evan Cross lyrics in English and French.",
});

export default function Page() {
  return <LyricsPage />;
}

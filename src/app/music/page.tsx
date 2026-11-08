import { MusicPage } from "@/components/pages/music-page";
import { localizedMetadata } from "@/lib/metadata";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/music",
  title: "Music",
  description:
    "Listen to Evan Cross, a Canadian songwriter blending country, soul, blues, and Americana.",
});

export default function Page() {
  return <MusicPage />;
}

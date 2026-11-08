import { VideosPage } from "@/components/pages/videos-page";
import { localizedMetadata } from "@/lib/metadata";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/videos",
  title: "Videos",
  description: "Watch Evan Cross music videos and live performances.",
});

export default function Page() {
  return <VideosPage />;
}

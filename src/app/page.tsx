import { HomePage } from "@/components/pages/home-page";
import { localizedMetadata } from "@/lib/metadata";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/",
  title: "Evan Cross Music",
  description:
    "Discover Evan Cross, a Canadian singer-songwriter blending country, soul, blues, and Americana.",
});

export default function Page() {
  return <HomePage />;
}

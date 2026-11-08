import { AboutPage } from "@/components/pages/about-page";
import { localizedMetadata } from "@/lib/metadata";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/about",
  title: "About",
  description:
    "Meet Canadian songwriter Evan Cross and explore the country, soul, blues, and Americana roots behind his English and French songs.",
});

export default function Page() {
  return <AboutPage />;
}

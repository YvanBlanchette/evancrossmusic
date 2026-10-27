import type { Metadata } from "next";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";
import "./globals.css";
import { LegacyHashRedirect } from "@/components/legacy-hash-redirect";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: site.name, template: "%s | Evan Cross Music" },
  description: site.description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: site.name,
    description: site.description,
    ...(siteUrl
      ? {
          images: [
            { url: "/assets/artist-portrait.jpg", width: 2048, height: 1152 },
          ],
        }
      : {}),
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth motion-reduce:scroll-auto">
      <body
        id="top"
        className="overflow-x-clip bg-background font-sans text-foreground antialiased"
      >
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-md bg-background p-4 text-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <LegacyHashRedirect />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

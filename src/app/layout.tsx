import type { Metadata, Viewport } from "next";

import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";

import "./globals.css";

import { LegacyHashRedirect } from "@/components/legacy-hash-redirect";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import {
  LanguagePreference,
  LocalizedSkipLink,
} from "@/components/language-preference";
import { ArtistSchema } from "@/components/artist-schema";

// --------------------------------------------------
// SITE CONFIGURATION
// --------------------------------------------------

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://evancrossmusic.com"
).replace(/\/+$/, "");

const siteName = "Evan Cross Music";

const ogImage = "/assets/og-image.jpg";

const ogTitle = "Evan Cross | Canadian Singer-Songwriter";

const ogDescription =
  "Discover Evan Cross, a Canadian singer-songwriter blending country, soul, blues, and Americana. Original music in English and French exploring love, resilience, family, and the stories that shape our lives.";

// --------------------------------------------------
// SEO + OPEN GRAPH + SOCIAL METADATA
// --------------------------------------------------

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    languages: { "en-CA": "/", "fr-CA": "/fr" },
  },

  title: {
    default: site.name,
    template: "%s | Evan Cross Music",
  },

  description: site.description,

  applicationName: siteName,

  keywords: [
    "Evan Cross",
    "Evan Cross Music",
    "Canadian singer-songwriter",
    "Canadian country music",
    "Independent musician",
    "Country music",
    "Country rock",
    "Americana",
    "Soul music",
    "Blues music",
    "Original music",
    "French Canadian music",
    "Chansons francophones",
    "English and French music",
    "Canadian independent artist",
    "Songwriter",
    "Emotional country music",
  ],

  authors: [
    {
      name: "Evan Cross",
      url: siteUrl,
    },
  ],

  creator: "Evan Cross",
  publisher: siteName,

  category: "music",

  // --------------------------------------------------
  // FAVICONS
  // --------------------------------------------------

  icons: {
    icon: "/favicon.svg",
  },

  appleWebApp: {
    title: "Evan Cross",
    capable: true,
    statusBarStyle: "default",
  },

  // --------------------------------------------------
  // OPEN GRAPH
  // Facebook, LinkedIn, WhatsApp, Discord, etc.
  // --------------------------------------------------

  openGraph: {
    type: "website",

    url: siteUrl,

    siteName,

    title: ogTitle,

    description: ogDescription,

    locale: "en_CA",

    alternateLocale: ["fr_CA"],

    images: [
      {
        url: ogImage,
        width: 2048,
        height: 1152,
        alt: "Evan Cross — Canadian Singer-Songwriter",
        type: "image/jpeg",
      },
    ],
  },

  // --------------------------------------------------
  // TWITTER / X
  // --------------------------------------------------

  twitter: {
    card: "summary_large_image",

    title: ogTitle,

    description: ogDescription,

    images: [
      {
        url: ogImage,
        alt: "Evan Cross — Canadian Singer-Songwriter",
      },
    ],
  },

  // --------------------------------------------------
  // SEARCH ENGINE INDEXING
  // --------------------------------------------------

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // --------------------------------------------------
  // REFERRER
  // --------------------------------------------------

  referrer: "origin-when-cross-origin",
};

// --------------------------------------------------
// VIEWPORT + BROWSER THEME
// --------------------------------------------------

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101511",
};

// --------------------------------------------------
// ROOT LAYOUT
// --------------------------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className="scroll-smooth motion-reduce:scroll-auto"
      suppressHydrationWarning
    >
      <head>
        <ArtistSchema />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.lang = location.pathname === '/fr' || location.pathname.startsWith('/fr/') ? 'fr-CA' : 'en-CA';",
          }}
        />
      </head>

      <body
        id="top"
        className="overflow-x-clip bg-background font-sans text-foreground antialiased"
      >
        <LanguagePreference />

        <LocalizedSkipLink />
        <LegacyHashRedirect />

        <Header />

        <main id="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

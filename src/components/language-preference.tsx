"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { localeFromPath, translations } from "@/lib/i18n";

const preferenceKey = "evancrossmusic-language";

export function LanguagePreference() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = locale === "fr" ? "fr-CA" : "en-CA";

    if (pathname !== "/") return;

    const preference = window.localStorage.getItem(preferenceKey);
    const browserPrefersFrench = navigator.language
      .toLowerCase()
      .startsWith("fr");
    const shouldUseFrench =
      preference === "fr" || (!preference && browserPrefersFrench);

    if (shouldUseFrench) {
      window.location.replace(`/fr/${window.location.hash}`);
    }
  }, [locale, pathname]);

  return null;
}

export function LocalizedSkipLink() {
  const locale = localeFromPath(usePathname());
  return (
    <a
      href="#main-content"
      className="sr-only z-[100] rounded-md bg-background p-4 text-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
    >
      {translations[locale].skipToContent}
    </a>
  );
}

export function saveLanguagePreference(locale: "en" | "fr") {
  window.localStorage.setItem(preferenceKey, locale);
}

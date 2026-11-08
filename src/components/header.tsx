"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { PlatformLinks } from "@/components/platform-links";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  getNavigation,
  localeFromPath,
  localizedPath,
  translations,
} from "@/lib/i18n";
import { saveLanguagePreference } from "@/components/language-preference";
export function Header() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const copy = translations[locale];
  const navigation = getNavigation(locale);
  const nextLocale = locale === "fr" ? "en" : "fr";
  const languageHref = localizedPath(pathname, nextLocale);
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30 grid h-28 grid-cols-[1fr_auto_1fr] items-center bg-gradient-to-b from-black/65 to-transparent px-[5vw] text-[#f6f0e4] sm:h-36">
      <div className="flex items-center gap-8">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="grid size-11 place-items-center justify-self-start rounded-full border border-transparent transition-colors hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
            aria-label={copy.mobileMenuLabel}
          >
            <Menu className="size-6 stroke-1" />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="mt-2 text-[10px] tracking-[.2em]">
              EVAN CROSS MUSIC
            </SheetTitle>
            <SheetDescription className="sr-only">
              {copy.menuDescription}
            </SheetDescription>
            <nav
              className="mt-12 flex flex-col"
              aria-label={copy.navigationLabel}
            >
              {navigation.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={
                    pathname === item.href.split("#")[0] ? "page" : undefined
                  }
                  className="flex items-center justify-between border-b border-white/10 py-4 text-3xl tracking-tight transition-colors hover:text-accent aria-[current=page]:text-accent"
                >
                  {item.title}
                  <span className="text-[10px] tracking-widest text-white/40">
                    0{i + 1}
                  </span>
                </Link>
              ))}
              <Link
                href={languageHref}
                onClick={() => {
                  saveLanguagePreference(nextLocale);
                  setOpen(false);
                }}
                lang={nextLocale === "fr" ? "fr-CA" : "en-CA"}
                hrefLang={nextLocale === "fr" ? "fr-CA" : "en-CA"}
                className="mt-6 self-start border border-white/30 px-4 py-2 text-xs tracking-widest hover:border-accent hover:text-accent"
              >
                {nextLocale.toUpperCase()}
              </Link>
            </nav>
            <div className="mt-10">
              <PlatformLinks social locale={locale} />
            </div>
          </SheetContent>
        </Sheet>
        {/* DESKTOP NAVIGATION */}
        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label={copy.navigationLabel}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                pathname === item.href.split("#")[0] ? "page" : undefined
              }
              className="text-sm text-white/80 transition-colors hover:text-accent aria-[current=page]:text-accent"
            >
              {item.title}
            </Link>
          ))}
          <Link
            href={languageHref}
            onClick={() => saveLanguagePreference(nextLocale)}
            lang={nextLocale === "fr" ? "fr-CA" : "en-CA"}
            hrefLang={nextLocale === "fr" ? "fr-CA" : "en-CA"}
            aria-label={copy.languageLabel}
            className="border border-white/30 px-3 py-2 text-[10px] tracking-widest transition-colors hover:border-accent hover:text-accent"
          >
            {nextLocale.toUpperCase()}
          </Link>
        </nav>
      </div>
      <Link
        href={localizedPath("/", locale)}
        aria-label="Evan Cross home"
        className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-sm focus-visible:ring-2 focus-visible:ring-accent"
      >
        <Logo className="block h-auto w-28 sm:w-36 md:w-38" />
      </Link>
      <PlatformLinks
        social
        locale={locale}
        className="col-start-3 hidden justify-self-end sm:flex"
      />
    </header>
  );
}

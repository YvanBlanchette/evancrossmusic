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
import { site } from "@/lib/site";
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30 grid h-28 grid-cols-[1fr_auto_1fr] items-center bg-gradient-to-b from-black/65 to-transparent px-[5vw] text-[#f6f0e4] sm:h-36">
      <div className="flex items-center gap-8">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="grid size-11 place-items-center justify-self-start rounded-full border border-transparent transition-colors hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="size-6 stroke-1" />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="mt-2 text-[10px] tracking-[.2em]">
              EVAN CROSS MUSIC
            </SheetTitle>
            <SheetDescription className="sr-only">
              Explore music, lyrics, videos and the artist.
            </SheetDescription>
            <nav className="mt-12 flex flex-col" aria-label="Main navigation">
              {site.navigation.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="flex items-center justify-between border-b border-white/10 py-4 text-3xl tracking-tight transition-colors hover:text-accent aria-[current=page]:text-accent"
                >
                  {item.title}
                  <span className="text-[10px] tracking-widest text-white/40">
                    0{i + 1}
                  </span>
                </Link>
              ))}
              <button
                disabled
                className="flex items-center justify-between border-b border-white/10 py-4 text-left text-3xl text-white/30"
              >
                Store
                <span className="text-[10px] tracking-normal">Coming soon</span>
              </button>
            </nav>
            <div className="mt-10">
              <PlatformLinks social />
            </div>
          </SheetContent>
        </Sheet>
        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {site.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="text-sm text-white/80 transition-colors hover:text-accent aria-[current=page]:text-accent"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
<Link
  href="/"
  aria-label="Evan Cross home"
  className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-sm focus-visible:ring-2 focus-visible:ring-accent"
>
  <Logo className="block h-auto w-28 sm:w-36 md:w-38" />
</Link>
      <PlatformLinks social className="col-start-3 hidden justify-self-end sm:flex" />
    </header>
  );
}

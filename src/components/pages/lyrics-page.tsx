import "@fontsource/cormorant-garamond/400.css";
import { MiniHero } from "@/components/mini-hero";
import { Songbook } from "@/components/songbook";
import type { Locale } from "@/lib/i18n";
export function LyricsPage({ locale = "en" }: { locale?: Locale } = {}) {
  return (
    <>
      <MiniHero page="lyrics" locale={locale} />
      <section className="bg-[#17191a] text-[#f3eee6]">
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <Songbook locale={locale} />
        </div>
      </section>
    </>
  );
}

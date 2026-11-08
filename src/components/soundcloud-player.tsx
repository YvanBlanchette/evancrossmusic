import type { Locale } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

export function SoundCloudPlayer({
  title,
  locale = "en",
  height = 420,
  frameClassName = "",
  showFallback = true,
}: {
  title?: string;
  height?: number;
  frameClassName?: string;
  showFallback?: boolean;
  locale?: Locale;
}) {
  const copy = translations[locale].soundcloud;
  return (
    <div>
      <div className="overflow-hidden rounded-xl bg-[#fffaf1]">
        <iframe
          title={title ?? copy.title}
          height={height}
          className={`block w-full border-0 ${frameClassName}`}
          loading="lazy"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/evancrossmusic&color=%239a7b52&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false"
        />
      </div>
      {showFallback ? (
        <p className="mt-4 text-right text-xs text-muted-foreground">
          {copy.fallback}{" "}
          <a
            href="https://soundcloud.com/evancrossmusic"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            {copy.listen} ↗
          </a>
        </p>
      ) : null}
    </div>
  );
}

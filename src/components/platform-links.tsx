"use client";
import { BrandIcon } from "@/components/brand-icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { translations } from "@/lib/i18n";
export function PlatformLinks({
  social = false,
  className,
  locale = "en",
}: {
  social?: boolean;
  className?: string;
  locale?: Locale;
}) {
  const links = social ? site.socials : site.platforms;
  const comingSoon = locale === "fr" ? "Bientôt disponible" : "Coming soon";
  const copy = translations[locale].platformLinks;
  return (
    <TooltipProvider delayDuration={150}>
      <div
        className={cn(
          "flex items-center",
          social ? "gap-2 sm:gap-4" : "gap-5 sm:gap-7",
          className,
        )}
        aria-label={social ? copy.social : copy.streaming}
      >
        {links.map((link) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              {link.url ? (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="grid min-h-11 min-w-8 place-items-center rounded-sm text-inherit transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <BrandIcon
                    name={link.name}
                    className={
                      social ? "size-4 sm:size-5" : "size-9 sm:size-11"
                    }
                  />
                </a>
              ) : (
                <button
                  type="button"
                  aria-label={`${link.name}: ${comingSoon}`}
                  aria-disabled="true"
                  className="grid min-h-11 min-w-8 cursor-default place-items-center rounded-sm text-inherit opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <BrandIcon
                    name={link.name}
                    className={
                      social ? "size-4 sm:size-5" : "size-9 sm:size-11"
                    }
                  />
                </button>
              )}
            </TooltipTrigger>
            <TooltipContent>
              {link.name}
              {!link.url ? ` · ${comingSoon}` : ""}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

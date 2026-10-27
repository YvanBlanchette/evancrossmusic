import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";
export function Footer() {
  return (
    <footer className="bg-[#101511] px-[6vw] pt-16 pb-6 text-[#a2ac9c]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 pb-12 md:grid-cols-[1.7fr_1fr_1fr_1.2fr]">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="Evan Cross home">
              <Logo className="w-44 sm:w-48" />
            </Link>
            <p className="mt-5 text-2xl leading-snug tracking-tight text-[#f6f0e4]">
              Real life. Raw heart.
              <br />
              <span className="font-serif italic text-accent">
                Honest music.
              </span>
            </p>
            <p className="mt-5 text-[8px] tracking-[.2em]">
              INDEPENDENT ARTIST / CANADA
            </p>
          </div>
          <FooterColumn title="Explore">
            {site.navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.title}
              </Link>
            ))}
            <span className="text-white/30">Store · Coming soon</span>
          </FooterColumn>
          <FooterColumn title="Listen">
            <a
              href="https://soundcloud.com/evancrossmusic"
              target="_blank"
              rel="noopener noreferrer"
            >
              SoundCloud ↗
            </a>
            <a
              href="https://www.youtube.com/@evancrossmusic"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube ↗
            </a>
            <span className="mt-2 text-white/30">
              More platforms coming soon.
            </span>
          </FooterColumn>
          <FooterColumn title="Stay connected">
            {site.socials.map((item) =>
              item.url ? (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name} ↗
                </a>
              ) : (
                <span key={item.name} className="text-white/30">
                  {item.name} · Coming soon
                </span>
              ),
            )}
          </FooterColumn>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6 text-[9px]">
          <span>
            © {new Date().getFullYear()} Evan Cross Music. All rights reserved.
          </span>
          <span className="hidden tracking-[.2em] md:inline">
            SONGS WITH A STORY.
          </span>
          <a href="#top" className="flex items-center gap-4 hover:text-accent">
            Back to top{" "}
            <ArrowUp className="size-8 rounded-full border border-white/20 p-2" />
          </a>
        </div>
      </div>
    </footer>
  );
}
function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-4 text-xs [&>a]:transition-colors [&>a:hover]:text-accent">
      <h2 className="mb-3 text-[9px] font-semibold tracking-[.2em] text-[#e1e2d8] uppercase">
        {title}
      </h2>
      {children}
    </div>
  );
}

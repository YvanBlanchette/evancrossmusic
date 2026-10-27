import Image from "next/image";
import content from "@/lib/page-content.json";
import { cn } from "@/lib/utils";
export type PageName = keyof typeof content;
export function MiniHero({ page }: { page: PageName }) {
  const data = content[page];
  return (
    <section className="relative isolate flex min-h-[90svh] items-end overflow-hidden bg-[#101511] px-[6vw] pt-40 pb-10 text-[#f6f0e4] sm:pb-16">
      <Image
        src={data.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className={cn(
          "-z-20 object-cover",
          page === "about"
            ? "object-[25%_35%] md:object-center"
            : "object-[center_35%]",
        )}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
      <div
        className={cn(
          "w-full max-w-2xl",
          page === "about" && "md:ml-auto md:max-w-[44%]",
        )}
      >
        <p className="mb-6 text-[9px] tracking-[.3em] text-white/80">
          {data.label}
        </p>
        <h1 className="mb-6 text-6xl leading-none font-medium tracking-[-.055em] sm:text-8xl lg:text-[110px]">
          {data.title}
        </h1>
        <div className="space-y-4 text-sm leading-[1.85] text-[#e0e3da] sm:text-[15px]">
          {data.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

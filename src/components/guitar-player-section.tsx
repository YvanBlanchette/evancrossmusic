import Image from "next/image";
import { SoundCloudPlayer } from "@/components/soundcloud-player";
import { cn } from "@/lib/utils";

export function GuitarPlayerSection({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      aria-label="Evan Cross music player"
      className={cn(
        "relative aspect-[2/3] w-full overflow-hidden sm:aspect-[3/4] md:aspect-[4/3] lg:aspect-video",
        className,
      )}
    >
      {/* GUITAR PLAYER */}
      <Image
        src="/assets/guitar-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[12%_center] md:object-[18%_center] lg:object-center"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#17191a]/80 via-[#17191a]/20 to-transparent" />
      <div className="absolute left-[4%] top-[10%] grid h-[74%] w-[92%] place-items-center sm:left-[7%] sm:top-[11%] sm:h-[72%] sm:w-[72%] md:left-[7%] md:top-[12%] md:h-[72%] md:w-[70%] lg:left-[7%] lg:top-[18%] lg:h-[64%] lg:w-[40%]">
        <div className="w-full max-w-[540px]">
          <SoundCloudPlayer
            title="Evan Cross music collection on SoundCloud"
            height={420}
            frameClassName="h-[360px] sm:h-[380px] lg:h-[420px]"
            showFallback={false}
          />
        </div>
      </div>
    </section>
  );
}
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import data from "@/lib/hero-content.json";
import { PlatformLinks } from "@/components/platform-links";
import { cn } from "@/lib/utils";
const positions = [
  "object-[42%_center]",
  "object-[45%_center]",
  "object-[35%_center]",
  "object-center",
  "object-[40%_center]",
  "object-[40%_center]",
  "object-center",
  "object-center",
  "object-center",
  "object-center",
];
export function HomeHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [failed, setFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const progress = useRef<HTMLProgressElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const reset = useRef(false);
  const activeVideo = Boolean(data.videoSrc) && !failed && !reduced;
  useEffect(() => {
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    let frame = 0,
      elapsed = 0,
      last = 0;
    const tick = (time: number) => {
      if (reset.current) {
        elapsed = 0;
        reset.current = false;
      }
      if (last && !paused && !reduced && !document.hidden && !activeVideo) {
        elapsed += Math.min(time - last, 100);
        if (progress.current)
          progress.current.value = (elapsed / data.intervalMs) * 100;
        if (elapsed >= data.intervalMs) {
          elapsed = 0;
          setIndex((i) => (i + 1) % data.slides.length);
        }
      }
      last = time;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, reduced, activeVideo]);
  useEffect(() => {
    const el = video.current;
    if (!el || !activeVideo) return;
    const sync = () => {
      if (paused || document.hidden) el.pause();
      else void el.play().catch(() => setFailed(true));
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, [paused, activeVideo]);
  const slide = data.slides[index];
  function select(next: number) {
    reset.current = true;
    setIndex((next + data.slides.length) % data.slides.length);
  }
  return (
    <section
      aria-roledescription="carousel"
      aria-label="Evan Cross stories"
      className="relative isolate flex min-h-svh items-end overflow-hidden bg-primary px-[6vw] pt-44 pb-40 text-[#f6f0e4] sm:min-h-[780px] sm:pb-48 lg:min-h-svh"
    >
      <div
        className={cn(
          "absolute inset-0 -z-30",
          activeVideo && videoReady && "invisible",
        )}
      >
        {data.slides.map((item, i) => (
          <Image
            key={item.src}
            src={item.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={cn(
              "object-cover transition-opacity duration-[1600ms] motion-reduce:transition-none",
              positions[i],
              i === index ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>
      {activeVideo ? (
        <video
          ref={video}
          src={data.videoSrc}
          poster={data.videoPoster}
          muted
          loop
          playsInline
          onPlaying={() => setVideoReady(true)}
          onError={() => setFailed(true)}
          className={cn(
            "absolute inset-0 -z-20 size-full object-cover",
            videoReady ? "opacity-100" : "opacity-0",
          )}
          aria-label="Evan Cross background video"
        />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
      <div className="max-w-5xl">
        <p className="mb-7 text-[8px] tracking-[.3em] sm:text-[10px]">
          COUNTRY · SOUL · BLUES · AMERICANA
        </p>
        <h1 className="text-[clamp(42px,6vw,92px)] leading-[1.08] font-medium tracking-[-.05em]">
          {slide.line1}
          <br />
          <span className="font-serif font-normal text-accent">
            {slide.line2}
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-xs leading-7 text-white/80 sm:text-sm">
          {slide.subtitle}
        </p>
        <PlatformLinks className="mt-7" />
      </div>
      <div className="absolute inset-x-[5vw] bottom-8 flex flex-wrap items-center justify-center gap-4 sm:justify-between">
        <span className="hidden text-[8px] tracking-[.2em] text-white/60 sm:inline">
          EVAN CROSS / INDEPENDENT ARTIST
        </span>
        <div
          className="flex items-center gap-1"
          role="group"
          aria-label="Hero image navigation"
        >
          {!activeVideo
            ? data.slides.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => select(i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                      e.preventDefault();
                      select(index + (e.key === "ArrowRight" ? 1 : -1));
                    }
                  }}
                  aria-label={`Image ${i + 1}: ${item.line1} ${item.line2}`}
                  aria-current={i === index ? "true" : undefined}
                  className="group grid size-6 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span
                    className={cn(
                      "size-1.5 rounded-full transition-transform",
                      i === index
                        ? "scale-150 bg-accent"
                        : "bg-white/40 group-hover:bg-white",
                    )}
                  />
                </button>
              ))
            : null}
          <button
            type="button"
            onClick={() => setPaused((v) => !v)}
            aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
            aria-pressed={paused}
            className="ml-2 grid size-8 place-items-center rounded-full opacity-50 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-accent"
          >
            {paused ? (
              <Play className="size-3" />
            ) : (
              <Pause className="size-3" />
            )}
          </button>
        </div>
        <a
          className="hidden text-[8px] tracking-[.2em] text-white/60 sm:inline"
          href="#listen"
        >
          EXPLORE THE MUSIC ↓
        </a>
      </div>
      <progress
        ref={progress}
        value={0}
        max={100}
        aria-label="Time until the next hero image"
        className="absolute inset-x-0 bottom-0 h-0.5 w-full appearance-none border-0 [&::-webkit-progress-bar]:bg-white/10 [&::-webkit-progress-value]:bg-accent [&::-moz-progress-bar]:bg-accent"
      />
    </section>
  );
}

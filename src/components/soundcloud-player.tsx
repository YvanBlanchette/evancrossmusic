export function SoundCloudPlayer({
  title = "Evan Cross music catalogue",
  height = 420,
  frameClassName = "",
  showFallback = true,
}: {
  title?: string;
  height?: number;
  frameClassName?: string;
  showFallback?: boolean;
}) {
  return (
    <div>
      <div className="overflow-hidden rounded-xl bg-[#fffaf1]">
        <iframe
          title={title}
          height={height}
          className={`block w-full border-0 ${frameClassName}`}
          loading="lazy"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/evancrossmusic&color=%239a7b52&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false"
        />
      </div>
      {showFallback ? (
        <p className="mt-4 text-right text-xs text-muted-foreground">
          Player not loading?{" "}
          <a
            href="https://soundcloud.com/evancrossmusic"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Listen on SoundCloud ↗
          </a>
        </p>
      ) : null}
    </div>
  );
}

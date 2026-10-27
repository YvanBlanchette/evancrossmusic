import icons from "@/lib/brand-icons.json";
import { cn } from "@/lib/utils";
export function BrandIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const svg = icons[name as keyof typeof icons];
  if (!svg) return null;
  // SVGs are bundled, reviewed source assets, never user-generated HTML.
  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex size-6 [&>svg]:size-full", className)}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

import Image from "next/image";
import { cn } from "@/lib/utils";
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/assets/evan-cross-logo.svg"
      alt="Evan Cross Music"
      width={3507}
      height={1433}
      priority
      className={cn("h-auto w-48 brightness-0 invert sm:w-64", className)}
    />
  );
}

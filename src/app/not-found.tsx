import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <section className="bg-primary px-6 pt-48 pb-24 text-center text-primary-foreground">
      <p className="text-xs tracking-widest text-accent">404</p>
      <h1 className="mt-5 text-5xl tracking-tight">This track is missing.</h1>
      <p className="my-6 text-white/60">Let’s get you back to the music.</p>
      <Button variant="secondary" asChild>
        <Link href="/">Back home</Link>
      </Button>
    </section>
  );
}

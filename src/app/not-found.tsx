"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { localeFromPath, localizedPath, translations } from "@/lib/i18n";
export default function NotFound() {
  const locale = localeFromPath(usePathname());
  const copy = translations[locale].notFound;
  return (
    <section className="bg-primary px-6 pt-48 pb-24 text-center text-primary-foreground">
      <p className="text-xs tracking-widest text-accent">404</p>
      <h1 className="mt-5 text-5xl tracking-tight">{copy.title}</h1>
      <p className="my-6 text-white/60">{copy.description}</p>
      <Button variant="secondary" asChild>
        <Link href={localizedPath("/", locale)}>{copy.home}</Link>
      </Button>
    </section>
  );
}

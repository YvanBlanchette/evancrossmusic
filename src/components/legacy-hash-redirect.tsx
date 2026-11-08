"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export function LegacyHashRedirect() {
  const router = useRouter();
  useEffect(() => {
    const redirect = () => {
      const hash = window.location.hash.slice(1);
      const localePrefix =
        window.location.pathname === "/fr" ||
        window.location.pathname.startsWith("/fr/")
          ? "/fr"
          : "";
      if (["music", "lyrics", "videos", "about"].includes(hash))
        router.replace(localePrefix + "/" + hash);
      else if (hash === "home-player")
        window.location.replace(`${localePrefix}/#listen`);
    };
    redirect();
    window.addEventListener("hashchange", redirect);
    return () => window.removeEventListener("hashchange", redirect);
  }, [router]);
  return null;
}

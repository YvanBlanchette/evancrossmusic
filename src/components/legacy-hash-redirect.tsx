"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export function LegacyHashRedirect() {
  const router = useRouter();
  useEffect(() => {
    const redirect = () => {
      const hash = window.location.hash.slice(1);
      if (["music", "lyrics", "videos", "about"].includes(hash))
        router.replace("/" + hash);
      else if (hash === "home-player") window.location.replace("/#listen");
    };
    redirect();
    window.addEventListener("hashchange", redirect);
    return () => window.removeEventListener("hashchange", redirect);
  }, [router]);
  return null;
}

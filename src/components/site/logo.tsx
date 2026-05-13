"use client";

import { cn } from "@/lib/utils";

/**
 * Theme-aware brand logo.
 * Dark variant shows in dark mode (via .dark class on <html>);
 * light variant shows otherwise. Rendered as a circle.
 *
 * Pure CSS swap — no JS, no hydration flicker (next-themes injects
 * the .dark class before paint).
 */
export function Logo({ className }: { className?: string }) {
  return (
    <>
      <img
        src="/abdallah-saqr-logo.svg"
        alt="Abdallah Ramadan logo"
        aria-hidden
        className={cn(
          "hidden rounded-full object-cover dark:block",
          className
        )}
      />
      <img
        src="/abdallah-saqr-logo-light.svg"
        alt="Abdallah Ramadan logo"
        className={cn(
          "block rounded-full object-cover dark:hidden",
          className
        )}
      />
    </>
  );
}

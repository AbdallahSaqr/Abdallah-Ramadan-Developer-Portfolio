"use client";

import { useT } from "@/components/providers/language-provider";

/**
 * Parked just above the viewport and slid into view on focus, so keyboard
 * users can jump straight past the fixed navigation.
 */
export function SkipLink() {
  const t = useT();
  return (
    <a
      href="#main"
      className="fixed start-4 top-4 z-[200] -translate-y-24 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background shadow-lg transition-transform duration-200 focus:translate-y-0"
    >
      {t("nav.skip")}
    </a>
  );
}

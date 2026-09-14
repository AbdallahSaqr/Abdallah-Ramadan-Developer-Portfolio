"use client";

import { useLang } from "@/components/providers/language-provider";
import { cn } from "@/lib/utils";

export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  const next = lang === "en" ? "ar" : "en";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={t("nav.language")}
      title={t("nav.language")}
      lang={next}
      className={cn(
        "inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] px-2 font-mono text-xs font-medium tracking-wider text-foreground/70 transition-all duration-300 hover:border-foreground/25 hover:bg-foreground/[0.06] hover:text-foreground",
        className
      )}
    >
      {next.toUpperCase()}
    </button>
  );
}

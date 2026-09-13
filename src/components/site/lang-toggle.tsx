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
        "inline-flex h-9 min-w-9 items-center justify-center rounded-md px-2 font-mono text-xs font-medium tracking-wider text-muted transition-colors hover:bg-foreground/[0.05] hover:text-foreground",
        className
      )}
    >
      {next.toUpperCase()}
    </button>
  );
}

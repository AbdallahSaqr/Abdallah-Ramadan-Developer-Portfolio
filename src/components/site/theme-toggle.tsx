"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useT } from "@/components/providers/language-provider";
import { useMounted } from "@/lib/use-mounted";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const t = useT();

  // Before hydration the resolved theme is unknown; assume dark so the icon
  // does not flip once next-themes reports in.
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={t("nav.theme")}
      aria-pressed={mounted ? isDark : undefined}
      title={t("nav.theme")}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-foreground/[0.05] hover:text-foreground",
        className
      )}
    >
      {isDark ? (
        <Moon aria-hidden className="h-4 w-4" />
      ) : (
        <Sun aria-hidden className="h-4 w-4" />
      )}
    </button>
  );
}

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
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] text-foreground/70 transition-all duration-300 hover:border-foreground/25 hover:bg-foreground/[0.06] hover:text-foreground",
        className
      )}
    >
      {/* Both icons are absolutely centred inside the button so the cross-fade
          never shifts them off-centre. */}
      <Sun
        aria-hidden
        className={cn(
          "absolute h-4 w-4 transition-all duration-300",
          isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        )}
      />
      <Moon
        aria-hidden
        className={cn(
          "absolute h-4 w-4 transition-all duration-300",
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
        )}
      />
    </button>
  );
}

"use client";

import { MotionConfig } from "motion/react";
import { ThemeProvider as NextThemes } from "next-themes";
import { LanguageProvider } from "./language-provider";
import type { Locale } from "@/lib/i18n";

export function Providers({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Locale;
}) {
  return (
    <NextThemes
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* `reducedMotion="user"` drops transform/layout animations for visitors
          who ask for less motion (WCAG 2.3.3) without extra code per component. */}
      <MotionConfig reducedMotion="user">
        <LanguageProvider lang={lang}>{children}</LanguageProvider>
      </MotionConfig>
    </NextThemes>
  );
}

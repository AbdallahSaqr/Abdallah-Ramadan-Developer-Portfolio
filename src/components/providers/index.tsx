"use client";

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
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LanguageProvider initialLang={lang}>{children}</LanguageProvider>
    </NextThemes>
  );
}

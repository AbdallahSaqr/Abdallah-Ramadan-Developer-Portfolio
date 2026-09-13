import type { ReactElement, ReactNode } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { MotionConfig } from "motion/react";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/components/providers/language-provider";
import type { Locale } from "@/lib/i18n";

/**
 * Renders a component inside the same provider stack the app uses, so
 * `useT()`, `useTheme()` and Motion all behave as they do in the page.
 */
export function renderWithProviders(
  ui: ReactElement,
  { lang = "en" as Locale, ...options }: RenderOptions & { lang?: Locale } = {}
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <MotionConfig reducedMotion="never">
          <LanguageProvider lang={lang}>{children}</LanguageProvider>
        </MotionConfig>
      </ThemeProvider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...options });
}

/** Reads a cookie value written by the component under test. */
export function readCookie(name: string) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
}

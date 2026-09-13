"use client";

import { createContext, useCallback, useContext, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  LOCALE_COOKIE,
  messages,
  type Locale,
  type MessageKey,
} from "@/lib/i18n";

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

type Ctx = {
  lang: Locale;
  dir: "rtl" | "ltr";
  /** Navigates to the other locale's page and remembers the choice. */
  setLang: (l: Locale) => void;
  t: (key: MessageKey) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

/**
 * The locale comes from the route (`/en`, `/ar`), so there is no local state
 * here to drift out of sync with the URL: switching languages is a navigation.
 */
export function LanguageProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Locale;
}) {
  const router = useRouter();
  const dir = lang === "ar" ? "rtl" : "ltr";

  const setLang = useCallback(
    (next: Locale) => {
      // Remembered so a later visit to `/` lands on the right locale.
      const secure = window.location.protocol === "https:" ? "; secure" : "";
      document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${ONE_YEAR_SECONDS}; samesite=lax${secure}`;
      // `scroll: false` keeps the reader where they were in the page.
      router.push(`/${next}`, { scroll: false });
    },
    [router]
  );

  const t = useCallback(
    (key: MessageKey) => messages[lang][key] ?? messages.en[key],
    [lang]
  );

  const value = useMemo<Ctx>(
    () => ({ lang, dir, setLang, t }),
    [lang, dir, setLang, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

export function useT() {
  return useLang().t;
}

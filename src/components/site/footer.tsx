"use client";

import { useLang } from "@/components/providers/language-provider";

export function Footer() {
  const { lang, t } = useLang();

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {t("site.name")}. {t("footer.rights")}
        </p>

        <nav aria-label={t("footer.legal")} className="flex gap-6">
          <a
            href={`/${lang}/privacy`}
            className="transition-colors hover:text-foreground"
          >
            {t("footer.privacy")}
          </a>
          <a
            href={`/${lang}/terms`}
            className="transition-colors hover:text-foreground"
          >
            {t("footer.terms")}
          </a>
        </nav>
      </div>
    </footer>
  );
}

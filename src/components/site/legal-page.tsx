import { ArrowLeft } from "lucide-react";
import { messages, type Locale, type MessageKey } from "@/lib/i18n";
import { site } from "@/lib/site-config";
import { Footer } from "./footer";
import { Logo } from "./logo";

type Section = { title: MessageKey; body: MessageKey };

/**
 * Shared shell for the privacy and terms pages. Server-rendered: these pages
 * are plain reading material and ship no client JavaScript of their own.
 */
export function LegalPage({
  locale,
  titleKey,
  introKey,
  sections,
}: {
  locale: Locale;
  titleKey: MessageKey;
  introKey: MessageKey;
  sections: readonly Section[];
}) {
  const t = (key: MessageKey) => messages[locale][key];

  return (
    <>
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-6">
          <a
            href={`/${locale}`}
            className="flex items-center gap-3 rounded-md"
            aria-label={t("nav.home")}
          >
            <Logo className="h-8 w-8" />
            <span className="text-sm font-medium tracking-tight text-foreground">
              {t("site.name")}
            </span>
          </a>
          <a
            href={`/${locale}`}
            className="inline-flex items-center gap-2 rounded-md text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft aria-hidden className="rtl-flip h-4 w-4" />
            {t("footer.back")}
          </a>
        </div>
      </header>

      <main id="main" className="px-6 py-16 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <p className="label">{t("legal.updated")}</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t(titleKey)}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            {t(introKey)}
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold tracking-tight text-foreground">
                  {t(section.title)}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {t(section.body)}
                </p>
              </section>
            ))}
          </div>

          <p className="mt-12 border-t border-border pt-8 text-base text-muted">
            {t("contact.badge")}:{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
            >
              {site.email}
            </a>
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}

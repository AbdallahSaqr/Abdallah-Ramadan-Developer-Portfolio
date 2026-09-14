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
      <header className="border-b border-foreground/[0.06]">
        <div className="mx-auto flex h-20 max-w-3xl items-center justify-between gap-4 px-5 sm:px-6">
          <a
            href={`/${locale}`}
            aria-label={t("nav.home")}
            className="flex items-center gap-3"
          >
            <Logo className="h-9 w-9" />
            <span className="text-sm font-medium tracking-tight text-foreground">
              {site.name}
            </span>
          </a>
          <a
            href={`/${locale}`}
            className="inline-flex h-9 items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] px-4 text-sm text-foreground/70 transition-colors hover:border-foreground/25 hover:text-foreground"
          >
            <ArrowLeft aria-hidden className="rtl-flip h-4 w-4" />
            {t("footer.back")}
          </a>
        </div>
      </header>

      <main id="main" className="relative px-5 py-16 sm:px-6 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1">
            <span className="font-mono text-xs tracking-wide text-foreground/60">
              {t("legal.updated")}
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-indigo-400 via-foreground/90 to-rose-400 bg-clip-text text-transparent">
              {t(titleKey)}
            </span>
          </h1>

          <p className="mt-6 text-base font-light leading-relaxed tracking-wide text-foreground/60 sm:text-lg">
            {t(introKey)}
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                  {t(section.title)}
                </h2>
                <p className="mt-3 text-base font-light leading-relaxed tracking-wide text-foreground/60">
                  {t(section.body)}
                </p>
              </section>
            ))}
          </div>

          <p className="mt-12 border-t border-foreground/[0.06] pt-8 text-base font-light tracking-wide text-foreground/60">
            {t("contact.badge")}:{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-foreground transition-opacity hover:opacity-80"
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

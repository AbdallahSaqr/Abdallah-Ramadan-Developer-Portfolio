"use client";

import { motion } from "motion/react";
import { site } from "@/lib/site-config";
import { useLang } from "@/components/providers/language-provider";
import { EASE } from "@/lib/motion";

export function Footer() {
  const { lang, t } = useLang();
  return (
    <footer className="relative border-t border-foreground/[0.06] px-5 py-10 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE }}
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-xs font-light tracking-wide text-foreground/50 sm:flex-row sm:items-center"
      >
        <div>
          © {new Date().getFullYear()} {site.name}. {t("footer.built")}
        </div>
        <nav aria-label={t("footer.legal")} className="flex gap-5">
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

        <div className="font-mono uppercase tracking-widest">
          {t("about.detail.location.value")}
        </div>
      </motion.div>
    </footer>
  );
}

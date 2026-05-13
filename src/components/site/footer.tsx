"use client";

import { motion } from "motion/react";
import { site } from "@/lib/site-config";
import { useT } from "@/components/providers/language-provider";

const ease = [0.25, 0.4, 0.25, 1] as const;

export function Footer() {
  const t = useT();
  return (
    <footer className="relative border-t border-foreground/[0.06] px-5 py-10 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease }}
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-xs font-light tracking-wide text-foreground/40 sm:flex-row sm:items-center"
      >
        <div>
          © {new Date().getFullYear()} {site.name}. {t("footer.built")}
        </div>
        <div className="font-mono uppercase tracking-widest">
          {t("about.detail.location.value")}
        </div>
      </motion.div>
    </footer>
  );
}

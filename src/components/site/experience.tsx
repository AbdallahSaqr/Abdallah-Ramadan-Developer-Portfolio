"use client";

import { motion } from "motion/react";
import { experiences } from "@/lib/site-config";
import { useT } from "@/components/providers/language-provider";
import { EASE, staggerChildren } from "@/lib/motion";
import { SectionHeader } from "./section-header";

const list = staggerChildren(0.18, 0.3);

const timelineLine = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 1.4, ease: EASE, delay: 0.2 } },
};

// Rises rather than slides sideways, so the motion reads the same in RTL.
const node = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const dot = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

export function Experience() {
  const t = useT();
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-lazy relative scroll-mt-24 overflow-hidden px-5 py-24 sm:px-6 sm:py-32 md:py-40"
    >
      <SectionHeader
        id="experience-title"
        index={t("exp.index")}
        badge={t("exp.badge")}
        title1={t("exp.title1")}
        title2={t("exp.title2")}
        className="mx-auto mb-12 max-w-6xl sm:mb-16"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative mx-auto max-w-6xl"
      >
        <motion.div
          variants={timelineLine}
          style={{ originY: 0 }}
          aria-hidden
          className="absolute bottom-2 start-4 top-2 w-px bg-gradient-to-b from-indigo-400/60 via-foreground/20 to-rose-400/60 sm:start-6"
        />

        <motion.ol variants={list} className="space-y-10 ps-10 sm:space-y-12 sm:ps-16">
          {experiences.map((exp) => (
            <motion.li key={exp.id} variants={node} className="relative">
              <motion.span
                variants={dot}
                aria-hidden
                className="absolute -start-10 top-1 flex h-3 w-3 items-center justify-center sm:-start-14"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400/60 opacity-60" />
                <span className="relative inline-block h-2 w-2 rounded-full bg-gradient-to-br from-indigo-300 to-rose-300" />
              </motion.span>

              <article className="rounded-2xl border border-foreground/[0.08] bg-foreground/[0.03] p-5 transition-colors duration-500 hover:bg-foreground/[0.05] sm:p-8">
                <div className="grid gap-4 sm:grid-cols-[1fr_2fr]">
                  <div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-foreground/40">
                      {t(`exp.${exp.id}.period`)}
                    </div>
                    <h3 className="mt-3 text-lg font-bold tracking-tight text-foreground sm:text-xl">
                      {t(`exp.${exp.id}.company`)}
                    </h3>
                    <div className="mt-1 text-sm font-light tracking-wide text-foreground/60">
                      {t(`exp.${exp.id}.role`)}
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground/40">
                      <span aria-hidden className="h-px w-3 bg-foreground/30" />
                      {t(`exp.${exp.id}.location`)}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((key) => (
                      <li
                        key={key}
                        className="flex gap-3 font-light leading-relaxed tracking-wide text-foreground/60"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-px w-4 shrink-0 bg-foreground/20"
                        />
                        <span>{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ol>
      </motion.div>
    </section>
  );
}

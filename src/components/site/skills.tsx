"use client";

import { motion } from "motion/react";
import { SectionHeader } from "./section-header";
import { expertise } from "@/lib/site-config";
import { useT } from "@/components/providers/language-provider";

const ease = [0.25, 0.4, 0.25, 1] as const;

const groupGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const groupItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const chipWave = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const chip = {
  hidden: { opacity: 0, scale: 0.6, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export function Skills() {
  const t = useT();
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-24 sm:px-6 sm:py-32 md:py-40"
    >
      <SectionHeader
        index={t("skills.index")}
        badge={t("skills.badge")}
        title1={t("skills.title1")}
        title2={t("skills.title2")}
        className="mx-auto mb-12 max-w-6xl sm:mb-16"
      />

      <motion.ul
        variants={groupGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.04] sm:grid-cols-2 lg:grid-cols-4"
      >
        {expertise.map((group, i) => (
          <motion.li
            key={group.id}
            variants={groupItem}
            className="group relative h-full bg-background/80 p-6 transition-colors duration-500 hover:bg-foreground/[0.03] sm:p-8"
          >
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-foreground/30">
              0{i + 1}
            </div>
            <h3 className="mt-4 text-xl font-bold tracking-tight text-foreground">
              {t(`skills.group.${group.id}`)}
            </h3>
            <motion.ul
              variants={chipWave}
              className="mt-6 flex flex-wrap gap-1.5"
            >
              {group.items.map((label) => (
                <motion.li
                  key={label}
                  variants={chip}
                  className="rounded-full border border-foreground/10 bg-foreground/[0.02] px-2.5 py-1 text-xs font-light tracking-wide text-foreground/70 transition-colors group-hover:border-foreground/15"
                >
                  {label}
                </motion.li>
              ))}
            </motion.ul>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

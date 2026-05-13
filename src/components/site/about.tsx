"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeader } from "./section-header";
import { useT } from "@/components/providers/language-provider";
import { useIsMobile } from "@/lib/use-is-mobile";
import { site } from "@/lib/site-config";

const ease = [0.25, 0.4, 0.25, 1] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export function About() {
  const t = useT();
  const isMobile = useIsMobile();
  return (
    <section
      id="about"
      className="section-lazy relative overflow-hidden px-5 py-24 sm:px-6 sm:py-32 md:py-40"
    >
      <SectionHeader
        index={t("about.index")}
        badge={t("about.badge")}
        title1={t("about.title1")}
        title2={t("about.title2")}
        className="mx-auto mb-12 max-w-6xl sm:mb-16"
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-10 sm:gap-12 lg:grid-cols-[1fr_1.4fr]">
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm"
        >
          <motion.div
            animate={isMobile ? undefined : { y: [0, -10, 0] }}
            transition={isMobile ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-indigo-400/40 via-foreground/10 to-rose-400/40 opacity-70 blur-md" />
            <div className="relative overflow-hidden rounded-[24px] border border-foreground/10 bg-foreground/[0.05] p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[18px]">
                <Image
                  src="/abdallah.jpg"
                  alt={site.name}
                  fill
                  sizes="(min-width: 1024px) 24rem, 80vw"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="flex items-center justify-between px-3 py-3">
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {site.name}
                  </div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground/40">
                    {t("about.detail.location.value")}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  {t("about.available")}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {([t("about.bio.1"), t("about.bio.2")] as const).map((para, i) => (
            <motion.p
              key={i}
              variants={item}
              className="text-base font-light leading-relaxed tracking-wide text-foreground/55 sm:text-lg"
            >
              {para}
            </motion.p>
          ))}

          <motion.div
            variants={item}
            className="grid gap-6 pt-6 sm:grid-cols-2"
          >
            <Detail
              label={t("about.detail.currently.label")}
              value={t("about.detail.currently.value")}
            />
            <Detail
              label={t("about.detail.education.label")}
              value={t("about.detail.education.value")}
            />
            <Detail
              label={t("about.detail.location.label")}
              value={t("about.detail.location.value")}
            />
            <Detail
              label={t("about.detail.languages.label")}
              value={t("about.detail.languages.value")}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-foreground/[0.06] pt-4">
      <div className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-foreground/40">
        {label}
      </div>
      <div className="mt-1.5 text-sm font-light tracking-wide text-foreground/80">
        {value}
      </div>
    </div>
  );
}

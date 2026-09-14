"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useT } from "@/components/providers/language-provider";
import { useIsMobile } from "@/lib/use-media-query";
import { EASE, staggerChildren, VIEWPORT_ONCE } from "@/lib/motion";
import { portraitImage, site } from "@/lib/site-config";
import { SectionHeader } from "./section-header";

const stagger = staggerChildren();

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function About() {
  const t = useT();
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  // The portrait's slow float is decorative: skip it on phones (battery) and
  // whenever the visitor asked for reduced motion.
  const float = !isMobile && !prefersReducedMotion;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-lazy relative scroll-mt-24 overflow-hidden px-5 py-24 sm:px-6 sm:py-32 md:py-40"
    >
      <SectionHeader
        id="about-title"
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
          transition={{ duration: 1.2, ease: EASE }}
          viewport={VIEWPORT_ONCE}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm"
        >
          <motion.div
            animate={float ? { y: [0, -10, 0] } : undefined}
            transition={
              float
                ? { duration: 8, repeat: Infinity, ease: "easeInOut" }
                : undefined
            }
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-indigo-400/40 via-foreground/10 to-rose-400/40 opacity-70 blur-md"
            />
            <div className="relative overflow-hidden rounded-[24px] border border-foreground/10 bg-foreground/[0.05] p-2">
              {/* Frame follows the source photo's own ratio, so swapping the
                  portrait never letterboxes or over-crops it. */}
              <div
                className="relative overflow-hidden rounded-[18px]"
                style={{
                  aspectRatio: `${portraitImage.width} / ${portraitImage.height}`,
                }}
              >
                <Image
                  src={portraitImage}
                  alt={`${site.name}, ${site.role}`}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 24rem, (min-width: 640px) 24rem, 80vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                />
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
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-300"
                  />
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
          viewport={VIEWPORT_ONCE}
          className="space-y-6"
        >
          {([t("about.bio.1"), t("about.bio.2")] as const).map((para, i) => (
            <motion.p
              key={i}
              variants={item}
              className="text-base font-light leading-relaxed tracking-wide text-foreground/60 sm:text-lg"
            >
              {para}
            </motion.p>
          ))}

          <motion.dl variants={item} className="grid gap-6 pt-6 sm:grid-cols-2">
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
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-foreground/[0.06] pt-4">
      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-foreground/40">
        {label}
      </dt>
      <dd className="mt-1.5 text-sm font-light tracking-wide text-foreground/80">
        {value}
      </dd>
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/lib/site-config";
import { useT } from "@/components/providers/language-provider";
import { useIsMobile } from "@/lib/use-media-query";
import { EASE, VIEWPORT_ONCE } from "@/lib/motion";
import { SectionHeader } from "./section-header";

export function Contact() {
  const t = useT();
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const glow = !isMobile && !prefersReducedMotion;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-lazy relative scroll-mt-24 overflow-hidden px-5 py-24 sm:px-6 sm:py-32 md:py-40"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE }}
          viewport={VIEWPORT_ONCE}
          className="relative overflow-hidden rounded-3xl border border-foreground/[0.08] bg-foreground/[0.03] p-8 backdrop-blur-xl sm:p-12 md:p-16 lg:p-20"
        >
          <motion.div
            aria-hidden
            animate={glow ? { opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] } : undefined}
            transition={
              glow ? { duration: 8, repeat: Infinity, ease: "easeInOut" } : undefined
            }
            className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-indigo-500/25 blur-3xl"
          />
          <motion.div
            aria-hidden
            animate={glow ? { opacity: [0.35, 0.65, 0.35], scale: [1, 1.15, 1] } : undefined}
            transition={
              glow ? { duration: 10, repeat: Infinity, ease: "easeInOut" } : undefined
            }
            className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-rose-500/25 blur-3xl"
          />

          <div className="relative">
            <SectionHeader
              id="contact-title"
              index={t("contact.index")}
              badge={t("contact.badge")}
              title1={t("contact.title1")}
              title2={t("contact.title2")}
            />

            <p className="mt-6 max-w-lg text-base font-light leading-relaxed tracking-wide text-foreground/60 sm:text-lg">
              {t("contact.description")}
            </p>

            <motion.a
              href={`mailto:${site.email}`}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group mt-10 inline-flex flex-wrap items-center gap-3 rounded-lg text-lg font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl"
            >
              <Mail
                aria-hidden
                className="h-5 w-5 transition-transform group-hover:rotate-12 sm:h-6 sm:w-6 md:h-7 md:w-7"
              />
              <span className="relative break-all">
                <span className="bg-gradient-to-r from-indigo-400 via-foreground to-rose-400 bg-clip-text text-transparent">
                  {site.email}
                </span>
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-indigo-400 via-foreground to-rose-400 transition-transform duration-500 group-hover:scale-x-100"
                />
              </span>
              <ArrowUpRight
                aria-hidden
                className="rtl-flip h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-6 sm:w-6 md:h-7 md:w-7"
              />
            </motion.a>

            <dl className="mt-12 grid gap-6 sm:grid-cols-2">
              <Item
                label={t("contact.phone.label")}
                value={site.phone}
                href={`tel:${site.phone}`}
              />
              <Item
                label={t("contact.location.label")}
                value={t("about.detail.location.value")}
              />
            </dl>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm font-light tracking-wide text-foreground/50">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="rounded transition-colors hover:text-foreground"
                >
                  {s.label} <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Item({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="border-t border-foreground/[0.06] pt-4">
      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-foreground/40">
        {label}
      </dt>
      <dd className="mt-1.5 text-base font-light tracking-wide text-foreground/85">
        {href ? (
          <a href={href} className="rounded transition-colors hover:opacity-80">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

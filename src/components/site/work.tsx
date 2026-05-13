"use client";

import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SectionHeader } from "./section-header";
import { projects } from "@/lib/site-config";
import { useT } from "@/components/providers/language-provider";
import { cn } from "@/lib/utils";

const ease = [0.25, 0.4, 0.25, 1] as const;

const list = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease } },
};

export function Work() {
  const t = useT();
  return (
    <section
      id="work"
      className="section-lazy relative overflow-hidden px-5 py-24 sm:px-6 sm:py-32 md:py-40"
    >
      <SectionHeader
        index={t("work.index")}
        badge={t("work.badge")}
        title1={t("work.title1")}
        title2={t("work.title2")}
        className="mx-auto mb-12 max-w-6xl sm:mb-16"
      />

      <motion.ul
        variants={list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="mx-auto flex max-w-6xl flex-col gap-6 sm:gap-8"
      >
        {projects.map((p) => (
          <motion.li key={p.id} variants={card}>
            <ProjectCard project={p} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

function ProjectCard({
  project: p,
}: {
  project: (typeof projects)[number];
}) {
  const t = useT();
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative block overflow-hidden rounded-3xl border border-foreground/[0.08] bg-foreground/[0.04] transition-all duration-500 hover:-translate-y-1 hover:border-foreground/15 hover:bg-foreground/[0.06] hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)]"
    >
      <div
        className={cn(
          "pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br blur-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-70",
          p.accent
        )}
      />

      <div className="relative grid items-stretch md:grid-cols-[1.35fr_1fr]">
        <LivePreview
          url={p.url}
          title={p.title}
          tag={t(`projects.${p.id}.tag`)}
          liveLabel={t("work.live")}
          preview={p.preview}
        />

        <div className="relative flex flex-col justify-between gap-6 p-5 sm:gap-8 sm:p-8 md:p-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-foreground/40">
              <ExternalLink className="h-3 w-3" />
              {p.domain}
            </div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              <span className="bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-transparent">
                {p.title}
              </span>
            </h3>
            <p className="mt-3 text-sm font-light leading-relaxed tracking-wide text-foreground/55 sm:mt-4 sm:text-base">
              {t(`projects.${p.id}.subtitle`)}
            </p>
            <ul className="mt-5 flex flex-wrap gap-1.5 sm:mt-6">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-foreground/10 bg-foreground/[0.02] px-2.5 py-1 font-mono text-[0.6rem] tracking-wide text-foreground/70"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground/70 transition-colors group-hover:text-foreground">
            <span className="bg-gradient-to-r from-indigo-400 via-foreground to-rose-400 bg-clip-text text-transparent">
              {t("work.visit")}
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl-flip" />
          </div>
        </div>
      </div>
    </a>
  );
}

function LivePreview({
  url,
  title,
  tag,
  liveLabel,
  preview,
}: {
  url: string;
  title: string;
  tag: string;
  liveLabel: string;
  preview?: string;
}) {
  const params = new URLSearchParams({
    url,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    "viewport.width": "1440",
    "viewport.height": "900",
    "viewport.deviceScaleFactor": "1",
    waitUntil: "networkidle0",
    type: "jpeg",
  });
  const screenshot = preview ?? `https://api.microlink.io/?${params.toString()}`;

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-foreground/[0.04] md:aspect-auto md:min-h-[20rem] lg:min-h-[22rem]">
      <img
        src={screenshot}
        alt={`${title} preview`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />

      <div className="pointer-events-none absolute start-4 top-4 z-10 sm:start-5 sm:top-5">
        <span className="rounded-full border border-white/15 bg-black/50 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">
          {tag}
        </span>
      </div>

      <div className="pointer-events-none absolute end-4 top-4 z-10 sm:end-5 sm:top-5">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-emerald-300 backdrop-blur-md">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
          </span>
          {liveLabel}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/10" />
    </div>
  );
}

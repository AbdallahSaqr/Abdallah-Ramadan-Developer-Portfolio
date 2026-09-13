"use client";

import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useT } from "@/components/providers/language-provider";
import { site } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Hero() {
  const t = useT();

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="scroll-mt-24 px-6 pb-20 pt-32 sm:pb-24 sm:pt-40"
    >
      <div className="mx-auto max-w-5xl">
        <p className="label flex items-center gap-2">
          <span aria-hidden className="h-2 w-2 bg-accent" />
          {t("hero.status")}
          <span aria-hidden className="text-border">/</span>
          {t("about.detail.location.value")}
        </p>

        <h1
          id="hero-title"
          className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          {t("site.name")}
        </h1>
        <p className="mt-3 text-lg font-medium text-foreground sm:text-xl">
          {t("hero.role")}
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {t("hero.lead")}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
          >
            {t("hero.cta.work")}
            <ArrowDown aria-hidden />
          </a>
          <a
            href={`mailto:${site.email}`}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            {t("hero.cta.contact")}
            <ArrowUpRight aria-hidden className="rtl-flip" />
          </a>
          <a
            href={site.resumeHref}
            download
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
          >
            <FileText aria-hidden />
            {t("hero.cta.resume")}
          </a>
        </div>
      </div>
    </section>
  );
}

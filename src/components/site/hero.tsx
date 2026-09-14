"use client";

import { ArrowDownRight, ArrowUpRight, FileText } from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { buttonVariants } from "@/components/ui/button";
import { useT } from "@/components/providers/language-provider";
import { site } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Hero() {
  const t = useT();
  return (
    <HeroGeometric
      badge={t("hero.badge")}
      title1={t("hero.title1")}
      title2={t("hero.title2")}
      description={t("hero.description")}
      actions={
        <>
          <a
            href="#work"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
          >
            {t("hero.cta.work")}
            <ArrowDownRight aria-hidden className="rtl-flip" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className={cn(buttonVariants({ variant: "glass", size: "lg" }))}
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
        </>
      }
    />
  );
}

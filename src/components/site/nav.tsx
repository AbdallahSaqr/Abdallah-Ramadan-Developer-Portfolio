"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { site } from "@/lib/site-config";
import { useT } from "@/components/providers/language-provider";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { LangToggle } from "./lang-toggle";
import { MobileMenuTrigger } from "./mobile-menu";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 sm:px-4"
    >
      <div
        className={cn(
          "flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border px-2 py-2 transition-all duration-500",
          scrolled
            ? "border-foreground/10 bg-background/60 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.4)] backdrop-blur-xl backdrop-saturate-150"
            : "border-foreground/[0.06] bg-foreground/[0.02] backdrop-blur-md"
        )}
      >
        <a href="#hero" className="group flex items-center gap-2 pl-2 sm:pl-3">
          <Logo className="h-8 w-8 transition-transform duration-300 group-hover:scale-105" />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-foreground/55 transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
            >
              {t(`nav.${item.id}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <LangToggle className="hidden sm:inline-flex" />
          <a
            href={`mailto:${site.email}`}
            className="hidden h-9 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-all hover:-translate-y-0.5 md:inline-flex"
          >
            {t("nav.cta")}
          </a>
          <MobileMenuTrigger />
        </div>
      </div>
    </motion.header>
  );
}

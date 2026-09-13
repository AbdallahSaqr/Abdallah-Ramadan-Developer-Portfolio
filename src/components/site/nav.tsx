"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { site } from "@/lib/site-config";
import { useT } from "@/components/providers/language-provider";
import { useActiveSection } from "@/lib/use-active-section";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { LangToggle } from "./lang-toggle";
import { MobileMenuTrigger } from "./mobile-menu";

const SECTION_IDS = site.nav.map((item) => item.id);

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-background/90 backdrop-blur transition-colors duration-200",
        scrolled ? "border-border" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-6">
        <a
          href="#hero"
          aria-label={t("nav.home")}
          className="flex items-center gap-3 rounded-md"
        >
          <Logo className="h-8 w-8" />
          <span className="hidden text-sm font-medium tracking-tight text-foreground sm:inline">
            {t("site.name")}
          </span>
        </a>

        <nav
          aria-label={t("nav.primary")}
          className="hidden items-center gap-6 md:flex"
        >
          {site.nav.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "border-b-2 py-1 text-sm transition-colors",
                  isActive
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted hover:text-foreground"
                )}
              >
                {t(`nav.${item.id}`)}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={site.resumeHref}
            download
            aria-label={t("nav.resume")}
            title={t("nav.resume")}
            className="hidden h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-foreground/[0.05] hover:text-foreground sm:inline-flex"
          >
            <FileText aria-hidden className="h-4 w-4" />
          </a>
          <ThemeToggle className="hidden sm:inline-flex" />
          <LangToggle className="hidden sm:inline-flex" />
          <a
            href={`mailto:${site.email}`}
            className="ms-2 hidden h-9 items-center rounded-md bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/85 md:inline-flex"
          >
            {t("nav.cta")}
          </a>
          <MobileMenuTrigger />
        </div>
      </div>
    </header>
  );
}

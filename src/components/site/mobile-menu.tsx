"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useT } from "@/components/providers/language-provider";
import { site } from "@/lib/site-config";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { LangToggle } from "./lang-toggle";
import { cn } from "@/lib/utils";

const ease = [0.25, 0.4, 0.25, 1] as const;

export function MobileMenuTrigger({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useT();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  if (!mounted) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t("nav.menu")}
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] text-foreground/70 transition-colors hover:border-foreground/25 hover:text-foreground md:hidden",
          className
        )}
      >
        <Menu className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open && (
          <MobilePortal>
            <MobileMenuPanel onClose={() => setOpen(false)} />
          </MobilePortal>
        )}
      </AnimatePresence>
    </>
  );
}

import { createPortal } from "react-dom";

function MobilePortal({ children }: { children: React.ReactNode }) {
  return createPortal(children, document.body);
}

function MobileMenuPanel({ onClose }: { onClose: () => void }) {
  const t = useT();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease }}
      className="fixed inset-0 z-[100] flex flex-col bg-background md:hidden"
    >
      <div className="flex items-center justify-between px-5 pt-5">
        <a
          href="#hero"
          onClick={onClose}
          className="inline-flex items-center gap-2"
        >
          <Logo className="h-9 w-9" />
        </a>
        <button
          type="button"
          onClick={onClose}
          aria-label={t("nav.close")}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] text-foreground/70 transition-colors hover:border-foreground/25 hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
          }}
          className="mt-12 flex flex-col gap-1 px-6"
        >
          {site.nav.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              onClick={onClose}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
              }}
              className="group flex items-center justify-between border-b border-foreground/[0.06] py-5 text-3xl font-bold tracking-tight text-foreground transition-colors hover:text-foreground/70 sm:text-4xl"
            >
              <span>{t(`nav.${item.id}`)}</span>
              <ArrowUpRight className="h-5 w-5 text-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground rtl-flip" />
            </motion.a>
          ))}
        </motion.nav>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-foreground/[0.06] p-6 bg-background">
        <div className="flex gap-2">
          <ThemeToggle />
          <LangToggle />
        </div>
        <a
          href={`mailto:${site.email}`}
          onClick={onClose}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          {t("nav.cta")}
          <ArrowUpRight className="h-4 w-4 rtl-flip" />
        </a>
      </div>
    </motion.div>
  );
}

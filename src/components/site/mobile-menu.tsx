"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, FileText, Menu, X } from "lucide-react";
import { useT } from "@/components/providers/language-provider";
import { site } from "@/lib/site-config";
import { EASE } from "@/lib/motion";
import { useIsMobile } from "@/lib/use-media-query";
import { useMounted } from "@/lib/use-mounted";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { LangToggle } from "./lang-toggle";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileMenuTrigger({ className }: { className?: string }) {
  const [requestedOpen, setRequestedOpen] = useState(false);
  const mounted = useMounted();
  const isMobile = useIsMobile();

  // Derived, not stored: widening past the md breakpoint hides the trigger, so
  // the panel closes with it instead of leaving the page scroll locked.
  const open = requestedOpen && isMobile;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const t = useT();

  const close = useCallback(() => {
    setRequestedOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Lock background scrolling while the full-screen panel is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setRequestedOpen(true)}
        aria-label={t("nav.menu")}
        aria-expanded={open}
        aria-controls={panelId}
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] text-foreground/70 transition-colors hover:border-foreground/25 hover:text-foreground md:hidden",
          className
        )}
      >
        <Menu aria-hidden className="h-4 w-4" />
      </button>

      {mounted &&
        isMobile &&
        createPortal(
          <AnimatePresence>
            {open && <MobileMenuPanel id={panelId} onClose={close} />}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

function MobileMenuPanel({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const t = useT();

  // Move focus into the panel, and keep Tab cycling inside it while open.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    panel.querySelector<HTMLElement>("[data-autofocus]")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const current = document.activeElement;

      if (event.shiftKey && current === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <motion.div
      ref={panelRef}
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label={t("nav.primary")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="fixed inset-0 z-[100] flex flex-col bg-background"
    >
      <div className="flex items-center justify-between px-5 pt-5">
        <a
          href="#hero"
          onClick={onClose}
          aria-label={t("nav.home")}
          className="inline-flex items-center gap-2 rounded-full"
        >
          <Logo className="h-9 w-9" />
        </a>
        <button
          type="button"
          data-autofocus
          onClick={onClose}
          aria-label={t("nav.close")}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] text-foreground/70 transition-colors hover:border-foreground/25 hover:text-foreground"
        >
          <X aria-hidden className="h-5 w-5" />
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
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
              className="group flex items-center justify-between border-b border-foreground/[0.06] py-5 text-3xl font-bold tracking-tight text-foreground transition-colors hover:text-foreground/70 sm:text-4xl"
            >
              <span>{t(`nav.${item.id}`)}</span>
              <ArrowUpRight
                aria-hidden
                className="rtl-flip h-5 w-5 text-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
              />
            </motion.a>
          ))}

          <a
            href={site.resumeHref}
            download
            onClick={onClose}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground/60 transition-colors hover:text-foreground"
          >
            <FileText aria-hidden className="h-4 w-4" />
            {t("nav.resume")}
          </a>
        </motion.nav>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-foreground/[0.06] bg-background p-6">
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
          <ArrowUpRight aria-hidden className="rtl-flip h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}

"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FileText, Menu, X } from "lucide-react";
import { useT } from "@/components/providers/language-provider";
import { site } from "@/lib/site-config";
import { useIsMobile } from "@/lib/use-media-query";
import { useMounted } from "@/lib/use-mounted";
import { cn } from "@/lib/utils";
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
          "inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-foreground/[0.05] hover:text-foreground md:hidden",
          className
        )}
      >
        <Menu aria-hidden className="h-5 w-5" />
      </button>

      {mounted &&
        isMobile &&
        open &&
        createPortal(
          <MobileMenuPanel id={panelId} onClose={close} />,
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
    <div
      ref={panelRef}
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label={t("nav.primary")}
      className="fixed inset-0 z-[100] flex flex-col bg-background"
    >
      <div className="flex h-16 items-center justify-between border-b border-border px-6">
        <span className="text-sm font-medium tracking-tight text-foreground">
          {t("site.name")}
        </span>
        <button
          type="button"
          data-autofocus
          onClick={onClose}
          aria-label={t("nav.close")}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-foreground/[0.05] hover:text-foreground"
        >
          <X aria-hidden className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-6 py-4">
        <ul>
          {site.nav.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={onClose}
                className="block border-b border-border py-5 text-2xl font-medium tracking-tight text-foreground"
              >
                {t(`nav.${item.id}`)}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.resumeHref}
          download
          onClick={onClose}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          <FileText aria-hidden className="h-4 w-4" />
          {t("nav.resume")}
        </a>
      </nav>

      <div className="flex items-center justify-between gap-3 border-t border-border px-6 py-5">
        <div className="flex gap-1">
          <ThemeToggle />
          <LangToggle />
        </div>
        <a
          href={`mailto:${site.email}`}
          onClick={onClose}
          className="inline-flex h-10 items-center rounded-md bg-foreground px-4 text-sm font-medium text-background"
        >
          {t("nav.cta")}
        </a>
      </div>
    </div>
  );
}

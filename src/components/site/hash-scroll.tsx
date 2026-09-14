"use client";

import { useEffect } from "react";

/** How long to keep correcting for late layout shifts, and how often. */
const SETTLE_WINDOW_MS = 2000;
const CHECK_INTERVAL_MS = 100;

/**
 * Re-applies the URL hash after the page has settled.
 *
 * Sections opt into `content-visibility: auto`, so their real heights are not
 * known when the browser performs its one-shot scroll to the anchor on a cold
 * load, and the router restores scroll after hydration — a shared link like
 * `/en#work` would otherwise land at the top of the page. This re-scrolls
 * whenever the target moves (images decoding, webfonts swapping in) until the
 * layout stops shifting, and gets out of the way the moment the visitor
 * scrolls for themselves.
 */
export function HashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return;

    let lastOffset = -1;
    const alignToTarget = () => {
      if (target.offsetTop === lastOffset) return;
      lastOffset = target.offsetTop;
      target.scrollIntoView({ behavior: "instant", block: "start" });
    };

    const interval = window.setInterval(alignToTarget, CHECK_INTERVAL_MS);
    const stop = () => window.clearInterval(interval);
    const timeout = window.setTimeout(stop, SETTLE_WINDOW_MS);

    alignToTarget();
    document.fonts?.ready.then(alignToTarget);

    // Hand control back as soon as the visitor scrolls themselves.
    const events = ["wheel", "touchstart", "keydown"] as const;
    events.forEach((event) =>
      window.addEventListener(event, stop, { once: true, passive: true })
    );

    return () => {
      stop();
      window.clearTimeout(timeout);
      events.forEach((event) => window.removeEventListener(event, stop));
    };
  }, []);

  return null;
}

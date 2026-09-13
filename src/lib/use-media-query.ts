"use client";

import { useCallback, useSyncExternalStore } from "react";

/** Tailwind `md`. Below this we treat the viewport as mobile. */
const MOBILE_BREAKPOINT = 768;

/**
 * Subscribes to a CSS media query.
 *
 * Uses `useSyncExternalStore` so the value is read during render instead of
 * being written back into state from an effect (which triggers a cascading
 * re-render and is flagged by `react-hooks/set-state-in-effect`).
 * The server snapshot is always `false`, so the first client paint matches the
 * server HTML and React then syncs to the real value.
 */
export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    [query]
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
}

/** True when the viewport is narrower than Tailwind's `md` breakpoint. */
export function useIsMobile() {
  return useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
}

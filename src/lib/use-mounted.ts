"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * `false` during SSR and the first client render, `true` afterwards.
 * Use it to gate browser-only UI (portals, theme-dependent icons) without
 * writing state from an effect.
 */
export function useMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
}

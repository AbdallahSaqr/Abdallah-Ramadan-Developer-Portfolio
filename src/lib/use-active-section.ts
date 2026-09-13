"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns the id of the section currently crossing the middle of the viewport.
 *
 * `rootMargin: -50% 0px` collapses the observer root to a single line at the
 * viewport's centre, so exactly one section is ever intersecting.
 *
 * @param ids section element ids, in document order
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);
  const visible = useRef(new Map<string, boolean>());

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.current.set(entry.target.id, entry.isIntersecting);
        }
        setActive(ids.find((id) => visible.current.get(id)) ?? null);
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

"use client";

import { useEffect, useState } from "react";

/**
 * Returns true when the viewport is below `breakpoint` (default 768px = Tailwind md).
 * Used to disable expensive infinite animations on small screens.
 */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

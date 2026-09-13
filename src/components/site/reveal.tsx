"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { fadeIn, VIEWPORT_ONCE } from "@/lib/motion";

/**
 * One short fade as a block scrolls into view. This is the only entrance
 * animation on the site; there are no staggered cascades or looping decoration.
 */
export function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const Component = motion[as];
  return (
    <Component
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className={className}
    >
      {children}
    </Component>
  );
}

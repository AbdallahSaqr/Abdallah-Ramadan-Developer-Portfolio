"use client";

import { motion, useReducedMotion } from "motion/react";
import { useIsMobile } from "@/lib/use-media-query";

type Blob = {
  className: string;
  color: string;
  animate: { x: number[]; y: number[] };
  duration: number;
};

const BLOBS: readonly Blob[] = [
  {
    className:
      "-top-40 left-[12%] h-[28rem] w-[28rem] md:h-[42rem] md:w-[42rem]",
    color: "rgba(99,102,241,0.18)",
    animate: { x: [0, 60, -40, 0], y: [0, 30, -20, 0] },
    duration: 28,
  },
  {
    className:
      "bottom-[4%] right-[8%] h-[26rem] w-[26rem] md:h-[38rem] md:w-[38rem]",
    color: "rgba(244,63,94,0.14)",
    animate: { x: [0, -50, 30, 0], y: [0, -40, 20, 0] },
    duration: 32,
  },
];

/**
 * Ambient page backdrop. The drifting blobs are infinite animations, so they
 * only run on larger screens and when the visitor has not asked for reduced
 * motion — everywhere else the same blobs render statically.
 */
export function Background() {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const drift = !isMobile && !prefersReducedMotion;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.04] via-transparent to-rose-500/[0.04] blur-3xl" />

      {BLOBS.map((blob) => (
        <motion.div
          key={blob.color}
          className={`absolute rounded-full blur-3xl will-change-transform md:blur-2xl ${blob.className}`}
          style={{
            background: `radial-gradient(circle, ${blob.color}, transparent 60%)`,
          }}
          animate={drift ? blob.animate : undefined}
          transition={
            drift
              ? { duration: blob.duration, repeat: Infinity, ease: "easeInOut" }
              : undefined
          }
        />
      ))}

      {/* Theme-aware vignette. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, color-mix(in srgb, var(--bg) 90%, transparent) 85%)",
        }}
      />
    </div>
  );
}

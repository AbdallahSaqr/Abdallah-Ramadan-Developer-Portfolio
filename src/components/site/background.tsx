"use client";

import { motion } from "motion/react";
import { useIsMobile } from "@/lib/use-is-mobile";

export function Background() {
  const isMobile = useIsMobile();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.04] via-transparent to-rose-500/[0.04] blur-3xl" />

      {/* Heavy infinite-loop blobs only on >= md to keep mobile snappy */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute -top-40 left-[12%] h-[42rem] w-[42rem] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(99,102,241,0.18), transparent 60%)",
            }}
            animate={{ x: [0, 60, -40, 0], y: [0, 30, -20, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[4%] right-[8%] h-[38rem] w-[38rem] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(244,63,94,0.14), transparent 60%)",
            }}
            animate={{ x: [0, -50, 30, 0], y: [0, -40, 20, 0] }}
            transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[55%] left-[4%] h-[30rem] w-[30rem] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.12), transparent 60%)",
            }}
            animate={{ x: [0, 40, -20, 0], y: [0, 20, -30, 0] }}
            transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[30%] right-[20%] h-[22rem] w-[22rem] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(245,158,11,0.08), transparent 60%)",
            }}
            animate={{ x: [0, -30, 40, 0], y: [0, -25, 15, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Mobile: two cheap static blobs for visual depth, no animation */}
      {isMobile && (
        <>
          <div
            className="absolute -top-40 left-[12%] h-[28rem] w-[28rem] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(99,102,241,0.15), transparent 60%)",
            }}
          />
          <div
            className="absolute bottom-[4%] right-[8%] h-[26rem] w-[26rem] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(244,63,94,0.12), transparent 60%)",
            }}
          />
        </>
      )}

      {/* theme-aware vignette via CSS var */}
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

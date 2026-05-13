"use client";

import { motion } from "motion/react";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.25, 0.4, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.15, ease },
  }),
};

export function SectionHeader({
  index,
  badge,
  title1,
  title2,
  align = "left",
  className,
}: {
  index: string;
  badge: string;
  title1: string;
  title2?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1"
      >
        <Circle className="h-2 w-2 fill-rose-500/80 stroke-none" />
        <span className="font-mono text-xs tracking-wide text-foreground/60">
          {index} · {badge}
        </span>
      </motion.div>
      <motion.h2
        custom={1}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
      >
        <span className="bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-transparent">
          {title1}
        </span>
        {title2 ? (
          <>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-foreground/90 to-rose-400 bg-clip-text text-transparent">
              {title2}
            </span>
          </>
        ) : null}
      </motion.h2>
    </div>
  );
}

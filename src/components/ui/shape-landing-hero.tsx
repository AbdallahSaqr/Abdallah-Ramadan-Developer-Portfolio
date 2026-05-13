"use client";

import { motion } from "motion/react";
import { Circle } from "lucide-react";
import type { ReactNode } from "react";
import { useIsMobile } from "@/lib/use-is-mobile";
import { cn } from "@/lib/utils";

const fadeEase = [0.25, 0.4, 0.25, 1] as const;
const shapeEase = [0.23, 0.86, 0.39, 0.96] as const;

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-foreground/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  const isMobile = useIsMobile();
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: shapeEase,
        opacity: { duration: 1.2 },
      }}
      className={cn("will-change-transform absolute", className)}
    >
      <motion.div
        animate={isMobile ? undefined : { y: [0, 15, 0] }}
        transition={
          isMobile
            ? undefined
            : { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
        }
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "border-2 border-foreground/15",
            "shadow-[0_8px_32px_0_color-mix(in_srgb,var(--fg)_10%,transparent)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,color-mix(in_srgb,var(--fg)_20%,transparent),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
  description = "Crafting exceptional digital experiences through innovative design and cutting-edge technology.",
  actions,
}: {
  badge?: string;
  title1?: string;
  title2?: string;
  description?: string;
  actions?: ReactNode;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: fadeEase,
      },
    }),
  };

  return (
    <div
      id="hero"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-background scroll-mt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.06] via-transparent to-rose-500/[0.06] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.18]"
          className="left-[-15%] top-[12%] md:left-[-5%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.18]"
          className="right-[-15%] top-[68%] md:right-[0%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.18]"
          className="bottom-[4%] left-[2%] md:bottom-[10%] md:left-[10%]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-rose-500/80 stroke-none" />
            <span className="text-xs tracking-wide text-foreground/60 sm:text-sm">
              {badge}
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:mb-8 md:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-transparent">
                {title1}
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-foreground/90 to-rose-400 bg-clip-text text-transparent">
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="mx-auto mb-8 max-w-xl px-2 text-sm font-light leading-relaxed tracking-wide text-foreground/50 sm:text-base md:px-4 md:text-lg">
              {description}
            </p>
          </motion.div>

          {actions ? (
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
            >
              {actions}
            </motion.div>
          ) : null}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
    </div>
  );
}

export { HeroGeometric };

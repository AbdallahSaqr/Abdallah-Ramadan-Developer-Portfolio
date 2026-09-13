/**
 * Shared motion primitives. Keeping easings and variants in one place stops
 * the same magic cubic-bezier from being redeclared in every section.
 */

export const EASE = [0.25, 0.4, 0.25, 1] as const;
export const EASE_SHAPE = [0.23, 0.86, 0.39, 0.96] as const;
export const EASE_NAV = [0.22, 1, 0.36, 1] as const;

/** Play a scroll-triggered animation once, slightly before it enters view. */
export const VIEWPORT_ONCE = { once: true, margin: "-100px" } as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

/** Same as `fadeUp`, but staggered by a `custom` index. */
export const fadeUpIndexed = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.15, ease: EASE },
  }),
};

/** Parent variant that reveals children one after another. */
export const staggerChildren = (stagger = 0.12, delay = 0.2) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

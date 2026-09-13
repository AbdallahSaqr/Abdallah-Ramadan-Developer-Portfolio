/**
 * Motion primitives. Deliberately small: one short fade for blocks entering
 * the viewport, no staggered cascades, no looping decoration.
 */

export const EASE = [0.22, 0.61, 0.36, 1] as const;

/** Play once, starting slightly before the block reaches the viewport. */
export const VIEWPORT_ONCE = { once: true, margin: "-60px" } as const;

export const FADE_DURATION = 0.4;

export const fadeIn = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: FADE_DURATION, ease: EASE },
  },
};

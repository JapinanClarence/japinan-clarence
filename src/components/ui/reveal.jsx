import { motion } from "motion/react";

/**
 * Wraps a section so it blurs + fades + slides as it enters/leaves the
 * viewport — similar to Apple's scroll storytelling. Since `once` defaults
 * to false, the effect reverses when the section scrolls back out of view
 * (e.g. the Hero section blurs out as you scroll down into Tech Stack).
 *
 * `amount` is a fraction of the CHILD's own height, not the viewport's —
 * for a section taller than the viewport (Projects, Experience on mobile),
 * a value like 0.5 can require scrolling far into the section, well past
 * its top edge, before that much of it has ever been on screen at once,
 * leaving a stretch of blank space beforehand. `amount = "some"` instead
 * triggers as soon as a single pixel is visible, so long sections reveal
 * right as they enter, regardless of how tall they are relative to the
 * viewport (which varies a lot between mobile and desktop).
 *
 * <Reveal><TechStack /></Reveal>
 */
export function Reveal({
  children,
  className,
  y = 48,
  blur = 14,
  amount = "some",
  once = false,
  delay = 0,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

import { motion } from "motion/react";

/**
 * Wraps a section so it blurs + fades + slides as it enters/leaves the
 * viewport — similar to Apple's scroll storytelling. Since `once` defaults
 * to false, the effect reverses when the section scrolls back out of view
 * (e.g. the Hero section blurs out as you scroll down into Tech Stack).
 *
 * <Reveal><TechStack /></Reveal>
 */
export function Reveal({
  children,
  className,
  y = 48,
  blur = 14,
  amount = 0.35,
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

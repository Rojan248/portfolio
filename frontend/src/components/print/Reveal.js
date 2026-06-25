import { motion, useReducedMotion } from "framer-motion";

// Stable, module-level prop objects (avoids new references each render).
const VIEWPORT = { once: true, margin: "-12%" };
const EASE = [0.22, 1, 0.36, 1];

// Subtle editorial entrance reveal that respects reduced-motion.
export const Reveal = ({ children, delay = 0, y = 12, className = "", as = "div" }) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
};

"use client";

import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

type Variant = "up" | "left" | "right";

const variants: Record<Variant, Variants> = {
  up: {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -36 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 36 },
    visible: { opacity: 1, x: 0 },
  },
};

export default function Reveal({
  children,
  variant = "up",
  className,
  delay = 0,
  ...rest
}: HTMLMotionProps<"div"> & {
  variant?: Variant;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px", amount: 0.2 }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      variants={variants[variant]}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

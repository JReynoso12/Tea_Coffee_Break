"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

/** Desktop-only subtle cursor accent (respects reduced motion via CSS where possible). */
export default function CustomCursor() {
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const rx = useSpring(cx, { stiffness: 280, damping: 28, mass: 0.6 });
  const ry = useSpring(cy, { stiffness: 280, damping: 28, mass: 0.6 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const onMove = (e: MouseEvent) => {
      cx.set(e.clientX);
      cy.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [cx, cy]);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    document.documentElement.classList.add("custom-cursor-on");
    return () => document.documentElement.classList.remove("custom-cursor-on");
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold)] md:block"
        style={{ left: cx, top: cy }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(232,168,64,0.45)] md:block"
        style={{ left: rx, top: ry }}
      />
    </>
  );
}

"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import BrandLogo from "./BrandLogo";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#venue", label: "The Space" },
  { href: "#story", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#vibe", label: "The Vibe" },
  { href: "#visit", label: "Visit Us" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 50);
  });

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-8 py-6 transition-[background,backdrop-filter] duration-500 md:px-16 ${
        scrolled
          ? "bg-[rgba(15,15,15,0.9)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <a
        href="#experience"
        className="font-[family-name:var(--font-playfair)] flex items-center gap-2 text-[0.95rem] font-bold tracking-[0.08em] text-[var(--gold)] sm:gap-3 sm:text-[1.05rem]"
      >
        <BrandLogo className="h-9 w-9 shrink-0 md:h-10 md:w-10" alt="" />
        <span className="flex min-w-0 flex-col items-start leading-[1.15] sm:flex-row sm:items-baseline sm:gap-x-2 sm:leading-none">
          <span className="shrink-0">TCB</span>
          <span className="font-normal italic text-[0.8rem] text-[var(--cream)] sm:text-[1.05rem]">
            <span className="hidden sm:inline">— </span>
            Tea Coffee Break
          </span>
        </span>
      </a>
      <nav aria-label="Primary">
        <ul className="hidden items-center md:flex">
          {links.map((l, i) => (
            <li key={l.href} className="flex items-center">
              {i > 0 && (
                <span className="mx-5 text-[var(--bronze)]/45" aria-hidden>
                  |
                </span>
              )}
              <a
                href={l.href}
                className="nav-link relative text-[0.78rem] font-normal uppercase tracking-[0.15em] text-[var(--cream-dark)] transition-colors hover:text-[var(--caramel)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

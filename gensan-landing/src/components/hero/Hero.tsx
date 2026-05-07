"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "@/lib/content";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

/** Deterministic “random” layout from index (stable across re-renders). */
function pseudo(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 43758.5453) * 10000;
  return x - Math.floor(x);
}

function Particles() {
  const particles = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    left: `${pseudo(i, 1) * 100}%`,
    delay: `${pseudo(i, 2) * 8}s`,
    duration: `${8 + pseudo(i, 3) * 12}s`,
    size: pseudo(i, 4) * 4 + 2,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="animate-float-up absolute rounded-full bg-[var(--caramel)] opacity-0"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[var(--espresso)]"
    >
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_60%_at_50%_80%,rgba(145,95,37,0.35)_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(226,149,66,0.14)_0%,transparent_60%),radial-gradient(ellipse_60%_80%_at_20%_50%,rgba(15,15,15,0.92)_0%,transparent_70%)]" />

      <div className="absolute inset-0 z-[1] opacity-30 mix-blend-soft-light">
        <Image
          src={images.heroAmbient}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <HeroScene />
      <Particles />

      <motion.div
        style={{ y, opacity }}
        className="relative z-[2] px-8 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center justify-center gap-4 text-[0.72rem] uppercase tracking-[0.35em] text-[var(--gold)]"
        >
          <span className="h-px w-10 bg-[var(--caramel)]" aria-hidden />
          Gensan&apos;s Hidden Diamond
          <span className="h-px w-10 bg-[var(--caramel)]" aria-hidden />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-playfair)] text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.95] text-[var(--cream)]"
        >
          Tea
          <br />
          <em className="block font-[family-name:var(--font-playfair)] not-italic text-[var(--gold)]">
            Coffee
          </em>
          Break
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-[clamp(1.05rem,2.4vw,1.45rem)] font-normal leading-relaxed text-[var(--cream-dark)]"
        >
          Where every sip tells a story under the GenSan nightsky
        </motion.p>

        <motion.a
          href="/menu"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -2 }}
          className="btn-pill-primary mt-10 inline-flex items-center gap-3 px-10 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.15em]"
        >
          Explore Our Menu
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--text-muted)]"
      >
        <span>Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-[var(--caramel)] to-transparent" />
      </motion.div>
    </section>
  );
}

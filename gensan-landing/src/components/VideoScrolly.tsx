"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useSyncExternalStore } from "react";
import BrandLogo from "./BrandLogo";

const VIDEO_SRC = "/media/tcb-scrolly.mp4";

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

export default function VideoScrolly() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const v = videoRef.current;
    if (!v) return;
    const p = v.play();
    if (p !== undefined) {
      p.catch(() => {});
    }
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <section
        id="experience"
        className="relative grid min-h-[100svh] gap-10 bg-[var(--espresso)] px-6 pb-24 pt-28 md:grid-cols-2 md:items-center md:gap-16 md:px-16 md:pt-24"
      >
        <div className="relative aspect-video min-h-[280px] overflow-hidden rounded-sm border border-[rgba(226,149,66,0.22)]">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={VIDEO_SRC}
            controls
            playsInline
            preload="metadata"
          />
        </div>
        <div>
          <BrandLogo className="mb-6 h-16 w-16" alt="" />
          <p className="mb-3 text-[0.72rem] uppercase tracking-[0.35em] text-[var(--gold)]">
            General Santos
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-[var(--cream)]">
            Tea Coffee Break
          </h2>
          <p className="mt-5 text-lg font-normal leading-relaxed text-[var(--cream-dark)]">
            Gensan&apos;s hidden diamond — where the door opens to something
            extraordinary.
          </p>
          <a
            href="/menu"
            className="btn-pill-primary mt-10 inline-flex px-10 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.15em]"
          >
            Explore Our Menu
          </a>
        </div>
      </section>
    );
  }

  return (
    <section
      id="experience"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[var(--espresso)]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 h-full w-full scale-[1.02] object-cover"
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />

      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_90%_70%_at_50%_45%,rgba(15,15,15,0.35)_0%,rgba(15,15,15,0.78)_75%),radial-gradient(ellipse_55%_45%_at_50%_105%,rgba(226,149,66,0.16),transparent_58%)]"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col px-6 md:px-16">
        {/* Clear fixed header so hero copy isn’t stacked over the video under the logo bar */}
        <div className="h-20 shrink-0 md:h-24" aria-hidden />
        <div className="flex flex-1 flex-col items-center justify-center pb-24 pt-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <BrandLogo
            className="mx-auto h-[4.5rem] w-[4.5rem] md:h-[5.5rem] md:w-[5.5rem]"
            priority
            alt=""
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center justify-center gap-4 text-[0.72rem] uppercase tracking-[0.35em] text-[var(--gold)]"
        >
          <span className="h-px w-10 bg-[var(--caramel)]" />
          Gensan&apos;s Hidden Diamond
          <span className="h-px w-10 bg-[var(--caramel)]" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-playfair)] text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[0.95] text-[var(--cream)]"
        >
          Tea
          <br />
          <span className="text-[var(--gold)] not-italic">Coffee</span>
          <br />
          Break
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-xl text-[clamp(1.05rem,2.4vw,1.45rem)] font-normal leading-relaxed text-[var(--cream-dark)]"
        >
          Where every sip tells a story under the GenSan nightsky
        </motion.p>

        <motion.a
          href="/menu"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -2 }}
          className="btn-pill-primary mt-12 inline-flex items-center gap-3 px-10 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.15em]"
        >
          Explore Our Menu
        </motion.a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--text-muted)]">
        <span>Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-[var(--caramel)] to-transparent" />
      </div>
    </section>
  );
}

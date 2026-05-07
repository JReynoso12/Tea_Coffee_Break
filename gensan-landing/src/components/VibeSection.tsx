"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Reveal from "./Reveal";
import { vibeCards, images } from "@/lib/content";

export default function VibeSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState(false);
  const start = useRef({ x: 0, left: 0 });

  function onDown(e: React.MouseEvent) {
    if (!scrollRef.current) return;
    setDrag(true);
    start.current = {
      x: e.pageX - scrollRef.current.offsetLeft,
      left: scrollRef.current.scrollLeft,
    };
  }
  function onUp() {
    setDrag(false);
  }
  function onMove(e: React.MouseEvent) {
    if (!drag || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - start.current.x) * 1.5;
    scrollRef.current.scrollLeft = start.current.left - walk;
  }

  return (
    <section id="vibe" className="overflow-hidden bg-[var(--espresso-mid)] py-24 md:py-32">
      <Reveal className="mb-12 px-8 md:px-16">
        <span className="mb-3 block text-[0.7rem] uppercase tracking-[0.3em] text-[var(--gold)]">
          The Experience
        </span>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4.5vw,3rem)] font-bold text-[var(--cream)]">
          Feel The{" "}
          <em className="text-[var(--gold)] not-italic">TCB</em> Vibe
        </h2>
      </Reveal>

      <div
        ref={scrollRef}
        role="region"
        aria-label="Vibe gallery"
        onMouseDown={onDown}
        onMouseLeave={onUp}
        onMouseUp={onUp}
        onMouseMove={onMove}
        className={`flex gap-6 overflow-x-auto px-8 pb-4 scrollbar-none md:px-16 ${
          drag ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {vibeCards.map((card, i) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            className="relative h-[480px] w-[min(360px,85vw)] flex-shrink-0 overflow-hidden border border-[rgba(226,149,66,0.16)] bg-[rgba(145,95,37,0.08)]"
          >
            <Image
              src={images.vibe[i]?.src ?? images.vibe[0].src}
              alt={images.vibe[i]?.alt ?? card.title}
              fill
              className="object-cover opacity-70 transition-opacity duration-500 hover:opacity-90"
              sizes="360px"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[6rem] opacity-15">
              {card.icon}
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(15,15,15,0.97)] via-[rgba(15,15,15,0.55)] to-transparent p-8">
              <span className="mb-3 inline-block border border-[rgba(226,149,66,0.35)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-[var(--caramel)]">
                {card.tag}
              </span>
              <h3 className="font-[family-name:var(--font-playfair)] text-[1.4rem] font-bold text-[var(--cream)]">
                {card.title}
              </h3>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-[#C4A882]">
                {card.desc}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

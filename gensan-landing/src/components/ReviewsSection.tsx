"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { reviews } from "@/lib/content";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[var(--espresso)] px-8 py-24 md:px-16 md:py-32">
      <Reveal className="mb-16 text-center">
        <span className="mb-4 block text-[0.7rem] uppercase tracking-[0.3em] text-[var(--gold)]">
          What People Say
        </span>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,5vw,3.5rem)] font-bold text-[var(--cream)]">
          Stories Over <em className="text-[var(--gold)] not-italic">Coffee</em>
        </h2>
        <p className="mt-4 text-[1.05rem] font-normal text-[var(--text-muted)]">
          Real words from real regulars
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <motion.article
            key={r.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.08,
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6, borderColor: "rgba(226, 149, 66, 0.38)" }}
            className="border border-[rgba(226,149,66,0.12)] bg-[rgba(22,20,18,0.65)] p-8"
          >
            <span className="font-[family-name:var(--font-playfair)] mb-4 block text-[3rem] leading-none text-[var(--caramel)]">
              &ldquo;
            </span>
            <p className="mb-6 max-h-[min(28rem,55vh)] overflow-y-auto pr-1 text-[1rem] leading-[1.75] text-[var(--cream-dark)] [scrollbar-width:thin]">
              {r.text}
            </p>
            <div className="mb-4 tracking-[0.1em] text-[var(--gold)]">★★★★★</div>
            <p className="text-[0.75rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
              {r.author}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

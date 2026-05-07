"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const badges = [
  { icon: "♻️", label: "Recycled Packaging" },
  { icon: "🚫", label: "No Single-Use Plastic" },
  { icon: "🌱", label: "Eco-Friendly Methods" },
  { icon: "🧃", label: "Milk Carton Packaging" },
] as const;

export default function EcoSection() {
  return (
    <section className="border-y border-[rgba(226,149,66,0.15)] bg-gradient-to-br from-[var(--espresso-mid)] via-[var(--espresso)] to-[rgba(74,124,89,0.14)] px-8 py-20 text-center md:px-16">
      <Reveal>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,4vw,2.8rem)] text-[var(--cream)]">
          Brewing Coffee.{" "}
          <em className="font-[family-name:var(--font-playfair)] not-italic text-[var(--sage)]">
            Protecting the Planet.
          </em>
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-[1rem] leading-[1.8] text-[#C4A882]">
          We&apos;re committed to eco-friendly practices — from how we package our
          drinks to how we source our beans. Small choices, big impact.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-8">
        {badges.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ y: -4, borderColor: "rgba(74, 124, 89, 0.65)" }}
            className="flex min-w-[140px] flex-col items-center gap-2 border border-[rgba(74,124,89,0.38)] px-8 py-6"
          >
            <span className="text-3xl">{b.icon}</span>
            <span className="text-center text-[0.7rem] uppercase tracking-[0.15em] text-[var(--sage)]">
              {b.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

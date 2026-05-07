"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { venueGallery } from "@/lib/content";

export default function VenueSection() {
  const [hero, ...rest] = venueGallery;

  return (
    <section
      id="venue"
      className="bg-[var(--espresso)] px-6 py-24 md:px-16 md:py-32"
    >
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <span className="mb-3 block text-[0.7rem] uppercase tracking-[0.3em] text-[var(--gold)]">
          The Space
        </span>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4.5vw,3rem)] font-bold text-[var(--cream)]">
          Urban jungle, <em className="text-[var(--gold)] not-italic">warm wood</em>
        </h2>
        <p className="mt-4 text-[1.05rem] font-normal text-[var(--text-muted)]">
          Industrial lines, terracotta tones, and the orange wall that says you&apos;re here.
        </p>
      </Reveal>

      <div className="mx-auto max-w-6xl space-y-4">
        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-sm border border-[rgba(226,149,66,0.22)] bg-[rgba(45,32,26,0.4)]"
        >
          <div className="relative aspect-[21/10] w-full md:aspect-[24/9]">
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width:1200px) 100vw, 1152px"
              priority
            />
          </div>
          <figcaption className="border-t border-[rgba(226,149,66,0.14)] px-4 py-3 text-left text-[0.8rem] text-[var(--cream-dark)] md:px-6">
            <span className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--caramel)]">
              Storefront
            </span>
            <span className="mt-1 block text-[var(--cream)]">{hero.caption}</span>
          </figcaption>
        </motion.figure>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rest.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{
                duration: 0.55,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden rounded-sm border border-[rgba(226,149,66,0.18)] bg-[rgba(45,32,26,0.35)]"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width:640px) 100vw, 50vw"
                />
              </div>
              <figcaption className="border-t border-[rgba(226,149,66,0.12)] px-4 py-3">
                <span className="text-[0.75rem] leading-snug text-[var(--cream-dark)]">
                  {item.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { images } from "@/lib/content";

function StoryCard({
  children,
  className,
  rotate = 0,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <motion.div
      className={`absolute z-[2] border border-[rgba(226,149,66,0.2)] bg-[rgba(145,95,37,0.12)] p-8 backdrop-blur-md [-webkit-backdrop-filter:blur(8px)] ${className ?? ""}`}
      style={{ rotate }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

export default function StorySection() {
  return (
    <section
      id="story"
      className="relative grid items-center gap-16 bg-[var(--espresso-mid)] px-8 py-24 md:grid-cols-2 md:gap-24 md:px-16 md:py-32"
      style={{ perspective: "1200px" }}
    >
      <Reveal variant="left" className="space-y-6">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[var(--gold)]">
          Our Story
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] text-[var(--cream)]">
          A <em className="text-[var(--gold)] not-italic">Hidden Oasis</em>
          <br />
          In the Heart of Gensan
        </h2>
        <p className="text-[1rem] leading-[1.8] text-[var(--cream-dark)]">
          Nestled along Jose Católico Sr. Ave., fronting Gaisano Mall — Tea Coffee
          Break is that unassuming door that opens to something extraordinary.
          Past the counter, an outdoor oasis awaits, where greenery meets good
          coffee under the open GenSan sky.
        </p>
        <p className="text-[1rem] leading-[1.8] text-[var(--cream-dark)]">
          We&apos;re not just a coffee shop. We&apos;re a feeling — that rare
          blend of solitude and connection, brewed carefully by baristas who
          know their craft. From the signature TCB drink to creamy espresso
          lattes and macchiatos, every cup carries intention.
        </p>
        <p className="text-[1rem] leading-[1.8] text-[var(--cream-dark)]">
          Open daily from{" "}
          <strong className="text-[var(--gold)]">10AM to 2AM</strong> —
          because good conversations don&apos;t follow office hours.
        </p>
      </Reveal>

      <Reveal variant="right" className="relative h-[320px] md:h-[480px]">
        <div className="absolute inset-0 overflow-hidden rounded-sm border border-[rgba(226,149,66,0.2)]">
          <Image
            src={images.storyGarden}
            alt="Café garden ambiance"
            fill
            className="object-cover opacity-90"
            sizes="(max-width:900px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso-mid)] via-transparent to-transparent" />
        </div>

        <StoryCard
          rotate={-2}
          className="left-[8%] top-0 w-[min(280px,85%)]"
        >
          <div className="mb-2 text-2xl" aria-hidden>
            ☕
          </div>
          <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--caramel)]">
            Hours
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-[2.5rem] font-black text-[var(--gold)]">
            10–2
          </p>
          <p className="mt-2 text-[0.85rem] leading-snug text-[var(--cream-dark)]">
            Open daily from 10AM to 2AM — evening vibes included
          </p>
        </StoryCard>

        <StoryCard
          rotate={3}
          className="bottom-[8%] right-[2%] w-[min(240px,80%)]"
        >
          <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--caramel)]">
            Rating
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-[2.5rem] font-black text-[var(--gold)]">
            5.0★
          </p>
          <p className="mt-2 text-[0.85rem] leading-snug text-[var(--cream-dark)]">
            100+ verified reviews on FoodPanda
          </p>
        </StoryCard>

        <StoryCard
          rotate={-1}
          className="left-[28%] top-[28%] z-[3] w-[min(200px,75%)]"
        >
          <div className="mb-2 text-2xl" aria-hidden>
            🌿
          </div>
          <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--caramel)]">
            Eco-Friendly
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-[2.5rem] font-black text-[var(--gold)]">
            100%
          </p>
          <p className="mt-2 text-[0.85rem] leading-snug text-[var(--cream-dark)]">
            Recycled milk cartons — no plastic, all heart
          </p>
        </StoryCard>
      </Reveal>
    </section>
  );
}

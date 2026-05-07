"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const MAPS_URL =
  "https://maps.google.com/?q=Tea+Coffee+Break+General+Santos+City+Philippines";

export default function VisitSection() {
  return (
    <section
      id="visit"
      className="grid items-center gap-16 bg-[var(--espresso)] px-8 py-24 md:grid-cols-2 md:gap-24 md:px-16 md:py-32"
    >
      <Reveal variant="left" className="space-y-2">
        <span className="mb-4 block text-[0.7rem] uppercase tracking-[0.3em] text-[var(--gold)]">
          Find Us
        </span>
        <h2 className="font-[family-name:var(--font-playfair)] mb-10 text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight text-[var(--cream)]">
          Come As You Are,
          <br />
          Stay As Long As You Like
        </h2>

        <div className="flex gap-4 border-b border-[rgba(226,149,66,0.12)] py-5">
          <span className="mt-0.5 text-xl" aria-hidden>
            📍
          </span>
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Address
            </p>
            <p className="mt-1 text-[0.95rem] leading-relaxed text-[var(--cream-dark)]">
              J. Católico St., Fronting Gaisano Mall of Gensan
              <br />
              Beside Pera Hub, Barangay Lagao
              <br />
              General Santos City, 9500 South Cotabato
            </p>
          </div>
        </div>

        <div className="flex gap-4 border-b border-[rgba(226,149,66,0.12)] py-5">
          <span className="mt-0.5 text-xl" aria-hidden>
            🕙
          </span>
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Hours
            </p>
            <p className="mt-1 text-[0.95rem] text-[var(--cream-dark)]">
              Daily: 10:00 AM — 2:00 AM
              <br />
              <span className="text-[0.8rem] text-[var(--gold)]">
                Dine-in · Pickup · Delivery via FoodPanda
              </span>
            </p>
          </div>
        </div>

        <div className="flex gap-4 border-b border-[rgba(226,149,66,0.12)] py-5">
          <span className="mt-0.5 text-xl" aria-hidden>
            📧
          </span>
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Contact
            </p>
            <a
              href="mailto:teacoffeebreak08@gmail.com"
              className="mt-1 block text-[0.95rem] text-[var(--cream-dark)] transition-colors hover:text-[var(--gold)]"
            >
              teacoffeebreak08@gmail.com
            </a>
          </div>
        </div>

        <div className="flex gap-4 py-5">
          <span className="mt-0.5 text-xl" aria-hidden>
            📸
          </span>
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Follow Us
            </p>
            <p className="mt-1 text-[0.95rem] text-[var(--cream-dark)]">
              @teacoffee_break on Instagram &amp; TikTok
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal variant="right">
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.35 }}
          className="relative flex min-h-[400px] flex-col items-center justify-center gap-4 overflow-hidden border border-[rgba(226,149,66,0.18)] bg-[rgba(22,20,18,0.65)] p-8 text-center"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(145,95,37,0.22),transparent_60%)]"
            aria-hidden
          />
          <motion.span
            className="relative text-5xl"
            aria-hidden
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            📍
          </motion.span>
          <h3 className="font-[family-name:var(--font-playfair)] relative text-[1.25rem] text-[var(--cream)]">
            Tea Coffee Break — TCB
          </h3>
          <p className="relative max-w-[240px] text-[0.85rem] leading-relaxed text-[var(--text-muted)]">
            J. Católico St., Fronting GMall, General Santos City
          </p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--caramel)] px-7 py-3 text-[0.75rem] uppercase tracking-[0.12em] text-[var(--caramel)] transition-colors hover:bg-[var(--caramel)] hover:text-[var(--btn-text-on-accent)]"
          >
            Open in Maps →
          </a>
        </motion.div>
      </Reveal>
    </section>
  );
}

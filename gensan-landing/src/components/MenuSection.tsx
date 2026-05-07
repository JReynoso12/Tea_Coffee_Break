"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Fragment, useMemo, useState } from "react";
import Reveal from "./Reveal";
import {
  menuItems,
  images,
  menuPromo,
  type MenuCategory,
} from "@/lib/content";

const tabs: { id: MenuCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "coffee", label: "Coffee" },
  { id: "tea", label: "Tea" },
  { id: "food", label: "Food" },
];

type MenuItem = (typeof menuItems)[number];

function FeaturedCard({ item }: { item: MenuItem }) {
  return (
    <article className="group relative overflow-hidden rounded-sm border border-[rgba(226,149,66,0.22)] bg-[rgba(22,20,18,0.55)] md:grid md:grid-cols-2">
      <div className="relative flex flex-col justify-center gap-3 p-8 md:gap-4 md:p-10 lg:p-12">
        <div className="flex items-center gap-3">
          <span className="inline-flex w-fit rounded-full bg-[var(--caramel)] px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-[var(--btn-text-on-accent)]">
            Crowd Favourite
          </span>
          <span className="text-[1.55rem]" aria-hidden>
            {item.emoji}
          </span>
        </div>

        <h3 className="text-[1.15rem] font-bold text-[var(--cream)]">
          {item.name}
        </h3>
        <p className="text-[0.88rem] leading-relaxed text-[var(--text-muted)]">
          {item.desc}
        </p>
        <p className="mt-1 text-[1.55rem] font-bold text-[var(--caramel)]">
          {item.price}{" "}
          <span className="text-[0.78rem] font-normal text-[var(--text-muted)]">
            {item.unit}
          </span>
        </p>
      </div>

      <div className="relative min-h-[220px] overflow-hidden bg-[rgba(145,95,37,0.1)] md:min-h-[280px]">
        <Image
          src={"photo" in item && item.photo ? item.photo : images.menuFeatured}
          alt={`${item.name} at Tea Coffee Break`}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
          sizes="(max-width:768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,15,15,0.48)] to-transparent md:bg-gradient-to-r md:from-[rgba(15,15,15,0.58)] md:to-transparent" />
      </div>
    </article>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group relative overflow-hidden rounded-sm border border-[rgba(226,149,66,0.14)] bg-[rgba(22,20,18,0.55)] p-7 transition-[box-shadow,border-color,background-color,transform] duration-300 hover:border-[rgba(226,149,66,0.28)] hover:bg-[rgba(145,95,37,0.07)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
      {"photo" in item && item.photo ? (
        <div className="relative -mx-7 -mt-7 mb-4 aspect-[4/3] w-[calc(100%+3.5rem)] max-w-none overflow-hidden border-b border-[rgba(226,149,66,0.12)]">
          <Image
            src={item.photo}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-102"
            sizes="(max-width:640px) 100vw, (max-width:900px) 50vw, 320px"
          />
        </div>
      ) : null}
      <span className="mb-3 block text-[1.6rem]" aria-hidden>
        {item.emoji}
      </span>
      <h3 className="text-[1.05rem] font-bold text-[var(--cream)]">
        {item.name}
      </h3>
      <p className="mt-2 text-[0.86rem] leading-relaxed text-[var(--text-muted)]">
        {item.desc}
      </p>
      <p className="mt-5 text-[1.35rem] font-bold text-[var(--caramel)]">
        {item.price}{" "}
        <span className="text-[0.78rem] font-normal text-[var(--text-muted)]">
          {item.unit}
        </span>
      </p>
    </article>
  );
}

export default function MenuSection() {
  const [cat, setCat] = useState<MenuCategory>("all");

  const { featuredItem, gridItems } = useMemo(() => {
    const list =
      cat === "all" ? menuItems : menuItems.filter((m) => m.category === cat);
    const featured = list.find((m) => m.featured);
    const rest = list.filter((m) => !m.featured);
    return { featuredItem: featured, gridItems: rest };
  }, [cat]);

  return (
    <section
      id="menu"
      className="overflow-x-hidden bg-[var(--espresso)] px-8 py-24 md:px-16 md:py-32"
    >
      <Reveal className="mb-16 text-center">
        <span className="mb-4 block text-[0.7rem] uppercase tracking-[0.3em] text-[var(--gold)]">
          What We Brew
        </span>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,5vw,3.5rem)] font-bold text-[var(--cream)]">
          Our <em className="text-[var(--gold)] not-italic">Menu</em>
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] text-[1.05rem] font-normal text-[var(--text-muted)]">
          Signature drinks, silog-style meals, sandwiches, and pasta — prices and sizes match our
          Foodpanda listing.
        </p>
        <p className="mt-3 text-[0.8rem] text-[var(--caramel)]/90">{menuPromo}</p>
      </Reveal>

      <Reveal className="mb-12 flex flex-wrap items-center justify-center gap-y-2 border-b border-[rgba(226,149,66,0.15)] pb-4">
        {tabs.map((t, i) => (
          <Fragment key={t.id}>
            <button
              type="button"
              onClick={() => setCat(t.id)}
              className={`rounded-full border px-4 py-2 text-[0.8rem] uppercase tracking-[0.12em] transition-colors ${
                cat === t.id
                  ? "border-[rgba(226,149,66,0.55)] bg-[rgba(226,149,66,0.12)] font-bold text-[var(--cream)]"
                  : "border-[rgba(226,149,66,0.18)] bg-transparent font-normal text-[var(--text-muted)] hover:border-[rgba(226,149,66,0.35)] hover:text-[var(--cream-dark)]"
              }`}
            >
              {t.label}
            </button>
          </Fragment>
        ))}
      </Reveal>

      <div className="mx-auto max-w-[1200px]">
        <motion.div
          key={cat}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {featuredItem ? <FeaturedCard item={featuredItem} /> : null}

          <div className="mt-6 grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr))]">
            {gridItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Fragment, useMemo, useState } from "react";
import Reveal from "./Reveal";
import { menuItems, images, menuPromo, type MenuCategory } from "@/lib/content";

const tabs: { id: MenuCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "coffee", label: "Coffee" },
  { id: "tea", label: "Tea" },
  { id: "food", label: "Food" },
];

type MenuItem = (typeof menuItems)[number];

function FeaturedCard({ item }: { item: MenuItem }) {
  return (
    <article className="group relative mb-[1px] grid overflow-hidden border border-[rgba(226,149,66,0.25)] bg-[rgba(145,95,37,0.12)] md:grid-cols-2 md:gap-0">
      <div className="relative order-2 flex flex-col justify-center p-8 md:order-1 md:p-10 lg:p-12">
        <span className="mb-4 inline-flex w-fit rounded-full bg-[var(--caramel)] px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-[var(--btn-text-on-accent)] md:absolute md:right-6 md:top-6">
          Crowd Favourite
        </span>
        <span className="mb-4 block text-[1.8rem]">{item.emoji}</span>
        <h3 className="font-[family-name:var(--font-playfair)] text-[1.15rem] font-bold text-[var(--cream)] pr-4 md:pr-36">
          {item.name}
        </h3>
        <p className="mt-2 text-[0.82rem] leading-relaxed text-[var(--text-muted)]">
          {item.desc}
        </p>
        <p className="font-[family-name:var(--font-playfair)] mt-6 text-[1.35rem] font-bold text-[var(--caramel)]">
          {item.price}{" "}
          <span className="text-[0.75rem] font-normal text-[var(--text-muted)]">
            {item.unit}
          </span>
        </p>
      </div>
      <div className="relative order-1 min-h-[200px] overflow-hidden bg-[rgba(145,95,37,0.1)] md:order-2 md:min-h-[280px]">
        <Image
          src={"photo" in item && item.photo ? item.photo : images.menuFeatured}
          alt={`${item.name} at Tea Coffee Break`}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,15,15,0.45)] to-transparent md:bg-gradient-to-r md:from-[rgba(15,15,15,0.55)] md:to-transparent" />
      </div>
    </article>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group relative overflow-hidden border border-[rgba(226,149,66,0.1)] bg-[rgba(22,20,18,0.55)] p-8 transition-[background,border-color,transform] duration-300 before:absolute before:left-0 before:top-0 before:h-0 before:w-[3px] before:bg-[var(--caramel)] before:transition-[height] before:duration-500 hover:-translate-y-1 hover:border-[rgba(226,149,66,0.28)] hover:bg-[rgba(145,95,37,0.08)] hover:before:h-full">
      {"photo" in item && item.photo ? (
        <div className="relative -mx-8 -mt-8 mb-4 aspect-[4/3] w-[calc(100%+4rem)] max-w-none overflow-hidden border-b border-[rgba(226,149,66,0.12)]">
          <Image
            src={item.photo}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:640px) 100vw, (max-width:900px) 50vw, 320px"
          />
        </div>
      ) : null}
      <span className="mb-4 block text-[1.8rem]">{item.emoji}</span>
      <h3 className="font-[family-name:var(--font-playfair)] text-[1.1rem] font-bold text-[var(--cream)]">
        {item.name}
      </h3>
      <p className="mt-2 text-[0.82rem] leading-relaxed text-[var(--text-muted)]">
        {item.desc}
      </p>
      <p className="font-[family-name:var(--font-playfair)] mt-5 text-[1.3rem] font-bold text-[var(--caramel)]">
        {item.price}{" "}
        <span className="text-[0.75rem] font-normal text-[var(--text-muted)]">
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
      <Reveal className="mb-12 text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,5vw,3.5rem)] font-bold text-[var(--cream)]">
          Our <em className="text-[var(--gold)] not-italic">Menu</em>
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] text-[1.05rem] font-normal text-[var(--text-muted)]">
          Signature drinks, silog-style meals, sandwiches, and pasta — pricing matches our Foodpanda
          listing.
        </p>
        <p className="mt-3 text-[0.8rem] text-[var(--caramel)]/90">{menuPromo}</p>
      </Reveal>

      <Reveal className="mb-10 flex flex-wrap items-center justify-center gap-y-2 border-b border-[rgba(226,149,66,0.15)] pb-4">
        {tabs.map((t, i) => (
          <Fragment key={t.id}>
            {i > 0 && (
              <span
                className="hidden select-none text-[var(--bronze)]/50 sm:mx-4 sm:inline"
                aria-hidden
              >
                |
              </span>
            )}
            <button
              type="button"
              onClick={() => setCat(t.id)}
              className={`px-4 py-2 text-[0.8rem] uppercase tracking-[0.12em] transition-colors ${
                cat === t.id
                  ? "font-bold text-[var(--cream)]"
                  : "font-normal text-[var(--text-muted)] hover:text-[var(--cream-dark)]"
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

          <div className="grid gap-[1px] [grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr))] bg-[rgba(226,149,66,0.12)]">
            {gridItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

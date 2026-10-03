"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  menu,
  menuNote,
  site,
  type DrinkGroup,
  type MenuItem,
} from "@/site.config";
import { Reveal } from "@/components/Reveal";

const tabs = [
  { id: "breakfast", label: "Breakfast" },
  { id: "pasta", label: "Pasta" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "salads", label: "Salads" },
  { id: "dolci", label: "Dolci" },
  { id: "drinks", label: "Drinks" },
] as const;

type TabId = (typeof tabs)[number]["id"];

type MenuGroup = {
  heading?: string;
  items: readonly MenuItem[];
};

function Price({ item }: { item: MenuItem }) {
  if (item.price) {
    return (
      <span className="shrink-0 font-display text-[1.05rem] tabular-nums tracking-wide text-ink">
        {item.price}
      </span>
    );
  }

  return (
    <span className="shrink-0 text-right text-[0.72rem] italic tracking-wide text-muted">
      {item.priceNote ?? "ask the kitchen"}
    </span>
  );
}

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-5 gap-y-1 border-t border-stone/90 py-4 first:border-t-0 first:pt-0">
      <p className="font-display text-[1.28rem] leading-snug text-ink md:text-[1.38rem]">
        {item.name}
      </p>
      <Price item={item} />
      {item.description ? (
        <p className="col-span-2 max-w-md font-sans text-[0.9rem] leading-relaxed text-muted">
          {item.description}
        </p>
      ) : null}
    </li>
  );
}

function splitColumns(items: readonly MenuItem[]) {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)] as const;
}

function MenuColumns({ items }: { items: readonly MenuItem[] }) {
  const [left, right] = splitColumns(items);

  return (
    <div className="grid gap-x-14 gap-y-2 md:grid-cols-2">
      <ul>
        {left.map((item) => (
          <MenuRow key={item.name} item={item} />
        ))}
      </ul>
      {right.length > 0 ? (
        <ul>
          {right.map((item) => (
            <MenuRow key={item.name} item={item} />
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function GroupedMenu({ groups }: { groups: readonly MenuGroup[] }) {
  const single = groups.length === 1 && !groups[0].heading;

  if (single) {
    return <MenuColumns items={groups[0].items} />;
  }

  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-x-14 md:gap-y-12">
      {groups.map((group) => (
        <div key={group.heading ?? group.items[0]?.name}>
          {group.heading ? (
            <p className="mb-4 text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-olive">
              {group.heading}
            </p>
          ) : null}
          <ul>
            {group.items.map((item) => (
              <MenuRow key={item.name} item={item} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function groupsFor(tab: TabId): MenuGroup[] {
  if (tab === "drinks") {
    return (menu.drinks as readonly DrinkGroup[]).map((group) => ({
      heading: group.heading,
      items: group.items,
    }));
  }

  if (tab === "pasta") {
    return [{ items: menu.pasta.filter((d) => !d.featured) }];
  }

  return [{ items: menu[tab] }];
}

export function Menu() {
  const [tab, setTab] = useState<TabId>("pasta");
  const reduce = useReducedMotion();
  const featured = menu.pasta.find((d) => d.featured)!;

  return (
    <section id="menu" className="bg-ivory">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-olive">
            From the kitchen
          </p>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">
            A short menu, cooked that morning.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{menuNote}</p>
        </Reveal>

        <Reveal className="mt-12 overflow-hidden border border-gold/35 bg-ink text-ivory md:grid md:grid-cols-5">
          <div className="relative min-h-[260px] md:col-span-2 md:min-h-full">
            <Image
              src="/images/ta-homemade-2.jpg"
              alt="Chef's favourite — mushroom pasta at L'Angolo Bianco"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/10 md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-ink/40" />
          </div>
          <div className="relative md:col-span-3 p-8 md:p-12">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold-bright">
              Chef&apos;s favourite
            </p>
            <h3 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              {featured.name}
            </h3>
            <div className="hairline my-6 w-24" />
            <p className="max-w-lg font-sans text-[1.02rem] leading-relaxed text-ivory/78">
              {featured.description}
            </p>
            <p className="mt-8 font-display text-2xl text-gold-bright">
              {featured.price}
            </p>
            {featured.priceNote ? (
              <p className="mt-1 text-[0.72rem] tracking-wide text-ivory/45">
                {featured.priceNote}
              </p>
            ) : null}
          </div>
        </Reveal>

        <div className="sticky top-[3.6rem] z-20 -mx-5 mt-12 max-w-full overflow-x-hidden border-y border-gold/25 bg-ivory/94 px-5 backdrop-blur-md md:-mx-0 md:px-0">
          <div
            className="flex max-w-full gap-0.5 overflow-x-auto overscroll-x-contain py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:justify-center md:gap-1.5"
            role="tablist"
            aria-label="Menu sections"
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`menu-tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls="menu-panel"
                onClick={() => setTab(t.id)}
                className={`shrink-0 px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] transition ${
                  tab === t.id
                    ? "text-terracotta shadow-[inset_0_-2px_0_0_var(--terracotta)]"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div
          id="menu-panel"
          role="tabpanel"
          aria-labelledby={`menu-tab-${tab}`}
          className="mt-10 min-h-[18rem]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <GroupedMenu groups={groupsFor(tab)} />
              {tab === "pasta" ? (
                <div className="mt-12 border-t border-gold/30 pt-8">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-olive">
                    Also from the kitchen
                  </p>
                  <ul className="mt-2 max-w-xl">
                    {menu.risotto.map((item) => (
                      <MenuRow
                        key={item.name}
                        item={{
                          ...item,
                          name: `Risotto — ${item.name.toLowerCase()}`,
                        }}
                      />
                    ))}
                  </ul>
                </div>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-12 text-center text-sm text-muted">
          Kitchen is fresh daily — some items sell out.{" "}
          <a
            href={site.thefork.menu}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-terracotta underline-offset-4 hover:underline"
          >
            Full menu on TheFork
          </a>
          .
        </p>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { TricolorFlag } from "@/components/Tricolor";
import { site } from "@/site.config";

const links = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const glass =
    "bg-ivory/30 text-ink shadow-[0_1px_0_rgba(196,165,116,0.2)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-ivory/30";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? glass
          : `${glass} lg:bg-transparent lg:text-ivory lg:shadow-none lg:backdrop-blur-none lg:backdrop-saturate-100`
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3.5 md:px-8">
        <a
          href="#top"
          className="flex min-w-0 shrink items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <TricolorFlag className="hidden sm:inline-flex" />
          <span className="min-w-0">
            <span className="block truncate font-display text-[1.35rem] leading-none tracking-[0.02em] md:text-[1.55rem]">
              L&apos;Angolo Bianco
            </span>
            <span
              className={`mt-1 hidden font-display text-[0.68rem] italic tracking-[0.18em] md:block ${
                scrolled || open ? "text-muted" : "text-muted lg:text-ivory/70"
              }`}
            >
              {site.italian}
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[0.72rem] font-medium uppercase tracking-[0.22em] transition ${
                scrolled
                  ? "text-ink-soft hover:text-terracotta"
                  : "text-ivory/82 hover:text-gold-bright"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={site.thefork.reserve}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terracotta px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ivory transition hover:bg-terracotta-deep"
          >
            Reserve
          </a>
          <button
            type="button"
            className="px-2 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-gold/25 bg-ivory px-5 py-6 text-ink lg:hidden"
        >
          <ul className="space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-2xl"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.tel}
            className="mt-6 block text-sm text-muted"
            onClick={() => setOpen(false)}
          >
            Call {site.phoneDisplay}
          </a>
        </nav>
      ) : null}
    </header>
  );
}

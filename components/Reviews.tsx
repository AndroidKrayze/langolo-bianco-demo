"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { reviews, site } from "@/site.config";

function Stars({ n }: { n: number }) {
  return (
    <p className="text-gold tracking-[0.2em]" aria-label={`${n} out of 5 stars`}>
      {"★".repeat(n)}
      <span className="text-ivory/20">{"★".repeat(5 - n)}</span>
    </p>
  );
}

export function Reviews() {
  const quotes = reviews;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const next = useCallback(
    () => setIndex((i) => (i + 1) % quotes.length),
    [quotes.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + quotes.length) % quotes.length),
    [quotes.length],
  );

  useEffect(() => {
    if (paused || reduce) return;
    const t = window.setInterval(next, 5600);
    return () => window.clearInterval(t);
  }, [next, paused, reduce]);

  const quote = quotes[index];

  return (
    <section
      id="reviews"
      className="bg-ink text-ivory"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gold">
          From the guests
        </p>
        <h2 className="mt-4 font-display text-5xl md:text-6xl">
          Treated like family.
        </h2>
        <p className="mt-4 text-sm text-ivory/55">
          Google {site.ratings.google.rating}/5 · TripAdvisor{" "}
          {site.ratings.tripadvisor.rating}/5.
        </p>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Guest reviews"
          className="relative mt-12 min-h-[280px]"
          onTouchStart={(e) => setTouchStart(e.changedTouches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStart == null) return;
            const dx = e.changedTouches[0].clientX - touchStart;
            if (dx > 50) prev();
            if (dx < -50) next();
            setTouchStart(null);
          }}
        >
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={quote.id}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -14 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="px-2"
              aria-live="polite"
            >
              <Stars n={quote.stars} />
              <p className="mt-6 break-words font-display text-2xl leading-snug italic text-ivory md:text-4xl">
                “{quote.quote}”
              </p>
              <footer className="mt-8 text-[0.72rem] uppercase tracking-[0.22em] text-gold-bright">
                {quote.name}
                <span className="mx-2 text-ivory/30">·</span>
                {quote.source}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={prev}
            className="border border-gold/40 px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-ivory/80 hover:border-gold"
            aria-label="Previous review"
          >
            Prev
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Review slides">
            {quotes.map((q, i) => (
              <button
                key={q.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Review ${i + 1} of ${quotes.length}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "bg-gold" : "bg-ivory/25 hover:bg-ivory/50"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="border border-gold/40 px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-ivory/80 hover:border-gold"
            aria-label="Next review"
          >
            Next
          </button>
        </div>

        <a
          href={site.googleMapsReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold-bright underline-offset-4 hover:underline"
        >
          Read more on Google
        </a>
        <p className="mt-3 text-xs text-ivory/40">
          Or{" "}
          <a
            href={site.tripadvisor}
            className="underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripAdvisor
          </a>
          .
        </p>
      </div>
    </section>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { gallery } from "@/site.config";
import { Reveal } from "@/components/Reveal";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () =>
      setActive((i) =>
        i == null ? i : (i - 1 + gallery.length) % gallery.length,
      ),
    [],
  );
  const next = useCallback(
    () => setActive((i) => (i == null ? i : (i + 1) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (active == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  const current = active == null ? null : gallery[active];

  return (
    <section id="gallery" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-olive">
            From the table
          </p>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">
            Pasta, pastry, white linen.
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            The shopfront and the plates — pasta, pastry, white linen.
          </p>
        </Reveal>

        <div className="mt-12 columns-1 gap-3 sm:columns-2 lg:columns-3">
          {gallery.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 0.03}
              className="mb-3 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden bg-stone text-left"
                aria-label={`Open image: ${img.alt}`}
              >
                <div
                  className={`relative ${
                    i % 5 === 0
                      ? "aspect-[4/5]"
                      : i % 3 === 0
                        ? "aspect-square"
                        : "aspect-[5/4]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                {img.placeholder ? (
                  <span className="absolute left-3 top-3 bg-ivory/90 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    Temporary
                  </span>
                ) : null}
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/92 p-4"
          onClick={close}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <p className="mt-3 break-words px-1 text-center text-sm text-ivory/75">
              {current.alt}
              <span className="mx-2 text-ivory/30">·</span>
              {current.credit}
            </p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                className="border border-ivory/30 px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-ivory"
                aria-label="Previous image"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={close}
                className="border border-ivory/30 px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-ivory"
              >
                Close
              </button>
              <button
                type="button"
                onClick={next}
                className="border border-ivory/30 px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-ivory"
                aria-label="Next image"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

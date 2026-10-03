"use client";

import { FormEvent, useState } from "react";
import { hours, site } from "@/site.config";
import { FindOn } from "@/components/FindOn";
import { Reveal } from "@/components/Reveal";

export function Visit() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="visit" className="bg-stone/50">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-olive">
            Visit
          </p>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">
            49 Crawford Street
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{site.walk}</p>
        </Reveal>

        <div className="mt-12 grid min-w-0 gap-8 lg:grid-cols-5">
          <div className="relative min-h-[360px] min-w-0 overflow-hidden border border-gold/25 bg-ink lg:col-span-3 lg:min-h-[540px]">
            <iframe
              title="Map of L'Angolo Bianco, 49 Crawford Street, Marylebone"
              src={site.mapsEmbed}
              className="absolute inset-0 h-full w-full max-w-full border-0 grayscale-[15%] contrast-[1.04]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <Reveal className="min-w-0 bg-white p-6 shadow-[0_20px_50px_-28px_rgba(26,26,26,0.28)] sm:p-8 lg:col-span-2">
            <p className="font-display text-3xl text-ink">The address</p>
            <p className="mt-3 leading-relaxed text-ink-soft">
              {site.address.line}
            </p>
            <a
              href={site.tel}
              className="mt-5 block font-display text-2xl text-terracotta hover:text-terracotta-deep"
            >
              {site.phoneDisplay}
            </a>
            <p className="text-sm text-muted">{site.phoneIntl}</p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={site.thefork.reserve}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-terracotta px-5 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ivory hover:bg-terracotta-deep"
              >
                Reserve on TheFork
              </a>
              <a
                href={site.tel}
                className="border border-ink/15 px-5 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink"
              >
                Call for walk-ins
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ink/15 px-4 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink"
              >
                <span className="block">Instagram</span>
                <span className="mt-0.5 block break-all text-[0.62rem] font-medium normal-case tracking-[0.08em] text-muted">
                  {site.instagramHandle}
                </span>
              </a>
              <a
                href={site.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-olive underline-offset-4 hover:underline"
              >
                Get directions
              </a>
            </div>
            <p className="mt-4 text-center text-[0.68rem] uppercase tracking-[0.16em] text-muted">
              {site.thefork.microcopy}
            </p>
            <div className="mt-6 min-w-0 border-t border-stone pt-5">
              <p className="mb-3 text-center text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-olive/80">
                Also listed on
              </p>
              <FindOn />
            </div>

            <div className="mt-10 border-t border-stone pt-8">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-olive">
                Hours
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {hours.note}
              </p>
              <ul className="mt-5 space-y-2 text-ink">
                {hours.grouped.map((d) => (
                  <li key={d.label} className="flex justify-between gap-4 text-sm">
                    <span>{d.label}</span>
                    <span className="font-medium">{d.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 border border-gold/25 bg-white p-8 md:p-10">
          <p className="font-display text-3xl text-ink">Write to us</p>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Prefer a call or Instagram — we don&apos;t list a public email.
          </p>
          {sent ? (
            <p className="mt-6 font-display text-xl italic text-olive">
              Grazie — please call {site.phoneDisplay} or DM{" "}
              {site.instagramHandle}. We don&apos;t list an email yet.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="block text-sm">
                <span className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                  Name
                </span>
                <input
                  required
                  name="name"
                  className="mt-1 w-full border border-stone bg-ivory px-3 py-2.5"
                />
              </label>
              <label className="block text-sm">
                <span className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                  Phone
                </span>
                <input
                  name="phone"
                  type="tel"
                  className="mt-1 w-full border border-stone bg-ivory px-3 py-2.5"
                />
              </label>
              <label className="block text-sm md:col-span-2">
                <span className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                  Note
                </span>
                <textarea
                  required
                  name="note"
                  rows={3}
                  className="mt-1 w-full border border-stone bg-ivory px-3 py-2.5"
                  placeholder="Not a booking form — tables go through TheFork."
                />
              </label>
              <button
                type="submit"
                className="bg-ink px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ivory md:w-fit"
              >
                Send note
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

import { site } from "@/site.config";
import { Reveal } from "@/components/Reveal";

export function Reserve() {
  return (
    <section id="reserve" className="bg-terracotta text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-center md:px-8 md:py-24">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-ivory/70">
            {site.thefork.microcopy}
          </p>
          <h2 className="mt-3 font-display text-5xl leading-tight md:text-6xl">
            Table for lunch?
          </h2>
          <p className="mt-4 max-w-xl text-ivory/85">
            Book a table on TheFork. Same-day walk-ins: call the kitchen.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={site.thefork.reserve}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ivory px-8 py-4 text-center text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-terracotta transition hover:bg-white"
          >
            Book on TheFork
          </a>
          <a
            href={site.tel}
            className="border border-ivory/50 px-8 py-4 text-center text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-ivory transition hover:border-ivory"
          >
            {site.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

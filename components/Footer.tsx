import { FindOn } from "@/components/FindOn";
import { Tricolor, TricolorFlag } from "@/components/Tricolor";
import { site } from "@/site.config";

export function Footer() {
  return (
    <footer className="bg-ink pb-16 text-ivory">
      <Tricolor className="h-[4px] w-full" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="flex items-center gap-3 font-display text-4xl">
            <TricolorFlag />
            L&apos;Angolo Bianco
          </p>
          <p className="mt-2 font-display text-sm italic tracking-[0.12em] text-gold">
            {site.italian} · Marylebone
          </p>
          <p className="mt-3 max-w-sm text-sm text-ivory/55">
            Family-run Italian café-restaurant. Home made pasta. Book via
            TheFork — or call for a walk-in.
          </p>
        </div>
        <div className="text-sm text-ivory/70 md:text-right">
          <p>{site.address.line}</p>
          <a href={site.tel} className="mt-2 block hover:text-gold-bright">
            {site.phoneDisplay}
          </a>
          <a
            href={site.instagram}
            className="mt-1 block break-all hover:text-gold-bright"
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.instagramHandle}
          </a>
          <a
            href={site.thefork.reserve}
            className="mt-3 inline-block text-gold hover:text-gold-bright"
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.thefork.microcopy}
          </a>
          <div className="mt-6 min-w-0 md:flex md:justify-end">
            <FindOn tone="dark" align="end" />
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10 px-5 py-5 text-center text-[0.72rem] tracking-wide text-ivory/40 md:px-8">
        © {new Date().getFullYear()} L&apos;Angolo Bianco
      </div>
    </footer>
  );
}

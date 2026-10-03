import { site } from "@/site.config";

export function StickyReserve() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-ivory/96 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2">
        <a
          href={site.thefork.reserve}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-terracotta px-4 py-3.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ivory"
        >
          Reserve
        </a>
        <a
          href={site.tel}
          className="px-4 py-3.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink"
        >
          Call
        </a>
      </div>
    </div>
  );
}

import { site } from "@/site.config";
import { FindOn } from "@/components/FindOn";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    label: "Google",
    value: `${site.ratings.google.rating}`,
    hint: `${site.ratings.google.label} reviews`,
  },
  {
    label: "TripAdvisor",
    value: `${site.ratings.tripadvisor.rating}`,
    hint: `${site.ratings.tripadvisor.count} reviews`,
  },
  {
    label: "Family-run",
    value: "Anell & team",
    hint: "Treated like family",
  },
  {
    label: "Instagram",
    value: site.instagramHandle,
    hint: "Their kitchen, on Instagram",
    href: site.instagram,
  },
];

export function TrustStrip() {
  return (
    <section className="border-y border-gold/25 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.06} className="min-w-0">
            <div className="min-w-0 border-stone/80 px-4 py-8 md:border-l md:px-8 first:md:border-l-0">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-olive">
                {item.label}
              </p>
              {"href" in item && item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block break-all font-display text-[1.25rem] leading-tight text-ink hover:text-terracotta md:break-normal md:text-[1.7rem]"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 font-display text-2xl text-ink md:text-[1.7rem]">
                  {item.value}
                </p>
              )}
              <p className="mt-1 text-xs text-muted">{item.hint}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="border-t border-gold/20 px-5 py-5 md:px-8">
        <p className="mb-3 text-center text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-olive/80">
          Find us on
        </p>
        <FindOn />
      </div>
    </section>
  );
}

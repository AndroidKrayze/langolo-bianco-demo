import Image from "next/image";
import { pastryImage, site, storyImage } from "@/site.config";
import { Reveal } from "@/components/Reveal";

export function Story() {
  return (
    <section id="story" className="marble-wash">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-olive">
            The white corner
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            A neighbourhood Italian, cooked like home.
          </h2>
          <p className="mt-3 font-display text-xl italic text-terracotta">
            pasta fatta in casa
          </p>
          <div className="hairline my-8 w-24" />
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
            <p>
              L&apos;Angolo Bianco sits on Crawford Street — a small family
              kitchen in Marylebone, white walls and wood tables, flowers on
              the linen, pasta made properly.
            </p>
            <p>
              Anell and the team (Abel among them) treat guests like family:
              funny, warm, and unhurried. Locals come back for the mushroom
              pasta. Visitors from Marble Arch stumble in and stay for cake.
            </p>
            <p>
              Breakfast through late lunch. Nothing flashy. The kind of
              Italian corner you hope is still there next year.
            </p>
          </div>
        </Reveal>

        <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:col-span-7">
          <Reveal className="relative aspect-[4/5] overflow-hidden bg-stone">
            <Image
              src={storyImage.src}
              alt={storyImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4">
            <div className="relative aspect-[5/4] overflow-hidden bg-stone">
              <Image
                src={pastryImage.src}
                alt={pastryImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
            <blockquote className="flex flex-1 flex-col justify-center border border-gold/30 bg-white/70 p-6">
              <p className="font-display text-2xl italic leading-snug text-ink">
                “You are treated like an old friend.”
              </p>
              <footer className="mt-4 text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                Google · BinaryJoe
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Tricolor, TricolorFlag } from "@/components/Tricolor";
import { heroImage, site } from "@/site.config";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <motion.div
        className="absolute inset-0 origin-top"
        initial={reduce ? false : { scale: 1.015 }}
        animate={reduce ? undefined : { scale: 1.04 }}
        transition={
          reduce
            ? undefined
            : { duration: 28, ease: "linear", repeat: Infinity, repeatType: "reverse" }
        }
      >
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_top] lg:object-[center_top]"
        />
      </motion.div>
      {/* ~15% dark veil so ivory type reads; shopfront stays visible */}
      <div className="absolute inset-0 bg-ink/15" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-ink/28 via-ink/10 to-transparent"
        aria-hidden
      />
      <Tricolor
        orientation="vertical"
        className="absolute left-0 top-0 z-10 h-full w-1.5"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-28 pt-32 md:justify-end md:px-8 md:pb-28">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-gold-bright [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]"
        >
          <TricolorFlag />
          Family kitchen · Crawford Street
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.35 }}
          className="max-w-3xl font-display text-[2.7rem] leading-[0.96] text-ivory [text-shadow:0_1px_2px_rgba(0,0,0,0.55),0_6px_28px_rgba(0,0,0,0.5),0_16px_48px_rgba(0,0,0,0.32)] sm:text-[3.15rem] md:text-[5.4rem]"
        >
          Home made pasta.
          <br />
          Marylebone warmth.
        </motion.h1>
        <Tricolor className="my-7 h-[3px] w-40 md:w-56" />
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="max-w-xl font-display text-xl italic leading-relaxed text-ivory [text-shadow:0_2px_18px_rgba(0,0,0,0.5)] md:text-2xl"
        >
          {site.headline} A family-run Italian corner — breakfast through late
          lunch.
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href={site.thefork.reserve}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terracotta px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ivory transition hover:bg-terracotta-deep"
          >
            Reserve a table
          </a>
          <a
            href={site.tel}
            className="border border-ivory/45 px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ivory transition hover:border-gold-bright hover:text-gold-bright"
          >
            Call {site.phoneDisplay}
          </a>
        </motion.div>
        <p className="mt-6 text-[0.68rem] uppercase tracking-[0.16em] text-ivory/45">
          {site.thefork.microcopy}
        </p>
      </div>
    </section>
  );
}

import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Reserve } from "@/components/Reserve";
import { Reviews } from "@/components/Reviews";
import { StickyReserve } from "@/components/StickyReserve";
import { Story } from "@/components/Story";
import { TrustStrip } from "@/components/TrustStrip";
import { Visit } from "@/components/Visit";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-14 md:pb-0">
        <Hero />
        <TrustStrip />
        <Story />
        <Menu />
        <Gallery />
        <Reviews />
        <Visit />
        <Reserve />
      </main>
      <Footer />
      <StickyReserve />
    </>
  );
}

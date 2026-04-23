import { HeroParallax } from "@/components/sections/HeroParallax";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { WhyRendlr } from "@/components/sections/WhyRendlrCarousel";
import { StatsBand } from "@/components/sections/StatsBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/layout/Footer";
import { parallaxCards } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroParallax products={parallaxCards} />
      <Marquee />
      <Services />
      <WhyRendlr />
      <StatsBand />
      <Testimonials />
      <CtaSection />
      <Footer />
    </>
  );
}

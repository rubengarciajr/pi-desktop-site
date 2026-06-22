import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { SocialProof } from "@/components/sections/SocialProof";
import { Features } from "@/components/sections/Features";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { Extensions } from "@/components/sections/Extensions";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <SocialProof />
        <Features />
        <AppShowcase />
        <Extensions />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PiLogo } from "@/components/shared/PiLogo";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const rawRotateX = useTransform(scrollYProgress, [0, 0.25], [22, 0]);
  const rawRotateZ = useTransform(scrollYProgress, [0, 0.25], [-4, 0]);
  const rawY = useTransform(scrollYProgress, [0, 0.25], [140, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 0.25], [0.88, 1]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.25], [0.55, 1]);

  const springConfig = { stiffness: 140, damping: 18, mass: 0.8 };
  const rotateX = useSpring(rawRotateX, springConfig);
  const rotateZ = useSpring(rawRotateZ, springConfig);
  const y = useSpring(rawY, springConfig);
  const scale = useSpring(rawScale, springConfig);
  const opacity = useSpring(rawOpacity, springConfig);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[110vh] md:min-h-[140vh] flex items-start justify-center overflow-hidden bg-[#1a1c1c]"
    >
      {/* Background effects */}
      <div className="hero-glow top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="grid-pattern absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-12 md:pb-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="border-[#14b8a6]/30 bg-[#14b8a6]/10 text-[#5eead4] px-4 py-1.5 text-xs font-medium mb-8"
          >
            v0.5.0 — Tag Team: Sequential Relay 🔗
          </Badge>
        </motion.div>

        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#202222] border border-[#f9f4eb]/[0.08] flex items-center justify-center shadow-2xl shadow-black/50">
            <PiLogo size={40} />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase tracking-tighter leading-[1.1] mb-6"
        >
          <span className="gradient-text">Pi Desktop</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#a8a39a] max-w-2xl mx-auto mb-10 leading-relaxed font-mono"
        >
          A polished, multi-tab desktop GUI for the{" "}
          <span className="text-[#d6d1c9]">Pi coding agent</span>. Open it and
          start typing — no terminal, no Node.js, no setup.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="https://github.com/rubengarciajr/pi-desktop/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#14b8a6] hover:bg-[#0d9488] text-[#f9f4eb] font-semibold px-8 h-12 text-base gap-2 shadow-lg shadow-[#14b8a6]/20 hover:shadow-lg hover:shadow-[#14b8a6]/25 hover:-translate-y-0.5 transition-all duration-200 rounded-full"
            >
              <Download className="w-4 h-4" />
              Download for macOS
            </Button>
          </a>
          <a
            href="https://github.com/rubengarciajr/pi-desktop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-[#f9f4eb]/10 bg-[#f9f4eb]/[0.03] hover:bg-[#f9f4eb]/[0.06] text-[#d6d1c9] hover:text-[#f9f4eb] px-8 h-12 text-base gap-2 rounded-full"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              View on GitHub
            </Button>
          </a>
        </motion.div>

        {/* App screenshot with scroll-driven 3D entrance */}
        <div
          className="relative max-w-5xl mx-auto"
          style={{ perspective: "1200px" }}
        >
          {/* Screenshot container */}
          <motion.div
            className="relative rounded-xl overflow-hidden will-change-transform"
            style={{
              rotateX,
              rotateZ,
              y,
              scale,
              opacity,
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src="/app-starting-screen.png"
              alt="Pi Desktop starting screen"
              width={1268}
              height={848}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 md:mt-16"
        >
          <a
            href="#features"
            className="inline-flex flex-col items-center gap-2 text-[#76726b] hover:text-[#a8a39a] transition-colors"
          >
            <span className="text-xs">Explore features</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

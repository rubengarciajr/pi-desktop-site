"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Marquee } from "@/components/shared/Marquee";

const items = [
  "Pi Routing",
  "Tag Team",
  "Launches into Chat",
  "Convert to Code",
  "Multi-Tab Sessions",
  "Web Search",
  "GitHub Integration",
  "Custom Models",
  "Extensions",
  "macOS Native",
  "Open Source",
];

export function MarqueeStrip() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.08, 1]);
  const scale = useSpring(rawScale, { stiffness: 100, damping: 25 });

  return (
    <section
      ref={sectionRef}
      className="py-8 md:py-12 border-y border-[#f9f4eb]/[0.06] bg-[#1a1c1c] overflow-hidden"
    >
      <motion.div style={{ scale }} className="will-change-transform">
        <Marquee className="text-[#f9f4eb]">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-12">
              <span className="text-base md:text-xl font-mono uppercase tracking-wider text-[#a8a39a] whitespace-nowrap">
                {item}
              </span>
              <span className="text-[#14b8a6] text-lg">✦</span>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "MIT", label: "Licensed" },
  { value: "Apple Silicon", label: "Native" },
  { value: "7", label: "Built-in Tools" },
  { value: "Electron 38", label: "Runtime" },
];

export function SocialProof() {
  return (
    <section className="relative py-24 border-y border-[#f9f4eb]/[0.04] bg-[#1a1c1c]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="text-2xl sm:text-3xl font-semibold text-[#f9f4eb] mb-1 transition-colors duration-300 hover:text-[#14b8a6]">
                {stat.value}
              </div>
              <div className="text-xs text-[#8f8a82] uppercase tracking-wide font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-10 border-t border-[#f9f4eb]/[0.04] flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {[
            "Electron",
            "React 18",
            "TypeScript",
            "Tailwind CSS",
            "Zustand",
            "Pi SDK",
          ].map((tech) => (
            <span
              key={tech}
              className="text-sm text-[#5e5a55] font-mono tracking-wide"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

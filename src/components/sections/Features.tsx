"use client";

import { motion } from "framer-motion";
import {
  Columns3,
  MessageSquare,
  Puzzle,
  Palette,
  GitBranch,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: Columns3,
    title: "Multi-Tab Sessions",
    description:
      "Run multiple independent AI sessions simultaneously. Each tab has its own working directory, model, and context — like browser tabs for coding.",
    bg: "bg-[#14b8a6]/10",
    iconColor: "text-[#5eead4]",
  },
  {
    icon: MessageSquare,
    title: "Streaming Chat",
    description:
      "Real-time streaming responses with markdown rendering, syntax-highlighted code blocks, diff viewers, and smart auto-scroll.",
    bg: "bg-[#f9f4eb]/[0.04]",
    iconColor: "text-[#d6d1c9]",
  },
  {
    icon: Puzzle,
    title: "Extensions & Skills",
    description:
      "Browse, install, and manage Pi packages from npm. Memory, subagents, plan mode, web access — one click to install.",
    bg: "bg-[#14b8a6]/10",
    iconColor: "text-[#5eead4]",
  },
  {
    icon: Cpu,
    title: "Custom Models",
    description:
      "Bring your own API keys. Quick presets for Claude, GPT, GLM, MiMo, Grok, and more. Per-tab model switching with thinking level control.",
    bg: "bg-[#f9f4eb]/[0.04]",
    iconColor: "text-[#d6d1c9]",
  },
  {
    icon: Palette,
    title: "Theme System",
    description:
      "System, dark, and light modes with 7 accent color presets. Native macOS vibrancy with under-window blur effects.",
    bg: "bg-[#14b8a6]/10",
    iconColor: "text-[#5eead4]",
  },
  {
    icon: GitBranch,
    title: "GitHub Integration",
    description:
      "Secure PAT authentication, create repos, push/pull with visual sync status. Encrypted at rest with Electron safeStorage.",
    bg: "bg-[#f9f4eb]/[0.04]",
    iconColor: "text-[#d6d1c9]",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-28 bg-[#1a1c1c]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase tracking-tighter mb-4 text-[#f9f4eb]">
            Everything you need
          </h2>
          <p className="text-lg text-[#a8a39a] max-w-2xl mx-auto">
            A complete desktop coding environment. No terminal required, no
            compromises.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="group relative h-full rounded-2xl border border-[#f9f4eb]/[0.06] bg-[#202222] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#14b8a6]/10 hover:border-[#14b8a6]/30 hover:bg-[#252727]">
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl ${feature.bg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-[#f9f4eb] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#a8a39a] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Columns3,
  MessageSquare,
  Puzzle,
  Palette,
  GitBranch,
  Cpu,
  Zap,
  Globe,
  Infinity as InfinityIcon,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Launches into Chat",
    description:
      "Open the app and start typing — no folder picker, no setup. A Chat / Code toggle switches to full project sessions the moment you need them.",
    bg: "bg-[#14b8a6]/10",
    iconColor: "text-[#5eead4]",
  },
  {
    icon: Zap,
    title: "Convert to Code",
    description:
      "Turn any conversation into a real project session. Pick a folder and the whole chat is carried forward as context — nothing lost.",
    bg: "bg-[#f9f4eb]/[0.04]",
    iconColor: "text-[#d6d1c9]",
  },
  {
    icon: Columns3,
    title: "Multi-Tab Sessions",
    description:
      "Run many isolated agent sessions at once, like browser tabs. Each keeps its own model, working folder, history, and context.",
    bg: "bg-[#14b8a6]/10",
    iconColor: "text-[#5eead4]",
  },
  {
    icon: Globe,
    title: "Web Search Built In",
    description:
      "Flip on web search mid-conversation with zero config. Add your own Exa, Perplexity, or Gemini keys for more power.",
    bg: "bg-[#f9f4eb]/[0.04]",
    iconColor: "text-[#d6d1c9]",
  },
  {
    icon: InfinityIcon,
    title: "Never Overflows",
    description:
      "Per-session auto-compaction summarizes old context before it hits the limit. A live usage meter shows exactly where you stand.",
    bg: "bg-[#14b8a6]/10",
    iconColor: "text-[#5eead4]",
  },
  {
    icon: Cpu,
    title: "Bring Any Model",
    description:
      "Presets for Claude, GPT/Codex, GLM, MiniMax, MiMo, and Grok — plus your own. Per-tab switching with thinking-level control.",
    bg: "bg-[#f9f4eb]/[0.04]",
    iconColor: "text-[#d6d1c9]",
  },
  {
    icon: GitBranch,
    title: "GitHub Integration",
    description:
      "Create or attach repos and push/pull with visual sync status — plus a badge that glows the moment a session has unpushed changes.",
    bg: "bg-[#14b8a6]/10",
    iconColor: "text-[#5eead4]",
  },
  {
    icon: Puzzle,
    title: "Extensions & Skills",
    description:
      "Browse, install, and remove Pi packages right in the app. Memory, subagents, plan mode, web access — one click each.",
    bg: "bg-[#f9f4eb]/[0.04]",
    iconColor: "text-[#d6d1c9]",
  },
  {
    icon: Palette,
    title: "Private & Native",
    description:
      "Native macOS vibrancy, System / Dark / Light themes, and seven accents. Keys and tokens encrypted at rest in the macOS keychain.",
    bg: "bg-[#14b8a6]/10",
    iconColor: "text-[#5eead4]",
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

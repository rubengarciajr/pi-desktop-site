"use client";

import { motion } from "framer-motion";
import { Brain, Users, Route, Globe, Layers, Sparkles } from "lucide-react";

const extensions = [
  {
    icon: Brain,
    name: "pi-memory",
    author: "@samfp",
    description:
      "Persistent memory across sessions. Learns corrections, preferences, and coding patterns automatically.",
    bg: "bg-[#14b8a6]/10",
    iconColor: "text-[#5eead4]",
    installCmd: "pi install @samfp/pi-memory",
  },
  {
    icon: Users,
    name: "pi-subagents",
    author: "pi-team",
    description:
      "Delegate work to focused child agents — reviewer, planner, worker, scout, and oracle roles.",
    bg: "bg-[#f9f4eb]/[0.04]",
    iconColor: "text-[#d6d1c9]",
    installCmd: "pi install pi-subagents",
  },
  {
    icon: Route,
    name: "pi-plan-mode",
    author: "@narumitw",
    description:
      "Codex-like plan mode. Plan before executing — review the approach, then approve to run.",
    bg: "bg-[#14b8a6]/10",
    iconColor: "text-[#5eead4]",
    installCmd: "pi install @narumitw/pi-plan-mode",
  },
  {
    icon: Globe,
    name: "pi-web-access",
    author: "pi-team",
    description:
      "Web search and content fetching for the agent. Search the web, fetch docs, and read URLs.",
    bg: "bg-[#f9f4eb]/[0.04]",
    iconColor: "text-[#d6d1c9]",
    installCmd: "pi install pi-web-access",
  },
  {
    icon: Layers,
    name: "context-mode",
    author: "pi-team",
    description:
      "Context management with semantic indexing. Save tokens with smart context compression.",
    bg: "bg-[#14b8a6]/10",
    iconColor: "text-[#5eead4]",
    installCmd: "pi install context-mode",
  },
  {
    icon: Sparkles,
    name: "More on npm",
    author: "community",
    description:
      "Browse the full Pi package registry. New extensions published by the community every week.",
    bg: "bg-[#f9f4eb]/[0.04]",
    iconColor: "text-[#d6d1c9]",
    installCmd: "",
    isLink: true,
  },
];

export function Extensions() {
  return (
    <section id="extensions" className="relative overflow-hidden py-28 bg-[#1a1c1c]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#14b8a6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-[#f9f4eb]">
            Extend everything
          </h2>
          <p className="text-lg text-[#a8a39a] max-w-2xl mx-auto">
            Install powerful extensions from the Pi ecosystem. One click from
            the Packages tab, or use the CLI.
          </p>
        </motion.div>

        {/* Extension grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {extensions.map((ext, i) => (
            <motion.div
              key={ext.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="group relative h-full rounded-2xl border border-[#f9f4eb]/[0.06] bg-[#202222] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#14b8a6]/10 hover:border-[#14b8a6]/30 hover:bg-[#252727]">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl ${ext.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <ext.icon className={`w-5 h-5 ${ext.iconColor}`} />
                  </div>
                  <span className="text-xs text-[#76726b] font-mono">
                    {ext.author}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold font-mono text-[#f9f4eb] mb-2">
                  {ext.name}
                </h3>
                <p className="text-sm text-[#a8a39a] leading-relaxed mb-4">
                  {ext.description}
                </p>

                {/* Install command */}
                {ext.installCmd && (
                  <div className="flex items-center gap-2 bg-[#181a1a] border border-[#f9f4eb]/[0.04] rounded-lg px-3 py-2">
                    <span className="text-[#5eead4] text-xs">$</span>
                    <code className="text-xs text-[#a8a39a] font-mono flex-1">
                      {ext.installCmd}
                    </code>
                  </div>
                )}

                {ext.isLink && (
                  <a
                    href="https://www.npmjs.com/search?q=keywords%3Api-extension"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#5eead4] hover:text-[#14b8a6] font-medium transition-colors"
                  >
                    Browse npm →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

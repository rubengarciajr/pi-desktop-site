"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Release = {
  version: string;
  date: string;
  latest?: boolean;
  highlights: string[];
};

const releases: Release[] = [
  {
    version: "v0.3.2",
    date: "July 6, 2026",
    latest: true,
    highlights: [
      "“Start Chatting” reuses the current tab instead of opening a duplicate, and focuses the prompt immediately.",
      "Glowing input border now appears reliably on every empty chat — no app restart needed.",
    ],
  },
  {
    version: "v0.3.1",
    date: "July 6, 2026",
    highlights: [
      "One-click in-app updates: the DMG downloads in-app with a live progress bar, then opens the installer in Finder.",
      "Sidebar version badge is single-sourced from package.json, so it can’t drift out of sync.",
    ],
  },
  {
    version: "v0.3.0",
    date: "July 6, 2026",
    highlights: [
      "🎉 Public release — the full codebase is now open source on GitHub.",
      "Anonymous in-app update checks against the GitHub releases API — no token, no setup.",
    ],
  },
  {
    version: "v0.2.9",
    date: "July 4, 2026",
    highlights: [
      "Major performance overhaul: 5-second UI freezes eliminated and the renderer bundle nearly halved.",
      "Upgraded to Pi SDK 0.80.3 (Claude Sonnet 5, GPT-5.5 default) with reasoning-token counts in the cost tooltip.",
    ],
  },
  {
    version: "v0.2.8",
    date: "June 22, 2026",
    highlights: [
      "Security audit remediation: fixed shell command injection in GitHub and package operations.",
      "Per-tab event routing hardened — events without a tab ID are dropped instead of hitting the active tab.",
    ],
  },
];

export function Changelog() {
  return (
    <section id="changelog" className="relative py-28 bg-[#1a1c1c]">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-[#f9f4eb]">
            What&apos;s new
          </h2>
          <p className="text-lg text-[#a8a39a] max-w-2xl mx-auto">
            Shipping fast. Here&apos;s what landed in the latest releases.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[#f9f4eb]/[0.08] hidden sm:block" />

          <div className="space-y-10">
            {releases.map((release, i) => (
              <motion.div
                key={release.version}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative sm:pl-10"
              >
                {/* Timeline dot */}
                <span
                  className={`absolute left-0 top-1.5 hidden sm:block w-2.5 h-2.5 rounded-full -translate-x-1/2 ${
                    release.latest
                      ? "bg-[#14b8a6] shadow-[0_0_0_4px_rgba(20,184,166,0.15)]"
                      : "bg-[#4a4a48]"
                  }`}
                />

                {/* Version + date */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-base font-semibold font-mono text-[#f9f4eb]">
                    {release.version}
                  </span>
                  {release.latest && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#14b8a6]/15 border border-[#14b8a6]/25 text-[#5eead4] font-medium uppercase tracking-wide">
                      Latest
                    </span>
                  )}
                  <span className="text-xs text-[#76726b] font-mono">
                    {release.date}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {release.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm text-[#a8a39a] leading-relaxed"
                    >
                      <span className="text-[#14b8a6] mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[#14b8a6]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 text-center sm:pl-10"
        >
          <a
            href="https://github.com/rubengarciajr/pi-desktop/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#5eead4] hover:text-[#14b8a6] font-medium transition-colors"
          >
            View all releases
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

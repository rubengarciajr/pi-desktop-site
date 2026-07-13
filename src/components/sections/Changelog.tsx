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
    version: "v0.5.8",
    date: "July 13, 2026",
    latest: true,
    highlights: [
      "Pi Routing report card: after every run, a collapsible card shows each team member’s full response, confidence score, and the synthesized briefing — full transparency into what your multi-agent team contributed.",
      "Real-time per-agent progress (“2/3 models responded”), plus a branded status-bar indicator and a pulsing tab icon so you can spot which tab is running multi-agent work.",
    ],
  },
  {
    version: "v0.5.7",
    date: "July 13, 2026",
    highlights: [
      "Mixture of Agents (Pi Routing) is now a top-level sidebar item, right below Tag Team — both multi-model features side by side instead of buried in Settings.",
    ],
  },
  {
    version: "v0.5.6",
    date: "July 13, 2026",
    highlights: [
      "Pi Routing (Mixture of Agents) now works in the packaged app — fixed an asar bundling issue that stopped the engine from loading, so MOA and Tag Team both run in the installed DMG.",
      "Streaming freeze fix: the UI can no longer get stuck on “Thinking…” after a model finishes — streaming now resets on three independent signals plus a 30-second watchdog.",
    ],
  },
  {
    version: "v0.5.5",
    date: "July 11, 2026",
    highlights: [
      "Fixes: Tag Team now uses your final-stage handoff prompt, Pi Routing respects your configured confidence threshold, model IDs containing “/” (e.g. OpenRouter) select correctly, and update checks handle pre-release versions.",
      "New “max” thinking level, on-demand syntax highlighting for faster loads, and an upgrade to Electron 41 + Vite 6 with a hardened in-app updater.",
    ],
  },
  {
    version: "v0.5.4",
    date: "July 9, 2026",
    highlights: [
      "New Codex models — GPT-5.6 Luna, Sol, and Terra — are available with your ChatGPT sign-in (via Pi SDK 0.80.5), and Claude Sonnet 5 joins the GitHub Copilot catalog.",
      "Long Codex sessions stay connected: connections rotate before the backend’s 60-minute limit, and the Copilot device-code sign-in no longer appears to hang.",
    ],
  },
  {
    version: "v0.5.3",
    date: "July 9, 2026",
    highlights: [
      "Open in external editor: a prompt-bar button opens your draft in the editor of your choice (e.g. VS Code with `code --wait`), waits while you edit, then pulls the result back in — in both chat and code sessions.",
      "New models pull in the moment you connect (no restart), a Compact / Comfortable / Spacious message-spacing control lands in Settings → Appearance, and tab titles update live when a session is renamed.",
    ],
  },
  {
    version: "v0.5.2",
    date: "July 9, 2026",
    highlights: [
      "Pi Routing and Tag Team toggles now show just their icon until a team is active, and both are available in code sessions — not only chat.",
    ],
  },
  {
    version: "v0.5.1",
    date: "July 9, 2026",
    highlights: [
      "Tag Team gets its own collaboration icon everywhere it appears — the sidebar, chat toolbar, handoff tabs, and Tag Team panel.",
    ],
  },
  {
    version: "v0.5.0",
    date: "July 9, 2026",
    highlights: [
      "🔗 Tag Team (Sequential Model Relay) — the opposite of Mixture of Agents: models work in sequence, each one tagging the next in a fresh tab to build on the previous model’s work automatically, guided by custom handoff prompts.",
      "Build multi-stage teams (e.g. build → review → finalize) in the new Tag Team sidebar panel, with TAG badges in the tab bar marking relay handoffs. The Pi Routing toggle now shows the active team’s name.",
    ],
  },
  {
    version: "v0.4.8",
    date: "July 9, 2026",
    highlights: [
      "Pi Routing (Mixture of Agents) now works — fixed a packaging bug that stopped the engine from loading, so team fan-out, aggregation, and the score-and-re-query loop all run.",
      "Test a team against your in-progress draft before saving, and each member row shows a colored provider badge the moment you pick a model.",
    ],
  },
  {
    version: "v0.4.7",
    date: "July 8, 2026",
    highlights: [
      "Custom-model fixes now apply to all your models automatically on launch, and editing a model’s API key takes effect immediately — no restart.",
    ],
  },
  {
    version: "v0.4.6",
    date: "July 8, 2026",
    highlights: [
      "Fixed a “No API key” error when selecting a newly added local model — it now works right away, with no restart.",
    ],
  },
  {
    version: "v0.4.5",
    date: "July 8, 2026",
    highlights: [
      "Fixed local models staying hidden from the switcher — local servers now get a harmless placeholder key automatically, so they appear immediately.",
    ],
  },
  {
    version: "v0.4.4",
    date: "July 8, 2026",
    highlights: [
      "Models you add, edit, or remove now appear in the model switcher (⌘M) instantly — no new tab or restart needed.",
    ],
  },
  {
    version: "v0.4.3",
    date: "July 8, 2026",
    highlights: [
      "Test connection now lists a local server’s available models as clickable chips — click one to fill in the Model ID.",
    ],
  },
  {
    version: "v0.4.2",
    date: "July 8, 2026",
    highlights: [
      "Edit any custom model in place instead of removing and re-adding it — leave the API key blank to keep the current one.",
    ],
  },
  {
    version: "v0.4.1",
    date: "July 8, 2026",
    highlights: [
      "Connect a local model in two clicks: a new Local preset in Add Model fills in a localhost template for Ollama, LM Studio, or llama.cpp — no need to remember the endpoint.",
      "A Test connection button pings your local server before you save, confirming it’s reachable and your chosen model is available.",
    ],
  },
  {
    version: "v0.4.0",
    date: "July 8, 2026",
    highlights: [
      "🧠 Pi Routing (Mixture of Agents) — a Pi Desktop exclusive: assemble a team of models (Claude, GPT, GLM, Grok…) that answer each prompt in parallel, then synthesize their insights into a briefing the main model builds on.",
      "Basic mode runs a single synthesis pass; Advanced mode scores each member 0–10 and auto-re-queries weak responses across up to 5 layers. Toggle it from the new Pi Routing button in the chat toolbar.",
    ],
  },
  {
    version: "v0.3.8",
    date: "July 8, 2026",
    highlights: [
      "Redesigned Sessions panel: sessions are now bordered cards, with the active session highlighted by an accent border, glow ring, and “current” label.",
      "The panel is now clearly separated from the chat area, and your working folder is marked in accent color in the header and favorites.",
    ],
  },
  {
    version: "v0.3.7",
    date: "July 7, 2026",
    highlights: [
      "Interactive file paths: click any file path in a message, tool call, or command output to reveal it in Finder or copy its full, relative, or file name.",
    ],
  },
  {
    version: "v0.3.6",
    date: "July 7, 2026",
    highlights: [
      "Conversations now open scrolled to the newest message instead of jumping back to the oldest.",
    ],
  },
  {
    version: "v0.3.5",
    date: "July 7, 2026",
    highlights: [
      "Favorited folders now persist across restarts and updates — saved to a file in the app’s data folder instead of browser storage, with existing favorites migrated automatically.",
    ],
  },
  {
    version: "v0.3.4",
    date: "July 7, 2026",
    highlights: [
      "One tab per folder: reopening an already-open folder jumps to its existing tab instead of a duplicate — across Sessions, favorites, the + button, drag-and-drop, the sidebar, and the macOS New Session menu.",
      "The working-folder path at the top of a chat is now clickable — click it to reveal the folder in Finder.",
    ],
  },
  {
    version: "v0.3.3",
    date: "July 6, 2026",
    highlights: [
      "Fixed crash-on-launch on Apple Silicon: the in-app updater now clears the macOS quarantine flag from the downloaded DMG so the updated app opens cleanly past Gatekeeper.",
    ],
  },
  {
    version: "v0.3.2",
    date: "July 6, 2026",
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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const showcases = [
  {
    id: "chat",
    label: "Streaming Chat",
    title: "Natural conversation with your code",
    description:
      "Real-time streaming responses with markdown rendering, syntax-highlighted code blocks, and collapsible tool outputs. Smart auto-scroll keeps you focused.",
    mockup: "chat",
  },
  {
    id: "sessions",
    label: "Multi-Tab",
    title: "Parallel sessions, zero friction",
    description:
      "Each tab runs an independent Pi agent session with its own working directory, model, and context. Switch instantly without losing state.",
    mockup: "sessions",
  },
  {
    id: "extensions",
    label: "Extensions",
    title: "Extend with one click",
    description:
      "Browse the Pi package registry, install extensions and skills, and manage everything from a unified interface. No CLI needed.",
    mockup: "extensions",
  },
];

function ChatMockup() {
  return (
    <div className="space-y-4 p-6">
      {/* User message */}
      <div className="flex justify-end">
        <div className="bg-[#14b8a6]/15 border border-[#14b8a6]/20 rounded-2xl rounded-tr-md px-4 py-3 max-w-[75%]">
          <p className="text-sm text-[#f9f4eb]">
            Add error handling to the API routes and write tests
          </p>
        </div>
      </div>

      {/* AI response */}
      <div className="flex gap-3">
        <div className="w-7 h-7 rounded-full bg-[#14b8a6] flex items-center justify-center shrink-0 mt-0.5">
          <span className="text-[10px] font-bold text-[#f9f4eb]">π</span>
        </div>
        <div className="space-y-3 max-w-[85%]">
          <div className="bg-[#f9f4eb]/[0.04] border border-[#f9f4eb]/[0.06] rounded-2xl rounded-tl-md px-4 py-3">
            <p className="text-sm text-[#d6d1c9] leading-relaxed">
              I&apos;ll add comprehensive error handling and create tests for
              your API routes. Let me start by examining the current structure.
            </p>
          </div>
          <div className="bg-[#f9f4eb]/[0.03] border border-[#f9f4eb]/[0.04] rounded-xl px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-[#8f8a82] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] animate-pulse" />
              <span className="font-mono">reading src/api/routes.ts</span>
            </div>
            <div className="font-mono text-xs space-y-0.5 text-[#8f8a82]">
              <div>✓ Found 4 route handlers</div>
              <div>✓ Identified missing error boundaries</div>
            </div>
          </div>
          <div className="bg-[#f9f4eb]/[0.03] border border-[#f9f4eb]/[0.04] rounded-xl px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-[#8f8a82] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6]" />
              <span className="font-mono">edit src/api/routes.ts</span>
            </div>
            <div className="font-mono text-xs space-y-0.5">
              <div>
                <span className="text-red-400">-</span>{" "}
                <span className="text-[#76726b]">
                  app.get(&apos;/users&apos;, handler)
                </span>
              </div>
              <div>
                <span className="text-emerald-400">+</span>{" "}
                <span className="text-[#a8a39a]">
                  app.get(&apos;/users&apos;, asyncHandler(handler))
                </span>
              </div>
              <div>
                <span className="text-emerald-400">+</span>{" "}
                <span className="text-[#a8a39a]">
                  app.use(errorMiddleware)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SessionsMockup() {
  const tabs = [
    { name: "main.ts", active: true },
    { name: "api/auth.ts", active: false },
    { name: "tests/", active: false },
  ];

  return (
    <div className="p-6">
      {/* Tab bar */}
      <div className="flex gap-1 mb-6">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs transition-colors ${
              tab.active
                ? "bg-[#14b8a6]/15 border border-[#14b8a6]/20 text-[#5eead4]"
                : "bg-[#f9f4eb]/[0.03] border border-[#f9f4eb]/[0.04] text-[#8f8a82]"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                tab.active ? "bg-[#14b8a6] animate-pulse" : "bg-zinc-600"
              }`}
            />
            {tab.name}
          </div>
        ))}
      </div>

      {/* Session info cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          {
            model: "Claude Sonnet 5",
            cwd: "~/projects/app",
            tokens: "12.4k",
            cost: "$0.08",
          },
          {
            model: "GPT-5.5",
            cwd: "~/projects/api",
            tokens: "8.2k",
            cost: "$0.12",
          },
          {
            model: "MiMo v2.5",
            cwd: "~/projects/web",
            tokens: "15.1k",
            cost: "$0.03",
          },
        ].map((session, i) => (
          <div
            key={i}
            className={`rounded-xl border p-4 space-y-2 ${
              i === 0
                ? "border-[#14b8a6]/20 bg-[#14b8a6]/[0.05]"
                : "border-[#f9f4eb]/[0.06] bg-[#f9f4eb]/[0.02]"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#d6d1c9]">
                {session.model}
              </span>
              {i === 0 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#14b8a6]/20 text-[#5eead4]">
                  active
                </span>
              )}
            </div>
            <div className="text-[11px] text-[#8f8a82] font-mono truncate">
              {session.cwd}
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-[#76726b]">{session.tokens} tokens</span>
              <span className="text-[#8f8a82]">{session.cost}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExtensionsMockup() {
  const extensions = [
    {
      name: "pi-memory",
      desc: "Persistent memory across sessions",
      installed: true,
      icon: "🧠",
    },
    {
      name: "pi-subagents",
      desc: "Delegate work to child agents",
      installed: true,
      icon: "🤖",
    },
    {
      name: "pi-plan-mode",
      desc: "Codex-like plan before execute",
      installed: false,
      icon: "📋",
    },
    {
      name: "pi-web-access",
      desc: "Web search and content fetching",
      installed: true,
      icon: "🌐",
    },
  ];

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-medium text-[#d6d1c9]">
          Installed Packages
        </h4>
        <span className="text-xs text-[#8f8a82] font-mono">3 packages</span>
      </div>
      {extensions.map((ext) => (
        <div
          key={ext.name}
          className="flex items-center gap-4 rounded-xl border border-[#f9f4eb]/[0.06] bg-[#f9f4eb]/[0.02] p-4 hover:border-[#14b8a6]/30 transition-colors"
        >
          <span className="text-xl">{ext.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-mono font-medium text-[#e8e3da]">
                {ext.name}
              </span>
            </div>
            <p className="text-xs text-[#8f8a82] mt-0.5">{ext.desc}</p>
          </div>
          <button
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              ext.installed
                ? "bg-[#f9f4eb]/[0.06] text-[#a8a39a] hover:bg-red-500/10 hover:text-red-400"
                : "bg-[#14b8a6]/15 text-[#5eead4] hover:bg-[#14b8a6]/25"
            }`}
          >
            {ext.installed ? "Remove" : "Install"}
          </button>
        </div>
      ))}
    </div>
  );
}

export function AppShowcase() {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <section id="demo" className="relative py-28 bg-[#111313]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-[#f9f4eb]">
            See it in action
          </h2>
          <p className="text-lg text-[#a8a39a] max-w-2xl mx-auto">
            A desktop coding experience designed for flow state.
          </p>
        </motion.div>

        {/* Tab selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-[#f9f4eb]/[0.04] border border-[#f9f4eb]/[0.06] p-1 h-auto rounded-full">
              {showcases.map((s) => (
                <TabsTrigger
                  key={s.id}
                  value={s.id}
                  className="px-5 py-2.5 text-sm data-[state=active]:bg-[#14b8a6]/20 data-[state=active]:text-[#5eead4] data-[state=active]:shadow-none rounded-full text-[#a8a39a]"
                >
                  {s.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Showcase content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Description */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-[#f9f4eb] mb-2">
                  {showcases.find((s) => s.id === activeTab)?.title}
                </h3>
                <p className="text-sm text-[#a8a39a] max-w-lg mx-auto">
                  {showcases.find((s) => s.id === activeTab)?.description}
                </p>
              </div>

              {/* Mockup window */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-b from-[#14b8a6]/10 via-transparent to-transparent rounded-2xl blur-xl" />
                <div className="relative rounded-xl border border-[#f9f4eb]/[0.08] bg-[#202222] overflow-hidden shadow-2xl shadow-black/50 transition-transform duration-300 hover:scale-[1.01]">
                  {/* Title bar */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#f9f4eb]/[0.06] bg-[#252727]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-xs text-[#76726b] font-mono">
                        Pi Desktop — {activeTab}
                      </span>
                    </div>
                    <div className="w-[52px]" />
                  </div>

                  {/* Content */}
                  <div className="min-h-[340px]">
                    {activeTab === "chat" && <ChatMockup />}
                    {activeTab === "sessions" && <SessionsMockup />}
                    {activeTab === "extensions" && <ExtensionsMockup />}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

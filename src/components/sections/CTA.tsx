"use client";

import { motion } from "framer-motion";
import { Download, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#111313]">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#14b8a6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase tracking-tighter mb-6 text-[#f9f4eb]">
            Start coding
            <br />
            <span className="text-[#8f8a82]">with Pi today</span>
          </h2>
          <p className="text-lg text-[#a8a39a] max-w-xl mx-auto mb-10 leading-relaxed">
            Open source, MIT licensed, and ready for production. Download the
            app or install via the command line.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://github.com/rubengarciajr/pi-desktop/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
            >
              <span className="absolute inset-0 rounded-full bg-[#14b8a6]/30 blur-xl animate-pulse" />
              <Button
                size="lg"
                className="relative bg-[#14b8a6] hover:bg-[#0d9488] text-[#f9f4eb] font-semibold px-8 h-12 text-base gap-2 shadow-lg shadow-[#14b8a6]/20 hover:shadow-lg hover:shadow-[#14b8a6]/25 hover:-translate-y-0.5 transition-all duration-200 rounded-full"
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
                Star on GitHub
              </Button>
            </a>
          </div>

          {/* Install command */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 bg-[#181a1a] border border-[#f9f4eb]/[0.06] rounded-xl px-5 py-3"
          >
            <Terminal className="w-4 h-4 text-[#76726b]" />
            <code className="text-sm text-[#d6d1c9] font-mono">
              brew install rubengarciajr/tap/pi-desktop
            </code>
            <span className="text-xs text-[#76726b]">(coming soon)</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

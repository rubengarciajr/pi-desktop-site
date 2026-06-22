"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PiLogo } from "./PiLogo";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Extensions", href: "#extensions" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl"
    >
      <nav
        className={`relative flex flex-col border transition-all duration-300 overflow-hidden ${
          mobileOpen ? "rounded-2xl" : "rounded-full"
        } ${
          scrolled
            ? "bg-[#1a1c1c]/80 backdrop-blur-xl border-[#f9f4eb]/[0.08] shadow-2xl shadow-black/40"
            : "bg-[#1a1c1c]/60 backdrop-blur-md border-[#f9f4eb]/[0.06]"
        }`}
      >
        <div className="flex justify-between items-center h-12 px-2 relative">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 pl-3 group shrink-0">
            <PiLogo size={24} className="opacity-90 group-hover:opacity-100 transition-opacity shrink-0" />
            <span className="text-sm font-semibold tracking-tight text-[#f9f4eb] whitespace-nowrap">
              Pi Desktop
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 mx-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wide text-[#a8a39a] hover:text-[#f9f4eb] transition-colors rounded-full hover:bg-[#f9f4eb]/[0.06] whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-2 pr-1 shrink-0">
            <a
              href="https://github.com/rubengarciajr/pi-desktop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-[#a8a39a] hover:text-[#f9f4eb] gap-1.5 h-8 px-2.5 text-xs whitespace-nowrap"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </Button>
            </a>
            <a
              href="https://github.com/rubengarciajr/pi-desktop/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="bg-[#14b8a6] hover:bg-[#0d9488] text-[#1a1c1c] font-bold px-4 h-8 text-[11px] rounded-full uppercase tracking-wider whitespace-nowrap hover:shadow-lg hover:shadow-[#14b8a6]/25 hover:-translate-y-0.5 transition-all duration-200"
              >
                Download
              </Button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 mr-1 text-[#a8a39a] hover:text-[#f9f4eb]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-[#f9f4eb]/[0.06] overflow-hidden"
            >
              <div className="px-2 py-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-2.5 text-xs font-mono uppercase tracking-wide text-[#a8a39a] hover:text-[#f9f4eb] transition-colors rounded-full hover:bg-[#f9f4eb]/[0.04]"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex gap-2 mt-2 pt-3 border-t border-[#f9f4eb]/[0.06]">
                  <a
                    href="https://github.com/rubengarciajr/pi-desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-[#a8a39a] hover:text-[#f9f4eb] gap-2 text-xs"
                    >
                      GitHub
                    </Button>
                  </a>
                  <a
                    href="https://github.com/rubengarciajr/pi-desktop/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      className="w-full bg-[#14b8a6] hover:bg-[#0d9488] text-[#1a1c1c] rounded-full uppercase tracking-wide text-xs hover:shadow-lg hover:shadow-[#14b8a6]/25 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Download
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

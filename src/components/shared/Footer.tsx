"use client";

import { motion } from "framer-motion";
import { PiLogo } from "./PiLogo";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Extensions", href: "#extensions" },
    { label: "Download", href: "https://github.com/rubengarciajr/pi-desktop/releases/latest" },
    { label: "Changelog", href: "https://github.com/rubengarciajr/pi-desktop/releases" },
  ],
  Resources: [
    { label: "Documentation", href: "https://pi.dev" },
    { label: "Pi SDK", href: "https://pi.dev" },
    { label: "Extensions", href: "https://pi.dev" },
    { label: "Skills", href: "https://pi.dev" },
  ],
  Community: [
    { label: "GitHub", href: "https://github.com/rubengarciajr/pi-desktop" },
    { label: "Discussions", href: "https://github.com/rubengarciajr/pi-desktop/discussions" },
    { label: "Issues", href: "https://github.com/rubengarciajr/pi-desktop/issues" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#f9f4eb]/[0.06] bg-[#1a1c1c]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <PiLogo size={24} className="text-[#f9f4eb]" />
              <span className="text-base font-semibold text-[#f9f4eb]">Pi Desktop</span>
            </div>
            <p className="text-sm text-[#8f8a82] leading-relaxed max-w-xs">
              The native macOS desktop app for the Pi coding agent. Open source
              and MIT licensed.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/rubengarciajr/pi-desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8f8a82] hover:text-[#f9f4eb] transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="text-sm font-semibold text-[#f9f4eb] mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-[#8f8a82] hover:text-[#f9f4eb] transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#f9f4eb]/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#76726b]">
            &copy; {new Date().getFullYear()} Pi Desktop by Ruben Garcia Jr.
          </p>
          <p className="text-sm text-[#76726b]">
            Powered by{" "}
            <a
              href="https://pi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a8a39a] hover:text-[#f9f4eb] transition-colors"
            >
              Pi Coding Agent
            </a>{" "}
            by earendil-works
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

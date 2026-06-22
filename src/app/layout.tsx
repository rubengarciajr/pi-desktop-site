import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Pi Desktop — The Native Coding Agent for macOS",
  description:
    "A polished desktop GUI for the Pi coding agent. Multi-tab sessions, streaming chat, extensions, custom models, and GitHub integration. No CLI required.",
  keywords: [
    "Pi Desktop",
    "coding agent",
    "AI coding",
    "macOS app",
    "desktop IDE",
    "AI assistant",
    "code editor",
  ],
  openGraph: {
    title: "Pi Desktop — The Native Coding Agent for macOS",
    description:
      "Multi-tab AI sessions, streaming chat, extensions, custom models, and GitHub integration. Built with Electron, React, and the Pi SDK.",
    type: "website",
    url: "https://pi-desktop.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pi Desktop — The Native Coding Agent for macOS",
    description:
      "Multi-tab AI sessions, streaming chat, extensions, custom models, and GitHub integration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-[#f9f4eb]">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}

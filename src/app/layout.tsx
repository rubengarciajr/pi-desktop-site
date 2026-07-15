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
  metadataBase: new URL("https://pi-desktop.dev"),
  title: "Pi Desktop — The Native Coding Agent for macOS",
  description:
    "A polished, open-source desktop GUI for the Pi coding agent. Launches straight into chat with multi-tab sessions, convert-to-code, built-in web search, custom models, and GitHub integration. No CLI, no Node.js, no setup.",
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
      "Open source and native to macOS. Launches into chat, converts any conversation to a full project session, with built-in web search, multi-tab sessions, custom models, and GitHub integration.",
    type: "website",
    url: "https://pi-desktop.dev",
    siteName: "Pi Desktop",
    images: [
      {
        url: "/app-starting-screen.png",
        width: 1268,
        height: 848,
        alt: "Pi Desktop — a native macOS GUI for the Pi coding agent, shown at its opening chat screen.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pi Desktop — The Native Coding Agent for macOS",
    description:
      "Open source, native to macOS. Launches into chat, converts to code, built-in web search, multi-tab sessions, and GitHub integration.",
    images: ["/app-starting-screen.png"],
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

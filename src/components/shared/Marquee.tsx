"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: "slow" | "normal";
  direction?: "left" | "right";
}

export function Marquee({
  children,
  className,
  speed = "normal",
  direction = "left",
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "flex overflow-hidden whitespace-nowrap",
        direction === "right" && "flex-row-reverse",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-8",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

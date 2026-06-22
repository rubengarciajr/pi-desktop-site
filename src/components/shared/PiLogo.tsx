"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface PiLogoProps {
  className?: string;
  size?: number;
}

export function PiLogo({ className, size = 32 }: PiLogoProps) {
  return (
    <Image
      src="/pi-logo-on-dark.svg"
      alt="Pi Desktop"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      priority
    />
  );
}

"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BentoCardProps extends HTMLMotionProps<"article"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function BentoCard({ children, className, delay = 0, ...props }: BentoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative bg-[var(--bg-card)] editorial-border overflow-hidden transition-all duration-300 hover:bg-[var(--bg-card-elevated)]",
        className
      )}
      {...props}
    >
      <div className="relative z-10 h-full">{children}</div>
    </motion.article>
  );
}


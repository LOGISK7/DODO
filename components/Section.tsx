import React from "react";

type SectionProps = {
  children: React.ReactNode;
  tone?: "canvas" | "surface" | "dark";
  padding?: "normal" | "chapter";
  className?: string;
};

export function Section({
  children,
  tone = "canvas",
  padding = "normal",
  className = "",
}: SectionProps) {
  let bgColor = "bg-canvas text-ink";
  if (tone === "surface") {
    bgColor = "bg-surface text-ink";
  } else if (tone === "dark") {
    bgColor = "bg-dark text-surface";
  }

  // normal: 80px mobile / 112px desktop
  // chapter: 144px desktop (we will use 112px on mobile for chapter)
  let paddingClass = "py-[80px] lg:py-112";
  if (padding === "chapter") {
    paddingClass = "py-112 lg:py-144";
  }

  return (
    <section className={`${bgColor} ${paddingClass} ${className}`}>
      {children}
    </section>
  );
}

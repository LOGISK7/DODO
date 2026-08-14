import React from "react";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  // 12.5px/600/uppercase/.18em is handled by text-eyebrow token class
  return (
    <span className={`text-eyebrow text-[var(--gold-ink)] ${className}`}>
      {children}
    </span>
  );
}

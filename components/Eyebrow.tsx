import React from "react";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  const content = typeof children === "string" ? (
    children.split(/([a-zA-Z\-]+)/).map((part, i) => 
      /^[a-zA-Z\-]+$/.test(part) ? (
        <span key={i} className="uppercase tracking-[0.18em]" dir="ltr">{part}</span>
      ) : (
        <span key={i} className="tracking-[0] normal-case">{part}</span>
      )
    )
  ) : children;

  return (
    <span className={`text-[12.5px] font-[600] text-[var(--gold-ink)] ${className}`}>
      {content}
    </span>
  );
}

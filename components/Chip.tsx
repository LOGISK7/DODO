import React from "react";

type ChipProps = {
  // A chip must always contain a word, never color alone
  label: string;
  variant?: "neutral" | "win" | "lose" | "gold";
  className?: string;
};

export function Chip({ label, variant = "neutral", className = "" }: ChipProps) {
  // Base: 999px radius, 12.5px/600, 1px border, padding 4px 10px
  // In our tokens, 12.5px/600 is similar to text-eyebrow (but eyebrow has uppercase/letter-spacing).
  // We'll apply the specific font constraints directly or use text-[12.5px] font-semibold.
  const baseClass = "inline-flex items-center justify-center rounded-full border px-[10px] py-[4px] text-[12.5px] font-semibold leading-none";

  let variantClass = "";
  if (variant === "neutral") {
    variantClass = "border-[var(--line)] text-[var(--ink)] bg-transparent";
  } else if (variant === "win") {
    variantClass = "border-[var(--pos)] text-[var(--pos)] bg-transparent";
  } else if (variant === "lose") {
    variantClass = "border-[var(--neg)] text-[var(--neg)] bg-transparent";
  } else if (variant === "gold") {
    variantClass = "border-[var(--gold-soft)] bg-[var(--gold-soft)] text-[var(--gold-ink)]";
  }

  return (
    <span className={`${baseClass} ${variantClass} ${className}`}>
      {label}
    </span>
  );
}

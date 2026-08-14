import React from "react";

// In-memory store to keep track of placeholder instances for auditing.
// Note: In a real server-side rendered context, this might reset per request,
// but for static export/client-side, it's sufficient for a pre-launch check.
const placeholderInstances: Set<string> = new Set();

export function getPlaceholderInstances(): string[] {
  return Array.from(placeholderInstances);
}

type PlaceholderProps = {
  id: string;
  value?: string;
  className?: string;
};

export function Placeholder({ id, value = "XX", className = "" }: PlaceholderProps) {
  if (typeof window !== "undefined" || process.env.NODE_ENV !== "production") {
    placeholderInstances.add(id);
  }

  return (
    <span
      data-placeholder-id={id}
      className={`inline-flex items-center justify-center bg-[var(--surface-raised)] text-[var(--muted)] text-[14.5px] border border-dashed border-[var(--line)] px-2 py-0.5 rounded-[var(--r-sm)] font-bold ${className}`}
      dir="ltr"
    >
      [{value}]
    </span>
  );
}

import React, { ReactNode } from "react";

type SpecimenRow = {
  k: string;
  v: ReactNode;
};

type SpecimenCardProps = {
  label: string;
  rows: SpecimenRow[];
  footer?: ReactNode;
  elevated?: boolean;
  floating?: boolean;
  className?: string;
};

export function SpecimenCard({
  label,
  rows,
  footer,
  elevated = false,
  floating = false,
  className = "",
}: SpecimenCardProps) {
  let outerClass = "border border-[var(--line)] rounded-[14px] overflow-hidden ";
  
  if (elevated) {
    outerClass += "bg-[var(--surface-raised)] border-t-[var(--gold)] ";
  } else {
    outerClass += "bg-[var(--surface)] ";
  }

  if (floating) {
    outerClass += "shadow-[0_1px_2px_rgba(17,19,24,0.04),0_18px_44px_rgba(17,19,24,0.07)] ";
  }

  return (
    <div className={`${outerClass} flex flex-col ${className}`}>
      {/* Header bar */}
      <div className="flex h-[40px] items-center border-b border-[var(--line)] bg-[var(--surface-raised)] px-[16px]">
        {/* Leading 3 circles */}
        <div className="flex items-center gap-[6px] me-[12px]">
          <div className="h-[9px] w-[9px] rounded-full bg-[var(--line)]" />
          <div className="h-[9px] w-[9px] rounded-full bg-[var(--line)]" />
          <div className="h-[9px] w-[9px] rounded-full bg-[var(--line)]" />
        </div>
        {/* Label */}
        <div className="text-[11.5px] uppercase tracking-[0.1em] text-[var(--muted)] font-medium">
          {label}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col px-[16px]">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className={`flex items-start justify-between py-[11px] gap-[16px] ${
              idx !== rows.length - 1 ? "border-b border-[var(--line)]" : ""
            }`}
          >
            <div className="text-[14.5px] text-[var(--muted)] text-start shrink-0">
              {row.k}
            </div>
            <div className="text-[15px] font-semibold text-[var(--ink)] text-end min-w-0 break-words">
              {row.v}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      {footer && (
        <div className="p-[16px] pt-0">
          {footer}
        </div>
      )}
    </div>
  );
}

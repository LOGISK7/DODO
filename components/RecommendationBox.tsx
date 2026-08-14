import React from "react";

type RecommendationBoxProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

export function RecommendationBox({ label, children, className = "" }: RecommendationBoxProps) {
  // - --gold-soft background, 1px #E6D9BF border, 10px radius, 14px padding
  return (
    <div
      className={`bg-[var(--gold-soft)] border border-[#E6D9BF] rounded-[10px] p-[14px] ${className}`}
    >
      <div className="text-[var(--gold-ink)] uppercase text-[11px] font-semibold mb-1">
        {label}
      </div>
      <div className="text-[var(--ink)] text-[15px] font-medium leading-relaxed">
        {children}
      </div>
    </div>
  );
}

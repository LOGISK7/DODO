import React from "react";

type WrapProps = {
  children: React.ReactNode;
  className?: string;
};

export function Wrap({ children, className = "" }: WrapProps) {
  // max-width 1080px, gutters 20/28/40px responsive
  // Using arbitrary properties for exact gutters since they are not in the strict spacing scale
  return (
    <div
      className={`mx-auto w-full max-w-[var(--maxw)] px-[20px] sm:px-[28px] md:px-[40px] ${className}`}
    >
      {children}
    </div>
  );
}

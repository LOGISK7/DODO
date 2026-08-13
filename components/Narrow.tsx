import React from "react";

type NarrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Narrow({ children, className = "" }: NarrowProps) {
  // max-width 760px
  return (
    <div className={`mx-auto w-full max-w-[var(--narrow)] ${className}`}>
      {children}
    </div>
  );
}

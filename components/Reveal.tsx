"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  stagger?: number; // index for staggering, each step is 60ms
  className?: string;
};

export function Reveal({ children, stagger = 0, className = "" }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, []);

  const delay = stagger * 60;

  // We rely on standard Tailwind classes for reduced motion: `motion-reduce:translate-y-0`
  const baseClass = "transition-all duration-[320ms] ease-out";
  const stateClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-[8px] motion-reduce:translate-y-0";

  return (
    <div
      ref={ref}
      className={`${baseClass} ${stateClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

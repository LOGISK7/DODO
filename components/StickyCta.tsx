"use client";

import React, { useEffect, useState, useRef } from "react";
import { content } from "@/content/ar";
import { Button } from "./Button";

export function StickyCta() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // 1. Observe the hero section
    const heroEl = document.getElementById("hero-section");
    if (heroEl) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsHeroVisible(entry.isIntersecting);
        },
        { threshold: 0 }
      );
      observer.observe(heroEl);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    // 2. Track scroll direction for hiding/showing
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      
      if (!isHeroVisible) {
        if (scrollingDown) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHeroVisible]);

  // Layout: Fixed bottom, 64px (base height without safe area), mobile only
  const baseClass = "fixed bottom-0 left-0 right-0 z-40 hidden max-[899px]:flex flex-col items-center justify-center border-t border-[var(--line)] bg-[rgba(255,255,255,0.94)] px-[20px] pt-[12px] backdrop-blur transition-transform duration-300 ease-in-out";
  const visibilityClass = isVisible ? "translate-y-0" : "translate-y-full";
  
  // padding-bottom includes safe area spacing
  return (
    <div
      className={`${baseClass} ${visibilityClass}`}
      style={{ paddingBottom: "calc(12px + env(safe-area-inset-bottom))" }}
    >
      <div className="mb-[8px] text-[12.5px] text-[var(--muted)] text-center w-full">
        {content.stickyCta.microCopy}
      </div>
      <Button variant="primary" size="default" className="w-full">
        {content.stickyCta.ctaPrimary}
      </Button>
    </div>
  );
}

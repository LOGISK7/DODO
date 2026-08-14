import React from "react";
import { content } from "@/content/ar";
import { Button } from "./Button";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex h-[68px] items-center justify-between border-b border-[var(--line)] bg-[rgba(255,255,255,0.88)] px-[20px] backdrop-blur-[14px] md:px-[40px]">
      {/* Leading edge: Wordmark */}
      <div className="text-[19px] font-bold tracking-[-0.02em] text-[var(--ink)]" dir="ltr">
        {content.nav.logo}
      </div>

      {/* Center/Trailing: Anchor links (Desktop only) */}
      <div className="hidden min-[900px]:flex items-center gap-[32px] me-auto ms-[48px]">
        {content.nav.links.map((link, idx) => (
          <a
            key={idx}
            href={`#${link}`}
            className="text-[15px] font-medium text-[var(--ink-2)] transition-colors hover:text-[var(--ink)]"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Trailing: CTA Button */}
      <div className="flex shrink-0">
        <Button variant="primary" size="small" className="w-auto">
          {content.nav.cta}
        </Button>
      </div>
    </nav>
  );
}

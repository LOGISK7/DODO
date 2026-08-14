"use client";

import React, { useState } from "react";
import { offer } from "@/content/ar-offer";
import { 
  formatDZD, 
  PRICE_ANNUAL, 
  PRICE_MONTHLY, 
  FAILED_CREATIVE_COST, 
  CTA_TARGET 
} from "@/config/offer";
import { Button } from "@/components/Button";
import { Placeholder } from "@/components/Placeholder";

export function BuyBox() {
  const [billing, setBilling] = useState<"annual" | "monthly">("annual");
  const isAnnual = billing === "annual";

  return (
    <div className="bg-[var(--surface)] border border-[var(--line)] rounded-[var(--r-lg)] p-[24px] w-full">
      {/* Segmented Toggle */}
      <div 
        role="radiogroup" 
        className="flex p-[4px] border border-[var(--line)] rounded-full mb-[24px]"
      >
        <button
          role="radio"
          aria-checked={isAnnual}
          onClick={() => setBilling("annual")}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
              e.preventDefault();
              setBilling(isAnnual ? "monthly" : "annual");
            }
          }}
          className={`flex-1 text-center py-[8px] rounded-full text-[14.5px] font-[600] transition-colors duration-[140ms] ease-[cubic-bezier(.2,.8,.2,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-cta)] ${
            isAnnual 
              ? "bg-[var(--ink)] text-[var(--surface)]" 
              : "bg-transparent text-[var(--ink-2)] hover:text-[var(--ink)]"
          }`}
        >
          {offer.buyBox.annualLabel}
        </button>
        <button
          role="radio"
          aria-checked={!isAnnual}
          onClick={() => setBilling("monthly")}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
              e.preventDefault();
              setBilling(!isAnnual ? "annual" : "monthly");
            }
          }}
          className={`flex-1 text-center py-[8px] rounded-full text-[14.5px] font-[600] transition-colors duration-[140ms] ease-[cubic-bezier(.2,.8,.2,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-cta)] ${
            !isAnnual 
              ? "bg-[var(--ink)] text-[var(--surface)]" 
              : "bg-transparent text-[var(--ink-2)] hover:text-[var(--ink)]"
          }`}
        >
          {offer.buyBox.monthlyLabel}
        </button>
      </div>

      {/* Price Display */}
      <div className="flex flex-col mb-[16px] min-h-[130px] justify-start items-center">
        <div className="text-[19px] text-[var(--muted)] font-[600] line-through decoration-[var(--neg)] decoration-2 mb-[4px]">
          {isAnnual ? formatDZD(PRICE_ANNUAL * 3) : formatDZD(PRICE_MONTHLY * 3)}
        </div>
        <div className="text-[clamp(34px,5vw,52px)] font-[700] text-[var(--ink)] num leading-[1.1]">
          {isAnnual ? formatDZD(PRICE_ANNUAL) : formatDZD(PRICE_MONTHLY)}
        </div>
        <div className="text-[16px] text-[var(--ink)] font-[700] bg-[var(--gold)] px-[12px] py-[4px] rounded-[var(--r-sm)] mt-[8px]">
          وفر {isAnnual ? formatDZD(PRICE_ANNUAL * 2) : formatDZD(PRICE_MONTHLY * 2)} (66%)
        </div>
      </div>

      {/* Anchor Line */}
      <div className="text-[14.5px] text-[var(--muted)] mb-[24px]">
        {offer.buyBox.anchorPrefix} {formatDZD(FAILED_CREATIVE_COST)}
      </div>

      {/* Button */}
      <Button 
        variant="gold" 
        className="w-full !w-full mb-[12px]" 
        onClick={() => window.location.href = CTA_TARGET}
      >
        {offer.cta.primary}
      </Button>

      {/* Payment info */}
      <div className="text-[14.5px] text-[var(--muted)] text-center mb-[16px]">
        {offer.cta.payment}
      </div>

      {/* Seats */}
      <div className="text-[14.5px] text-[var(--ink)] flex items-center justify-center gap-[8px]">
        <Placeholder id="seats" /> <span>{offer.cta.seats}</span>
      </div>
    </div>
  );
}

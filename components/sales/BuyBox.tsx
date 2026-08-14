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
      <div className="flex flex-col mb-[12px] min-h-[90px] justify-start">
        <div className="text-[clamp(30px,4.4vw,46px)] font-[700] text-[var(--ink)] num leading-[1.2]">
          {isAnnual ? formatDZD(PRICE_ANNUAL) : formatDZD(PRICE_MONTHLY)}
          <span className="text-[17px] text-[var(--muted)] font-[400] ms-[8px]">
            {isAnnual ? "/ سنة" : "/ شهر"}
          </span>
        </div>
        <div className={`text-[14.5px] text-[var(--gold-ink)] font-[600] mt-[4px] ${isAnnual ? "visible" : "invisible"}`}>
          {offer.buyBox.annualSub}
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

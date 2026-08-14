import React from "react";
import { offer } from "@/content/ar-offer";
import { Wrap } from "@/components/Wrap";
import { Eyebrow } from "@/components/Eyebrow";
import { Placeholder } from "@/components/Placeholder";
import { BuyBox } from "@/components/sales/BuyBox";

export function HeroHeadline() {
  return (
    <section className="bg-[var(--canvas)] pt-[80px] pb-[80px] min-[1000px]:pt-[112px] min-[1000px]:pb-[112px]">
      <Wrap>
        <div className="flex flex-col gap-[64px] min-[1000px]:grid min-[1000px]:grid-cols-[1.05fr_0.95fr] min-[1000px]:gap-x-[64px] min-[1000px]:gap-y-[32px] items-center">
          
          {/* TEXT COLUMN */}
          <div className="flex flex-col items-start w-full min-[1000px]:col-start-1 min-[1000px]:row-start-1 min-[1000px]:row-span-2">
            <Eyebrow>{offer.hero.eyebrow}</Eyebrow>
            <div className="text-h3 text-[var(--muted)] my-[16px]" dir="ltr">
              {offer.hero.wordmark}
            </div>
            <h1 className="text-h1 text-[var(--ink)]">
              <span className="max-[699px]:block max-[699px]:mb-[12px]">{offer.hero.headlineClauses[0]}</span>
              <span className="text-[var(--gold)] max-[699px]:hidden">… </span>
              <span className="max-[699px]:block max-[699px]:mb-[12px]">{offer.hero.headlineClauses[1]}</span>
              <span className="text-[var(--gold)] max-[699px]:hidden">… </span>
              <span className="max-[699px]:block">{offer.hero.headlineClauses[2]}</span>
            </h1>
          </div>

          {/* BUY BOX */}
          <div className="w-full min-[1000px]:col-start-2 min-[1000px]:row-start-2">
            <BuyBox />
          </div>

          {/* VISUAL COLUMN */}
          <div className="w-full min-[1000px]:col-start-2 min-[1000px]:row-start-1">
            <div className="bg-[var(--surface)] border border-[var(--line)] rounded-[var(--r-lg)] w-full overflow-hidden max-[999px]:shadow-none min-[1000px]:shadow-[0_1px_2px_rgba(17,19,24,.04),0_18px_44px_rgba(17,19,24,.07)]">
              <div className="p-[24px]">
                <div className="text-eyebrow num text-[var(--muted)] mb-[24px]" dir="ltr">
                  TEST #024
                </div>
                <div className="flex flex-col divide-y divide-[var(--line)]">
                  {["الفرضية", "المتغيّر", "Control", "Challenger"].map((label, i) => (
                    <div key={i} className="flex justify-between items-center py-[16px]">
                      <span className="text-small text-[var(--muted)]">{label}</span>
                      <span className="text-body text-[var(--ink)]">
                        <Placeholder id={`test-val-${i}`} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-[24px] pb-[24px]">
                <div className="bg-[var(--gold-soft)] border border-[#E6D9BF] rounded-[10px] p-[16px]">
                  <div className="text-eyebrow text-[var(--gold-ink)] mb-[8px]" dir="ltr">
                    NEXT TEST
                  </div>
                  <Placeholder id="next-test" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </Wrap>
    </section>
  );
}

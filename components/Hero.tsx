import React from "react";
import { content } from "@/content/ar";
import { Section } from "./Section";
import { Wrap } from "./Wrap";
import { Eyebrow } from "./Eyebrow";
import { Button } from "./Button";
import { SpecimenCard } from "./SpecimenCard";
import { RecommendationBox } from "./RecommendationBox";
import { Chip } from "./Chip";
import { Placeholder } from "./Placeholder";

export function Hero() {
  return (
    <Section tone="canvas" className="pt-[104px] pb-0 lg:py-112" padding="normal">
      <Wrap>
        <div
          id="hero-section"
          className="grid grid-cols-1 items-center gap-[64px] lg:grid-cols-[1.05fr_0.95fr]"
        >
          {/* Text Column (Leading Edge - Right in RTL) */}
          <div className="flex flex-col items-start justify-center text-start">
            <Eyebrow className="mb-[24px]">{content.hero.eyebrow}</Eyebrow>
            
            <h1 className="text-h1 mb-[24px] flex flex-col gap-2">
              <span className="text-[var(--ink)]">{content.hero.headlineA.line1}</span>
              <span className="text-[var(--muted)] font-semibold">{content.hero.headlineA.line2}</span>
            </h1>
            
            <p className="text-lead mb-[48px] text-[var(--ink)] max-w-[600px]">
              {content.hero.lead}
            </p>
            
            <div className="flex flex-col w-full gap-[16px] mb-[24px] md:flex-row md:items-center md:w-auto">
              <Button variant="primary" size="default">
                {content.hero.ctaPrimary}
              </Button>
              <Button variant="ghost" size="default">
                {content.hero.ctaGhost}
              </Button>
            </div>
            
            <div className="text-[14.5px] text-[var(--muted)] mb-[48px] text-center md:text-start w-full md:w-auto">
              {content.hero.microCopy}
            </div>
            
            {/* Trust bar */}
            <div className="flex flex-wrap items-center gap-[16px] text-small font-medium text-[var(--ink-2)] border-t border-[var(--line)] pt-[24px]">
              <Placeholder id="trust-1" value="بيانات" />
              <div className="h-[5px] w-[5px] rounded-full bg-[var(--gold)]" />
              <Placeholder id="trust-2" value="بيانات" />
              <div className="h-[5px] w-[5px] rounded-full bg-[var(--gold)]" />
              <Placeholder id="trust-3" value="بيانات" />
            </div>
          </div>

          {/* Visual Column (Trailing Edge - Left in RTL) */}
          <div className="flex justify-center lg:justify-end w-full">
            <SpecimenCard
              className="w-full max-w-[500px]"
              label="TEST #024"
              floating={true}
              rows={[
                { k: "الفرضية", v: "الزاوية المبنية على الوجع تتفوق على زاوية الفائدة" },
                { k: "المتغيّر", v: "الزاوية الإعلانية (وحدها)" },
                { k: "ثابت", v: "نفس المنتج · نفس الجمهور · نفس الميزانية" },
                { 
                  k: "Control", 
                  v: <div className="flex items-center gap-3">CPO 1 240 دج <Chip label="خاسر" variant="lose" /></div>
                },
                { 
                  k: "Challenger", 
                  v: <div className="flex items-center gap-3">CPO 780 دج <Chip label="رابح" variant="win" /></div>
                },
                { k: "Hook rate 3s", v: "31.4%" },
              ]}
              footer={
                <RecommendationBox label="NEXT TEST">
                  صوّر 3 نسخ من نفس الزاوية بافتتاحيات مختلفة. ثبّت السكريبت وبدّل أول 3 ثواني فقط.
                </RecommendationBox>
              }
            />
          </div>
        </div>
      </Wrap>
    </Section>
  );
}

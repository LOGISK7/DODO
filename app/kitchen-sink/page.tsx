import { Metadata } from "next";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";
import { Eyebrow } from "@/components/Eyebrow";
import { RecommendationBox } from "@/components/RecommendationBox";
import { SpecimenCard } from "@/components/SpecimenCard";
import { Reveal } from "@/components/Reveal";
import { Placeholder, getPlaceholderInstances } from "@/components/Placeholder";
import { Section } from "@/components/Section";
import { Wrap } from "@/components/Wrap";
import { Narrow } from "@/components/Narrow";

export const metadata: Metadata = {
  title: "UI Kitchen Sink",
  robots: {
    index: false,
    follow: false,
  },
};

export default function KitchenSinkPage() {
  const specimenRows = [
    { k: "المتغير الأول", v: "قيمة تجريبية" },
    { k: "الحالة", v: <Chip label="رابح" variant="win" /> },
    { k: "ملاحظات", v: "نص طويل جداً لاختبار الالتفاف في الشاشات الصغيرة والتأكد من أن التصميم سليم ولا يتجاوز الحدود." },
    { k: "تأكيد", v: <Placeholder id="test-placeholder" value="بيانات" /> },
  ];

  return (
    <main className="min-h-screen bg-[var(--canvas)] pb-[100px]">
      <Section tone="canvas" padding="normal">
        <Wrap>
          <div className="mb-12">
            <h1 className="text-h1 mb-4">UI Atoms & Primitives QA</h1>
            <p className="text-lead text-[var(--muted)]">
              This page displays all base components in their various states.
            </p>
          </div>

          <div className="flex flex-col gap-[64px]">
            {/* Buttons */}
            <div className="space-y-[24px]">
              <h2 className="text-h2 border-b border-[var(--line)] pb-4">1. Buttons</h2>
              
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <Button variant="primary" size="default">الزر الأساسي - افتراضي</Button>
                <Button variant="primary" size="small">الزر الأساسي - صغير</Button>
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-center p-4 bg-[var(--surface-raised)] rounded-[var(--r-sm)] border border-[var(--line)]">
                <Button variant="gold" size="default">الزر الذهبي - افتراضي</Button>
                <Button variant="gold" size="small">الزر الذهبي - صغير</Button>
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <Button variant="ghost" size="default">الزر الشفاف - افتراضي</Button>
                <Button variant="ghost" size="small">الزر الشفاف - صغير</Button>
              </div>
            </div>

            {/* Chips */}
            <div className="space-y-[24px]">
              <h2 className="text-h2 border-b border-[var(--line)] pb-4">2. Chips</h2>
              
              <div className="flex flex-wrap gap-4 items-center">
                <Chip label="محايد" variant="neutral" />
                <Chip label="رابح" variant="win" />
                <Chip label="خاسر" variant="lose" />
                <Chip label="ذهبي" variant="gold" />
              </div>
            </div>

            {/* Typography & Eyebrow */}
            <div className="space-y-[24px]">
              <h2 className="text-h2 border-b border-[var(--line)] pb-4">3. Typography & Eyebrow</h2>
              
              <div className="flex flex-col gap-4">
                <div className="p-4 bg-[var(--surface)] border border-[var(--line)] rounded-[var(--r-sm)] space-y-4">
                  <div>
                    <span className="text-small text-[var(--muted)] inline-block w-[100px]">h1</span>
                    <span className="text-h1">العنوان الرئيسي 1</span>
                  </div>
                  <div>
                    <span className="text-small text-[var(--muted)] inline-block w-[100px]">h2</span>
                    <span className="text-h2">العنوان الرئيسي 2</span>
                  </div>
                  <div>
                    <span className="text-small text-[var(--muted)] inline-block w-[100px]">h3</span>
                    <span className="text-h3">العنوان الرئيسي 3</span>
                  </div>
                  <div>
                    <span className="text-small text-[var(--muted)] inline-block w-[100px]">lead</span>
                    <span className="text-lead">الفقرة التمهيدية (Lead text)</span>
                  </div>
                  <div>
                    <span className="text-small text-[var(--muted)] inline-block w-[100px]">body</span>
                    <span className="text-body">النص الأساسي (Body text)</span>
                  </div>
                  <div>
                    <span className="text-small text-[var(--muted)] inline-block w-[100px]">small</span>
                    <span className="text-small">النص الصغير (Small text)</span>
                  </div>
                </div>

                <div>
                  <Eyebrow>الخطوة التالية</Eyebrow>
                </div>
                <div>
                  <Placeholder id="example-2" value="بيانات غير مؤكدة" />
                </div>
              </div>
            </div>

            {/* SpecimenCard & RecommendationBox */}
            <div className="space-y-[24px]">
              <h2 className="text-h2 border-b border-[var(--line)] pb-4">4. Cards & Boxes</h2>
              
              <Narrow className="space-y-[32px] mx-0">
                <div>
                  <h3 className="text-h3 mb-4">Default SpecimenCard</h3>
                  <SpecimenCard
                    label="عينة تجريبية"
                    rows={specimenRows}
                  />
                </div>

                <div>
                  <h3 className="text-h3 mb-4">Elevated SpecimenCard</h3>
                  <SpecimenCard
                    label="عينة مرتفعة"
                    rows={specimenRows}
                    elevated
                  />
                </div>

                <div>
                  <h3 className="text-h3 mb-4">Floating SpecimenCard (w/ Footer)</h3>
                  <SpecimenCard
                    label="عينة طافية"
                    rows={specimenRows}
                    floating
                    footer={
                      <RecommendationBox label="توصية النظام">
                        يجب تحسين هذا المؤشر بنسبة 20% للوصول إلى المستهدف.
                      </RecommendationBox>
                    }
                  />
                </div>
              </Narrow>
            </div>

            {/* Reveal Animation */}
            <div className="space-y-[24px]">
              <h2 className="text-h2 border-b border-[var(--line)] pb-4">5. Animations (Reveal)</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Reveal stagger={0}>
                  <div className="h-[100px] bg-[var(--surface-raised)] border border-[var(--line)] rounded-[var(--r-sm)] flex items-center justify-center">
                    Element 1 (stagger: 0)
                  </div>
                </Reveal>
                <Reveal stagger={1}>
                  <div className="h-[100px] bg-[var(--surface-raised)] border border-[var(--line)] rounded-[var(--r-sm)] flex items-center justify-center">
                    Element 2 (stagger: 1)
                  </div>
                </Reveal>
                <Reveal stagger={2}>
                  <div className="h-[100px] bg-[var(--surface-raised)] border border-[var(--line)] rounded-[var(--r-sm)] flex items-center justify-center">
                    Element 3 (stagger: 2)
                  </div>
                </Reveal>
              </div>
            </div>

          </div>
        </Wrap>
      </Section>
    </main>
  );
}

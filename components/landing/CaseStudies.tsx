import { caseStudies } from "@/content/caseStudies";

export default function CaseStudies() {
  return (
    <section className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <h2 className="section-title reveal" style={{ fontFamily: "var(--font-heading)" }}>
          دراسات <span style={{ color: "var(--accent)" }}>حالة</span>
        </h2>
        <p className="section-subtitle reveal">
          كيف يعمل النظام في الواقع — من المنتج إلى النتيجة.
        </p>

        <div className="space-y-6 mt-12 reveal-stagger">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.id}
              className="reveal rounded-sm overflow-hidden"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="p-6 md:p-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <span
                    className="text-xs font-bold tracking-wider px-3 py-1 rounded-sm"
                    style={{
                      background: "var(--accent-muted)",
                      color: "var(--accent)",
                      fontFamily: "var(--font-heading)",
                      border: "1px solid var(--border-accent)",
                    }}
                  >
                    دراسة حالة #{i + 1}
                  </span>
                </div>

                {/* Flow grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { label: "المنتج", value: cs.product, icon: "📦" },
                    { label: "المشكلة", value: cs.problem, icon: "❌" },
                    { label: "ماذا اختبرنا", value: cs.whatWeTested, icon: "🧪" },
                    { label: "ماذا تعلمنا", value: cs.whatWeLearned, icon: "🧠" },
                    { label: "ماذا اختبرنا بعد ذلك", value: cs.whatWeTestedNext, icon: "🔄" },
                    { label: "النتيجة", value: cs.result, icon: "📊" },
                  ].map((field) => (
                    <div
                      key={field.label}
                      className="p-4 rounded-sm"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-base">{field.icon}</span>
                        <span
                          className="text-xs font-bold tracking-wider"
                          style={{ color: "var(--accent)", fontFamily: "var(--font-heading)" }}
                        >
                          {field.label}
                        </span>
                      </div>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        {field.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-8">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            ⚠️ دراسات الحالة المعروضة هي من عملاء حقيقيين. ستُحدَّث بانتظام.
          </p>
        </div>
      </div>
    </section>
  );
}

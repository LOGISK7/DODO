export default function WhyDifferent() {
  const genericFlow = ["Prompt", "Answer", "Done"];
  const ourFlow = [
    "Research",
    "Strategy",
    "Creative",
    "Test",
    "Analysis",
    "Learning",
    "Next Creative",
    "Test Again",
  ];

  return (
    <section className="section" style={{ background: "var(--bg-tertiary)" }}>
      <div className="container">
        <h2 className="section-title reveal" style={{ fontFamily: "var(--font-heading)" }}>
          لماذا هذا <span style={{ color: "var(--accent)" }}>مختلف</span>؟
        </h2>
        <p className="section-subtitle reveal">
          الفرق بين Prompt Pack ونظام كامل هو نفس الفرق بين وصفة وبين مطبخ.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto mt-12">
          {/* Generic Prompt Pack */}
          <div
            className="reveal rounded-sm p-6 md:p-8"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <h3
              className="text-lg font-bold mb-6 flex items-center gap-2"
              style={{ fontFamily: "var(--font-heading)", color: "#ef4444" }}
            >
              <span
                className="w-8 h-8 rounded-sm flex items-center justify-center text-xs"
                style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}
              >
                ✕
              </span>
              Generic Prompt Pack
            </h3>

            <div className="flex flex-col items-center gap-2">
              {genericFlow.map((step, i) => (
                <div key={step}>
                  <div
                    className="px-6 py-3 rounded-sm text-sm font-semibold text-center"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border)",
                      color: "var(--text-muted)",
                      minWidth: 160,
                    }}
                  >
                    {step}
                  </div>
                  {i < genericFlow.length - 1 && (
                    <div className="flex justify-center py-1">
                      <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
                        <path d="M6 0v12M2 8l4 4 4-4" stroke="var(--text-muted)" strokeWidth="1" opacity="0.3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p
              className="text-center text-sm mt-6 pt-4"
              style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}
            >
              3 خطوات. بدون تعلم. بدون تحسين.
            </p>
          </div>

          {/* Our System */}
          <div
            className="reveal rounded-sm p-6 md:p-8"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-accent)",
              boxShadow: "0 0 40px rgba(212, 168, 67, 0.04)",
            }}
          >
            <h3
              className="text-lg font-bold mb-6 flex items-center gap-2"
              style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
            >
              <span
                className="w-8 h-8 rounded-sm flex items-center justify-center text-xs"
                style={{ background: "var(--accent-muted)", border: "1px solid var(--border-accent)" }}
              >
                ✓
              </span>
              نظامنا
            </h3>

            <div className="flex flex-col items-center gap-2">
              {ourFlow.map((step, i) => (
                <div key={step}>
                  <div
                    className="px-6 py-3 rounded-sm text-sm font-semibold text-center"
                    style={{
                      background: i === ourFlow.length - 1 ? "var(--accent-muted)" : "rgba(255,255,255,0.03)",
                      border: `1px solid ${i === ourFlow.length - 1 ? "var(--border-accent)" : "var(--border)"}`,
                      color: i === ourFlow.length - 1 ? "var(--accent)" : "var(--text-primary)",
                      minWidth: 160,
                    }}
                  >
                    {step}
                  </div>
                  {i < ourFlow.length - 1 && (
                    <div className="flex justify-center py-1">
                      <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
                        <path d="M6 0v12M2 8l4 4 4-4" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p
              className="text-center text-sm mt-6 pt-4 font-semibold"
              style={{ color: "var(--accent)", borderTop: "1px solid var(--border-accent)" }}
            >
              ↑ دورة مستمرة — كل اختبار يبني على اللي قبله ↑
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AIDifferentiation() {
  return (
    <section className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <h2 className="section-title reveal" style={{ fontFamily: "var(--font-heading)" }}>
          الـ AI هو <span style={{ color: "var(--accent)" }}>المحرك</span>. النظام هو{" "}
          <span style={{ color: "var(--accent)" }}>المنهجية</span>.
        </h2>
        <p className="section-subtitle reveal">
          الفرق ليس في استخدام الـ AI. الفرق في كيف تستخدمه.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto mt-12">
          {/* Generic AI */}
          <div
            className="reveal rounded-sm p-6 md:p-8"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center text-sm"
                style={{
                  background: "rgba(239, 68, 68, 0.1)",
                  color: "#ef4444",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                }}
              >
                ✕
              </div>
              <h3
                className="text-lg font-bold"
                style={{ fontFamily: "var(--font-heading)", color: "#ef4444" }}
              >
                Generic AI
              </h3>
            </div>

            <div
              className="rounded-sm p-5 mb-4"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="text-sm font-mono leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                &ldquo;اكتب لي 50 إعلاناً لهذا المنتج.&rdquo;
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span style={{ color: "#ef4444", flexShrink: 0 }}>✕</span>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  بدون فهم العميل
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span style={{ color: "#ef4444", flexShrink: 0 }}>✕</span>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  بدون استراتيجية
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span style={{ color: "#ef4444", flexShrink: 0 }}>✕</span>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  بدون تعلم من النتائج
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span style={{ color: "#ef4444", flexShrink: 0 }}>✕</span>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  كل مرة تبدأ من الصفر
                </span>
              </div>
            </div>
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
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center text-sm"
                style={{
                  background: "var(--accent-muted)",
                  color: "var(--accent)",
                  border: "1px solid var(--border-accent)",
                }}
              >
                ✓
              </div>
              <h3
                className="text-lg font-bold"
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
              >
                نظامنا
              </h3>
            </div>

            <div
              className="rounded-sm p-5 mb-4"
              style={{
                background: "var(--accent-muted)",
                border: "1px solid var(--border-accent)",
              }}
            >
              <p
                className="text-sm font-mono leading-relaxed"
                style={{ color: "var(--accent)" }}
              >
                &ldquo;بناءً على المنتج والعميل والـ Angle والـ Hook ونتائج الاختبارات السابقة، ماذا يجب أن أختبر الآن؟&rdquo;
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span style={{ color: "#22c55e", flexShrink: 0 }}>✓</span>
                <span className="text-sm" style={{ color: "var(--text-primary)" }}>
                  مبني على بحث حقيقي عن العميل
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span style={{ color: "#22c55e", flexShrink: 0 }}>✓</span>
                <span className="text-sm" style={{ color: "var(--text-primary)" }}>
                  استراتيجية واضحة قبل أي Creative
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span style={{ color: "#22c55e", flexShrink: 0 }}>✓</span>
                <span className="text-sm" style={{ color: "var(--text-primary)" }}>
                  يتعلم من كل اختبار
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span style={{ color: "#22c55e", flexShrink: 0 }}>✓</span>
                <span className="text-sm" style={{ color: "var(--text-primary)" }}>
                  كل دورة تبني على اللي قبلها
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

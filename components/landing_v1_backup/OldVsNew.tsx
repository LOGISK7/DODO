export default function OldVsNew() {
  const oldWay = [
    { step: "فكرة عشوائية", icon: "💭" },
    { step: "Creative عشوائي", icon: "🎨" },
    { step: "إعلان", icon: "📢" },
    { step: "إنفاق", icon: "💸" },
    { step: "نتيجة", icon: "📉" },
    { step: "تخمين", icon: "🤷" },
    { step: "Creative جديد", icon: "🔁" },
  ];

  const newWay = [
    { step: "Research", icon: "🔍" },
    { step: "Strategy", icon: "🎯" },
    { step: "Creative", icon: "🎬" },
    { step: "Testing", icon: "🧪" },
    { step: "Analysis", icon: "📊" },
    { step: "Learning", icon: "🧠" },
    { step: "Next Test", icon: "🚀" },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title reveal" style={{ fontFamily: "var(--font-heading)" }}>
          الفرق بين <span style={{ color: "var(--accent)" }}>النظام</span> والتخمين
        </h2>
        <p className="section-subtitle reveal">
          الطريقة القديمة تعتمد على الحظ. الطريقة الجديدة تعتمد على البيانات والمنهجية.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Old Way */}
          <div className="reveal" style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
          }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-sm flex items-center justify-center text-sm font-bold"
                style={{ background: "rgba(239, 68, 68, 0.12)", color: "#ef4444", border: "1px solid rgba(239, 68, 68, 0.2)" }}>
                ✕
              </div>
              <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)", color: "#ef4444" }}>
                الطريقة القديمة
              </h3>
            </div>
            <div className="space-y-1">
              {oldWay.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 py-3 px-4 rounded-sm"
                    style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-base font-medium" style={{ color: "var(--text-secondary)" }}>{item.step}</span>
                  </div>
                  {i < oldWay.length - 1 && (
                    <div className="flex justify-center py-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" style={{ opacity: 0.4 }}>
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 text-center text-sm font-semibold"
              style={{ borderTop: "1px solid var(--border)", color: "#ef4444" }}>
              ← تكرار بدون تعلم ←
            </div>
          </div>

          {/* New Way */}
          <div className="reveal" style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-accent)",
            borderRadius: "var(--radius-md)",
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
            boxShadow: "0 0 40px rgba(212, 168, 67, 0.04)",
          }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-sm flex items-center justify-center text-sm font-bold"
                style={{ background: "var(--accent-muted)", color: "var(--accent)", border: "1px solid var(--border-accent)" }}>
                ✓
              </div>
              <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}>
                الطريقة الجديدة
              </h3>
            </div>
            <div className="space-y-1">
              {newWay.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 py-3 px-4 rounded-sm"
                    style={{ background: i % 2 === 0 ? "var(--accent-muted)" : "transparent" }}>
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>{item.step}</span>
                  </div>
                  {i < newWay.length - 1 && (
                    <div className="flex justify-center py-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" style={{ opacity: 0.5 }}>
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 text-center text-sm font-semibold"
              style={{ borderTop: "1px solid var(--border-accent)", color: "var(--accent)" }}>
              ↑ كل دورة تبني على اللي قبلها ↑
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

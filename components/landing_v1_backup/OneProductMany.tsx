export default function OneProductMany() {
  const branches = [
    { label: "مشاكل العميل", icon: "😤", count: "5+" },
    { label: "رغبات العميل", icon: "✨", count: "5+" },
    { label: "اعتراضات", icon: "🤔", count: "5+" },
  ];

  const outputs = [
    { label: "Angles", icon: "🎯" },
    { label: "Hooks", icon: "🪝" },
    { label: "Concepts", icon: "💡" },
    { label: "Scripts", icon: "📝" },
    { label: "Variations", icon: "🔀" },
  ];

  return (
    <section className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <h2 className="section-title reveal" style={{ fontFamily: "var(--font-heading)" }}>
          منتج <span style={{ color: "var(--accent)" }}>واحد</span> → Creatives{" "}
          <span style={{ color: "var(--accent)" }}>كثيرة</span>
        </h2>
        <p className="section-subtitle reveal">
          النظام يأخذ منتج واحد ويحوّله إلى عشرات الـ Creatives المختلفة — كل واحد مبني على زاوية وHook مختلف.
        </p>

        <div className="max-w-[900px] mx-auto mt-12">
          {/* Product origin */}
          <div className="reveal flex justify-center mb-8">
            <div
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold"
              style={{
                background: "var(--accent-muted)",
                border: "1px solid var(--border-accent)",
                borderRadius: "var(--radius-md)",
                fontFamily: "var(--font-heading)",
                color: "var(--accent)",
              }}
            >
              <span className="text-2xl">📦</span>
              منتج واحد
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center mb-8 reveal">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <path d="M12 0v36M4 28l8 8 8-8" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Research branches */}
          <div className="grid grid-cols-3 gap-4 mb-8 reveal-stagger">
            {branches.map((b) => (
              <div
                key={b.label}
                className="reveal card flex flex-col items-center text-center py-6 gap-2"
              >
                <span className="text-2xl">{b.icon}</span>
                <span className="text-sm font-bold" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                  {b.label}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-sm" style={{ background: "var(--accent-muted)", color: "var(--accent)" }}>
                  {b.count}
                </span>
              </div>
            ))}
          </div>

          {/* Arrow down */}
          <div className="flex justify-center mb-8 reveal">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <path d="M12 0v36M4 28l8 8 8-8" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Creative outputs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 reveal-stagger">
            {outputs.map((o) => (
              <div
                key={o.label}
                className="reveal flex flex-col items-center gap-2 py-5 px-3 rounded-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <span className="text-2xl">{o.icon}</span>
                <span className="text-sm font-bold" style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}>
                  {o.label}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom tagline */}
          <div className="reveal mt-12 text-center">
            <p className="text-base" style={{ color: "var(--text-muted)" }}>
              منتج واحد. بيانات حقيقية. عشرات الاحتمالات.{" "}
              <strong style={{ color: "var(--text-primary)" }}>كل Creative مختلف عن الآخر.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { testimonials } from "@/content/testimonials";

export default function SocialProof() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title reveal" style={{ fontFamily: "var(--font-heading)" }}>
          نتائج <span style={{ color: "var(--accent)" }}>حقيقية</span> من عملاء حقيقيين
        </h2>
        <p className="section-subtitle reveal">
          كل شهادة وكل نتيجة معروضة هنا هي من عملاء حقيقيين — بدون اختراع.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 reveal-stagger">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal rounded-sm p-6 transition-all duration-500"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Body */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                &ldquo;{t.body}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                {/* Avatar placeholder */}
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center text-sm font-bold"
                  style={{
                    background: "var(--accent-muted)",
                    color: "var(--accent)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {t.name.charAt(1) === "R" ? "؟" : t.name.charAt(0)}
                </div>
                <div>
                  <span className="text-sm font-bold block" style={{ color: "var(--text-primary)" }}>
                    {t.name}
                  </span>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about real proof */}
        <div className="reveal text-center mt-12">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            ⚠️ كل الشهادات والنتائج المعروضة هي من عملاء حقيقيين. لا نخترع أي Social Proof.
          </p>
        </div>
      </div>
    </section>
  );
}

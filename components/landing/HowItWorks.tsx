export default function HowItWorks() {
  const steps = [
    { num: "01", label: "أدخل معلومات المنتج", desc: "اسم المنتج، الوصف، السعر، الجمهور المستهدف", icon: "📦" },
    { num: "02", label: "افهم العميل", desc: "النظام يحلل مشاكل ورغبات واعتراضات العميل", icon: "🧠" },
    { num: "03", label: "أنشئ Angles", desc: "زوايا إعلانية مبنية على بيانات حقيقية", icon: "🎯" },
    { num: "04", label: "أنشئ Hooks", desc: "Hooks تخطف الانتباه في أول 3 ثواني", icon: "🪝" },
    { num: "05", label: "أنشئ Creatives", desc: "مفاهيم وسكريبتات جاهزة للتنفيذ", icon: "🎬" },
    { num: "06", label: "اختبر", desc: "إطار اختبار منظم على Meta Ads", icon: "🧪" },
    { num: "07", label: "أدخل النتائج", desc: "CTR, CPM, CPA, ROAS", icon: "📥" },
    { num: "08", label: "حلل", desc: "لماذا نجح؟ لماذا فشل؟ ماذا تتعلم؟", icon: "📊" },
    { num: "09", label: "اعرف ماذا تختبر بعد ذلك", desc: "اقتراحات مبنية على البيانات", icon: "🔮" },
    { num: "10", label: "كرر", desc: "كل دورة تبني على اللي قبلها", icon: "🔄" },
  ];

  return (
    <section className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <h2 className="section-title reveal" style={{ fontFamily: "var(--font-heading)" }}>
          كيف <span style={{ color: "var(--accent)" }}>يعمل</span>؟
        </h2>
        <p className="section-subtitle reveal">
          10 خطوات واضحة — من إدخال المنتج إلى معرفة الاختبار القادم.
        </p>

        <div className="max-w-[800px] mx-auto mt-12">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute top-0 bottom-0 hidden md:block"
              style={{
                insetInlineStart: "28px",
                width: "1px",
                background: "linear-gradient(to bottom, var(--border-accent), var(--border), var(--border-accent))",
              }}
            />

            <div className="space-y-4 reveal-stagger">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="reveal relative flex items-start gap-5 md:gap-6 group"
                >
                  {/* Step number node */}
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-sm flex items-center justify-center relative z-10 transition-all duration-500"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    <span className="text-lg">{step.icon}</span>
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 py-3 pb-5 transition-all duration-300"
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className="text-xs font-bold tracking-wider"
                        style={{ color: "var(--accent)", fontFamily: "var(--font-heading)" }}
                      >
                        خطوة {step.num}
                      </span>
                    </div>
                    <h3
                      className="text-base md:text-lg font-bold mb-1"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
                    >
                      {step.label}
                    </h3>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

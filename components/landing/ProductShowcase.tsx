export default function ProductShowcase() {
  const screens = [
    {
      title: "Customer Intelligence",
      desc: "تحليل كامل لمشاكل ورغبات واعتراضات العميل",
      mockContent: [
        { label: "المشاكل الرئيسية", items: ["ميزانية الإعلان تنفد بسرعة", "ما نعرفش أي Creative يصلح", "كل شهر نبدأ من الصفر"] },
        { label: "الرغبات", items: ["ROAS مستقر", "نظام واضح للاختبار", "نتائج قابلة للتكرار"] },
      ],
    },
    {
      title: "Angle & Hook Generator",
      desc: "زوايا وHooks مبنية على بيانات العميل",
      mockContent: [
        { label: "Angle #1", items: ["مشكلة: صرف بدون تعلم", "Hook: \"كل دينار تصرفه بدون نظام هو دينار ضائع\""] },
        { label: "Angle #2", items: ["رغبة: نتائج قابلة للتكرار", "Hook: \"ماذا لو كل إعلان ناجح يولّد الإعلان اللي بعده؟\""] },
      ],
    },
    {
      title: "Creative Analysis",
      desc: "تحليل نتائج الاختبار واقتراح الخطوة القادمة",
      mockContent: [
        { label: "Creative A — ✅ فائز", items: ["CTR: 3.2%", "CPA: 450 دج", "ROAS: 4.1x"] },
        { label: "Creative B — ❌ خاسر", items: ["CTR: 0.8%", "CPA: 1,800 دج", "السبب: Hook ضعيف"] },
      ],
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title reveal" style={{ fontFamily: "var(--font-heading)" }}>
          شاهد النظام <span style={{ color: "var(--accent)" }}>من الداخل</span>
        </h2>
        <p className="section-subtitle reveal">
          واجهات حقيقية — مش مجرد أسماء على Cards.
        </p>

        <div className="space-y-8 mt-12">
          {screens.map((screen, idx) => (
            <div
              key={screen.title}
              className="reveal rounded-sm overflow-hidden"
              style={{
                background: "linear-gradient(135deg, var(--border-accent), var(--border), var(--border))",
                padding: "1px",
              }}
            >
              <div
                className="rounded-sm"
                style={{ background: "var(--bg-secondary)" }}
              >
                {/* Mock window chrome */}
                <div
                  className="flex items-center justify-between px-6 py-4"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
                  </div>
                  <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                    {screen.title}
                  </span>
                  <div />
                </div>

                {/* Content area */}
                <div className="p-6 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Description */}
                    <div className="md:w-1/3">
                      <span
                        className="text-xs font-bold tracking-wider mb-2 block"
                        style={{ color: "var(--accent)", fontFamily: "var(--font-heading)" }}
                      >
                        الشاشة {idx + 1}
                      </span>
                      <h3
                        className="text-xl font-bold mb-3"
                        style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
                      >
                        {screen.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {screen.desc}
                      </p>
                    </div>

                    {/* Mock UI */}
                    <div className="md:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {screen.mockContent.map((block) => (
                        <div
                          key={block.label}
                          className="rounded-sm p-5"
                          style={{
                            background: "var(--bg-card)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <h4
                            className="text-sm font-bold mb-3 pb-2"
                            style={{
                              fontFamily: "var(--font-heading)",
                              color: "var(--accent)",
                              borderBottom: "1px solid var(--border)",
                            }}
                          >
                            {block.label}
                          </h4>
                          <ul className="space-y-2">
                            {block.items.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm"
                                style={{ color: "var(--text-secondary)" }}
                              >
                                <span style={{ color: "var(--accent)", flexShrink: 0 }}>›</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

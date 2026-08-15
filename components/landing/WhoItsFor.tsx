export default function WhoItsFor() {
  const forYou = [
    "عندك متجر إلكتروني",
    "تبيع منتجات فعلية",
    "تستخدم إعلانات مدفوعة (خاصة Meta Ads)",
    "تحتاج Creatives جديدة باستمرار",
    "تريد نظام اختبار واضح ومنظم",
    "تريد تتعلم من كل إعلان تصرف عليه",
  ];

  const notForYou = [
    "تبحث عن ضمان إيرادات محددة",
    "تبحث عن ضمان ROAS معين",
    "تريد خدمة إدارة إعلانات — هذا نظام، مش خدمة",
    "ما عندك منتج بعد",
    "مش مستعد تختبر وتتعلم",
  ];

  return (
    <section className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <h2 className="section-title reveal" style={{ fontFamily: "var(--font-heading)" }}>
          لمن هذا <span style={{ color: "var(--accent)" }}>النظام</span>؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto mt-12">
          {/* For You */}
          <div
            className="reveal rounded-sm p-6 md:p-8"
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
            }}
          >
            <h3
              className="text-lg font-bold mb-6 flex items-center gap-3"
              style={{ fontFamily: "var(--font-heading)", color: "#22c55e" }}
            >
              <span className="text-2xl">✅</span>
              مناسب لك إذا:
            </h3>
            <ul className="space-y-4">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="flex-shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm" style={{ color: "var(--text-primary)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div
            className="reveal rounded-sm p-6 md:p-8"
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
            }}
          >
            <h3
              className="text-lg font-bold mb-6 flex items-center gap-3"
              style={{ fontFamily: "var(--font-heading)", color: "#ef4444" }}
            >
              <span className="text-2xl">⛔</span>
              غير مناسب لك إذا:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="flex-shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

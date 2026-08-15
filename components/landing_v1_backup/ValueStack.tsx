import { pricing, valueStack } from "@/content/pricing";

export default function ValueStack() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="section-title reveal" style={{ fontFamily: "var(--font-heading)" }}>
          كل ما <span style={{ color: "var(--accent)" }}>تحصل عليه</span>
        </h2>

        <div className="max-w-[700px] mx-auto mt-12">
          {/* Value items */}
          <div className="reveal rounded-sm overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            {valueStack.map((item, i) => (
              <div
                key={item.item}
                className="flex items-center justify-between px-6 py-4 transition-colors"
                style={{
                  background: i % 2 === 0 ? "var(--bg-card)" : "var(--bg-secondary)",
                  borderBottom: i < valueStack.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" className="flex-shrink-0">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    {item.item}
                  </span>
                </div>
                <span
                  className="text-sm font-bold flex-shrink-0 ms-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Price Block */}
          <div
            className="reveal mt-8 rounded-sm p-8 md:p-12 text-center"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-accent)",
              boxShadow: "0 0 60px rgba(212, 168, 67, 0.06)",
            }}
          >
            {/* Badge */}
            <div className="inline-block mb-6">
              <span
                className="text-xs font-bold tracking-wider px-4 py-2 rounded-sm"
                style={{
                  background: "var(--accent-muted)",
                  color: "var(--accent)",
                  border: "1px solid var(--border-accent)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {pricing.badge}
              </span>
            </div>

            <h3
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              {pricing.headline}
            </h3>

            {/* Price display */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                {pricing.originalPrice !== "[ORIGINAL_PRICE]" && (
                  <span className="text-xl line-through" style={{ color: "var(--text-muted)" }}>
                    {pricing.originalPrice} {pricing.currency}
                  </span>
                )}
              </div>
              <div
                className="text-5xl md:text-6xl font-[900]"
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
              >
                {pricing.price}
                {pricing.price !== "[PRICE]" && (
                  <span className="text-2xl ms-2" style={{ color: "var(--text-secondary)" }}>
                    {pricing.currency}
                  </span>
                )}
              </div>
            </div>

            {/* Payment methods */}
            <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
              {pricing.paymentMethods}
            </p>

            {/* CTA */}
            <a href="#" className="btn-primary text-lg px-12 py-5 inline-flex">
              {pricing.cta}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ transform: "scaleX(-1)" }}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <p className="text-sm mt-6" style={{ color: "var(--text-muted)" }}>
              {pricing.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

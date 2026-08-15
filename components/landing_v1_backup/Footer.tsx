export default function Footer() {
  return (
    <footer
      className="py-12 px-6 text-center"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container">
        <div className="max-w-[600px] w-full mx-auto">
          <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} AI E-Commerce Creative & Ad Testing System. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
            هذا النظام أداة لإنشاء واختبار وتحليل الـ Creatives الإعلانية. لا يضمن مبيعات أو أرباح محددة.
            النتائج تعتمد على جودة المنتج والتنفيذ والسوق. ما عندنا حتى ارتباط بـ Meta Platforms, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}

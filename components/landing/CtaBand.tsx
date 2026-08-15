export default function CtaBand() {
  return (
    <section
      className="py-16 px-6 text-center"
      style={{
        background: "linear-gradient(135deg, rgba(212,168,67,0.08) 0%, var(--bg-primary) 50%, rgba(212,168,67,0.08) 100%)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container">
        <div className="max-w-[600px] w-full mx-auto reveal">
        <p
          className="text-lg md:text-xl mb-6 font-bold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
        >
          جاهز تتوقف عن التخمين؟
        </p>
        <a href="#pricing" className="btn-primary text-lg px-10 py-4 inline-flex">
          احصل على النظام الآن
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ transform: "scaleX(-1)" }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        </div>
      </div>
    </section>
  );
}

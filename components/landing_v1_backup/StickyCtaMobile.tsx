"use client";

import { useEffect, useState } from "react";

export default function StickyCtaMobile() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sticky-cta ${visible ? "visible" : ""}`}>
      <a href="#pricing" className="btn-primary">
        احصل على النظام الآن
      </a>
    </div>
  );
}

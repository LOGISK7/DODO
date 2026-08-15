import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[var(--border)] pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 mb-16">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 border-2 border-[var(--accent)] flex items-center justify-center">
                <span className="text-[var(--accent)] font-serif italic font-bold text-lg leading-none">D</span>
              </div>
              <span className="text-white font-heading font-bold text-lg tracking-wider">
                DRAGON <span className="text-[var(--accent)]">100™</span>
              </span>
            </div>
            <p className="text-[14px] text-[var(--text-muted)] max-w-sm leading-relaxed">
              Dragon 100™ is an exclusive, private advisory board and software ecosystem for 7 and 8-figure founders who want to reach their Certainty Number.
            </p>
          </div>

          <div className="flex md:justify-end gap-12">
            <div className="flex flex-col gap-4">
              <span className="font-label text-xs uppercase tracking-widest text-[var(--text-primary)]">Legal</span>
              <Link href="#" className="text-[14px] text-[var(--text-muted)] hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="#" className="text-[14px] text-[var(--text-muted)] hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-[14px] text-[var(--text-muted)] hover:text-white transition-colors">Disclaimer</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-label text-xs uppercase tracking-widest text-[var(--text-primary)]">Navigation</span>
              <Link href="/success-story" className="text-[14px] text-[var(--text-muted)] hover:text-white transition-colors">Success Stories</Link>
              <Link href="/apply" className="text-[14px] text-[var(--text-muted)] hover:text-white transition-colors">Apply Now</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.05)] pt-10">
          <h4 className="font-label text-xs uppercase tracking-widest text-white mb-4">IMPORTANT: Earnings and Legal Disclaimers</h4>
          <p className="text-[12px] text-[var(--text-muted)] leading-relaxed mb-6 text-justify">
            We don't believe in get-rich-quick programs. We believe in hard work, adding value and serving others. And that's what our programs are designed to help you do. As stated by law, we can not and do not make any guarantees about your own ability to get results or earn any money with our ideas, information, programs or strategies. We don't know you and, besides, your results in life are up to you. Agreed? We're here to help by giving you our greatest strategies to move you forward, faster. However, nothing on this page or any of our websites or emails is a promise or guarantee of future earnings. Any financial numbers referenced here, or on any of our sites or emails, are simply estimates or projections or past results, and should not be considered exact, actual or as a promise of potential earnings - all numbers are illustrative only. If you have questions, email membership@dragon100.com.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-[var(--text-muted)]">
            <p>This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is not endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
            <p className="shrink-0">Copyright © Dragon100.com. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

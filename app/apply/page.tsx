import React from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function Apply() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 flex items-center justify-center">
        <div className="container max-w-[800px] w-full">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Application Form</h1>
            <p className="text-[16px] text-[var(--text-secondary)]">
              Membership is capped at exactly 100 founders. Submit your application below to see if you qualify for a strategic interview.
            </p>
          </div>

          <div className="card card-gold-border p-8 md:p-12 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-[var(--text-muted)]">First Name</label>
                  <input type="text" className="w-full bg-[#111] border border-[var(--border)] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-[var(--text-muted)]">Last Name</label>
                  <input type="text" className="w-full bg-[#111] border border-[var(--border)] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-[var(--text-muted)]">Email Address</label>
                <input type="email" className="w-full bg-[#111] border border-[var(--border)] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-[var(--text-muted)]">Current Annual Revenue</label>
                <select className="w-full bg-[#111] border border-[var(--border)] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none">
                  <option>Select an option...</option>
                  <option>Under $1M (Not Qualified for Dragon 100)</option>
                  <option>$1M - $3M</option>
                  <option>$3M - $10M</option>
                  <option>$10M+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-[var(--text-muted)]">What is your biggest bottleneck?</label>
                <textarea rows={4} className="w-full bg-[#111] border border-[var(--border)] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors"></textarea>
              </div>

              <button type="button" className="btn-primary w-full mt-8">
                SUBMIT APPLICATION
              </button>
            </form>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

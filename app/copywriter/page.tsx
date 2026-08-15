import React from 'react';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';

export default function HighIncomeCopywriterPage() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Navigation */}
      <Nav />
      
      {/* Hero Section */}
      <Hero />

      {/* Main Sales Letter Section */}
      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-oswald font-bold text-black uppercase text-center mb-10 leading-tight">
          How A Few "Golden Words" Can Change Your Financial Destiny
        </h2>
        
        <div className="space-y-6 text-lg md:text-[19px] leading-relaxed text-gray-700">
          <p><strong>Dear Friend,</strong></p>
          
          <p>If you want to create a highly lucrative income stream, without having to create your own products, build a team, or deal with customer support... then this will be the most important letter you read all year.</p>
          
          <p>Here is why:</p>
          
          <p>Every single day, businesses are desperately searching for one thing: <strong>MORE CUSTOMERS.</strong></p>
          
          <p>They have great products. They have the operation in place. But they lack the ability to persuade people to pull out their credit cards and buy.</p>
          
          <p className="bg-yellow-100 p-6 border-l-4 border-yellow-500 font-bold text-xl text-black">
            That is where YOU come in as a High-Income Copywriter™.
          </p>
          
          <p>You see, copywriting is not about writing. It is about <em>closing in print</em>. It is about using the right words, in the right order, to compel people to take action.</p>
          
          <p>When you possess this skill, you become the most valuable person in any business. Because you are the one bringing in the revenue.</p>
        </div>
      </section>

      {/* The Solution / What It Is */}
      <section className="bg-gray-50 py-20 px-6 md:px-12 border-y border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-oswald font-bold text-black uppercase text-center mb-10">
            Introducing The High-Income Copywriter™ Certification Program
          </h2>
          
          <p className="text-lg md:text-[19px] leading-relaxed text-gray-700 mb-8 text-center">
            A comprehensive, 8-week intensive program designed to take you from absolute beginner to a highly-paid copywriter. You will learn the exact formulas, templates, and psychological triggers that I have used to generate millions of dollars in sales.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 shadow-sm border border-gray-200 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#c9a050] text-white flex items-center justify-center rounded-full text-3xl font-bold mb-6">1</div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Master The Psychology</h3>
              <p className="text-gray-600">Understand exactly why people buy and how to trigger those buying emotions using simple, proven words.</p>
            </div>
            
            <div className="bg-white p-8 shadow-sm border border-gray-200 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#c9a050] text-white flex items-center justify-center rounded-full text-3xl font-bold mb-6">2</div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">The Templates</h3>
              <p className="text-gray-600">Get my private vault of winning sales letters, emails, and ads. Just fill in the blanks and you are ready to go.</p>
            </div>
            
            <div className="bg-white p-8 shadow-sm border border-gray-200 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#c9a050] text-white flex items-center justify-center rounded-full text-3xl font-bold mb-6">3</div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Get Clients Fast</h3>
              <p className="text-gray-600">Learn the exact strategies to attract high-paying clients who respect your expertise and pay you what you are worth.</p>
            </div>
            
            <div className="bg-white p-8 shadow-sm border border-gray-200 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#c9a050] text-white flex items-center justify-center rounded-full text-3xl font-bold mb-6">4</div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Scale Your Income</h3>
              <p className="text-gray-600">Discover how to negotiate royalties and retainers so you get paid month after month for work you did once.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum / Modules */}
      <section className="bg-[#0a111a] text-white py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase text-center mb-4 text-[#c9a050]">
            The 8-Week Curriculum
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Here is exactly what we will cover inside the 47-hour intensive training program.</p>
          
          <div className="space-y-6">
            {[
              { num: 1, title: "Copywriting Foundations & Psychology", desc: "The core principles of influence and how to get into the mind of your ideal prospect." },
              { num: 2, title: "The S.M.I.R.C.C. Formula", desc: "My proprietary formula for writing irresistible offers that convert cold traffic into buyers." },
              { num: 3, title: "Writing High-Converting Emails", desc: "How to write simple 300-word emails that generate cash on demand for any business." },
              { num: 4, title: "Sales Pages That Sell", desc: "The anatomy of a million-dollar sales letter and how to structure your arguments perfectly." },
              { num: 5, title: "Social Media Ads & Hooks", desc: "How to stop the scroll and capture attention immediately in a crowded newsfeed." },
              { num: 6, title: "Advanced Persuasion Techniques", desc: "Subtle psychological triggers that eliminate objections before they even come up." },
              { num: 7, title: "Client Acquisition & Pricing", desc: "How to find clients, pitch your services, and confidently command premium fees." },
              { num: 8, title: "Building Your Copywriting Agency", desc: "Scaling your income by hiring other writers and removing yourself from the day-to-day." }
            ].map((mod) => (
              <div key={mod.num} className="bg-[#121a24] border border-[#2a3644] p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 hover:border-[#c9a050] transition-colors">
                <div className="text-4xl md:text-5xl font-oswald font-bold text-[#3a4654]">
                  0{mod.num}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 text-white">{mod.title}</h3>
                  <p className="text-gray-400 text-lg">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto border-4 border-[#c9a050] p-10 md:p-16 text-center relative mt-10">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white px-6">
            <svg className="w-20 h-20 text-[#c9a050]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
          </div>
          
          <h2 className="text-3xl font-oswald font-bold uppercase mb-6 text-black mt-4">
            My Iron-Clad, 30-Day Guarantee
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am so confident in the High-Income Copywriter™ Certification Program that I am willing to take all the risk. Go through the modules, use the templates, and apply the strategies. If you do not feel you have received at least 10X the value in actionable skills, simply let my team know within 30 days and we will issue a prompt and courteous refund. No questions asked.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-100 py-24 px-6 text-center border-t border-gray-200">
        <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mb-8 text-black">
          Are You Ready To Master The Skill?
        </h2>
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="flex items-end gap-3 mb-1">
            <span className="text-5xl font-bold text-black">$2,497.00</span>
          </div>
          <span className="text-xl text-gray-500 line-through mb-1">Regular Price: $19,997.00</span>
          <div className="text-[#c9a050] font-bold text-lg mt-2 uppercase tracking-wide">
            Save 87% Today
          </div>
        </div>
        
        <button className="bg-black text-white hover:bg-[#c9a050] hover:text-black font-bold text-xl px-16 py-6 transition-all uppercase tracking-widest shadow-xl mx-auto block mb-6">
          Enroll Now & Get Instant Access
        </button>
        <p className="text-gray-500 font-medium">Secure, 256-Bit Encrypted Checkout</p>
      </section>
      
      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 text-center text-sm px-6">
        <p className="mb-4">© {new Date().getFullYear()} Dan Lok Shop. All Rights Reserved.</p>
        <p className="max-w-2xl mx-auto opacity-70">
          Disclaimer: The sales figures and results discussed in this training are our personal results and in some cases the sales figures and results of previous or existing clients. Please understand these results are not typical. We are not implying you will duplicate them (or do anything for that matter). The average person who buys "how to" information gets little to no results.
        </p>
      </footer>
    </div>
  );
}

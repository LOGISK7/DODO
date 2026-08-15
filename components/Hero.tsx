import React from "react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center bg-[#0a111a] font-sans overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-no-repeat bg-left-top bg-cover opacity-50 md:opacity-100 md:w-[60%]"
        style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
      >
        {/* Gradient fade to blend into the right side background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a] to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a111a]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center pt-24 pb-16">
        
        {/* Empty left column for spacing on desktop */}
        <div className="hidden md:block md:w-5/12 lg:w-1/2"></div>
        
        {/* Text and CTA column (Right side) */}
        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          
          <h1 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-white mb-6 leading-tight">
            HIGH INCOME COPYWRITER™
          </h1>
          
          <p className="text-[17px] md:text-[19px] leading-relaxed text-gray-200 mb-10 max-w-[600px]">
            How To Scale Any Business Using Cold Traffic ... Build A World-Class Team Of Copywriters ... And Enjoy An Endless Supply Of Clients Willing To Pay For Your Expertise
          </p>
          
          <button className="bg-white text-[#c9a050] font-bold text-lg px-12 py-4 shadow-lg hover:bg-gray-100 transition-colors uppercase tracking-widest flex items-center gap-2 group mb-8">
            ADD TO CART
            <span className="text-xl group-hover:translate-x-1 transition-transform">›</span>
          </button>
          
          <div className="flex flex-col items-center md:items-start gap-1 mb-12 border-b border-[#333333] pb-10 w-full max-w-[400px]">
            <div className="flex items-end gap-3 mb-1">
              <span className="text-4xl font-bold text-white">$2,497.00</span>
              <span className="text-2xl text-gray-500 line-through mb-1">$19,997.00</span>
            </div>
            <div className="text-[#c9a050] font-medium text-[15px]">
              You Save 87% ($17,500.00)
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 text-center md:text-left w-full">
            <div className="flex flex-col gap-2">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">COURSE FORMAT</span>
              <span className="text-white text-base font-semibold">8 Modules</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">COURSE LENGTH</span>
              <span className="text-white text-base font-semibold">47 Hours</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">TOPIC</span>
              <span className="text-white text-base font-semibold">Copywriting</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">IDEAL BIZ SIZE</span>
              <span className="text-white text-base font-semibold">$0 &rarr; $100K</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

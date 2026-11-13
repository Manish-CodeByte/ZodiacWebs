import React, { useState } from 'react';
import { Globe, Search, Zap, Headphones, ArrowRight, Laptop, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MockupShowcase: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<'both' | 'laptop' | 'mobile'>('both');

  const pillars = [
    {
      icon: <Globe className="w-6 h-6 text-[#FF7518]" />,
      title: 'Modern & Responsive Websites',
      desc: 'Flawless scaling on phones, tablets, and wide monitors.'
    },
    {
      icon: <Search className="w-6 h-6 text-[#FF7518]" />,
      title: 'SEO-Friendly Designs',
      desc: 'Structured metadata and crawl-ready semantic markup.'
    },
    {
      icon: <Zap className="w-6 h-6 text-[#FF7518]" />,
      title: 'Fast & Reliable Performance',
      desc: 'Sub-second rendering with optimized Core Web Vitals.'
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#FF7518]" />,
      title: 'Ongoing Support',
      desc: 'Dedicated technical updates, monitoring, and backups.'
    }
  ];

  const categories = [
    { name: 'Business Websites', href: '/services#business-websites' },
    { name: 'Cafe & Restaurants', href: '/services#cafe-restaurant' },
    { name: 'E-commerce Stores', href: '/services#ecommerce-stores' },
    { name: 'Portfolio & Personal', href: '/services#portfolio-personal' }
  ];

  return (
    <section className="py-20 bg-[#090909] border-y border-[#1C1C1C] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF7518]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Device Switcher Controls */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="inline-flex p-1 rounded-full bg-[#141414] border border-[#262626]">
            <button
              onClick={() => setActiveDevice('both')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeDevice === 'both'
                  ? 'bg-gradient-to-r from-[#FF7518] to-[#FFAD33] text-black shadow-md'
                  : 'text-[#B0B0B0] hover:text-white'
              }`}
            >
              All Devices
            </button>
            <button
              onClick={() => setActiveDevice('laptop')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeDevice === 'laptop'
                  ? 'bg-gradient-to-r from-[#FF7518] to-[#FFAD33] text-black shadow-md'
                  : 'text-[#B0B0B0] hover:text-white'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              Desktop
            </button>
            <button
              onClick={() => setActiveDevice('mobile')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeDevice === 'mobile'
                  ? 'bg-gradient-to-r from-[#FF7518] to-[#FFAD33] text-black shadow-md'
                  : 'text-[#B0B0B0] hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              Mobile
            </button>
          </div>
        </div>

        {/* Main Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 4 Rounded Feature Pillars from Poster */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFAD33] block mb-2">
              Engineered For Results
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#FF7518]/50 hover:shadow-[0_0_20px_rgba(255,117,24,0.15)] transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-[#1A1A1A] border border-[#303030] group-hover:border-[#FF7518]/40 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#FFAD33] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8E8E8E] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center / Right Mockup Stage (Replicating the Poster Visuals) */}
          <div className="lg:col-span-8 flex flex-col md:flex-row items-center justify-center gap-6 relative">
            {/* Laptop Mockup */}
            {(activeDevice === 'both' || activeDevice === 'laptop') && (
              <div className="w-full max-w-xl transition-all duration-500">
                <div className="relative rounded-t-2xl bg-[#161616] p-2.5 border border-[#303030] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                  {/* Laptop Camera dot */}
                  <div className="w-2 h-2 rounded-full bg-[#333333] mx-auto mb-2" />
                  
                  {/* Laptop Screen Content */}
                  <div className="bg-[#050505] rounded-xl border border-[#252525] p-5 sm:p-7 relative overflow-hidden aspect-[16/10] flex flex-col justify-between">
                    {/* Simulated Nav */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF7518]" />
                        <span className="text-xs font-black tracking-widest text-white uppercase font-display">ZODIAC</span>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] text-[#B0B0B0]">
                        <span className="hover:text-white cursor-pointer">Home</span>
                        <span className="hover:text-white cursor-pointer">Services</span>
                        <span className="hover:text-white cursor-pointer">Portfolio</span>
                        <span className="px-2 py-0.5 rounded bg-[#FF7518] text-black font-bold">Let's Talk</span>
                      </div>
                    </div>

                    {/* Simulated Hero */}
                    <div className="my-auto py-2">
                      <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                        Build Your <span className="text-[#FF7518]">Dream Website</span>
                      </h4>
                      <p className="text-xs text-[#8E8E8E] mt-1 font-medium">
                        Modern. Creative. Powerful.
                      </p>
                      <div className="mt-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-gradient-to-r from-[#FF7518] to-[#FFAD33] text-black text-[11px] font-bold shadow-[0_0_12px_rgba(255,117,24,0.4)]">
                          Get Started →
                        </span>
                      </div>
                    </div>

                    {/* Simulated Decorative Grid Bars (Like in Poster) */}
                    <div className="absolute right-4 bottom-4 flex items-end gap-1.5 opacity-40">
                      <div className="w-1.5 h-8 bg-[#FF7518] rounded-t" />
                      <div className="w-1.5 h-12 bg-[#FF7518] rounded-t" />
                      <div className="w-1.5 h-6 bg-[#FF7518] rounded-t" />
                      <div className="w-1.5 h-10 bg-[#FFAD33] rounded-t" />
                    </div>
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="h-3 bg-[#242424] rounded-b-xl border-t border-[#333333] shadow-md max-w-[95%] mx-auto" />
              </div>
            )}

            {/* Mobile Device Mockup */}
            {(activeDevice === 'both' || activeDevice === 'mobile') && (
              <div className="w-56 sm:w-64 flex-shrink-0 transition-all duration-500">
                <div className="relative rounded-[32px] bg-[#1a1a1a] p-3 border-2 border-[#333333] shadow-[0_25px_60px_rgba(0,0,0,0.9)] shadow-[#FF7518]/10">
                  {/* Phone Speaker / Dynamic Island */}
                  <div className="w-20 h-3.5 bg-black rounded-full mx-auto mb-3" />

                  {/* Phone Screen */}
                  <div className="bg-[#050505] rounded-[24px] border border-[#252525] p-4 text-center aspect-[9/16] flex flex-col justify-between">
                    <div className="pt-2">
                      <div className="w-7 h-7 mx-auto rounded-full bg-[#181818] border border-[#FF7518]/50 flex items-center justify-center mb-1">
                        <span className="text-xs font-black text-[#FF7518]">Z</span>
                      </div>
                      <span className="text-[10px] font-bold text-white tracking-widest uppercase">ZODIAC</span>
                    </div>

                    <div className="my-auto py-3">
                      <h5 className="text-base font-black text-white leading-tight">
                        Grow Your <br />
                        <span className="text-[#FF7518]">Business Online</span>
                      </h5>
                      <p className="text-[10px] text-[#8E8E8E] mt-1.5">
                        Smart Websites. <br />Real Results.
                      </p>
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 rounded bg-[#FF7518] text-black text-[10px] font-bold">
                          Get Started →
                        </span>
                      </div>
                    </div>

                    <div className="text-[9px] text-[#555555] pb-1 uppercase tracking-widest">
                      We Build. You Grow.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4 Bottom Category Badges (from Poster) */}
        <div className="mt-16 pt-8 border-t border-[#1C1C1C] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={cat.href}
              className="p-3.5 rounded-xl bg-[#111111]/70 border border-[#222222] hover:border-[#FF7518]/40 hover:bg-[#161616] transition-all group"
            >
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FFAD33] flex items-center justify-center gap-1.5">
                {cat.name}
                <ArrowRight className="w-3 h-3 text-[#FF7518] opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

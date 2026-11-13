import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { siteConfig, getInstagramDmUrl } from '../../config/siteConfig';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 lg:pt-36 lg:pb-28 flex items-center justify-center overflow-hidden bg-radial-hero bg-noise">
      {/* Background Decorative Cosmic Rings (Static, crisp, no continuous rotation) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[950px] h-[750px] sm:h-[950px] pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-[#FF7518]/15" />
        <div className="absolute inset-20 rounded-full border border-dashed border-[#FFAD33]/15" />
        <div className="absolute inset-40 rounded-full border border-[#FF7518]/10" />
        <div className="absolute inset-0 bg-radial-glow from-[#FF7518]/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Eyebrow, CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#141414] border border-[#FF7518]/40 text-[#FFAD33] shadow-[0_0_15px_rgba(255,117,24,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7518]" />
                Website Design & Development
              </span>
            </div>

            {/* H1 Headline (Gradient on one key word: "Customers") */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tightest text-white uppercase font-display leading-[1.08]">
              Turn Visitors Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7518] to-[#FFAD33] drop-shadow-[0_0_25px_rgba(255,117,24,0.35)]">
                Customers
              </span>
            </h1>

            {/* Subheadline / Value Prop */}
            <p className="text-base sm:text-lg md:text-xl text-[#B0B0B0] leading-relaxed max-w-xl">
              {siteConfig.brandMessage} — We build fast, high-converting digital storefronts, corporate portals, and bespoke web apps engineered to accelerate real business revenue.
            </p>

            {/* Dual CTAs + Instagram Collab Pill */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Let's Build Together
                </Button>
              </Link>

              <Link to="/services">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border border-[#2C2C2C] hover:border-[#FF7518]/50 text-white"
                >
                  Explore Our Services
                </Button>
              </Link>

              <a
                href={getInstagramDmUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="glow-pill"
                  size="lg"
                  className="text-xs uppercase tracking-wider text-[#FFAD33]"
                >
                  DM For Websites & Collabs
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-6 sm:gap-8 text-xs uppercase tracking-wider text-[#8E8E8E]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF7518]" />
                <span>100% Custom React Code</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF7518]" />
                <span>Lighthouse 95+ Target</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF7518]" />
                <span>Sub-Second Paint Times</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Stable, Non-Animated Device Mockups */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Stable Static Mockup Container (Zero Animations) */}
            <div className="relative w-full max-w-lg">
              {/* Laptop Mockup */}
              <div className="relative rounded-t-2xl bg-[#141414] p-3 border border-[#2B2B2B] shadow-[0_25px_60px_rgba(0,0,0,0.9)] shadow-[#FF7518]/10">
                {/* Camera dot */}
                <div className="w-2 h-2 rounded-full bg-[#333333] mx-auto mb-2" />

                {/* Laptop Screen Content */}
                <div className="bg-[#050505] rounded-xl border border-[#222222] p-4 sm:p-5 relative overflow-hidden aspect-[16/10] flex flex-col justify-between">
                  {/* Simulated Nav */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF7518]" />
                      <span className="text-[11px] font-black tracking-widest text-white uppercase font-display">
                        ZODIAC
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-[9px] text-[#A0A0A0]">
                      <span>Services</span>
                      <span>Portfolio</span>
                      <span className="px-2 py-0.5 rounded bg-gradient-to-r from-[#FF7518] to-[#FFAD33] text-black font-bold">
                        Let's Talk
                      </span>
                    </div>
                  </div>

                  {/* Simulated Hero */}
                  <div className="my-auto py-1">
                    <span className="text-[9px] text-[#FFAD33] font-bold uppercase tracking-wider block">
                      Digital Agency
                    </span>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white leading-tight">
                      Build Your <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7518] to-[#FFAD33]">
                        Dream Website
                      </span>
                    </h3>
                    <p className="text-[10px] text-[#8E8E8E] mt-1">
                      Modern. Creative. Powerful.
                    </p>
                    <div className="mt-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FF7518] text-black text-[10px] font-bold shadow-[0_0_12px_rgba(255,117,24,0.4)]">
                        Get Started →
                      </span>
                    </div>
                  </div>

                  {/* Simulated Grid Bars */}
                  <div className="absolute right-4 bottom-4 flex items-end gap-1 opacity-40">
                    <div className="w-1 h-6 bg-[#FF7518] rounded-t" />
                    <div className="w-1 h-10 bg-[#FF7518] rounded-t" />
                    <div className="w-1 h-5 bg-[#FF7518] rounded-t" />
                    <div className="w-1 h-8 bg-[#FFAD33] rounded-t" />
                  </div>
                </div>
              </div>
              {/* Laptop Base */}
              <div className="h-3 bg-[#242424] rounded-b-xl border-t border-[#333333] shadow-md max-w-[95%] mx-auto" />

              {/* Smartphone Mockup (Overlapping & Completely Static) */}
              <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-6 w-36 sm:w-44 rounded-[28px] bg-[#1a1a1a] p-2 border-2 border-[#333333] shadow-[0_20px_45px_rgba(0,0,0,0.9)] shadow-[#FF7518]/15">
                {/* Dynamic island */}
                <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-2" />

                <div className="bg-[#050505] rounded-[20px] border border-[#242424] p-3 text-center aspect-[9/16] flex flex-col justify-between">
                  <div className="w-5 h-5 mx-auto rounded-full bg-[#181818] border border-[#FF7518]/50 flex items-center justify-center">
                    <span className="text-[10px] font-black text-[#FF7518]">Z</span>
                  </div>

                  <div className="my-auto py-1">
                    <h4 className="text-xs font-black text-white leading-tight">
                      Grow Your <br />
                      <span className="text-[#FF7518]">Business</span>
                    </h4>
                    <p className="text-[8px] text-[#8E8E8E] mt-1">
                      Smart Websites. Real Results.
                    </p>
                  </div>

                  <div className="text-[8px] text-[#555555] uppercase tracking-wider font-semibold">
                    We Build. You Grow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { siteConfig } from '../config/siteConfig';
import { CtaBanner } from '../components/home/CtaBanner';
import { 
  Compass, 
  Target, 
  ShieldCheck, 
  Zap, 
  HeartHandshake, 
  Layers, 
  CheckCircle,
  Sparkles
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Craftsmanship Over Templates',
      desc: 'We refuse to recycle generic drag-and-drop templates. Every website is purposefully engineered around your brand identity and customer acquisition goals.',
      icon: <Layers className="w-5 h-5 text-[#FF7518]" />
    },
    {
      title: 'Uncompromising Speed & Performance',
      desc: 'Speed is not an afterthought; it is our foundation. Clean React architecture, minimal bundles, and sub-second paint times maximize both SEO and conversion.',
      icon: <Zap className="w-5 h-5 text-[#FF7518]" />
    },
    {
      title: 'Radical Honesty & Transparency',
      desc: 'We do not inflate timelines or charge surprise fees. We communicate openly, set realistic milestones, and deliver working software that you own entirely.',
      icon: <ShieldCheck className="w-5 h-5 text-[#FF7518]" />
    },
    {
      title: 'Partnership, Not Just a Transaction',
      desc: 'Our commitment does not end at domain launch. We provide ongoing technical support, continuous security, and proactive guidance to help you scale.',
      icon: <HeartHandshake className="w-5 h-5 text-[#FF7518]" />
    }
  ];

  return (
    <div className="pt-28 pb-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-radial-hero relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeader
            badge="About Zodiac Webs"
            title="We Engineer Websites That"
            highlightText="Accelerate Real Business Growth"
            description="Built on a belief that digital presence should be a business asset, not an agency mystery."
          />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#070707] border-y border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-[#242424] hover:border-[#FF7518]/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-[#FF7518] mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFAD33] block mb-2">
                Our Mission
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                We Build. You Grow.
              </h3>
              <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                Our mission is to arm ambitious founders, hospitality venues, local businesses, and creatives with high-velocity web experiences that turn passive online visitors into high-value paying customers.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-[#242424] hover:border-[#FF7518]/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-[#FF7518] mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFAD33] block mb-2">
                Our Vision
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Your Vision. Our Creation.
              </h3>
              <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                We envision a web where businesses are no longer trapped by sluggish templates or abandoned by unresponsive contractors. We combine world-class modern software engineering with bespoke visual art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#FF7518]/30 text-[#FFAD33] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7518]" />
                Our Philosophy
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Cutting Through The Noise Of Generic Web Design
              </h2>

              <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                Too many businesses are sold bloated WordPress themes stuffed with dozens of unmaintained plugins, resulting in fragile sites that take five seconds to load on mobile and break without warning.
              </p>

              <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                At <strong className="text-white">Zodiac Webs</strong>, we take the opposite path. We build with modern frontend frameworks—principally React, Vite, and Tailwind CSS—giving your brand a clean, bespoke, lightning-fast digital asset that stands out from competitors and scales seamlessly.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Clean semantic code without unnecessary plugin dependencies',
                  'Optimized Core Web Vitals for superior Google search rankings',
                  'Frictionless customer journeys tailored to your revenue model',
                  'Complete client ownership of all design assets and source code'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-[#D1D1D1]">
                    <CheckCircle className="w-4 h-4 text-[#FF7518] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emblem Feature Spotlight */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative p-10 sm:p-14 rounded-3xl bg-[#0D0D0D] border border-[#222222] shadow-[0_0_40px_rgba(255,117,24,0.1)] text-center max-w-md w-full">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-[#FF7518]/50 shadow-[0_0_35px_rgba(255,117,24,0.35)] mb-6">
                  <img
                    src={siteConfig.logo}
                    alt="Zodiac Webs Brand Emblem"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-extrabold text-white uppercase tracking-wider font-display">
                  ZODIAC WEBS
                </h4>
                <p className="text-xs text-[#FFAD33] font-semibold tracking-widest uppercase mt-1">
                  {siteConfig.tagline}
                </p>
                <div className="mt-6 pt-6 border-t border-white/5 text-xs text-[#8E8E8E] leading-relaxed">
                  Dedicated to engineering modern websites for businesses that refuse to blend into the background.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#0A0A0A] border-t border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Agency Principles"
            title="The Values That Guide"
            highlightText="Every Project"
            description="Our non-negotiable standards of craftsmanship, communication, and engineering rigor."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#111111] border border-[#222222] hover:border-[#FF7518]/40 transition-all flex items-start gap-5"
              >
                <div className="p-3.5 rounded-2xl bg-[#181818] border border-[#2E2E2E] flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-[#B0B0B0] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};

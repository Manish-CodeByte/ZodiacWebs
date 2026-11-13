import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { siteConfig } from '../config/siteConfig';
import { CtaBanner } from '../components/home/CtaBanner';
import { SEO } from '../components/seo/SEO';
import { 
  Compass, 
  Target, 
  Zap, 
  HeartHandshake, 
  Layers, 
  Sparkles,
  TrendingUp,
  Cpu
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Craftsmanship Over Templates',
      desc: 'We refuse to recycle generic drag-and-drop themes. Every website is purposefully engineered around your brand identity and customer acquisition goals.',
      icon: <Layers className="w-5 h-5 text-[#FF7518]" />
    },
    {
      title: 'Performance by Design',
      desc: 'Speed is not an afterthought; it is our foundation. Clean React architecture, minimal bundles, and sub-second paint times maximize both SEO and conversion.',
      icon: <Zap className="w-5 h-5 text-[#FF7518]" />
    },
    {
      title: 'Business-Driven Creativity',
      desc: 'Design that looks striking while serving clear commercial goals. Every layout decision directs visitor attention toward inquiries, bookings, or purchases.',
      icon: <TrendingUp className="w-5 h-5 text-[#FF7518]" />
    },
    {
      title: 'Honest Collaboration',
      desc: 'We do not inflate timelines or charge surprise fees. We communicate openly, set realistic milestones, and deliver working software that you own entirely.',
      icon: <HeartHandshake className="w-5 h-5 text-[#FF7518]" />
    }
  ];

  return (
    <div className="pt-28 pb-16 min-h-screen">
      <SEO
        title="About Us — Digital Studio Built for Ambition"
        description="Zodiac Webs brings together thoughtful design, modern technology, and a growth-focused approach to create digital experiences that move businesses forward."
        canonical="/about"
      />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-radial-hero relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeader
            badge="About Zodiac Webs"
            title="A Digital Studio Built for"
            highlightText="Ambitious Ideas."
            description="Zodiac Webs brings together thoughtful design, modern technology, and a growth-focused approach to create digital experiences that move businesses forward."
          />
        </div>
      </section>

      {/* Our Story / Origins Section */}
      <section className="py-20 bg-[#070707] border-y border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF7518]/30 text-[#FFAD33] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7518]" />
                Our Story
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-display">
                Moving Beyond Generic Website Templates
              </h2>

              <p className="text-base text-[#B0B0B0] leading-relaxed">
                Zodiac Webs was created to move beyond generic website templates and deliver websites crafted around real brand identity, business objectives, and user experience.
              </p>

              <p className="text-base text-[#B0B0B0] leading-relaxed">
                Too many businesses are held back by sluggish theme builders that take seconds to render on mobile devices and break unexpectedly during critical growth stages. We combine clean modern engineering with high-impact digital art to give companies lasting digital assets they own completely.
              </p>
            </div>

            {/* Emblem Feature Spotlight */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative p-10 sm:p-12 rounded-3xl bg-[#0E0E0E] border border-[#222222] shadow-[0_0_40px_rgba(255,117,24,0.12)] text-center max-w-md w-full">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-[#FF7518]/50 shadow-[0_0_35px_rgba(255,117,24,0.35)] mb-6">
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
                  Bespoke digital architecture crafted for founders who refuse to compromise on design or code quality.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-[#242424] hover:border-[#FF7518]/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-[#FF7518] mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFAD33] block mb-2">
                Our Mission
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 font-display">
                Empowering ambitious businesses to build a powerful digital presence.
              </h3>
              <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                We arm startups, restaurants, e-commerce stores, and professionals with high-velocity web experiences that turn online visitors into paying customers.
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
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 font-display">
                Your Vision. Our Creation.
              </h3>
              <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                We envision a web ecosystem where ambitious businesses are empowered by bespoke digital craft, lightning-fast rendering, and honest technical guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Values */}
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
                  <h3 className="text-lg font-bold text-white mb-2 font-display">{v.title}</h3>
                  <p className="text-sm text-[#B0B0B0] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="py-24 bg-[#050505] border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF7518]/30 text-[#FFAD33] text-xs font-bold uppercase tracking-wider mb-4">
              <Cpu className="w-3.5 h-3.5 text-[#FF7518]" />
              Engineering Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Built For Stability, Speed, and Longevity
            </h2>
            <p className="mt-3 text-base text-[#B0B0B0]">
              How we approach the technical architecture of your modern web assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#111111] border border-[#222222]">
              <div className="text-base font-bold text-white mb-2 font-display">React & Semantic HTML</div>
              <p className="text-xs text-[#B0B0B0] leading-relaxed">
                Structured with modern component architecture, clean semantic tags, and zero superfluous plugin dependencies.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#111111] border border-[#222222]">
              <div className="text-base font-bold text-white mb-2 font-display">Core Web Vitals & Accessibility</div>
              <p className="text-xs text-[#B0B0B0] leading-relaxed">
                Sub-second paint targets, WCAG 2.2 AA contrast compliance, responsive fluid typography, and minimal cumulative layout shifts.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#111111] border border-[#222222]">
              <div className="text-base font-bold text-white mb-2 font-display">100/100 Lighthouse Target</div>
              <p className="text-xs text-[#B0B0B0] leading-relaxed">
                We treat 100/100 Lighthouse as an aspirational engineering optimization target for every client build, guaranteeing rigorous performance hygiene.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};

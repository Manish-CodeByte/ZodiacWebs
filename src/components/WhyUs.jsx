import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Smartphone, Search, Zap, Headphones, CheckCircle2 } from 'lucide-react';

export default function WhyUs() {
  const shouldReduceMotion = useReducedMotion();

  const reasons = [
    {
      title: 'Modern & Responsive',
      subtitle: 'Pixel-perfect across all screen sizes',
      icon: Smartphone,
      accent: '#FF6B00',
      description:
        'Engineered from mobile-first foundations to expansive ultra-wide monitors. Fluid layouts, touch-optimized ergonomics, and cutting-edge dark cosmic aesthetics.',
      stat: '100%',
      statLabel: 'Responsive Fluid Design',
    },
    {
      title: 'SEO-Friendly',
      subtitle: 'Engineered for top search engine visibility',
      icon: Search,
      accent: '#FFD700',
      description:
        'Semantic HTML5 markup, OpenGraph social meta tags, structured JSON-LD schemas, and lightning-fast indexation designed to rank on Google from day one.',
      stat: 'Top #1',
      statLabel: 'Search Architecture',
    },
    {
      title: 'Fast & Reliable',
      subtitle: 'Near-instant page loads & 99.9% uptime',
      icon: Zap,
      accent: '#FF6B00',
      description:
        'Powered by Vite, optimized asset bundling, modern WebP media compression, and global edge CDN distribution with 90+ Lighthouse targets.',
      stat: '<0.8s',
      statLabel: 'Average Load Time',
    },
    {
      title: 'Ongoing Support',
      subtitle: 'We stand by your site after launch',
      icon: Headphones,
      accent: '#FFD700',
      description:
        'Continuous performance monitoring, domain and SSL assistance, content adjustments, and prompt technical support whenever you need an upgrade.',
      stat: '24/7',
      statLabel: 'Direct Partner Access',
    },
  ];

  return (
    <section id="why-us" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#FFD700] uppercase bg-[#FFD700]/10 px-4 py-1.5 rounded-full border border-[#FFD700]/30 inline-block mb-4">
              The Zodiac Edge
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Why Partner with <span className="text-gradient-orange-gold">Zodiac Webs</span>?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A0AAB2]">
              We don't build generic cookie-cutter templates. We engineer bespoke digital assets that turn casual browsers into loyal paying customers.
            </p>
          </motion.div>
        </div>

        {/* 4 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isOrange = reason.accent === '#FF6B00';

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                className="group relative rounded-2xl glass-card p-6 sm:p-7 transition-all duration-300 hover:border-[#FF6B00]/40 hover:shadow-glow-card-hover flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Stat */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isOrange
                          ? 'bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30'
                          : 'bg-[#FFD700]/15 text-[#FFD700] border border-[#FFD700]/30'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${
                        isOrange
                          ? 'bg-[#FF6B00]/10 text-[#FF6B00] border-[#FF6B00]/20'
                          : 'bg-[#FFD700]/10 text-[#FFD700] border-[#FFD700]/20'
                      }`}
                    >
                      {reason.stat}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-xs font-medium text-[#FFD700]/80 mb-3">
                    {reason.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#A0AAB2] leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Footer badge */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#CAD1D7]">
                  <CheckCircle2 className={`w-4 h-4 ${isOrange ? 'text-[#FF6B00]' : 'text-[#FFD700]'}`} />
                  <span>{reason.statLabel}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

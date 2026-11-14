import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gauge, Target, DollarSign } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { siteConfig } from '../../config/siteConfig';

export const WhyUs: React.FC = () => {
  const icons = [
    <Sparkles className="w-6 h-6 text-[#FF7518]" />,
    <Gauge className="w-6 h-6 text-[#FFAD33]" />,
    <Target className="w-6 h-6 text-[#FF7518]" />,
    <DollarSign className="w-6 h-6 text-[#FFAD33]" />
  ];

  return (
    <section id="why-us" className="py-24 sm:py-28 bg-[#050505] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="The Zodiac Difference"
          title="Why Work With"
          highlightText="Zodiac Webs"
          description="We reject generic website templates and bloated builders in favor of custom-engineered, conversion-focused digital experiences."
        />

        {/* 2x2 Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">
          {siteConfig.whyUs.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#111111] border border-[#222222] hover:border-[#FF7518]/50 hover:shadow-[0_15px_35px_-8px_rgba(255,117,24,0.25)] transition-all duration-300 group flex items-start gap-5"
            >
              <div className="p-4 rounded-2xl bg-[#181818] border border-[#2B2B2B] flex-shrink-0 group-hover:border-[#FF7518]/40 transition-colors shadow-md">
                {icons[idx]}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FFAD33] transition-colors font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-[#B0B0B0] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { siteConfig } from '../../config/siteConfig';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 sm:py-28 bg-[#070707] border-t border-[#1C1C1C] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF7518]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Agile Delivery"
          title="From Concept to"
          highlightText="High-Converting Launch"
          description="A transparent, collaborative workflow engineered to eliminate delays and deliver a world-class website on schedule."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#FF7518]/30 to-transparent z-0 pointer-events-none" />

          {siteConfig.processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative z-10 flex flex-col p-7 rounded-3xl bg-[#111111] border border-[#222222] hover:border-[#FF7518]/50 hover:shadow-[0_12px_30px_-8px_rgba(255,117,24,0.25)] transition-all group"
            >
              {/* Numbered Glow Marker */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF7518] to-[#FFAD33] font-display">
                  {step.step}
                </span>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7518] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF7518] shadow-[0_0_10px_#FF7518]" />
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-[#FFAD33] transition-colors mb-3 font-display">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
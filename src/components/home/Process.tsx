import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';

export const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Blueprint',
      description: 'We analyze your target market, competitors, and growth objectives to plan a high-conversion digital blueprint.'
    },
    {
      step: '02',
      title: 'UI/UX Architecture',
      description: 'Sleek dark-mode aesthetics, intuitive buyer journeys, and responsive wireframes built specifically for your audience.'
    },
    {
      step: '03',
      title: 'High-Speed Development',
      description: 'Clean, modern code built with React, Vite, and Tailwind CSS. Thoroughly tested for speed, security, and responsiveness.'
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'Domain connection, SEO verification, analytics setup, and ongoing proactive maintenance for continuous growth.'
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How We Work"
          title="From Concept To Launch in"
          highlightText="4 Simple Steps"
          description="A transparent, collaborative workflow engineered to eliminate delays and deliver a world-class website on schedule."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF7518]/25 to-transparent -translate-y-12 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative z-10 flex flex-col p-7 rounded-3xl bg-[#111111] border border-[#222222] hover:border-[#FF7518]/50 hover:shadow-[0_12px_30px_-10px_rgba(255,117,24,0.2)] transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF7518] to-[#FFAD33] font-display">
                  {step.step}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF7518] shadow-[0_0_8px_#FF7518]" />
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-[#FFAD33] transition-colors mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-[#B0B0B0] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

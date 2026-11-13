import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Search, Zap, Headphones } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const ValueProps: React.FC = () => {
  const pillars = [
    {
      icon: <MonitorSmartphone className="w-6 h-6 text-[#FF7518]" />,
      title: 'Modern & Responsive Websites',
      description: 'Beautiful interfaces that adapt seamlessly to mobile, tablet, and desktop devices.'
    },
    {
      icon: <Search className="w-6 h-6 text-[#FF7518]" />,
      title: 'SEO-Friendly Designs',
      description: 'Structured, discoverable websites built with search visibility in mind.'
    },
    {
      icon: <Zap className="w-6 h-6 text-[#FF7518]" />,
      title: 'Fast & Reliable Performance',
      description: 'Lightweight engineering focused on quick loading, stability, and excellent usability.'
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#FF7518]" />,
      title: 'Ongoing Support',
      description: 'Reliable assistance, improvements, and maintenance to keep your digital presence running smoothly.'
    }
  ];

  return (
    <section className="py-24 bg-[#070707] border-y border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Essential Foundations"
          title="Everything Your Website"
          highlightText="Needs to Succeed."
          description="Powerful digital foundations built for performance, discoverability, and long-term growth."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#FF7518]/50 hover:shadow-[0_12px_30px_-8px_rgba(255,117,24,0.25)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#181818] border border-[#2B2B2B] flex items-center justify-center mb-5 group-hover:border-[#FF7518]/50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#FFAD33] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-semibold text-[#FF7518] uppercase tracking-wider">
                <span>Standard In Every Build</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

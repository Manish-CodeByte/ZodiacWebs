import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Sparkles, Gauge, Target, DollarSign, ShieldCheck, HeartHandshake } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const points = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#FF7518]" />,
      title: 'Craftsmanship Over Templates',
      description: 'We refuse to recycle generic drag-and-drop themes. Every line of code is custom structured with React and Tailwind CSS for longevity, speed, and bespoke aesthetics.'
    },
    {
      icon: <Gauge className="w-5 h-5 text-[#FF7518]" />,
      title: 'Zero Bloat Architecture',
      description: 'No heavy plugins, broken shortcodes, or redundant scripts. Ultra-lean bundles deliver sub-second paint times and frictionless mobile responsiveness.'
    },
    {
      icon: <Target className="w-5 h-5 text-[#FF7518]" />,
      title: 'Conversion-First Philosophy',
      description: 'A website that looks pretty but does not convert is just decoration. We strategically place customer trust anchors, clear value propositions, and seamless inquiry triggers.'
    },
    {
      icon: <DollarSign className="w-5 h-5 text-[#FF7518]" />,
      title: 'Transparent Pricing & Milestones',
      description: 'Zero hidden agency fees or surprise invoices. You receive clear milestone roadmaps, fixed project estimates, and complete code and design asset ownership.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#FF7518]" />,
      title: 'Security, SEO & Mobile Standards',
      description: 'Built-in SSL optimization, structured JSON-LD schemas, automated sitemaps, and WCAG accessibility compliance are standard fundamentals in every single build.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#FF7518]" />,
      title: 'Direct Developer Collaboration',
      description: 'Work directly with the software engineers designing and building your product. Fast communication, quick revisions, and personalized technical stewardship.'
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-y border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Zodiac Webs"
          title="Engineered For High Growth,"
          highlightText="Not Just Pretty Pixels"
          description="We blend creative branding with uncompromising modern engineering to help you dominate your local and global digital presence."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#111111] border border-[#222222] hover:border-[#FF7518]/50 hover:shadow-[0_12px_30px_-10px_rgba(255,117,24,0.25)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#181818] border border-[#2B2B2B] flex items-center justify-center mb-6 group-hover:border-[#FF7518]/50 transition-colors">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#FFAD33] transition-colors mb-3">
                {point.title}
              </h3>
              <p className="text-sm text-[#B0B0B0] leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

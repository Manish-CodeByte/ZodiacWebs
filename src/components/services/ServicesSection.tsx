import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  UtensilsCrossed, 
  ShoppingBag, 
  Layers, 
  Code2, 
  Headphones,
  Instagram,
  ArrowUpRight
} from 'lucide-react';
import { siteConfig, getInstagramDmUrl } from '../../config/siteConfig';
import { SectionHeader } from '../ui/SectionHeader';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#FF7518]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#FFAD33]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#FF7518]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#FFAD33]" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#FF7518]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#FFAD33]" />;
      default:
        return <Code2 className="w-6 h-6 text-[#FF7518]" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-28 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Specialized Capabilities"
          title="Engineered Services"
          highlightText="for Growth"
          description="Tailored digital solutions built from the ground up to solve real business conversion challenges."
        />

        {/* 6 Compact Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {siteConfig.services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="flex flex-col justify-between bg-[#111111] border border-[#222222] rounded-3xl p-7 hover:border-[#FF7518]/50 hover:shadow-[0_15px_35px_-10px_rgba(255,117,24,0.25)] transition-all duration-300 group"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-[#181818] border border-[#2A2A2A] group-hover:border-[#FF7518]/40 flex items-center justify-center mb-5 transition-colors">
                  {getIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#FFAD33] transition-colors mb-2.5 font-display">
                  {service.title}
                </h3>

                {/* 1-Line Description */}
                <p className="text-sm text-[#B0B0B0] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Action Link directly to Instagram DM */}
              <div className="pt-6 mt-6 border-t border-[#1C1C1C] flex items-center justify-between">
                <a
                  href={getInstagramDmUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#FF7518] hover:text-[#FFAD33] inline-flex items-center gap-1.5 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>DM to Discuss</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <span className="text-[11px] text-[#666666] uppercase tracking-wider font-semibold">
                  Custom Build
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
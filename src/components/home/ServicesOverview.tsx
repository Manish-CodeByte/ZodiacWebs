import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  UtensilsCrossed, 
  ShoppingBag, 
  Layers, 
  Code2, 
  Headphones, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const ServicesOverview: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#FF7518]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#FF7518]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#FF7518]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#FF7518]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#FF7518]" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-[#FF7518]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#FF7518]" />;
    }
  };

  return (
    <section className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Specialized Capabilities"
          title="Digital Solutions Built"
          highlightText="Around Your Business."
          description="We do not believe in one-size-fits-all templates. Every project is built from the ground up to solve your unique business conversion challenges."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative flex flex-col justify-between bg-[#111111] border border-[#222222] rounded-3xl p-7 hover:border-[#FF7518]/50 hover:shadow-[0_15px_35px_-10px_rgba(255,117,24,0.25)] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-[#1A1A1A] border border-[#2E2E2E] group-hover:border-[#FF7518]/40 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  {service.badge && (
                    <Badge variant="orange" size="sm">
                      {service.badge}
                    </Badge>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#FFAD33] transition-colors mb-2 font-display">
                  {service.title}
                </h3>

                <p className="text-sm text-[#B0B0B0] leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Key practical capabilities */}
                <div className="space-y-2 pt-2 border-t border-white/5 mb-6">
                  {service.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#D1D1D1]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7518] flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
                <Link
                  to={`/services#${service.id}`}
                  className="text-xs font-bold text-[#FFAD33] hover:text-[#FF7518] inline-flex items-center gap-1 group/link"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <Link to={`/contact?service=${service.id}`}>
                  <Button variant="outline" size="sm" className="text-xs py-1.5 px-3">
                    Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Callout */}
        <div className="mt-14 text-center">
          <Link to="/services">
            <Button
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4 text-[#FF7518]" />}
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

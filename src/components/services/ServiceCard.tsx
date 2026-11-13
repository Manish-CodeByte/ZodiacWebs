import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Briefcase, 
  UtensilsCrossed, 
  ShoppingBag, 
  Layers, 
  Code2, 
  Headphones,
  TrendingUp,
  Target
} from 'lucide-react';
import { ServiceItem } from '../../types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#FF7518]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#FF7518]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#FF7518]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#FF7518]" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#FF7518]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#FF7518]" />;
      default:
        return <Code2 className="w-6 h-6 text-[#FF7518]" />;
    }
  };

  // Alternate left/right visual mockup
  const isEven = index % 2 === 0;

  return (
    <div
      id={service.id}
      className="scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-[#111111] border border-[#242424] hover:border-[#FF7518]/40 transition-all duration-300 relative overflow-hidden"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        {/* Information Column */}
        <div className={`lg:col-span-7 space-y-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#1A1A1A] border border-[#333333]">
              {getIcon(service.icon)}
            </div>
            {service.badge && (
              <Badge variant="orange" size="sm">
                {service.badge}
              </Badge>
            )}
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-base text-[#D1D1D1] leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFAD33] mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#FF7518]" />
              Core Technical & UX Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#B0B0B0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7518] mt-1.5 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Benefits */}
          <div className="p-4 rounded-2xl bg-[#161616] border border-[#262626]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFAD33] mb-2 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-[#FF7518]" />
              Measurable Business ROI
            </h4>
            <div className="space-y-1.5">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="text-xs text-[#C0C0C0] flex items-center gap-2">
                  <span className="text-[#FF7518] font-bold">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal for & Action */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#202020]">
            <div className="text-xs text-[#8E8E8E] flex items-center gap-1.5">
              <Target className="w-4 h-4 text-[#FF7518] flex-shrink-0" />
              <span>
                <strong>Ideal for:</strong> {service.idealFor}
              </span>
            </div>

            <Link to={`/contact?service=${service.id}`} className="flex-shrink-0">
              <Button
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Request a Quotation
              </Button>
            </Link>
          </div>
        </div>

        {/* Visual Mockup Preview Column */}
        <div className={`lg:col-span-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
          <div className="relative rounded-2xl bg-[#181818] border border-[#2A2A2A] p-5 shadow-2xl overflow-hidden group">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7518]/10 blur-3xl pointer-events-none rounded-full" />

            <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] text-[#777777] font-mono tracking-wider">
                {service.slug}.zodiacwebs.com
              </span>
            </div>

            {/* Visual layout blueprint preview */}
            <div className="space-y-3">
              <div className="h-6 w-3/4 bg-[#262626] rounded-md animate-pulse" />
              <div className="h-24 w-full bg-[#111111] rounded-xl border border-[#222222] p-3 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="h-3 w-1/2 bg-[#FF7518]/30 rounded" />
                  <div className="h-2 w-5/6 bg-[#333333] rounded" />
                </div>
                <div className="h-4 w-24 bg-gradient-to-r from-[#FF7518] to-[#FFAD33] rounded" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="h-16 bg-[#141414] rounded-lg border border-[#222222] p-2 flex flex-col justify-between">
                  <div className="h-2 w-12 bg-[#333333] rounded" />
                  <div className="h-2 w-8 bg-[#FF7518]/40 rounded" />
                </div>
                <div className="h-16 bg-[#141414] rounded-lg border border-[#222222] p-2 flex flex-col justify-between">
                  <div className="h-2 w-12 bg-[#333333] rounded" />
                  <div className="h-2 w-8 bg-[#FFAD33]/40 rounded" />
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A0A0A0]">
              <span className="font-semibold text-white">Full Responsive Layout</span>
              <span className="text-[#FF7518]">Mobile & 4K Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

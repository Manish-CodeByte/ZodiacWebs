import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Building2, UtensilsCrossed, ShoppingBag, UserCheck, ArrowRight, Check } from 'lucide-react';

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      title: 'Business Websites',
      description:
        'Professional, credible web architectures tailored for corporate brands, consultancies, and service agencies looking to dominate their market.',
      icon: Building2,
      accent: 'orange',
      features: [
        'Conversion-focused architecture',
        'Lead capture & CRM integrations',
        'Interactive service showcases',
        'Enterprise-grade security',
      ],
      badge: 'High Conversion',
    },
    {
      title: 'Cafe & Restaurants',
      description:
        'Mouthwatering digital experiences featuring interactive digital menus, online reservation flows, table booking, and local map discovery.',
      icon: UtensilsCrossed,
      accent: 'gold',
      features: [
        'Mobile-friendly live menu systems',
        'Direct table reservation & WhatsApp orders',
        'Local SEO & Google Maps optimization',
        'Fast-loading visual imagery',
      ],
      badge: 'Local Growth',
    },
    {
      title: 'E-commerce Stores',
      description:
        'High-converting, frictionless digital storefronts built to showcase your products, minimize cart abandonment, and scale revenue effortlessly.',
      icon: ShoppingBag,
      accent: 'orange',
      features: [
        'Seamless payment gateway integrations',
        'Optimized product catalogs & filtering',
        'Instant mobile checkout experience',
        'Automated inventory & order alerts',
      ],
      badge: 'Revenue Scaler',
    },
    {
      title: 'Portfolio & Personal Sites',
      description:
        'Standout personal brand sites for creators, executives, photographers, and founders who want an unforgettable first impression.',
      icon: UserCheck,
      accent: 'gold',
      features: [
        'Curated case study presentations',
        'Smooth storytelling & dynamic micro-interactions',
        'Direct booking / calendar links',
        'Social proof & press highlights',
      ],
      badge: 'Personal Brand',
    },
  ];

  const handleSelectService = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#FF6B00] uppercase bg-[#FF6B00]/10 px-4 py-1.5 rounded-full border border-[#FF6B00]/30 inline-block mb-4">
              What We Craft
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Tailored Digital Solutions for{' '}
              <span className="text-gradient-orange-gold">Every Ambition</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A0AAB2]">
              Whether you need to capture enterprise leads, fill restaurant tables, or sell products worldwide, we craft digital platforms that deliver results.
            </p>
          </motion.div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOrange = service.accent === 'orange';

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                className="group relative rounded-2xl glass-card p-7 sm:p-9 transition-all duration-300 hover:border-[#FF6B00]/40 hover:shadow-glow-card-hover flex flex-col justify-between"
              >
                {/* Glow accent pill */}
                <div className="absolute top-0 right-8 -translate-y-1/2">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                      isOrange
                        ? 'bg-[#FF6B00]/20 text-[#FF6B00] border-[#FF6B00]/40'
                        : 'bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/40'
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>

                <div>
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                      isOrange
                        ? 'bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30 shadow-[0_0_15px_rgba(255,107,0,0.2)]'
                        : 'bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/30 shadow-[0_0_15px_rgba(255,215,0,0.2)]'
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#A0AAB2] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8 border-t border-white/5 pt-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-sm text-[#CAD1D7]">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          isOrange ? 'bg-[#FF6B00]/20 text-[#FF6B00]' : 'bg-[#FFD700]/20 text-[#FFD700]'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <a
                  href="#contact"
                  onClick={handleSelectService}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-sm font-semibold text-white group-hover:text-[#FF6B00] transition-colors min-h-[44px]"
                >
                  <span>Build your {service.title.toLowerCase()}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

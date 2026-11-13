import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gauge, Target, MessageSquareCode, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const WhyUs: React.FC = () => {
  const differentiators = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#FF7518]" />,
      title: 'Built Around Your Brand',
      description: "Every website is crafted around the business's identity, audience, and objectives. We build bespoke digital assets that differentiate you in your market."
    },
    {
      icon: <Gauge className="w-5 h-5 text-[#FF7518]" />,
      title: 'Performance Without Compromise',
      description: 'Clean code and modern engineering support fast, reliable experiences. Lightweight bundles, optimized asset loading, and sub-second initial paint times.'
    },
    {
      icon: <Target className="w-5 h-5 text-[#FF7518]" />,
      title: 'Conversion-First Thinking',
      description: 'Thoughtful user journeys encourage enquiries, bookings, purchases, and meaningful actions. Every page moves toward a clear business conversion objective.'
    },
    {
      icon: <MessageSquareCode className="w-5 h-5 text-[#FF7518]" />,
      title: 'Clear Communication',
      description: 'Transparent scope, collaborative feedback, and practical delivery milestones. Work directly with engineers without confusing technical jargon.'
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-y border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial Messaging & Brand Philosophy */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#141414] border border-[#FF7518]/30 text-[#FFAD33]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF7518]" />
              The Zodiac Webs Advantage
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-display">
              Not Just Websites.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7518] to-[#FFAD33]">
                Digital Experiences
              </span>{' '}
              That Mean Business.
            </h2>

            <p className="text-base text-[#B0B0B0] leading-relaxed">
              We reject bloated page-builder templates and fragile plugins. Instead, we engineer tailored web platforms that command attention, clarify your value, and transform casual browsers into long-term customers.
            </p>

            <div className="pt-2">
              <Link to="/about">
                <Button variant="secondary" size="md" rightIcon={<ArrowRight className="w-4 h-4 text-[#FF7518]" />}>
                  Learn More About Our Philosophy
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Vertical List of Differentiators */}
          <div className="lg:col-span-7 space-y-4">
            {differentiators.map((diff, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className="p-7 sm:p-8 rounded-3xl bg-[#111111] border border-[#222222] hover:border-[#FF7518]/50 hover:shadow-[0_10px_30px_rgba(255,117,24,0.15)] transition-all duration-300 group flex items-start gap-5"
              >
                <div className="p-3.5 rounded-2xl bg-[#181818] border border-[#2B2B2B] flex-shrink-0 group-hover:border-[#FF7518]/40 transition-colors">
                  {diff.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FFAD33] transition-colors mb-2 font-display">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-[#B0B0B0] leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

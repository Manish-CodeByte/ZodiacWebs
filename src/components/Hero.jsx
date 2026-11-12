import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Star } from 'lucide-react';
import GlowingZLogo from './GlowingZLogo';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Glowing Official Zodiac Logo in Hero */}
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <div className="relative group cursor-pointer">
              {/* Outer atmospheric aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF6B00] via-[#FFD700] to-[#FF6B00] opacity-40 blur-2xl group-hover:opacity-65 transition-opacity duration-500 scale-110" />
              <GlowingZLogo
                size={148}
                className="sm:hidden drop-shadow-[0_0_35px_rgba(255,107,0,0.5)] transform group-hover:scale-105 transition-all duration-300"
              />
              <GlowingZLogo
                size={184}
                className="hidden sm:inline-flex drop-shadow-[0_0_45px_rgba(255,107,0,0.55)] transform group-hover:scale-105 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Agency Tag / Pill */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-gradient-to-r from-[#FF6B00]/15 to-[#FFD700]/15 border border-[#FF6B00]/30 text-white shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
              Modern Web Design & Development Agency
            </span>
          </motion.div>

          {/* Exact Headline from PRD */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] sm:leading-[1.1]"
          >
            Turn Visitors into{' '}
            <span className="text-gradient-orange-gold drop-shadow-[0_0_25px_rgba(255,107,0,0.3)]">
              Customers.
            </span>
          </motion.h1>

          {/* Exact Subheadline from PRD */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold text-[#A0AAB2] max-w-2xl"
          >
            We Build. You Grow.
          </motion.p>

          {/* Additional value context */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base sm:text-lg text-[#A0AAB2]/80 max-w-xl leading-relaxed"
          >
            High-performance, dark-mode crafted websites engineered for lightning speed, flawless responsiveness, and maximum conversion.
          </motion.p>

          {/* CTA Orange Button from PRD */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#FF6B00] via-[#FF7A1A] to-[#FF8533] hover:from-[#FF8533] hover:to-[#FF6B00] shadow-glow-orange hover:shadow-glow-orange-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 min-h-[52px]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </a>

            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-[#A0AAB2] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 min-h-[52px]"
            >
              Explore Our Work
            </a>
          </motion.div>

          {/* Trust Highlights & Metrics */}
          <motion.div
            variants={itemVariants}
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-left w-full max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">99+ Speed</div>
                <div className="text-xs text-[#A0AAB2]">Lighthouse score</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] shrink-0">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">100% Custom</div>
                <div className="text-xs text-[#A0AAB2]">Tailored designs</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">SEO First</div>
                <div className="text-xs text-[#A0AAB2]">Top search rank</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">24/7 Care</div>
                <div className="text-xs text-[#A0AAB2]">Direct support</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function BackgroundOrbs() {
  const shouldReduceMotion = useReducedMotion();

  const orbVariants = {
    animateOne: {
      x: [0, 50, -30, 0],
      y: [0, -60, 40, 0],
      scale: [1, 1.15, 0.95, 1],
      transition: {
        duration: 18,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    animateTwo: {
      x: [0, -60, 40, 0],
      y: [0, 50, -40, 0],
      scale: [1, 1.2, 0.9, 1],
      transition: {
        duration: 22,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    animateThree: {
      x: [0, 40, -50, 0],
      y: [0, 40, -30, 0],
      scale: [0.9, 1.1, 1, 0.9],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Base radial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#070D18] to-[#050B14]" />

      {/* Subtle star / constellation dust */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), radial-gradient(rgba(255, 107, 0, 0.25) 1px, transparent 1px)`,
          backgroundSize: '48px 48px, 96px 96px',
          backgroundPosition: '0 0, 24px 24px',
        }}
      />

      {/* Floating Orb 1 - Neon Orange (Top Left / Center) */}
      <motion.div
        variants={shouldReduceMotion ? {} : orbVariants}
        animate={shouldReduceMotion ? undefined : "animateOne"}
        className="absolute -top-32 -left-20 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 107, 0, 0.16) 0%, rgba(255, 107, 0, 0.03) 60%, transparent 75%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Floating Orb 2 - Gold (Middle Right) */}
      <motion.div
        variants={shouldReduceMotion ? {} : orbVariants}
        animate={shouldReduceMotion ? undefined : "animateTwo"}
        className="absolute top-[35%] -right-28 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.14) 0%, rgba(255, 107, 0, 0.04) 55%, transparent 75%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Floating Orb 3 - Deep Orange / Gold glow near Contact / Footer */}
      <motion.div
        variants={shouldReduceMotion ? {} : orbVariants}
        animate={shouldReduceMotion ? undefined : "animateThree"}
        className="absolute -bottom-40 left-[20%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 107, 0, 0.13) 0%, rgba(255, 215, 0, 0.04) 50%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
    </div>
  );
}

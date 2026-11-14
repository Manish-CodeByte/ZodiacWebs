import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Instagram, 
  ArrowUpRight, 
  AlertTriangle, 
  Lightbulb, 
  Layers, 
  Briefcase, 
  UtensilsCrossed, 
  ShoppingBag, 
  Zap, 
  Coffee, 
  Code2 
} from 'lucide-react';
import { PortfolioProject } from '../../data/portfolioData';
import { getInstagramDmUrl } from '../../config/siteConfig';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll and focus modal
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-12 h-12 text-[#FF7518]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-12 h-12 text-[#FFAD33]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-12 h-12 text-[#FF7518]" />;
      case 'Layers':
        return <Layers className="w-12 h-12 text-[#FFAD33]" />;
      case 'Zap':
        return <Zap className="w-12 h-12 text-[#FF7518]" />;
      case 'Coffee':
        return <Coffee className="w-12 h-12 text-[#FFAD33]" />;
      default:
        return <Code2 className="w-12 h-12 text-[#FF7518]" />;
    }
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Dialog Card */}
        <motion.div
          ref={modalRef}
          tabIndex={-1}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#0E0E0E] border border-[#2B2B2B] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 focus:outline-none"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/80 border border-white/10 text-white hover:text-[#FF7518] hover:border-[#FF7518]/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7518]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Visual: Placeholder gradient + cosmic ring + icon */}
          <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full bg-gradient-to-br from-[#161616] via-[#111111] to-[#080808] border-b border-[#222222] overflow-hidden flex items-center justify-center">
            {/* Ambient Radial Accent Glow */}
            <div className="absolute inset-0 bg-radial-glow from-[#FF7518]/20 via-transparent to-transparent pointer-events-none" />

            {/* Subtle orbital rings */}
            <div className="absolute w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute w-44 h-44 rounded-full border border-dashed border-[#FF7518]/20 pointer-events-none" />

            {/* Central Icon */}
            <div className="relative z-10 p-5 rounded-3xl bg-[#1A1A1A]/90 border border-white/10 shadow-2xl backdrop-blur-md">
              {renderIcon(project.iconName)}
            </div>

            {/* Floating Badges */}
            <div className="absolute bottom-4 left-6 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/80 text-[#FFAD33] border border-[#FF7518]/40 shadow-sm">
                {project.badge}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1A1A1A] text-white/80 border border-white/10">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-[#8E8E8E] hidden sm:inline">
                • Sample Project Architecture
              </span>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 space-y-7">
            {/* Title & Description */}
            <div>
              <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-[#D1D1D1] leading-relaxed">
                {project.fullDesc}
              </p>
            </div>

            {/* Challenge -> Solution Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#141414] border border-[#242424]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>The Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#141414] border border-[#FF7518]/30">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7518] mb-2">
                  <Lightbulb className="w-4 h-4 text-[#FF7518] flex-shrink-0" />
                  <span>The Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-[#E0E0E0] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFAD33] mb-3">
                Technologies & Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#161616] border border-[#2B2B2B] text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#8E8E8E]">
                Looking to build something tailored for your business?
              </div>

              <a
                href={getInstagramDmUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF7518] to-[#FFAD33] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(255,117,24,0.35)] hover:shadow-[0_0_30px_rgba(255,173,51,0.5)] transition-all"
              >
                <Instagram className="w-4 h-4 stroke-[2.2]" />
                <span>Start a similar project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
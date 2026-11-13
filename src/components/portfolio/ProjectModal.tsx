import React, { useEffect, useRef } from 'react';
import { X, CheckCircle, Zap, Shield, ArrowRight, ExternalLink, AlertTriangle, Lightbulb } from 'lucide-react';
import { ProjectItem } from '../../types';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

interface ProjectModalProps {
  project: ProjectItem;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll and focus modal
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    modalRef.current?.focus();
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative bg-[#0E0E0E] border border-[#262626] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-10 focus:outline-none"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/75 border border-white/10 text-white hover:text-[#FF7518] hover:border-[#FF7518]/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7518]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full bg-[#181818] overflow-hidden">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/80 text-[#FFAD33] border border-[#FF7518]/40 shadow-sm">
                {project.isDemo ? 'DEMO SHOWCASE' : 'LIVE CLIENT BUILD'}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1A1A1A] text-white/80 border border-white/10">
                {project.categoryLabel}
              </span>
            </div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFAD33] mb-2">
              Overview & Architecture
            </h3>
            <p className="text-sm sm:text-base text-[#D1D1D1] leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Challenge -> Solution Breakdown */}
          {(project.challenge || project.solution) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.challenge && (
                <div className="p-5 rounded-2xl bg-[#141414] border border-[#222222]">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>The Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-5 rounded-2xl bg-[#141414] border border-[#FF7518]/30">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7518] mb-2">
                    <Lightbulb className="w-4 h-4 text-[#FF7518] flex-shrink-0" />
                    <span>The Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#D1D1D1] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Key Metrics / Benchmarks */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFAD33] mb-3">
              Performance Benchmarks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#141414] border border-[#222222]">
                  <span className="text-xs text-[#8E8E8E] block mb-1">{m.label}</span>
                  <span className="text-lg font-black text-white flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-[#FF7518]" />
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFAD33] mb-3">
              Key Deliverables & Integrations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((del, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#B0B0B0]">
                  <CheckCircle className="w-4 h-4 text-[#FF7518] flex-shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFAD33] mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#181818] border border-[#282828] text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#8E8E8E]">
              <Shield className="w-4 h-4 text-[#FF7518]" />
              <span>Need a custom architecture for your company?</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    size="md"
                    rightIcon={<ExternalLink className="w-4 h-4" />}
                    className="w-full sm:w-auto text-xs"
                  >
                    Live Demo
                  </Button>
                </a>
              )}
              <Link
                to={`/contact?service=${project.category}`}
                onClick={onClose}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Request Similar Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

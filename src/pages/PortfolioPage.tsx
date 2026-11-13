import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from '../components/portfolio/ProjectModal';
import { CtaBanner } from '../components/home/CtaBanner';
import { ExternalLink, Sparkles, Filter } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'business', label: 'Business' },
    { id: 'restaurant', label: 'Café & Food' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'portfolio', label: 'Portfolios' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? portfolioData
    : portfolioData.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-28 pb-16 min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-radial-hero relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeader
            badge="Selected Works & Case Studies"
            title="Design Architecture &"
            highlightText="Interactive Prototypes"
            description="Explore our curated agency showcases. In accordance with our integrity standards, all conceptual demos are explicitly labeled."
          />
        </div>
      </section>

      {/* Filter Tabs with layout animation */}
      <section className="py-8 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#8E8E8E] mr-2">
              <Filter className="w-3.5 h-3.5" /> Filter by:
            </span>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    isSelected
                      ? 'text-black font-bold'
                      : 'bg-[#141414] text-[#B0B0B0] border border-[#262626] hover:text-white hover:border-white/20'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="portfolioActiveTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF7518] to-[#FFAD33] shadow-[0_0_20px_rgba(255,117,24,0.35)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid with layout animation */}
      <section className="py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setActiveModalProject(project)}
                  className="flex flex-col overflow-hidden rounded-3xl bg-[#111111] border border-[#222222] hover:border-[#FF7518]/50 hover:shadow-[0_15px_35px_rgba(255,117,24,0.2)] transition-all duration-300 group cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#181818]">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-85" />

                    {/* Demo/Live Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/85 backdrop-blur-md text-[#FFAD33] border border-[#FF7518]/40 shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#FF7518]" />
                        {project.isDemo ? 'DEMO' : 'LIVE'}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/75 text-white/90 border border-white/10">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#FFAD33] transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#B0B0B0] line-clamp-2 mb-4">
                        {project.shortDesc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-full text-[11px] bg-[#181818] border border-[#282828] text-[#A0A0A0]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
                      <span className="text-xs font-bold text-[#FF7518] group-hover:text-[#FFAD33] flex items-center gap-1.5">
                        <span>View Architecture & Specs</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Active Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}

      <CtaBanner />
    </div>
  );
};

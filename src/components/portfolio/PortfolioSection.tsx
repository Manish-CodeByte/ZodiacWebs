import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  UtensilsCrossed, 
  ShoppingBag, 
  Layers, 
  Zap, 
  Coffee, 
  Code2, 
  ExternalLink 
} from 'lucide-react';
import { portfolioData, PortfolioProject } from '../../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { SectionHeader } from '../ui/SectionHeader';

type CategoryFilter = 'all' | 'business' | 'restaurant' | 'ecommerce' | 'portfolio';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filterTabs: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'business', label: 'Business' },
    { id: 'restaurant', label: 'Café & Food' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'portfolio', label: 'Portfolios' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter((p) => p.category === activeFilter);

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-8 h-8 text-[#FF7518]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-8 h-8 text-[#FFAD33]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-8 h-8 text-[#FF7518]" />;
      case 'Layers':
        return <Layers className="w-8 h-8 text-[#FFAD33]" />;
      case 'Zap':
        return <Zap className="w-8 h-8 text-[#FF7518]" />;
      case 'Coffee':
        return <Coffee className="w-8 h-8 text-[#FFAD33]" />;
      default:
        return <Code2 className="w-8 h-8 text-[#FF7518]" />;
    }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-28 bg-[#070707] border-t border-[#1C1C1C] relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#FF7518]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Sample Work & Concepts"
          title="Digital Craftsmanship"
          highlightText="In Action"
          description="Explore our sample project architectures tailored for local businesses, dining brands, e-commerce storefronts, and creative founders."
        />

        {/* Filter Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                  isActive
                    ? 'text-black font-extrabold shadow-[0_0_20px_rgba(255,117,24,0.3)]'
                    : 'text-[#A0A0A0] hover:text-white bg-[#121212] border border-[#242424]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF7518] to-[#FFAD33]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 6 Project Cards Grid */}
        <motion.div 
          layout
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer flex flex-col overflow-hidden rounded-3xl bg-[#111111] border border-[#222222] hover:border-[#FF7518]/50 hover:shadow-[0_15px_35px_-8px_rgba(255,117,24,0.3)] transition-all duration-300 group"
              >
                {/* Visual Placeholder Header with Gradient & Cosmic Ring Accent */}
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accentGradient} flex items-center justify-center border-b border-[#1E1E1E]`}>
                  {/* Subtle inner grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />

                  {/* Icon Circle */}
                  <div className="relative z-10 p-5 rounded-2xl bg-[#141414]/90 border border-white/10 group-hover:scale-110 group-hover:border-[#FF7518]/50 transition-all duration-300 shadow-xl">
                    {getProjectIcon(project.iconName)}
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-black/85 backdrop-blur-md text-[#FFAD33] border border-[#FF7518]/40 shadow-sm">
                      {project.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-[#1A1A1A]/80 text-[#B0B0B0] border border-white/5">
                      Sample project
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/70 text-white/90 border border-white/10">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FFAD33] transition-colors mb-2 font-display">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#B0B0B0] line-clamp-2 leading-relaxed mb-4">
                      {project.shortDesc}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-full text-[11px] bg-[#181818] border border-[#282828] text-[#A0A0A0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#FF7518] group-hover:text-[#FFAD33] flex items-center gap-1.5">
                      <span>View Project Architecture</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] text-[#777777] font-medium">Click to inspect</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { ProjectModal } from '../portfolio/ProjectModal';
import { ProjectItem } from '../../types';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Take the first 3 projects for the home feature showcase
  const featured = portfolioData.slice(0, 3);

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Work"
          title="Recent Digital Creations &"
          highlightText="Showcase Prototypes"
          description="Explore our high-fidelity concepts and responsive architectures built for diverse modern industries."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden rounded-3xl bg-[#111111] border border-[#222222] hover:border-[#FF7518]/50 hover:shadow-[0_15px_35px_rgba(255,117,24,0.15)] transition-all duration-300 group"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#181818]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

                {/* Badge: Clearly labeled demo/concept as per instructions */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#FFAD33] border border-[#FF7518]/40">
                    {project.isDemo ? 'Concept Showcase' : 'Client Project'}
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
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FFAD33] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#B0B0B0] line-clamp-2 mb-4">
                    {project.shortDesc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full text-[11px] bg-[#181818] border border-[#262626] text-[#A0A0A0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-[#FF7518] hover:text-[#FFAD33] flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>View Architecture Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-14 text-center">
          <Link to="/portfolio">
            <Button
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4 text-[#FF7518]" />}
            >
              Explore Full Portfolio & Case Studies
            </Button>
          </Link>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

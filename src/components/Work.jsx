import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Layers, Sparkles } from 'lucide-react';

export default function Work() {
  const shouldReduceMotion = useReducedMotion();

  const projects = [
    {
      name: 'Aura Dining & Lounge',
      niche: 'Cafe & Restaurant',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      description:
        'A multi-sensory web experience featuring interactive tasting menus, 3D ambient lighting effects, and an instantaneous WhatsApp table booking integration.',
      tagColor: '#FFD700',
      gradient: 'from-amber-950/40 via-orange-950/30 to-black/60',
      stats: '3.4x Booking Growth',
    },
    {
      name: 'Apex Nova Logistics',
      niche: 'Business & Enterprise',
      techStack: ['Next.js', 'Tailwind CSS', 'Headless CMS'],
      description:
        'A high-performance corporate portal built for a multinational freight operator, boasting interactive shipment calculators and instant lead capture forms.',
      tagColor: '#FF6B00',
      gradient: 'from-orange-950/40 via-zinc-950/30 to-black/60',
      stats: '99/100 Lighthouse',
    },
    {
      name: 'Luxe Minimalist',
      niche: 'E-commerce Store',
      techStack: ['React', 'Shopify API', 'Tailwind CSS'],
      description:
        'An ultra-fast luxury apparel storefront with lightning product previews, curated lookbooks, and frictionless single-click mobile checkouts.',
      tagColor: '#FF6B00',
      gradient: 'from-yellow-950/30 via-neutral-950/40 to-black/60',
      stats: '+42% Mobile Checkout',
    },
  ];

  const handleProjectClick = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="work" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#FF6B00] uppercase bg-[#FF6B00]/10 px-4 py-1.5 rounded-full border border-[#FF6B00]/30 inline-block mb-4">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Recent Projects & <span className="text-gradient-orange-gold">Client Results</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A0AAB2]">
              Explore a selection of crafted digital experiences engineered for maximum user engagement and measurable commercial impact.
            </p>
          </motion.div>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                className="group relative rounded-2xl glass-card overflow-hidden transition-all duration-300 hover:border-[#FF6B00]/40 hover:shadow-glow-card-hover flex flex-col justify-between"
              >
                {/* Mockup Preview Area */}
                <div
                  className={`relative h-52 sm:h-56 p-6 flex flex-col justify-between bg-gradient-to-br ${project.gradient} border-b border-white/10 overflow-hidden`}
                >
                  {/* Subtle Grid Accent */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Browser Bar Mockup */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="text-[10px] text-[#A0AAB2] ml-2 font-mono truncate max-w-[110px]">
                        zodiac-case-{index + 1}.app
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30">
                      <Sparkles className="w-3 h-3" />
                      {project.stats}
                    </span>
                  </div>

                  {/* Visual Project Title Emblem */}
                  <div className="relative z-10 mt-auto">
                    <div className="inline-block px-3 py-1 rounded-md bg-black/60 border border-white/10 text-xs font-semibold text-[#FFD700] mb-2 backdrop-blur-sm">
                      {project.niche}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <p className="text-sm text-[#A0AAB2] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mb-6">
                      <div className="text-xs uppercase tracking-wider text-[#A0AAB2]/70 font-semibold mb-2 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#FF6B00]" />
                        <span>Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-[#CAD1D7] border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <a
                    href="#contact"
                    onClick={handleProjectClick}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-sm font-semibold text-white group-hover:text-[#FF6B00] transition-colors min-h-[44px]"
                  >
                    <span>Request similar architecture</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Instagram, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig, getInstagramDmUrl } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#1C1C1C] relative overflow-hidden pt-16 pb-12">
      {/* Ambient orange glow in footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#FF7518]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#1A1A1A]">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group inline-flex">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#FF7518]/40 shadow-[0_0_20px_rgba(255,117,24,0.3)]">
                <img
                  src={siteConfig.logo}
                  alt="Zodiac Webs Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-wider text-white uppercase font-display">
                  Zodiac Webs
                </span>
                <span className="text-xs tracking-widest text-[#FFAD33] font-semibold uppercase">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#B0B0B0] max-w-sm leading-relaxed">
              We design and engineer high-performance digital experiences that turn casual visitors into loyal paying customers. 
              <span className="block mt-2 font-medium text-white/90">
                {siteConfig.brandMessage}
              </span>
            </p>

            {/* Direct Instagram Contact Pill */}
            <div className="pt-2">
              <a
                href={getInstagramDmUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#141414] border border-[#FF7518]/40 text-white hover:border-[#FFAD33] hover:shadow-[0_0_20px_rgba(255,117,24,0.25)] transition-all text-xs font-bold uppercase tracking-wider group"
              >
                <Instagram className="w-4 h-4 text-[#FF7518] group-hover:scale-110 transition-transform" />
                <span>DM Us on Instagram: {siteConfig.contact.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-4 text-[#FFAD33]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-[#B0B0B0] hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-4 text-[#FFAD33]">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services#business-websites" className="text-[#B0B0B0] hover:text-white transition-colors">
                  Business Websites
                </Link>
              </li>
              <li>
                <Link to="/services#cafe-restaurant" className="text-[#B0B0B0] hover:text-white transition-colors">
                  Cafe & Restaurant Sites
                </Link>
              </li>
              <li>
                <Link to="/services#ecommerce-stores" className="text-[#B0B0B0] hover:text-white transition-colors">
                  E-Commerce Stores
                </Link>
              </li>
              <li>
                <Link to="/services#portfolio-personal" className="text-[#B0B0B0] hover:text-white transition-colors">
                  Portfolios & Personal
                </Link>
              </li>
              <li>
                <Link to="/services#modern-responsive-dev" className="text-[#B0B0B0] hover:text-white transition-colors">
                  Modern Development
                </Link>
              </li>
              <li>
                <Link to="/services#support-maintenance" className="text-[#B0B0B0] hover:text-white transition-colors">
                  Ongoing Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Directly - Instagram DM First */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-4 text-[#FFAD33]">
              Connect Directly
            </h3>
            <div className="space-y-3 text-sm">
              {/* Instagram DM Highlight Card */}
              <a
                href={getInstagramDmUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#141414] border border-[#2B2B2B] hover:border-[#FF7518]/60 hover:shadow-[0_0_20px_rgba(255,117,24,0.15)] transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF7518] to-[#FFAD33] flex items-center justify-center text-black flex-shrink-0 shadow-md">
                  <Instagram className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-[#A0A0A0] uppercase font-bold tracking-wider">
                    Instagram Direct
                  </span>
                  <span className="text-xs font-extrabold text-white group-hover:text-[#FFAD33] transition-colors truncate">
                    {siteConfig.contact.instagramHandle}
                  </span>
                </div>
              </a>

              {/* Inquiry Form Link */}
              <Link
                to="/contact"
                className="flex items-center justify-between p-3 rounded-2xl bg-[#111111] border border-[#222222] hover:border-white/20 text-xs text-[#B0B0B0] hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF7518]" />
                  <span>Send Project Inquiry</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF7518] group-hover:translate-x-1 transition-transform" />
              </Link>

              <p className="text-[11px] text-[#777777] pt-1">
                ⚡ Fastest replies via Instagram DM. Reach out for projects, colabs & instant quotes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8E8E]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Zodiac Webs. All rights reserved.</span>
            <span>•</span>
            <span className="text-[#FF7518] font-medium">{siteConfig.tagline}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#B0B0B0] hover:text-white transition-colors px-3 py-1.5 rounded-full bg-[#111111] border border-[#242424] hover:border-[#FF7518]/50"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#FF7518]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

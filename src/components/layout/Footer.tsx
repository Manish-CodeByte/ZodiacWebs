import React from 'react';
import { ArrowUp, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig, getInstagramDmUrl } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#1C1C1C] relative overflow-hidden pt-16 pb-12">
      {/* Ambient subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#FF7518]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1A1A1A]">
          {/* Brand Col (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3.5 group inline-flex">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#FF7518]/40 shadow-[0_0_20px_rgba(255,117,24,0.3)] transition-transform group-hover:scale-105">
                <img
                  src={siteConfig.logo}
                  alt="Zodiac Webs Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-wider text-white uppercase font-display">
                  {siteConfig.name}
                </span>
                <span className="text-xs tracking-widest text-[#FFAD33] font-semibold uppercase">
                  {siteConfig.tagline}
                </span>
              </div>
            </a>

            <p className="text-sm text-[#B0B0B0] max-w-sm leading-relaxed">
              We design and engineer high-performance digital experiences that turn casual visitors into loyal paying customers.
              <span className="block mt-2 font-medium text-white/90">
                {siteConfig.brandMessage}
              </span>
            </p>

            {/* Direct Channel Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={getInstagramDmUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] border border-[#FF7518]/40 text-white hover:border-[#FFAD33] transition-all text-xs font-bold uppercase tracking-wider group shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5 text-[#FF7518] group-hover:scale-110 transition-transform" />
                <span>DM @{siteConfig.instagramHandle}</span>
                <ArrowUpRight className="w-3 h-3 text-[#FFAD33]" />
              </a>

              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] border border-[#262626] text-[#B0B0B0] hover:text-white hover:border-white/20 transition-all text-xs font-semibold"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF7518]" />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Quick Anchor Navigation Links (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-4 text-[#FFAD33]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[#B0B0B0] hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Direct Card (4 cols on lg) */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-4 text-[#FFAD33]">
              Connect Directly
            </h3>
            <div className="space-y-3">
              <a
                href={getInstagramDmUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#FF7518]/60 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF7518] to-[#FFAD33] flex items-center justify-center text-black flex-shrink-0 shadow-md">
                  <Instagram className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-[#A0A0A0] uppercase font-bold tracking-wider">
                    Instagram Direct
                  </span>
                  <span className="text-xs font-extrabold text-white group-hover:text-[#FFAD33] transition-colors truncate">
                    @{siteConfig.instagramHandle}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#111111] border border-[#222222] hover:border-white/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#181818] border border-[#2B2B2B] flex items-center justify-center text-[#FF7518] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-[#A0A0A0] uppercase font-bold tracking-wider">
                    Email Inquiry
                  </span>
                  <span className="text-xs font-semibold text-white/90 group-hover:text-white transition-colors truncate">
                    {siteConfig.contactEmail}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8E8E]">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#FF7518] font-semibold tracking-wider uppercase">
              {siteConfig.tagline}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#B0B0B0] hover:text-white transition-colors px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#242424] hover:border-[#FF7518]/50 focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF7518]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
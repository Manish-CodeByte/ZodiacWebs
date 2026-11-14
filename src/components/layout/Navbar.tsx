import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, ArrowUpRight } from 'lucide-react';
import { siteConfig, getInstagramDmUrl } from '../../config/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-[#222222]/80 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo at Left */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Zodiac Webs Homepage"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#FF7518]/40 shadow-[0_0_15px_rgba(255,117,24,0.3)] transition-transform group-hover:scale-105">
              <img
                src={siteConfig.logo}
                alt="Zodiac Webs logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-wider text-white uppercase font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FFAD33] transition-all">
                {siteConfig.name}
              </span>
              <span className="text-[10px] tracking-widest text-[#FFAD33] font-medium uppercase -mt-0.5">
                {siteConfig.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Anchor Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#111111]/80 border border-white/10 px-5 py-1.5 rounded-full shadow-inner backdrop-blur-md">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium text-[#B0B0B0] hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA: DM on Instagram Pill Button with Gradient */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getInstagramDmUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF7518] to-[#FFAD33] text-black font-extrabold text-xs lg:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(255,117,24,0.35)] hover:shadow-[0_0_30px_rgba(255,173,51,0.5)] hover:brightness-105 transition-all active:scale-[0.98]"
            >
              <Instagram className="w-4 h-4 stroke-[2.2]" />
              <span>DM on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-white bg-[#141414] border border-[#282828] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7518]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF7518]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu with Smooth Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 top-[65px] bg-[#050505]/98 backdrop-blur-2xl z-40 px-6 py-10 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-4 text-center">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-2xl font-bold text-white hover:text-[#FFAD33] transition-colors border-b border-white/5 font-display"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-8 space-y-4">
              <a
                href={getInstagramDmUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-gradient-to-r from-[#FF7518] to-[#FFAD33] text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(255,117,24,0.4)]"
              >
                <Instagram className="w-5 h-5 stroke-[2.2]" />
                <span>DM on Instagram (@{siteConfig.instagramHandle})</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href={`mailto:${siteConfig.contactEmail}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#141414] border border-[#2B2B2B] text-[#B0B0B0] hover:text-white text-xs font-semibold"
              >
                <span>Or email: {siteConfig.contactEmail}</span>
              </a>

              <div className="text-center text-xs text-[#777777] pt-2">
                {siteConfig.location}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

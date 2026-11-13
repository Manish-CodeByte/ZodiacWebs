import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Instagram } from 'lucide-react';
import { siteConfig, getInstagramDmUrl } from '../../config/siteConfig';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-[#222222]/80 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#FF7518]/40 shadow-[0_0_15px_rgba(255,117,24,0.3)] transition-transform group-hover:scale-105">
              <img
                src={siteConfig.logo}
                alt="Zodiac Webs Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-extrabold tracking-wider text-white uppercase font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FFAD33] transition-all">
                  Zodiac Webs
                </span>
              </div>
              <span className="text-[10px] tracking-widest text-[#FFAD33] font-medium uppercase -mt-0.5">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#111111]/80 border border-white/10 px-4 py-1.5 rounded-full shadow-inner backdrop-blur-md">
            {siteConfig.navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-[#222222] shadow-[0_0_12px_rgba(255,117,24,0.25)] border border-[#FF7518]/40 font-semibold'
                      : 'text-[#B0B0B0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getInstagramDmUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-[#B0B0B0] hover:text-[#FF7518] hover:bg-white/5 border border-transparent hover:border-[#FF7518]/30 transition-all"
              title={`DM on Instagram: ${siteConfig.contact.instagramHandle}`}
            >
              <Instagram className="w-4 h-4" />
            </a>
            <Link to="/contact">
              <Button
                variant="primary"
                size="sm"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Let's Build
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-white bg-[#141414] border border-[#282828] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF7518]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-[#242424] px-6 py-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-3">
            {siteConfig.navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#181818] text-[#FFAD33] border border-[#FF7518]/30 font-semibold'
                      : 'text-[#B0B0B0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link to="/contact" className="w-full">
                <Button variant="primary" size="md" className="w-full justify-center">
                  Start Your Project
                </Button>
              </Link>
              <a
                href={getInstagramDmUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="secondary" size="md" className="w-full justify-center gap-2 border-[#FF7518]/30 text-[#FFAD33] hover:text-white">
                  <Instagram className="w-4 h-4 text-[#FF7518]" />
                  DM on Instagram ({siteConfig.contact.instagramHandle})
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { Instagram, MessageCircle, Mail, ArrowUp } from 'lucide-react';
import GlowingZLogo from './GlowingZLogo';
import { CONTACT } from '../config/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const sanitizedWhatsApp = CONTACT.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsAppUrl = sanitizedWhatsApp
    ? `https://wa.me/${sanitizedWhatsApp}`
    : 'https://wa.me/';

  return (
    <footer className="relative bg-[#050B14] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <GlowingZLogo size={40} />
              <span className="text-2xl font-bold tracking-tight text-white">
                Zodiac <span className="text-gradient-orange-gold">Webs</span>
              </span>
            </div>
            <p className="text-sm text-[#A0AAB2] max-w-sm leading-relaxed">
              We design and engineer high-performance web experiences that turn casual visitors into loyal customers. Mobile-first, SEO-ready, built to scale.
            </p>
            <div className="text-xs text-[#A0AAB2]/70 font-mono">
              Designed & Engineered with Vite, React & Tailwind CSS.
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="inline-flex items-center text-sm text-[#A0AAB2] hover:text-[#FF6B00] transition-colors py-1 min-h-[44px]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Connect */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect With Us
            </h4>
            <p className="text-xs text-[#A0AAB2]">
              Chat directly with our design team on our official channels.
            </p>

            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zodiac Webs Instagram"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-[#FD1D1D]/50 hover:bg-[#FD1D1D]/10 text-white flex items-center justify-center transition-all duration-300 min-w-[44px] min-h-[44px]"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zodiac Webs WhatsApp"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 text-white flex items-center justify-center transition-all duration-300 min-w-[44px] min-h-[44px]"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Email */}
              {CONTACT.email && CONTACT.email !== 'REPLACE_WITH_EMAIL' && (
                <a
                  href={`mailto:${CONTACT.email}`}
                  aria-label="Zodiac Webs Email"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF6B00]/50 hover:bg-[#FF6B00]/10 text-white flex items-center justify-center transition-all duration-300 min-w-[44px] min-h-[44px]"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A0AAB2] text-center sm:text-left">
            © {currentYear} Zodiac Webs. All rights reserved. We Build. You Grow.
          </p>

          <button
            type="button"
            onClick={handleScrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-[#A0AAB2] hover:text-white transition-colors border border-white/5 min-h-[44px]"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

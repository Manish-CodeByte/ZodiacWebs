import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 flex items-center justify-center bg-radial-hero relative px-4">
      {/* Decorative cosmic circle */}
      <div className="absolute w-[500px] h-[500px] rounded-full border border-[#FF7518]/10 animate-spin pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10 p-8 rounded-3xl bg-[#0D0D0D]/90 border border-[#222222] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border border-[#FF7518]/40 shadow-[0_0_20px_rgba(255,117,24,0.3)] mb-4">
          <img
            src={siteConfig.logo}
            alt="Zodiac Webs Logo"
            className="w-full h-full object-cover"
          />
        </div>

        <span className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFAD33] to-[#FF7518] font-display">
          404
        </span>

        <h1 className="text-xl sm:text-2xl font-bold text-white mt-2 mb-3">
          Orbit Lost — Page Not Found
        </h1>

        <p className="text-sm text-[#B0B0B0] mb-8 leading-relaxed">
          The coordinates you entered do not exist in the Zodiac Webs ecosystem. Let's guide you back to our active pages.
        </p>

        <div className="flex flex-col gap-3">
          <Link to="/" className="w-full">
            <Button
              variant="primary"
              size="md"
              leftIcon={<Home className="w-4 h-4" />}
              className="w-full justify-center"
            >
              Return to Homepage
            </Button>
          </Link>

          <Link to="/services" className="w-full">
            <Button
              variant="secondary"
              size="md"
              leftIcon={<Compass className="w-4 h-4" />}
              className="w-full justify-center"
            >
              Explore Services
            </Button>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5">
          <Link
            to="/"
            className="text-xs text-[#8E8E8E] hover:text-[#FF7518] transition-colors inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Zodiac Webs main portal</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

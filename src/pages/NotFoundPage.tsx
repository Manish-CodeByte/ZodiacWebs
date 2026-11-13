import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/seo/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 flex items-center justify-center bg-radial-hero relative px-4">
      <SEO
        title="404 — Orbit Lost"
        description="The page you're searching for isn't here, but your next great idea might be just one click away."
      />

      {/* Decorative cosmic circle */}
      <div className="absolute w-[500px] h-[500px] rounded-full border border-[#FF7518]/15 pointer-events-none" />
      <div className="absolute w-[350px] h-[350px] rounded-full border border-dashed border-[#FFAD33]/15 pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10 p-8 sm:p-10 rounded-3xl bg-[#0D0D0D]/90 border border-[#222222] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border border-[#FF7518]/40 shadow-[0_0_20px_rgba(255,117,24,0.3)] mb-4">
          <img
            src={siteConfig.logo}
            alt="Zodiac Webs Logo"
            className="w-full h-full object-cover"
          />
        </div>

        <span className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7518] to-[#FFAD33] font-display">
          404
        </span>

        <h1 className="text-xl sm:text-2xl font-bold text-white mt-2 mb-3 font-display">
          Looks Like You've Drifted Off Orbit.
        </h1>

        <p className="text-sm text-[#B0B0B0] mb-8 leading-relaxed">
          The page you're searching for isn't here, but your next great idea might be just one click away.
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

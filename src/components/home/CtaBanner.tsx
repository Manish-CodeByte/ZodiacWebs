import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig, getInstagramDmUrl } from '../../config/siteConfig';
import { Button } from '../ui/Button';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Intense solar glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-[#FF7518]/15 to-[#FFAD33]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Zodiac Emblem & Starburst */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#FF7518]/30 text-[#FFAD33] text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#FF7518]" />
          Instagram Direct Inquiries Open
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white font-display tracking-tight leading-tight">
          Ready To Turn Visitors <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFAD33] to-[#FF7518]">
            Into Paying Customers?
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] max-w-xl mx-auto">
          {siteConfig.brandMessage} — Send us a direct message on Instagram to discuss your vision, timeline, and launch plan.
        </p>

        {/* Poster's Signature CTA Pill: "DM FOR WEBSITES & COLLABS" */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getInstagramDmUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FF7518] to-[#FFAD33] text-black font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-[0_0_30px_rgba(255,117,24,0.4)] hover:shadow-[0_0_40px_rgba(255,173,51,0.6)] hover:brightness-105 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
              <Instagram className="w-5 h-5 text-black stroke-[2.2]" />
              <span>DM FOR WEBSITES & COLLABS</span>
            </button>
          </a>

          <Link to="/contact" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4 text-[#FF7518]" />}
              className="w-full sm:w-auto"
            >
              Get a Detailed Quotation
            </Button>
          </Link>
        </div>

        {/* Footer brand signature line */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-2">
          <span className="text-sm font-black tracking-widest text-white uppercase font-display">
            ZODIAC WEBS
          </span>
          <span className="text-xs tracking-widest text-[#8E8E8E] uppercase">
            {siteConfig.tagline} • {siteConfig.brandMessage}
          </span>
        </div>
      </div>
    </section>
  );
};

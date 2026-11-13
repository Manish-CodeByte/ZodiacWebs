import React from 'react';
import { Instagram, Clock, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import { siteConfig, getInstagramDmUrl } from '../../config/siteConfig';

export const WhatsAppCard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Instagram DM Feature Box */}
      <div className="bg-gradient-to-br from-[#1E1118] via-[#141414] to-[#120F0A] border border-[#FF7518]/40 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-[0_10px_35px_rgba(255,117,24,0.15)] group">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF7518] to-[#FFAD33] flex items-center justify-center text-black shadow-md">
            <Instagram className="w-6 h-6 stroke-[2.2]" />
          </div>
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#FF7518]/15 text-[#FFAD33] border border-[#FF7518]/30">
            Primary Direct Channel
          </span>
        </div>

        <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
          DM For Websites & Collabs
        </h4>
        <p className="text-xs sm:text-sm text-[#C0C0C0] leading-relaxed mb-6">
          Reach out directly to our lead designers and engineers on Instagram. Send us your project ideas, references, or questions for instant feedback.
        </p>

        <a
          href={getInstagramDmUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-[#FF7518] to-[#FFAD33] text-black font-extrabold text-sm uppercase tracking-wider hover:brightness-105 transition-all shadow-[0_0_25px_rgba(255,117,24,0.35)]"
        >
          <span>Message on Instagram ({siteConfig.contact.instagramHandle})</span>
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </a>
      </div>

      {/* Operating Info Card */}
      <div className="bg-[#111111] border border-[#222222] rounded-3xl p-6 sm:p-8 space-y-4">
        {/* Instagram Profile Link */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-[#1A1A1A] border border-[#282828] text-[#FF7518]">
            <Instagram className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E8E8E] block">
              Official Instagram Handle
            </span>
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-white hover:text-[#FF7518] transition-colors"
            >
              {siteConfig.contact.instagramHandle}
            </a>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="pt-4 border-t border-[#1C1C1C] flex items-start gap-3">
          <div className="p-2 rounded-lg bg-[#181818] text-[#FFAD33] mt-0.5">
            <Clock className="w-4 h-4" />
          </div>
          <div className="text-xs text-[#B0B0B0]">
            <span className="font-semibold text-white block">Active Operating Schedule</span>
            <span>{siteConfig.contact.workingHours}</span>
            <span className="block text-[#FF7518] mt-0.5">{siteConfig.contact.turnaroundTime}</span>
          </div>
        </div>

        {/* Studio Location */}
        <div className="pt-4 border-t border-[#1C1C1C] flex items-start gap-3">
          <div className="p-2 rounded-lg bg-[#181818] text-[#FFAD33] mt-0.5">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="text-xs text-[#B0B0B0]">
            <span className="font-semibold text-white block">Studio Location</span>
            <span>{siteConfig.contact.location}</span>
          </div>
        </div>
      </div>

      {/* Trust reassurance banner */}
      <div className="p-4 rounded-2xl bg-[#0C0C0C] border border-white/5 flex items-center gap-3 text-xs text-[#8E8E8E]">
        <Sparkles className="w-4 h-4 text-[#FF7518] flex-shrink-0" />
        <span>Every enquiry is reviewed personally by our core engineering team. No automated bots.</span>
      </div>
    </div>
  );
};

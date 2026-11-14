import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { siteConfig, getInstagramDmUrl } from '../../config/siteConfig';

export const InstagramCtaBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const templateText = "Hi Zodiac Webs! I'd like to discuss a website for my [business].";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(templateText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#050505] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#FF7518]/15 via-[#FFAD33]/15 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Full-width gradient-border panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl p-1 bg-gradient-to-r from-[#FF7518] via-[#FFAD33] to-[#FF7518] shadow-[0_0_50px_rgba(255,117,24,0.25)]"
        >
          <div className="rounded-[22px] bg-[#0E0E0E] p-8 sm:p-12 lg:p-14 text-center">
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#FF7518]/40 text-[#FFAD33] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7518]" />
              <span>Fastest Way to Reach Us</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-display tracking-tight leading-tight">
              DM For Websites &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7518] to-[#FFAD33]">
                Collabs
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] max-w-xl mx-auto leading-relaxed">
              Skip the long enquiry forms. Send us a message on Instagram and we'll reply directly with project ideas and a tailored gameplan.
            </p>

            {/* Primary Action: Open Instagram */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getInstagramDmUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF7518] to-[#FFAD33] text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(255,117,24,0.4)] hover:shadow-[0_0_35px_rgba(255,173,51,0.6)] hover:brightness-105 transition-all active:scale-[0.98]"
              >
                <Instagram className="w-4 h-4 stroke-[2.2]" />
                <span>Open Instagram (@{siteConfig.instagramHandle})</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

            {/* Copyable DM template */}
            <div className="mt-10 max-w-lg mx-auto pt-8 border-t border-[#222222]">
              <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider block mb-3">
                Quick Copy Paste Template for Your DM:
              </span>

              <div className="flex flex-col sm:flex-row items-center gap-2 p-2.5 rounded-2xl bg-[#141414] border border-[#2B2B2B]">
                <code className="text-xs sm:text-sm text-[#D1D1D1] px-3 py-1 flex-1 text-center sm:text-left font-mono truncate w-full">
                  "{templateText}"
                </code>

                <button
                  onClick={handleCopy}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all focus:outline-none ${
                    copied
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-[#222222] hover:bg-[#2C2C2C] text-white border border-white/10 hover:border-[#FF7518]/50'
                  }`}
                  aria-label="Copy DM template text"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
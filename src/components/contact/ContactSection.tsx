import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Globe, Copy, Check, ArrowUpRight, Clock } from 'lucide-react';
import { siteConfig, getInstagramDmUrl } from '../../config/siteConfig';
import { SectionHeader } from '../ui/SectionHeader';

export const ContactSection: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contactEmail);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-28 bg-[#070707] border-t border-[#1C1C1C] relative">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7518]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Direct Outreach"
          title="Ready to Build?"
          highlightText="Get in Touch"
          description="We prioritize direct conversation over lengthy enquiry forms. Reach out via Instagram DM or email to kick off your project."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {/* 1. Instagram Card (Primary Channel) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="relative p-8 rounded-3xl bg-[#111111] border-2 border-[#FF7518]/50 shadow-[0_10px_35px_-8px_rgba(255,117,24,0.3)] flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF7518] to-[#FFAD33] flex items-center justify-center text-black shadow-lg">
                  <Instagram className="w-7 h-7 stroke-[2.2]" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#FF7518]/15 text-[#FFAD33] border border-[#FF7518]/30">
                  Primary Channel
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 font-display">
                Instagram Direct
              </h3>
              <p className="text-sm font-semibold text-[#FFAD33] mb-3">
                @{siteConfig.instagramHandle}
              </p>
              <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed mb-6">
                Send us a direct message with your project idea, questions, or inspirations. Fastest response route.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <a
                href={getInstagramDmUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#FF7518] to-[#FFAD33] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(255,117,24,0.3)] hover:brightness-105 transition-all"
              >
                <span>DM on Instagram</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <div className="flex items-center justify-center gap-2 text-xs text-[#8E8E8E]">
                <Clock className="w-3.5 h-3.5 text-[#FF7518]" />
                <span>We usually reply within 24 hours</span>
              </div>
            </div>
          </motion.div>

          {/* 2. Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-[#111111] border border-[#222222] hover:border-[#FF7518]/50 hover:shadow-[0_10px_30px_rgba(255,117,24,0.15)] flex flex-col justify-between transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#181818] border border-[#2B2B2B] group-hover:border-[#FF7518]/40 flex items-center justify-center text-[#FF7518] transition-colors shadow-md">
                  <Mail className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#1A1A1A] text-[#A0A0A0] border border-white/5">
                  Secondary
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 font-display">
                Direct Email
              </h3>
              <p className="text-sm font-semibold text-white/90 mb-3 truncate font-mono">
                {siteConfig.contactEmail}
              </p>
              <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed mb-6">
                Prefer email or have detailed RFP briefs and design documents? Drop us a note anytime.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/5">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-full bg-[#181818] border border-[#2E2E2E] hover:border-[#FF7518]/50 text-white font-semibold text-xs transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF7518]" />
                  <span>Send Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-full text-xs font-semibold transition-all focus:outline-none ${
                    emailCopied
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-[#181818] border border-[#2E2E2E] hover:border-[#FFAD33]/50 text-[#B0B0B0] hover:text-white'
                  }`}
                >
                  {emailCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#FFAD33]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-xs text-[#8E8E8E] pt-1">
                Monitored daily by our lead team
              </div>
            </div>
          </motion.div>

          {/* 3. Location & Studio Presence Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-[#111111] border border-[#222222] hover:border-[#FF7518]/50 hover:shadow-[0_10px_30px_rgba(255,117,24,0.15)] flex flex-col justify-between transition-all group md:col-span-2 lg:col-span-1"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#181818] border border-[#2B2B2B] group-hover:border-[#FFAD33]/40 flex items-center justify-center text-[#FFAD33] transition-colors shadow-md">
                  <Globe className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#1A1A1A] text-[#A0A0A0] border border-white/5">
                  Remote Studio
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 font-display">
                Global Operations
              </h3>
              <p className="text-sm font-semibold text-[#FFAD33] mb-3">
                {siteConfig.location}
              </p>
              <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed mb-6">
                We work with businesses, hospitality founders, and startups across time zones with streamlined async communication.
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#D1D1D1]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Available for new projects this quarter</span>
              </div>
              <div className="text-xs text-[#8E8E8E]">
                {siteConfig.tagline} • {siteConfig.brandMessage}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
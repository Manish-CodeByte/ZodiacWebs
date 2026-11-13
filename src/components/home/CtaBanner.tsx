import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { siteConfig, getInstagramDmUrl, getWhatsAppUrl } from '../../config/siteConfig';
import { Button } from '../ui/Button';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Intense solar glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FF7518]/15 to-[#FFAD33]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Zodiac Emblem & Starburst */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#FF7518]/30 text-[#FFAD33] text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#FF7518]" />
          Direct Inquiries Open
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white font-display tracking-tight leading-tight">
          Your Next Big Move Starts With{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7518] to-[#FFAD33]">
            a Better Website.
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] max-w-xl mx-auto leading-relaxed">
          Have an idea, a business, or a brand ready for its next chapter? Let's create something extraordinary.
        </p>

        {/* Action Buttons: Primary Start Your Project & DM for Websites & Collabs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4 text-black" />}
              className="w-full sm:w-auto px-8 py-4 font-bold"
            >
              Start Your Project
            </Button>
          </Link>

          {siteConfig.contact.whatsappNumber ? (
            <a
              href={getWhatsAppUrl("Hello Zodiac Webs! I have a project ready for discussion.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                size="lg"
                leftIcon={<MessageSquare className="w-4 h-4 text-emerald-400" />}
                className="w-full sm:w-auto"
              >
                DM for Websites & Collabs
              </Button>
            </a>
          ) : (
            <a
              href={getInstagramDmUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                size="lg"
                leftIcon={<Instagram className="w-4 h-4 text-[#FF7518]" />}
                className="w-full sm:w-auto"
              >
                DM for Websites & Collabs
              </Button>
            </a>
          )}
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

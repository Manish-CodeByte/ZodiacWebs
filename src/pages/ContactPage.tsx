import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ContactForm } from '../components/contact/ContactForm';
import { WhatsAppCard } from '../components/contact/WhatsAppCard';
import { SEO } from '../components/seo/SEO';
import { ShieldCheck, Clock, CheckCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 min-h-screen">
      <SEO
        title="Contact — Start Your Project"
        description="Tell us about your idea, your business, or the website you have in mind. We'll help you explore the next step."
        canonical="/contact"
      />

      {/* Header */}
      <section className="py-16 sm:py-24 bg-radial-hero relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeader
            badge="Start Your Project"
            title="Let's Build Something"
            highlightText="Worth Remembering."
            description="Tell us about your idea, your business, or the website you have in mind. We'll help you explore the next step."
          />
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Contact Information & Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              <WhatsAppCard />

              {/* What Happens Next Reassurance */}
              <div className="p-6 rounded-3xl bg-[#0D0D0D] border border-[#222222] space-y-3 text-xs text-[#B0B0B0]">
                <h5 className="text-white font-bold uppercase tracking-wider text-[11px] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF7518]" />
                  What Happens Next?
                </h5>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#FFAD33] flex-shrink-0 mt-0.5" />
                  <span>We review your project submission and requirements within 24 hours.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF7518] flex-shrink-0 mt-0.5" />
                  <span>We connect for a direct discovery chat via Instagram DM, WhatsApp, or video call.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF7518] flex-shrink-0 mt-0.5" />
                  <span>You receive a clear scope proposal with fixed deliverables and milestone pricing.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

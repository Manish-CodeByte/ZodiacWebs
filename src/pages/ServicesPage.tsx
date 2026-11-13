import React, { useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { servicesData } from '../data/servicesData';
import { ServiceCard } from '../components/services/ServiceCard';
import { ProjectEstimator } from '../components/services/ProjectEstimator';
import { faqData } from '../data/faqData';
import { CtaBanner } from '../components/home/CtaBanner';
import { SEO } from '../components/seo/SEO';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-28 pb-16 min-h-screen">
      <SEO
        title="Services — Web Design & Modern Development"
        description="Explore our specialized digital solutions: Business Websites, Café & Restaurant Presences, E-Commerce Stores, Portfolios, and Ongoing Support."
        canonical="/services"
      />

      {/* Services Header */}
      <section className="py-16 sm:py-20 bg-radial-hero relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeader
            badge="Full Agency Capabilities"
            title="Everything You Need to Build a"
            highlightText="Stronger Digital Presence"
            description="Explore our specialized services tailored to meet the exact conversion, branding, and technical needs of your business."
          />
        </div>
      </section>

      {/* Interactive Project Estimator */}
      <section className="py-12 bg-[#050505]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectEstimator />
        </div>
      </section>

      {/* Detailed Service Verticals */}
      <section className="py-16 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {servicesData.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 bg-[#0A0A0A] border-t border-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#141414] border border-[#FF7518]/30 text-[#FFAD33] mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-[#FF7518]" />
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7518] to-[#FFAD33]">Questions</span>
            </h2>
            <p className="mt-3 text-sm text-[#B0B0B0]">
              Everything you need to know about our workflow, technology stack, and guarantees.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? 'bg-[#141414] border-[#FF7518]/40 shadow-[0_0_20px_rgba(255,117,24,0.1)]'
                      : 'bg-[#111111] border-[#222222] hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FF7518] transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-[#B0B0B0] leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};

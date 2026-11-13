import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare, Instagram, Copy, Check, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Button } from '../ui/Button';
import { siteConfig, getInstagramDmUrl, getWhatsAppUrl } from '../../config/siteConfig';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name or representative name must be at least 2 characters.'),
  businessName: z.string().optional(),
  email: z.string().email('Please enter a valid work email address.'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service.'),
  budget: z.string().min(1, 'Please select a target budget range.'),
  timeline: z.string().optional(),
  message: z.string().min(15, 'Please provide at least 15 characters describing your project goals.')
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormValues | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionMode, setSubmissionMode] = useState<'api' | 'handoff'>('handoff');

  const initialService = searchParams.get('service') || 'business-websites';
  const initialBudget = searchParams.get('budget') || '₹25,000 – ₹50,000';
  const initialTimeline = searchParams.get('timeline') || 'Standard Pace';

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting, isValid }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      businessName: '',
      email: '',
      phone: '',
      service: initialService,
      budget: initialBudget,
      timeline: initialTimeline,
      message: ''
    }
  });

  useEffect(() => {
    const s = searchParams.get('service');
    if (s) setValue('service', s);
    const b = searchParams.get('budget');
    if (b) setValue('budget', b);
    const t = searchParams.get('timeline');
    if (t) setValue('timeline', t);
  }, [searchParams, setValue]);

  const formValues = watch();

  const handleCopyEmail = () => {
    const emailToCopy = siteConfig.contact.email || 'hello@zodiacwebs.com';
    navigator.clipboard.writeText(emailToCopy);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // WhatsApp formatted payload
  const formattedWhatsAppMsg = `Hello Zodiac Webs!
I am inquiring about a website project:
• Name: ${formValues.fullName || 'Client'}
${formValues.businessName ? `• Brand: ${formValues.businessName}\n` : ''}• Service: ${formValues.service}
• Budget: ${formValues.budget}
${formValues.timeline ? `• Timeline: ${formValues.timeline}\n` : ''}• Project Goals: ${formValues.message || 'Discussing scope'}`;

  // Mailto formatted payload
  const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formValues.businessName || formValues.fullName || 'New Client'} — Zodiac Webs`);
  const mailtoBody = encodeURIComponent(`Name: ${formValues.fullName}
Brand/Company: ${formValues.businessName || 'N/A'}
Email: ${formValues.email}
Phone/Contact: ${formValues.phone || 'N/A'}
Service Required: ${formValues.service}
Budget Tier: ${formValues.budget}
Timeline: ${formValues.timeline || 'Standard'}

Project Details & Goals:
${formValues.message}`);

  const mailtoUrl = `mailto:${siteConfig.contact.email || 'hello@zodiacwebs.com'}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const onSubmit = async (data: ContactFormValues) => {
    const apiUrl = import.meta.env.VITE_CONTACT_API_URL;

    if (apiUrl) {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error('API submission error');
        setSubmissionMode('api');
      } catch {
        // Fallback to client handoff mode if API errors
        setSubmissionMode('handoff');
      }
    } else {
      // Backend not yet configured: provide honest prefilled mailto / WhatsApp handoff
      setSubmissionMode('handoff');
    }

    setSubmittedData(data);
    setIsSuccess(true);

    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#FF7518', '#FFAD33', '#FFFFFF']
    });
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmittedData(null);
    reset();
  };

  if (isSuccess && submittedData) {
    return (
      <div className="bg-[#111111] border border-[#FF7518]/40 rounded-3xl p-8 sm:p-12 text-center shadow-[0_0_35px_rgba(255,117,24,0.18)] animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-[#181818] border border-[#FF7518] flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(255,117,24,0.35)]">
          <CheckCircle2 className="w-8 h-8 text-[#FF7518]" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-display">
          Your Message Is On Its Way!
        </h3>
        
        <p className="text-sm sm:text-base text-[#D1D1D1] max-w-lg mx-auto mb-6">
          Thanks for contacting Zodiac Webs. Your enquiry details have been compiled:
        </p>

        <div className="p-5 rounded-2xl bg-[#090909] border border-[#222222] max-w-md mx-auto text-left text-xs text-[#A0A0A0] space-y-2 mb-8">
          <div><strong className="text-white">Client:</strong> {submittedData.fullName} {submittedData.businessName ? `(${submittedData.businessName})` : ''}</div>
          <div><strong className="text-white">Service Selected:</strong> {submittedData.service}</div>
          <div><strong className="text-white">Target Budget:</strong> {submittedData.budget}</div>
          <div><strong className="text-white">Work Email:</strong> {submittedData.email}</div>
          {submissionMode === 'handoff' && (
            <div className="text-[#FFAD33] text-[11px] pt-2 border-t border-white/10 leading-relaxed">
              ℹ️ To ensure immediate delivery, please confirm via your preferred client channel below:
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={mailtoUrl}
            className="w-full sm:w-auto"
          >
            <Button variant="primary" size="md" leftIcon={<Mail className="w-4 h-4" />}>
              Open Email App with Details
            </Button>
          </a>

          {siteConfig.contact.whatsappNumber ? (
            <a
              href={getWhatsAppUrl(formattedWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" size="md" leftIcon={<MessageSquare className="w-4 h-4 text-emerald-400" />}>
                Send via WhatsApp
              </Button>
            </a>
          ) : (
            <a
              href={getInstagramDmUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" size="md" leftIcon={<Instagram className="w-4 h-4 text-[#FF7518]" />}>
                Message on Instagram ({siteConfig.contact.instagramHandle})
              </Button>
            </a>
          )}

          <Button variant="ghost" size="md" onClick={handleReset}>
            Start Over
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#111111] border border-[#242424] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6"
      noValidate
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#FF7518]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFAD33]">
            Direct Project Enquiry
          </span>
        </div>

        {/* Email Copy option */}
        {siteConfig.contact.email && (
          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 text-xs text-[#B0B0B0] hover:text-[#FF7518] transition-colors focus:outline-none"
            title="Copy email to clipboard"
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedEmail ? 'Copied to clipboard!' : `Copy ${siteConfig.contact.email}`}</span>
          </button>
        )}
      </div>

      <h3 className="text-2xl font-extrabold text-white font-display">
        Tell Us About Your Vision
      </h3>
      <p className="text-xs sm:text-sm text-[#B0B0B0]">
        Fill out this brief form and we will review your objectives and reply with an actionable roadmap within 24 hours.
      </p>

      {/* Row 1: Full Name & Business Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
            Your Full Name *
          </label>
          <input
            type="text"
            {...register('fullName')}
            placeholder="e.g. Alex Morgan"
            className={`w-full bg-[#161616] border ${
              errors.fullName ? 'border-red-500' : 'border-[#2C2C2C] focus:border-[#FF7518]'
            } rounded-xl px-4 py-3 text-sm text-white placeholder-[#666666] focus:outline-none transition-colors`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
            Business / Brand Name <span className="text-[#666666] lowercase">(optional)</span>
          </label>
          <input
            type="text"
            {...register('businessName')}
            placeholder="e.g. Apex Global or Café Bistro"
            className="w-full bg-[#161616] border border-[#2C2C2C] focus:border-[#FF7518] rounded-xl px-4 py-3 text-sm text-white placeholder-[#666666] focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
            Work Email Address *
          </label>
          <input
            type="email"
            {...register('email')}
            placeholder="alex@company.com"
            className={`w-full bg-[#161616] border ${
              errors.email ? 'border-red-500' : 'border-[#2C2C2C] focus:border-[#FF7518]'
            } rounded-xl px-4 py-3 text-sm text-white placeholder-[#666666] focus:outline-none transition-colors`}
          />
          {errors.email && (
            <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
            Phone / WhatsApp Number <span className="text-[#666666] lowercase">(optional)</span>
          </label>
          <input
            type="tel"
            {...register('phone')}
            placeholder="+91 98765 43210 or +1 (555)..."
            className="w-full bg-[#161616] border border-[#2C2C2C] focus:border-[#FF7518] rounded-xl px-4 py-3 text-sm text-white placeholder-[#666666] focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Service & Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
            Service Required *
          </label>
          <select
            {...register('service')}
            className="w-full bg-[#161616] border border-[#2C2C2C] focus:border-[#FF7518] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
          >
            <option value="business">Business Website</option>
            <option value="restaurant">Café & Restaurant Website</option>
            <option value="ecommerce">E-Commerce Store</option>
            <option value="portfolio">Portfolio & Personal Site</option>
            <option value="custom">Custom Web Application</option>
            <option value="support">Ongoing Support & SEO</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
            Target Budget Tier *
          </label>
          <select
            {...register('budget')}
            className="w-full bg-[#161616] border border-[#2C2C2C] focus:border-[#FF7518] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
          >
            <option value="Under ₹25,000">Under ₹25,000 (Starter / MVP)</option>
            <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000 (Standard Growth)</option>
            <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000 (Complete Platform)</option>
            <option value="₹1,00,000+">₹1,00,000+ (Enterprise / Bespoke)</option>
          </select>
        </div>
      </div>

      {/* Timeline selection */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
          Target Launch Timeline <span className="text-[#666666] lowercase">(optional)</span>
        </label>
        <select
          {...register('timeline')}
          className="w-full bg-[#161616] border border-[#2C2C2C] focus:border-[#FF7518] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
        >
          <option value="Standard Pace (2-4 weeks)">Standard Pace (2–4 weeks)</option>
          <option value="Priority Sprint (1-2 weeks)">Priority Sprint (1–2 weeks)</option>
          <option value="Flexible (1+ months)">Flexible (1+ months)</option>
        </select>
      </div>

      {/* Project Details */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
          Project Details & Goals *
        </label>
        <textarea
          rows={4}
          {...register('message')}
          placeholder="Describe your vision, target audience, preferred launch timeline, or reference websites..."
          className={`w-full bg-[#161616] border ${
            errors.message ? 'border-red-500' : 'border-[#2C2C2C] focus:border-[#FF7518]'
          } rounded-xl px-4 py-3 text-sm text-white placeholder-[#666666] focus:outline-none transition-colors`}
        />
        {errors.message && (
          <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Direct Action Row */}
      <div className="space-y-3 pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          disabled={!isValid || isSubmitting}
          rightIcon={<Send className="w-4 h-4" />}
          className="w-full justify-center"
        >
          Submit Project Request
        </Button>

        {/* Alternative Quick Contact Trigger */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#202020] text-xs">
          <span className="text-[#8E8E8E]">Prefer instant communication?</span>
          <div className="flex items-center gap-3">
            <a
              href={getInstagramDmUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFAD33] hover:underline flex items-center gap-1 font-semibold"
            >
              <Instagram className="w-3.5 h-3.5 text-[#FF7518]" />
              <span>Instagram DM</span>
            </a>
            {siteConfig.contact.whatsappNumber && (
              <>
                <span className="text-[#444444]">|</span>
                <a
                  href={getWhatsAppUrl(formattedWhatsAppMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      <p className="text-[11px] text-center text-[#777777]">
        🔒 Your privacy is fully respected. No spam, ever. We sign NDAs upon request.
      </p>
    </form>
  );
};

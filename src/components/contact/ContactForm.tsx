import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare, Instagram, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Button } from '../ui/Button';
import { siteConfig, getInstagramDmUrl, getWhatsAppUrl } from '../../config/siteConfig';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name or company name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid work email address.'),
  phone: z.string().min(5, 'Phone number or Instagram handle is required.'),
  service: z.string().min(1, 'Please select a service.'),
  budget: z.string().min(1, 'Please select a target budget range.'),
  message: z.string().min(15, 'Please provide at least 15 characters describing your project goals.')
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormValues | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const initialService = searchParams.get('service') || 'business-websites';
  const initialBudget = searchParams.get('budget') || '$1,000 - $3,000';

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
      email: '',
      phone: '',
      service: initialService,
      budget: initialBudget,
      message: ''
    }
  });

  useEffect(() => {
    const s = searchParams.get('service');
    if (s) setValue('service', s);
    const b = searchParams.get('budget');
    if (b) setValue('budget', b);
  }, [searchParams, setValue]);

  const formValues = watch();

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate network submission with high fidelity
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmittedData(data);
    setIsSuccess(true);

    // Trigger celebration
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#FF7518', '#FFAD33', '#FFFFFF']
    });
  };

  const handleCopyEmail = () => {
    const emailToCopy = siteConfig.contact.email || 'hello@zodiacwebs.com';
    navigator.clipboard.writeText(emailToCopy);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmittedData(null);
    reset();
  };

  // WhatsApp formatted payload
  const formattedWhatsAppMsg = formValues.fullName
    ? `Hello Zodiac Webs! My name is ${formValues.fullName}. I am inquiring about ${formValues.service} with a budget of ${formValues.budget}. Details: ${formValues.message}`
    : "Hello Zodiac Webs! I would like to discuss a website project.";

  if (isSuccess && submittedData) {
    return (
      <div className="bg-[#111111] border border-[#FF7518]/40 rounded-3xl p-8 sm:p-12 text-center shadow-[0_0_35px_rgba(255,117,24,0.18)] animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-[#181818] border border-[#FF7518] flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(255,117,24,0.35)]">
          <CheckCircle2 className="w-8 h-8 text-[#FF7518]" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          Project Blueprint Request Received!
        </h3>
        
        <p className="text-sm sm:text-base text-[#D1D1D1] max-w-lg mx-auto mb-6">
          Thank you, <strong className="text-white">{submittedData.fullName}</strong>. Your project specifications have been logged into our engineering queue.
        </p>

        <div className="p-5 rounded-2xl bg-[#090909] border border-[#222222] max-w-md mx-auto text-left text-xs text-[#A0A0A0] space-y-2 mb-8">
          <div><strong className="text-white">Service Selected:</strong> {submittedData.service}</div>
          <div><strong className="text-white">Target Budget:</strong> {submittedData.budget}</div>
          <div><strong className="text-white">Work Email:</strong> {submittedData.email}</div>
          <div className="text-[#FF7518] font-bold pt-1 border-t border-white/5">
            ✓ Guaranteed Response: We respond within 24 hours
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="secondary" size="md" onClick={handleReset}>
            Submit Another Project
          </Button>

          <a
            href={getInstagramDmUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="md" leftIcon={<Instagram className="w-4 h-4" />}>
              Follow-up On Instagram DM ({siteConfig.contact.instagramHandle})
            </Button>
          </a>
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
            Fast Project Quotation
          </span>
        </div>

        {/* Email Copy option */}
        <button
          type="button"
          onClick={handleCopyEmail}
          className="flex items-center gap-1.5 text-xs text-[#B0B0B0] hover:text-[#FF7518] transition-colors"
          title="Copy email to clipboard"
        >
          {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copiedEmail ? 'Copied to clipboard!' : 'Copy email'}</span>
        </button>
      </div>

      <h3 className="text-2xl font-extrabold text-white">
        Tell Us About Your Vision
      </h3>
      <p className="text-xs sm:text-sm text-[#B0B0B0]">
        Fill out this brief form and we will review your objectives and reply with an actionable roadmap within 24 hours.
      </p>

      {/* Full Name */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
          Your Full Name / Company Name *
        </label>
        <input
          type="text"
          {...register('fullName')}
          placeholder="e.g. Alex Morgan or Apex Global Ltd."
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

      {/* Email & Phone */}
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
            Phone / Instagram Handle *
          </label>
          <input
            type="text"
            {...register('phone')}
            placeholder="+1 (555) 000-0000 or @handle"
            className={`w-full bg-[#161616] border ${
              errors.phone ? 'border-red-500' : 'border-[#2C2C2C] focus:border-[#FF7518]'
            } rounded-xl px-4 py-3 text-sm text-white placeholder-[#666666] focus:outline-none transition-colors`}
          />
          {errors.phone && (
            <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Service & Budget Selects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
            Primary Service Needed *
          </label>
          <select
            {...register('service')}
            className="w-full bg-[#161616] border border-[#2C2C2C] focus:border-[#FF7518] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
          >
            <option value="business-websites">Business Website</option>
            <option value="cafe-restaurant">Café & Restaurant Website</option>
            <option value="ecommerce-stores">E-Commerce Storefront</option>
            <option value="portfolio-personal">Portfolio & Personal Site</option>
            <option value="modern-responsive-dev">Modern React Development</option>
            <option value="support-maintenance">Ongoing Support & SEO</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
            Target Investment Tier *
          </label>
          <select
            {...register('budget')}
            className="w-full bg-[#161616] border border-[#2C2C2C] focus:border-[#FF7518] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
          >
            <option value="Under $1,000">Under $1,000 (Starter / MVP)</option>
            <option value="$1,000 - $3,000">$1,000 - $3,000 (Standard Growth)</option>
            <option value="$3,000 - $5,000">$3,000 - $5,000 (Complete Platform)</option>
            <option value="$5,000+">$5,000+ (Enterprise / Bespoke)</option>
          </select>
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
          Project Details & Objectives *
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
          <span className="text-[#8E8E8E]">Prefer instant live chat?</span>
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl(formattedWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline flex items-center gap-1 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Pre-fill</span>
            </a>
            <span className="text-[#444444]">|</span>
            <a
              href={getInstagramDmUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFAD33] hover:underline flex items-center gap-1 font-semibold"
            >
              <Instagram className="w-3.5 h-3.5 text-[#FF7518]" />
              <span>Instagram DM</span>
            </a>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-center text-[#777777]">
        🔒 Your privacy is fully respected. No spam, ever. We sign NDAs upon request.
      </p>
    </form>
  );
};

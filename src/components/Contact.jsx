import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Send,
  Instagram,
  MessageCircle,
  Mail,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { CONTACT } from '../config/contact';

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
  });

  // Touched state so error messages appear nicely when user interacts
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    projectDetails: false,
  });

  const [submitted, setSubmitted] = useState(false);

  // Live Validation Rules
  const validate = {
    name: (val) => {
      if (!val.trim()) return 'Name is required';
      if (val.trim().length < 2) return 'Name must be at least 2 characters';
      return null;
    },
    email: (val) => {
      if (!val.trim()) return 'Email is required';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!emailRegex.test(val.trim())) return 'Please enter a valid email address';
      return null;
    },
    projectDetails: (val) => {
      if (!val.trim()) return 'Project details are required';
      if (val.trim().length < 10) return 'Please provide at least 10 characters so we understand your project';
      return null;
    },
  };

  const errors = {
    name: validate.name(formData.name),
    email: validate.email(formData.email),
    projectDetails: validate.projectDetails(formData.projectDetails),
  };

  const isFormValid = !errors.name && !errors.email && !errors.projectDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, projectDetails: true });

    if (isFormValid) {
      // Simulate successful client transmission
      setSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', projectDetails: '' });
    setTouched({ name: false, email: false, projectDetails: false });
    setSubmitted(false);
  };

  // WhatsApp link preparation
  const sanitizedWhatsApp = CONTACT.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsAppUrl = sanitizedWhatsApp
    ? `https://wa.me/${sanitizedWhatsApp}?text=${encodeURIComponent("Hi Zodiac Webs, I'm interested in starting a project!")}`
    : 'https://wa.me/?text=Hi%20Zodiac%20Webs';

  return (
    <section id="contact" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#FF6B00] uppercase bg-[#FF6B00]/10 px-4 py-1.5 rounded-full border border-[#FF6B00]/30 inline-block mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Start Your Project with <span className="text-gradient-orange-gold">Zodiac Webs</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A0AAB2]">
              Have a project in mind? Reach out via our live form, direct Instagram message, or WhatsApp chat. We typically respond within minutes.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Channels & Social Buttons (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-7 sm:p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <span>Instant Connect</span>
                <Sparkles className="w-5 h-5 text-[#FFD700]" />
              </h3>
              <p className="text-sm text-[#A0AAB2] mb-8">
                Prefer immediate messaging? Reach out directly on Instagram or WhatsApp:
              </p>

              <div className="space-y-4">
                {/* 1. DM on Instagram Button */}
                <a
                  href={CONTACT.instagramDm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-5 py-4 rounded-xl bg-gradient-to-r from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#FCB045]/20 hover:from-[#833AB4]/30 hover:via-[#FD1D1D]/30 hover:to-[#FCB045]/30 border border-[#FD1D1D]/40 text-white font-semibold transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(253,29,29,0.3)] min-h-[48px] group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#833AB4] to-[#FD1D1D] flex items-center justify-center text-white shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <span className="text-sm sm:text-base">DM on Instagram</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#FD1D1D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* 2. Instagram Profile Link */}
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-5 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FFD700]/40 text-white font-medium transition-all duration-300 min-h-[48px] group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center text-[#FFD700] shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-[#A0AAB2]">Instagram Profile</div>
                      <div className="text-sm sm:text-base font-semibold text-white">@zodiac.webs</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#A0AAB2] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* 3. Chat on WhatsApp Button */}
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-5 py-4 rounded-xl bg-gradient-to-r from-[#25D366]/20 to-[#128C7E]/20 hover:from-[#25D366]/30 hover:to-[#128C7E]/30 border border-[#25D366]/40 text-white font-semibold transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] min-h-[48px] group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center text-black shrink-0 font-bold">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="text-sm sm:text-base">Chat on WhatsApp</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Email Option */}
                {CONTACT.email && CONTACT.email !== 'REPLACE_WITH_EMAIL' && (
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="w-full inline-flex items-center justify-between px-5 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all duration-300 min-h-[48px] group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-[#A0AAB2]">Email Us</div>
                        <div className="text-sm font-semibold text-white">{CONTACT.email}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#A0AAB2] group-hover:text-white" />
                  </a>
                )}
              </div>

              {/* Guarantees */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-[#A0AAB2]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                  <span>Free project scoping & architectural quote</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#A0AAB2]">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0" />
                  <span>Direct consultation with lead designers & developers</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#A0AAB2]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                  <span>No obligation, rapid turnaround</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form with LIVE VALIDATION (Col 7) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-7 sm:p-10 border border-white/10 relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 px-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/40 flex items-center justify-center mx-auto mb-6 text-[#FF6B00] shadow-glow-orange">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    Project Request Received!
                  </h3>
                  <p className="text-[#A0AAB2] max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our team at Zodiac Webs will review your details and reach out within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors min-h-[44px]"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                    <p className="text-sm text-[#A0AAB2]">
                      Fill out the form below with live validation assistance.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="name" className="block text-sm font-medium text-white">
                        Name <span className="text-[#FF6B00]">*</span>
                      </label>
                      {touched.name && !errors.name && (
                        <span className="text-xs text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Valid
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => handleBlur('name')}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3.5 rounded-xl bg-black/40 text-white placeholder-[#A0AAB2]/50 border transition-all duration-200 focus:outline-none min-h-[48px] text-base ${
                          touched.name && errors.name
                            ? 'border-red-500/80 focus:ring-2 focus:ring-red-500/30'
                            : touched.name && !errors.name
                            ? 'border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/30'
                            : 'border-white/10 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/25'
                        }`}
                        aria-invalid={touched.name && !!errors.name}
                        aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                      />
                    </div>
                    {touched.name && errors.name && (
                      <p id="name-error" className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="email" className="block text-sm font-medium text-white">
                        Email <span className="text-[#FF6B00]">*</span>
                      </label>
                      {touched.email && !errors.email && (
                        <span className="text-xs text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Valid email
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur('email')}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3.5 rounded-xl bg-black/40 text-white placeholder-[#A0AAB2]/50 border transition-all duration-200 focus:outline-none min-h-[48px] text-base ${
                          touched.email && errors.email
                            ? 'border-red-500/80 focus:ring-2 focus:ring-red-500/30'
                            : touched.email && !errors.email
                            ? 'border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/30'
                            : 'border-white/10 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/25'
                        }`}
                        aria-invalid={touched.email && !!errors.email}
                        aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                      />
                    </div>
                    {touched.email && errors.email && (
                      <p id="email-error" className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Project Details Input */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="projectDetails" className="block text-sm font-medium text-white">
                        Project Details <span className="text-[#FF6B00]">*</span>
                      </label>
                      <div className="flex items-center gap-2">
                        {touched.projectDetails && !errors.projectDetails && (
                          <span className="text-xs text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Good detail
                          </span>
                        )}
                        <span className="text-xs text-[#A0AAB2]">
                          {formData.projectDetails.trim().length} chars
                        </span>
                      </div>
                    </div>
                    <div className="relative">
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        rows={4}
                        value={formData.projectDetails}
                        onChange={handleChange}
                        onBlur={() => handleBlur('projectDetails')}
                        placeholder="Tell us about your brand, goals, target audience, preferred timeline, or budget..."
                        className={`w-full px-4 py-3.5 rounded-xl bg-black/40 text-white placeholder-[#A0AAB2]/50 border transition-all duration-200 focus:outline-none text-base resize-y min-h-[120px] ${
                          touched.projectDetails && errors.projectDetails
                            ? 'border-red-500/80 focus:ring-2 focus:ring-red-500/30'
                            : touched.projectDetails && !errors.projectDetails
                            ? 'border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/30'
                            : 'border-white/10 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/25'
                        }`}
                        aria-invalid={touched.projectDetails && !!errors.projectDetails}
                        aria-describedby={
                          touched.projectDetails && errors.projectDetails
                            ? 'projectDetails-error'
                            : undefined
                        }
                      />
                    </div>
                    {touched.projectDetails && errors.projectDetails && (
                      <p id="projectDetails-error" className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.projectDetails}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF8533] hover:to-[#FF6B00] shadow-glow-orange hover:shadow-glow-orange-lg active:scale-[0.99] transition-all duration-300 min-h-[50px] cursor-pointer"
                  >
                    <span>Submit Project Details</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject.';
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please enter a message with at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger confetti animation
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });

    // Create mailto link with encoded content so user's native email client opens pre-filled
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Contact] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Hello Shrawan,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    )}`;

    setStatusMessage('Opening your email client to send message...');
    
    // Open email client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setStatusMessage('If your email client did not open automatically, you can directly email shrawan29yadav@gmail.com.');
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-black/20">
      {/* Background Glows */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white uppercase">
            LET'S BUILD SOMETHING AMAZING TOGETHER.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Have an opportunity, an idea, or a project in mind? Let's connect and create something meaningful.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Contact & Social Handles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-[#0a110d]/90 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-xl shadow-slate-900/5 dark:shadow-emerald-950/20 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                I am actively seeking software engineering internships, developer opportunities, and collaborative challenges. Feel free to reach out directly.
              </p>

              {/* Direct Info Items */}
              <div className="space-y-4 mb-8">
                {/* Email with copy button */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-emerald-950/20 border border-slate-200/80 dark:border-emerald-500/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy Email"
                    className="p-2 rounded-xl text-slate-600 dark:text-emerald-400 hover:bg-slate-200 dark:hover:bg-emerald-900/40 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-emerald-950/20 border border-slate-200/80 dark:border-emerald-500/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase">
                      Phone
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-emerald-950/20 border border-slate-200/80 dark:border-emerald-500/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase">
                      Location
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Networks List */}
            <div className="pt-6 border-t border-slate-200 dark:border-emerald-500/15">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3">
                Social & Developer Profiles:
              </div>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-200 border border-slate-200 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-200 border border-slate-200 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-200 border border-slate-200 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-all"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Functional Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-[#0a110d]/90 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-xl shadow-slate-900/5 dark:shadow-emerald-950/20"
          >
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
              Fill out the details below. This will prepare and send your communication directly to <strong className="text-emerald-600 dark:text-emerald-400">shrawan29yadav@gmail.com</strong>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Satyam Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-emerald-950/20 border border-slate-200 dark:border-emerald-500/20 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 mt-1 font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-emerald-950/20 border border-slate-200 dark:border-emerald-500/20 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 mt-1 font-mono">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: '' });
                  }}
                  placeholder="Internship Opportunity / Project Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-emerald-950/20 border border-slate-200 dark:border-emerald-500/20 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                />
                {errors.subject && (
                  <p className="text-xs text-rose-500 mt-1 font-mono">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Tell me about your project, timeline, or engineering role..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-emerald-950/20 border border-slate-200 dark:border-emerald-500/20 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                />
                {errors.message && (
                  <p className="text-xs text-rose-500 mt-1 font-mono">{errors.message}</p>
                )}
              </div>

              {/* Status Message Notification */}
              {statusMessage && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-700 dark:text-emerald-300 font-mono">
                  {statusMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/35 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Shrawan</span>
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

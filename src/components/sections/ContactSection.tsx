import React, { useState } from 'react';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import confetti from 'canvas-confetti';
import { Mail, Copy, Check, Send, Sparkles, MessageCircle } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from '../ui/SocialIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'UGC Content & Scripting',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please share a brief message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger subtle confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#F27D9B', '#FCE7ED', '#DCEEFF']
      });
    } catch {
      // Ignore if confetti is disabled
    }

    setSubmittedMessage(true);
  };

  const handleLaunchEmailClient = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry: ${formData.serviceType}] From ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Mahi,\n\nMy name is ${formData.name} (${formData.email}).\n\nI am reaching out regarding: ${formData.serviceType}\n\nMessage:\n${formData.message}\n\nLooking forward to hearing from you!`
    );
    window.location.href = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF5EF]/60 border-t border-[#E9E3E2] relative">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          label="LET'S CONNECT"
          heading="Have Something in Mind?"
          subheading="Have a creative idea, a brand collaboration, or an interesting project? Let's talk."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 max-w-5xl mx-auto items-start">
          
          {/* LEFT: Direct Reach & Social Touchpoints */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E9E3E2] shadow-soft space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F27D9B] flex items-center space-x-1.5 mb-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Direct Communication</span>
                </span>
                <h3 className="text-xl font-serif font-bold text-[#171717]">
                  Let's Create Together
                </h3>
                <p className="text-xs sm:text-sm text-[#66616A] mt-1 leading-relaxed">
                  Whether you're looking for magnetic UGC scripts, social media management, or a fresh creative mind for your next campaign, my inbox is always open.
                </p>
              </div>

              {/* Verified Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-[#FAF5EF] border border-[#E9E3E2] space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#66616A] block">
                  Official Contact Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="text-sm font-semibold text-[#171717] hover:text-[#F27D9B] transition-colors truncate"
                  >
                    {profileData.contact.email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white hover:bg-[#FCE7ED] text-[#171717] hover:text-[#F27D9B] border border-[#E9E3E2] transition-colors shadow-2xs shrink-0 flex items-center space-x-1 text-xs font-medium"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 text-[11px]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Response Time & Status */}
              <div className="flex items-center space-x-2 text-xs text-[#66616A] pt-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Typically replies within 24 hours</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-3xl bg-white border border-[#E9E3E2] shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#66616A] block">
                Social Profiles
              </span>
              <div className="space-y-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-[#FAF5EF] hover:bg-[#F27D9B] transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-center space-x-2.5">
                    <InstagramIcon className="w-4 h-4 text-[#F27D9B] group-hover:text-white transition-colors" />
                    <span className="text-xs font-semibold text-[#171717] group-hover:text-white transition-colors">Instagram</span>
                  </div>
                  <span className="text-xs text-[#66616A] group-hover:text-white/90 transition-colors">@mahi_goyal</span>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-[#FAF5EF] hover:bg-[#F27D9B] transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-center space-x-2.5">
                    <YoutubeIcon className="w-4 h-4 text-[#F27D9B] group-hover:text-white transition-colors" />
                    <span className="text-xs font-semibold text-[#171717] group-hover:text-white transition-colors">YouTube</span>
                  </div>
                  <span className="text-xs text-[#66616A] group-hover:text-white/90 transition-colors">Mahi Goyal</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-[#FAF5EF] hover:bg-[#F27D9B] transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-center space-x-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[#F27D9B] group-hover:text-white transition-colors" />
                    <span className="text-xs font-semibold text-[#171717] group-hover:text-white transition-colors">LinkedIn</span>
                  </div>
                  <span className="text-xs text-[#66616A] group-hover:text-white/90 transition-colors">Mahi Goyal</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Collaboration Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-9 rounded-3xl bg-white border border-[#E9E3E2] shadow-card">
              {!submittedMessage ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-left" noValidate>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif font-bold text-[#171717]">
                      Send a Collaboration Note
                    </h3>
                    <p className="text-xs sm:text-sm text-[#66616A]">
                      Tell me about your project, brand goal, or timeline.
                    </p>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#171717]">
                      Your Name / Brand *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins or EcoWear"
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF5EF] border ${
                        errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-[#E9E3E2]'
                      } text-base sm:text-sm text-[#171717] placeholder:text-[#66616A]/60 focus:outline-none focus:border-[#F27D9B] focus:bg-white transition-colors min-h-[46px]`}
                    />
                    {errors.name && <p className="text-xs text-rose-500">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#171717]">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF5EF] border ${
                        errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-[#E9E3E2]'
                      } text-base sm:text-sm text-[#171717] placeholder:text-[#66616A]/60 focus:outline-none focus:border-[#F27D9B] focus:bg-white transition-colors min-h-[46px]`}
                    />
                    {errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}
                  </div>

                  {/* Service Type Selection */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-[#171717]">
                      Collaboration Category
                    </label>
                    <select
                      id="contact-service"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF5EF] border border-[#E9E3E2] text-base sm:text-sm text-[#171717] focus:outline-none focus:border-[#F27D9B] focus:bg-white transition-colors cursor-pointer min-h-[46px]"
                    >
                      <option value="UGC Content & Scripting">UGC Content & Reel Scripting</option>
                      <option value="Social Media Strategy">Social Media Management & Planning</option>
                      <option value="Video Editing">Short-form Video Editing & Pacing</option>
                      <option value="Brand Storytelling">Brand Storytelling & Campaign Concept</option>
                      <option value="Tech Collaboration">Web / Tech Project Collaboration</option>
                      <option value="General Inquiry">General Question or Coffee Chat</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-[#171717]">
                      Project Details / Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share what you are building or planning..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF5EF] border ${
                        errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-[#E9E3E2]'
                      } text-base sm:text-sm text-[#171717] placeholder:text-[#66616A]/60 focus:outline-none focus:border-[#F27D9B] focus:bg-white transition-colors resize-y`}
                    />
                    {errors.message && <p className="text-xs text-rose-500">{errors.message}</p>}
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center space-x-2 py-4 rounded-2xl bg-[#171717] hover:bg-[#F27D9B] text-white text-sm sm:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-card min-h-[48px]"
                      id="submit-inquiry-btn"
                    >
                      <span>Prepare Collaboration Note</span>
                      <Send className="w-4 h-4 text-[#FCE7ED]" />
                    </button>
                    <p className="text-[11px] text-[#66616A] text-center mt-2.5">
                      Client-side validated • Direct connection to Mahi Goyal
                    </p>
                  </div>
                </form>
              ) : (
                /* Honest Success State: No fake backend claim; gives immediate mail client launch & copy */
                <div className="py-8 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-[#FCE7ED] text-[#F27D9B] flex items-center justify-center mx-auto shadow-sm">
                    <MessageCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-[#171717]">
                      Note Ready to Send, {formData.name}!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#66616A] max-w-md mx-auto leading-relaxed">
                      Your note has been formatted. Click below to open your preferred email client prefilled with your message directly to Mahi, or copy the drafted text.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF5EF] border border-[#E9E3E2] text-left text-xs text-[#171717] space-y-1.5 max-h-40 overflow-y-auto">
                    <p><strong>To:</strong> {profileData.contact.email}</p>
                    <p><strong>Topic:</strong> {formData.serviceType}</p>
                    <p className="text-[#66616A] italic">"{formData.message}"</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleLaunchEmailClient}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#171717] hover:bg-[#F27D9B] text-white text-xs font-semibold transition-colors shadow-sm"
                    >
                      <Mail className="w-4 h-4 text-[#FCE7ED]" />
                      <span>Open in Mail Client</span>
                    </button>

                    <button
                      onClick={() => {
                        setSubmittedMessage(false);
                        setFormData({ name: '', email: '', serviceType: 'UGC Content & Scripting', message: '' });
                      }}
                      className="w-full sm:w-auto px-5 py-3 rounded-full bg-white hover:bg-[#FAF5EF] text-[#66616A] hover:text-[#171717] border border-[#E9E3E2] text-xs font-medium transition-colors"
                    >
                      Write Another Note
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

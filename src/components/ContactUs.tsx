import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Sparkles, Send, Loader2, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InquiryFormInput } from '../types';

interface ContactUsProps {
  prefilledEstimateText: string;
  onClearPrefill: () => void;
}

export default function ContactUs({ prefilledEstimateText, onClearPrefill }: ContactUsProps) {
  const [formData, setFormData] = useState<InquiryFormInput>({
    name: '',
    email: '',
    company: '',
    service: '2d-motion',
    budget: '$5,000 - $10,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Handle estimator pre-fill
  useEffect(() => {
    if (prefilledEstimateText) {
      setFormData((prev) => ({
        ...prev,
        message: `${prefilledEstimateText}\n\nAdditional comments: ${prev.message}`,
        service: prefilledEstimateText.toLowerCase().includes('whiteboard')
          ? 'whiteboard'
          : prefilledEstimateText.toLowerCase().includes('3d')
          ? '3d-render'
          : prefilledEstimateText.toLowerCase().includes('character')
          ? 'character'
          : '2d-motion',
      }));
    }
  }, [prefilledEstimateText]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationError('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setValidationError('Please specify your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setValidationError('Please specify a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate standard premium server API post
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      onClearPrefill();
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '2d-motion',
      budget: '$5,000 - $10,000',
      message: '',
    });
    setSubmitSuccess(false);
    setValidationError('');
  };

  return (
    <section id="contact" className="py-24 bg-[#080808] relative overflow-hidden border-t border-white/5">
      {/* Background design highlights */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-erudite-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Layout containing form & office interactive coordinate map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Office details & Simulated Interactive Vector Map */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <span className="sub-display text-erudite-orange text-xs tracking-widest block mb-3 font-extrabold">
                STAY CONNECTED
              </span>
              <h2 className="heading-display text-3xl md:text-5xl text-white tracking-tight mb-6">
                Let's Formulate <br />
                Your Narrative
              </h2>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                Ready to turn your abstract processes into clear, captivating visuals? Fill out the inquiry workspace, and we will get back to you with a tailored deck within 24 business hours.
              </p>
            </div>

            {/* Quick Contacts */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-erudite-orange/10 rounded-xl text-erudite-orange border border-erudite-orange/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-white/35 font-mono uppercase block">Send inquiry</span>
                  <a href="mailto:arulpriyagd@gmail.com" className="font-bold text-sm text-white hover:text-erudite-orange transition-colors block">
                    Priya Joseph
                  </a>
                  <span className="text-xs text-white/50 font-light">arulpriyagd@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-erudite-orange/10 rounded-xl text-erudite-orange border border-erudite-orange/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-white/35 font-mono uppercase block">Direct Line</span>
                  <a href="tel:8939138799" className="font-bold text-sm text-white hover:text-erudite-orange transition-colors">
                    8939138799
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-erudite-orange/10 rounded-xl text-erudite-orange border border-erudite-orange/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-white/35 font-mono uppercase block">Studio HQ</span>
                  <span className="font-bold text-xs text-white leading-relaxed">
                    931, S1, Second Floor, Periyar Nagar 1st main road, TNHB colony Velachery. 600042
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Google Map */}
            <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative bg-[#0C0C0C] p-1 flex flex-col">
              <div className="absolute top-3 left-3 bg-[#121212]/90 backdrop-blur-sm text-[10px] font-mono px-3 py-1 rounded-full text-white font-bold shadow-sm border border-white/5 z-10 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                ERUDITE LOCATION MAP
              </div>
              
              <div className="w-full aspect-[16/10] bg-[#0C0C0C] relative overflow-hidden rounded-xl">
                <iframe 
                  src="https://maps.google.com/maps?q=12.990930557250977,80.21406555175781&z=17&output=embed" 
                  className="w-full h-full border-0 grayscale filter invert-[90%] hue-rotate-[180deg] brightness-[90%] contrast-[105%]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Erudite Google Map"
                />
              </div>

              <div className="p-3 bg-[#0C0C0C] flex items-center justify-between border-t border-white/5 text-xs">
                <span className="text-white/40 font-mono text-[9px]">
                  Lat: 12.9909° N, Lon: 80.2141° E
                </span>
                <a 
                  href="https://www.google.com/maps?q=12.990930557250977,80.21406555175781&z=17&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-erudite-orange hover:text-white transition-colors font-bold text-[10px] tracking-wider uppercase flex items-center gap-1 cursor-pointer"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Premium Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 bg-[#0C0C0C] rounded-3xl p-8 md:p-12 shadow-2xl border border-white/5 text-white"
          >
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                >
                  <h3 className="font-display font-black text-2xl text-white tracking-tight mb-6">
                    INQUIRY WORKSPACE
                  </h3>

                  {/* Estimation Notification Badge */}
                  {prefilledEstimateText && (
                    <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 text-xs text-white/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-erudite-orange animate-spin-slow" />
                        <span>
                          <strong>Estimator Config applied!</strong> Details pre-filled below.
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={onClearPrefill}
                        className="text-[10px] font-mono uppercase font-bold text-white/50 hover:text-erudite-orange flex items-center gap-1 cursor-pointer"
                      >
                        <RefreshCw className="w-3 h-3" /> Clear Prefill
                      </button>
                    </div>
                  )}

                  {validationError && (
                    <div className="p-3 bg-red-950/20 rounded-xl text-xs text-red-400 border border-red-500/30">
                      {validationError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-widest text-white/70 block mb-2 font-bold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl border border-white/5 bg-[#121212] focus:border-erudite-orange focus:ring-1 focus:ring-erudite-orange outline-none transition-all text-sm text-white"
                        id="form-name"
                      />
                    </div>

                    {/* Email input */}
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-widest text-white/70 block mb-2 font-bold">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-white/5 bg-[#121212] focus:border-erudite-orange focus:ring-1 focus:ring-erudite-orange outline-none transition-all text-sm text-white"
                        id="form-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company input */}
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-widest text-white/70 block mb-2 font-bold">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme Corporation"
                        className="w-full px-4 py-3.5 rounded-xl border border-white/5 bg-[#121212] focus:border-erudite-orange focus:ring-1 focus:ring-erudite-orange outline-none transition-all text-sm text-white"
                        id="form-company"
                      />
                    </div>

                    {/* Service Selection dropdown */}
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-widest text-white/70 block mb-2 font-bold">
                        Requested Service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-white/5 bg-[#121212] focus:border-erudite-orange focus:ring-1 focus:ring-erudite-orange outline-none transition-all text-sm text-white cursor-pointer"
                        id="form-service"
                      >
                        <option value="whiteboard" className="bg-[#0C0C0C]">Whiteboard & Infographic</option>
                        <option value="2d-motion" className="bg-[#0C0C0C]">2D Motion Graphics</option>
                        <option value="character" className="bg-[#0C0C0C]">Character & Asset Design</option>
                        <option value="elearning" className="bg-[#0C0C0C]">eLearning Course Development</option>
                        <option value="3d-render" className="bg-[#0C0C0C]">3D Product Render</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget input dropdown */}
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/70 block mb-2 font-bold">
                      Project Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/5 bg-[#121212] focus:border-erudite-orange focus:ring-1 focus:ring-erudite-orange outline-none transition-all text-sm text-white cursor-pointer"
                      id="form-budget"
                    >
                      <option value="Under $5,000" className="bg-[#0C0C0C]">Under $5,000</option>
                      <option value="$5,000 - $10,000" className="bg-[#0C0C0C]">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000" className="bg-[#0C0C0C]">$10,000 - $25,000</option>
                      <option value="$25,000+" className="bg-[#0C0C0C]">$25,000+</option>
                    </select>
                  </div>

                  {/* Message Input text */}
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/70 block mb-2 font-bold">
                      Message & Narrative Details
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share a brief overview of your visual constraints, timeline, or preferred styles..."
                      className="w-full px-4 py-3.5 rounded-xl border border-white/5 bg-[#121212] focus:border-erudite-orange focus:ring-1 focus:ring-erudite-orange outline-none transition-all text-sm text-white resize-none"
                      id="form-message"
                    />
                  </div>

                  {/* Submit Button with Loading states */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-erudite-orange hover:bg-white text-black font-extrabold uppercase tracking-wider text-xs px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      id="form-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Verifying workspace connection...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                /* Success Feedback screen */
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-500">
                    <CheckCircle className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-black text-3xl text-white tracking-tight uppercase">
                      Inquiry Connected!
                    </h3>
                    <p className="text-sm text-white/50 max-w-md mx-auto">
                      Thank you for connecting with Erudite, <strong>{formData.name}</strong>. Our art directors are reviewing your project parameters and will contact you at <strong>{formData.email}</strong> shortly.
                    </p>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={resetForm}
                      className="bg-erudite-orange hover:bg-white text-black font-extrabold uppercase tracking-wider text-xs px-6 py-3 rounded-xl transition-colors cursor-pointer focus:outline-none"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

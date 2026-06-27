import React, { useState } from 'react';
import { Smile, Zap, Compass, Calculator, Sparkles, CheckCircle, ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { services } from '../data';

interface ExpertiseProps {
  onSeeWork: () => void;
  onSelectEstimatedQuote: (details: string) => void;
}

export default function Expertise({ onSeeWork, onSelectEstimatedQuote }: ExpertiseProps) {
  // Calculator States
  const [videoType, setVideoType] = useState('2d-motion');
  const [duration, setDuration] = useState(60); // duration in seconds
  const [assetComplexity, setAssetComplexity] = useState('custom'); // basic, custom, cinematic
  const [includeVoiceover, setIncludeVoiceover] = useState(true);
  const [includeSound, setIncludeSound] = useState(true);

  // Calculate pricing range
  const calculatePrice = () => {
    let baseRatePerSec = 25; // 2D Motion base rate per second
    if (videoType === 'whiteboard') baseRatePerSec = 18;
    if (videoType === 'character') baseRatePerSec = 35;
    if (videoType === '3d-render') baseRatePerSec = 60;

    let complexityMultiplier = 1;
    if (assetComplexity === 'basic') complexityMultiplier = 0.85;
    if (assetComplexity === 'cinematic') complexityMultiplier = 1.45;

    let subtotal = duration * baseRatePerSec * complexityMultiplier;

    if (includeVoiceover) subtotal += 250;
    if (includeSound) subtotal += 200;

    const lowerBound = Math.round(subtotal * 0.9);
    const upperBound = Math.round(subtotal * 1.15);

    return { min: lowerBound, max: upperBound };
  };

  const { min, max } = calculatePrice();

  const handlePreFillContact = () => {
    const formattedType = videoType.replace('-', ' ').toUpperCase();
    const formattedComplexity = assetComplexity.toUpperCase();
    const details = `Estimated Project: ${formattedType} video, Duration: ${duration}s, Complexity: ${formattedComplexity}, Voiceover: ${includeVoiceover ? 'Yes' : 'No'}, Sound Design: ${includeSound ? 'Yes' : 'No'}. Range: $${min} - $${max}`;
    onSelectEstimatedQuote(details);
    
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getServiceIcon = (iconName: string) => {
    return (
      <div className="w-12 h-12 rounded-full bg-erudite-orange/10 flex items-center justify-center text-erudite-orange mb-6 border border-erudite-orange/20">
        <Smile className="w-6 h-6 stroke-[2.5]" />
      </div>
    );
  };

  return (
    <section id="expertise" className="py-24 md:py-32 bg-[#080808] relative overflow-hidden">
      {/* Light highlights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-erudite-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block exactly matching Screenshot 5 */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="sub-display text-erudite-orange text-xs tracking-widest block mb-3 font-extrabold">
            OUR EXPERTISE
          </span>
          <h2 className="heading-display text-3xl md:text-5xl text-white tracking-tight mb-6">
            End-To-End E-Learning Solutions
          </h2>
          <p className="text-sm md:text-base text-white/50 leading-relaxed font-light">
            Our mission is to transform static information into dynamic visual experiences that inspire understanding and retention.
          </p>
        </div>

        {/* Modular Grid Layout representing current services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6, borderColor: 'rgba(255, 160, 0, 0.3)', boxShadow: '0 20px 30px -10px rgba(255, 160, 0, 0.08)' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="p-8 rounded-2xl bg-[#121212] border border-white/5 shadow-2xl flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {getServiceIcon(svc.iconName)}
                <h3 className="font-display font-extrabold text-lg text-white tracking-tight mb-4">
                  {svc.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed mb-6 font-light">
                  {svc.description}
                </p>
              </div>
              
              <div className="text-xs font-mono font-bold text-erudite-orange flex items-center gap-1">
                Premium Asset delivery <CheckCircle className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}

          {/* Interactive Feature Element Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -6, borderColor: 'rgba(255, 160, 0, 0.3)', boxShadow: '0 20px 30px -10px rgba(255, 160, 0, 0.08)' }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="rounded-2xl overflow-hidden relative min-h-[300px] flex flex-col justify-end p-8 shadow-md group border border-white/5 transition-all duration-300"
          >
            {/* Dark background image overlay simulating learning brain or tech mask */}
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
              alt="AI tech overlay network"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/95 via-[#080808]/80 to-transparent" />
            
            <div className="relative z-10 text-white">
              <h3 className="font-display font-extrabold text-2xl tracking-tight leading-tight mb-6">
                e-Learning solutions <br />
                that engage, educate, and illuminate
              </h3>
              
              <button
                onClick={onSeeWork}
                className="bg-erudite-orange hover:bg-white text-black text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg focus:outline-none cursor-pointer"
                id="expertise-btn-portfolio"
              >
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>

        {/* NEW PREMIUM INTERACTIVE WIDGET: Motion Design Project Cost Estimator */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-16 bg-[#0C0C0C] rounded-3xl p-8 md:p-12 shadow-2xl border border-white/5 relative overflow-hidden" 
          id="cost-estimator"
        >
          {/* Decorative Corner Element */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-erudite-orange/10 to-transparent rounded-bl-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Estimator Configuration */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-erudite-orange/10 text-erudite-orange">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-mono tracking-widest text-erudite-orange uppercase font-extrabold">
                  Interactive Scope Configurator
                </h3>
              </div>

              <h3 className="font-display font-black text-2xl md:text-3xl text-white tracking-tight mb-8">
                ESTIMATE YOUR CREATIVE SCOPE
              </h3>

              <div className="space-y-6">
                {/* 1. Animation Art Style */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-white/70 block mb-3 font-bold">
                    1. Choose Animation Art Style
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { id: 'whiteboard', label: 'Whiteboard', desc: 'Simple lines' },
                      { id: '2d-motion', label: '2D Motion', desc: 'Vector layout' },
                      { id: 'character', label: 'Character', desc: 'Bespoke Mascot' },
                      { id: '3d-render', label: '3D Render', desc: 'CGI Cinematic' },
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setVideoType(type.id)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          videoType === type.id
                            ? 'border-erudite-orange bg-erudite-orange/10 text-white shadow-sm'
                            : 'border-white/10 hover:border-white/30 bg-transparent text-white/70'
                        }`}
                      >
                        <span className="text-xs font-bold block">{type.label}</span>
                        <span className="text-[10px] text-white/45 font-normal">{type.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Duration Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-white/70 block font-bold">
                      2. Video Duration (Seconds)
                    </label>
                    <span className="text-sm font-mono font-bold text-erudite-orange">
                      {duration}s ({Math.floor(duration / 60)}m {duration % 60}s)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="300"
                    step="15"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-erudite-orange"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-white/40 mt-1">
                    <span>15s (Short Promo)</span>
                    <span>60s (Standard Explainer)</span>
                    <span>300s (Deep Corporate Guide)</span>
                  </div>
                </div>

                {/* 3. Asset Complexity */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-white/70 block mb-3 font-bold">
                    3. Illustration Complexity
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'basic', label: 'Standard Assets', desc: 'Simple shape library' },
                      { id: 'custom', label: 'Bespoke Layouts', desc: 'Custom storyboarding' },
                      { id: 'cinematic', label: 'Cinematic Rich', desc: 'Handcrafted masterpieces' },
                    ].map((comp) => (
                      <button
                        key={comp.id}
                        onClick={() => setAssetComplexity(comp.id)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          assetComplexity === comp.id
                            ? 'border-erudite-orange bg-erudite-orange/10 text-white shadow-sm'
                            : 'border-white/10 hover:border-white/30 bg-transparent text-white/70'
                        }`}
                      >
                        <span className="text-xs font-bold block">{comp.label}</span>
                        <span className="text-[10px] text-white/45 font-normal leading-tight block mt-1">
                          {comp.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Production Extras */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-white/70 block mb-3 font-bold">
                    4. Production Add-Ons
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 text-xs font-semibold text-white/80 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeVoiceover}
                        onChange={(e) => setIncludeVoiceover(e.target.checked)}
                        className="rounded border-white/10 text-erudite-orange focus:ring-erudite-orange bg-[#121212] w-4 h-4"
                      />
                      Professional Voiceover Talent
                    </label>

                    <label className="flex items-center gap-2 text-xs font-semibold text-white/80 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeSound}
                        onChange={(e) => setIncludeSound(e.target.checked)}
                        className="rounded border-white/10 text-erudite-orange focus:ring-erudite-orange bg-[#121212] w-4 h-4"
                      />
                      Custom Sound FX & Foley Mix
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimator Display Outcome */}
            <div className="lg:col-span-5 bg-[#121212] text-white rounded-2xl p-8 flex flex-col justify-between min-h-[350px] relative border border-white/5 shadow-2xl">
              <div className="absolute top-4 right-4 text-erudite-orange opacity-10">
                <Sparkles className="w-24 h-24" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-erudite-orange font-extrabold block mb-1">
                  Budget Projection
                </span>
                <h4 className="font-display font-extrabold text-lg text-white mb-6">
                  Estimated Pricing Range
                </h4>

                <div className="mb-6">
                  <span className="heading-display text-4xl md:text-5xl text-white block tracking-tight font-black">
                    ${min.toLocaleString()} - ${max.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-white/40 block mt-1">
                    *Excludes tax. Reflects current industry premium standard delivery.
                  </span>
                </div>

                <div className="space-y-2 border-t border-white/5 pt-4 text-xs text-white/50 font-light">
                  <div className="flex justify-between">
                    <span>Base Animation Production:</span>
                    <span className="font-semibold text-white">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format Formats:</span>
                    <span className="font-semibold text-white">Lottie, JSON, MP4 (Web Optimized)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revisions Allowance:</span>
                    <span className="font-semibold text-white">3 Full Feedback Loops</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handlePreFillContact}
                  className="w-full bg-erudite-orange hover:bg-white text-black font-extrabold uppercase tracking-wider text-xs px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 cursor-pointer"
                  id="estimator-prefill-btn"
                >
                  Apply This Estimate to Quote Inquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

import React from 'react';
import { ArrowRight, Sparkles, Smile, Layers, HelpCircle, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { stats, corePurposeCards } from '../data';

interface HeroProps {
  onSeeWork: () => void;
  onAboutUs: () => void;
}

export default function Hero({ onSeeWork, onAboutUs }: HeroProps) {
  // Map icons to custom components for premium visual appeal
  const renderPurposeIcon = (iconType: string) => {
    switch (iconType) {
      case 'smile':
        return (
          <div className="w-12 h-12 rounded-full bg-erudite-orange/10 flex items-center justify-center text-erudite-orange border border-erudite-orange/30 group-hover:scale-110 transition-transform duration-300">
            <Smile className="w-6 h-6 stroke-[2.5]" />
          </div>
        );
      case 'squares':
        return (
          <div className="w-12 h-12 rounded-full bg-erudite-orange/10 flex items-center justify-center text-erudite-orange border border-erudite-orange/30 group-hover:scale-110 transition-transform duration-300">
            <Layers className="w-6 h-6" />
          </div>
        );
      case 'sparkles':
        return (
          <div className="w-12 h-12 rounded-full bg-erudite-orange/10 flex items-center justify-center text-erudite-orange border border-erudite-orange/30 group-hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
        );
      default:
        return <Sparkles className="w-6 h-6 text-erudite-orange" />;
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-[#080808] overflow-hidden">
      {/* Absolute Radial Gradient Highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-erudite-orange/5 via-white/2 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-erudite-orange/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intro Tag */}
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sub-display text-erudite-orange text-xs md:text-sm block tracking-[0.3em] font-extrabold"
          >
            THE ERUDITE POLICY
          </motion.span>
        </div>

        {/* Display Typography Title matching the Design style */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-display text-5xl md:text-[105px] font-black leading-[0.85] tracking-tighter flex flex-col text-white"
          >
            <span>TURNING IDEAS</span>
            <span className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
              INTO DIGITAL
              <span className="h-[3px] w-16 md:w-32 bg-erudite-orange mt-2 md:mt-10"></span>
            </span>
            <span className="text-stroke-outline">MOVING STORIES.</span>
          </motion.h1>
        </div>

        {/* Supporting Description */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-white/50 leading-relaxed font-light"
          >
            We partner with ambitious brands to define their visual legacy in a hyper-connected world through award-winning animation, 2D/3D character design, and radical storytelling.
          </motion.p>
        </div>

        {/* Interactive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <button
            onClick={onAboutUs}
            className="w-full sm:w-auto bg-erudite-orange hover:bg-white text-black font-extrabold uppercase tracking-wider text-xs px-8 py-4.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-erudite-orange/15 hover:-translate-y-0.5 cursor-pointer"
            id="hero-cta-about"
          >
            Learn About Us
          </button>
          
          <button
            onClick={onSeeWork}
            className="w-full sm:w-auto border border-white/20 hover:border-erudite-orange text-white hover:text-erudite-orange font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2 group cursor-pointer"
            id="hero-cta-portfolio"
          >
            See Estimator
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Image Overlap Grid Section */}
        <div className="relative mt-12 mb-[-12rem] z-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            
            {/* Image 1 (Left Portrait Offset) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="md:col-span-4 relative rounded-3xl overflow-hidden aspect-[3/4] md:aspect-[4/5] shadow-2xl group border border-white/10 bg-[#121212]"
            >
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                alt="Students reading book, e-learning storytelling"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-erudite-orange font-bold">
                  Bespoke Illustration
                </span>
                <p className="text-sm font-bold tracking-tight mt-1">
                  Connecting and communicating with young minds
                </p>
              </div>
            </motion.div>

            {/* Image 2 (Right Landscape Offset - Robotech scene) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-8 relative rounded-3xl overflow-hidden aspect-video shadow-2xl group border border-white/10 bg-[#121212]"
            >
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80"
                alt="Cozy robot devices learning workspace setup"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                referrerPolicy="no-referrer"
              />
              
              {/* Premium Interactive Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="max-w-md">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-erudite-orange/15 text-erudite-orange text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                    <Flame className="w-3.5 h-3.5 animate-bounce text-erudite-orange" /> Hot Release
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-extrabold tracking-tight">
                    Custom Character CGI rigging
                  </h3>
                  <p className="text-sm text-white/70 mt-1 leading-relaxed">
                    Interactive animated robots sitting on a workspace laptop, ready for production.
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <span className="text-xs font-mono bg-white/10 px-3 py-1 rounded-full text-white/80">Cinema4D</span>
                  <span className="text-xs font-mono bg-white/10 px-3 py-1 rounded-full text-white/80">AfterEffects</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>

      {/* Dark Navy Fold Section begins */}
      <div className="w-full bg-[#0C0C0C] text-white pt-60 pb-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Subheading of Purpose */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="sub-display text-erudite-orange text-xs tracking-widest block mb-3 font-extrabold">
              OUR PURPOSE
            </span>
            <h2 className="heading-display text-3xl md:text-5xl text-white mb-6">
              Transforming Concepts
            </h2>
            <p className="text-sm md:text-base text-white/50 leading-relaxed font-light">
              Our mission is to transform static information into dynamic visual experiences that inspire understanding and retention.
            </p>
          </div>

          {/* Grid of 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {corePurposeCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-erudite-orange/40 hover:bg-[#161616] transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent Hover Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-erudite-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display font-extrabold tracking-tight text-xl text-white group-hover:text-erudite-orange transition-colors">
                    {card.title}
                  </h3>
                  {renderPurposeIcon(card.iconType)}
                </div>
                
                <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-300 font-light">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Statistics Block */}
          <div className="border-t border-white/5 pt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 100, delay: idx * 0.1 }}
                  className="flex flex-col items-center justify-center"
                >
                  <span className="heading-display text-4xl md:text-6xl text-erudite-orange tracking-tight mb-2 font-black">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-white/40 font-bold uppercase">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

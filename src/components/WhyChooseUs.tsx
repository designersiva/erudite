import React, { useState } from 'react';
import { Send, CheckCircle, Award, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonials } from '../data';

interface WhyChooseUsProps {
  onSeeWork: () => void;
}

export default function WhyChooseUs({ onSeeWork }: WhyChooseUsProps) {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonialIdx];

  return (
    <section id="why-choose-us" className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] bg-[#080808] overflow-hidden relative border-t border-white/5">
      
      {/* Decorative background lights */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-erudite-orange/5 rounded-full blur-3xl pointer-events-none" />

      {/* Left Column: High-tech Visual Classroom Illustration with Overlapping Braydon Butler Quote Card */}
      <div className="lg:col-span-6 relative min-h-[400px] lg:min-h-auto">
        {/* Background Image of high-tech digital classroom or learning environment */}
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
          alt="High-tech digital education classroom setup"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/10 via-[#080808]/60 to-[#080808]" />
        
        {/* Decorative Neon Ring */}
        <div className="absolute top-12 left-12 w-32 h-32 border-4 border-erudite-orange/10 rounded-full animate-pulse pointer-events-none" />

        {/* Overlapping Testimonial Quote Card */}
        <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonialIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-[#121212] rounded-2xl p-6 md:p-8 shadow-2xl border-l-4 border-erudite-orange border-t border-r border-b border-white/5 relative"
            >
              <span className="text-6xl font-display font-black text-erudite-orange/15 absolute -top-4 left-4 select-none">
                “
              </span>
              
              <p className="text-xs md:text-sm text-white/80 leading-relaxed mb-6 font-light relative z-10">
                "{currentTestimonial.quote}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={currentTestimonial.avatarUrl}
                    alt={currentTestimonial.author}
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-xs font-mono font-bold text-erudite-orange block">
                      {currentTestimonial.author}
                    </span>
                    <span className="text-[10px] text-white/50 block">
                      {currentTestimonial.role}
                    </span>
                  </div>
                </div>

                {/* Micro slider controls */}
                <div className="flex gap-1">
                  <button
                    onClick={prevTestimonial}
                    className="p-1.5 bg-white/5 hover:bg-erudite-orange hover:text-black rounded-full text-white/80 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-1.5 bg-white/5 hover:bg-erudite-orange hover:text-black rounded-full text-white/80 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right Column: Values & Drive Growth content */}
      <div className="lg:col-span-6 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative z-10 text-white">
        
        <span className="sub-display text-erudite-orange text-xs tracking-widest block mb-3 font-extrabold">
          WHY CHOOSE US
        </span>
        
        <h2 className="heading-display text-3xl md:text-5xl text-white tracking-tight mb-6">
          DRIVE GROWTH AT YOUR BUSINESS
        </h2>
        
        <p className="text-sm text-white/50 leading-relaxed font-light mb-12 max-w-xl">
          We combine narrative focus, optimized web delivery, and cinematic precision. Rather than typical template-driven graphics, we construct fully bespoke visual languages tailored to your audience.
        </p>

        {/* 3 Core Values (Integrity, Quality, Creativity) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 border-t border-white/5 pt-8">
          
          {/* Value 1: Integrity */}
          <div className="flex flex-col gap-3 group">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-erudite-orange/10 text-erudite-orange group-hover:scale-110 transition-transform">
                <Send className="w-5 h-5 -rotate-45" />
              </div>
              <h3 className="font-display font-extrabold text-base tracking-tight text-white group-hover:text-erudite-orange transition-colors">
                Integrity
              </h3>
            </div>
            <p className="text-[11px] text-white/50 leading-relaxed font-light">
              Honest transparent timelines, strict NDA compliance, and modular asset handovers.
            </p>
          </div>

          {/* Value 2: Quality */}
          <div className="flex flex-col gap-3 group">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-erudite-orange/10 text-erudite-orange group-hover:scale-110 transition-transform">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-base tracking-tight text-white group-hover:text-erudite-orange transition-colors">
                Quality
              </h3>
            </div>
            <p className="text-[11px] text-white/50 leading-relaxed font-light">
              Flawless 60fps renders, pixel-perfect vector scalability, and multi-device checks.
            </p>
          </div>

          {/* Value 3: Creativity */}
          <div className="flex flex-col gap-3 group">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-erudite-orange/10 text-erudite-orange group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-base tracking-tight text-white group-hover:text-erudite-orange transition-colors">
                Creativity
              </h3>
            </div>
            <p className="text-[11px] text-white/50 leading-relaxed font-light">
              Bespoke visual metaphors, character rigging, and compelling cinematic narratives.
            </p>
          </div>

        </div>

        {/* Action Trigger */}
        <div>
          <button
            onClick={onSeeWork}
            className="bg-erudite-orange hover:bg-white text-black font-extrabold uppercase tracking-wider text-xs px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-erudite-orange/15 cursor-pointer focus:outline-none"
            id="whychooseus-view-portfolio-btn"
          >
            View Portfolio
          </button>
        </div>

      </div>

    </section>
  );
}

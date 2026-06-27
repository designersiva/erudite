import React from 'react';
import { Diamond, PenTool, Lightbulb, CheckSquare, Target, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutUsProps {
  onLearnMore: () => void;
}

export default function AboutUs({ onLearnMore }: AboutUsProps) {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#080808] relative overflow-hidden">
      {/* Background Graphic Highlights */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-erudite-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Creative Vector Canvas & Badge Overlay */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            
            {/* Custom Premium High-Fidelity SVG Illustration of Diverse Stylized Characters walking together */}
            <div className="w-full aspect-[4/3] rounded-3xl bg-[#0C0C0C] p-6 flex items-center justify-center relative overflow-hidden border border-white/5 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-erudite-orange/5" />
              
              {/* Complex bespoke SVG depicting stylized team/walkers adjusted to Bold Typography theme */}
              <svg viewBox="0 0 500 350" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background Shapes */}
                <circle cx="250" cy="175" r="120" fill="#E2FF31" fillOpacity="0.08" />
                <rect x="60" y="240" width="380" height="4" rx="2" fill="#F2F2F2" fillOpacity="0.1" />
                
                {/* Character 1 (Stylized tall figure on left) */}
                <g className="animate-bounce" style={{ animationDuration: '6s', animationDelay: '0s' }}>
                  <rect x="100" y="100" width="40" height="150" rx="20" fill="#1A1A1A" stroke="#FFFFFF" strokeWidth="1" />
                  <circle cx="120" cy="75" r="18" fill="#E2FF31" />
                  {/* Coat accent */}
                  <rect x="105" y="120" width="30" height="90" rx="15" fill="#2A2A2A" />
                  {/* Scarf */}
                  <path d="M102 105C110 112 130 112 138 105L134 135L118 125L102 105Z" fill="#E2FF31" />
                </g>

                {/* Character 2 (Medium height walker) */}
                <g className="animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}>
                  <rect x="170" y="130" width="45" height="120" rx="22" fill="#E2FF31" />
                  <circle cx="192.5" cy="102" r="16" fill="#1A1A1A" />
                  {/* Contrast sweater */}
                  <rect x="175" y="145" width="35" height="70" rx="17" fill="#C9E620" />
                  {/* Glasses outline */}
                  <rect x="182" y="98" width="21" height="8" rx="2" stroke="#121212" strokeWidth="2" />
                </g>

                {/* Character 3 (Center foreground shorter figure) */}
                <g className="animate-bounce" style={{ animationDuration: '5.2s', animationDelay: '0.2s' }}>
                  <rect x="245" y="150" width="38" height="100" rx="19" fill="#1A1A1A" stroke="#E2FF31" strokeWidth="1" />
                  <circle cx="264" cy="125" r="15" fill="#E2FF31" />
                  {/* Stylish hair cap */}
                  <path d="M251 120C251 112 277 112 277 120H251Z" fill="#1A1A1A" />
                  <rect x="250" y="165" width="28" height="60" rx="12" fill="#333333" />
                </g>

                {/* Character 4 (Right-most walker with high collar) */}
                <g className="animate-bounce" style={{ animationDuration: '5.8s', animationDelay: '0.8s' }}>
                  <rect x="310" y="110" width="44" height="140" rx="22" fill="#2A2A2A" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="332" cy="85" r="17" fill="#E2FF31" />
                  {/* Scarf accent */}
                  <path d="M312 115H352V130H312V115Z" fill="#1A1A1A" />
                  {/* Coat overlap */}
                  <path d="M322 135L332 200L342 135" stroke="#FFFFFF" strokeWidth="2" />
                </g>

                {/* Additional organic decorative foliage */}
                <path d="M30 250C30 210 60 190 80 210C100 230 110 250 80 250H30Z" fill="#F2F2F2" fillOpacity="0.05" />
                <path d="M420 250C420 215 450 200 465 215C480 230 490 250 465 250H420Z" fill="#E2FF31" fillOpacity="0.1" />
              </svg>
            </div>

            {/* Overlapping Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 80 }}
              className="absolute -bottom-8 -left-4 md:left-6 max-w-sm p-6 rounded-2xl bg-[#121212] text-white shadow-2xl border border-white/5"
              id="drive-growth-badge"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-erudite-orange/10 text-erudite-orange border border-erudite-orange/20 animate-pulse">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-lg tracking-tight text-white mb-2">
                    Drive Growth
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    Transforming intricate operational pipelines into clear, crisp animated modules that engage enterprise decision-makers.
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Side: Informative & Column Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            
            <div>
              <span className="sub-display text-erudite-orange text-xs tracking-widest block mb-3 font-extrabold">
                ABOUT US
              </span>
              <h2 className="heading-display text-3xl md:text-5xl text-white tracking-tight mb-6">
                ERUDITE – BRINGING IDEAS TO LIFE
              </h2>
              <p className="text-sm md:text-base text-white/50 leading-relaxed font-light mb-5">
                At Erudite, we transform ideas into impactful visuals through motion graphics, 2D/3D animations, whiteboard, line drawing, infographic, and iconic styles. Our expertise includes background design, illustration, asset and character creation, advertising design, storyboards, and typography. From eLearning solutions to advertising videos, explainers, mascots, and digital posters, we craft engaging content that inspires, informs, and drives results.
              </p>

              {/* CEO Profile Highlight */}
              <div className="flex items-center gap-3 bg-[#0C0C0C] border border-white/5 px-4 py-2.5 rounded-2xl w-max mb-8">
                <div className="w-8 h-8 rounded-full bg-erudite-orange/10 flex items-center justify-center text-erudite-orange font-mono text-xs font-bold border border-erudite-orange/20">
                  PJ
                </div>
                <div>
                  <span className="text-[9px] font-mono text-white/35 uppercase block tracking-widest leading-none mb-1">Chief Executive Officer</span>
                  <span className="text-xs font-extrabold text-white tracking-tight">Priya Joseph</span>
                </div>
              </div>
            </div>

            {/* Two Column Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded bg-[#121212] text-erudite-orange border border-erudite-orange/20">
                    <Diamond className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h3 className="font-display font-extrabold text-base tracking-tight text-white">
                    Animated Storytelling
                  </h3>
                </div>
                <p className="text-xs text-white/40 leading-relaxed font-light">
                  Professional animations and motion graphics that communicate with clarity and captivate your audience, boosting emotional brand memory.
                </p>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded bg-[#121212] text-erudite-orange border border-erudite-orange/20">
                    <PenTool className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h3 className="font-display font-extrabold text-base tracking-tight text-white">
                    Visual Design
                  </h3>
                </div>
                <p className="text-xs text-white/40 leading-relaxed font-light">
                  Backgrounds, typography, and storyboards crafted to bring abstract concepts to life with pixel-perfect precision and modern color pairing.
                </p>
              </div>

            </div>

            {/* CTA Trigger */}
            <div className="mt-8">
              <button
                onClick={onLearnMore}
                className="bg-erudite-orange hover:bg-white text-black font-extrabold uppercase tracking-wider text-xs px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-erudite-orange/15 cursor-pointer focus:outline-none"
                id="btn-about-more"
              >
                Learn More About Us
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

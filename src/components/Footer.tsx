import React from 'react';
import { ArrowUpRight, Github, ArrowUp, Zap, HelpCircle } from 'lucide-react';
import EruditeLogo from './EruditeLogo';

interface FooterProps {
  onGetStarted: () => void;
}

export default function Footer({ onGetStarted }: FooterProps) {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full overflow-hidden">
      
      {/* 1. IMAGE 8: TOGETHER, WE ANIMATE YOUR IDEAS Banner */}
      <div className="relative w-full py-24 md:py-32 bg-[#0C0C0C] text-white text-center flex flex-col justify-center items-center px-6 border-b border-white/5">
        {/* Background photo overlay of corporate office with blue styling */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
          alt="Creative team planning project"
          className="absolute inset-0 w-full h-full object-cover opacity-5"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C] via-[#0C0C0C]/90 to-[#0C0C0C]" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <span className="sub-display text-erudite-orange text-xs md:text-sm tracking-widest block font-extrabold">
            ASK ERUDITE
          </span>
          
          <h2 className="heading-display text-4xl md:text-6xl text-white tracking-tight">
            Together, We Animate Your Ideas
          </h2>
          
          <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            We're not just another studio - we're your creative partners. With expertise in motion graphics, 2D/3D animations, and design, our team is dedicated to crafting visuals that engage your audience and elevate your brand.
          </p>

          <div>
            <button
              onClick={onGetStarted}
              className="bg-erudite-orange hover:bg-white text-black font-extrabold uppercase tracking-wider text-xs px-10 py-4.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-erudite-orange/15 hover:-translate-y-0.5 cursor-pointer"
              id="banner-get-started-btn"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* 2. IMAGE 9 (Middle): Stay Connected Orange Banner */}
      <div className="w-full bg-erudite-orange py-16 text-center text-[#080808] px-6">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-black text-[#080808]/75 block">
            LOREM IPSUM
          </span>
          <h3 className="font-display font-black text-2xl md:text-4xl text-[#080808] tracking-tight uppercase">
            STAY CONNECTED WITH CUTTING EDGE IT
          </h3>
          <p className="text-xs md:text-sm text-[#080808]/80 max-w-2xl mx-auto leading-relaxed font-light">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.
          </p>
        </div>
      </div>

      {/* 3. IMAGE 9 (Bottom): Slate-Teal Main Footer */}
      <div className="bg-[#0C0C0C] text-white pt-16 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Logo & Social Icons */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
            {/* Logo */}
            <EruditeLogo className="h-8" />

            {/* LinkedIn & YouTube Quick Icons matching image exactly */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-xs font-mono font-bold tracking-wider uppercase text-white/70 hover:text-erudite-orange transition-colors flex items-center gap-1"
                id="footer-linkedin"
              >
                LinkedIn <ArrowUpRight className="w-3.5 h-3.5 text-erudite-orange" />
              </a>
              <span className="text-white/20">|</span>
              <a
                href="#"
                className="text-xs font-mono font-bold tracking-wider uppercase text-white/70 hover:text-erudite-orange transition-colors flex items-center gap-1"
                id="footer-youtube"
              >
                YouTube <ArrowUpRight className="w-3.5 h-3.5 text-erudite-orange" />
              </a>
            </div>
          </div>

          {/* Bottom Bar: Copyright on left, Terms/Policy on right */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/40">
            <p className="text-center md:text-left">
              &copy; 2026 Erudite. All Right Reserved
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-erudite-orange transition-colors">Term & Condition</a>
              <a href="#" className="hover:text-erudite-orange transition-colors">Service policy</a>
              
              {/* Back to top micro helper */}
              <button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-white/5 text-white hover:text-erudite-orange hover:bg-white/10 transition-all cursor-pointer focus:outline-none border border-white/5"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

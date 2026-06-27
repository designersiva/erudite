import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { navLinks } from '../data';
import EruditeLogo from './EruditeLogo';

interface HeaderProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-erudite-bg-light/90 backdrop-blur-md border-b border-erudite-teal/10 shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            id="btn-logo"
          >
            <EruditeLogo className="h-8 md:h-9" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-item-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 py-1 cursor-pointer focus:outline-none ${
                    isActive ? 'text-erudite-orange' : 'text-white/65 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-erudite-orange"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Hamburger Menu & Contact Quick Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden lg:flex items-center gap-2 bg-erudite-orange hover:bg-white text-black font-bold uppercase tracking-wider text-xs px-5 py-2.5 rounded-full transition-all duration-300"
              id="header-cta"
            >
              Get In Touch
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-erudite-orange transition-colors cursor-pointer rounded-lg hover:bg-white/5 focus:outline-none"
              aria-label="Toggle menu"
              id="hamburger-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-erudite-navy text-white flex flex-col justify-between pt-28 pb-12 px-8"
          >
            {/* Background design elements */}
            <div className="absolute top-1/4 right-10 w-96 h-96 bg-erudite-orange/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-erudite-teal/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row md:items-center justify-between gap-12">
              {/* Menu Links */}
              <div className="flex flex-col gap-6">
                <span className="text-xs font-mono uppercase tracking-widest text-erudite-orange">Navigation</span>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className="text-left text-4xl md:text-6xl font-display font-black tracking-tight hover:text-erudite-orange transition-colors duration-300 focus:outline-none cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Agency Info */}
              <div className="flex flex-col gap-8 text-white/70 max-w-sm">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-erudite-orange block mb-3">
                    Bespoke Media Studio
                  </span>
                  <p className="text-sm leading-relaxed">
                    We turn ideas into moving stories. Combining cinematic animation precision with high-impact corporate storytelling.
                  </p>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-white block mb-2">Connect</span>
                  <a href="mailto:arulpriyagd@gmail.com" className="text-sm hover:text-erudite-orange transition-colors block">
                    arulpriyagd@gmail.com
                  </a>
                  <a href="tel:8939138799" className="text-sm hover:text-erudite-orange transition-colors block mt-1">
                    8939138799
                  </a>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="p-2 bg-white/5 hover:bg-erudite-orange/20 rounded-full hover:text-erudite-orange transition-colors">
                    <span className="text-xs font-semibold uppercase px-1">LinkedIn</span>
                  </a>
                  <a href="#" className="p-2 bg-white/5 hover:bg-erudite-orange/20 rounded-full hover:text-erudite-orange transition-colors">
                    <span className="text-xs font-semibold uppercase px-1">YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center text-xs text-white/30 border-t border-white/10 pt-6">
              &copy; 2026 Erudite. All Rights Reserved. Stay Connected.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

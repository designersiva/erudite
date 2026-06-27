import React, { useState } from 'react';
import { Play, X, User, Calendar, ExternalLink, Filter, Film } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioItems } from '../data';
import { PortfolioItem } from '../types';

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filters = ['All', 'Motion Graphics', 'Showreel', '3D & Character', 'eLearning'];

  const filteredItems = selectedFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedFilter);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#080808] relative overflow-hidden">
      {/* Visual background highlights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-erudite-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header exactly matching Screenshot 7 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="sub-display text-erudite-orange text-xs tracking-widest block mb-3 font-extrabold">
            OUR PORTFOLIO
          </span>
          <h2 className="heading-display text-3xl md:text-5xl text-white tracking-tight mb-6">
            Building Brand Identity With Motion Graphics
          </h2>
          <p className="text-sm md:text-base text-white/50 leading-relaxed font-light">
            Our mission is to transform static information into dynamic visual experiences that inspire understanding and retention.
          </p>
        </div>

        {/* Categories Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16" id="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-erudite-orange text-black border-erudite-orange shadow-md'
                  : 'bg-transparent text-white/60 border-white/10 hover:border-erudite-orange hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.5 }}
                onClick={() => setActiveItem(item)}
                className="group relative rounded-2xl overflow-hidden aspect-video md:aspect-[4/3] bg-[#121212] cursor-pointer border border-white/5 shadow-2xl"
              >
                {/* Image background with zoom and hover referrers */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  referrerPolicy="no-referrer"
                />

                {/* Grid Overlay with premium visual styles */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} via-[#080808]/50 to-[#080808]/95 opacity-80 group-hover:opacity-95 transition-all duration-300`} />

                {/* Content block inside card */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono uppercase bg-[#121212]/90 backdrop-blur-md px-3 py-1 rounded-full text-erudite-orange font-bold tracking-widest border border-white/5">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-white/50">{item.year}</span>
                  </div>

                  {/* Play Button Highlight */}
                  <div className="self-center p-4 bg-erudite-orange text-black rounded-full scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-erudite-orange/30">
                    <Play className="w-6 h-6 fill-black text-black" />
                  </div>

                  <div>
                    <h3 className="font-display font-black text-xl md:text-2xl leading-tight tracking-tight mb-2 group-hover:text-erudite-orange transition-colors">
                      {item.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-1.5 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="text-[9px] font-mono bg-white/5 px-2 py-0.5 rounded text-white/80">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Final element: Immersive call to action */}
            {selectedFilter === 'All' && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden relative aspect-video md:aspect-[4/3] bg-[#121212] p-8 flex flex-col justify-between text-white shadow-lg border border-erudite-orange/15"
              >
                {/* Ambient graphic background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-erudite-orange/10 via-transparent to-transparent pointer-events-none" />
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-erudite-orange/5 rounded-full blur-xl" />

                <div className="flex items-center gap-2 text-erudite-orange font-mono text-xs uppercase tracking-widest font-extrabold">
                  <Film className="w-4 h-4 animate-spin-slow" />
                  Creative Partners
                </div>

                <div>
                  <h3 className="font-display font-black text-2xl md:text-3xl leading-none tracking-tight mb-4 text-white">
                    WANT A CUSTOM <br />
                    SHOWREEL?
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed mb-6 font-light">
                    Every project is a tailored storytelling masterpiece. We support you from script to high fidelity render.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-erudite-orange hover:bg-white text-black text-xs font-extrabold uppercase tracking-wider py-3 px-6 rounded-full transition-colors duration-300 w-full text-center"
                >
                  All Portfolios
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* IMMERSIVE VIDEO MODAL PREVIEW HANDLER */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <div className="relative w-full max-w-5xl bg-[#0C0C0C] rounded-3xl overflow-hidden shadow-2xl border border-white/5 flex flex-col lg:flex-row max-h-[90vh]">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white hover:text-erudite-orange rounded-full hover:bg-black/80 transition-colors focus:outline-none cursor-pointer border border-white/5"
                id="modal-close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Player Segment */}
              <div className="lg:w-2/3 bg-black flex items-center justify-center relative aspect-video lg:aspect-auto">
                {activeItem.videoUrl ? (
                  <video
                    src={activeItem.videoUrl}
                    controls
                    autoPlay
                    loop
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-center text-white/40 p-12">
                    <Play className="w-16 h-16 text-erudite-orange mx-auto mb-4 animate-pulse" />
                    <span>Rendering dynamic showreel sample...</span>
                  </div>
                )}
              </div>

              {/* Information Sidebar Segment */}
              <div className="lg:w-1/3 p-8 flex flex-col justify-between bg-[#121212] text-white overflow-y-auto border-t lg:border-t-0 lg:border-l border-white/5">
                <div>
                  <span className="text-[10px] font-mono uppercase bg-erudite-orange/10 text-erudite-orange px-3 py-1 rounded-full font-bold tracking-widest border border-erudite-orange/20 block w-max mb-4">
                    {activeItem.category}
                  </span>

                  <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight leading-tight mb-4 text-white">
                    {activeItem.title}
                  </h3>

                  <p className="text-xs text-white/50 leading-relaxed mb-6 font-light">
                    This sample illustrates our high-speed vector tracking, cinematic camera transitions, and multi-layered character motion rendering pipelines. Optimised for lottie-web embeds and mobile browsers.
                  </p>

                  <div className="space-y-4 border-t border-white/5 pt-6">
                    <div className="flex items-center gap-3 text-xs">
                      <User className="w-4 h-4 text-erudite-orange" />
                      <div>
                        <span className="text-white/45 block">Client Partner</span>
                        <span className="font-bold text-white">{activeItem.client}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs">
                      <Calendar className="w-4 h-4 text-erudite-orange" />
                      <div>
                        <span className="text-white/45 block">Release Date</span>
                        <span className="font-bold text-white">{activeItem.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <a
                    href="#contact"
                    onClick={() => setActiveItem(null)}
                    className="w-full bg-erudite-orange hover:bg-white text-black text-center font-extrabold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl block transition-colors duration-300"
                  >
                    Inquire About Similar Project
                  </a>
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [prefilledEstimate, setPrefilledEstimate] = useState('');

  // Handle active section highlight on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header height and earlier trigger

      const sections = ['home', 'about', 'expertise', 'portfolio', 'why-choose-us', 'contact'];
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateToSection = (id: string) => {
    setActiveSection(id);
  };

  const handleApplyEstimate = (details: string) => {
    setPrefilledEstimate(details);
  };

  const handleClearPrefill = () => {
    setPrefilledEstimate('');
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToEstimator = () => {
    const estimatorSection = document.getElementById('cost-estimator');
    if (estimatorSection) {
      estimatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-erudite-orange selection:text-black bg-[#080808]">
      {/* Premium Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigateToSection} />

      {/* Main Sections */}
      <main>
        {/* Home/Hero/Purpose section */}
        <Hero onSeeWork={handleScrollToEstimator} onAboutUs={handleScrollToContact} />

        {/* About section */}
        <AboutUs onLearnMore={handleScrollToContact} />

        {/* Expertise/Estimator section */}
        <Expertise onSeeWork={handleScrollToContact} onSelectEstimatedQuote={handleApplyEstimate} />

        {/* Portfolio section with immersive modal showreel */}
        <Portfolio />

        {/* Why Choose Us & Testimonials section */}
        <WhyChooseUs onSeeWork={handleScrollToContact} />

        {/* Contact workspace */}
        <ContactUs prefilledEstimateText={prefilledEstimate} onClearPrefill={handleClearPrefill} />
      </main>

      {/* Beautiful comprehensive footer */}
      <Footer onGetStarted={handleScrollToEstimator} />
    </div>
  );
}

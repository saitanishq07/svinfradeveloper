import React from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Award, Wrench } from 'lucide-react';
import { companyData } from '../data/companyData';

const Hero = () => {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950">
      {/* Heavy Excavator Image Flipped & Positioned to the Right Side for Full Unobstructed Visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero-sunset-excavator.jpg"
          alt="Heavy Excavator Working on Infrastructure Site at Sunset"
          className="w-full h-full object-cover object-[75%_center] scale-x-[-1] filter brightness-105 contrast-105 transition-all duration-700"
        />
        {/* Transparent Left Gradient Overlay ensuring Text Contrast while keeping Heavy Excavator 100% Unobstructed on Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-left w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Compact Frosted Glass Content Card (Leaves Right 60% Open for Heavy Excavator) */}
          <div className="lg:col-span-7 xl:col-span-6 bg-slate-950/75 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/15 shadow-2xl space-y-6">
            
            {/* Logo Brand Tagline Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-logo-blue animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-logo-blue">
                {companyData.tagline}
              </span>
            </div>

            {/* Hero Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-logo-cyan via-blue-400 to-blue-500">Infrastructure.</span>
              <br />
              Creating <span className="text-white">Progress.</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed drop-shadow-sm">
              Specializing in high-precision control blasting, open quarrying, chemical rock breaking, mass earthwork excavations, highway roads, and irrigation canal engineering.
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-semibold text-slate-100">
              <div className="flex items-center space-x-2 bg-slate-800/80 border border-slate-700/80 backdrop-blur-md px-3 py-2.5 rounded-xl shadow-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>100% Safety</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/80 border border-slate-700/80 backdrop-blur-md px-3 py-2.5 rounded-xl shadow-md">
                <Award className="w-4 h-4 text-logo-cyan flex-shrink-0" />
                <span>₹1.5Cr+ Turnover</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/80 border border-slate-700/80 backdrop-blur-md px-3 py-2.5 rounded-xl shadow-md">
                <Wrench className="w-4 h-4 text-logo-cyan flex-shrink-0" />
                <span>6 Core Services</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-1">
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, 'services')}
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-logo-blue hover:bg-blue-600 rounded-xl shadow-xl hover:shadow-logo-blue/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4 ml-2 text-logo-cyan" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Contact Us</span>
              </a>
            </div>

          </div>

          {/* Right Column: Empty space so the Heavy Excavator shines 100% unobstructed */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        onClick={(e) => handleScrollTo(e, 'about')}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 text-white hover:text-logo-cyan transition-colors flex flex-col items-center space-y-1 group drop-shadow-md"
        aria-label="Scroll Down to About Us"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-200">Scroll Down</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-logo-cyan" />
      </a>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight, Mail } from 'lucide-react';
import { companyData } from '../data/companyData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'projects', 'clients', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
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

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Clients', href: '#clients', id: 'clients' },
    { name: 'Why Choose Us', href: '#why-us', id: 'why-us' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Light Top Bar with Logo Theme Colors */}
      <div className="bg-slate-100 text-slate-600 text-xs py-2 px-4 border-b border-slate-200 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-slate-700 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-logo-blue mr-2 animate-pulse" />
              ISO Compliant Infrastructure Standards
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">Head Office: {companyData.shortAddress}</span>
          </div>
          <div className="flex items-center space-x-6 font-medium">
            <a href={`tel:${companyData.primaryPhone}`} className="flex items-center hover:text-logo-blue transition">
              <Phone className="w-3.5 h-3.5 mr-1.5 text-logo-blue" />
              <span>{companyData.primaryPhone}</span>
            </a>
            <span className="text-slate-300">|</span>
            <a href={`mailto:${companyData.email}`} className="flex items-center hover:text-logo-blue transition">
              <Mail className="w-3.5 h-3.5 mr-1.5 text-logo-blue" />
              <span>{companyData.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header with Official Logo Image */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200 md:top-0'
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-200/80 md:top-8'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Official Image Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-3 group"
          >
            <img
              src="/logo.png"
              alt="SV Infra Developers Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 text-sm font-semibold rounded-md transition-all relative ${
                  activeSection === link.id
                    ? 'text-logo-blue font-bold bg-slate-100/80'
                    : 'text-slate-700 hover:text-logo-blue hover:bg-slate-50'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-logo-blue rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Get in Touch CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-logo-blue hover:bg-logo-graphite rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ChevronRight className="w-4 h-4 ml-1 text-logo-cyan" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold transition ${
                  activeSection === link.id
                    ? 'bg-slate-100 text-logo-blue border-l-4 border-logo-blue font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200 flex flex-col space-y-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3 text-sm font-bold uppercase tracking-wider text-white bg-logo-blue rounded-lg shadow-md"
              >
                Get in Touch
              </a>
              <div className="flex justify-around pt-2 text-xs text-slate-600 font-medium">
                <a href={`tel:${companyData.primaryPhone}`} className="flex items-center hover:text-logo-blue">
                  <Phone className="w-3.5 h-3.5 mr-1 text-logo-blue" /> {companyData.primaryPhone}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;

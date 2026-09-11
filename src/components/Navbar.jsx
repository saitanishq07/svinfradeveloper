import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight, Mail, ChevronDown } from 'lucide-react';
import { companyData } from '../data/companyData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceSubLinks = companyData.services.map((s) => ({
    name: s.title,
    path: s.path,
  }));

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Light Top Bar */}
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

      {/* Main Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200 md:top-0'
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-200/80 md:top-8'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="SV Infra Developers Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`px-3 py-2 text-sm font-semibold rounded-md transition-all inline-flex items-center ${
                        isActive('/services')
                          ? 'text-logo-blue font-bold bg-slate-100/80'
                          : 'text-slate-700 hover:text-logo-blue hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 ml-1 text-slate-500 group-hover:text-logo-blue transition-transform" />
                    </Link>

                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-2 mt-1 animate-fadeIn z-50">
                        <Link
                          to="/services"
                          className="block px-4 py-2 text-xs uppercase font-bold tracking-wider text-logo-blue hover:bg-slate-50 border-b border-slate-100"
                        >
                          All Services Overview →
                        </Link>
                        {serviceSubLinks.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-logo-blue transition font-medium"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-all relative ${
                    isActive(link.path)
                      ? 'text-logo-blue font-bold bg-slate-100/80'
                      : 'text-slate-700 hover:text-logo-blue hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-logo-blue rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Get in Touch CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-logo-blue hover:bg-logo-graphite rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ChevronRight className="w-4 h-4 ml-1 text-logo-cyan" />
            </Link>
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
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl max-h-[80vh] overflow-y-auto">
            <Link
              to="/"
              className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
                isActive('/') ? 'bg-slate-100 text-logo-blue border-l-4 border-logo-blue font-bold' : 'text-slate-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
                isActive('/about') ? 'bg-slate-100 text-logo-blue border-l-4 border-logo-blue font-bold' : 'text-slate-700'
              }`}
            >
              About Us
            </Link>

            {/* Mobile Services Links */}
            <div className="space-y-1 pl-2 border-l-2 border-slate-200">
              <Link
                to="/services"
                className="block px-3 py-2 text-sm font-bold uppercase tracking-wider text-logo-blue"
              >
                Services Overview
              </Link>
              {serviceSubLinks.map((sub) => (
                <Link
                  key={sub.path}
                  to={sub.path}
                  className="block px-3 py-2 text-sm text-slate-600 hover:text-logo-blue"
                >
                  {sub.name}
                </Link>
              ))}
            </div>

            <Link
              to="/projects"
              className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
                isActive('/projects') ? 'bg-slate-100 text-logo-blue border-l-4 border-logo-blue font-bold' : 'text-slate-700'
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
                isActive('/contact') ? 'bg-slate-100 text-logo-blue border-l-4 border-logo-blue font-bold' : 'text-slate-700'
              }`}
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-slate-200 flex flex-col space-y-3">
              <Link
                to="/contact"
                className="w-full text-center py-3 text-sm font-bold uppercase tracking-wider text-white bg-logo-blue rounded-lg shadow-md"
              >
                Get in Touch
              </Link>
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

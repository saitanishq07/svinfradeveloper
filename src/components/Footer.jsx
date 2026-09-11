import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-logo-graphite text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-3 rounded-xl inline-block shadow-md">
              <Link to="/">
                <img
                  src="/logo.png"
                  alt="SV Infra Developers Logo"
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed pt-2">
              Established in 2023 by Mr. K. Sai Kishore, SV Infra Developers is a rapidly growing infrastructure firm with an annual turnover of ₹1.5 Crores. We deliver technical precision across blasting, mass earthwork, road construction, and canal lining in Hyderabad & Telangana.
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Blasting Safety Record</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services Overview', path: '/services' },
                { name: 'Featured Projects', path: '/projects' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-logo-cyan transition flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 text-slate-600 group-hover:text-logo-cyan group-hover:translate-x-1 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Service Pages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Target Services
            </h4>
            <ul className="space-y-2 text-xs">
              {companyData.services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.path}
                    className="hover:text-logo-cyan transition flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 text-slate-600 group-hover:text-logo-cyan group-hover:translate-x-1 transition-all" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Official Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Official Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-logo-cyan flex-shrink-0 mt-0.5" />
                <span>{companyData.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-logo-cyan flex-shrink-0" />
                <div className="space-x-2">
                  {companyData.phones.map((p, i) => (
                    <a key={i} href={`tel:${p}`} className="hover:text-logo-cyan transition font-bold">
                      {p}{i === 0 ? ',' : ''}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-logo-cyan flex-shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-logo-cyan transition font-bold break-all">
                  {companyData.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {currentYear} SV Infra Developers. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4 text-slate-400 font-semibold tracking-wider uppercase text-[11px]">
            <span>Building a Stronger Tomorrow</span>
            <span>•</span>
            <span>KPHB, Hyderabad, Telangana</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

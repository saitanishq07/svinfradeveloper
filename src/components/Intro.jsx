import React from 'react';
import { ArrowRight, Building2, MapPin, User, CheckCircle, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

const Intro = () => {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <Building2 className="w-4 h-4 text-logo-blue" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-logo-blue">
              Corporate Overview
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-logo-graphite tracking-tight mb-4">
            Engineering Excellence. <span className="text-logo-blue">Built for Progress.</span>
          </h2>
          <div className="w-20 h-1 bg-logo-blue mx-auto rounded-full" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image & Highlight Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group bg-slate-100">
              <img
                src="/sai-kishore.jpg"
                alt="Mr. K. Sai Kishore - Founder & Managing Director, SV Infra Developers"
                className="w-full h-[500px] object-cover object-top group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-slate-200 text-slate-900 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-logo-blue flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-sm">
                    2023
                  </div>
                  <div>
                    <div className="text-xs uppercase font-extrabold text-logo-blue tracking-wider">Established Year</div>
                    <div className="text-base font-bold text-slate-900">Founded by {companyData.founder}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Floating Card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-200 items-center space-x-3 max-w-xs z-10">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Safety Standard</div>
                <div className="text-sm font-extrabold text-slate-900">100% Controlled Execution</div>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-slate-800 leading-relaxed font-medium">
                {companyData.aboutShort}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {companyData.aboutFull}
              </p>
            </div>

            {/* Key Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-slate-200">
              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-lg bg-slate-100 text-logo-blue">
                  <User className="w-5 h-5 text-logo-blue" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Leadership</div>
                  <div className="text-sm font-bold text-slate-900">{companyData.founder}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-lg bg-slate-100 text-logo-blue">
                  <MapPin className="w-5 h-5 text-logo-blue" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Headquarters</div>
                  <div className="text-sm font-bold text-slate-900">{companyData.shortAddress}</div>
                </div>
              </div>
            </div>

            {/* Feature Checkmarks */}
            <div className="space-y-2 text-sm text-slate-700 font-medium">
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Specialized Controlled, Open, and Chemical Blasting Technology</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Heavy Earth Excavation and Highway Infrastructure Capabilities</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Trusted by Major EPC Giants & Government Authorities</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <a
                href="#company-profile"
                onClick={(e) => handleScrollTo(e, 'company-profile')}
                className="inline-flex items-center px-6 py-3 text-sm font-bold uppercase tracking-wider text-white bg-logo-blue hover:bg-logo-graphite rounded-xl shadow-md transition-all group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-logo-cyan" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Intro;

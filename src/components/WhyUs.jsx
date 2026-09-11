import React from 'react';
import { Award, CheckCircle2, ShieldAlert, Clock, HelpCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

const iconMap = {
  Award,
  CheckCircle2,
  ShieldAlert,
  Clock,
};

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <HelpCircle className="w-4 h-4 text-logo-blue" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-logo-blue">
              The SV Infra Advantage
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-logo-graphite tracking-tight mb-4">
            Why Choose <span className="text-logo-blue">SV Infra Developers?</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Engineering excellence, zero-incident safety commitment, and proven execution capacity.
          </p>
          <div className="w-20 h-1 bg-logo-blue mx-auto rounded-full mt-4" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyData.whyChooseUs.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Award;

            return (
              <div
                key={idx}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-logo-blue/40 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-logo-blue flex items-center justify-center mb-6 shadow-sm group-hover:bg-logo-blue group-hover:text-white transition-colors">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-logo-graphite mb-3 group-hover:text-logo-blue transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center text-xs font-bold text-logo-blue uppercase tracking-wider">
                  <span>Pillar 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;

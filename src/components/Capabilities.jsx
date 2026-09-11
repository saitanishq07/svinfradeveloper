import React from 'react';
import { Layers, Check } from 'lucide-react';
import { companyData } from '../data/companyData';

const Capabilities = () => {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-200/80 border border-slate-300 mb-3">
            <Layers className="w-4 h-4 text-logo-blue" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-logo-blue">
              Technical Division Breakdown
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-logo-graphite mb-4">
            Controlled Blasting & <span className="text-logo-blue">Demolition Capabilities</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            High-volume rock breaking & civil construction capabilities backed by licensed blasting engineers and heavy machinery fleets in Hyderabad & Telangana.
          </p>
          <div className="w-20 h-1 bg-logo-blue mx-auto rounded-full mt-4" />
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {companyData.capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={cap.image}
                    alt={cap.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-logo-graphite mb-2 group-hover:text-logo-blue transition-colors">
                    {cap.category}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {cap.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {cap.items.map((item, i) => (
                      <div key={i} className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-logo-blue/10 text-logo-blue flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-logo-blue" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Capabilities;

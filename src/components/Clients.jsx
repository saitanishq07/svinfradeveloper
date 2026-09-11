import React from 'react';
import { Building, Award, CheckCircle } from 'lucide-react';
import { companyData } from '../data/companyData';
import ClientLogo from './ClientLogo';

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-200/80 border border-slate-300 mb-3">
            <Building className="w-4 h-4 text-logo-blue" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-logo-blue">
              Esteemed Partnerships
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-logo-graphite tracking-tight mb-4">
            Trusted by <span className="text-logo-blue">Industry Leaders</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Delivering rock blasting, earthmoving, road construction, and canal works for premier corporate conglomerates and state infrastructure bodies.
          </p>
          <div className="w-20 h-1 bg-logo-blue mx-auto rounded-full mt-4" />
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyData.clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Header Logo Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-14 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center min-w-[4rem] group-hover:border-logo-blue transition-colors">
                    <ClientLogo client={client} />
                  </div>
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-[11px] font-bold uppercase rounded-full">
                    {client.type}
                  </span>
                </div>

                {/* Name & Details */}
                <h3 className="text-xl font-bold text-logo-graphite mb-2 group-hover:text-logo-blue transition-colors">
                  {client.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {client.description}
                </p>
              </div>

              {/* Verified Partnership Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span className="flex items-center text-emerald-700">
                  <CheckCircle className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  Verified Contractor Partner
                </span>
                <span>{client.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Trust Statement */}
        <div className="mt-16 bg-white text-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-logo-blue/10 border border-logo-blue/20 text-logo-blue flex items-center justify-center flex-shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-logo-graphite">Uncompromising Operational Standards</h4>
              <p className="text-slate-600 text-sm max-w-xl">
                SV Infra Developers adheres to strict DGMS blasting safety protocols, timely execution milestones, and environmental vibration compliance across every client site.
              </p>
            </div>
          </div>
          
          <a
            href="#contact"
            className="px-6 py-3 bg-logo-blue text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-logo-graphite transition whitespace-nowrap shadow-md"
          >
            Partner With Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default Clients;

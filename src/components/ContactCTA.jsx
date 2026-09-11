import React from 'react';
import { Phone, ArrowRight, MessageSquare } from 'lucide-react';
import { companyData } from '../data/companyData';

const ContactCTA = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 bg-slate-100 text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 p-8 sm:p-12 lg:p-16 rounded-3xl shadow-lg relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="max-w-2xl text-left relative z-10 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-logo-blue text-xs font-bold uppercase">
              <MessageSquare className="w-3.5 h-3.5 mr-1" />
              Start Your Project Consultation
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-logo-graphite">
              Have an Infrastructure <span className="text-logo-blue">Project in Mind?</span>
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg">
              Let's discuss how SV Infra Developers can support your project with professional infrastructure, heavy excavation, and blasting services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto relative z-10">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-logo-blue hover:bg-logo-graphite rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 ml-2 text-logo-cyan" />
            </a>

            <a
              href={`tel:${companyData.primaryPhone}`}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 mr-2 text-logo-blue" />
              <span>Call Us: {companyData.primaryPhone}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

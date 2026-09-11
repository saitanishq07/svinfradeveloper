import React from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="relative h-48 sm:h-64 overflow-hidden bg-slate-100">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 text-slate-800 hover:bg-white hover:text-slate-950 transition-all focus:outline-none shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="inline-block px-3 py-1 bg-logo-blue text-white text-xs font-bold uppercase rounded-md mb-2">
              Service {service.number}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-logo-blue mb-2">
              Detailed Operational Overview
            </h4>
            <p className="text-slate-700 leading-relaxed text-base">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Technical Highlights */}
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mr-2" />
              Technical Execution Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.keyHighlights?.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Need technical specs for your project? Contact our engineering team.
            </div>
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => {
                  onClose();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-logo-blue hover:bg-logo-graphite rounded-lg shadow-md transition"
              >
                Inquire Now
                <ArrowRight className="w-4 h-4 ml-1.5 text-logo-cyan" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;

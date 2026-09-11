import React from 'react';
import { HardHat } from 'lucide-react';

const VisualBanner = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80"
          alt="Heavy Machinery Infrastructure Works"
          className="w-full h-full object-cover object-center filter brightness-90 opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex p-3 rounded-2xl bg-brand-blue/20 border border-brand-blue/40 mb-6 text-accent-yellow shadow-md">
          <HardHat className="w-8 h-8" />
        </div>
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Powering Infrastructure Through <span className="text-accent-yellow">Engineering & Execution</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
          Delivering precision rock blasting, high-volume excavation, and durable civil works across Telangana, Andhra Pradesh, and South India.
        </p>
      </div>
    </section>
  );
};

export default VisualBanner;

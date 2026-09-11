import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bomb, Flame, Zap, HardHat, Truck, Droplets, Wrench } from 'lucide-react';
import { companyData } from '../data/companyData';

const iconMap = {
  Bomb,
  Flame,
  Zap,
  HardHat,
  Truck,
  Droplets,
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <Wrench className="w-4 h-4 text-logo-blue" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-logo-blue">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-logo-graphite tracking-tight mb-4">
            Rock Blasting & <span className="text-logo-blue">Construction Services</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Delivering technical precision across control blasting, open blasting, chemical rock breaking, demolition earthworks, road construction, and canal engineering in Hyderabad & Telangana.
          </p>
          <div className="w-20 h-1 bg-logo-blue mx-auto rounded-full mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyData.services.map((service) => {
            const IconComponent = iconMap[service.icon] || Wrench;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col group"
              >
                {/* Card Top Image & Badge */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  
                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-logo-blue font-mono font-bold text-sm shadow-md">
                    Service {service.number}
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-logo-blue text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5 text-logo-cyan" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-logo-graphite mb-3 group-hover:text-logo-blue transition-colors">
                      <Link to={service.path}>{service.title}</Link>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Action Link to Dedicated Page */}
                  <Link
                    to={service.path}
                    className="inline-flex items-center text-xs font-extrabold uppercase tracking-wider text-logo-blue hover:text-logo-graphite transition-colors pt-4 border-t border-slate-100"
                  >
                    <span>View Dedicated Page</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform text-logo-cyan" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { companyData } from '../data/companyData';

const MapSection = () => {
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Saikiran Colony, KPHB, Hyderabad, Telangana'
  )}`;

  return (
    <section className="relative bg-slate-100 overflow-hidden py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-logo-blue">
            Location Map & Directions
          </span>
          <h3 className="text-2xl font-bold text-logo-graphite mt-1">
            Visit SV Infra Headquarters
          </h3>
        </div>

        <a
          href={mapSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white hover:bg-slate-50 border border-slate-300 text-logo-blue rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition"
        >
          <Navigation className="w-4 h-4 text-logo-blue" />
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5 ml-1" />
        </a>
      </div>

      <div className="relative h-96 w-full bg-slate-200 rounded-2xl overflow-hidden shadow-lg max-w-7xl mx-auto border border-slate-200">
        <iframe
          title="SV Infra Developers Headquarters Map Location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?q=Saikiran%20Colony%2C%20KPHB%2C%20Hyderabad%2C%20Telangana&t=&z=14&ie=UTF8&iwloc=&output=embed"
        />

        {/* Floating Address Overlay Card */}
        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-slate-200 text-slate-900 shadow-xl max-w-sm hidden sm:block">
          <div className="flex items-start space-x-3">
            <div className="p-2.5 rounded-xl bg-logo-blue text-white flex-shrink-0 mt-0.5 shadow-sm">
              <MapPin className="w-5 h-5 text-logo-cyan" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-logo-blue uppercase">Corporate Office</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{companyData.name}</div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {companyData.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

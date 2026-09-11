import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import Services from '../components/Services';
import Capabilities from '../components/Capabilities';
import ContactCTA from '../components/ContactCTA';
import { companyData } from '../data/companyData';
import { ShieldCheck, Wrench, FileCheck, Layers } from 'lucide-react';

const ServicesHubPage = () => {
  const servicesHubSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Rock Blasting & Civil Infrastructure Services',
    'url': 'https://svinfradeveloper.com/services',
    'description': 'Comprehensive directory of rock blasting, chemical rock breaking, earthwork excavation, road construction, and canal lining services offered by SV Infra Developers in Hyderabad & Telangana.',
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': companyData.services.map((s, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'url': `https://svinfradeveloper.com${s.path}`,
        'name': s.title
      }))
    }
  };

  return (
    <>
      <SEOHead
        title="Rock Blasting & Civil Infrastructure Services | SV Infra Developers"
        description="Explore rock blasting & civil infrastructure services by SV Infra Developers in Hyderabad. Control blasting, open blasting, chemical breaking, earthwork & road works."
        canonicalUrl="https://svinfradeveloper.com/services"
        schema={servicesHubSchema}
      />
      <Breadcrumb items={[{ name: 'Services Overview', path: '/services' }]} />

      <main className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Hero Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 mb-4">
              <Layers className="w-4 h-4 text-logo-blue" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-logo-blue">
                Engineering Directory
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-logo-graphite tracking-tight mb-4">
              Specialized Rock Blasting & <span className="text-logo-blue">Civil Engineering Services</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              SV Infra Developers offers specialized engineering capabilities across precision control blasting, high-volume open quarry blasting, silent chemical rock breaking, structural rock breaking demolition, mass earthwork excavation, road paving, and RCC canal lining.
            </p>
          </div>

          <Services />
          <Capabilities />

          {/* Safety & Explosive Regulatory Compliance */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>DGMS Safety Compliance</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-logo-graphite">
                  Regulatory Compliance & Blasting Logistics
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  All blasting operations executed by SV Infra Developers strictly adhere to Director General of Mines Safety (DGMS) guidelines and Petroleum and Explosives Safety Organization (PESO) protocols. We manage perimeter securing, explosive transportation logistics, vibration monitoring, and licensed shot-firing supervision.
                </p>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center space-x-3">
                  <FileCheck className="w-5 h-5 text-logo-blue flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">Licensed Explosive Permits</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center space-x-3">
                  <Wrench className="w-5 h-5 text-logo-blue flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">Calibrated Seismograph Monitors</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">Zero Incident Safety Record</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <ContactCTA />
    </>
  );
};

export default ServicesHubPage;

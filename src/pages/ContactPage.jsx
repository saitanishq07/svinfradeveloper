import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import Contact from '../components/Contact';
import MapSection from '../components/MapSection';
import { companyData } from '../data/companyData';
import { Mail } from 'lucide-react';

const ContactPage = () => {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact SV Infra Developers',
    'url': 'https://svinfradeveloper.com/contact',
    'description': 'Contact details, head office location, phone numbers, and project enquiry form for SV Infra Developers in KPHB, Hyderabad, Telangana.',
    'mainEntity': {
      '@type': 'GeneralContractor',
      'name': companyData.name,
      'telephone': companyData.primaryPhone,
      'email': companyData.email,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '2-1-21/23, Saikiran Colony, KPHB',
        'addressLocality': 'Hyderabad',
        'addressRegion': 'Telangana',
        'postalCode': '500072',
        'addressCountry': 'IN'
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Contact SV Infra Developers | Hyderabad Office & Enquiries"
        description="Get in touch with SV Infra Developers in KPHB, Hyderabad for rock blasting, earthwork & civil construction inquiries. Call +91 9603345669."
        canonicalUrl="https://svinfradeveloper.com/contact"
        schema={contactSchema}
      />
      <Breadcrumb items={[{ name: 'Contact Us', path: '/contact' }]} />

      <main className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Hero Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 mb-4">
              <Mail className="w-4 h-4 text-logo-blue" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-logo-blue">
                Headquarters Contact
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-logo-graphite tracking-tight mb-4">
              Contact <span className="text-logo-blue">SV Infra Developers</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Have a project enquiry or tender requirement for rock blasting, chemical rock breaking, excavation, road works, or canal construction? Reach out to our engineering office in KPHB, Hyderabad.
            </p>
          </div>

          <Contact />
          <MapSection />

        </div>
      </main>
    </>
  );
};

export default ContactPage;

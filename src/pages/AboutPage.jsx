import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import Stats from '../components/Stats';
import WhyUs from '../components/WhyUs';
import ContactCTA from '../components/ContactCTA';
import { companyData } from '../data/companyData';
import { Award, ShieldCheck, CheckCircle2, TrendingUp, Calendar, Briefcase, Building2 } from 'lucide-react';

const AboutPage = () => {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'About SV Infra Developers',
    'url': 'https://svinfradeveloper.com/about',
    'description': companyData.aboutShort,
    'mainEntity': {
      '@type': 'Organization',
      'name': companyData.name,
      'founder': {
        '@type': 'Person',
        'name': companyData.founder
      },
      'foundingDate': String(companyData.establishedYear),
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
        title="About Us | SV Infra Developers - Rock Blasting Contractors in Hyderabad"
        description="Learn about SV Infra Developers, established in 2023 by Mr. K. Sai Kishore. Rapidly growing infrastructure firm with ₹1.5Cr+ turnover & 100% safety record."
        canonicalUrl="https://svinfradeveloper.com/about"
        schema={aboutSchema}
      />
      <Breadcrumb items={[{ name: 'About Us', path: '/about' }]} />

      <main className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Hero Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 mb-4">
                <Building2 className="w-4 h-4 text-logo-blue" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-logo-blue">
                  Corporate Overview
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-logo-graphite tracking-tight mb-6">
                About <span className="text-logo-blue">SV Infra Developers</span>
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {companyData.aboutShort}
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                {companyData.aboutFull}
              </p>
            </div>
          </div>

          {/* Key Leadership & Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-logo-graphite mb-4">
                Corporate Leadership
              </h2>
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-logo-blue text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  SK
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{companyData.founder}</h3>
                  <p className="text-xs font-bold text-logo-blue uppercase tracking-wider">Founder & Managing Director</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Under the leadership of Mr. K. Sai Kishore, SV Infra Developers has quickly gained a reputation for precision engineering, 100% blasting safety standards, and reliable execution across major infrastructure corridors in Telangana and Andhra Pradesh.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-logo-graphite mb-4">
                Our Mission & Vision
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-logo-blue mb-1">Our Mission</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{companyData.mission}</p>
                </div>
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-logo-blue mb-1">Our Vision</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{companyData.vision}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Company Statistics */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-logo-graphite text-center mb-8">
              Verified Growth & Performance Milestones
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Calendar className="w-6 h-6 text-logo-blue mx-auto mb-2" />
                <div className="text-2xl font-extrabold text-slate-900">2023</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Established Year</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <TrendingUp className="w-6 h-6 text-logo-blue mx-auto mb-2" />
                <div className="text-2xl font-extrabold text-slate-900">₹1.5 Cr</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Annual Turnover</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Briefcase className="w-6 h-6 text-logo-blue mx-auto mb-2" />
                <div className="text-2xl font-extrabold text-slate-900">6+</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Core Disciplines</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                <div className="text-2xl font-extrabold text-slate-900">100%</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Safety Record</div>
              </div>
            </div>
          </div>

          <WhyUs />
        </div>
      </main>

      <ContactCTA />
    </>
  );
};

export default AboutPage;

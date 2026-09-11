import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Capabilities from '../components/Capabilities';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import WhyUs from '../components/WhyUs';
import CompanyProfile from '../components/CompanyProfile';
import VisualBanner from '../components/VisualBanner';
import ContactCTA from '../components/ContactCTA';
import Contact from '../components/Contact';
import MapSection from '../components/MapSection';
import { companyData } from '../data/companyData';

const HomePage = () => {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    'name': companyData.name,
    'alternateName': companyData.shortName,
    'image': 'https://svinfradeveloper.com/logo.png',
    '@id': 'https://svinfradeveloper.com/#organization',
    'url': 'https://svinfradeveloper.com/',
    'telephone': companyData.primaryPhone,
    'email': companyData.email,
    'priceRange': '₹₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '2-1-21/23, Saikiran Colony, KPHB',
      'addressLocality': 'Hyderabad',
      'addressRegion': 'Telangana',
      'postalCode': '500072',
      'addressCountry': 'IN'
    },
    'founder': {
      '@type': 'Person',
      'name': companyData.founder
    },
    'foundingDate': String(companyData.establishedYear),
    'description': companyData.aboutShort
  };

  return (
    <>
      <SEOHead
        title="SV Infra Developers | Rock Blasting & Infrastructure Services in Hyderabad"
        description="SV Infra Developers is a leading infrastructure firm in Hyderabad specializing in control blasting, open blasting, chemical rock breaking & earthworks in Telangana."
        canonicalUrl="https://svinfradeveloper.com/"
        schema={homeSchema}
      />
      <Hero />
      <Intro />
      <Stats />
      <Services />
      <Capabilities />
      <Projects />
      <Clients />
      <WhyUs />
      <CompanyProfile />
      <VisualBanner />
      <ContactCTA />
      <Contact />
      <MapSection />
    </>
  );
};

export default HomePage;

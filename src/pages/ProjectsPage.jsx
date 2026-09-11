import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import ContactCTA from '../components/ContactCTA';
import { companyData } from '../data/companyData';
import { FolderGit2 } from 'lucide-react';

const ProjectsPage = () => {
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Infrastructure & Blasting Projects Portfolio',
    'url': 'https://svinfradeveloper.com/projects',
    'description': 'Showcase of mass earthwork, control blasting, chemical breaking, and civil road/canal infrastructure projects executed by SV Infra Developers across Telangana and Andhra Pradesh.',
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': companyData.projects.map((p, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': p.title,
        'description': p.description
      }))
    }
  };

  return (
    <>
      <SEOHead
        title="Infrastructure & Blasting Projects | SV Infra Developers"
        description="Browse infrastructure projects executed by SV Infra Developers for MEIL, NCC Limited, Aparna Enterprises, Kalpataru, and Telangana/AP Governments."
        canonicalUrl="https://svinfradeveloper.com/projects"
        schema={projectsSchema}
      />
      <Breadcrumb items={[{ name: 'Featured Projects', path: '/projects' }]} />

      <main className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Hero Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 mb-4">
              <FolderGit2 className="w-4 h-4 text-logo-blue" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-logo-blue">
                Track Record & Execution
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-logo-graphite tracking-tight mb-4">
              Featured Infrastructure <span className="text-logo-blue">Projects Portfolio</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Explore our project track record delivering rock blasting, mass earthwork, hill cutting, and irrigation canal lining for India's leading EPC primes including MEIL, NCC Limited, Aparna Enterprises, Kalpataru Limited, and Government Authorities.
            </p>
          </div>

          <Projects />
          <Clients />

        </div>
      </main>

      <ContactCTA />
    </>
  );
};

export default ProjectsPage;

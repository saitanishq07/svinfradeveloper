import React, { useState } from 'react';
import { Briefcase, MapPin, Building2 } from 'lucide-react';
import { companyData } from '../data/companyData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Blasting', 'Earthwork Excavations', 'Road Works', 'Canal Works'];

  const filteredProjects = activeFilter === 'All'
    ? companyData.projects
    : companyData.projects.filter(p => {
        if (activeFilter === 'Blasting') return p.service.includes('Blasting');
        return p.service === activeFilter;
      });

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <Briefcase className="w-4 h-4 text-logo-blue" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-logo-blue">
              Execution Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-logo-graphite tracking-tight mb-4">
            Featured <span className="text-logo-blue">Infrastructure Projects</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Delivered in collaboration with premier Indian infrastructure giants and state governments.
          </p>
          <div className="w-20 h-1 bg-logo-blue mx-auto rounded-full mt-4" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all ${
                activeFilter === filter
                  ? 'bg-logo-blue text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col group"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Service Tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-200 text-logo-blue text-xs font-bold uppercase shadow-sm">
                  {project.service}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-logo-graphite mb-2 group-hover:text-logo-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Client & Location Metadata */}
                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-semibold text-slate-600">
                  <div className="flex items-center text-slate-900">
                    <Building2 className="w-3.5 h-3.5 mr-2 text-logo-blue" />
                    <span className="font-bold">{project.client}</span>
                  </div>
                  <div className="flex items-center text-slate-500">
                    <MapPin className="w-3.5 h-3.5 mr-2 text-logo-blue" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future expansion note */}
        <div className="mt-12 text-center text-xs text-slate-500 italic bg-slate-50 p-4 rounded-xl border border-slate-200">
          * Project portfolio reflects verified work domains executed for client organizations listed above.
        </div>

      </div>
    </section>
  );
};

export default Projects;

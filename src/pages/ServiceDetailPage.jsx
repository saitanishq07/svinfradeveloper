import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import ContactCTA from '../components/ContactCTA';
import { companyData } from '../data/companyData';
import { CheckCircle2, ShieldCheck, HelpCircle, ArrowRight, Phone, Mail, Building2 } from 'lucide-react';

const ServiceDetailPage = ({ serviceIdOverride }) => {
  const { serviceId } = useParams();
  const activeId = serviceIdOverride || serviceId;

  // Match service by id or path alias
  const service = companyData.services.find(
    (s) => s.id === activeId || s.path === `/services/${activeId}`
  );

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related projects matching service
  const relatedProjects = companyData.projects.filter(
    (p) => p.service.toLowerCase().includes(service.title.toLowerCase()) || service.title.toLowerCase().includes(p.service.toLowerCase())
  );

  // Dynamic Service Schema.org JSON-LD
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.title,
    'provider': {
      '@type': 'GeneralContractor',
      'name': companyData.name,
      'url': 'https://svinfradeveloper.com/'
    },
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': 'Telangana & Andhra Pradesh, India'
    },
    'description': service.fullDescription,
    'url': service.canonical
  };

  return (
    <>
      <SEOHead
        title={service.seoTitle}
        description={service.seoDescription}
        canonicalUrl={service.canonical}
        ogImage={`https://svinfradeveloper.com${service.image}`}
        schema={serviceSchema}
      />
      <Breadcrumb
        items={[
          { name: 'Services', path: '/services' },
          { name: service.title, path: service.path }
        ]}
      />

      <main className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Hero Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-4 w-fit">
                  <span className="text-xs font-mono font-bold text-logo-blue">
                    SERVICE {service.number}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-logo-graphite tracking-tight mb-4">
                  {service.title}
                </h1>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-logo-blue text-white font-bold text-sm hover:bg-logo-graphite transition shadow-sm"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <a
                    href={`tel:${companyData.primaryPhone}`}
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition border border-slate-200"
                  >
                    <Phone className="w-4 h-4 mr-2 text-logo-blue" />
                    <span>{companyData.primaryPhone}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-900">
                <img
                  src={service.image}
                  alt={`${service.title} in Hyderabad Telangana`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Overview */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-logo-graphite mb-4">
                  Service Overview & Engineering Execution
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {service.fullDescription}
                </p>

                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Key Operational Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-logo-blue flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-800">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              {service.specifications && service.specifications.length > 0 && (
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-logo-graphite mb-6">
                    Technical Specifications & Standards
                  </h2>
                  <div className="divide-y divide-slate-100">
                    {service.specifications.map((spec, idx) => (
                      <div key={idx} className="py-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm gap-1">
                        <span className="font-semibold text-slate-700">{spec.label}</span>
                        <span className="font-bold text-logo-blue bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-logo-graphite mb-6 flex items-center">
                    <HelpCircle className="w-6 h-6 text-logo-blue mr-2" />
                    <span>Frequently Asked Questions</span>
                  </h2>
                  <div className="space-y-6">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                        <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Quick Inquiry Card */}
              <div className="bg-logo-graphite text-white rounded-2xl p-6 shadow-md space-y-4">
                <h3 className="text-xl font-bold text-white border-b border-slate-700 pb-3">
                  Need {service.title}?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Speak directly with our engineering team for technical site assessments and competitive project quotes in Hyderabad & Telangana.
                </p>
                <div className="space-y-3 pt-2">
                  <a
                    href={`tel:${companyData.primaryPhone}`}
                    className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-logo-blue hover:bg-blue-600 text-white font-bold text-sm transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {companyData.primaryPhone}</span>
                  </a>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition border border-slate-700"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>

              {/* Other Services Navigation */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-base font-bold text-logo-graphite border-b border-slate-100 pb-3 mb-4">
                  Explore Other Services
                </h3>
                <div className="space-y-2 text-sm">
                  {companyData.services
                    .filter((s) => s.id !== service.id)
                    .map((s) => (
                      <Link
                        key={s.id}
                        to={s.path}
                        className="block p-3 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-200 group"
                      >
                        <div className="font-semibold text-slate-800 group-hover:text-logo-blue transition-colors">
                          {s.title}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {s.shortDescription}
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

            </div>

          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-12">
              <h2 className="text-2xl font-bold text-logo-graphite mb-6">
                Featured {service.title} Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map((p) => (
                  <div key={p.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-logo-blue bg-white px-3 py-1 rounded-md border border-slate-200 mb-3 inline-block">
                        {p.client}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{p.description}</p>
                    </div>
                    <div className="text-xs font-semibold text-slate-500 pt-3 border-t border-slate-200">
                      Location: {p.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <ContactCTA />
    </>
  );
};

export default ServiceDetailPage;

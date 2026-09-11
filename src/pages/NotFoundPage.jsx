import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { Home, ArrowRight, AlertTriangle } from 'lucide-react';
import { companyData } from '../data/companyData';

const NotFoundPage = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | SV Infra Developers"
        description="The requested page could not be found. Return to SV Infra Developers homepage or explore our rock blasting and infrastructure services."
        canonicalUrl="https://svinfradeveloper.com/404"
      />
      <main className="bg-slate-50 py-24 min-h-[70vh] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="w-20 h-20 rounded-3xl bg-amber-100 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <AlertTriangle className="w-10 h-10" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-logo-graphite tracking-tight mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Explore our core services or return to the homepage.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-logo-blue text-white font-bold text-sm hover:bg-logo-graphite transition shadow-sm"
            >
              <Home className="w-4 h-4 mr-2" />
              <span>Back to Homepage</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-200 text-slate-800 font-bold text-sm hover:bg-slate-300 transition"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm max-w-2xl mx-auto text-left">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Popular Service Pages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {companyData.services.map((service) => (
                <Link
                  key={service.id}
                  to={service.path}
                  className="p-2.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-logo-blue font-medium transition"
                >
                  → {service.title}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default NotFoundPage;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items = [] }) => {
  const fullItems = [{ name: 'Home', url: 'https://svinfradeveloper.com/' }, ...items];

  useEffect(() => {
    // Inject BreadcrumbList JSON-LD Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': fullItems.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': item.url
      }))
    };

    let scriptTag = document.getElementById('breadcrumb-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'breadcrumb-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(breadcrumbSchema);

    return () => {
      if (scriptTag) scriptTag.remove();
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-100/80 border-b border-slate-200/60 py-2.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs sm:text-sm text-slate-600 overflow-x-auto">
        <Link to="/" className="flex items-center hover:text-logo-blue transition-colors font-medium">
          <Home className="w-3.5 h-3.5 mr-1 text-logo-blue" />
          <span>Home</span>
        </Link>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              {isLast ? (
                <span className="font-semibold text-logo-blue truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path || '#'} className="hover:text-logo-blue transition-colors font-medium whitespace-nowrap">
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumb;

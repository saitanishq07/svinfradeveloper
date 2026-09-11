import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesHubPage from './pages/ServicesHubPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-accent-yellow selection:text-navy-950 flex flex-col justify-between">
        <Navbar />
        <div className="flex-grow pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesHubPage />} />
            
            {/* Dedicated Service Routes */}
            <Route path="/services/control-blasting" element={<ServiceDetailPage serviceIdOverride="control-blasting" />} />
            <Route path="/services/open-blasting" element={<ServiceDetailPage serviceIdOverride="open-blasting" />} />
            <Route path="/services/chemical-blasting" element={<ServiceDetailPage serviceIdOverride="chemical-blasting" />} />
            <Route path="/services/rock-breaking-demolition" element={<ServiceDetailPage serviceIdOverride="rock-breaking-demolition" />} />
            <Route path="/services/earthwork-excavation" element={<ServiceDetailPage serviceIdOverride="earthwork-excavation" />} />
            <Route path="/services/infrastructure-construction" element={<ServiceDetailPage serviceIdOverride="infrastructure-construction" />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />

            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

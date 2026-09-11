import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Stats from './components/Stats';
import Services from './components/Services';
import Capabilities from './components/Capabilities';
import Projects from './components/Projects';
import Clients from './components/Clients';
import WhyUs from './components/WhyUs';
import CompanyProfile from './components/CompanyProfile';
import VisualBanner from './components/VisualBanner';
import ContactCTA from './components/ContactCTA';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-accent-yellow selection:text-navy-950">
      <Navbar />
      <main>
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
      </main>
      <Footer />
    </div>
  );
}

export default App;

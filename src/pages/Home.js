import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InnovationSection from './components/InnovationSection';
import EngineeringSection from './components/EngineeringSection';
import ModernizeSection from './components/ModernizeSection';
import ManageSection from './components/ManageSection';
import MissionSection from './components/MissionSection';
import IndustryExpertise from './components/IndustryExpertise';
import ServicesSection from './components/ServicesSection';
import PartnerEcosystem from './components/PartnerEcosystem';
import CallToAction from './components/CallToAction';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Imagine from './components/Imagine';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <InnovationSection />
      <Imagine />
      <EngineeringSection />
      <ModernizeSection />
      <ManageSection />
      <MissionSection />
      <IndustryExpertise />
      <ServicesSection />
      <PartnerEcosystem />
      <CallToAction />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
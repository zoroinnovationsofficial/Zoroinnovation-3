import React from 'react';
import Header from './components/homePage/Header';
import HeroSection from './components/homePage/HeroSection';
import InnovationSection from './components/homePage/InnovationSection';
import EngineeringSection from './components/homePage/EngineeringSection';
import ModernizeSection from './components/homePage/ModernizeSection';
import ManageSection from './components/homePage/ManageSection';
import MissionSection from './components/homePage/MissionSection';
import IndustryExpertise from './components/homePage/IndustryExpertise';
import ServicesSection from './components/homePage/ServicesSection';
import PartnerEcosystem from './components/homePage/PartnerEcosystem';
import CallToAction from './components/homePage/CallToAction';
import ContactSection from './components/homePage/ContactSection';
import Footer from './components/Footer';
import Imagine from './components/homePage/Imagine';

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

export default homePage;

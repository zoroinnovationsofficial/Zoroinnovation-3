import React from "react";
import HeroSection from "../components/homePage/HeroSection.jsx";
import InnovationSection from "../components/homePage/InnovationSection.jsx";
import EngineeringSection from "../components/homePage/EngineeringSection.jsx";
import ModernizeSection from "../components/homePage/ModernizeSection.jsx";
import ManageSection from "../components/homePage/ManageSection.jsx";
import MissionSection from "../components/homePage/MissionSection.jsx";
import IndustryExpertise from "../components/homePage/IndustryExpertise.jsx";
import ServicesSection from "../components/homePage/ServicesSection.jsx";
import PartnerEcosystem from "../components/homePage/PartnerEcosystem.jsx";
import CallToAction from "../components/homePage/CallToAction.jsx";
import ContactSection from "../components/homePage/ContactSection.jsx";
import Imagine from "../components/homePage/Imagine.jsx";

function Home() {
  return (
    <div className="font-sans">
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
    </div>
  );
}

export default Home;

import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedProjects from '../components/FeaturedProjects';
import CaseStudySection from '../components/CaseStudySection';
import MetricsSection from '../components/MetricsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

function Projects() {
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <FeaturedProjects />
      <CaseStudySection />
      <MetricsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default Projects;

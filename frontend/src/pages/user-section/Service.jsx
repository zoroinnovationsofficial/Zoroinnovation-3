import "./Service.css";
import WebDevelopmentExcellence from "../../components/user-section/servicePage/WebDevelopmentExcellence.jsx";
import PricingPackages from "../../components/user-section/servicePage/PricingPackages.jsx";
import ServiceProcess from "../../components/user-section/servicePage/ServiceProcess.jsx";
import AiApplications from "../../components/user-section/servicePage/AiApplications.jsx";
import TrackRecord from "../../components/user-section/servicePage/TrackRecord.jsx";
import SuccessStories from "../../components/user-section/servicePage/SuccessStories.jsx";
import ServiceQuoteForm from "../../components/user-section/servicePage/ServiceQuoteForm.jsx";
import ResourcesDocs from "../../components/user-section/servicePage/ResourcesDocs.jsx";
import CTASection from "../../components/user-section/servicePage/CTA.jsx";
import { useState } from 'react';
import ServiceTile from '../../components/user-section/servicePage/ServiceTile';
import SideMenu from '../../components/user-section/servicePage/SideMenu';

const servicesData = [
  {
    id: 1,
    icon: "/images/Background.svg",
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies and frameworks for optimal performance, ensuring a seamless user experience across all devices."
  },
  {
    id: 2,
    icon: "/images/Background-1.svg",
    title: "Custom Software",
    description: "Tailored software solutions designed to meet your specific business requirements and streamline operations, increasing efficiency and reducing manual overhead."
  },
  {
    id: 3,
    icon: "/images/Background-2.svg",
    title: "SaaS Applications",
    description: "Scalable Software-as-a-Service platforms with multi-tenant architecture and seamless cloud deployment, ready to grow with your user base."
  },
  {
    id: 4,
    icon: "/images/Background-3.svg",
    title: "AI Applications",
    description: "Intelligent applications powered by machine learning and artificial intelligence to automate complex tasks, provide predictive insights, and optimize business processes."
  },
  {
    id: 5,
    icon: "/images/Background-4.svg",
    title: "Managed IT Services",
    description: "Comprehensive IT infrastructure management, monitoring, and support services for seamless operations, allowing you to focus on your core business."
  },
  {
    id: 6,
    icon: "/images/Background-5.svg",
    title: "IT Consultancy",
    description: "Strategic technology consulting to align IT initiatives with business objectives and drive digital transformation, ensuring your technology investments deliver maximum value."
  }
];

function ServicePage() {
  return (
   // State for controlling the side menu's visibility and content
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Function to handle clicking a "Learn More" button on a tile
  const handleLearnMoreClick = (service) => {
    setSelectedService(service);
    setIsMenuOpen(true);
  };

  // Function to close the side menu
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header/Navbar */}
      <header className="w-full bg-white shadow px-4 md:px-8 py-4 flex sticky top-0 z-50 items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/images/ZORO.png"
            alt="Zoro Innovations Logo"
            className="w-24 h-9 "
          />
        </div>
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-orange-500">Home</a>
          <a href="#" className="text-orange-500 font-bold">Services</a>
          <a href="#" className="hover:text-orange-500">About</a>
          <a href="#" className="hover:text-orange-500">Projects</a>
          <a href="#" className="hover:text-orange-500">Blog</a>
          <a href="#" className="hover:text-orange-500">Careers</a>
          <a href="#" className="hover:text-orange-500">Verify ID</a>
          <a href="#" className="hover:text-orange-500">Contact</a>
        </nav>
        <button className="md:hidden flex items-center px-2 py-1 border rounded text-gray-700 border-gray-300" aria-label="Open Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-600 to-orange-500 text-white py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-5">Our Services & Solutions</h1>
        <p className="max-w-2xl mx-auto mb-10 font-light text-xl">Comprehensive technology services designed to transform your business and drive innovation across all aspects of your digital journey.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white hover:bg-gray-100 text-orange-500 px-6 py-2 rounded font-semibold">
            <a href="/career">
              Get Started
            </a>
          </button>
          <button className=" hover:bg-blue-600 text-white px-6 py-2 rounded font-semibold border border-white">
            <a href="/contact">
              Contact Us
            </a>
          </button>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 px-10 sm:px-4 max-w-[1280px] mx-auto">
        <h2 className="text-4xl lg:text-4xl font-bold text-center mb-0 mt-0 leading-relaxed">Our Core Services</h2>
        <h2 className="text-2xl lg:text-2xl font-normal text-center mb-10 mt-6 leading-relaxed">Explore our comprehensive range of technology solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {servicesData.map((service) => (
            <ServiceTile
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onLearnMoreClick={() => handleLearnMoreClick(service)}
            />
          ))}
        </div>
      </section>

      {/* Other Components */}
      <WebDevelopmentExcellence />
      <PricingPackages />
      <ServiceProcess />
      <AiApplications />
      <TrackRecord />
      <SuccessStories />
      <ServiceQuoteForm />
      <ResourcesDocs />
      <CTASection />
      <Footer />
      
      {/* Side Menu Component */}
      <SideMenu 
        isOpen={isMenuOpen} 
        onClose={handleCloseMenu}
        title={selectedService?.title}
      >
        {/* Pass content as children */}
        <p className="text-gray-600 px-4">{selectedService?.description}</p>
      </SideMenu>
    </div>
  );
}
export default ServicePage;

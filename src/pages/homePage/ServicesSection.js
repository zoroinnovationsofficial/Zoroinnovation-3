
import React from 'react';

function ServicesSection() {
  return (
    <section className="bg-gray-100 py-20 animate-bg-pulse-gray">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 animate-fade-in-up hover:animate-title-hover">
        Our Services
      </h2>
      <p className="text-center text-xl font-normal text-gray-500 mb-12 animate-fade-in-up animation-delay-200">
        Comprehensive technology solutions for your business
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-[1280px] mx-auto">
        {/* Web Development */}
        <div className="bg-white rounded-3xl p-10 shadow-lg w-full transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img 
            src="/images/Overlay-3.svg" 
            alt="Web Development" 
            className="mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-bold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            Web Development
          </h3>
          <p className="text-[16px] font-normal text-[#4B5563]">
            Custom web applications built with cutting-edge technologies.
          </p>
          <button className="mt-4 bg-white hover:text-orange-700 text-orange-500 font-bold py-2 px-4">
            Learn More...
          </button>
        </div>

        {/* Software */}
        <div className="bg-white rounded-3xl p-10 shadow-lg w-full transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img 
            src="/images/Overlay-4.svg" 
            alt="Software" 
            className="mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-bold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            Software
          </h3>
          <p className="text-[16px] font-normal text-[#4B5563]">
            Tailored software designed to meet your specific requirements and workflows.
          </p>
          <button className="mt-4 bg-white hover:text-orange-700 text-orange-500 font-bold py-2 px-4">
            Learn More...
          </button>
        </div>

        {/* SaaS Applications */}
        <div className="bg-white rounded-3xl p-10 shadow-lg w-full transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img 
            src="/images/Overlay-5.svg" 
            alt="SaaS Applications" 
            className="mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-bold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            SaaS Applications
          </h3>
          <p className="text-[16px] font-normal text-[#4B5563]">
            Scalable SaaS solutions for storage and cloud deployment.
          </p>
          <button className="mt-4 bg-white hover:text-orange-700 text-orange-500 font-bold py-2 px-4">
            Learn More...
          </button>
        </div>

        {/* AI Applications */}
        <div className="bg-white rounded-3xl p-10 shadow-lg w-full transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img 
            src="/images/Overlay-6.svg" 
            alt="AI Applications" 
            className="mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-bold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            AI Applications
          </h3>
          <p className="text-[16px] font-normal text-[#4B5563]">
            Intelligent applications powered by machine learning and artificial intelligence.
          </p>
          <button className="mt-4 bg-white hover:text-orange-700 text-orange-500 font-bold py-2 px-4">
            Learn More...
          </button>
        </div>

        {/* Managed IT Services */}
        <div className="bg-white rounded-3xl p-10 shadow-lg w-full transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img 
            src="/images/Overlay-7.svg" 
            alt="Managed IT Services" 
            className="mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-bold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            Managed IT Services
          </h3>
          <p className="text-[16px] font-normal text-[#4B5563]">
            Comprehensive IT infrastructure management, monitoring, and support.
          </p>
          <button className="mt-4 bg-white hover:text-orange-700 text-orange-500 font-bold py-2 px-4">
            Learn More...
          </button>
        </div>

        {/* IT Consultancy */}
        <div className="bg-white rounded-3xl p-10 shadow-lg w-full transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img 
            src="/images/Overlay-8.svg" 
            alt="IT Consultancy" 
            className="mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-bold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            IT Consultancy
          </h3>
          <p className="text-[16px] font-normal text-[#4B5563]">
            Strategic technology consulting to align business objectives and IT strategy.
          </p>
          <button className="mt-4 bg-white hover:text-orange-700 text-orange-500 font-bold py-2 px-4">
            Learn More...
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

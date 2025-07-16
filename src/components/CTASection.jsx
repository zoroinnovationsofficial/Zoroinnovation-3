// src/components/CTASection.jsx
import React from 'react';

function CTASection() {
  return (
    <section className="py-16 cta-gradient text-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Let's discuss your requirements and create a solution that drives your business forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Schedule Consultation
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

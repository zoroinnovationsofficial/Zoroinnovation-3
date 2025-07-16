import React from 'react';
import heroMetrics from '../data/heroMetrics';

function HeroSection() {
  return (
    <section className="pt-16 pb-12 hero-gradient text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8 flex justify-center">
          <img src="/ZORO_logo.png" alt="ZORO INNOVATIONS logo" className="h-16 md:h-20 lg:h-24 w-auto" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Success Stories</h1>
        <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
          Discover how we've helped startups, enterprises, and institutions turn bold ideas into powerful digital products — with the right mix of innovation, strategy, and tech expertise.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {heroMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-white/80 text-sm md:text-base">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

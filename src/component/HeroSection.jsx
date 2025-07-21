// src/components/HeroSection.jsx
import React from 'react';
import './HeaderSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h2>Current Job Opportunities</h2>
      <p>Explore our open positions and find your perfect role in our growing team.</p>
      <input type="text" placeholder="🔍 Search positions..." className="search-bar" />
    </section>
  );
};

export default HeroSection;

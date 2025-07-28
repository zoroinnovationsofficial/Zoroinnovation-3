import React from 'react';

import webIcon from '../../assets/Background.svg';
import softwareIcon from '../../assets/Background-1.svg';
import saasIcon from '../../assets/Background-2.svg';
import aiIcon from '../../assets/Background-3.svg';
import itIcon from '../../assets/Background-4.svg';
import consultingIcon from '../../assets/Background-5.svg';

const ServicesSection = () => {
  const services = [
    {
      icon: webIcon,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and frameworks for optimal performance.',
      
    },
    {
      icon: softwareIcon,
      title: 'Custom Software',
      description: 'Tailored software solutions designed to meet your specific business requirements and streamline operations.',
      
    },
    {
      icon: saasIcon,
      title: 'SaaS Applications',
      description: 'Scalable Software-as-a-Service platforms with multi-tenant architecture and seamless cloud deployment.',
      
    },
    {
      icon: aiIcon,
      title: 'AI Applications',
      description: 'Intelligent applications powered by machine learning and artificial intelligence to automate and optimize processes.',
      
    },
    {
      icon: itIcon,
      title: 'Managed IT Services',
      description: 'Comprehensive IT infrastructure management, monitoring, and support services for seamless operations.',
      
    },
    {
      icon: consultingIcon,
      title: 'IT Consultancy',
      description: 'Strategic technology consulting to align IT initiatives with business objectives and drive digital transformation.',
      
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Core Services</h2>
          <p>Explore our comprehensive range of technology solutions</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: service.color }}>
                <img src={service.icon} alt={service.title} width={60} height={60} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import React from 'react';

import HeroSection from '../components/contactPage/HeroSection';
import ServicesSection from '../components/contactPage/ServicesSection';
import WhyChooseUs from '../components/contactPage/WhyChooseUs';
import HowWeWork from '../components/contactPage/HowWeWork';
import DigitalResources from '../components/contactPage/DigitalResources';
import ContactForm from '../components/contactPage/ContactForm';
import CTASection from '../components/contactPage/CTASection';

import '../App.css'; // adjust this if needed

const ContactPage = () => {
  return (
    <div className="App">
      
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <HowWeWork />
      <DigitalResources />
      <ContactForm />
      <CTASection />
      
    </div>
  );
};

export default ContactPage;

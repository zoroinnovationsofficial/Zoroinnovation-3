import React from 'react';
import './index.css'
import Navbar from './component/Navbar';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <HeroSection/>
      <Footer/>
    </div>
  );
}

export default App;

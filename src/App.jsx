import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import VerifyIDPage from "./pages/VerifyIDPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ServicePage from "./pages/Service.jsx";
import HomePage from "./pages/Home.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/verify" element={<VerifyIDPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

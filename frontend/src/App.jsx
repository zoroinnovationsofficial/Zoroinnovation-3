import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/user-section/About.jsx";
import VerifyIDPage from "./pages/user-section/VerifyIDPage.jsx";
import ContactPage from "./pages/user-section/ContactPage.jsx";
import ServicePage from "./pages/user-section/Service.jsx";
import HomePage from "./pages/user-section/Home.jsx";
import Blog from "./pages/user-section/Blog.jsx";
import Navbar from "./components/user-section/Navbar.jsx";
import Footer from "./components/user-section/Footer.jsx";

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
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

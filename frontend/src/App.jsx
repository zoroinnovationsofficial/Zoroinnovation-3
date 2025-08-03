import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/user-section/Navbar.jsx";
import Footer from "./components/user-section/Footer.jsx";
import Home from "./pages/user-section/Home.jsx";
import About from "./pages/user-section/About.jsx";
import Service from "./pages/user-section/Service.jsx";
import Projects from "./pages/user-section/Projects.jsx";
import Blog from "./pages/user-section/Blog.jsx";
import Career from "./pages/user-section/Career.jsx";
import ContactPage from "./pages/user-section/ContactPage.jsx";
import VerifyIDPage from "./pages/user-section/VerifyIDPage.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/verify" element={<VerifyIDPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

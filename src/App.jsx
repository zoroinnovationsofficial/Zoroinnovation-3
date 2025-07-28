import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import VerifyIDPage from "./pages/VerifyIDPage";
import ContactPage from "./pages/ContactPage"; // ✅ Add this line
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/verify" element={<VerifyIDPage />} />
        <Route path="/contact" element={<ContactPage />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

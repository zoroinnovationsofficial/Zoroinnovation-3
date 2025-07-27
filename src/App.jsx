import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import VerifyIDPage from "./pages/VerifyIDPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/verify" element={<VerifyIDPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

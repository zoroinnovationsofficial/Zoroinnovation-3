import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from './pages/user-section/Blog.jsx'
import Navbar from "./components/user-section/Navbar.jsx";
import Footer from "./components/user-section/Footer.jsx";

function App() {
  return (
    <Router>
      
      <Blog />
      
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import EmployeeVer from './pages/EmployeeVer.jsx';
import Locations from './pages/Location.jsx';
import Login from './pages/login.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Career from './pages/Career.jsx';
import Team from './pages/Team.jsx';
import Blog from './pages/Blog.jsx';
import Projects from './pages/Projects.jsx';
import Contacts from './pages/Contacts.jsx';
import Header from './pages/Header.jsx';
import Navbar from './components/Dashboard-Career/Navbar.jsx';
import Footer from './components/Dashboard-Career/Footer.jsx';

function AppContent() {
  const location = useLocation();

  // Pages that should not have header/navbar/footer
  const noHeaderFooterPages = ['/', '/landing'];
  const shouldShowHeaderFooter = !noHeaderFooterPages.includes(location.pathname);

  return (
    <>
      {/* {shouldShowHeaderFooter && <Navbar />} */}
      {shouldShowHeaderFooter && <Header />}
      <div className={shouldShowHeaderFooter ? "pt-16" : ""}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/career" element={<Career />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/verify" element={<EmployeeVer />} />
          <Route path="/location" element={<Locations />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedProjects from '../components/FeaturedProjects';
import CaseStudy from '../components/CaseStudy';
import Metrics from '../components/Metrics';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';


const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Projects', href: '#', active: true },
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '#' },
];

// Metrics with SVG icons (assign overlays logically)
const metrics = [
  { icon: '/Overlay-3.svg', value: '100+', label: 'Products Deployed' },
  { icon: '/Overlay-4.svg', value: '95%', label: 'Client Retention Rate' },
  { icon: '/Overlay-5.svg', value: '15%', label: 'Average Annual Returns' },
  { icon: '/Overlay-6.svg', value: '4 Weeks', label: 'Average Implementation Time' },
];

const heroMetrics = [
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '25+', label: 'Industries Served' },
  { value: '15', label: 'Years Experience' },
];

const projectTabs = [
  'All Projects',
  'AI Applications',
  'SaaS Platforms',
  'Web Development',
];

// Use the same image for all featured projects (case study image)
const caseStudyImage = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80';
const projects = [
  {
    category: 'AI Applications',
    title: 'AI-Powered Healthcare Assistant',
    description: 'Custom-built NLP-based virtual assistant for a 400-bed hospital, improving patient interaction efficiency by 65%.',
    image: caseStudyImage,
  },
  {
    category: 'SaaS Platforms',
    title: 'SaaS CRM for Real Estate Firm',
    description: 'Developed a fully responsive SaaS-based CRM, enabling 3x faster deal closures and 100% cloud-based operations.',
    image: caseStudyImage,
  },
  {
    category: 'Web Development',
    title: 'E-learning Platform',
    description: 'Built scalable custom LMS with user analytics, quizzes, and payment gateway. Supported 50K+ users within first year.',
    image: caseStudyImage,
  },
  {
    category: 'Cloud & DevOps',
    title: 'IT Infrastructure Revamp',
    description: 'Modernized outdated systems with cloud migration, increasing operational efficiency and reducing IT costs significantly.',
    image: caseStudyImage,
  },
  {
    category: 'AI Applications',
    title: 'AI-based Resume Screening Tool',
    description: 'Developed ML model to scan 10K+ resumes per day and shortlist based on skill match & language analysis.',
    image: caseStudyImage,
  },
  {
    category: 'Web Development',
    title: 'EdTech Platform for Teacher Training',
    description: 'Designed and deployed a scalable web-based training and management portal for 200+ educators, streamlining certification, performance tracking, and resource access.',
    image: caseStudyImage,
  },
];

const caseStudy = {
  image: caseStudyImage, // Example image
  title: 'Enterprise IT Modernization for Fortune 500 Company',
  challenge: 'A global enterprise needed to modernize its legacy IT infrastructure across 10 countries while reducing downtime and operational costs.',
  solution: [
    'Migrated systems to hybrid cloud',
    'Deployed monitoring tools for real-time performance',
  ],
  results: [
    '40% reduction in operational costs',
    '75% improvement in deployment speed',
    '99.9% uptime achieved across global offices',
  ],
  person: {
    name: 'Anand Iyer',
    role: 'Global IT Director',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg', // Realistic avatar
  },
  quote: 'Zero Innovation helped us scale globally with a future-proof IT strategy. Their technical expertise and execution were flawless.',
};

function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All Projects');
  const filteredProjects = projects.filter(
    (project) => activeTab === 'All Projects' || project.category === activeTab
  );
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar navItems={navItems} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeroSection heroMetrics={heroMetrics} />
      <FeaturedProjects
        projectTabs={projectTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        filteredProjects={filteredProjects}
      />
      <CaseStudy caseStudy={caseStudy} />
      <Metrics metrics={metrics} />
      <CTASection />
      <Footer />
    </div>
  );
}

Projects.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    active: PropTypes.bool,
  })).isRequired,
  heroMetrics: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  projectTabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  filteredProjects: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  caseStudy: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    challenge: PropTypes.string.isRequired,
    solution: PropTypes.arrayOf(PropTypes.string).isRequired,
    results: PropTypes.arrayOf(PropTypes.string).isRequired,
    person: PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    quote: PropTypes.string.isRequired,
  }).isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default Projects;

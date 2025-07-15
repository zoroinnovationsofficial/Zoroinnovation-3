import React, { useState } from 'react';

// Stacked logo for all locations (ZORO colored, INNOVATIONS below, centered, always same large size)
function ZoroLogo({ className = '' }) {
  return (
    <div className={`flex flex-col items-center ${className}`.trim()}>
      <div className="flex space-x-2">
        <span className="text-orange-500 font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none">Z</span>
        <span className="text-blue-500 font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none">O</span>
        <span className="text-green-500 font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none">R</span>
        <span className="text-purple-500 font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none">O</span>
      </div>
      <div className="text-black font-bold text-2xl md:text-3xl lg:text-4xl tracking-widest mt-2 uppercase" style={{ letterSpacing: '0.12em' }}>INNOVATIONS</div>
    </div>
  );
}

// Navigation items
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
  { icon: '/Overlay-1.svg', value: '100+', label: 'Products Deployed' },
  { icon: '/Overlay-4.svg', value: '95%', label: 'Client Retention Rate' },
  { icon: '/Overlay-3.svg', value: '15%', label: 'Average Annual Returns' },
  { icon: '/Overlay-2.svg', value: '4 Weeks', label: 'Average Implementation Time' },
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
  const [activeTab, setActiveTab] = useState('All Projects');
  const [menuOpen, setMenuOpen] = useState(false);

  // Filter projects by tab
  const filteredProjects =
    activeTab === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo and Brand Text */}
          <div className="flex items-center">
            <ZoroLogo className="items-start [&>div:first-child>span]:text-2xl md:[&>div:first-child>span]:text-3xl lg:[&>div:first-child>span]:text-4xl [&>div:last-child]:text-xs md:[&>div:last-child]:text-sm lg:[&>div:last-child]:text-base" />
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 ${item.active ? 'text-orange-500' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <img src="/Overlay-2.svg" alt="Menu" className="h-7 w-7" />
          </button>
        </div>
        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 ${item.active ? 'text-orange-500' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-12 hero-gradient text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          {/* ZORO INNOVATIONS logo and text */}
          <div className="mb-8 flex justify-center">
            <ZoroLogo className="[&>div:first-child>span]:text-4xl md:[&>div:first-child>span]:text-5xl lg:[&>div:first-child>span]:text-6xl [&>div:last-child]:text-xl md:[&>div:last-child]:text-2xl lg:[&>div:last-child]:text-3xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Success Stories</h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
            Discover how we've helped startups, enterprises, and institutions turn bold ideas into powerful digital products — with the right mix of innovation, strategy, and tech expertise.
          </p>
          {/* Hero Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {heroMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful digital solutions across industries — delivering real impact through web, AI, SaaS, and IT innovation.
            </p>
          </div>
          {/* Project Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 w-full relative">
                  <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                  <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In-depth breakdown of our most transformative tech projects — and the strategies that delivered real business outcomes.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
            <div className="md:w-1/2 h-96 md:h-auto flex items-center justify-center bg-gray-100">
              <img src={caseStudy.image} alt="Case Study" className="h-full w-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {caseStudy.title}
              </h3>
              <div className="space-y-6">
                {/* Challenge */}
                <div>
                  <div className="flex items-center mb-2">
                    <img src="/Overlay-1.svg" alt="Challenge" className="h-6 w-6 mr-3" />
                    <h4 className="font-semibold text-gray-900">Challenge</h4>
                  </div>
                  <p className="text-gray-600 ml-9">
                    {caseStudy.challenge}
                  </p>
                </div>
                {/* Solution */}
                <div>
                  <div className="flex items-center mb-2">
                    <img src="/Overlay-2.svg" alt="Solution" className="h-6 w-6 mr-3" />
                    <h4 className="font-semibold text-gray-900">Solution</h4>
                  </div>
                  <div className="text-gray-600 ml-9">
                    <p className="mb-2">We implemented a full-scale infrastructure revamp:</p>
                    <ul className="space-y-1 text-sm list-disc ml-5">
                      {caseStudy.solution.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Results */}
                <div>
                  <div className="flex items-center mb-2">
                    <img src="/Overlay-3.svg" alt="Results" className="h-6 w-6 mr-3" />
                    <h4 className="font-semibold text-gray-900">Results</h4>
                  </div>
                  <div className="text-gray-600 ml-9">
                    <ul className="space-y-1 text-sm list-disc ml-5">
                      {caseStudy.results.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center pt-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                    <img src={caseStudy.person.avatar} alt={caseStudy.person.name} className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{caseStudy.person.name}</div>
                    <div className="text-sm text-gray-600">{caseStudy.person.role}</div>
                  </div>
                </div>
                <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700">
                  "{caseStudy.quote}"
                </blockquote>
                <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200">
                  Read Full Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Metrics
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quantifiable results that demonstrate our commitment to delivering exceptional value to our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-200">
                  <img src={metric.icon} alt="icon" className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 cta-gradient text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Schedule Consultation
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex flex-col items-start">
                <ZoroLogo className="[&>div:first-child>span]:text-xl md:[&>div:first-child>span]:text-2xl lg:[&>div:first-child>span]:text-3xl [&>div:last-child]:text-xs md:[&>div:last-child]:text-sm lg:[&>div:last-child]:text-base" />
              </div>
              <p className="text-gray-400 mb-4">
                Transforming businesses through innovative AI solutions and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                {/* Replace these with real social icons if available */}
                <a href="#"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" className="h-5 w-5 filter invert" /></a>
                <a href="#"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg" alt="Twitter" className="h-5 w-5 filter invert" /></a>
                <a href="#"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" className="h-5 w-5 filter invert" /></a>
              </div>
            </div>
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Software</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Applications</a></li>
                <li><a href="#" className="hover:text-white transition-colors">IT Consulting</a></li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@company.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Innovation Drive</li>
                <li>Tech City, TC 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Zoro Innovations. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Projects; 
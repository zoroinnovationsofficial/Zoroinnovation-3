import './Service.css';
import WebDevelopmentExcellence from './components/servicePage/WebDevelopmentExcellence';
import PricingPackages from './components/servicePage/PricingPackages';
import ServiceProcess from './components/servicePage/ServiceProcess';
import AiApplications from './components/servicePage/AiApplications';
import TrackRecord from './components/servicePage/TrackRecord';
import SuccessStories from './components/servicePage/SuccessStories';
import ServiceQuoteForm from './components/servicePage/ServiceQuoteForm';
import ResourcesDocs from './components/servicePage/ResourcesDocs';
import Footer from './components/servicePage/Footer';
import CTASection from './components/servicePage/CTA';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header/Navbar */}
      <header className="w-full bg-white shadow px-4 md:px-8 py-4 flex sticky top-0 z-50 items-center justify-between">
  <div className="flex items-center space-x-2">
  <img
    src="/Serviceimages/ZORO.png"
    alt="Zoro Innovations Logo"
    className="w-24 h-9 "
  />
</div>
  {/* Desktop Nav */}
  <nav className="hidden md:flex space-x-6 lg:space-x-8 text-gray-700 font-medium">
    <a href="#" className="hover:text-orange-500">Home</a>
    <a href="#" className="text-orange-500 font-bold">Services</a>
    <a href="#" className="hover:text-orange-500">About</a>
    <a href="#" className="hover:text-orange-500">Projects</a>
    <a href="#" className="hover:text-orange-500">Blog</a>
    <a href="#" className="hover:text-orange-500">Careers</a>
    <a href="#" className="hover:text-orange-500">Verify ID</a>
    <a href="#" className="hover:text-orange-500">Contact</a>
  </nav>
  {/* Mobile Hamburger */}
  <button className="md:hidden flex items-center px-2 py-1 border rounded text-gray-700 border-gray-300" aria-label="Open Menu">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</header>


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-600 to-orange-500 text-white py-20 px-4 text-center">
       <h1 className="text-5xl md:text-6xl font-bold mb-5">Our Services & Solutions</h1>
<p className="max-w-2xl mx-auto mb-10 font-light text-xl">Comprehensive technology services designed to transform your business and drive innovation across all aspects of your digital journey.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white hover:bg-gray-100 text-orange-500 px-6 py-2 rounded font-semibold">Get Started</button>
          <button className=" hover:bg-blue-600 text-white px-6 py-2 rounded font-semibold border border-white">Contact Us</button>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 px-10 sm:px-4 max-w-[1280px]  mx-auto">
 <h2 className="text-4xl lg:text-4xl font-bold text-center mb-0 mt-0 leading-relaxed">Our Core Services</h2>
<h2 className="text-2xl lg:text-2xl font-normal text-center mb-10 mt-6 leading-relaxed">Explore our comprehensive range of technology solutions</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {/* Service Cards */}
    <div className="bg-white shadow-lg rounded-3xl max-w-[384px] max-h-[332px] p-6 items-start">
      <img src="/Serviceimages/Background.svg" alt="icon" className="w-16 h-16" />
      <h3 className="font-semibold text-xl mt-8 mb-2">Web Development</h3>
      <p className="mb-8 mt-6 text-gray-600 text-[16px] font-normal">Modern, responsive web applications built with cutting-edge technologies and frameworks for optimal performance.</p>
      <button className="hover:bg-orange-600 bg-orange-500 text-white px-4 py-1 rounded-md">Learn More</button>
    </div>
    <div className="bg-white shadow-lg rounded-3xl max-w-[384px] max-h-[332px] p-6 items-start">
      <img src="/Serviceimages/Background-1.svg" alt="icon" className="w-16 h-16" />
      <h3 className="font-semibold text-xl mt-8 mb-2">Custom Software</h3>
      <p className="mb-8 mt-6 text-gray-600 text-[16px] font-normal">Tailored software solutions designed to meet your specific business requirements and streamline operations.</p>
      <button className="hover:bg-orange-600 bg-orange-500 text-white px-4 py-1 rounded">Learn More</button>
    </div>
     <div className="bg-white shadow-lg rounded-3xl max-w-[384px] max-h-[332px] p-6 items-start">
      <img src="/Serviceimages/Background-2.svg" alt="icon" className="w-16 h-16" />
      <h3 className="font-semibold text-xl mt-8 mb-2">SaaS Applications</h3>
      <p className="mb-8 mt-6 text-gray-600 text-[16px] font-normal">Scalable Software-as-a-Service platforms with multi-tenant architecture and seamless cloud deployment.</p>
      <button className="hover:bg-orange-600 bg-orange-500 text-white px-4 py-1 rounded">Learn More</button>
    </div>
     <div className="bg-white shadow-lg rounded-3xl max-w-[384px] max-h-[332px] p-6 items-start">
      <img src="/Serviceimages/Background-3.svg" alt="icon" className="w-16 h-16" />
      <h3 className="font-semibold text-xl mt-8 mb-2">AI Applications</h3>
      <p className="mb-8 mt-6 text-gray-600 text-[16px] font-normal">Intelligent applications powered by machine learning and artificial intelligence to automate and optimize processes.</p>
      <button className="hover:bg-orange-600 bg-orange-500 text-white px-4 py-1 rounded">Learn More</button>
    </div>
    <div className="bg-white shadow-lg rounded-3xl max-w-[384px] max-h-[332px] p-6 items-start">
      <img src="/Serviceimages/Background-4.svg" alt="icon" className="w-16 h-16"/>
      <h3 className="font-semibold text-xl mt-8 mb-2">Managed IT Services</h3>
      <p className="mb-8 mt-6 text-gray-600 text-[16px] font-normal">Comprehensive IT infrastructure management, monitoring, and support services for seamless operations.</p>
      <button className="hover:bg-orange-600 bg-orange-500 text-white px-4 py-1 rounded">Learn More</button>
    </div>
     <div className="bg-white shadow-lg rounded-3xl max-w-[384px] max-h-[332px] p-6 items-start">
     <img src="/Serviceimages/Background-5.svg" alt="icon" className="w-16 h-16" />

            <h3 className="font-semibold text-xl mt-8 mb-2">IT Consultancy</h3>
            <p className="mb-8 mt-6 text-gray-600 text-[16px] font-normal">Strategic technology consulting to align IT initiatives with business objectives and drive digital transformation.</p>
            <button className="hover:bg-orange-600 bg-orange-500 text-white px-4 py-1 rounded">Learn More</button>
          </div>
        </div>
      </section>

      {/* Web Development Excellence */}
      <WebDevelopmentExcellence />
      {/* Pricing Packages */}
      <PricingPackages />
      {/* Service Process */}
      <ServiceProcess />
      {/* AI Applications & ML */}
      <AiApplications />
      {/* Track Record */}
      <TrackRecord />
      {/* Success Stories */}
      <SuccessStories />
      {/* Service Quote Form */}
      <ServiceQuoteForm />
      {/* Resources & Documentation */}
      <ResourcesDocs />
      <CTASection />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default servicePage;

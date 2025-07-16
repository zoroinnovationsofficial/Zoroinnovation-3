import React from "react";
import {
  Award,
  MapPin,
  Phone,
  Clock,
  Linkedin,
  Mail,
  Twitter,
  Facebook,
} from "lucide-react";
import Navbar from "../component/section/Navbar";
import SectionHeader from "../component/section/sectionHeader";
import OurStorySection from "../component/section/ourMissionSection";
import MissionVisionSection from "../component/section/missionVisionSection";
import CoreValueSection from "../component/section/coreValueSection";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Aman Singh Nishad task */}
      <Navbar />
      <SectionHeader />
      <OurStorySection />
      <MissionVisionSection />
      <CoreValueSection />

      {/* Anand Task */}
      {/* Section 1: Meet Our Leadership Team */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced leadership team brings together decades of financial
            expertise and industry knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Sarah Mitchell */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Sarah Mitchell"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Sarah Mitchell
            </h3>
            <p className="text-blue-600 font-medium mb-3">
              Chief Executive Officer & Co-Founder
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Sarah brings over 25 years of experience in financial planning and
              wealth management. She holds a CPA and CFP certification and is
              passionate about helping families achieve financial security.
            </p>
            <div className="flex space-x-3">
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                <Linkedin size={20} />
              </button>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* David Chen */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="David Chen"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              David Chen
            </h3>
            <p className="text-blue-600 font-medium mb-3">
              Chief Investment Officer & Co-Founder
            </p>
            <p className="text-gray-600 text-sm mb-4">
              David specializes in investment strategy and portfolio management.
              With his CFA in Finance and CFA designation, he leads our
              investment research and asset allocation strategies.
            </p>
            <div className="flex space-x-3">
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                <Linkedin size={20} />
              </button>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* Michelle Johnson */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Michelle Johnson"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Michelle Johnson
            </h3>
            <p className="text-blue-600 font-medium mb-3">
              Chief Operating Officer
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Michelle oversees our daily operations and client service
              excellence. Her background in operations management and client
              relations ensures seamless service delivery.
            </p>
            <div className="flex space-x-3">
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                <Linkedin size={20} />
              </button>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* Roberto Martinez */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Roberto Martinez"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Roberto Martinez
            </h3>
            <p className="text-blue-600 font-medium mb-3">
              Senior Financial Advisor
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Roberto specializes in retirement planning and estate planning.
              His bilingual capabilities and cultural sensitivity help serve our
              diverse client base effectively.
            </p>
            <div className="flex space-x-3">
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                <Linkedin size={20} />
              </button>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* Emily Thompson */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Emily Thompson"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Emily Thompson
            </h3>
            <p className="text-blue-600 font-medium mb-3">
              Insurance Specialist
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Emily leads our insurance division with expertise in life,
              disability, and business insurance. She helps clients protect
              their assets and secure their family's future.
            </p>
            <div className="flex space-x-3">
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                <Linkedin size={20} />
              </button>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* James Wilson */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="James Wilson"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              James Wilson
            </h3>
            <p className="text-blue-600 font-medium mb-3">
              Tax Strategy Director
            </p>
            <p className="text-gray-600 text-sm mb-4">
              James brings deep expertise in tax planning and compliance. His
              strategic approach helps clients minimize tax liability while
              maximizing their financial growth potential.
            </p>
            <div className="flex space-x-3">
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                <Linkedin size={20} />
              </button>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View All Team Members
          </button>
        </div>
      </section>

      {/* Section 2: Awards & Certifications */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Awards & Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognition of our commitment to excellence and professional
              standards in the financial services industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Best Financial Advisory Firm */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6">
                <img
                  src="/about icon/Overlay-8.svg"
                  alt="Best Financial Advisory Firm Award"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Best Financial Advisory Firm
              </h3>
              <p className="text-gray-600 mb-2">
                Financial Times Excellence Awards
              </p>
              <p className="text-gray-500 text-sm">2023, 2022, 2021</p>
            </div>

            {/* Top Client Satisfaction */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6">
                <img
                  src="/about icon/Overlay-9.svg"
                  alt="Top Client Satisfaction Award"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Top Client Satisfaction
              </h3>
              <p className="text-gray-600 mb-2">Investment News Recognition</p>
              <p className="text-gray-500 text-sm">2023</p>
            </div>

            {/* SEC Registered */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6">
                <img
                  src="/about icon/Overlay-10.svg"
                  alt="SEC Registered Investment Advisor"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                SEC Registered
              </h3>
              <p className="text-gray-600 mb-2">Investment Advisor</p>
              <p className="text-gray-500 text-sm">Since 2000</p>
            </div>

            {/* FINRA Member */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6">
                <img
                  src="/about icon/Overlay-11.svg"
                  alt="FINRA Member"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                FINRA Member
              </h3>
              <p className="text-gray-600 mb-2">
                Financial Industry Regulatory Authority
              </p>
              <p className="text-gray-500 text-sm">Active Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Office Locations */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Office Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our convenient locations or schedule a virtual
              consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* New York Headquarters */}
            <div className="bg-purple-100 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="New York Office"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  New York Headquarters
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-gray-900">
                        123 Financial District, Suite 500
                      </p>
                      <p className="text-gray-600">New York, NY 10004</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <p className="text-gray-900">(212) 555-1234</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <p className="text-gray-900">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chicago Office */}
            <div className="bg-green-100 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Chicago Office"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Chicago Office
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-gray-900">
                        456 Michigan Avenue, Floor 12
                      </p>
                      <p className="text-gray-600">Chicago, IL 60611</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <p className="text-gray-900">(312) 555-5678</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <p className="text-gray-900">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Los Angeles Office */}
            <div className="bg-orange-100 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Los Angeles Office"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Los Angeles Office
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-gray-900">
                        789 Wilshire Boulevard, Suite 300
                      </p>
                      <p className="text-gray-600">Los Angeles, CA 90017</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <p className="text-gray-900">(213) 555-9012</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <p className="text-gray-900">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Office locations map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Company Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Company Timeline
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our journey to becoming a trusted financial
              services leader.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 w-1 bg-orange-500 h-full"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2000 - Company Founded */}
              <div className="flex items-start space-x-8">
                <div className="relative z-10">
                  <img
                    src="/about icon/Background.svg"
                    alt="2000"
                    className="w-16 h-16 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center"
                  />
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Company Founded
                  </h3>
                  <p className="text-gray-600">
                    Sarah Mitchell and David Chen establish FinSecure with a
                    vision to provide personalized financial advisory services.
                  </p>
                </div>
              </div>

              {/* 2005 - First Major Expansion */}
              <div className="flex items-start space-x-8">
                <div className="relative z-10">
                  <img
                    src="/about icon/Background-1.svg"
                    alt="2005"
                    className="w-16 h-16 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center"
                  />
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    First Major Expansion
                  </h3>
                  <p className="text-gray-600">
                    Opened our Chicago office and expanded our team to serve
                    clients across the Midwest region.
                  </p>
                </div>
              </div>

              {/* 2010 - Technology Innovation */}
              <div className="flex items-start space-x-8">
                <div className="relative z-10">
                  <img
                    src="/about icon/Background-2.svg"
                    alt="2010"
                    className="w-16 h-16 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center"
                  />
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Technology Innovation
                  </h3>
                  <p className="text-gray-600">
                    Launched our proprietary financial planning platform,
                    revolutionizing how we serve our clients.
                  </p>
                </div>
              </div>

              {/* 2015 - West Coast Expansion */}
              <div className="flex items-start space-x-8">
                <div className="relative z-10">
                  <img
                    src="/about icon/Background-3.svg"
                    alt="2015"
                    className="w-16 h-16 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center"
                  />
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    West Coast Expansion
                  </h3>
                  <p className="text-gray-600">
                    Opened our Los Angeles office, establishing a strong
                    presence on the West Coast.
                  </p>
                </div>
              </div>

              {/* 2020 - Digital Transformation */}
              <div className="flex items-start space-x-8">
                <div className="relative z-10">
                  <img
                    src="/about icon/Background-4.svg"
                    alt="2020"
                    className="w-16 h-16 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center"
                  />
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Digital Transformation
                  </h3>
                  <p className="text-gray-600">
                    Successfully transitioned to hybrid service model, offering
                    both in-person and virtual consultations.
                  </p>
                </div>
              </div>

              {/* 2023 - Industry Recognition */}
              <div className="flex items-start space-x-8">
                <div className="relative z-10">
                  <img
                    src="/about icon/Background-5.svg"
                    alt="2023"
                    className="w-16 h-16 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center"
                  />
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Industry Recognition
                  </h3>
                  <p className="text-gray-600">
                    Received multiple industry awards for excellence in client
                    service and financial advisory services.
                  </p>
                </div>
              </div>

              {/* 2025 - Future Growth */}
              <div className="flex items-start space-x-8">
                <div className="relative z-10">
                  <img
                    src="/about icon/Background-6.svg"
                    alt="2025"
                    className="w-16 h-16 rounded-full bg-gray-400 text-white font-bold text-lg flex items-center justify-center"
                  />
                </div>
                <div className="flex-1 pt-2">
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">
                      Future Growth
                    </h3>
                    <p className="text-gray-600">
                      Continuing to expand our services and reach, with plans
                      for additional offices and enhanced digital capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="py-20 px-4 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a solution that drives
            your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-orange-500 transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center">
                <img
                  src="/about icon/zoroLogo.png"
                  alt="Zoro Innovations Logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming businesses through innovative AI solutions and
                cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <button className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
                  <img
                    src="/about icon/linkedin.svg"
                    alt="LinkedIn"
                    className="w-8 h-8"
                  />
                </button>
                <button className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
                  <img
                    src="/about icon/twitter.svg"
                    alt="Twitter"
                    className="w-8 h-8"
                  />
                </button>
                <button className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
                  <img
                    src="/about icon/facebook.svg"
                    alt="Facebook"
                    className="w-8 h-8"
                  />
                </button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Custom Software
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AI Applications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    IT Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers & Certs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <p>contact@company.com</p>
                <p>+1 (555) 123-4567</p>
                <p>
                  123 Innovation Drive
                  <br />
                  Tech City, TC 12345
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Zoro innovations. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;

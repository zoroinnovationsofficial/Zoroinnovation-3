import React from 'react';
import PropTypes from 'prop-types';

function Footer() {
  return (
    <footer className="footer-bg text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/zoro_logo_white.png" alt="ZORO INNOVATIONS logo" className="h-8 md:h-10 lg:h-12 w-auto mb-4" />
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative AI solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" className="h-5 w-5 filter invert" /></a>
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
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Zoro Innovations. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

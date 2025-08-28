import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/admin/dashboard' },
  { name: 'Career', path: '/admin/career' },
  { name: 'Team', path: '/admin/team' },
  { name: 'Blog', path: '/admin/blog' },
  { name: 'Verify ID', path: '/admin/verify' },
  { name: 'Location', path: '/admin/location' },
  { name: 'Projects', path: '/admin/projects' },
  { name: 'Contacts or Inquiries', path: '/admin/contacts' }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `cursor-pointer transition font-semibold text-sm ${
      isActive ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
    }`;

  return (
    <nav className="w-full bg-white fixed top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/zoroLogo.png"
            alt="Zoro Innovations Logo"
            className="w-24 h-18 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <NavLink key={item.name} to={item.path} className={linkClasses}>
              {item.name}
            </NavLink>
          ))}
          <img
            src="/img2.png"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="text-gray-700 text-2xl"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-3 space-y-2 text-sm font-semibold shadow-md">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={linkClasses}
              onClick={() => setMenuOpen(false)}
            >
              <div className="py-2 px-2 rounded">{item.name}</div>
            </NavLink>
          ))}
          <div className="flex justify-center mt-3">
            <img
              src="/img2.png"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

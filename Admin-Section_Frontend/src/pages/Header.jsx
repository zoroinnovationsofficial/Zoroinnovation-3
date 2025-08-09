import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Career', path: '/career' },
  { name: 'Team', path: '/team' },
  { name: 'Blog', path: '/blog' },
  { name: 'Verify ID', path: '/verify' },
  { name: 'Location', path: '/location' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contacts or Inquiries', path: '/contacts' }
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
          <img src="/zoro.png" alt="Zoro Innovations Logo" className="w-20 h-8 object-contain" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.name} to={item.path} className={linkClasses}>
              {item.name}
            </NavLink>
          ))}
          <img src="/img2.png" alt="User" className="w-10 h-10 rounded-full object-cover" />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu" className="text-gray-700">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
            <img src="/img2.png" alt="User" className="w-10 h-10 rounded-full object-cover" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

import React, { useState } from 'react';
import navItems from '../data/navItems';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <img src="/ZORO_logo.png" alt="ZORO INNOVATIONS logo" className="h-8 md:h-12 lg:h-14 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className={`text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 ${item.active ? 'text-orange-500' : ''}`}>
              {item.name}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <img src="/Overlay-2.svg" alt="Menu" className="h-7 w-7" />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className={`block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 ${item.active ? 'text-orange-500' : ''}`} onClick={() => setMenuOpen(false)}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

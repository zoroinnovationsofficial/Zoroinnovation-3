import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/Dashboard-Career/zoro-logo.png'
import profilePic from '../../assets/Dashboard-Career/profilePic.png'

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { path: '/', label: 'Dashboard' },
    { path: '/career', label: 'Career' },
    { path: '/team', label: 'Team' },
    { path: '/blog', label: 'Blog' },
    { path: '/verifyId', label: 'Verify ID' },
    { path: '/location', label: 'Location' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact or Inquiries' },
  ]
  return (
    <>
      <nav className='flex justify-between items-center px-20 py-2 shadow-md bg-white'>
        <img src={logo} alt='company logo' className='w-24' />

        <ul className='flex gap-6 text-sm font-medium items-center text-gray-700'>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`${
                  currentPath === path ? 'text-orange-500 font-semibold' : 'hover:text-orange-400' }transition-colors duration-200`}
              >
                {label}
              </Link>
            </li>
          ))}
          <img src={profilePic} alt="user" className='w-10 h-10 rounded-full' />
        </ul>
    </nav>
    </>
  )
}

export default Navbar;
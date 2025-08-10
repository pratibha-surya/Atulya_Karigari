import React, { useState, useContext } from 'react';
import { CiMenuFries } from "react-icons/ci";

import { Link } from 'react-router-dom';
import { AuthContext } from '../../Pages/context/AuthContext';

const Navbar = () => {
  const { user,logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { label: 'HANDLOOM', href: '/' },
    { label: 'HANDICRAFT', href: '/' },
    { label: 'SHOP BY OCCASION', href: '/' },
    { label: 'CRAFT STORIES', href: '/' },
    { label: 'ABOUT US', href: '/' },
  ];

  return (
    <>
   
      <h3
        className="w-full text-white text-center text-sm font-semibold hidden sm:block"
        style={{
          height: '31px',
          backgroundColor: '#6D001D',
          border: '1px solid #8E8E8E1A',
        }}
      >
        Step into Style and Discover your Signature Look
      </h3>

      
      <nav className="bg-white shadow-md py-4 px-4 sm:px-6 md:px-8 flex justify-between items-center relative font-sans flex-wrap">
        
       
        <div className="flex flex-col sm:flex-row sm:items-center text-lg sm:text-2xl font-semibold text-[#7F0A18] leading-5 sm:leading-none">
          <span>Atulya</span>
          <span className="sm:ml-1 border border-yellow-400 bg-yellow-400 text-[#7F0A18]  px-2 py-1 rounded">
  Karigari
</span>

        </div>

        
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="relative hover:text-orange-600 transition-colors duration-200
                  before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[2px] 
                  before:bg-orange-600 before:w-0 hover:before:w-full before:transition-all before:duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

       
        <div className="hidden md:flex items-center space-x-4">
         
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full py-1.5 px-4 pl-10 text-sm bg-[#F09D8D] focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"></i>
          </div>

         
          {user && (
            <span className="text-gray-700 font-medium hidden lg:block">
              Hello, {user.name}
            </span>
          )}

         
          <i className="far fa-user text-gray-600 hover:text-orange-600 cursor-pointer"></i>
          <i className="far fa-heart text-gray-600 hover:text-orange-600 cursor-pointer"></i>
          <i className="fas fa-shopping-cart text-gray-600 hover:text-orange-600 cursor-pointer"></i>

         
          <img
            src="data:image/jpeg;base64,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"
            alt="User"
            className="h-8 w-8 rounded-full object-cover border border-gray-300"
          />
        </div>

       
        <button className="md:hidden text-2xl ml-auto" onClick={toggleMenu}>
          <CiMenuFries />
        </button>

        
        {menuOpen && (
          <ul className="w-full bg-white shadow-md z-20 flex flex-col items-start px-6 py-4 space-y-4 md:hidden">
           
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setMenuOpen(false)} 
                  className="block text-gray-700 font-medium hover:text-orange-600 relative
                    before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[2px] 
                    before:bg-orange-600 before:w-0 hover:before:w-full before:transition-all before:duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}

           
            <div className="w-full mt-4 relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full border rounded-full py-2 px-4 pl-10 text-sm bg-[#F09D8D] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"></i>
            </div>

           
            <div className="flex items-center space-x-4 mt-4">
              <i className="far fa-user text-gray-600 hover:text-orange-600 cursor-pointer"></i>
              <i className="far fa-heart text-gray-600 hover:text-orange-600 cursor-pointer"></i>
              <i className="fas fa-shopping-cart text-gray-600 hover:text-orange-600 cursor-pointer"></i>
              <img
                src="https://via.placeholder.com/32"
                alt="User"
                className="h-8 w-8 rounded-full object-cover border border-gray-300"
              />
            </div>

           
            {user && (
  <div className="flex items-center gap-4 mt-2">
    <span className="text-gray-700 font-medium">
      Hello, {user.name}
    </span>
    <button
      onClick={logout}
      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
    >
      Logout
    </button>
  </div>
)}

          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;

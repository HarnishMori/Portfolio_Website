import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-900/80 backdrop-blur-md sticky top-0 h-15 flex justify-between items-center px-4 z-50">
      <div className="text-xl font-semibold bg-gradient-to-r from-emerald-400 to-purple-300 bg-clip-text text-transparent font-serif">
        Harnish Mori
      </div>
      <div className="flex space-x-4">
        <a href="#home" className="px-2 py-2 cursor-pointer text-gray-100 hover:text-emerald-400 transition-colors font-sans">
          Home
        </a>
        <a href="#about" className="px-2 py-2 cursor-pointer text-gray-100 hover:text-emerald-400 transition-colors font-sans">
          About
        </a>
        <a href="#skills" className="px-2 py-2 cursor-pointer text-gray-100 hover:text-emerald-400 transition-colors font-sans">
          Skills
        </a>
        <a href="#projects" className="px-2 py-2 cursor-pointer text-gray-100 hover:text-emerald-400 transition-colors font-sans">
          Projects
        </a>
        <a href="#services" className="px-2 py-2 cursor-pointer text-gray-100 hover:text-emerald-400 transition-colors font-sans">
          Services
        </a>
        <a href="#contact" className="px-2 py-2 cursor-pointer text-gray-100 hover:text-emerald-400 transition-colors font-sans">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
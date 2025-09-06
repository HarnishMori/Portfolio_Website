import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "services", label: "Services" },
    { to: "contact", label: "Contact" },
  ];
  const navRef = useRef(null);
  const navLinkRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
        duration: 1,
      },
    });
    tl.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }).from(navLinkRef.current?.children, {
      opacity: 0,
      y: -20,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-slate-900/80 backdrop-blur-md sticky top-0 h-15 flex justify-between items-center px-4 z-50"
    >
      {/* Logo */}
      <div className="text-xl font-semibold bg-gradient-to-r from-emerald-400 to-purple-300 bg-clip-text text-transparent font-serif">
        Harnish
      </div>

      {/* Desktop Menu */}
      <div ref={navLinkRef} className="hidden md:flex space-x-6">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            smooth={true}
            duration={500}
            offset={-60}
            className="px-2 py-2 cursor-pointer text-gray-100 hover:text-emerald-400 transition-colors font-sans"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-100 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-bars text-2xl"></i>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-15 right-0 w-48 h-screen bg-slate-900/95 backdrop-blur-md flex flex-col items-center space-y-6 py-6 md:hidden">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-60}
              onClick={() => setIsOpen(false)} // close on click
              className="px-2 py-2 cursor-pointer text-gray-100 hover:text-emerald-400 transition-colors font-sans"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

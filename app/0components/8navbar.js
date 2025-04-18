'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white shadow transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full px-4 sm:px-6 py-6 md:py-7 flex items-center justify-between relative flex-wrap">

        {/* Left */}
        <div className="hidden md:block md:w-1/5" />

        {/* Center - desktop */}
        <div className="hidden md:flex md:w-3/5 w-full justify-center space-x-10 font-normal">
          <Link href="/" className="py-1 hover:text-orange-500 transition duration-200 ">acasă</Link>
          <Link href="/1despreext" className="py-1 hover:text-orange-500 transition duration-200 ">despre</Link>
          <Link href="/2echipaext" className="py-1 hover:text-orange-500 transition duration-200 ">echipa</Link>
          <Link href="/3neurofeedbackext" className="py-1 hover:text-orange-500 transition duration-200 ">neurofeedback</Link>
          <Link href="/4serviciiext" className="py-1 hover:text-orange-500 transition duration-200 ">servicii</Link>
          <Link href="/" className="py-1 hover:text-orange-500 transition duration-200 ">contact</Link>
          <Link href="/" className="py-1 hover:text-orange-500 transition duration-200 ">blog</Link>
        </div>

        {/* Right & hamburger */}
        <div className="flex md:w-1/5 w-full justify-end items-center gap-4 text-xl mt-4 md:mt-0">
          {/* Desktop social */}
          <div className="hidden md:flex gap-4">
            <a href="https://www.facebook.com/Psihologescu-105460227828929" className="hover:text-orange-500 transition duration-200" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/psihologescu/" className="hover:text-orange-500 transition duration-200" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden cursor-pointer ml-auto" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-5 text-sm font-normal shadow">
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={toggleMenu}>acasă</Link>
            <Link href="/1despreext" onClick={toggleMenu}>despre</Link>
            <Link href="/2echipaext" onClick={toggleMenu}>echipa</Link>
            <Link href="/3neurofeedbackext" onClick={toggleMenu}>neurofeedback</Link>
            <Link href="/4serviciiext" onClick={toggleMenu}>servicii</Link>
            <Link href="/" onClick={toggleMenu}>contact</Link>
            <Link href="/" onClick={toggleMenu}>blog</Link>
            <div className="flex gap-4 pt-1">
              <a href="https://www.facebook.com/Psihologescu-105460227828929" className="hover:text-orange-500 transition duration-200" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/psihologescu/" className="hover:text-orange-500 transition duration-200" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

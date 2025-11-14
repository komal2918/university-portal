import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

interface HeaderProps {
  universityName: string;
  logo?: string;
}

const Header: React.FC<HeaderProps> = ({ universityName, logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-700 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+911234567890" className="flex items-center hover:text-blue-200">
              <FaPhone className="mr-2" size={12} />
              <span className="hidden sm:inline">+91 123-456-7890</span>
            </a>
            <a href="mailto:admissions@university.edu" className="flex items-center hover:text-blue-200">
              <FaEnvelope className="mr-2" size={12} />
              <span className="hidden sm:inline">admissions@university.edu</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm">
            <span>Admissions Open 2024-25</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {universityName.charAt(0)}
            </div>
            <span className="text-xl font-bold text-gray-800">{universityName}</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition">
              About
            </a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Courses
            </a>
            <a href="#facilities" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Facilities
            </a>
            <a href="#placements" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Placements
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Contact
            </a>
            <a
              href="#apply"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-semibold"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <a
              href="#about"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 border-b"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#courses"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 border-b"
              onClick={toggleMenu}
            >
              Courses
            </a>
            <a
              href="#facilities"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 border-b"
              onClick={toggleMenu}
            >
              Facilities
            </a>
            <a
              href="#placements"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 border-b"
              onClick={toggleMenu}
            >
              Placements
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 border-b"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <a
              href="#apply"
              className="block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition text-center font-semibold"
              onClick={toggleMenu}
            >
              Apply Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;


import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface FooterProps {
  universityName: string;
}

const Footer: React.FC<FooterProps> = ({ universityName }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{universityName}</h3>
            <p className="text-sm mb-4">
              Leading the way in higher education with world-class facilities, expert faculty, and excellent placement records.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-400 transition">
                  Courses
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-blue-400 transition">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#placements" className="hover:text-blue-400 transition">
                  Placements
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-blue-400 transition">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Engineering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Law
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Pharmacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Agriculture
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-blue-400" />
                <span>University Campus, Main Road, City - 144001, State, India</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-blue-400" />
                <a href="tel:+911234567890" className="hover:text-blue-400 transition">
                  +91 123-456-7890
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" />
                <a href="mailto:info@university.edu" className="hover:text-blue-400 transition">
                  info@university.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {universityName}. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-blue-400 transition">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-blue-400 transition">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:text-blue-400 transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


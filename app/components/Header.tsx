'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiPaypal } from 'react-icons/si';
import { useCart } from '../context/CartContext';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-amber-500">Gourmet Haven</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${
                isActive('/') ? 'text-amber-500' : 'text-gray-600'
              } hover:text-amber-500 transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className={`${
                isActive('/menu') ? 'text-amber-500' : 'text-gray-600'
              } hover:text-amber-500 transition-colors`}
            >
              Menu
            </Link>
            <Link
              href="/about"
              className={`${
                isActive('/about') ? 'text-amber-500' : 'text-gray-600'
              } hover:text-amber-500 transition-colors`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`${
                isActive('/contact') ? 'text-amber-500' : 'text-gray-600'
              } hover:text-amber-500 transition-colors`}
            >
              Contact
            </Link>
            <Link
              href="/reservation"
              className={`${
                isActive('/reservation') ? 'text-amber-500' : 'text-gray-600'
              } hover:text-amber-500 transition-colors`}
            >
              Reservation
            </Link>
            <Link href="/cart" className="relative">
              <FaShoppingCart className="text-2xl text-gray-600 hover:text-amber-500 transition-colors" />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-amber-500 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`${
                  isActive('/') ? 'text-amber-500' : 'text-gray-600'
                } hover:text-amber-500 transition-colors text-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/menu"
                className={`${
                  isActive('/menu') ? 'text-amber-500' : 'text-gray-600'
                } hover:text-amber-500 transition-colors text-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/about"
                className={`${
                  isActive('/about') ? 'text-amber-500' : 'text-gray-600'
                } hover:text-amber-500 transition-colors text-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`${
                  isActive('/contact') ? 'text-amber-500' : 'text-gray-600'
                } hover:text-amber-500 transition-colors text-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/reservation"
                className={`${
                  isActive('/reservation') ? 'text-amber-500' : 'text-gray-600'
                } hover:text-amber-500 transition-colors text-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                Reservation
              </Link>
              <Link
                href="/cart"
                className="flex items-center space-x-2 text-gray-600 hover:text-amber-500 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Cart</span>
                {getCartItemCount() > 0 && (
                  <span className="bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartItemCount()}
                  </span>
                )}
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
} 
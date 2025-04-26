'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiPaypal } from 'react-icons/si';
import { useCart } from '../context/CartContext';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-amber-500" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-amber-500" />
              <span>123 Restaurant St, City</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaClock className="text-amber-500" />
              <span>Mon-Sun: 11am - 11pm</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiVisa className="text-blue-600" />
              <SiMastercard className="text-red-600" />
              <SiPaypal className="text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.png"
                alt="Gourmet Haven Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-gray-800">Gourmet Haven</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
              About Us
            </Link>
            <Link
              href="/gallery"
              className={`${
                isActive('/gallery') ? 'text-amber-500' : 'text-gray-600'
              } hover:text-amber-500 transition-colors`}
            >
              Gallery
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
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-amber-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
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
                About Us
              </Link>
              <Link
                href="/gallery"
                className={`${
                  isActive('/gallery') ? 'text-amber-500' : 'text-gray-600'
                } hover:text-amber-500 transition-colors`}
              >
                Gallery
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
              <Link href="/cart" className="flex items-center space-x-2 text-gray-600 hover:text-amber-500 transition-colors">
                <FaShoppingCart />
                <span>Cart ({getCartItemCount()})</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 
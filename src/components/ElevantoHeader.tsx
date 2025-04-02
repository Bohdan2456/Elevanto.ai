'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

/**
 * Navigation items for the header
 */
const navigation = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'About', href: '#about' },
]

/**
 * ElevantoHeader - A clean, modern header inspired by Leap's design
 * 
 * Features:
 * - Fixed position with subtle shadow on scroll
 * - Responsive design with mobile menu
 * - Clean typography and spacing
 * - Accessible navigation
 */
export default function ElevantoHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Add scroll detection for subtle shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed w-full bg-white z-50 ${
        scrolled ? 'border-b border-gray-200 shadow-sm' : 'border-b border-gray-100'
      }`}
    >
      <nav className="mx-auto flex items-center justify-between h-16 px-6 lg:px-8 max-w-7xl" aria-label="Global">
        {/* Logo and navigation group */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex-shrink-0 mr-8">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-semibold text-gray-900">elevanto.ai</span>
            </Link>
          </div>
          
          {/* Desktop navigation - now next to logo */}
          <div className="hidden lg:flex lg:items-center">
            <div className="flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to action buttons */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link
            href="#book-demo"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200"
            aria-label="Book a demonstration"
          >
            Book a Demo
          </Link>
          <Link
            href="#get-started"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-all duration-200"
            aria-label="Get started with Elevanto AI"
          >
            Get Started
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div 
        id="mobile-menu"
        className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-gray-900/10 backdrop-blur-sm" 
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu panel */}
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-200">
          <div className="flex items-center justify-between mb-4">
            <Link 
              href="/" 
              className="flex items-center" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-xl font-semibold text-gray-900">elevanto.ai</span>
            </Link>
            <button
              type="button"
              className="rounded-md p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          {/* Mobile navigation */}
          <div className="mt-6">
            <div className="space-y-1 pb-6 border-b border-gray-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile CTA buttons */}
            <div className="mt-6 space-y-4">
              <Link
                href="#book-demo"
                className="block w-full text-center rounded-md border border-gray-300 px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Demo
              </Link>
              <Link
                href="#get-started"
                className="block w-full text-center rounded-md bg-primary px-4 py-2.5 text-base font-medium text-white hover:opacity-90"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 
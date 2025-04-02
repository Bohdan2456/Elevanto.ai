'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'About', href: '#about' },
]

export default function Header() {
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
    <header className={`fixed w-full bg-white z-50 border-b border-gray-100 ${scrolled ? 'shadow-sm' : ''}`}>
      <nav className="mx-auto flex items-center justify-between h-16 px-6 lg:px-8 max-w-7xl" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-none">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold text-gray-900">elevanto.ai</span>
          </Link>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8 lg:justify-center">
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
        
        {/* Call to action buttons */}
        <div className="hidden lg:flex lg:gap-x-4 lg:flex-none">
          <Link
            href="#book-demo"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200"
          >
            Book a Demo
          </Link>
          <Link
            href="#get-started"
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-all duration-200"
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
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        {/* Backdrop */}
        <div className="fixed inset-0 bg-gray-900/10 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        
        {/* Menu panel */}
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-200">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-xl font-semibold text-gray-900">elevanto.ai</span>
            </Link>
            <button
              type="button"
              className="rounded-md p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
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
                className="block w-full text-center rounded-md bg-gray-900 px-4 py-2.5 text-base font-medium text-white hover:bg-gray-800"
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
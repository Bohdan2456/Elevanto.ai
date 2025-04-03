'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

/**
 * Navigation items for the header
 */
const navigation = [
  { 
    name: 'Solutions', 
    href: '#solutions',
    segments: [
      { name: 'For Marketing', href: '#marketing', description: 'Automate campaigns and content creation' },
      { name: 'For Sales', href: '#sales', description: 'Convert leads with AI assistance' },
      { name: 'For Operations', href: '#operations', description: 'Streamline workflows and processes' },
      { name: 'For Customer Support', href: '#support', description: 'Deliver 24/7 automated assistance' },
    ]
  },
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
  const [openSegment, setOpenSegment] = useState<null | string>(null)
  const headerRef = useRef(null)
  
  // Scroll animation values using framer-motion
  const { scrollY } = useScroll()
  const headerHeight = useTransform(scrollY, [0, 100], [72, 64])
  const headerPadding = useTransform(scrollY, [0, 100], [16, 8])
  const headerOpacity = useTransform(scrollY, [0, 30], [1, 0.98])
  
  // Add scroll detection for subtle shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Toggle dropdown menu and handle click outside to close
  const handleToggleSegment = (name: string) => {
    setOpenSegment(prev => (prev === name ? null : name))
  }
  
  useEffect(() => {
    // Close segment menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (openSegment && headerRef.current && !(headerRef.current as any).contains(event.target)) {
        setOpenSegment(null)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [openSegment])

  return (
    <motion.header 
      ref={headerRef}
      style={{ 
        height: headerHeight,
        opacity: headerOpacity,
      }}
      className={`fixed w-full bg-white/[0.98] z-50 backdrop-blur-sm transition-all duration-200 ${
        scrolled ? 'border-b border-gray-200 shadow-sm' : 'border-b border-gray-100'
      }`}
    >
      <motion.nav 
        style={{ paddingTop: headerPadding, paddingBottom: headerPadding }}
        className="mx-auto flex items-center justify-between h-full px-6 lg:px-8 max-w-7xl" 
        aria-label="Global"
      >
        {/* Logo and navigation group */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex-shrink-0 mr-8">
            <Link href="/" className="flex items-center">
              <span className={`text-xl font-semibold text-gray-900 transition-all duration-200 ${scrolled ? 'scale-95' : ''}`}>elevanto.ai</span>
            </Link>
          </div>
          
          {/* Desktop navigation - now next to logo with segments */}
          <div className="hidden lg:flex lg:items-center">
            <div className="flex space-x-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.segments ? (
                    <button
                      className={`text-sm font-medium hover:text-gray-900 transition-colors duration-200 py-2 px-1 flex items-center gap-1 
                        ${openSegment === item.name ? 'text-gray-900' : 'text-gray-600'}`}
                      onClick={() => handleToggleSegment(item.name)}
                      aria-expanded={openSegment === item.name}
                    >
                      {item.name}
                      <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${openSegment === item.name ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2 px-1"
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {/* Segment dropdown */}
                  {item.segments && (
                    <div 
                      className={`absolute top-full left-0 w-64 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-200 origin-top-left
                        ${openSegment === item.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                    >
                      <div className="p-4 grid gap-3">
                        {item.segments.map((segment) => (
                          <Link
                            key={segment.name}
                            href={segment.href}
                            className="block hover:bg-gray-50 rounded-md p-2 transition-colors"
                            onClick={() => setOpenSegment(null)}
                          >
                            <div className="font-medium text-sm text-gray-900">{segment.name}</div>
                            <div className="text-xs text-gray-500 mt-0.5">{segment.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to action buttons */}
        <div className="hidden lg:flex lg:items-center lg:space-x-3">
          <Link
            href="#book-demo"
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200"
            aria-label="Book a demonstration"
          >
            Book a Demo
          </Link>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="#get-started"
              className="rounded-md bg-gradient-to-r from-primary to-[#0d9976] px-4 py-1.5 text-sm font-medium text-white hover:shadow-md transition-all duration-200"
              aria-label="Get started with Elevanto AI"
            >
              Get Started
            </Link>
          </motion.div>
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
      </motion.nav>
      
      {/* Mobile menu */}
      <div 
        id="mobile-menu"
        className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-gray-900/10 backdrop-blur-sm" 
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu panel */}
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: mobileMenuOpen ? 0 : '100%' }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-200"
        >
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
          
          {/* Mobile navigation with segments */}
          <div className="mt-6">
            <div className="space-y-1 pb-6 border-b border-gray-100">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.segments ? (
                    <>
                      <button
                        className="flex w-full items-center justify-between py-3 text-base font-medium text-gray-900"
                        onClick={() => handleToggleSegment(item.name)}
                      >
                        {item.name}
                        <ChevronDownIcon 
                          className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${openSegment === item.name ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      {/* Mobile segment submenu */}
                      <div className={`mt-1 mb-3 pl-4 space-y-2 ${openSegment === item.name ? 'block' : 'hidden'}`}>
                        {item.segments.map((segment) => (
                          <Link
                            key={segment.name}
                            href={segment.href}
                            className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {segment.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
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
                className="block w-full text-center rounded-md bg-gradient-to-r from-primary to-[#0d9976] px-4 py-2.5 text-base font-medium text-white hover:opacity-95"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
            
            {/* Quick contact for mobile */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-2">Need immediate assistance?</p>
              <a 
                href="mailto:hello@elevanto.ai" 
                className="text-sm text-primary hover:text-primary-dark"
              >
                hello@elevanto.ai
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
} 
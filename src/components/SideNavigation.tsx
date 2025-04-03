'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Section {
  id: string
  label: string
  icon?: JSX.Element
}

const sections: Section[] = [
  { 
    id: 'hero', 
    label: 'Overview',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  { 
    id: 'core-services', 
    label: 'Solutions',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  { 
    id: 'how-it-works', 
    label: 'How It Works',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  { 
    id: 'pricing', 
    label: 'Pricing',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    id: 'call-to-action', 
    label: 'Contact',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
]

export default function SideNavigation() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [progress, setProgress] = useState<Record<string, number>>({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // After mounting, wait a bit and then show the navigation with animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Function to calculate which section is currently in view
    const calculateSectionVisibility = () => {
      const newProgress: Record<string, number> = {}
      let maxVisibleSection = ''
      let maxVisibility = 0

      sections.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const windowHeight = window.innerHeight
          
          // Calculate how much of the section is visible
          const visibleTop = Math.max(0, rect.top < 0 ? 0 : rect.top)
          const visibleBottom = Math.min(windowHeight, rect.bottom)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          
          // Calculate visibility as a percentage of the section height
          const visibility = visibleHeight / rect.height
          newProgress[id] = Math.min(Math.max(visibility, 0), 1) // Clamp between 0 and 1
          
          if (newProgress[id] > maxVisibility && rect.top < windowHeight / 2) {
            maxVisibility = newProgress[id]
            maxVisibleSection = id
          }
        }
      })

      setProgress(newProgress)
      if (maxVisibleSection) {
        setActiveSection(maxVisibleSection)
      }
    }

    // Set up scroll listener
    window.addEventListener('scroll', calculateSectionVisibility)
    calculateSectionVisibility() // Initial calculation

    return () => {
      window.removeEventListener('scroll', calculateSectionVisibility)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust for header
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.div 
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block"
      initial={{ opacity: 0, x: 50 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        x: isVisible ? 0 : 50 
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-full py-5 px-1">
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`group flex items-center p-3 rounded-full relative ${
                  activeSection === section.id 
                    ? 'text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label={`Navigate to ${section.label}`}
              >
                {/* Background circle with progress animation */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill={activeSection === section.id ? 'rgba(4, 42, 18, 0.9)' : 'transparent'} 
                  />
                  
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke={activeSection === section.id ? 'rgba(13, 153, 118, 0.5)' : 'rgba(4, 42, 18, 0.1)'}
                    strokeWidth="2"
                    strokeDasharray={2 * Math.PI * 45}
                    strokeDashoffset={2 * Math.PI * 45 * (1 - (progress[section.id] || 0))}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                
                {/* Icon */}
                <span className="relative z-10">
                  {section.icon}
                </span>
                
                {/* Label tooltip */}
                <span 
                  className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 
                    rounded-md py-1 px-2.5 text-sm font-medium tracking-wide bg-white shadow-md whitespace-nowrap"
                >
                  {section.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
} 
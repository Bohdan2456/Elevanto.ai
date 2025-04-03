'use client'

import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/solid'

type NextStepProps = {
  nextSectionId: string
  label?: string
  sublabel?: string
  align?: 'left' | 'center' | 'right'
  variant?: 'default' | 'light' | 'dark'
}

export default function NextStep({ 
  nextSectionId, 
  label = 'Next',
  sublabel = 'See what comes next',
  align = 'center',
  variant = 'default' 
}: NextStepProps) {
  
  const scrollToNextSection = () => {
    const element = document.getElementById(nextSectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Account for header height
        behavior: 'smooth'
      })
    }
  }
  
  // Determine color scheme based on variant
  const colorClasses = {
    default: {
      container: 'bg-white',
      button: 'bg-gradient-to-r from-primary to-[#0d9976] text-white shadow-lg',
      label: 'text-gray-900',
      sublabel: 'text-gray-500'
    },
    light: {
      container: 'bg-white',
      button: 'bg-gray-900 text-white shadow-lg',
      label: 'text-gray-900',
      sublabel: 'text-gray-500' 
    },
    dark: {
      container: 'bg-gray-900',
      button: 'bg-white text-gray-900 shadow-lg',
      label: 'text-white',
      sublabel: 'text-gray-300'
    }
  }[variant]
  
  // Determine alignment classes
  const alignClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right'
  }[align]
  
  return (
    <div className={`py-10 ${colorClasses.container}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${alignClasses}`}>
          <div className="mb-4">
            <h3 className={`text-xl font-semibold ${colorClasses.label}`}>{label}</h3>
            <p className={`mt-1 text-sm ${colorClasses.sublabel}`}>{sublabel}</p>
          </div>
          
          <motion.button
            onClick={scrollToNextSection}
            className={`rounded-full w-12 h-12 flex items-center justify-center ${colorClasses.button} hover:scale-110 transition-transform duration-300`}
            whileHover={{ y: [0, -5, 0] }}
            transition={{ 
              y: { 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut" 
              },
              scale: { duration: 0.2 }
            }}
            aria-label={`Scroll to ${nextSectionId} section`}
          >
            <ArrowDownIcon className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </div>
  )
} 
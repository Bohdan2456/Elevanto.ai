'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import ClientLogos from './ClientLogos'
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative isolate pt-14 overflow-hidden">
      {/* Enhanced animated background with multiple gradients */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <motion.div
          initial={{ opacity: 0.1, scale: 0.9 }}
          animate={{ 
            opacity: [0.1, 0.15, 0.1], 
            scale: [0.9, 1.1, 0.9],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      {/* Second floating gradient */}
      <div className="absolute inset-x-0 top-[40%] -z-10 transform-gpu overflow-hidden blur-3xl">
        <motion.div
          initial={{ opacity: 0.1, scale: 0.9 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1], 
            scale: [0.9, 1.1, 0.9],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0ea5e9] to-[#9089fc] opacity-15 sm:left-[calc(50%+8rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Enhanced text content with animation sequence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="inline-flex items-center gap-x-1.5 rounded-md px-3 py-1.5 mb-6 text-sm font-medium text-white bg-gradient-to-r from-primary to-[#0d9976] shadow-sm"
            >
              <span className="animate-pulse">⚡</span> 
              <span className="font-semibold">New</span> - AI Voice Agent now available
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            >
              <span className="block">Elevate your</span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0d9976] pb-1"
              >
                efficiency
              </motion.span>
              <span className="block">with AI</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-50 border border-gray-100 rounded-lg p-4 mt-6 shadow-sm"
            >
              <p className="text-lg leading-8 text-gray-600">
                Build custom AI automation to scale your marketing, sales, and operations—making your team <span className="font-bold text-primary">10x more efficient</span>.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <Link
                href="#start-free"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-[#0d9976] px-8 py-3.5 text-base font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Build Your First Workflow
                  <motion.span
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.span>
                </span>
                <motion.span 
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  animate={{ x: isHovered ? '0%' : '-100%' }}
                  transition={{ duration: 0.4 }}
                  style={{ mixBlendMode: 'overlay', opacity: 0.2 }}
                />
              </Link>
              
              <Link
                href="#watch-demo"
                className="rounded-lg border border-gray-300 px-8 py-3.5 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors flex items-center"
              >
                <PlayIcon className="h-4 w-4 mr-2 text-primary" />
                Watch demo
              </Link>
            </motion.div>
            
            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-8 flex items-center"
            >
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br ${
                    i === 0 ? 'from-blue-500 to-blue-600' :
                    i === 1 ? 'from-green-500 to-green-600' :
                    i === 2 ? 'from-amber-500 to-amber-600' :
                    'from-purple-500 to-purple-600'
                  }`} />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">300+</span> businesses automating their workflows
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column - Interactive Workflow Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative rounded-2xl bg-white shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="relative w-full bg-white rounded-2xl p-6 sm:p-8">
              {/* Enhanced background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-2xl" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Header with enhanced design */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.3 }}
                      className="w-2 h-2 rounded-full bg-green-500"
                    />
                    <p className="text-sm font-medium text-gray-900">Workflow Builder Live</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-xs font-medium rounded-full bg-primary/10 text-primary px-2.5 py-1">
                      Powered by Elevanto AI
                    </div>
                    
                    <div className="flex space-x-2">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="w-9 h-9 bg-[#7C3AED] rounded-lg flex items-center justify-center p-2 cursor-pointer shadow-sm"
                      >
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path fill="white" d="M449.146 84.03a39.311 39.311 0 0 0-12.904-30.235 39.312 39.312 0 0 0-30.211-12.902c-11.728 0-23.08 4.441-31.799 12.522L84.3 334.293c-1.947 1.933-3.411 4.263-4.297 6.826l-32.375 93.928a13.81 13.81 0 0 0 3.289 14.468 13.8 13.8 0 0 0 9.738 4.01c1.615 0 3.242-.269 4.817-.818l96.726-33.345c2.622-.903 4.979-2.4 6.938-4.394l289.964-280.866a44.494 44.494 0 0 0 13.197-31.671c0-6.626-1.45-13.18-4.151-19.402Zm-28.049 10.763-286.24 277.258c-.672.654-1.473.999-2.278 1.254l-69.222 23.892 23.446-68.029c.255-.811.622-1.636 1.33-2.337l247.937-247.49 85.027 1.515v13.937ZM100.727 478.852l3.915-11.748-6.96-6.961-11.943 4.018 15.172 14.691h-.184Z"/>
                        </svg>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="w-9 h-9 bg-gradient-to-b from-[#4776E6] to-[#8E54E9] rounded-lg flex items-center justify-center p-2 cursor-pointer shadow-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                          <path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4Z" fill="#fff"/>
                          <path d="M21.9 17.6c0-.9-1-1.3-1.6-1.5-1.8-.7-3.7-1.1-5.3-.8-.3.1-.8.2-1 .6-.2.6.2 1.2.5 1.6.5.4 1.2.5 1.8.6 1.5.2 3.1.2 4.4-.5.6-.3 1.1-1.2.5-2.3-.4-.7-1.2-1-1.9-1.2-2.9-.5-6.7 0-7.6 3.3-.2.7 0 1.4.2 2 .6 1.1 1.8 1.5 3 1.6 1.4.2 2.7.1 4.2-.1.4-.1.9-.2 1.3-.5 1.1-.6 1.8-1.5 1.5-2.8z" fill="#4776E6"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Workflow Steps with enhanced animation */}
                <div className="space-y-6 relative">
                  {/* Connecting Lines */}
                  <div className="absolute left-5 top-14 w-[2px] h-[calc(100%-32px)] bg-gradient-to-b from-indigo-200 via-blue-200 to-teal-200" />
                  
                  {/* Trigger - enhanced with motion */}
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-indigo-200 transition-all duration-300 relative cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 relative z-10">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-500">Trigger</div>
                        <div className="text-sm font-semibold">On Slack Message</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Web Page Scrape */}
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.4 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-blue-200 transition-all duration-300 relative cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 relative z-10">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-500">Web Page Scrape</div>
                        <div className="text-sm font-semibold">Scrape Website</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* LLM */}
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.4 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-purple-200 transition-all duration-300 relative cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 relative z-10">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-500">LLM</div>
                        <div className="text-sm font-semibold">Draft Twitter Thread</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Typefully */}
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.4 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-teal-200 transition-all duration-300 relative cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4 relative z-10">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-500">Typefully</div>
                        <div className="text-sm font-semibold">Create Draft</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Try It button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7, duration: 0.4 }}
                    className="mt-6 flex justify-center"
                  >
                    <button className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark">
                      Try building this workflow
                      <ArrowRightIcon className="ml-1.5 h-3 w-3" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trusted by section */}
        <div className="mt-16 sm:mt-24">
          <ClientLogos />
        </div>
      </div>
    </div>
  )
} 
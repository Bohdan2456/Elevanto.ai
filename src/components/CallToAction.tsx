'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <div className="bg-[#f0faf5] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
            >
              Ready to elevate your business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl leading-8 text-gray-600"
            >
              Schedule a free consultation to learn how our AI solutions can transform your operations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-4"
            >
              <Link
                href="#schedule-call"
                className="rounded-lg bg-[#042a12] px-8 py-3 text-base font-medium text-white hover:bg-opacity-90 transition-colors"
              >
                Schedule a Call
              </Link>
              <Link
                href="#pricing"
                className="rounded-lg border border-gray-300 px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors"
              >
                View pricing
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column - Workflow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative rounded-xl bg-white p-6 shadow-sm"
          >
            {/* Workflow Steps */}
            <div className="space-y-6">
              {/* Trigger Step */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Trigger</h3>
                  <p className="text-sm text-gray-500">When user sends a message</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Google Sheets Step */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Google Sheets</h3>
                  <p className="text-sm text-gray-500">Insert/Update Row</p>
                </div>
              </div>

              {/* Add Action Button */}
              <div className="flex justify-center">
                <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Add Action</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import ClientLogos from './ClientLogos'

export default function Hero() {
  return (
    <div className="relative isolate pt-14 overflow-hidden">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            >
              <span className="block">Elevate your</span>
              <span className="block font-bold italic text-primary">efficiency</span>
              <span className="block">with AI</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Build custom AI automation to scale your marketing, sales, and operations—making your team 10x more efficient.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <Link
                href="#start-free"
                className="rounded-lg bg-[#042a12] px-8 py-3 text-base font-medium text-white hover:bg-opacity-90 transition-colors"
              >
                Start for free
              </Link>
              <Link
                href="#talk-sales"
                className="rounded-lg border border-gray-300 px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Talk to sales
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right column - New Workflow UI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl bg-white shadow-2xl overflow-hidden"
          >
            <div className="relative w-full bg-white rounded-2xl p-8">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-2xl" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* AI Partners */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-500">Powered by Elevanto AI</p>
                  <div className="flex space-x-2">
                    {/* OpenAI Logo */}
                    <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center p-1">
                      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="white">
                        <path d="M474.123 209.81c11.525-34.577 7.569-72.423-10.838-103.904-27.696-48.168-83.433-72.94-137.794-61.414a127.14 127.14 0 00-95.475-42.49c-55.564 0-104.936 35.781-122.139 88.593-35.781 7.397-66.574 29.76-84.637 61.414-27.868 48.167-21.503 108.72 15.826 150.007-11.525 34.578-7.569 72.424 10.838 103.733 27.696 48.34 83.433 73.111 137.966 61.585 24.084 27.18 58.833 42.835 95.303 42.663 55.564 0 104.936-35.782 122.139-88.594 35.782-7.397 66.574-29.76 84.465-61.413 28.04-48.168 21.676-108.722-15.654-150.008v-.172zm-39.567-87.218c11.01 19.267 15.139 41.803 11.354 63.65-.688-.516-2.064-1.204-2.924-1.72l-101.152-58.49a16.965 16.965 0 00-16.687 0L206.621 194.5v-50.232l97.883-56.597c45.587-26.32 103.732-10.666 130.052 34.921zm-227.935 104.42l49.888-28.9 49.887 28.9v57.63l-49.887 28.9-49.888-28.9v-57.63zm23.223-191.81c22.364 0 43.867 7.742 61.07 22.02-.688.344-2.064 1.204-3.097 1.72L186.666 117.26c-5.161 2.925-8.258 8.43-8.258 14.45v136.934l-43.523-25.116V130.333c0-52.64 42.491-95.13 95.131-95.302l-.172.172zM52.14 168.697c11.182-19.268 28.557-34.062 49.544-41.803V247.14c0 6.02 3.097 11.354 8.258 14.45l118.354 68.295-43.695 25.288-97.711-56.425c-45.415-26.32-61.07-84.465-34.75-130.052zm26.665 220.71c-11.182-19.095-15.139-41.802-11.354-63.65.688.516 2.064 1.204 2.924 1.72l101.152 58.49a16.965 16.965 0 0016.687 0l118.354-68.467v50.232l-97.883 56.425c-45.587 26.148-103.732 10.665-130.052-34.75h.172zm204.54 87.39c-22.192 0-43.867-7.741-60.898-22.02a62.439 62.439 0 003.097-1.72l101.152-58.317c5.16-2.924 8.429-8.43 8.257-14.45V243.527l43.523 25.116v113.022c0 52.64-42.663 95.303-95.131 95.303v-.172zM461.22 343.303c-11.182 19.267-28.729 34.061-49.544 41.63V264.687c0-6.021-3.097-11.526-8.257-14.45L284.893 181.77l43.523-25.116 97.883 56.424c45.587 26.32 61.07 84.466 34.75 130.053l.172.172z"/>
                      </svg>
                    </div>
                    {/* Grok Logo */}
                    <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center p-1">
                      <svg viewBox="0 0 512 509.641" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="M213.235 306.019l178.976-180.002v.169l51.695-51.763c-.924 1.32-1.86 2.605-2.785 3.89-39.281 54.164-58.46 80.649-43.07 146.922l-.09-.101c10.61 45.11-.744 95.137-37.398 131.836-46.216 46.306-120.167 56.611-181.063 14.928l42.462-19.675c38.863 15.278 81.392 8.57 111.947-22.03 30.566-30.6 37.432-75.159 22.065-112.252-2.92-7.025-11.67-8.795-17.792-4.263l-124.947 92.341zm-25.786 22.437l-.033.034L68.094 435.217c7.565-10.429 16.957-20.294 26.327-30.149 26.428-27.803 52.653-55.359 36.654-94.302-21.422-52.112-8.952-113.177 30.724-152.898 41.243-41.254 101.98-51.661 152.706-30.758 11.23 4.172 21.016 10.114 28.638 15.639l-42.359 19.584c-39.44-16.563-84.629-5.299-112.207 22.313-37.298 37.308-44.84 102.003-1.128 143.81z"/>
                      </svg>
                    </div>
                    {/* Perplexity Logo */}
                    <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center p-1">
                      <svg viewBox="0 0 512 509.64" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="M348.851 128.063l-68.946 58.302h68.946v-58.302zm-83.908 48.709l100.931-85.349v94.942h32.244v143.421h-38.731v90.004l-94.442-86.662v83.946h-17.023v-83.906l-96.596 86.246v-89.628h-37.445V186.365h38.732V90.768l95.309 84.958v-83.16h17.023l-.002 84.206zm-29.209 26.616c-34.955.02-69.893 0-104.83 0v109.375h20.415v-27.121l84.415-82.254zm41.445 0l82.208 82.324v27.051h21.708V203.388c-34.617 0-69.274.02-103.916 0zm-42.874-17.023l-64.669-57.646v57.646h64.669zm13.617 124.076v-95.2l-79.573 77.516v88.731l79.573-71.047zm17.252-95.022v94.863l77.19 70.83c0-29.485-.012-58.943-.012-88.425l-77.178-77.268z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Workflow Steps */}
                <div className="space-y-6 relative">
                  {/* Connecting Lines */}
                  <div className="absolute left-5 top-14 w-[2px] h-[calc(100%-32px)] bg-gray-200" />
                  
                  {/* Trigger */}
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-primary/20 transition-colors relative">
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
                  </div>

                  {/* Process Steps */}
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-primary/20 transition-colors relative">
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
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-primary/20 transition-colors relative">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 relative z-10">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-500">LLM</div>
                          <div className="text-sm font-semibold">Draft Twitter Thread</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Final Step */}
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-primary/20 transition-colors relative">
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
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trusted by section */}
        <div className="mt-24">
          <ClientLogos />
        </div>
      </div>
      
      {/* Removed decorative shape */}
    </div>
  )
} 
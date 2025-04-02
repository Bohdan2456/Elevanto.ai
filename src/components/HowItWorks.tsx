'use client'

import { 
  PencilSquareIcon,
  PuzzlePieceIcon,
  CogIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ChatBubbleLeftIcon,
  ClockIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Design Effortlessly",
      description: "Create AI workflows in minutes with a simple drag-and-drop interface",
      visual: (
        <div className="mt-8">
          <div className="mb-4">
            <div className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-600">
              <span className="mr-1">+</span> Trigger
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-3 mb-6 bg-white">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3 mt-1">
                <div className="w-5 h-5 rounded-full bg-purple-500"></div>
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-600">When user sends a message</div>
              </div>
              <div className="flex-shrink-0 ml-2">
                <div className="text-gray-400">...</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center my-6">
            <div className="w-px h-16 border-r border-dashed border-gray-300 mx-2"></div>
            <div className="w-px h-16 border-r border-dashed border-gray-300 mx-2"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 p-3 bg-white">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 rounded-md bg-green-50 flex items-center justify-center">
                    <span className="text-green-600 font-medium">G</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Google Sheets</div>
                  <div className="text-xs text-gray-500">Insert/Update Row</div>
                </div>
                <div className="ml-auto text-gray-400">...</div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 p-3 bg-white">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center">
                    <span className="text-blue-600 font-medium">S</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Slack</div>
                  <div className="text-xs text-gray-500">Send Message</div>
                </div>
                <div className="ml-auto text-gray-400">...</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 2,
      title: "Integrate Seamlessly",
      description: "Connect with your favorite tools instantly",
      visual: (
        <div className="mt-8">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {/* Row 1 */}
            <div className="aspect-square flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#FFFFFF"/>
                  <path d="M10 8L14 12L10 16" stroke="#888888" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="aspect-square flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#EA4335"/>
                  <path d="M6 10L12 14L18 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="aspect-square flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#34A853"/>
                  <path d="M7 8H17V16H7V8Z" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="aspect-square flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#6264A7"/>
                  <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            <div className="aspect-square flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#FF5A5F"/>
                  <path d="M8 12H16M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="aspect-square flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#000000"/>
                  <path d="M7 12L17 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            
            {/* Row 3 */}
            <div className="aspect-square flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#F2F2F2"/>
                  <circle cx="12" cy="12" r="6" fill="#E91E63"/>
                </svg>
              </div>
            </div>
            <div className="aspect-square flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center opacity-40">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#DDDDDD"/>
                </svg>
              </div>
            </div>
            <div className="aspect-square flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center opacity-40">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#DDDDDD"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: "Run Automatically",
      description: "Trigger workflows or set them on autopilot",
      visual: (
        <div className="mt-8">
          <div className="text-sm font-medium text-gray-700 mb-3">Choose trigger type</div>
          
          <div className="rounded-lg border border-gray-200 p-4 bg-white mb-4 hover:border-blue-500 transition-colors cursor-pointer">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 rounded-md bg-teal-50 flex items-center justify-center">
                  <ChatBubbleLeftIcon className="h-5 w-5 text-teal-600" />
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-teal-600">Chat Message</div>
                <p className="text-xs text-gray-500 mt-1">Trigger on incoming chat messages</p>
              </div>
              <div className="ml-auto flex">
                <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-teal-500"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-4 bg-white cursor-pointer hover:border-blue-500 transition-colors">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 rounded-md bg-gray-50 flex items-center justify-center">
                  <ClockIcon className="h-5 w-5 text-gray-600" />
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-600">Schedule</div>
                <p className="text-xs text-gray-500 mt-1">Trigger on a specified schedule</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 4,
      title: "Monitor & Optimize",
      description: "Track performance with real-time analytics",
      visual: (
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm font-medium text-gray-700">Executions</div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              Weekly <span className="ml-1">▾</span>
            </div>
          </div>
          
          <div className="mb-2">
            <div className="flex justify-between text-xs text-gray-500">
              <div>1k+</div>
              <div>510</div>
            </div>
          </div>
          
          <div className="relative h-32 w-full mb-2">
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                {/* Light gray background line */}
                <path 
                  d="M0,70 C20,60 40,80 60,65 C80,50 100,60 120,55 C140,50 160,65 180,85 C200,70 220,40 240,50 C260,60 280,70 300,60" 
                  stroke="#E5E7EB" 
                  strokeWidth="2" 
                  fill="none" 
                />
                
                {/* Blue line */}
                <path 
                  d="M0,70 C20,60 40,80 60,65 C80,50 100,60 120,55 C140,50 160,65 180,85 C200,70 220,40 240,50 C260,60 280,70 300,60" 
                  stroke="#3B82F6" 
                  strokeWidth="2" 
                  fill="none" 
                />
                
                {/* Orange dot highlight */}
                <circle cx="180" cy="85" r="4" fill="#F59E0B" />
                <circle cx="180" cy="85" r="6" fill="#F59E0B" fillOpacity="0.3" />
              </svg>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs text-gray-500">
              <div>150</div>
              <div>100</div>
              <div>50</div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 5,
      title: "Relax & Scale",
      description: "Save thousands of hours as your AI works for you",
      visual: (
        <div className="mt-8">
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <div className="flex-1 bg-blue-50 rounded-xl p-3">
              <p className="text-sm text-gray-700">Hi! I can help you create Twitter threads. Just let me know here if you want to start a new thread, or feel free to add me to any conversations, just like you would with an executive assistant!</p>
            </div>
          </div>
          
          <div className="mt-4 ml-12">
            <p className="text-xs text-gray-500 mb-2">Create a Twitter thread based on this article:</p>
            <div className="flex items-center">
              <div className="flex-1 text-sm text-blue-500 truncate">
                https://www.k-fun.com/blog/apple-intelligence
              </div>
              <div className="flex-shrink-0 ml-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-8" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            How it works
          </h2>
          <p className="mt-3 text-xl text-gray-600 font-normal max-w-xl mx-auto">
            Build, deploy and scale custom AI workflows without code.
          </p>
        </div>

        {/* First row: 2 steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {steps.slice(0, 2).map((step) => (
            <div key={step.number} className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-xl font-semibold text-gray-800">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Visual example for each step */}
              {step.visual}
            </div>
          ))}
        </div>

        {/* Second row: 3 steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.slice(2, 5).map((step) => (
            <div key={step.number} className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-xl font-semibold text-gray-800">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Visual example for each step */}
              {step.visual}
            </div>
          ))}
        </div>
      </div>
      
      {/* Help button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gray-900 text-white rounded-full p-4 shadow-lg flex items-center transition-all hover:bg-gray-800">
          <QuestionMarkCircleIcon className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">Get help</span>
        </button>
      </div>
    </section>
  );
} 
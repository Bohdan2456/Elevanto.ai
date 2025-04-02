'use client'

import { useState } from 'react'
import { 
  ArrowPathIcon, 
  ChatBubbleBottomCenterTextIcon, 
  MicrophoneIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog6ToothIcon,
  BellAlertIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const services = [
  {
    id: 'automated-workflows',
    name: 'Automated Workflows',
    title: 'Build custom workflows without code',
    description: 'Create automated workflows that connect your favorite apps and services to eliminate repetitive tasks and streamline your operations.',
    benefits: [
      'Save 15+ hours per week on manual tasks',
      'Connect 1000+ apps and services',
      'No coding skills required'
    ],
    icon: ArrowPathIcon,
    color: 'indigo',
    workflowTitle: 'Stripe → Slack Integration',
    workflowSteps: [
      { name: 'Trigger', description: 'New Payment in Stripe' },
      { name: 'Action', description: 'Send Channel Message in Slack' }
    ]
  },
  {
    id: 'ai-chatbots',
    name: 'AI Chat Bots',
    title: 'Intelligent conversations for your customers',
    description: 'Deploy AI-powered chatbots that understand natural language, answer questions, and solve problems 24/7 without human intervention.',
    benefits: [
      'Respond to customers instantly',
      'Handle unlimited conversations simultaneously',
      'Continuously improve with each interaction'
    ],
    icon: ChatBubbleBottomCenterTextIcon,
    color: 'blue',
    workflowTitle: 'Customer Support Automation',
    workflowSteps: [
      { name: 'Customer', description: 'Asks question on website' },
      { name: 'AI Processing', description: 'Analyzes intent and context' },
      { name: 'Response', description: 'Delivers accurate solution' }
    ]
  },
  {
    id: 'ai-voice-agent',
    name: 'Real-time AI Voice Agent',
    title: 'Human-like voice interactions in real-time',
    description: 'Deploy voice agents that sound natural, understand context, and handle complex conversations for sales, support, and appointment scheduling.',
    benefits: [
      'Handle calls 24/7 without staffing costs',
      'Process multiple calls simultaneously',
      'Seamlessly transfer to humans when needed'
    ],
    icon: MicrophoneIcon,
    color: 'emerald',
    workflowTitle: 'Voice Agent Call Flow',
    workflowSteps: [
      { name: 'Incoming Call', description: 'Customer initiates contact' },
      { name: 'Voice Analysis', description: 'Processes speech and intent' },
      { name: 'Response', description: 'Provides spoken solution' }
    ]
  },
]

const colorClasses = {
  indigo: {
    light: 'bg-indigo-50',
    medium: 'bg-indigo-100',
    text: 'text-indigo-600',
    border: 'border-indigo-200',
    hover: 'hover:bg-indigo-100',
    icon: 'text-indigo-500'
  },
  blue: {
    light: 'bg-blue-50',
    medium: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-200',
    hover: 'hover:bg-blue-100',
    icon: 'text-blue-500'
  },
  emerald: {
    light: 'bg-emerald-50',
    medium: 'bg-emerald-100',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
    hover: 'hover:bg-emerald-100',
    icon: 'text-emerald-500'
  }
}

export default function CoreServices() {
  // Track which category is expanded
  const [expandedCategory, setExpandedCategory] = useState('automated-workflows');

  // Toggle category expansion
  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(categoryId === expandedCategory ? '' : categoryId);
  };

  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Transform your business with AI solutions
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Discover how AI can transform your marketing, sales, and operations workflows
          </p>
        </div>
        
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {services.map((service) => {
              const isExpanded = service.id === expandedCategory;
              const colors = colorClasses[service.color as keyof typeof colorClasses];
              
              return (
                <div 
                  key={service.id} 
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'col-span-3 bg-white shadow-xl' : 'bg-white shadow-md hover:shadow-lg'
                  }`}
                >
                  {/* Service Card Header */}
                  <div 
                    onClick={() => toggleCategory(service.id)}
                    className={`cursor-pointer transition-colors ${isExpanded ? 'border-b border-gray-200' : ''}`}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-2 rounded-xl ${colors.light}`}>
                            <service.icon className={`h-6 w-6 ${colors.icon}`} aria-hidden="true" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {service.name}
                          </h3>
                        </div>
                        {!isExpanded && (
                          <div className={`text-sm font-medium ${colors.text}`}>Learn more</div>
                        )}
                        {isExpanded ? 
                          <ChevronUpIcon className="h-5 w-5 text-gray-500" /> : 
                          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                        }
                      </div>
                      
                      {!isExpanded && (
                        <p className="mt-4 text-sm text-gray-600 line-clamp-2">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Expanded Content */}
                  {isExpanded && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-6"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Left Column - Text Content */}
                        <div className="lg:col-span-2 space-y-6">
                          <div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-3">
                              {service.title}
                            </h4>
                            <p className="text-base text-gray-600">
                              {service.description}
                            </p>
                          </div>
                          
                          <div className="space-y-4 pt-4">
                            <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Key Benefits</h5>
                            {service.benefits.map((benefit, index) => (
                              <div key={index} className={`flex p-3 rounded-lg ${colors.light} items-start space-x-3`}>
                                <CheckCircleIcon className={`h-5 w-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                                <span className="text-gray-700 font-medium">{benefit}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="pt-4">
                            <button className="inline-flex items-center rounded-lg bg-[#042a12] px-6 py-3 text-sm font-medium text-white hover:bg-opacity-90 transition-colors">
                              Try Now
                              <ArrowRightIcon className="ml-2 h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Right Column - Visual Demo */}
                        <div className="lg:col-span-3 rounded-xl overflow-hidden bg-gray-50 p-6">
                          <div className="mb-6">
                            <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1">Example</h5>
                            <p className="text-lg font-medium text-gray-900">{service.workflowTitle}</p>
                          </div>
                          
                          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                            {/* Demo Interface Header */}
                            <div className="bg-gray-50 border-b border-gray-200 px-6 py-3 flex items-center justify-between">
                              <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                              </div>
                              <div className="text-xs font-medium text-gray-500">
                                {service.id === 'automated-workflows' ? 'Workflow Builder' : 
                                 service.id === 'ai-chatbots' ? 'Chat Interface' : 'Voice Agent Console'}
                              </div>
                              <div></div>
                            </div>
                            
                            {/* Demo Content */}
                            <div className="p-6">
                              <div className="space-y-4">
                                {service.workflowSteps.map((step, index, array) => (
                                  <div key={index} className="relative">
                                    <div className={`flex items-start p-4 rounded-lg ${index === 0 ? `${colors.light} ${colors.border} border` : 'border border-gray-200'}`}>
                                      <div className="flex-shrink-0 mr-4">
                                        <div className={`w-10 h-10 rounded-lg ${
                                          index === 0 ? colors.medium : 'bg-gray-100'
                                        } flex items-center justify-center`}>
                                          {index === 0 ? (
                                            <BellAlertIcon className={`h-5 w-5 ${colors.text}`} />
                                          ) : index === 1 ? (
                                            <Cog6ToothIcon className="h-5 w-5 text-gray-600" />
                                          ) : (
                                            <service.icon className="h-5 w-5 text-gray-600" />
                                          )}
                                        </div>
                                      </div>
                                      <div>
                                        <div className="text-xs font-medium text-gray-500">{step.name}</div>
                                        <div className="text-sm font-semibold">{step.description}</div>
                                      </div>
                                    </div>
                                    
                                    {index < array.length - 1 && (
                                      <div className="absolute left-5 top-[calc(100%)] h-4 border-l-2 border-dashed border-gray-300"></div>
                                    )}
                                  </div>
                                ))}
                              </div>
                              
                              {/* Additional UI Elements */}
                              <div className="mt-6 grid grid-cols-3 gap-2">
                                {service.id === 'automated-workflows' && (
                                  <>
                                    <div className="col-span-2 h-8 bg-gray-100 rounded-md"></div>
                                    <div className="h-8 bg-gray-100 rounded-md"></div>
                                    <div className="col-span-3 h-16 bg-gray-50 rounded-md border border-dashed border-gray-300 flex items-center justify-center">
                                      <span className="text-xs text-gray-400">+ Add another action</span>
                                    </div>
                                  </>
                                )}
                                
                                {service.id === 'ai-chatbots' && (
                                  <>
                                    <div className="col-span-3 h-12 bg-gray-50 rounded-md border border-gray-200 flex items-center px-4">
                                      <span className="text-xs text-gray-500">Type your message...</span>
                                    </div>
                                  </>
                                )}
                                
                                {service.id === 'ai-voice-agent' && (
                                  <>
                                    <div className="col-span-3 flex justify-center space-x-4">
                                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                                        <span className="text-red-600">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                          </svg>
                                        </span>
                                      </div>
                                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                        <span className="text-gray-600">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                                          </svg>
                                        </span>
                                      </div>
                                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                        <span className="text-green-600">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
} 
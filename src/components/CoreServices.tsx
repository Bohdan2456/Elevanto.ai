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
  BellAlertIcon
} from '@heroicons/react/24/outline'

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
    workflowTitle: 'Voice Agent Call Flow',
    workflowSteps: [
      { name: 'Incoming Call', description: 'Customer initiates contact' },
      { name: 'Voice Analysis', description: 'Processes speech and intent' },
      { name: 'Response', description: 'Provides spoken solution' }
    ]
  },
]

export default function CoreServices() {
  // Track which category is expanded
  const [expandedCategory, setExpandedCategory] = useState('automated-workflows');

  // Toggle category expansion
  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(categoryId === expandedCategory ? '' : categoryId);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pt-16 pb-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Transform your business with AI solutions
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Discover how AI can transform your marketing, sales, and operations workflows
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            {services.map((service) => {
              const isExpanded = service.id === expandedCategory;
              
              return (
                <div key={service.id} className="mb-8 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
                  {/* Category Header (always visible) */}
                  <button 
                    onClick={() => toggleCategory(service.id)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center space-x-4">
                      <service.icon className="h-7 w-7 text-gray-900" aria-hidden="true" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.name}
                      </h3>
                    </div>
                    {isExpanded ? 
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" /> : 
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    }
                  </button>
                  
                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column - Text Content */}
                      <div className="p-6 bg-white">
                        <h4 className="text-lg font-medium text-gray-900 mb-4">
                          {service.title}
                        </h4>
                        <p className="text-base text-gray-600 mb-6">
                          {service.description}
                        </p>
                        
                        <div className="mb-8">
                          {service.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-3 mb-3">
                              <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                        
                        <button className="rounded-lg bg-[#042a12] px-6 py-2.5 text-sm font-medium text-white hover:bg-opacity-90 transition-colors">
                          Try Now
                        </button>
                      </div>
                      
                      {/* Right Column - Visual Workflow */}
                      <div className="bg-[#f5f3ff] p-6 flex flex-col justify-center">
                        <h5 className="text-sm font-medium text-gray-700 mb-4">
                          {service.workflowTitle}
                        </h5>
                        
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          {service.workflowSteps.map((step, index, array) => (
                            <div key={index}>
                              <div className="flex items-start p-3 rounded-lg border border-gray-100">
                                <div className="flex-shrink-0 mr-4">
                                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                    {index === 0 ? (
                                      <BellAlertIcon className="h-5 w-5 text-blue-600" />
                                    ) : index === 1 ? (
                                      <Cog6ToothIcon className="h-5 w-5 text-purple-600" />
                                    ) : (
                                      <service.icon className="h-5 w-5 text-green-600" />
                                    )}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-xs font-medium text-gray-500">{step.name}</div>
                                  <div className="text-sm font-semibold">{step.description}</div>
                                </div>
                              </div>
                              {index < array.length - 1 && (
                                <div className="h-6 w-0 border-l border-dashed border-gray-300 ml-7"></div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
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
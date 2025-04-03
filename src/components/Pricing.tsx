'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckIcon, SparklesIcon } from '@heroicons/react/24/outline'
import NextStep from './NextStep'

const tiers = [
  {
    name: 'Basic',
    id: 'basic',
    price: { monthly: '$99', annual: '$89' },
    description: 'Perfect for small businesses getting started with AI',
    features: [
      'Single AI assistant',
      'Email integration',
      'Basic analytics',
      '40 hours/month',
      'Standard support',
    ],
    cta: 'Build Your First Automation',
    mostPopular: false,
    highlightedFeatures: [0, 1],
  },
  {
    name: 'Pro',
    id: 'pro',
    price: { monthly: '$199', annual: '$179' },
    description: 'Ideal for growing businesses with advanced needs',
    features: [
      '3 AI assistants',
      'Full CRM integration',
      'Advanced analytics',
      '100 hours/month',
      'Priority support',
      'Custom AI training',
    ],
    cta: 'Start 14-Day Free Trial',
    mostPopular: true,
    highlightedFeatures: [1, 2, 5],
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    price: { monthly: '$499', annual: '$449' },
    description: 'For enterprises requiring full customization',
    features: [
      'Unlimited AI assistants',
      'Enterprise integration',
      'Custom reporting',
      'Unlimited usage',
      'Dedicated support team',
      'White-labeling options',
      'SLA guarantees',
    ],
    cta: 'Talk to Sales',
    mostPopular: false,
    highlightedFeatures: [0, 3, 4, 6],
  },
]

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')
  const [hoveredTier, setHoveredTier] = useState<string | null>(null)
  
  // Calculate the annual savings percentage
  const calculateSavings = (monthly: string, annual: string) => {
    const monthlyValue = parseInt(monthly.replace(/\D/g, ''))
    const annualValue = parseInt(annual.replace(/\D/g, ''))
    return Math.round(((monthlyValue - annualValue) / monthlyValue) * 100)
  }

  return (
    <div className="bg-gray-50 py-24 sm:py-32" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3.5xl sm:text-4.5xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the plan that best fits your business needs
          </p>
          
          {/* Billing period toggle */}
          <div className="mt-10 flex justify-center">
            <div className="relative flex rounded-full p-1 bg-gray-200 w-fit">
              <button
                type="button"
                className={`relative py-2 px-6 text-sm font-medium rounded-full whitespace-nowrap focus:outline-none ${
                  billingPeriod === 'monthly' ? 'text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
                
                {/* Background highlight for active state */}
                {billingPeriod === 'monthly' && (
                  <motion.span
                    layoutId="billingTabHighlight"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-[#0d9976] -z-10"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </button>
              <button
                type="button" 
                className={`relative py-2 px-6 text-sm font-medium rounded-full whitespace-nowrap focus:outline-none ${
                  billingPeriod === 'annual' ? 'text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => setBillingPeriod('annual')}
              >
                Annual 
                
                {/* Badge showing discount */}
                <span className="absolute -top-2 -right-2 flex h-5 w-5">
                  <span className="relative z-10 inline-flex items-center justify-center h-5 w-5 text-[10px] font-semibold text-white">
                    <span className="absolute inset-0 rounded-full bg-rose-500 transform rotate-3"></span>
                    <span className="relative">10%</span>
                  </span>
                </span>
                
                {/* Background highlight for active state */}
                {billingPeriod === 'annual' && (
                  <motion.span
                    layoutId="billingTabHighlight"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-[#0d9976] -z-10"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </button>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredTier(tier.id)}
              onHoverEnd={() => setHoveredTier(null)}
              className={`relative flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ${
                tier.mostPopular 
                  ? 'ring-primary shadow-lg' 
                  : 'ring-gray-200 shadow-sm'
              } xl:p-10`}
            >
              {/* Most popular flag */}
              {tier.mostPopular && (
                <div className="absolute -top-5 inset-x-0 flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-[#0d9976] px-4 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/10">
                    <SparklesIcon className="mr-1 h-3 w-3 text-yellow-300" aria-hidden="true" />
                    Most popular
                  </span>
                </div>
              )}
              
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-xl font-semibold leading-8 text-gray-900">{tier.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price[billingPeriod]}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                
                {/* Show savings badge for annual billing */}
                {billingPeriod === 'annual' && (
                  <p className="mt-1 text-sm text-green-600">
                    Save {calculateSavings(tier.price.monthly, tier.price.annual)}% with annual billing
                  </p>
                )}
                
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature} 
                      className={`flex gap-x-3 ${
                        tier.highlightedFeatures.includes(featureIndex) ? 'font-medium' : ''
                      }`}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckIcon 
                        className={`h-6 w-5 flex-none ${
                          tier.highlightedFeatures.includes(featureIndex) 
                            ? 'text-primary' 
                            : 'text-green-500'
                        }`} 
                        aria-hidden="true" 
                      />
                      {feature}
                      
                      {/* Show highlight for key features */}
                      {tier.highlightedFeatures.includes(featureIndex) && (
                        <span className="ml-auto inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                          Key
                        </span>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.div
                whileHover={tier.id !== 'enterprise' ? { scale: 1.05 } : {}}
                transition={{ duration: 0.2 }}
                className="mt-8"
              >
                <Link
                  href={`#${tier.id}`}
                  className={`block w-full rounded-md px-3 py-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    tier.mostPopular
                      ? 'bg-gradient-to-r from-primary to-[#0d9976] text-white shadow-md hover:shadow-lg'
                      : tier.id === 'enterprise'
                        ? 'bg-white text-primary ring-1 ring-inset ring-primary hover:bg-gray-50'
                        : 'bg-white text-gray-900 ring-1 ring-inset ring-gray-200 hover:ring-gray-300'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
              
              {/* Additional banner for most popular plan */}
              {tier.mostPopular && hoveredTier === tier.id && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-5 inset-x-0 flex justify-center"
                >
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/30">
                    No credit card required for trial
                  </span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* FAQ teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-base text-gray-600">
            Have questions about our pricing? <Link href="#faq" className="text-primary font-medium hover:text-primary/80">Check our FAQ</Link> or contact our team.
          </p>
        </motion.div>
      </div>
      
      {/* Next step navigation */}
      <NextStep 
        nextSectionId="call-to-action" 
        label="Ready to get started?" 
        sublabel="Let's discuss your specific needs"
      />
    </div>
  )
} 
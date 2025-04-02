'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/outline'

const tiers = [
  {
    name: 'Basic',
    id: 'basic',
    price: { monthly: '$99' },
    description: 'Perfect for small businesses getting started with AI',
    features: [
      'Single AI assistant',
      'Email integration',
      'Basic analytics',
      '40 hours/month',
      'Standard support',
    ],
    cta: 'Get Started',
    mostPopular: false,
  },
  {
    name: 'Pro',
    id: 'pro',
    price: { monthly: '$199' },
    description: 'Ideal for growing businesses with advanced needs',
    features: [
      '3 AI assistants',
      'Full CRM integration',
      'Advanced analytics',
      '100 hours/month',
      'Priority support',
    ],
    cta: 'Get Started',
    mostPopular: true,
  },
  {
    name: 'Custom',
    id: 'custom',
    price: { monthly: '$499' },
    description: 'For enterprises requiring full customization',
    features: [
      'Unlimited AI assistants',
      'Enterprise integration',
      'Custom reporting',
      'Unlimited usage',
      'Dedicated support team',
    ],
    cta: 'Talk to Sales',
    mostPopular: false,
  },
]

export default function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32" id="pricing">
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                tier.mostPopular ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">{tier.name}</h3>
                  {tier.mostPopular ? (
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
                      Most popular
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price.monthly}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`#${tier.id}`}
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.mostPopular
                    ? 'bg-primary text-white hover:bg-primary/90 focus-visible:outline-primary'
                    : 'bg-white text-primary ring-1 ring-inset ring-primary hover:ring-primary/20'
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 
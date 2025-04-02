'use client'

import { motion } from 'framer-motion'
import { ChatBubbleLeftRightIcon, Cog6ToothIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Customer AI',
    description: 'Automated customer service solutions that provide 24/7 support, handle inquiries efficiently, and deliver personalized experiences.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Process AI',
    description: 'Streamline your operations with intelligent workflow automation, reducing manual tasks and increasing team productivity.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Sales AI',
    description: 'AI-powered sales assistants that help identify opportunities, qualify leads, and close deals more effectively.',
    icon: ChartBarIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32" id="solutions">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Core Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive AI solutions designed to transform your business operations and drive growth.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
} 
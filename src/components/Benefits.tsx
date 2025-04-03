'use client'

import { useEffect } from 'react'
import { ClockIcon, CircleStackIcon, CubeTransparentIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline'

const benefits = [
  {
    name: 'Available Anytime, 24/7',
    description: 'Your AI works around the clock, completing tasks in minutes—no delays, no downtime.',
    icon: ClockIcon,
  },
  {
    name: 'No Drama, Just Results',
    description: 'It\'s not personal—just fast, efficient task completion every time.',
    icon: CircleStackIcon,
  },
  {
    name: 'Full Context of Your Work',
    description: 'It follows your rules and processes, and adapts to new situations effortlessly.',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Perfect Culture Fit',
    description: 'With 300+ integrations, connect any tool you use.',
    icon: PuzzlePieceIcon,
  },
]

export default function Benefits() {
  useEffect(() => {
    console.log('Benefits component mounted')
  }, [])

  return (
    <section id="benefits" className="relative py-24 sm:py-32 bg-white border-t border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center rounded-md bg-[#0c3f20] px-3 py-1 text-sm font-semibold text-white">
            Benefits
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Everything you need, all in one powerful platform.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Leverage our community's efforts with pre-built workflows.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex flex-col bg-[#042a12] rounded-2xl p-8 shadow-lg">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <benefit.icon className="h-6 w-6 flex-none text-white" aria-hidden="true" />
                  {benefit.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
} 
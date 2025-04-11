'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CoreServices from '@/components/CoreServices'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CoreServices />
      <HowItWorks />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
  )
} 
'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import ElevantoHeader from '@/components/ElevantoHeader'
import Hero from '@/components/Hero'
import CoreServices from '@/components/CoreServices'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
import SideNavigation from '@/components/SideNavigation'

export default function Home() {
  // Add smooth scrolling to the page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  
  return (
    <>
      <ElevantoHeader />
      <SideNavigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="core-services">
          <CoreServices />
        </section>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="pricing">
          <Pricing />
        </section>
        
        <section id="call-to-action">
          <CallToAction />
        </section>
      </main>
      
      <Footer />
    </>
  )
} 
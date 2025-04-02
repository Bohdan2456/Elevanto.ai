'use client'

import { useRef, useEffect } from 'react'

const ClientLogos = () => {
  const clients = [
    {
      name: 'Buildspace',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="currentColor" d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-7.28 15h-3v-3.5H7.93V18h-3v-9h3v3.5h1.29V9h3v9zm5.36-6h-1.29v6h-3V9h7.5v3h-3.21z"/>
        </svg>
      )
    },
    {
      name: 'Fluid',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="currentColor" d="M3 6c0-1.1.9-2 2-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm6 1v2h6V7H9zm0 4v2h6v-2H9zm0 4v2h6v-2H9z"/>
        </svg>
      )
    },
    {
      name: 'Dotwork',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      )
    },
    {
      name: 'Mercor',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      name: 'Paraform',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="currentColor" d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h12V4H6zm3 3h6v1H9V7zm0 3h6v1H9v-1zm0 3h6v1H9v-1z"/>
        </svg>
      )
    },
    {
      name: 'Electrada',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="currentColor" d="M12 3v3l3-3h-3zm0 18l3-3h-3v3zm9-9l-3-3v6l3-3zm-18 0l3 3V9l-3 3zm9 0l-3 3h6l-3-3zm0 0l3-3H9l3 3z"/>
        </svg>
      )
    },
    {
      name: 'NotionAI',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="currentColor" d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm1 3v10h14V7H5zm2 2h10v1H7V9zm0 2h10v1H7v-1zm0 2h7v1H7v-1z"/>
        </svg>
      )
    }
  ]

  const scrollContainer = useRef<HTMLDivElement>(null);

  // Handle edge opacity effects with JavaScript for more precise control
  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const handleScroll = () => {
      const logos = container.querySelectorAll('.logo-item');
      const containerWidth = container.offsetWidth;
      
      logos.forEach((logo) => {
        const logoElement = logo as HTMLElement;
        const rect = logoElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        // Distance from left edge of container
        const distanceFromLeft = rect.left - containerRect.left;
        // Distance from right edge of container
        const distanceFromRight = containerRect.right - rect.right;
        
        // Edge thresholds
        const edgeThreshold = containerWidth * 0.15;
        
        // Calculate opacity based on position
        if (distanceFromLeft < edgeThreshold) {
          // Fade out as it approaches left edge
          const opacity = (distanceFromLeft / edgeThreshold) * 0.7;
          logoElement.style.opacity = Math.max(0, opacity).toString();
        } else if (distanceFromRight < edgeThreshold) {
          // Fade in as it enters from right edge
          const opacity = (distanceFromRight / edgeThreshold) * 0.7;
          logoElement.style.opacity = Math.max(0, opacity).toString();
        } else {
          // Full opacity in the middle
          logoElement.style.opacity = '0.7';
        }
      });
    };

    // Initial call
    handleScroll();

    // Set up a regular interval to check positions during animation
    const interval = setInterval(handleScroll, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-12 bg-transparent">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl text-gray-900">
          Best-in-class Workflow Automation for businesses of all sizes.
        </h3>
      </div>
      
      <div className="w-full inline-flex flex-nowrap overflow-hidden logo-container" ref={scrollContainer}>
        <div className="flex items-center justify-center space-x-12 animate-scroll whitespace-nowrap">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-28 h-10 relative grayscale hover:grayscale-0 logo-fade logo-item"
              data-index={index}
            >
              {client.logo}
            </div>
          ))}
          {clients.map((client, index) => (
            <div 
              key={`duplicate-${index}`} 
              className="flex-shrink-0 w-28 h-10 relative grayscale hover:grayscale-0 logo-fade logo-item"
              data-index={index + clients.length}
            >
              {client.logo}
            </div>
          ))}
          {clients.map((client, index) => (
            <div 
              key={`triplicate-${index}`}
              className="flex-shrink-0 w-28 h-10 relative grayscale hover:grayscale-0 logo-fade logo-item"
              data-index={index + clients.length * 2}
            >
              {client.logo}
            </div>
          ))}
        </div>
        
        {/* Duplicate for seamless infinite scroll effect */}
        <div className="flex items-center justify-center space-x-12 animate-scroll whitespace-nowrap" aria-hidden="true">
          {clients.map((client, index) => (
            <div 
              key={`set2-${index}`} 
              className="flex-shrink-0 w-28 h-10 relative grayscale hover:grayscale-0 logo-fade logo-item"
              data-index={index + clients.length * 3}
            >
              {client.logo}
            </div>
          ))}
          {clients.map((client, index) => (
            <div 
              key={`set2-duplicate-${index}`} 
              className="flex-shrink-0 w-28 h-10 relative grayscale hover:grayscale-0 logo-fade logo-item"
              data-index={index + clients.length * 4}
            >
              {client.logo}
            </div>
          ))}
          {clients.map((client, index) => (
            <div 
              key={`set2-triplicate-${index}`} 
              className="flex-shrink-0 w-28 h-10 relative grayscale hover:grayscale-0 logo-fade logo-item"
              data-index={index + clients.length * 5}
            >
              {client.logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientLogos 
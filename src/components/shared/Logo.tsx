import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  scrolled?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', scrolled = false }) => {
  return (
    <Link href="/" className={className}>
      <span 
        className={`text-xl font-semibold text-gray-900 transition-all duration-200 ${
          scrolled ? 'scale-95' : ''
        }`}
      >
        elevanto.ai
      </span>
    </Link>
  );
};

export default Logo; 
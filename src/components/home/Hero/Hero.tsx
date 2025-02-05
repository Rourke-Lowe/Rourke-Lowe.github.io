'use client';

import React from 'react';

interface HeroProps {
  headline: string;
  subtitle?: string;  // Optional subtitle
}

const Hero = ({ headline, subtitle }: HeroProps) => {
  return (
    <div className="space-y-12 pt-20 pb-20">
      <div className="space-y-4">  {/* Added container for headline and subtitle */}
        <h2 className="text-6xl font-serif max-w-2xl">{headline}</h2>
        {subtitle && (
          <p className="text-xl text-gray-400 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
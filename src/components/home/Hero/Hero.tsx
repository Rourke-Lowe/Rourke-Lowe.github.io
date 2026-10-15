'use client';

import React from 'react';

interface HeroProps {
  headline: string;
  subtitle?: string;  // Optional subtitle
}

const Hero = ({ headline, subtitle }: HeroProps) => {
  return (
    <div className="pt-10 lg:pt-20">
      <div className="space-y-4">
        <h2 className="text-[42px] leading-[1.12] lg:text-6xl lg:leading-tight font-serif max-w-2xl text-balance">{headline}</h2>
        {subtitle && (
          <p className="text-lg lg:text-xl text-gray-500 max-w-2xl leading-normal">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
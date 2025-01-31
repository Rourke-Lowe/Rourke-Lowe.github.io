'use client';

import React from 'react';

interface HeroProps {
  headline: string;
}

const Hero = ({ headline }: HeroProps) => {
  return (
    <div className="space-y-12 pt-20 pb-32">
      <h2 className="text-6xl font-serif max-w-2xl">{headline}</h2>
      <div className="flex space-x-4">
        <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800">
          Talk with me
        </button>
        <button className="bg-gray-100 px-8 py-4 rounded-full hover:bg-gray-200">
          See my work
        </button>
      </div>
    </div>
  );
};

export default Hero;
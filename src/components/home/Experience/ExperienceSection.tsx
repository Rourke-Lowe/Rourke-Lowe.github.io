import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experiences } from '@/Data/experiences';

const ExperienceSection = () => {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-serif mb-8">Working experience</h2>
      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            {...experience}
          />
        ))}
      </div>
      
      {/* Resume Button Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">Learn more about my professional experience.</p>
        <a 
          href="/files/Rourke-Lowe-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-gray-50 text-black rounded-full hover:bg-gray-100 transition-colors"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default ExperienceSection;
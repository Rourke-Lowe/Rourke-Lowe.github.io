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
    </div>
  );
};

export default ExperienceSection;
import React from 'react';
import Image from 'next/image';
// Remove ArrowUpRight since it's not being used

interface ExperienceCardProps {
  logo: string;
  role: string;
  company: string;
  period: string;
  description: string; 
}

const ExperienceCard = ({ logo, role, company, period, description }: ExperienceCardProps) => {
  return (
    <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 overflow-hidden">
          <Image 
            src={logo} 
            alt={company} 
            width={80}
            height={80}
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <h3 className="font-medium text-black">{role}</h3>
          <p className="text-gray-600">{company}</p>
          <p className="text-gray-400 text-sm mt-1 max-w-md">{description}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-500">{period}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
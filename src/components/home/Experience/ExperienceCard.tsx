import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ExperienceCardProps {
  logo: string;
  role: string;
  company: string;
  period: string;
}

const ExperienceCard = ({ logo, role, company, period }: ExperienceCardProps) => {
  return (
    <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
          <img src={logo} alt={company} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-medium">{role}</h3>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-500">{period}</span>
        <ArrowUpRight className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
};

export default ExperienceCard;
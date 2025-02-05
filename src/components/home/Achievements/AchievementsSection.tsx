import React from 'react';
import AchievementCard from './AchievementCard';
import { achievements } from '@/Data/achievements';

const AchievementsSection = () => {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-serif mb-8">Achievements & Recognition</h2>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            {...achievement}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
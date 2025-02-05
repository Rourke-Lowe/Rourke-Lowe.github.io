// Server Component
import React from 'react';

interface ProfileContentProps {
  name: string;
  title: string;
  location: string;
  imageUrl: string;
}

const ProfileContent = ({ name, title, location, imageUrl }: ProfileContentProps) => {
  return (
    <div className="space-y-6">
      <div className="w-64 h-64 rounded-3xl overflow-hidden">
        <img 
          src="/images/profileimg.jpeg" 
          alt={`${name}'s profile`} 
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-5xl font-serif">{name}</h1>
      <p className="text-xl text-gray-600">
        {title} based in {location}
      </p>
    </div>
  );
};

export default ProfileContent;
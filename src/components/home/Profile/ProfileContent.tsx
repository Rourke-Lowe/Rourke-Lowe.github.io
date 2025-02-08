import React from 'react';
import Image from 'next/image';

interface ProfileContentProps {
  name: string;
  title: string;
  location: string;
  // Remove imageUrl since it's not being used
}

const ProfileContent = ({ name, title, location }: ProfileContentProps) => {
  return (
    <div className="space-y-6">
      <div className="w-64 h-64 rounded-3xl overflow-hidden">
        <Image 
          src="/images/profileimg.jpeg" 
          alt={`${name}'s profile`} 
          width={256}
          height={256}
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
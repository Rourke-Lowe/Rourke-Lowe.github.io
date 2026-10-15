import React from 'react';
import Image from 'next/image';

interface ProfileContentProps {
  name: string;
  title: string;
  location: string;
  note: string;
  imageUrl: string;
  mobileImageUrl: string;
}

const ProfileContent = ({ name, title, location, note, imageUrl, mobileImageUrl }: ProfileContentProps) => {
  return (
    <div className="flex items-center gap-4 lg:block lg:space-y-6">
      <div className="w-[88px] h-[88px] flex-shrink-0 rounded-[20px] lg:w-64 lg:h-64 lg:rounded-3xl overflow-hidden">
        {/* Tighter crop on mobile so the face still reads at 88px */}
        <Image
          src={mobileImageUrl}
          alt={`${name}'s profile`}
          width={88}
          height={88}
          className="w-full h-full object-cover lg:hidden"
        />
        <Image
          src={imageUrl}
          alt={`${name}'s profile`}
          width={256}
          height={256}
          className="w-full h-full object-cover hidden lg:block"
        />
      </div>
      <div className="lg:space-y-6">
        <h1 className="text-3xl lg:text-5xl font-serif">{name}</h1>
        <div className="mt-1.5 lg:mt-0">
          <p className="text-[15px] leading-snug lg:text-xl text-gray-600">
            {title} based in {location}
          </p>
          <p className="text-sm lg:text-base text-gray-400 mt-0.5 lg:mt-1.5">{note}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;

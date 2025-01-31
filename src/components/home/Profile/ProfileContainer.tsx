'use client';

import React from 'react';
import ProfileContent from './ProfileContent';

interface ProfileContainerProps {
  name: string;
  title: string;
  location: string;
  imageUrl: string;
}

const ProfileContainer = (props: ProfileContainerProps) => {
  return (
    <>
      {/* Mobile Layout (default) */}
      <div className="block lg:hidden">
        <div className="mb-20">
          <ProfileContent {...props} />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="fixed w-[calc(33.333%-3rem)] max-w-sm">
          <ProfileContent {...props} />
        </div>
      </div>
    </>
  );
};

export default ProfileContainer;
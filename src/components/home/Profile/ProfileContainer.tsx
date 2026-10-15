'use client';

import React from 'react';
import ProfileContent from './ProfileContent';

interface ProfileContainerProps {
  name: string;
  title: string;
  location: string;
  note: string;
  imageUrl: string;
  mobileImageUrl: string;
}

const ProfileContainer = (props: ProfileContainerProps) => {
  return (
    <>
      {/* Mobile Layout (default) */}
      <div className="block lg:hidden">
        <div className="mt-2">
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
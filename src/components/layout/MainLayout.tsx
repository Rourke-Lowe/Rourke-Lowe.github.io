'use client';

import React from 'react';

interface MainLayoutProps {
  profile: React.ReactNode;
  content: React.ReactNode;
}

const MainLayout = ({ profile, content }: MainLayoutProps) => {
  return (
    <div className="px-8">
      <div className="max-w-6xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Left Column - Profile */}
          <div className="lg:col-span-4">
            {profile}
          </div>

          {/* Main Content Column */}
          <div className="lg:col-span-8">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
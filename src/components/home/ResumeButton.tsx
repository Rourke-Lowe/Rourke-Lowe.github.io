import React from 'react';

const ResumeButton = () => {
  return (
    <div className="py-6 text-center">
      <a 
        href="/files/Rourke-Lowe-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-8 py-3 bg-gray-50 text-black rounded-full hover:bg-gray-100 transition-colors"
      >
        Resume
      </a>
    </div>
  );
};

export default ResumeButton;
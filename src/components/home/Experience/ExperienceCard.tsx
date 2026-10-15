'use client';

import React, { useId, useState } from 'react';
import Image from 'next/image';
import { Experience } from '@/types';

// Mobile: small logo beside the title, summary full width underneath.
// Desktop: logo in its own column, dates on the right.
// Clicking anywhere on the card expands it; the "more +" button is the
// keyboard and screen reader control.
const ExperienceCard = ({ logo, role, company, period, summary, highlights }: Experience) => {
  const [open, setOpen] = useState(false);
  const highlightsId = useId();

  const handleCardClick = () => {
    // Don't toggle when someone is selecting text to copy it
    if (window.getSelection()?.toString()) return;
    setOpen((value) => !value);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group grid grid-cols-[40px_1fr] lg:grid-cols-[80px_1fr] gap-x-3 lg:gap-x-4 items-center lg:items-start p-5 lg:p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer"
    >
      <div className="w-10 h-10 lg:w-20 lg:h-20 lg:row-span-2 rounded-md lg:rounded-none overflow-hidden">
        <Image
          src={logo}
          alt={company}
          width={80}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between gap-4">
        <div>
          <h3 className="font-medium text-black leading-snug">{role}</h3>
          <p className="text-sm text-gray-500 mt-0.5 lg:mt-0 lg:text-base lg:text-gray-600">
            {company}
            <span className="lg:hidden"> &middot; {period}</span>
          </p>
        </div>
        <span className="hidden lg:block text-gray-500 whitespace-nowrap">{period}</span>
      </div>
      <div className="col-span-2 lg:col-span-1 lg:col-start-2">
        <p className="text-gray-500 text-sm mt-3 lg:mt-2 lg:max-w-md leading-relaxed">{summary}</p>
        <div
          id={highlightsId}
          className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        >
          <ul className="overflow-hidden lg:max-w-md" aria-hidden={!open}>
            {highlights.map((highlight, index) => (
              <li
                key={highlight}
                className={`relative py-1 pl-3.5 text-sm text-gray-600 leading-relaxed before:absolute before:left-0 before:top-[13px] before:w-[5px] before:h-px before:bg-gray-400 ${index === 0 ? 'mt-2' : ''}`}
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={highlightsId}
          onClick={(event) => {
            event.stopPropagation();
            setOpen((value) => !value);
          }}
          className="py-3 pr-4 -mb-2.5 text-sm leading-4 text-gray-400 group-hover:text-gray-700 hover:text-black rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-400"
        >
          {open ? <>less &minus;</> : 'more +'}
        </button>
      </div>
    </div>
  );
};

export default ExperienceCard;

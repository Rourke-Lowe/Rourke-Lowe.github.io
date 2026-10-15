'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { projects } from '@/Data/projects';
import ProjectModal from './ProjectModal';

const ProjectsSection = () => {
  const stripRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Return focus to the card for the project that was last on screen
  const handleModalClose = () => {
    const last = openIndex;
    setOpenIndex(null);
    if (last !== null) cardRefs.current[last]?.focus();
  };

  const scroll = (direction: 1 | -1) => {
    stripRef.current?.scrollBy({ left: direction * 340, behavior: 'smooth' });
  };

  // Work out which card is in view so the dots can follow it.
  const handleScroll = () => {
    const strip = stripRef.current;
    if (!strip) return;
    const atEnd = strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 4;
    const card = strip.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 12 : strip.clientWidth;
    setActive(atEnd ? projects.length - 1 : Math.round(strip.scrollLeft / step));
  };

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-serif">Things I make</h2>
          <p className="text-gray-500 mt-2 mb-5 lg:mb-6">Where digital and physical meet.</p>
        </div>
        <div className="hidden lg:flex gap-2 mb-6">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scroll(-1)}
            className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-black transition-colors"
          >
            &larr;
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scroll(1)}
            className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-black transition-colors"
          >
            &rarr;
          </button>
        </div>
      </div>
      {/* On mobile the strip runs to the screen edge so the next card peeks in */}
      <div
        ref={stripRef}
        onScroll={handleScroll}
        className="no-scrollbar flex gap-3 lg:gap-4 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 lg:mx-0 lg:px-0 lg:scroll-px-0 pb-1"
      >
        {projects.map((project, index) => (
          <button
            key={project.title}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            type="button"
            aria-haspopup="dialog"
            onClick={() => setOpenIndex(index)}
            className="group flex-none basis-[82%] lg:basis-[calc(46%-8px)] snap-start text-left bg-gray-50 rounded-2xl overflow-hidden hover:bg-gray-100 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gray-400"
          >
            <span className="block overflow-hidden">
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1200}
                height={900}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
              />
            </span>
            <span className="block px-4 pt-3.5 pb-[18px] lg:px-5 lg:pt-4 lg:pb-5">
              <span className="block font-medium text-black">{project.title}</span>
              <span className="block text-gray-500 text-sm mt-1.5 leading-relaxed">{project.description}</span>
            </span>
          </button>
        ))}
      </div>
      <div className="flex justify-center gap-1.5 mt-3.5 lg:hidden" aria-hidden="true">
        {projects.map((project, index) => (
          <span
            key={project.title}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${index === active ? 'bg-gray-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
      <ProjectModal
        projects={projects}
        index={openIndex}
        onClose={handleModalClose}
        onNavigate={setOpenIndex}
      />
    </div>
  );
};

export default ProjectsSection;

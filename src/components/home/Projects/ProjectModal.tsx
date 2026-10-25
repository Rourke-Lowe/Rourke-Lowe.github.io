'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Project } from '@/types';

interface ProjectModalProps {
  projects: Project[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const navButtonClass =
  'w-11 h-11 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-black transition-colors disabled:opacity-30 disabled:pointer-events-none';

const stageButtonClass =
  'absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-gray-700 hover:text-black transition-colors disabled:opacity-0 disabled:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-400';

// Near full-page view of one project: a gallery of uncropped images beside
// (desktop) or above (mobile) its text. Built on <dialog> so focus stays
// inside and Esc closes it natively. Arrow keys step through the images,
// then on to the next project.
const ProjectModal = ({ projects, index, onClose, onNavigate }: ProjectModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const titleId = useId();
  const project = index === null ? null : projects[index];
  const gallery = project?.gallery ?? [];
  const image = gallery[Math.min(imageIndex, gallery.length - 1)];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = 'hidden';
      closeRef.current?.focus();
    } else if (index === null && dialog.open) {
      dialog.close();
    }
    if (index === null) setImageIndex(0);
  }, [index]);

  const close = () => dialogRef.current?.close();

  const handleClose = () => {
    document.documentElement.style.overflow = '';
    onClose();
  };

  // Land on the first image going forward, the last going back
  const goProject = (next: number, atEnd = false) => {
    if (next < 0 || next >= projects.length) return;
    onNavigate(next);
    setImageIndex(atEnd ? projects[next].gallery.length - 1 : 0);
  };

  const goImage = (next: number) => {
    if (next >= 0 && next < gallery.length) setImageIndex(next);
  };

  const step = (direction: 1 | -1) => {
    if (index === null) return;
    const next = imageIndex + direction;
    if (next >= 0 && next < gallery.length) setImageIndex(next);
    else goProject(index + direction, direction === -1);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') step(-1);
    if (event.key === 'ArrowRight') step(1);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 40) goImage(imageIndex + (delta < 0 ? 1 : -1));
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      onKeyDown={handleKeyDown}
      aria-labelledby={titleId}
      className="project-modal m-0 p-0 border-0 bg-transparent w-full h-dvh max-w-none max-h-none backdrop:bg-black/50"
    >
      {project && index !== null && image && (
        <div
          className="w-full h-full p-3 lg:p-10 flex items-center justify-center"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="modal-panel relative w-full h-full max-w-6xl bg-white rounded-2xl lg:rounded-3xl overflow-hidden flex flex-col lg:flex-row">
            <div
              className="relative flex-none h-[46%] lg:h-auto lg:flex-1 min-h-0 bg-gray-50 flex flex-col"
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0].clientX;
              }}
              onTouchEnd={handleTouchEnd}
            >
              <div key={`image-${index}-${imageIndex}`} className="modal-swap relative flex-1 min-h-0">
                <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-10">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="eager"
                    className="max-w-full max-h-full w-auto h-auto rounded-xl"
                  />
                </div>
              </div>

              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    disabled={imageIndex === 0}
                    onClick={() => goImage(imageIndex - 1)}
                    className={`${stageButtonClass} left-3 lg:left-4 hidden lg:flex`}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    disabled={imageIndex === gallery.length - 1}
                    onClick={() => goImage(imageIndex + 1)}
                    className={`${stageButtonClass} right-3 lg:right-4 hidden lg:flex`}
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Thumbnails on desktop, dots on mobile (swipe to move) */}
                  <div className="flex-none hidden lg:flex justify-center gap-2 pb-6">
                    {gallery.map((thumb, thumbIndex) => (
                      <button
                        key={thumb.src}
                        type="button"
                        aria-label={`Image ${thumbIndex + 1} of ${gallery.length}`}
                        aria-current={thumbIndex === imageIndex}
                        onClick={() => goImage(thumbIndex)}
                        className={`relative w-14 h-14 rounded-lg overflow-hidden transition-opacity ${
                          thumbIndex === imageIndex
                            ? 'opacity-100 ring-2 ring-gray-900 ring-offset-2 ring-offset-gray-50'
                            : 'opacity-50 hover:opacity-90'
                        }`}
                      >
                        <Image src={thumb.src} alt="" fill sizes="56px" className="object-cover" />
                      </button>
                    ))}
                  </div>
                  <div className="flex-none flex lg:hidden justify-center gap-1.5 pb-3" aria-hidden="true">
                    {gallery.map((thumb, thumbIndex) => (
                      <span
                        key={thumb.src}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          thumbIndex === imageIndex ? 'bg-gray-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="flex-1 min-h-0 lg:flex-none lg:w-[380px] flex flex-col">
              <div key={`text-${index}`} className="modal-swap flex-1 min-h-0 overflow-y-auto p-5 lg:p-10 lg:pr-16">
                <p className="text-sm text-gray-400 tabular-nums">
                  {index + 1} / {projects.length}
                  {project.meta && <span> &middot; {project.meta}</span>}
                </p>
                <h2 id={titleId} className="font-serif text-3xl lg:text-4xl mt-1 lg:mt-2">
                  {project.title}
                </h2>
                <p className="text-gray-800 lg:text-lg leading-relaxed mt-2 lg:mt-4">
                  {project.description}
                </p>
                {project.body && (
                  <p className="text-gray-600 leading-relaxed mt-3 lg:mt-4">{project.body}</p>
                )}
                {project.role && (
                  <div className="mt-5 lg:mt-6">
                    <p className="text-sm text-gray-400">What I did</p>
                    <p className="text-gray-700 leading-relaxed mt-1">{project.role}</p>
                  </div>
                )}
                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-6 px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm hover:bg-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
                  >
                    {project.link.label}
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <div className="flex-none flex items-center gap-2 px-5 pb-5 pt-3 lg:px-10 lg:pb-10 lg:pt-4 border-t border-gray-100">
                <button
                  type="button"
                  aria-label="Previous project"
                  disabled={index === 0}
                  onClick={() => goProject(index - 1)}
                  className={navButtonClass}
                >
                  &larr;
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  disabled={index === projects.length - 1}
                  onClick={() => goProject(index + 1)}
                  className={navButtonClass}
                >
                  &rarr;
                </button>
                {index < projects.length - 1 && (
                  <span className="text-sm text-gray-400 ml-2 truncate">
                    Next: {projects[index + 1].title}
                  </span>
                )}
              </div>
            </div>

            <button
              ref={closeRef}
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute top-3 right-3 lg:top-4 lg:right-4 w-11 h-11 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-gray-700 hover:text-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-400"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
};

export default ProjectModal;

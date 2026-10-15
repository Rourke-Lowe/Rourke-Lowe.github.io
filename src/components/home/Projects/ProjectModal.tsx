'use client';

import React, { useEffect, useId, useRef } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Project } from '@/types';

interface ProjectModalProps {
  projects: Project[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const navButtonClass =
  'w-11 h-11 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-black transition-colors disabled:opacity-30 disabled:pointer-events-none';

// Near full-page view of one project: the uncropped image beside (desktop)
// or above (mobile) its text. Built on <dialog> so focus stays inside and
// Esc closes it natively.
const ProjectModal = ({ projects, index, onClose, onNavigate }: ProjectModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const project = index === null ? null : projects[index];

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
  }, [index]);

  const close = () => dialogRef.current?.close();

  const handleClose = () => {
    document.documentElement.style.overflow = '';
    onClose();
  };

  const go = (next: number) => {
    if (next >= 0 && next < projects.length) onNavigate(next);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (index === null) return;
    if (event.key === 'ArrowLeft') go(index - 1);
    if (event.key === 'ArrowRight') go(index + 1);
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      onKeyDown={handleKeyDown}
      aria-labelledby={titleId}
      className="project-modal m-0 p-0 border-0 bg-transparent w-full h-dvh max-w-none max-h-none backdrop:bg-black/50"
    >
      {project && index !== null && (
        <div
          className="w-full h-full p-3 lg:p-10 flex items-center justify-center"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="modal-panel relative w-full h-full max-w-6xl bg-white rounded-2xl lg:rounded-3xl overflow-hidden flex flex-col lg:flex-row">
            <div key={`image-${index}`} className="modal-swap relative flex-1 min-h-0 bg-gray-50">
              <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-10">
                <Image
                  src={project.detailImage}
                  alt={project.imageAlt}
                  width={project.detailWidth}
                  height={project.detailHeight}
                  loading="eager"
                  className="max-w-full max-h-full w-auto h-auto rounded-xl"
                />
              </div>
            </div>

            <div className="flex-shrink-0 lg:w-[360px] p-5 pb-6 lg:p-10 flex flex-col">
              <div key={`text-${index}`} className="modal-swap">
                <p className="text-sm text-gray-400 tabular-nums">
                  {index + 1} / {projects.length}
                </p>
                <h2 id={titleId} className="font-serif text-3xl lg:text-4xl mt-1 lg:mt-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 lg:text-lg leading-relaxed mt-2 lg:mt-4">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-2 mt-5 lg:mt-auto">
                <button
                  type="button"
                  aria-label="Previous project"
                  disabled={index === 0}
                  onClick={() => go(index - 1)}
                  className={navButtonClass}
                >
                  &larr;
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  disabled={index === projects.length - 1}
                  onClick={() => go(index + 1)}
                  className={navButtonClass}
                >
                  &rarr;
                </button>
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

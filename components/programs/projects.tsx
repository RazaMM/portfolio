'use client';

import React, { useEffect, useRef, useState } from 'react';
import icon from '@/img/notepad.png';
import { type Program } from '@/components/programs';
import { twJoin } from 'tailwind-merge';

type Project = {
  title: string;
  description: string[];
};

const experiences: Project[] = [
  {
    title: 'Plant Time',
    description: [
      'A web application that allows users to find suitable plants for their garden and location.',
      'Built using Next.js, TailwindCSS, and TypeScript for the frontend, and AWS Lambda and DynamoDB for the backend.',
      'Deployed using Amazon S3 for hosting.',
      'In development.',
    ],
  },
  {
    title: 'Tab Singularity',
    description: [
      'A tab management extension for Chromium-based browsers/Firefox that allows users to manage their tabs more efficiently.',
      'Built using Svelte and WXT',
      'In development.',
    ],
  },
];

const Projects: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.children[idx].scrollIntoView({ behavior: 'instant' });
  }, [idx]);

  return (
    <div className='relative flex h-full w-full flex-col bg-white sm:max-w-96'>
      <div ref={ref} className='flex w-full flex-1 overflow-hidden'>
        {experiences.map(({ title, description }, index) => (
          <div key={title} className={twJoin('flex w-full shrink-0 flex-col bg-white p-4')}>
            <span className='mb-2 text-2xl'>{title}</span>

            <ul className='mt-2 flex list-inside list-disc flex-col items-start gap-2'>
              {description.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='flex w-full justify-between p-4'>
        {idx !== 0 && (
          <button className='cursor-pointer select-none text-2xl' onClick={() => setIdx(idx - 1)}>
            &lt;-
          </button>
        )}

        {idx !== experiences.length - 1 && (
          <button className='ml-auto cursor-pointer select-none text-2xl' onClick={() => setIdx(idx + 1)}>
            -&gt;
          </button>
        )}
      </div>
    </div>
  );
};
Projects.displayName = 'Projects';

export default {
  id: 'projects',
  name: 'My Projects',
  icon: {
    src: icon,
    alt: 'A pixelated image of a notepad',
  },
  Component: Projects,
  includeInStartMenu: true,
  includeInDesktop: true,
} as Program;

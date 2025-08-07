'use client';

import { Carousel } from '@/components/carousel';
import { type Program } from '@/components/programs';
import icon from '@/img/monitor.png';
import React from 'react';
import { twJoin } from 'tailwind-merge';

type Project = {
  title: string;
  description: string[];
};

const projects: Project[] = [
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
  return (
    <Carousel
      count={projects.length}
      builder={(index) => {
        const { title, description } = projects[index];

        return (
          <div key={title} className={twJoin('flex w-full shrink-0 flex-col bg-white p-4 sm:w-96')}>
            <span className='mb-2 text-2xl'>{title}</span>

            <ul className='mt-2 flex list-inside list-disc flex-col items-start gap-2'>
              {description.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          </div>
        );
      }}
    />
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

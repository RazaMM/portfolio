'use client';

import { Carousel } from '@/components/carousel';
import { type Program } from '@/components/programs';
import icon from '@/img/file-guy.png';
import React from 'react';
import { twJoin } from 'tailwind-merge';

type Experience = {
  title: string;
  start: string;
  end: string;
  company: string;
  location: string;
  description: string[];
};

const experiences: Experience[] = [
  {
    title: 'Front End Web Developer (Co-op)',
    start: 'September 2019',
    end: 'August 2021',
    company: 'University of Guelph - Communications & Public Affairs',
    location: 'Guelph, Ontario, Canada',
    description: [
      "Led the revamp of the University's campus map using the Google Maps JavaScript API, delivering a more intuitive and user-friendly experience for visitors.",
      'Maintained and optimized PHP-based web pages (Apache and WordPress), and designed server-side scripts to improve page functionality, performance, and overall user experience.',
    ],
  },
  {
    title: 'Freelance Web Developer/Designer',
    start: 'April 2022',
    end: 'May 2022',
    company: 'Adorable Aliens',
    location: 'Ontario, Canada',
    description: [
      'Designed and developed a custom website for an art project using React, Styled Components and Gatsby.',
      'Created a responsive design that worked well on both desktop and mobile devices.',
      'Used version control tools such as Git to manage the codebase and collaborate with other developers.',
    ],
  },
  {
    title: 'Freelance Web Developer/Designer',
    start: 'January 2023',
    end: 'February 2023',
    company: 'Inspectech Services',
    location: 'Mississauga, Ontario, Canada',
    description: [
      'Designed and implemented a website for a home inspection company.',
      "Utilized SvelteKit and TailwindCSS to build the website's front-end design, ensuring a visually appealing and functional experience for users.",
      'Implemented a simple email booking form using EmailJS, allowing users to book appointments with the company through the website.',
    ],
  },
  {
    title: 'Web Developer',
    start: 'June 2023',
    end: 'January 2024',
    company: 'University of Guelph - Communications & Marketing',
    location: 'Guelph, Ontario, Canada',
    description: [
      'Developed and maintained a reusable UI component library with Svelte, React and TailwindCSS streamlining development workflows and improving consistency across the University’s web properties.',
      'Contributed to the redesign and development of the University’s homepage using React and Drupal, enhancing performance, system uptime and visual appeal.',
      'Established a visual regression and unit testing pipeline for UI components using Storybook and Playwright enhancing UI quality and maintaining visual integrity throughout the development lifecycle.',
    ],
  },
  {
    title: 'Full Stack Web Developer',
    start: 'January 2024',
    end: 'Current',
    company: 'University of Guelph - Communications & Marketing',
    location: 'Guelph, Ontario, Canada',
    description: [
      'Drove the modernization of front-end infrastructure by migrating to Next.js App Router and TailwindCSS which improved overall application performance, resulting in a 50% increase in Lighthouse scores.',
      'Implemented a GraphQL API with GraphQL Compose and Apollo to connect a headless Drupal CMS to a Next.js frontend, enabling seamless, high-performance content delivery.',
      'Led end-to-end development of enhanced program search and admission requirements pages, including custom Drupal content types to support dynamic content and complex filtering — significantly improving the user experience for prospective students.',
      'Automated software delivery by implementing a CI/CD pipeline with Azure Pipelines using YAML, resulting in increased developer productivity and improved code quality through automated checks.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <Carousel
      count={experiences.length}
      builder={(index) => {
        const { title, start, end, company, location, description } = experiences[index];

        return (
          <div
            key={title + start + end + company + location}
            className={twJoin('flex w-full shrink-0 flex-col bg-white p-4 sm:w-96 sm:h-96')}
          >
            <span className='text-2xl'>{title}</span>
            <span>
              {start} - {end}
            </span>
            <span>
              {company} - {location}
            </span>

            <span className='my-2 w-full' />

            <ul className='flex list-inside list-disc flex-col items-start gap-2'>
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
Experience.displayName = 'Experience';

export default {
  id: 'experience',
  name: 'My Job Experience',
  icon: {
    src: icon,
    alt: '',
  },
  Component: Experience,
} as Program;

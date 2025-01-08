'use client';

import React, { useEffect, useRef, useState } from 'react';
import icon from '@/img/notepad.png';
import { type Program } from '@/components/programs';
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
      "Spearheaded the revamp of the University's campus map using the Google Maps JavaScript API, delivering a more intuitive and user-friendly experience for visitors.",
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
    title: 'Web Intern',
    start: 'June 2023',
    end: 'January 2024',
    company: 'University of Guelph - Communications & Marketing',
    location: 'Guelph, Ontario, Canada',
    description: [
      'Contributed to the redesign and development of the University’s homepage using GatsbyJS and Drupal, enhancing performance and visual appeal.',
      'Developed and maintained a reusable web components library with Svelte, streamlining development workflows and improving consistency across the University’s web properties.',
    ],
  },
  {
    title: 'Analyst II',
    start: 'January 2024',
    end: 'Current',
    company: 'University of Guelph - Communications & Marketing',
    location: 'Guelph, Ontario, Canada',
    description: [
      'Initiated the migration of front-end infrastructure to modern technologies (Next.js and TailwindCSS), improving performance, scalability, and maintainability.',
      'Designed and implemented front-end interactions with a CMS built on Drupal and GraphQL, ensuring seamless data integration and dynamic content delivery.',
      'Developed a UI component library with React and TailwindCSS, enabling consistent and efficient design implementation across projects.',
      'Leveraged Storybook and Chromatic to implement visual regression testing for UI components, ensuring consistency and preventing UI discrepancies across updates.',
      'Led the development of new program search and admission requirements pages, streamlining the application process and enhancing the user experience for prospective students.',
    ],
  },
];

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.children[idx].scrollIntoView({ behavior: 'instant' });
  }, [idx]);

  return (
    <div className='relative flex h-full w-full flex-col bg-white sm:max-w-96'>
      <div ref={ref} className='flex w-full flex-1 overflow-hidden'>
        {experiences.map(({ title, start, end, company, location, description }, index) => (
          <div
            key={title + start + end + company + location}
            className={twJoin('flex w-full shrink-0 flex-col bg-white p-4')}
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
Experience.displayName = 'Experience';

export default {
  id: 'experience',
  name: 'My Job Experience',
  icon: {
    src: icon,
    alt: 'A pixelated image of a book with a purple cover',
  },
  Component: Experience,
  includeInStartMenu: true,
  includeInDesktop: true,
} as Program;

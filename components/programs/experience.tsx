'use client';

import React, { useState } from 'react';
import icon from '@/img/notepad.png';
import { type Program } from '@/components/programs';

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
      'Led a self-managed project to revamp the University campus map using the Google Maps JavaScript API, resulting in an improved user experience.',
      "Assisted with regular web maintenance and bug fixing, ensuring smooth and error-free operation of the University's web properties.",
      'Developed and implemented several responsive Web Components (using JavaScript), streamlining the development process across several university departments.',
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
      "Led the development of a web component library using Svelte, allowing for the creation of reusable components across the University's web properties.",
      'Assisted with the development of a handful of new web pages including a revamped homepage, using GatsbyJS and React.',
      'Performed regular web maintenance and bug fixing, ensuring a smooth, accessible and error-free experience for users.',
    ],
  },
  {
    title: 'Analyst II',
    start: 'January 2024',
    end: 'Current',
    company: 'University of Guelph - Communications & Marketing',
    location: 'Guelph, Ontario, Canada',
    description: [
      "Led the development of a web component library using Svelte, allowing for the creation of reusable components across the University's web properties.",
      'Assisted with the development of a handful of new web pages including a revamped homepage, using GatsbyJS and React.',
      'Performed regular web maintenance and bug fixing, ensuring a smooth, accessible and error-free experience for users.',
    ],
  },
];

const Experience: React.FC = () => {
  const [idx, setIdx] = useState(0);

  return (
    <div className='flex min-h-full w-96 min-w-full max-w-full flex-col justify-between bg-white p-2'>
      <div className='flex flex-col'>
        <span className='text-2xl'>{experiences[idx].title}</span>
        <span>
          {experiences[idx].start} - {experiences[idx].end}
        </span>
        <span>
          {experiences[idx].company} - {experiences[idx].location}
        </span>

        <span className='my-2 w-full' />

        <ul className='flex list-inside list-disc flex-col items-start gap-2'>
          {experiences[idx].description.map((description) => (
            <li>{description}</li>
          ))}
        </ul>
      </div>

      <div class='flex w-full justify-between'>
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
  name: 'My Experience',
  icon: {
    src: icon,
    alt: 'A pixelated image of a book with a purple cover',
  },
  bounds: {
    minWidth: 450,
    minHeight: 480,
  },
  resizeable: true,
  Component: Experience,
  includeInStartMenu: true,
  includeInDesktop: true,
} as Program;

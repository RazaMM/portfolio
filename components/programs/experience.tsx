'use client';

import React, { useContext, useState } from 'react';
import icon from '@/img/notepad.png';
import { type Program } from '@/components/programs';
import DataContext from '@/lib/data-context';

const Experience: React.FC = () => {
  const { experiences } = useContext(DataContext);

  const [idx, setIdx] = useState(0);

  return (
    <div className='flex min-h-full w-96 min-w-full max-w-full flex-col justify-between bg-white p-2'>
      <div className='flex flex-col'>
        <span className='text-2xl'>{experiences[idx].title}</span>
        <span>
          {experiences[idx].startDate} - {experiences[idx].endDate ?? 'Now'}
        </span>
        <span>{experiences[idx].organizationName}</span>
        <span>{experiences[idx].location}</span>

        <span className='my-2 w-full' />

        <ul className='flex list-inside list-disc flex-col items-start gap-2'></ul>
      </div>

      <div className='flex w-full justify-between'>
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

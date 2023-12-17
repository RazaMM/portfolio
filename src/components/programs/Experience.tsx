'use client'

import React from 'react';
import icon from '@/img/notepad.png';
import { type Program } from '@/components/programs';

const Experience: React.FC = () => {
  return (
    <div className='border-my-red bg-my-beige flex min-h-full w-[35rem] min-w-full max-w-full flex-col items-center gap-4 border-[2rem] p-2 text-center md:border-[3rem]'></div>
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
  Component: Experience,
} as Program;

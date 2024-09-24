'use client';

import React from 'react';
import icon from '@/img/book.png';
import { type Program } from '@/components/programs';

const Education: React.FC = () => {
  return (
    <div className='flex min-h-full w-[35rem] min-w-full max-w-full flex-col items-center gap-4 border-[2rem] border-degree-red bg-degree-beige p-2 text-center md:border-[3rem]'>
      <div className='my-auto flex flex-col gap-1'>
        <span className='text-4xl'>University of Guelph</span> <span className='text-2xl'>Bachelors of Computing</span>
        <span className='text-2xl'>Computer Science (Co-op) Major</span>
        <span className='text-2xl'>2017 - 2023</span>
      </div>
      <div className='mt-auto flex w-full items-center justify-center gap-4'>
        <span className='h-1 w-1/3 border-b-2 border-black'></span>
        <span className='aspect-square h-24 w-24 rounded-[50%] bg-degree-gold'></span>
        <span className='h-1 w-1/3 border-b-2 border-black'></span>
      </div>
    </div>
  );
};

Education.displayName = 'Education';

export default {
  id: 'education',
  name: 'My Education',
  icon: {
    src: icon,
    alt: 'A pixelated image of a book with a purple cover',
  },
  resizeable: false,
  Component: Education,
  includeInStartMenu: true,
  includeInDesktop: true,
} as Program;

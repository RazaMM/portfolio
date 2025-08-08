'use client';

import { type Program } from '@/components/programs';
import icon from '@/img/book.png';
import React from 'react';

const Education: React.FC = () => {
  return (
    <div className='flex h-full w-full flex-col items-center gap-4 border-[3rem] border-degree-red bg-degree-beige p-2 text-center sm:max-h-fit sm:w-[35rem]'>
      <div className='my-auto flex flex-col gap-1'>
        <span className='text-4xl'>University of Guelph</span> <span className='text-2xl'>Bachelor of Computing</span>
        <span className='text-2xl'>Computer Science (Co-op) Major</span>
        <span className='text-2xl'>Class of 2023</span>
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
  Component: Education,
} as Program;

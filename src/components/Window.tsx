'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Program } from '@/components/programs';
import { useDraggable } from '@/utils/useDraggable';

export const ProgramWindow: React.FC<{ program: Program }> = ({ program }) => {
  const { handle, dragged, isDragging } = useDraggable<HTMLDivElement, HTMLDivElement>();

  useEffect(() => {
    if (isDragging) {
      document.body.classList.add('cursor-w95-move');
      document.body.classList.remove('cursor-w95-auto');
      document.body.classList.add('select-none');
    } else {
      document.body.classList.remove('cursor-w95-move');
      document.body.classList.add('cursor-w95-auto');
      document.body.classList.remove('select-none');
    }
  }, [isDragging]);

  return (
    <div className='absolute left-0 top-0 flex items-center justify-center' ref={dragged}>
      <div className='flex w-96 flex-col items-center justify-center gap-1.5 bg-w95-grey px-1 pb-4 pt-1 shadow-w95'>
        <div className='flex h-6 w-full items-center bg-w95-blue px-2' ref={handle}>
          <Image src={program.icon.src} alt={program.icon.alt} className='mr-1 h-5 w-auto' />
          <h1 className='text-white'>{program.name}</h1>
          <button className='ml-auto flex aspect-square h-4 items-center justify-center bg-w95-grey text-black shadow-w95-thin active:shadow-w95-inverted-thin'>
            <span className='text-sm'>X</span>
          </button>
        </div>

        <program.Component />
      </div>
    </div>
  );
};

export default ProgramWindow;

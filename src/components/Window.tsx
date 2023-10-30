import React from 'react';
import Image from 'next/image';
import { Program } from '@/components/programs';

export const ProgramWindow: React.FC<{
  program: Program;
}> = ({ program }) => {
  return (
    <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center'>
      <div className='flex w-96 flex-col items-center justify-center gap-1.5 bg-w95-grey px-1 pb-4 pt-1 shadow-w95'>
        <div className='flex h-6 w-full items-center bg-w95-blue px-2'>
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

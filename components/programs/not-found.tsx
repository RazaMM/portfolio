import React from 'react';
import Image from 'next/image';
import icon from '@/img/error.png';
import type { Program } from '@/components/programs/index';

const NotFound: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 p-4'>
      <div className='flex items-center gap-2'>
        <Image src={icon} alt='d' className='h-8 w-auto' />

        <span className='text-md text-center'>
          {"You've ventured too far into the unknown and I can't find what you're looking for :("}
        </span>
      </div>
      <a className='mx-auto flex w-fit items-center gap-1 px-2 shadow-w95 active:shadow-w95-inverted' href='/'>
        <span>Go back home</span>
      </a>
    </div>
  );
};

NotFound.displayName = 'NotFound';

export default {
  id: 'not-found',
  name: '404 Not Found',
  icon: {
    src: icon,
    alt: 'A red circle with a white x in the center',
  },
  resizeable: false,
  Component: NotFound,
} as Program;

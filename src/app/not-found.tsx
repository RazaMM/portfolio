import React from 'react';
import Image from 'next/image';
import icon from '@/img/error.png';

export default function NotFound() {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='flex w-96 flex-col items-center justify-center gap-4 bg-w95-grey px-1 pb-4 pt-1 shadow-w95'>
        <div className='flex h-6 w-full items-center justify-between bg-w95-blue px-2'>
          <h1 className='text-white'>404 Not Found</h1>
          <button className='flex aspect-square h-4 items-center justify-center bg-w95-grey text-black shadow-w95-thin active:shadow-w95-inverted-thin'>
            <span className='text-sm'>X</span>
          </button>
        </div>

        <div className='flex items-center gap-2 p-2'>
          <Image src={icon} alt='d' className='h-8 w-auto' />

          <span className='text-md text-center'>
            {"You've ventured too far into the unknown and I can't find what you're looking for :("}
          </span>
        </div>
        <a className='flex items-center gap-1 px-2 shadow-w95 active:shadow-w95-inverted' href='/'>
          <span>Go back home</span>
        </a>
      </div>
    </div>
  );
}

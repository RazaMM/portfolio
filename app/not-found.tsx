import React from 'react';
import Window from '@/components/window';
import Desktop from '@/components/desktop';
import Taskbar from '@/components/taskbar';
import Image from 'next/image';
import icon from '@/img/error.png';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Desktop />
      <Window name='404 Not Found' active>
        <div className='flex flex-col gap-4 p-4'>
          <div className='flex items-center gap-2'>
            <Image src={icon} alt='d' className='h-8 w-auto' />

            <span className='text-md text-center'>
              {"You've ventured too far into the unknown and I can't find what you're looking for :("}
            </span>
          </div>
          <Link className='mx-auto flex w-fit items-center gap-1 px-2 shadow-w95 active:shadow-w95-inverted' href='/'>
            <span>Go back home</span>
          </Link>
        </div>
      </Window>
      <Taskbar />
    </>
  );
}

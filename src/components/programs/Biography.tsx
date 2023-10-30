import React from 'react';
import icon from '@/img/bio.png';
import { type Program } from '@/components/programs';
import Image from 'next/image';
import me from '@/img/me.png';

const Biography: React.FC = () => {
  return (
    <div className='max-w-screen flex h-[30rem] max-h-screen min-h-full w-72 min-w-full flex-col items-center justify-center gap-4 bg-white p-2 text-center'>
      <Image
        src={me}
        alt={'Raza Mahmood wearing a black shirt and sunglasses'}
        className='w-56 select-none rounded-sm'
      />
      <h1 className='text-xl'>Raza Mahmood</h1>
      <p>I am a 24 year old software developer who specializes in front end web development.</p>
      <div className='flex flex-col'>
        <a className='text-w95-blue' href='mailto:razammahmood@gmail.com'>
          razammahmood@gmail.com
        </a>
        <a className='text-w95-blue' href='https://github.com/RazaMM'>
          github.com/RazaMM
        </a>
        <a className='text-w95-blue' href='https://www.linkedin.com/in/rmmahmood/'>
          linkedin.com/in/rmmahmood/
        </a>
      </div>
    </div>
  );
};

Biography.displayName = 'Biography';

export default {
  id: 'biography',
  name: 'My Biography',
  icon: {
    src: icon,
    alt: 'A pixelated image of a man wearing a blue shirt',
  },
  Component: Biography,
} as Program;

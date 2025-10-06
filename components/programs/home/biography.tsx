'use client';

import { type Program } from '@/components/programs';
import icon from '@/img/bio.png';
import me from '@/img/me.png';
import Image from 'next/image';
import React from 'react';

const Biography: React.FC = () => {
  const date = new Date();

  const today = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
  };

  const birthday = {
    year: 1999,
    month: 2,
    date: 13,
  };

  let age = today.year - birthday.year;
  const isBirthday = today.month === birthday.month && today.date === birthday.date;

  if (today.month < birthday.month || (today.month === birthday.month && today.date < birthday.date)) {
    age--;
  }

  return (
    <div className='flex h-[30rem] min-h-full w-72 max-w-screen min-w-full flex-col items-center justify-center gap-4 bg-white p-2 text-center'>
      <Image src={me} alt={'Ray M wearing a black shirt and sunglasses'} className='w-56 rounded-xs select-none' />

      <h1 className='text-xl'>Ray M</h1>

      <p>
        I am a {age} year old {isBirthday && '(happy birthday to me!)'} software developer who specializes in full stack
        web development.
      </p>

      <div className='flex flex-col'>
        <a className='text-w95-blue hover:underline' href='mailto:ray@raymm.dev'>
          ray@raymm.dev
        </a>
        <a className='text-w95-blue hover:underline' href='https://github.com/RazaMM'>
          github.com/RazaMM
        </a>
        <a className='text-w95-blue hover:underline' href='https://www.linkedin.com/in/rmmahmood/'>
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

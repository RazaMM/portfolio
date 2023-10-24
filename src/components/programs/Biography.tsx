import React from 'react';
import icon from '@/img/bio.png';
import { type Program } from "@/components/programs";
import Image from "next/image";
import me from '@/img/me.png';

const Biography: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-2 bg-white text-center w-72 h-[30rem] min-w-full min-h-full max-w-screen max-h-screen">
      <Image
        src={me}
        alt={'Raza Mahmood wearing a black shirt and sunglasses'}
        className='w-56 rounded-sm select-none'
      />
      <h1 className="text-xl">Raza Mahmood</h1>
      <p>I am a 24 year old software developer who specializes in front end web development.</p>
      <div className="flex flex-col">
        <a className="text-w95-blue" href="mailto:razammahmood@gmail.com">razammahmood@gmail.com</a>
        <a className="text-w95-blue" href="https://github.com/RazaMM">github.com/RazaMM</a>
        <a className="text-w95-blue" href="https://www.linkedin.com/in/rmmahmood/">linkedin.com/in/rmmahmood/</a>
      </div>
    </div>
  );
}

Biography.displayName = 'Biography';

export default {
  id: 'biography',
  name: 'My Biography',
  icon: {
    src: icon,
    alt: 'A pixelated image of a man wearing a blue shirt'
  },
  Component: Biography
} as Program;
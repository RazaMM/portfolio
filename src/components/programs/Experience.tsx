import React from 'react';
import icon from '@/img/notepad.png';
import { type Program } from "@/components/programs";

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center border-[2rem] md:border-[3rem] border-my-red bg-my-beige p-2 text-center w-[35rem] min-w-full min-h-full max-w-full">

    </div>
  );
}

Experience.displayName = 'Experience';

export default {
  id: 'education',
  name: 'My Education',
  icon: {
    src: icon,
    alt: 'A pixelated image of a book with a purple cover'
  },
  Component: Experience
} as Program;


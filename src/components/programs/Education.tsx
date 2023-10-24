import React from 'react';
import icon from '@/img/book.png';
import { type Program } from "@/components/programs";

const Education: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center border-[2rem] md:border-[3rem] border-my-red bg-my-beige p-2 text-center w-[35rem] min-w-full min-h-full max-w-full">
      <div className="flex flex-col my-auto gap-1"><span className="text-4xl">University of Guelph</span> <span
        className="text-2xl"
      >Bachelors of Computing</span> <span className="text-2xl">Computer Science (Co-op) Major</span>
        <span className="text-2xl">2018 - 2023</span></div>
      <div className="flex items-center justify-center gap-4 w-full mt-auto">
        <span className="h-1 w-1/3 border-b-2 border-black"></span>
        <span className="h-24 w-24 aspect-square bg-my-gold rounded-[50%]"></span>
        <span className="h-1 w-1/3 border-b-2 border-black"></span></div>
    </div>
  );
}

Education.displayName = 'Education';

export default {
  id: 'education',
  name: 'My Education',
  icon: {
    src: icon,
    alt: 'A pixelated image of a book with a purple cover'
  },
  Component: Education
} as Program;


import React from "react";
import Image from "next/image";
import { Program } from "@/components/programs";

export const ProgramWindow: React.FC<{
  program: Program
}> = ({ program }) => {
  return (
    <div className='flex justify-center items-center absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2'>
      <div className="flex flex-col gap-1.5 px-1 pt-1 pb-4 items-center justify-center w-96 bg-w95-grey shadow-w95">
        <div className='flex items-center w-full h-6 bg-w95-blue px-2'>
          <Image src={program.icon.src} alt={program.icon.alt} className='h-5 mr-1 w-auto'/>
          <h1 className='text-white'>{program.name}</h1>
          <button className="flex h-4 items-center justify-center text-black bg-w95-grey shadow-w95-thin active:shadow-w95-inverted-thin aspect-square ml-auto">
            <span className="text-sm">X</span></button>
        </div>

        <program.Component/>
      </div>

    </div>
  )
};

export default ProgramWindow;
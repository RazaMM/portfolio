import React from "react";
import Image from "next/image";
import icon from '@/img/error.png';

export default function NotFound() {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div className="flex flex-col gap-4 px-1 pt-1 pb-4 items-center justify-center w-96 bg-w95-grey shadow-w95">
        <div className='flex justify-between items-center w-full h-6 bg-w95-blue px-2'>
          <h1 className='text-white'>404 Not Found</h1>
          <button className="flex h-4 items-center justify-center text-black bg-w95-grey shadow-w95-thin active:shadow-w95-inverted-thin aspect-square">
            <span className="text-sm">X</span></button>
        </div>

        <div className="flex gap-2 items-center p-2">
          <Image src={icon} alt='d' className='h-8 w-auto'/>

          <span className="text-md text-center">
            {"You've ventured too far into the unknown and I can't find what you're looking for :("}
          </span>
        </div>
        <a className="flex items-center gap-1 px-2 shadow-w95 active:shadow-w95-inverted" href="/">
          <span>Go back home</span>
        </a>
      </div>
    </div>
  )
}

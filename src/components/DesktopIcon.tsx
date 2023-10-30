import React from 'react';
import Image, { StaticImageData } from 'next/image';

export const DesktopIcon: React.FC<{
  image: StaticImageData;
  alt: string;
  text: string;
}> = ({ image, alt, text }) => (
  <button className='flex h-fit w-fit flex-col items-center gap-0.5 p-1'>
    <Image src={image} alt={alt} className='h-10 w-auto' />
    <span className='text-center text-white'>{text}</span>
  </button>
);

export default DesktopIcon;

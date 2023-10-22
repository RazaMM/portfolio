import React from "react";
import Image, { StaticImageData } from "next/image";

export const DesktopIcon: React.FC<{
  image: StaticImageData,
  alt: string,
  text: string
}> = ({ image, alt, text }) => (
  <button className='flex flex-col items-center gap-0.5 w-fit h-fit p-1'>
    <Image src={image} alt={alt} className='h-10 w-auto'/>
    <span className='text-white text-center'>{text}</span>
  </button>
);

export default DesktopIcon;
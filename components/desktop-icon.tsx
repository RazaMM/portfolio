import React from 'react';
import Image, { StaticImageData } from 'next/image';
import programs from '@/components/programs';
import defaultIcon from '@/img/logo.png';

export const DesktopIcon = ({ image, alt, text }: { image: StaticImageData; alt: string; text: string }) => {
  return (
    <button className='flex h-fit w-fit flex-col items-center gap-0.5 p-1'>
      <Image src={image} alt={alt} className='h-10 w-auto' />
      <span className='text-center text-white'>{text}</span>
    </button>
  );
};

export const Desktop = () => {
  return (
    <div className='relative flex h-full w-fit flex-col flex-wrap items-center gap-4'>
      {programs
        .filter((program) => program.includeInDesktop)
        .map((program, i) =>
          program.icon ? (
            <DesktopIcon
              image={program.icon.src}
              alt={program.icon.alt}
              text={program.name}
              key={program.id + ' ' + i}
            />
          ) : (
            <DesktopIcon image={defaultIcon} alt='W95 Portfolio Logo' text={program.name} key={program.id + ' ' + i} />
          )
        )}
    </div>
  );
};

export default Desktop;

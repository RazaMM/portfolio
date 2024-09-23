import React, { useContext } from 'react';
import Image, { StaticImageData } from 'next/image';
import programs from '@/components/programs';
import defaultIcon from '@/img/logo.png';
import ProgramContext from '@/lib/program-context';

type DesktopIconProps = {
  image: StaticImageData;
  alt: string;
  name: string;
  onClick?: () => void;
};

export const DesktopIcon = ({ image, alt, name, onClick }: DesktopIconProps) => {
  return (
    <button onDoubleClick={onClick} className='flex h-fit w-fit flex-col items-center gap-0.5 p-1'>
      <Image src={image} alt={alt} className='h-10 w-auto' />
      <span className='text-center text-white'>{name}</span>
    </button>
  );
};

export const Desktop = () => {
  const context = useContext(ProgramContext);

  return (
    <div className='relative flex h-full w-fit select-none flex-col flex-wrap items-center gap-4'>
      {programs
        .filter((program) => program.includeInDesktop)
        .map((program, i) => (
          <DesktopIcon
            onClick={() => {
              context?.open(program);
            }}
            image={program?.icon?.src ?? defaultIcon}
            alt={program?.icon?.alt ?? 'W95 Portfolio Logo'}
            name={program.name}
            key={program.id + ' ' + i}
          />
        ))}
    </div>
  );
};

export default Desktop;

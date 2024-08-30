'use client';

import programs from '@/components/programs';
import React from 'react';
import DesktopIcon from '@/components/desktop-icon';
import Window from '@/components/window';
import defaultIcon from '@/img/logo.png';

export default function Home() {
  const test = programs[0];

  return (
    <>
      <div className='relative flex h-full w-fit flex-col flex-wrap items-center gap-4'>
        {programs?.map((program, i) =>
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

      <Window program={test} active={true} />
    </>
  );
}

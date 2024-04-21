'use client';

import programs, { type Program } from '@/components/programs';
import React, { useState } from 'react';
import DesktopIcon from '@/components/DesktopIcon';
import Window from '@/components/Window';
import ShutdownScreen from '@/components/ShutdownScreen';

export default function Home() {
  const test = programs[0];

  return (
    <>
      <div className='relative flex h-full w-fit flex-col flex-wrap items-center gap-4'>
        {programs?.map((program, i) => (
          <DesktopIcon image={program.icon.src} alt={program.icon.alt} text={program.name} key={program.id} />
        ))}
      </div>

      <Window program={test} />
    </>
  );
}

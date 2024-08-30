'use client';

import programs from '@/components/programs';
import React from 'react';
import Desktop from '@/components/desktop';
import Window from '@/components/window';

export default function Home() {
  const test = programs[0];

  return (
    <>
      <Desktop />
      <Window program={test} active={true} />
    </>
  );
}

'use client';

import React from 'react';
import Window from '@/components/window';
import notFound from '@/components/programs/not-found';
import Desktop from '@/components/desktop';

export default function NotFound() {
  return (
    <>
      <Desktop />
      <Window program={notFound} active />
    </>
  );
}

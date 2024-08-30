'use client';

import React from 'react';
import Image from 'next/image';
import icon from '@/img/error.png';
import Window from '@/components/window';
import notFound from '@/components/programs/not-found';

export default function NotFound() {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <Window program={notFound} active />
    </div>
  );
}

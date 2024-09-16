'use client';
import React, { MouseEventHandler } from 'react';
import { twJoin } from 'tailwind-merge';

export const ShutdownScreen = ({ visible, onClick }: { visible: boolean; onClick: MouseEventHandler }) => {
  return (
    <div
      onClick={onClick}
      className={twJoin(
        'absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black text-6xl',
        !visible && 'hidden'
      )}
    >
      <span className='max-w-xl text-center text-orange-400'>It&apos;s now safe to turn off your computer.</span>
    </div>
  );
};

export default ShutdownScreen;

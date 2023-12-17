'use client';
import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';

export default function ShutdownScreen({ visible, onClick }: { visible: boolean; onClick: MouseEventHandler }) {
  return (
    <div
      onClick={onClick}
      className={classNames(
        'absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black text-6xl',
        { hidden: !visible }
      )}
    >
      <span className='max-w-xl text-center text-orange-400'>It&apos;s now safe to turn off your computer.</span>
    </div>
  );
}

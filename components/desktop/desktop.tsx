'use client';

import React, { PropsWithChildren } from 'react';

export type DesktopProps = PropsWithChildren;

export const Desktop = ({ children }: DesktopProps) => {
  return (
    <div className='relative flex h-[calc(100vh-theme(height.10))] w-fit flex-col flex-wrap items-center gap-4 p-2 select-none'>
      {children}
    </div>
  );
};

export default Desktop;

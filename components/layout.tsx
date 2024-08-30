import React from 'react';
import Taskbar from '@/components/taskbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className='relative h-[calc(100%_-_theme(height.10))] flex-1 p-2'>{children}</main>
      <Taskbar />
    </>
  );
};

export default Layout;

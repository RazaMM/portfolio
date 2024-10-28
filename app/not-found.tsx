import React from 'react';
import Window from '@/components/window';
import notFound from '@/components/programs/not-found';
import Desktop from '@/components/desktop';
import Taskbar from '@/components/taskbar';

export default function NotFound() {
  return (
    <>
      <Desktop />
      <Window program={notFound} active />
      <Taskbar />
    </>
  );
}

import React from 'react';
import Desktop from '@/components/desktop/desktop';
import Taskbar from '@/components/taskbar/taskbar';
import { TaskbarMenu } from '@/components/taskbar/taskbar-menu';
import { TaskbarMenuItem } from '@/components/taskbar/taskbar-menu-item';
import HomePage from '@/img/homepage.png';
import { TaskbarClock } from '@/components/taskbar/taskbar-clock';
import Link from 'next/link';

export default function BlogHome() {
  return (
    <>
      <Desktop />
      <Taskbar>
        <TaskbarMenu title="Raza's Blog">
          <TaskbarMenuItem as={Link} href='/' icon={{ src: HomePage, alt: '' }}>
            Home
          </TaskbarMenuItem>
        </TaskbarMenu>
        <TaskbarClock />
      </Taskbar>
    </>
  );
}

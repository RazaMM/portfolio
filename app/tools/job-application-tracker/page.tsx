import React from 'react';
import Desktop from '@/components/desktop/desktop';
import Taskbar from '@/components/taskbar/taskbar';
import { TaskbarMenu } from '@/components/taskbar/taskbar-menu';
import { TaskbarMenuItem } from '@/components/taskbar/taskbar-menu-item';
import HomePage from '@/img/homepage.png';
import { TaskbarClock } from '@/components/taskbar/taskbar-clock';
import Link from 'next/link';
import { DesktopShortcut } from '@/components/desktop/desktop-shortcut';
import Window from '@/components/window';
import Tools from '@/img/tools.png';
import FileWrite from '@/img/file-write.png';

import { TaskbarContent } from '@/components/taskbar/taskbar-content';
import { TaskbarButton } from '@/components/taskbar/taskbar-button';
import type { Metadata } from 'next';

const formatter = new Intl.DateTimeFormat();

export const metadata: Metadata = {
  title: "Job Application Tracker | Raza Mahmood's Portfolio",
  description: 'Keep track of your job application progress with this simple tool.',
};

export default async function BlogHome() {
  return (
    <>
      <Desktop>
        <DesktopShortcut as={Link} href='/' icon={{ src: HomePage, alt: '' }}>
          Back to Homepage
        </DesktopShortcut>

        <DesktopShortcut as={Link} href='/tools' icon={{ src: Tools, alt: '' }}>
          Back to Tools
        </DesktopShortcut>
      </Desktop>

      <Window name='Job Application Tracker' active icon={{ src: FileWrite, alt: '' }}>
        <div className='w-dvw max-w-5xl bg-white p-2'>
          <div className='flex flex-col gap-2'></div>
        </div>
      </Window>

      <Taskbar>
        <TaskbarMenu title="Raza's Blog">
          <TaskbarMenuItem as={Link} href='/' icon={{ src: HomePage, alt: '' }}>
            Back to Homepage
          </TaskbarMenuItem>

          <TaskbarMenuItem as={Link} href='/tools' icon={{ src: Tools, alt: '' }}>
            Back to Tools
          </TaskbarMenuItem>
        </TaskbarMenu>

        <TaskbarContent>
          <TaskbarButton active={true} icon={{ src: FileWrite, alt: '' }}>
            Job Application Tracker
          </TaskbarButton>
        </TaskbarContent>

        <TaskbarClock />
      </Taskbar>
    </>
  );
}

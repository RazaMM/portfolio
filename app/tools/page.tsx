import React from 'react';
import Desktop from '@/components/desktop/desktop';
import Taskbar from '@/components/taskbar/taskbar';
import { TaskbarMenu } from '@/components/taskbar/taskbar-menu';
import { TaskbarMenuItem } from '@/components/taskbar/taskbar-menu-item';
import { TaskbarClock } from '@/components/taskbar/taskbar-clock';
import { DesktopShortcut } from '@/components/desktop/desktop-shortcut';
import Link from 'next/link';
import HomePage from '@/img/homepage.png';
import FileWrite from '@/img/file-write.png';
import type { Metadata } from 'next';

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

        <DesktopShortcut as={Link} href='/tools/job-application-tracker' icon={{ src: FileWrite, alt: '' }}>
          Job Application Tracker
        </DesktopShortcut>
      </Desktop>

      <Taskbar>
        <TaskbarMenu title="Raza's Blog">
          <TaskbarMenuItem as={Link} href='/' icon={{ src: HomePage, alt: '' }}>
            Back to Homepage
          </TaskbarMenuItem>

          <TaskbarMenuItem as={Link} href='/tools/job-application-tracker' icon={{ src: FileWrite, alt: '' }}>
            Job Application Tracker
          </TaskbarMenuItem>
        </TaskbarMenu>

        <TaskbarClock />
      </Taskbar>
    </>
  );
}

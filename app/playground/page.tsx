import Desktop from '@/components/desktop/desktop';
import { DesktopShortcut } from '@/components/desktop/desktop-shortcut';
import Taskbar from '@/components/taskbar/taskbar';
import { TaskbarClock } from '@/components/taskbar/taskbar-clock';
import { TaskbarContent } from '@/components/taskbar/taskbar-content';
import { TaskbarMenu } from '@/components/taskbar/taskbar-menu';
import { TaskbarMenuItem } from '@/components/taskbar/taskbar-menu-item';
import HomePage from '@/img/homepage.png';
import Link from 'next/link';
//import { TaskbarButton } from '@/components/taskbar/taskbar-button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Playground | Raza Mahmood's Portfolio",
  description: 'Random games and other playground stuff.',
};

export default async function FunHome() {
  return (
    <>
      <Desktop>
        <DesktopShortcut as={Link} href='/' icon={{ src: HomePage, alt: '' }}>
          Back to Homepage
        </DesktopShortcut>
      </Desktop>

      <Taskbar>
        <TaskbarMenu title="Raza's Playground">
          <TaskbarMenuItem as={Link} href='/' icon={{ src: HomePage, alt: '' }}>
            Back to Homepage
          </TaskbarMenuItem>
        </TaskbarMenu>

        <TaskbarContent></TaskbarContent>

        <TaskbarClock />
      </Taskbar>
    </>
  );
}

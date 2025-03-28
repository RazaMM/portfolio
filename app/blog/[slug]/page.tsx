import Desktop from '@/components/desktop/desktop';
import Link from 'next/link';
import Taskbar from '@/components/taskbar/taskbar';
import { TaskbarMenu } from '@/components/taskbar/taskbar-menu';
import { TaskbarMenuItem } from '@/components/taskbar/taskbar-menu-item';
import HomePage from '@/img/homepage.png';
import Notepad from '@/img/notepad.png';
import { TaskbarClock } from '@/components/taskbar/taskbar-clock';
import React from 'react';
import * as fg from 'fast-glob';
import path from 'node:path';
import { DesktopShortcut } from '@/components/desktop/desktop-shortcut';
import { TaskbarContent } from '@/components/taskbar/taskbar-content';
import { TaskbarButton } from '@/components/taskbar/taskbar-button';
import Window from '@/components/window';
import { toTitleCase } from '@/lib/to-title-case';

export default async function BlogLayout({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const tokens = slug.split('-');
  const title = toTitleCase(tokens.slice(3).join(' '));

  return (
    <>
      <Desktop>
        <DesktopShortcut as={Link} href='/blog' icon={{ src: Notepad, alt: '' }}>
          Back to Blog Home
        </DesktopShortcut>
        <DesktopShortcut as={Link} href='/' icon={{ src: HomePage, alt: '' }}>
          Back to Homepage
        </DesktopShortcut>
      </Desktop>

      <Window name={title} active icon={{ src: Notepad, alt: '' }}>
        <div className='w-dvw max-w-3xl bg-white'>tes</div>
      </Window>

      <Taskbar>
        <TaskbarMenu title="Raza's Blog">
          <TaskbarMenuItem as={Link} href='/blog' icon={{ src: Notepad, alt: '' }}>
            Back to Blog Home
          </TaskbarMenuItem>
          <TaskbarMenuItem as={Link} href='/' icon={{ src: HomePage, alt: '' }}>
            Back to Homepage
          </TaskbarMenuItem>
        </TaskbarMenu>

        <TaskbarContent>
          <TaskbarButton onClick={undefined} active={true} icon={{ src: Notepad, alt: '' }}>
            {title}
          </TaskbarButton>
        </TaskbarContent>

        <TaskbarClock />
      </Taskbar>
    </>
  );
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'posts');
  const paths = await fg.glob(path.join(dir, '**', '*.mdx'));

  return paths.map((path: string) => ({
    slug: path.replace(dir, '').substring(1).replaceAll('/', '-').replace('.mdx', ''),
  }));
}

export const dynamicParams = false;

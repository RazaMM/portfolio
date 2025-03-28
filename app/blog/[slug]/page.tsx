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

export default async function BlogLayout({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  return (
    <>
      <Desktop>
        <span>{slug}</span>
      </Desktop>
      <Taskbar>
        <TaskbarMenu title="Raza's Blog Posts">
          <TaskbarMenuItem as={Link} href='/blog' icon={{ src: Notepad, alt: '' }}>
            Blog Home
          </TaskbarMenuItem>
          <TaskbarMenuItem as={Link} href='/' icon={{ src: HomePage, alt: '' }}>
            Home
          </TaskbarMenuItem>
        </TaskbarMenu>
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

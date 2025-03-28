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
import Notepad from '@/img/notepad.png';
import { TaskbarContent } from '@/components/taskbar/taskbar-content';
import { TaskbarButton } from '@/components/taskbar/taskbar-button';
import { getAllPosts } from '@/lib/blog-posts';

const formatter = new Intl.DateTimeFormat();

export default async function BlogHome() {
  const posts = await getAllPosts();

  return (
    <>
      <Desktop>
        <DesktopShortcut as={Link} href='/' icon={{ src: HomePage, alt: '' }}>
          Back to Homepage
        </DesktopShortcut>
      </Desktop>

      <Window name='My Blog Posts' active icon={{ src: Notepad, alt: '' }}>
        <div className='w-dvw max-w-2xl bg-white p-2'>
          <div className='flex flex-col gap-2'>
            {posts.map((post) => (
              <Link
                key={post.path}
                href={post.path}
                className='flex flex-col gap-2 border-b-2 border-w95-dark-grey p-2 hover:bg-w95-grey focus:bg-w95-grey'
              >
                <span className='text-xl'>{post.title}</span>
                <span className='text-sm'>{formatter.format(post.date)}</span>
              </Link>
            ))}
          </div>
        </div>
      </Window>

      <Taskbar>
        <TaskbarMenu title="Raza's Blog">
          <TaskbarMenuItem as={Link} href='/' icon={{ src: HomePage, alt: '' }}>
            Back to Homepage
          </TaskbarMenuItem>
        </TaskbarMenu>

        <TaskbarContent>
          <TaskbarButton active={true} icon={{ src: Notepad, alt: '' }}>
            My Blog Posts
          </TaskbarButton>
        </TaskbarContent>

        <TaskbarClock />
      </Taskbar>
    </>
  );
}

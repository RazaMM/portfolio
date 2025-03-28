import React from 'react';
import Window from '@/components/window';
import Desktop from '@/components/desktop/desktop';
import Taskbar from '@/components/taskbar/taskbar';
import Image from 'next/image';
import icon from '@/img/error.png';
import Link from 'next/link';
import { tv } from 'tailwind-variants';
import { TaskbarClock } from '@/components/taskbar/taskbar-clock';
import { TaskbarMenuItem } from '@/components/taskbar/taskbar-menu-item';
import { TaskbarMenu } from '@/components/taskbar/taskbar-menu';

export default function NotFound() {
  const classes = tv({
    slots: {
      outer: 'flex flex-col gap-4 p-4',
      inner: 'flex items-center gap-2',
      icon: 'h-8 w-auto',
      text: 'text-md text-center',
      link: 'mx-auto flex w-fit items-center gap-1 px-2 shadow-w95 active:shadow-w95-inverted',
    },
  })();

  return (
    <>
      <Desktop />
      <Window name='404 Not Found' active>
        <div className={classes.outer()}>
          <div className={classes.inner()}>
            <Image src={icon} alt='' className={classes.icon()} />

            <span className={classes.text()}>
              {"You've ventured too far into the unknown and I can't find what you're looking for :("}
            </span>
          </div>
          <Link className={classes.link()} href='/'>
            <span>Go back home</span>
          </Link>
        </div>
      </Window>
      <Taskbar>
        <TaskbarMenu>
          <TaskbarMenuItem as='a' href='/'>
            Go back home
          </TaskbarMenuItem>
        </TaskbarMenu>
        <TaskbarClock />
      </Taskbar>
    </>
  );
}

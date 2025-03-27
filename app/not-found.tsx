import React from 'react';
import Window from '@/components/window';
import Desktop from '@/components/desktop';
import Taskbar from '@/components/taskbar/taskbar';
import Image from 'next/image';
import icon from '@/img/error.png';
import Link from 'next/link';
import { tv } from 'tailwind-variants';

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
            <Image src={icon} alt='d' className={classes.icon()} />

            <span className={classes.text()}>
              {"You've ventured too far into the unknown and I can't find what you're looking for :("}
            </span>
          </div>
          <Link className={classes.link()} href='/'>
            <span>Go back home</span>
          </Link>
        </div>
      </Window>
      <Taskbar />
    </>
  );
}

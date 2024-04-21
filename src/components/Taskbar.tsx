'use client';

import React, { useEffect } from 'react';
import { useTime } from '@/utils/useTime';
import Image from 'next/image';
import logo from '@/img/logo.png';
import classNames from 'classnames';
import { useFocusWithin } from '@/utils/useFocusWithin';
import programs, { type Program } from '@/components/programs';

const StartButton: React.FC<{
  active?: boolean;
  onClick?: () => void;
}> = ({ active = false, onClick }) => (
  <button
    className={classNames(
      'flex h-full cursor-w95-pointer items-center justify-center gap-1 px-2 shadow-w95 active:shadow-w95-inverted',
      { 'shadow-w95-inverted': active }
    )}
    onClick={(e) => {
      (e.target as HTMLButtonElement).focus();
      onClick?.();
    }}
  >
    <Image src={logo} alt='Portfolio logo' className='h-full w-auto' />
    <span>Start</span>
  </button>
);

const StartMenu: React.FC<{
  active?: boolean;
}> = ({ active = false }) => (
  <div
    className={classNames('absolute bottom-full left-0 mb-2 flex w-80 max-w-full gap-2 bg-w95-grey p-1.5 shadow-w95', {
      visible: active,
      invisible: !active,
    })}
  >
    <span className='min-w-8 writing-sideways-rl flex rotate-180 items-center whitespace-nowrap bg-w95-dark-grey py-2 text-xl tracking-widest text-white'>
      {"Raza's Portfolio"}
    </span>
    <div className='flex flex-1 flex-col justify-end'>
      {programs.map((program, i) => (
        <button
          className='flex h-10 w-full items-center gap-1 p-1 hover:bg-w95-blue hover:text-white focus:bg-w95-blue focus:text-white focus:outline-none'
          key={program.id}
        >
          <Image src={program.icon.src} alt={program.icon.alt} className='h-8 w-auto' />
          <span>{program.name}</span>
        </button>
      ))}

      <hr className='shadow-windows h-2 w-full' />

      <button className='flex h-10 w-full items-center gap-1 p-1 hover:bg-w95-blue hover:text-white focus:bg-w95-blue focus:text-white focus:outline-none'>
        Shut down...
      </button>
    </div>
  </div>
);

const Clock: React.FC = () => {
  const time = useTime('minute');

  return (
    <div className='ml-auto px-3 shadow-w95-inverted-thin' suppressHydrationWarning={true}>
      {time.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit',
      })}
    </div>
  );
};

export default function Taskbar() {
  const [startMenu, focusWithinStartMenu] = useFocusWithin<HTMLDivElement>();
  const [showStartMenu, setShowStartMenu] = React.useState(false);

  useEffect(() => {
    if (!focusWithinStartMenu) setShowStartMenu(false);
  }, [focusWithinStartMenu]);

  return (
    <div className='relative flex h-10 w-screen items-center bg-w95-grey p-2 shadow-w95'>
      <div className='h-full' tabIndex={-1} ref={startMenu}>
        <StartButton active={showStartMenu} onClick={() => setShowStartMenu(!showStartMenu)} />
        <StartMenu active={showStartMenu} />
      </div>

      <Clock />
    </div>
  );
}

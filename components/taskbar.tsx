'use client';

import React, { useContext, useEffect } from 'react';
import { useTime } from '@/utils/use-time';
import Image, { StaticImageData } from 'next/image';
import logo from '@/img/logo.png';
import { useFocusWithin } from '@/utils/use-focus-within';
import programs, { type Program } from '@/components/programs';
import ProgramContext from '@/utils/program-context';
import { twJoin } from 'tailwind-merge';

type ButtonProps = {
  icon?: Program['icon'];
  text: string;
  active?: boolean;
  onClick?: () => void;
};

const Button = ({ icon, text, active, onClick }: ButtonProps) => {
  return (
    <button
      className={twJoin(
        'flex h-full cursor-w95-pointer items-center justify-center gap-1 px-2 shadow-w95 active:shadow-w95-inverted',
        active && 'shadow-w95-inverted'
      )}
      onClick={(e) => {
        (e.target as HTMLButtonElement).focus();
        onClick?.();
      }}
    >
      <Image src={icon?.src ?? logo} alt={icon?.alt ?? 'W95 Portfolio Logo'} className='h-full w-auto' />
      <span>{text}</span>
    </button>
  );
};

type StartMenuProps = {
  active?: boolean;
};

const StartMenu = ({ active }: StartMenuProps) => {
  const context = useContext(ProgramContext);

  return (
    <div
      className={twJoin(
        'absolute bottom-full left-0 mb-2 flex w-80 max-w-full gap-2 bg-w95-grey p-1.5 shadow-w95',
        active ? 'visible' : 'invisible'
      )}
    >
      <span className='writing-sideways-rl flex min-w-8 rotate-180 items-center whitespace-nowrap bg-w95-dark-grey py-2 text-xl tracking-widest text-white'>
        {"Raza's Portfolio"}
      </span>
      <div className='flex flex-1 flex-col justify-end'>
        {programs
          .filter((program) => program.includeInStartMenu)
          .map((program, i) => (
            <button
              className='flex h-10 w-full items-center gap-1 p-1 hover:bg-w95-blue hover:text-white focus:bg-w95-blue focus:text-white focus:outline-none'
              key={program.id + ' ' + i}
              onClick={() => {
                console.log(program, context.open);
                context?.open(program);
              }}
            >
              {program.icon && <Image src={program.icon.src} alt={program.icon.alt} className='h-8 w-auto' />}
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
};

const Clock = () => {
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

export const Taskbar = () => {
  const [ref, focused] = useFocusWithin<HTMLDivElement>();
  const [showStartMenu, setShowStartMenu] = React.useState(false);
  const context = useContext(ProgramContext);
  const openPrograms = context?.getOpen() ?? [];
  const activeProgram = context?.getActive();

  useEffect(() => {
    if (!focused) setShowStartMenu(false);
  }, [focused]);

  return (
    <div className='relative flex h-10 w-screen select-none items-center bg-w95-grey p-2 shadow-w95'>
      <div className='h-full' tabIndex={-1} ref={ref}>
        <Button text='Start' active={showStartMenu} onClick={() => setShowStartMenu(!showStartMenu)} />

        <StartMenu active={showStartMenu} />
      </div>

      <div className='ml-6 flex h-full flex-1 gap-4'>
        {openPrograms.map((program, i) => (
          <Button
            key={program.id}
            text={program.name}
            icon={program?.icon}
            active={activeProgram?.id === program.id}
            onClick={() => context?.setActive(program)}
          ></Button>
        ))}
      </div>

      <Clock />
    </div>
  );
};

export default Taskbar;

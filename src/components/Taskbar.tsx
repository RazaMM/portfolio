'use client'

import React, { useEffect } from "react";
import { useTime } from "@/hooks/useTime";
import Image from "next/image";
import logo from '@/img/logo.png';
import classNames from "classnames";
import { useFocusWithin } from "@/hooks/useFocusWithin";
import programs, { type Program } from '@/components/programs';

const StartButton: React.FC<{
  active?: boolean,
  onClick?: () => void
}> = ({ active = false, onClick }) => (
  <button
    className={classNames('flex gap-1 px-2 h-full items-center justify-center shadow-w95 cursor-w95-pointer active:shadow-w95-inverted',
      { 'shadow-w95-inverted': active }
    )}
    onClick={(e) => {
      (e.target as HTMLButtonElement).focus()
      onClick?.()
    }}
  >
    <Image src={logo} alt='Portfolio logo' className='h-full w-auto'/>
    <span>Start</span>
  </button>
);

const StartMenu: React.FC<{
  active?: boolean
}> = ({ active = false }) => (
  <div
    className={classNames("flex w-80 max-w-full gap-2 p-1.5 absolute bottom-full left-0 bg-w95-grey shadow-w95 mb-2", {
      'visible': active,
      'invisible': !active
    })}
  >
    <span className="flex items-center min-w-8 py-2 text-xl text-white bg-w95-dark-grey rotate-180 writing-sideways-rl whitespace-nowrap tracking-widest">{"Raza's Portfolio"}</span>
    <div className="flex-1 flex flex-col justify-end">
      {programs.map((program, i) => (
        <button
          className='flex items-center gap-1 p-1 w-full h-10 hover:bg-w95-blue hover:text-white focus:outline-none focus:bg-w95-blue focus:text-white'
          key={program.id}
        >
          <Image src={program.icon.src} alt={program.icon.alt} className='h-8 w-auto'/>
          <span>{program.name}</span>
        </button>
      ))}

      <hr className="h-2 shadow-windows w-full"/>

      <button className='flex items-center gap-1 p-1 w-full h-10 hover:bg-w95-blue hover:text-white focus:outline-none focus:bg-w95-blue focus:text-white'>
        Shut down...
      </button>
    </div>
  </div>
);

const Clock: React.FC = () => {
  const time = useTime('minute');

  return (
    <div className='ml-auto px-3 shadow-w95-inverted-thin'>
      {time.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit'
      })}
    </div>
  )
}

export default function Taskbar() {
  const [startMenu, focusWithinStartMenu] = useFocusWithin<HTMLDivElement>();
  const [showStartMenu, setShowStartMenu] = React.useState(false);

  useEffect(() => {
    if (!focusWithinStartMenu) setShowStartMenu(false);
  }, [focusWithinStartMenu]);

  return (
    <div className='flex items-center w-screen bg-w95-grey shadow-w95 h-10 p-2 relative'>
      <div className='h-full' tabIndex={-1} ref={startMenu}>
        <StartButton active={showStartMenu} onClick={() => setShowStartMenu(!showStartMenu)}/>
        <StartMenu active={showStartMenu}/>
      </div>

      <Clock/>
    </div>
  )
}
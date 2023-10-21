'use client'

import React from "react";
import { useTime } from "@/hooks/useTime";
import Image from "next/image";
import logo from '@/img/logo.png';

function StartButton({ onClick }: { onClick: () => void }) {
  return (
    <button className='flex gap-1 px-1 h-full items-center justify-center shadow-w95 cursor-w95-pointer active:shadow-w95-inverted' onClick={onClick}>
      <Image src={logo} alt='Portfolio logo' className='h-full' />
      <span className='mr-1'>Start</span>
    </button>
  )
}

function Clock() {
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

  return (
    <div className='flex items-center w-screen bg-w95-grey shadow-w95 h-10 p-2'>
      <StartButton onClick={() => {}}/>

      <Clock/>
    </div>
  )
}
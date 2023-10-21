'use client'

import React from "react";
import { useTime } from "@/hooks/useTime";

function Clock() {
  const time = useTime('minute');

  return (
    <div className='my-2 ml-auto mr-2 px-3 shadow-w95-inverted-thin'>
      {time.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit'
      })}
    </div>
  )
}

export default function Taskbar() {

  return (
    <div className='flex items-center w-screen bg-w95-grey shadow-w95 h-10'>


      <Clock/>
    </div>
  )
}
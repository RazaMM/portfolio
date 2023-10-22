import Taskbar from "@/components/Taskbar";
import programs, { type Program } from "@/components/programs";
import React from "react";
import DesktopIcon from "@/components/DesktopIcon";

export default function Home() {
  return (
    <>
      <main className="flex-1 p-2 h-[calc(100%_-_theme(height.10))]">
        <div className='flex flex-col flex-wrap items-center gap-4 w-fit h-full'>
          {programs.map((program, i) => (
            <DesktopIcon image={program.icon.src} alt={program.icon.alt} text={program.name} key={program.id}/>
          ))}
        </div>
      </main>

      <Taskbar/>
    </>
  )
}

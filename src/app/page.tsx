import programs, { type Program } from "@/components/programs";
import React from "react";
import DesktopIcon from "@/components/DesktopIcon";
import ProgramWindow from "@/components/ProgramWindow";

export default function Home() {
  const test = programs[0];
  return (
    <>
      <div className='flex flex-col flex-wrap items-center gap-4 w-fit h-full relative'>
        {programs.map((program, i) => (
          <DesktopIcon image={program.icon.src} alt={program.icon.alt} text={program.name} key={program.id}/>
        ))}
      </div>

      <ProgramWindow program={test}/>
    </>
  )
}

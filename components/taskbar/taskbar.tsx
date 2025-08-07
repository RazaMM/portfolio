'use client';

import { PropsWithChildren } from 'react';

export type TaskbarProps = PropsWithChildren;

export const Taskbar = ({ children }: TaskbarProps) => {
  return (
    <div className='relative flex h-10 w-screen items-center bg-w95-grey p-2 shadow-w95 select-none'>{children}</div>
  );
};

export default Taskbar;

/*
  const context = useContext(ProgramContext);
  const openPrograms = context?.getOpen() ?? [];
  const activeProgram = context?.getActive();
* {openPrograms.map((program, i) => (
          <TaskbarButton
            key={program.id}
            icon={program?.icon}
            active={activeProgram?.id === program.id}
            onClick={() => context?.setActive(program)}
          >{program.name}</TaskbarButton>
        ))}*/

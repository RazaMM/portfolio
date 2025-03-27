'use client';

import programs, { type Program } from '@/components/programs';
import React, { useState } from 'react';
import Desktop from '@/components/desktop';
import Window from '@/components/window';
import ProgramContext from '@/lib/program-context';
import Taskbar from '@/components/taskbar/taskbar';
import Biography from '@/components/programs/biography';
import { TaskbarClock } from '@/components/taskbar/taskbar-clock';
import { TaskbarMenu } from '@/components/taskbar/taskbar-menu';
import { TaskbarMenuItem } from '@/components/taskbar/taskbar-menu-item';

export default function Home() {
  const [open, setOpen] = useState<Program[]>([Biography]);
  const [active, setActive] = useState<Program | null>(Biography);
  const [stackingOrder, setStackingOrder] = useState<Program[]>([Biography]);

  const context = {
    open: (program: Program) => {
      if (!open.some((p) => p.id === program.id)) {
        setOpen([...open, program]);
      }

      setStackingOrder([...stackingOrder.filter((p) => p.id !== program.id), program]);
      setActive(program);
    },
    close: (program: Program) => {
      if (active?.id === program.id) {
        setActive(null);
      }

      setOpen(open.filter((p) => p.id !== program.id));
      setStackingOrder(stackingOrder.filter((p) => p.id !== program.id));
    },
    getOpen: () => [...open],
    getActive: () => active,
    setActive: (program: Program) => {
      setActive(program);
      setStackingOrder([...stackingOrder.filter((p) => p.id !== program.id), program]);
    },
    getStackingOrder: () => [...stackingOrder],
  };

  return (
    <ProgramContext.Provider value={context}>
      <Desktop />

      {stackingOrder.map((program) => (
        <Window
          key={program.id}
          name={program.name}
          icon={program.icon}
          active={context.getActive()?.id === program.id}
          onClose={() => context.close(program)}
          onMouseDown={() => context.setActive(program)}
        >
          <program.Component />
        </Window>
      ))}

      <Taskbar>
        <TaskbarMenu>
          {programs
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter((program) => program.includeInStartMenu)
            .map((program, i) => (
              <TaskbarMenuItem
                key={program.id + ' ' + i}
                onClick={() => {
                  context?.open(program);
                }}
                icon={program.icon}
                as='button'
              >
                {program.name}
              </TaskbarMenuItem>
            ))}
        </TaskbarMenu>
        <TaskbarClock />
      </Taskbar>
    </ProgramContext.Provider>
  );
}

'use client';

import programs, { type Program } from '@/components/programs';
import React, { useState } from 'react';
import Desktop from '@/components/desktop/desktop';
import Window from '@/components/window';
import Taskbar from '@/components/taskbar/taskbar';
import Biography from '@/components/programs/biography';
import { TaskbarClock } from '@/components/taskbar/taskbar-clock';
import { TaskbarMenu } from '@/components/taskbar/taskbar-menu';
import { TaskbarMenuItem } from '@/components/taskbar/taskbar-menu-item';
import { DesktopShortcut } from '@/components/desktop/desktop-shortcut';
import { TaskbarContent } from '@/components/taskbar/taskbar-content';
import { TaskbarButton } from '@/components/taskbar/taskbar-button';
import Logo from '@/img/logo.png';
import Notepad from '@/img/notepad.png';
import Link from 'next/link';

export default function Home() {
  const [open, setOpen] = useState<Program[]>([Biography]);
  const [active, setActive] = useState<Program | null>(Biography);
  const [stackingOrder, setStackingOrder] = useState<Program[]>([Biography]);

  const openProgram = (program: Program) => {
    if (!open.some((p) => p.id === program.id)) {
      setOpen([...open, program]);
    }

    setStackingOrder([...stackingOrder.filter((p) => p.id !== program.id), program]);
    setActive(program);
  };

  const closeProgram = (program: Program) => {
    if (active?.id === program.id) {
      setActive(null);
    }

    setOpen(open.filter((p) => p.id !== program.id));
    setStackingOrder(stackingOrder.filter((p) => p.id !== program.id));
  };

  const updateActive = (program: Program) => {
    setActive(program);
    setStackingOrder([...stackingOrder.filter((p) => p.id !== program.id), program]);
  };

  return (
    <>
      <Desktop>
        {programs
          .sort((a, b) => a.name.localeCompare(b.name))
          .filter((program) => program.includeInDesktop)
          .map((program, i) => (
            <DesktopShortcut
              key={program.id + ' ' + i}
              onClick={() => {
                openProgram(program);
              }}
              icon={program.icon ?? { src: Logo, alt: '' }}
              as='button'
            >
              {program.name}
            </DesktopShortcut>
          ))}
        <DesktopShortcut
          as={Link}
          href='/blog'
          icon={{
            src: Notepad,
            alt: '',
          }}
        >
          My Blog
        </DesktopShortcut>
      </Desktop>

      {stackingOrder.map((program) => (
        <Window
          key={program.id}
          name={program.name}
          icon={program.icon}
          active={active?.id === program.id}
          onClose={() => closeProgram(program)}
          onMouseDown={() => updateActive(program)}
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
                  openProgram(program);
                }}
                icon={program.icon}
                as='button'
              >
                {program.name}
              </TaskbarMenuItem>
            ))}
          <TaskbarMenuItem
            as={Link}
            href='/blog'
            icon={{
              src: Notepad,
              alt: '',
            }}
          >
            My Blog
          </TaskbarMenuItem>
        </TaskbarMenu>

        <TaskbarContent>
          {open.map((program, i) => (
            <TaskbarButton
              key={program.id + ' ' + i}
              onClick={() => {
                updateActive(program);
              }}
              icon={program.icon}
              active={active?.id === program.id}
            >
              {program.name}
            </TaskbarButton>
          ))}
        </TaskbarContent>
        <TaskbarClock />
      </Taskbar>
    </>
  );
}

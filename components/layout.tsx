'use client';

import Desktop from '@/components/desktop/desktop';
import { DesktopShortcut } from '@/components/desktop/desktop-shortcut';
import { type Program } from '@/components/programs';
import Taskbar from '@/components/taskbar/taskbar';
import { TaskbarButton } from '@/components/taskbar/taskbar-button';
import { TaskbarClock } from '@/components/taskbar/taskbar-clock';
import { TaskbarContent } from '@/components/taskbar/taskbar-content';
import { TaskbarMenu } from '@/components/taskbar/taskbar-menu';
import { TaskbarMenuItem } from '@/components/taskbar/taskbar-menu-item';
import Window from '@/components/window';
import Logo from '@/img/logo.png';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export type Shortcut = {
  name: string;
  icon: {
    src: StaticImageData;
    alt: string;
  };
  href: string;
};

export function Layout({
  shortcuts,
  programs,
  defaultOpenPrograms,
}: {
  shortcuts?: Shortcut[];
  programs: Program[];
  defaultOpenPrograms?: Program['id'][];
}) {
  const defaultPrograms = programs.filter((p) => defaultOpenPrograms?.includes(p.id));

  const [open, setOpen] = useState<Program[]>(defaultPrograms);
  const [active, setActive] = useState<Program | null>(defaultPrograms[0] ?? null);
  const [stackingOrder, setStackingOrder] = useState<Program[]>(defaultPrograms);

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
        {Array.isArray(shortcuts) &&
          shortcuts
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((shortcut, i) => (
              <DesktopShortcut
                key={shortcut.href + ' ' + i}
                icon={shortcut.icon ?? { src: Logo, alt: '' }}
                as={Link}
                href={shortcut.href}
              >
                {shortcut.name}
              </DesktopShortcut>
            ))}

        {programs
          .sort((a, b) => a.name.localeCompare(b.name))
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

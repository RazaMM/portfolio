'use client';

import programs, { Program } from '@/components/programs';
import React, { useState } from 'react';
import Desktop from '@/components/desktop';
import Window from '@/components/window';
import ProgramContext from '@/utils/program-context';

export default function Home() {
  const test = programs[0];
  const [open, setOpen] = useState<Program[]>([]);
  const [active, setActive] = useState<Program | null>(null);
  const [stackingOrder, setStackingOrder] = useState<Program[]>([]);

  return (
    <ProgramContext.Provider
      value={{
        open: (program: Program) => {
          if (!open.some((p) => p.id === program.id)) {
            setOpen([...open, program]);
          }

          setStackingOrder([program, ...stackingOrder.filter((p) => p.id !== program.id)]);
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
          setStackingOrder([program, ...stackingOrder.filter((p) => p.id !== program.id)]);
        },
        getStackingOrder: () => [...stackingOrder],
      }}
    >
      <Desktop />
      <Window program={test} active={true} />
    </ProgramContext.Provider>
  );
}

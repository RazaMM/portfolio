'use client';

import { type Program } from '@/components/programs';
import React, { useState } from 'react';
import Desktop from '@/components/desktop';
import Window from '@/components/window';
import ProgramContext from '@/lib/program-context';
import Layout from '@/components/layout';

export default function Home() {
  const [open, setOpen] = useState<Program[]>([]);
  const [active, setActive] = useState<Program | null>(null);
  const [stackingOrder, setStackingOrder] = useState<Program[]>([]);

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
      <Layout>
        <Desktop />

        {stackingOrder.map((program) => (
          <Window program={program} key={program.id} />
        ))}
      </Layout>
    </ProgramContext.Provider>
  );
}

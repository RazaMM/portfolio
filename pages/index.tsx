import { type Program } from '@/components/programs';
import React, { useState } from 'react';
import Desktop from '@/components/desktop';
import Window from '@/components/window';
import ProgramContext from '@/lib/program-context';
import Layout from '@/components/layout';
import { GetStaticProps } from 'next';
import { getClient } from '@/lib/contentful';
import DataContext, { type DataContextValue } from '@/lib/data-context';
import moment from 'moment';
import { EntryCollection } from 'contentful';
import { TypeExperienceSkeleton } from '@/types/contentful';

export const getStaticProps: GetStaticProps = async (context) => {
  const client = getClient(context.draftMode);

  const data: EntryCollection<TypeExperienceSkeleton> = await client.getEntries({
    content_type: 'experience',
  });

  const experiences = data.items.map((item) => {
    return {
      ...item.fields,
      startDate: moment(item.fields.startDate).format('MMMM YYYY'),
      endDate: item.fields.endDate ? moment(item.fields.endDate).format('MMMM YYYY') : 'Current',
    };
  });

  return { props: { experiences } };
};

export default function Home(props: any) {
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

        <DataContext.Provider value={props as DataContextValue}>
          {stackingOrder.map((program) => (
            <Window program={program} key={program.id} />
          ))}
        </DataContext.Provider>
      </Layout>
    </ProgramContext.Provider>
  );
}

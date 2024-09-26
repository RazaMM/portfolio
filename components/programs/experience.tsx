'use client';

import React, { useContext, useMemo, useState } from 'react';
import icon from '@/img/notepad.png';
import { type Program } from '@/components/programs';
import DataContext from '@/lib/data-context';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents, type Options } from '@contentful/rich-text-react-renderer';

const options: Options = {
  renderNode: {
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className='flex list-inside list-disc flex-col items-start gap-2'>{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => <li className='[&>p]:inline'>{children}</li>,
  },
};

const Experience: React.FC = () => {
  const { experiences } = useContext(DataContext);
  const [idx, setIdx] = useState(0);

  const description = useMemo(() => {
    // @ts-ignore
    return documentToReactComponents(experiences[idx].description, options);
  }, [experiences, idx]);

  console.log(experiences[idx].description);

  return (
    <div className='flex min-h-full w-96 min-w-full max-w-full flex-col justify-between bg-white p-2'>
      <div className='flex flex-col'>
        <span className='text-2xl'>{experiences[idx].title}</span>
        <span>
          {experiences[idx].startDate} - {experiences[idx].endDate ?? 'Now'}
        </span>
        <span>{experiences[idx].organizationName}</span>
        <span>{experiences[idx].location}</span>

        <span className='my-2 w-full' />

        {description}
      </div>

      <div className='flex w-full justify-between'>
        {idx !== 0 && (
          <button className='cursor-pointer select-none text-2xl' onClick={() => setIdx(idx - 1)}>
            &lt;-
          </button>
        )}

        {idx !== experiences.length - 1 && (
          <button className='ml-auto cursor-pointer select-none text-2xl' onClick={() => setIdx(idx + 1)}>
            -&gt;
          </button>
        )}
      </div>
    </div>
  );
};
Experience.displayName = 'Experience';

export default {
  id: 'experience',
  name: 'My Experience',
  icon: {
    src: icon,
    alt: 'A pixelated image of a book with a purple cover',
  },
  bounds: {
    minWidth: 450,
    minHeight: 480,
  },
  resizeable: true,
  Component: Experience,
  includeInStartMenu: true,
  includeInDesktop: true,
} as Program;

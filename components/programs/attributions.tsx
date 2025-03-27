'use client';

import React from 'react';
import icon from '@/img/message-bubble-info.png';
import { type Program } from '@/components/programs';

const Attributions: React.FC = () => {
  const attributions = [
    {
      text: 'Windows 95/98 Cursor Set by darix555 on rw-designer.com',
      href: 'http://www.rw-designer.com/cursor-set/win-95-98',
    },
    {
      text: 'Windows 98 Icons by Alex Meub',
      href: 'https://win98icons.alexmeub.com',
    },
    {
      text: 'W95FA Font by FontsArena on dafont.com',
      href: 'https://www.dafont.com/w95fa.font',
    },
  ];

  return (
    <div className='flex min-h-full w-fit max-w-full min-w-full flex-col items-center gap-4 bg-white p-2 text-center'>
      <span className='text-xl'>Attributions:</span>

      {attributions.map((attribution) => (
        <a
          key={attribution.text + attribution.href}
          className='text-blue-800 underline decoration-transparent hover:decoration-current'
          href={attribution.href}
        >
          {attribution.text}
        </a>
      ))}
    </div>
  );
};

Attributions.displayName = 'Attributions';

export default {
  id: 'attributions',
  name: 'Attributions',
  icon: {
    src: icon,
    alt: 'A speech bubble with an information icon inside',
  },
  Component: Attributions,
  includeInStartMenu: true,
  includeInDesktop: true,
} as Program;

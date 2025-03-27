import { useTime } from '@/lib/use-time';
import React from 'react';

export const TaskbarClock = () => {
  const time = useTime('minute');

  return (
    <div className='ml-auto hidden px-3 shadow-w95-inverted-thin sm:block' suppressHydrationWarning={true}>
      {time.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit',
      })}
    </div>
  );
};

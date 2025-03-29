import React, { MouseEventHandler } from 'react';
import { twJoin } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export const ShutdownScreen = ({ visible, onClick }: { visible: boolean; onClick: MouseEventHandler }) => {
  const classes = tv({
    slots: {
      base: 'fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black text-6xl',
      text: 'max-w-xl text-center text-orange-400',
    },
    variants: {
      visible: {
        true: {
          base: 'visible',
          text: 'visible',
        },
        false: {
          base: 'invisible',
          text: 'invisible',
        },
      },
    },
  })({ visible });

  return (
    <div onClick={onClick} className={classes.base()}>
      <span className={classes.text()}>It&apos;s now safe to turn off your computer.</span>
    </div>
  );
};

export default ShutdownScreen;

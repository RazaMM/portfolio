import Image, { StaticImageData } from 'next/image';
import logo from '@/img/logo.png';
import React, { MouseEventHandler, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

type TaskbarButtonProps = PropsWithChildren<{
  icon?: {
    src: StaticImageData;
    alt: string;
  };
  active?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>;

export const TaskbarButton = ({ icon, children, active, onClick }: TaskbarButtonProps) => {
  const classes = tv({
    slots: {
      button:
        'flex h-full cursor-w95-pointer items-center justify-center gap-1 px-2 shadow-w95 active:shadow-w95-inverted',
      icon: 'h-full w-auto',
      text: 'overflow-hidden text-nowrap text-ellipsis',
    },
    variants: {
      active: {
        true: {
          button: 'shadow-w95-inverted',
        },
      },
    },
  })();

  return (
    <button
      className={classes.button({ active })}
      onClick={(e) => {
        (e.target as HTMLButtonElement).focus();
        onClick?.(e);
      }}
    >
      <Image src={icon?.src ?? logo} alt={icon?.alt ?? 'W95 Portfolio Logo'} className={classes.icon()} />
      <span className={classes.text()}>{children}</span>
    </button>
  );
};

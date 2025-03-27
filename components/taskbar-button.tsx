import type { Program } from '@/components/programs';
import { twJoin } from 'tailwind-merge';
import Image from 'next/image';
import logo from '@/img/logo.png';
import React from 'react';

type TaskbarButtonProps = {
  icon?: Program['icon'];
  text: string;
  active?: boolean;
  onClick?: () => void;
};

export const Taskbar = ({ icon, text, active, onClick }: TaskbarButtonProps) => {
  return (
    <button
      className={twJoin(
        'flex h-full cursor-w95-pointer items-center justify-center gap-1 px-2 shadow-w95 active:shadow-w95-inverted',
        active && 'shadow-w95-inverted'
      )}
      onClick={(e) => {
        (e.target as HTMLButtonElement).focus();
        onClick?.();
      }}
    >
      <Image src={icon?.src ?? logo} alt={icon?.alt ?? 'W95 Portfolio Logo'} className='h-full w-auto' />
      <span className='overflow-hidden text-ellipsis text-nowrap'>{text}</span>
    </button>
  );
};

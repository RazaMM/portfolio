'use client';

import { useDraggable } from '@/lib/use-draggable';
import { useWindowDimensions } from '@/lib/use-window-dimensions';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useMemo } from 'react';
import { twJoin } from 'tailwind-merge';

export type WindowProps = {
  name: string;
  icon?: {
    src: StaticImageData;
    alt: string;
  };
  children?: React.ReactNode;
  active?: boolean;
  onClose?: () => void;
  onMouseDown?: () => void;
};

export const Window = ({ name, icon, children, active, onClose, onMouseDown }: WindowProps) => {
  const [windowWidth, windowHeight] = useWindowDimensions();

  const bounds = useMemo(
    () => ({
      top: 0,
      left: 0,
      right: windowWidth <= 0 ? Infinity : windowWidth - 50,
      bottom: windowHeight <= 0 ? Infinity : windowHeight - 60,
    }),
    [windowWidth, windowHeight]
  );

  const { handle, dragged, isDragging } = useDraggable<HTMLDivElement, HTMLDivElement>(bounds);

  useEffect(() => {
    if (isDragging) {
      document.body.classList.add('select-none');
      document.body.classList.remove('cursor-w95-auto');
      document.body.classList.add('cursor-w95-move');
    } else {
      document.body.classList.add('cursor-w95-auto');
      document.body.classList.remove('select-none');
      document.body.classList.remove('cursor-w95-move');
    }
  }, [isDragging, bounds]);

  return (
    <div
      onMouseDown={() => {
        onMouseDown?.();
      }}
      className={twJoin(
        'absolute top-0 left-0 flex w-full max-w-fit items-center justify-center',
        !active && 'select-none'
      )}
      style={{ translate: 'calc(50vw - 50%) calc(50vh - 50% - 20px)' }}
      ref={dragged}
    >
      <div className='flex h-full w-full flex-col items-center justify-center gap-1.5 bg-w95-grey px-1 pt-1 pb-4 shadow-w95'>
        <div
          className={twJoin(
            'flex h-6 w-full items-center px-2 select-none',
            active ? 'bg-w95-blue' : 'bg-w95-dark-grey'
          )}
          ref={handle}
        >
          {icon && <Image src={icon.src} alt={icon.alt} className='pointer-events-none mr-1 h-5 w-auto' />}
          <h1 className='overflow-hidden text-ellipsis whitespace-nowrap text-white'>{name}</h1>
          <button
            onClick={() => {
              onClose?.();
            }}
            className='ml-auto flex aspect-square h-4 items-center justify-center bg-w95-grey text-black shadow-w95-thin active:shadow-w95-inverted-thin'
          >
            <span className='text-sm'>X</span>
          </button>
        </div>

        <div className='h-screen max-h-[calc(100dvh-theme(height.6)-theme(height.10)-(--spacing(2))-(--spacing(4))-(--spacing(2)))] w-screen max-w-[calc(100vw-(--spacing(2)))] overflow-auto sm:h-auto sm:w-auto'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Window;

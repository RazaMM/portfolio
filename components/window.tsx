'use client';

import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { Program } from '@/components/programs';
import { defaultBounds, useDraggable } from '@/lib/use-draggable';
import { ResizeDirection, useResizable } from '@/lib/use-resizable';
import { useWindowDimensions } from '@/lib/use-window-dimensions';
import ProgramContext from '@/lib/program-context';
import { twJoin } from 'tailwind-merge';

export type WindowProps = {
  program: Program;
  active?: boolean;
  onClose?: () => void;
};

export const Window = ({ program, active }: WindowProps) => {
  const [windowWidth, windowHeight] = useWindowDimensions();
  const [draggingBounds, setDraggingBounds] = useState(defaultBounds);
  const { handle, dragged, isDragging } = useDraggable<HTMLDivElement, HTMLDivElement>(draggingBounds);
  const { resized, direction } = useResizable<HTMLDivElement>(
    program?.bounds?.minWidth,
    program?.bounds?.minHeight,
    program?.bounds?.maxWidth,
    program?.bounds?.maxHeight
  );

  const context = useContext(ProgramContext);
  const isActive = active ?? context?.getActive()?.id === program.id;

  useEffect(() => {
    setDraggingBounds({
      top: -12,
      left: -12,
      right: windowWidth - 50,
      bottom: windowHeight - 80,
    });

    document.body.classList.add('cursor-w95-auto');
    document.body.classList.remove('select-none');
    document.body.classList.remove('cursor-w95-move');
    document.body.classList.remove('cursor-w95-ns-resize');
    document.body.classList.remove('cursor-w95-ew-resize');
    document.body.classList.remove('cursor-w95-nwse-resize');
    document.body.classList.remove('cursor-w95-nesw-resize');

    if (isDragging || direction !== ResizeDirection.NONE) {
      document.body.classList.add('select-none');
      document.body.classList.remove('cursor-w95-auto');

      if (isDragging) {
        document.body.classList.add('cursor-w95-move');
      } else {
        switch (direction) {
          case ResizeDirection.NORTH:
          case ResizeDirection.SOUTH:
            document.body.classList.add('cursor-w95-ns-resize');
            break;
          case ResizeDirection.EAST:
          case ResizeDirection.WEST:
            document.body.classList.add('cursor-w95-ew-resize');
            break;
          case ResizeDirection.NORTH_WEST:
          case ResizeDirection.SOUTH_EAST:
            document.body.classList.add('cursor-w95-nwse-resize');
            break;
          case ResizeDirection.NORTH_EAST:
          case ResizeDirection.SOUTH_WEST:
            document.body.classList.add('cursor-w95-nesw-resize');
            break;
        }
      }
    }
  }, [direction, isDragging, windowHeight, windowWidth]);

  return (
    <div
      onMouseDown={() => {
        context?.setActive(program);
      }}
      className={twJoin('absolute left-0 top-0 flex items-center justify-center p-3', !isActive && 'select-none')}
      style={{
        translate: 'calc(50vw - 50%) calc(50vh - 50% - 40px)',
        width: `${program?.bounds?.minWidth}px`,
        height: `${program?.bounds?.minHeight}px`,
      }}
      ref={(el) => {
        //@ts-expect-error
        dragged.current = el;

        if (program.resizeable) {
          //@ts-expect-error
          resized.current = el;
        }
      }}
    >
      <div className='flex h-full w-full flex-col items-center justify-center gap-1.5 bg-w95-grey px-1 pb-4 pt-1 shadow-w95'>
        <div
          className={twJoin(
            'flex h-6 w-full select-none items-center px-2',
            isActive ? 'bg-w95-blue' : 'bg-w95-dark-grey'
          )}
          ref={handle}
        >
          {program.icon && (
            <Image src={program.icon.src} alt={program.icon.alt} className='pointer-events-none mr-1 h-5 w-auto' />
          )}
          <h1 className='overflow-hidden overflow-ellipsis whitespace-nowrap text-white'>{program.name}</h1>
          <button
            onClick={() => {
              context?.close(program);
            }}
            className='ml-auto flex aspect-square h-4 items-center justify-center bg-w95-grey text-black shadow-w95-thin active:shadow-w95-inverted-thin'
          >
            <span className='text-sm'>X</span>
          </button>
        </div>

        <div className='h-full w-full overflow-auto'>
          <program.Component />
        </div>
      </div>
    </div>
  );
};

export default Window;

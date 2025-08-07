import { useEffect, useRef, useState } from 'react';
import { clamp } from './clamp';

export type DraggingBounds = {
  top: number;
  left: number;
  right: number;
  bottom: number;
};

export function useDraggable<HandleType extends HTMLElement, DraggedType extends HTMLElement>({
  top = 0,
  left = 0,
  right = Infinity,
  bottom = Infinity,
}: DraggingBounds) {
  const handle = useRef<HandleType>(null);
  const dragged = useRef<DraggedType>(null);
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dragStart = (e: MouseEvent) => {
      if (!dragged.current) {
        return;
      }

      // Get where the user clicked within the dragged element to offset x and y.
      const rect = dragged.current.getBoundingClientRect();

      offset.current.x = e.pageX - rect.x;
      offset.current.y = e.pageY - rect.y;

      setIsDragging(true);
      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', dragStop);
    };

    const drag = (e: MouseEvent) => {
      if (!dragged.current) {
        return;
      }

      const x = clamp(e.pageX - offset.current.x, left, right);
      const y = clamp(e.pageY - offset.current.y, top, bottom);

      dragged.current.style.setProperty('translate', `${x}px ${y}px`);
    };

    const dragStop = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('mouseup', dragStop);
    };

    if (handle.current) {
      handle.current.addEventListener('mousedown', dragStart);
    }

    return () => {
      dragStop();
    };
  }, [bottom, left, right, top]);

  return {
    handle,
    dragged,
    isDragging,
  };
}

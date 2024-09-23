import { useState, useEffect, useRef } from 'react';
import { clamp } from './clamp';

export type DraggingBounds = {
  top: number;
  left: number;
  right: number;
  bottom: number;
};

export const defaultBounds: DraggingBounds = {
  top: 0,
  left: 0,
  right: Infinity,
  bottom: Infinity,
};

export function useDraggable<HandleType extends HTMLElement, DraggedType extends HTMLElement>(bounds = defaultBounds) {
  const handle = useRef<HandleType>(null);
  const dragged = useRef<DraggedType>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    let offsetX = 0;
    let offsetY = 0;

    const dragStart = (e: MouseEvent) => {
      if (!dragged.current) {
        return;
      }

      // Get where the user clicked within the dragged element to offset x and y.
      const rect = dragged.current.getBoundingClientRect();
      offsetX = e.pageX - rect.x;
      offsetY = e.pageY - rect.y;

      setIsDragging(true);
      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', dragStop);
    };

    const drag = (e: MouseEvent) => {
      if (!dragged.current) {
        return;
      }

      const x = clamp(e.pageX - offsetX, bounds.left, bounds.right);
      const y = clamp(e.pageY - offsetY, bounds.top, bounds.bottom);

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
  }, [bounds.bottom, bounds.left, bounds.right, bounds.top]);

  return {
    handle,
    dragged,
    isDragging,
  };
}

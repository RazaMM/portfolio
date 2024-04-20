import { useState, useEffect, useRef } from 'react';
import { clamp } from './clamp';

export function useDraggable<HandleType extends HTMLElement, DraggedType extends HTMLElement>() {
  const handle = useRef<HandleType>(null);
  const dragged = useRef<DraggedType>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const dragStart = (e: MouseEvent) => {
      // Get where the user clicked within the dragged element to offset x and y.
      const rect = dragged.current?.getBoundingClientRect();
      startX = e.pageX - (rect?.x ?? 0);
      startY = e.pageY - (rect?.y ?? 0);

      setIsDragging(true);
      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', dragStop);
    };

    const drag = (e: MouseEvent) => {
      const x = e.pageX - startX;
      const y = e.pageY - startY;

      if (dragged.current) {
        dragged.current.style.setProperty('translate', `${x}px ${y}px`);
      }
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
  }, []);

  return {
    handle,
    dragged,
    isDragging,
  };
}

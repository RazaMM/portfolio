import { useState, useEffect, useRef } from 'react';
import { clamp } from './clamp';

export function useDraggable<HandleType extends HTMLElement, DraggedType extends HTMLElement>() {
  const handle = useRef<HandleType>(null);
  const dragged = useRef<DraggedType>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    let x = 0;
    let y = 0;

    const dragStart = (e: MouseEvent) => {
      // Get where the user clicked within the dragged element to offset x and y.
      const rect = dragged.current?.getBoundingClientRect();
      x = e.pageX - (rect?.left ?? 0);
      y = e.pageY - (rect?.top ?? 0);

      setIsDragging(true);
      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', dragStop);
    };

    const drag = (e: MouseEvent) => {
      const clampedX = clamp(e.clientX, 0, window.innerWidth) - x;
      const clampedY = clamp(e.clientY, 0, window.innerHeight) - y;

      if (dragged.current) {
        dragged.current.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
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

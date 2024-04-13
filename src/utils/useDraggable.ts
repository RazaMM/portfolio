import { useState, useEffect, useRef } from 'react';
import { clamp } from './clamp';

export function useDraggable<HandleType extends HTMLElement, DraggedType extends HTMLElement>() {
  const handle = useRef<HandleType>(null);
  const dragged = useRef<DraggedType>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    let offsetX = 0;
    let offsetY = 0;

    const dragStart = (e: MouseEvent) => {
      // User has started dragging
      setIsDragging(true);
      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', dragStop);

      // Get where the user clicked within the dragged element to offset x and y.
      const rect = dragged.current?.getBoundingClientRect();
      offsetX = e.pageX - (rect?.left ?? 0);
      offsetY = e.pageY - (rect?.top ?? 0);
    };

    const drag = (e: MouseEvent) => {
      const x = clamp(e.clientX, 0, window.innerWidth) - offsetX;
      const y = clamp(e.clientY, 0, window.innerHeight) - offsetY;

      if (dragged.current) {
        dragged.current.style.transform = `translate(${x}px, ${y}px)`;
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

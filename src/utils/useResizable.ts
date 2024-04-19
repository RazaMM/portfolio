import { useEffect, useMemo, useRef, useState } from 'react';
import { clamp } from '@/utils/clamp';

export enum ResizeDirection {
  NONE,
  NORTH,
  NORTH_EAST,
  EAST,
  SOUTH_EAST,
  SOUTH,
  SOUTH_WEST,
  WEST,
  NORTH_WEST,
}

export function useResizable<ElementType extends HTMLElement>(
  minWidth = 100,
  minHeight = 100,
  maxWidth = Infinity,
  maxHeight = Infinity
) {
  const resized = useRef<ElementType>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [direction, setDirection] = useState(ResizeDirection.NONE);
  const directionRef = useRef<ResizeDirection>(direction);
  const isResizingRef = useRef<boolean>(isResizing);

  useEffect(() => {
    if (!resized.current) return;

    const style = window.getComputedStyle(resized.current);

    const resizeStart = (e: MouseEvent) => {
      setIsResizing(true);
      isResizingRef.current = true;

      document.addEventListener('mousemove', resize);
      document.addEventListener('mouseup', resizeStop);
    };

    const resize = (e: MouseEvent) => {
      if (!resized.current || directionRef.current === ResizeDirection.NONE) return;

      e.stopPropagation();
      const rect = resized.current.getBoundingClientRect();

      const x = clamp(e.clientX, 0, window.innerWidth);
      const y = clamp(e.clientY, 0, window.innerHeight);

      switch (directionRef.current) {
        case ResizeDirection.EAST:
          resized.current.style.width = `${clamp(x, minWidth, maxWidth)}px`;
          break;

        case ResizeDirection.WEST:
          resized.current.style.width = `${clamp(rect.right - x, minWidth, maxWidth)}px`;
          //resized.current.style.translate = `${newX}px`;
          break;

        case ResizeDirection.SOUTH:
          resized.current.style.height = `${clamp(y - rect.top, minHeight, maxHeight)}px`;
          break;

        case ResizeDirection.NORTH:
          resized.current.style.height = `${clamp(rect.bottom - y, minHeight, maxHeight)}px`;
          //resized.current.style.top = `${newY}px`;
          break;

        case ResizeDirection.NORTH_WEST:
          resized.current.style.height = `${clamp(rect.bottom - y, minHeight, maxHeight)}px`;
          resized.current.style.width = `${clamp(rect.right - x, minWidth, maxWidth)}px`;
          break;

        case ResizeDirection.NORTH_EAST:
          resized.current.style.height = `${clamp(rect.bottom - y, minHeight, maxHeight)}px`;
          resized.current.style.width = `${clamp(x, minWidth, maxWidth)}px`;
          break;

        case ResizeDirection.SOUTH_WEST:
          resized.current.style.height = `${clamp(y - rect.top, minHeight, maxHeight)}px`;
          resized.current.style.width = `${clamp(rect.right - x, minWidth, maxWidth)}px`;
          break;

        case ResizeDirection.SOUTH_EAST:
          resized.current.style.height = `${clamp(y - rect.top, minHeight, maxHeight)}px`;
          resized.current.style.width = `${clamp(x, minWidth, maxWidth)}px`;
          break;

        default:
          break;
      }
    };

    const resizeStop = (e: MouseEvent) => {
      setIsResizing(false);
      isResizingRef.current = false;

      updateDirection(e);

      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', resizeStop);
    };

    const updateDirection = (e: MouseEvent) => {
      if (resized.current && !isResizingRef.current) {
        const rect = resized.current.getBoundingClientRect();
        const x = e.clientX - (rect?.left ?? 0);
        const y = e.clientY - (rect?.top ?? 0);

        const padding = {
          left: Number.parseFloat(style.paddingLeft),
          right: Number.parseFloat(style.paddingRight),
          top: Number.parseFloat(style.paddingTop),
          bottom: Number.parseFloat(style.paddingBottom),
        };

        let newDirection = ResizeDirection.NONE;
        const minX = -1 * padding.left;
        const minY = -1 * padding.top;
        const maxX = rect.width + padding.right;
        const maxY = rect.height + padding.bottom;

        if (x < minX || x > maxX || y < minY || y > maxY) {
          newDirection = ResizeDirection.NONE;
        } else if (x < padding.left && y < padding.top) {
          newDirection = ResizeDirection.NORTH_WEST;
        } else if (x < padding.left && y > rect.height - padding.top) {
          newDirection = ResizeDirection.SOUTH_WEST;
        } else if (x > rect.width - padding.left && y < padding.top) {
          newDirection = ResizeDirection.NORTH_EAST;
        } else if (x > rect.width - padding.left && y > rect.height - padding.top) {
          newDirection = ResizeDirection.SOUTH_EAST;
        } else if (x < padding.left) {
          newDirection = ResizeDirection.WEST;
        } else if (x > rect.width - padding.right) {
          newDirection = ResizeDirection.EAST;
        } else if (y < padding.top) {
          newDirection = ResizeDirection.NORTH;
        } else if (y > rect.height - padding.bottom) {
          newDirection = ResizeDirection.SOUTH;
        } else {
          newDirection = ResizeDirection.NONE;
        }

        directionRef.current = newDirection;
        setDirection(newDirection);
      }
    };

    const clearDirection = () => {
      if (!isResizingRef.current) {
        setDirection(ResizeDirection.NONE);
        directionRef.current = ResizeDirection.NONE;
      }
    };

    resized.current.addEventListener('mousedown', resizeStart);
    resized.current.addEventListener('mousemove', updateDirection);
    resized.current.addEventListener('mouseleave', clearDirection);

    return () => {
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', resizeStop);
      document.removeEventListener('mousemove', updateDirection);
    };
  }, []);

  return {
    resized,
    isResizing,
    direction,
  };
}

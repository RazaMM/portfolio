import { useEffect, useRef, useState } from 'react';
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
    let startX = 0;
    let startY = 0;
    let startWidth = 0;
    let startHeight = 0;
    let offsetX = 0;
    let offsetY = 0;

    const resizeStart = (e: MouseEvent) => {
      if (!resized.current) {
        return;
      }

      startX = e.pageX;
      startY = e.pageY;

      const rect = resized.current.getBoundingClientRect();
      offsetX = e.pageX - rect.x;
      offsetX = e.pageX - rect.x;
      offsetY = e.pageY - rect.y;

      startWidth = resized.current.clientWidth ?? 0;
      startHeight = resized.current.offsetHeight ?? 0;

      resized.current.style.translate = `${rect.x}px ${rect.y}px`;

      setIsResizing(true);
      isResizingRef.current = true;

      document.addEventListener('mousemove', resize);
      document.addEventListener('mouseup', resizeStop);
    };

    const resize = (e: MouseEvent) => {
      if (!resized.current || directionRef.current === ResizeDirection.NONE) return;

      e.stopPropagation();

      const rect = resized.current.getBoundingClientRect();

      // North
      if (
        directionRef.current === ResizeDirection.NORTH ||
        directionRef.current === ResizeDirection.NORTH_WEST ||
        directionRef.current === ResizeDirection.NORTH_EAST
      ) {
        const rect = resized.current.getBoundingClientRect();

        if (rect.height > minHeight && rect.height < maxHeight) {
          resized.current.style.translate = `${rect.x}px ${e.pageY - offsetY}px`;
        }

        resized.current.style.height = `${clamp(startY - e.pageY + startHeight, minHeight, maxHeight)}px`;
      }

      // South
      if (
        directionRef.current === ResizeDirection.SOUTH ||
        directionRef.current === ResizeDirection.SOUTH_WEST ||
        directionRef.current === ResizeDirection.SOUTH_EAST
      ) {
        resized.current.style.height = `${clamp(e.pageY - rect.y, minHeight, maxHeight)}px`;
      }

      // West
      if (
        directionRef.current === ResizeDirection.WEST ||
        directionRef.current === ResizeDirection.NORTH_WEST ||
        directionRef.current === ResizeDirection.SOUTH_WEST
      ) {
        const rect = resized.current.getBoundingClientRect();

        if (rect.width > minWidth && rect.width < maxWidth) {
          resized.current.style.translate = `${e.pageX - offsetX}px ${rect.y}px`;
        }

        resized.current.style.width = `${clamp(startX - e.pageX + startWidth, minWidth, maxWidth)}px`;
      }

      // East
      if (
        directionRef.current === ResizeDirection.EAST ||
        directionRef.current === ResizeDirection.NORTH_EAST ||
        directionRef.current === ResizeDirection.SOUTH_EAST
      ) {
        resized.current.style.width = `${clamp(e.pageX - rect.x, minWidth, maxWidth)}px`;
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
        const x = e.pageX - (rect?.left ?? 0);
        const y = e.pageY - (rect?.top ?? 0);

        const padding = {
          left: Number.parseFloat(style.paddingLeft),
          right: Number.parseFloat(style.paddingRight),
          top: Number.parseFloat(style.paddingTop),
          bottom: Number.parseFloat(style.paddingBottom),
        };

        let newDirection: ResizeDirection;
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
  }, [maxHeight, maxWidth, minHeight, minWidth]);

  return {
    resized,
    isResizing,
    direction,
  };
}

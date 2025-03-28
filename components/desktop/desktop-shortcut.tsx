import Image, { StaticImageData } from 'next/image';
import React, { ComponentPropsWithoutRef, ElementType, MouseEventHandler, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

export type DesktopShortcutProps<T extends ElementType = 'a'> = PropsWithChildren<
  {
    as?: T;
    icon: {
      src: StaticImageData;
      alt: string;
    };
  } & ComponentPropsWithoutRef<T>
>;

export function DesktopShortcut<T extends ElementType = 'a'>({ icon, children, as, ...rest }: DesktopShortcutProps<T>) {
  const Component = as ?? 'a';
  const classes = tv({
    slots: {
      base: 'flex h-fit w-fit flex-col items-center gap-2 p-1',
      icon: 'h-auto w-10',
      text: 'max-w-[20ch] text-center text-white',
    },
  })();

  return (
    <Component {...rest} className={classes.base()}>
      <Image src={icon.src} alt={icon.alt} className={classes.icon()} />
      <span className={classes.text()}>{children}</span>
    </Component>
  );
}

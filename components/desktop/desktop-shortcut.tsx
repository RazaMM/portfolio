import Image, { StaticImageData } from 'next/image';
import React, { ComponentPropsWithoutRef, ElementType, MouseEventHandler, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

export type DesktopShortcutElementType = ElementType<
  { href?: string } | { onClick: MouseEventHandler<HTMLButtonElement> },
  'a' | 'button'
>;
export type DesktopShortcutProps<T extends DesktopShortcutElementType = 'a'> = PropsWithChildren<
  {
    as?: T;
    icon: {
      src: StaticImageData;
      alt: string;
    };
  } & ComponentPropsWithoutRef<T>
>;

export function DesktopShortcut<T extends DesktopShortcutElementType = 'a'>({
  icon,
  children,
  as,
  ...rest
}: DesktopShortcutProps) {
  const Component = as ?? 'a';
  const classes = tv({
    slots: {
      base: 'flex h-fit w-fit flex-col items-center gap-1 p-1',
      icon: 'h-10 w-auto',
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

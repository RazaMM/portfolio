import Image, { StaticImageData } from 'next/image';
import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

export type TaskbarMenuItemProps<T extends ElementType = 'a'> = PropsWithChildren<
  {
    as?: T;
    icon?: {
      src: StaticImageData;
      alt: string;
    };
  } & ComponentPropsWithoutRef<T>
>;

export function TaskbarMenuItem<T extends ElementType = 'a'>({ as, icon, children, ...rest }: TaskbarMenuItemProps<T>) {
  const Component = as ?? 'a';
  const classes = tv({
    slots: {
      base: 'flex h-10 w-full items-center gap-1 p-1 hover:bg-w95-blue hover:text-white focus:bg-w95-blue focus:text-white focus:outline-hidden',
      icon: 'h-8 w-auto',
    },
  })();

  return (
    <Component {...rest} className={classes.base()}>
      {icon && <Image src={icon.src} alt={icon.alt} className={classes.icon()} />}
      {children}
    </Component>
  );
}

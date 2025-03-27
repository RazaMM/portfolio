import React, { PropsWithChildren, useEffect } from 'react';
import { useFocusWithin } from '@/lib/use-focus-within';
import { TaskbarButton } from '@/components/taskbar/taskbar-button';
import { tv } from 'tailwind-variants';
import { TaskbarMenuItem } from '@/components/taskbar/taskbar-menu-item';
import ShutdownIcon from '@/img/shutdown.png';

type TaskbarStartMenuProps = PropsWithChildren;

export const TaskbarMenu = ({ children }: TaskbarStartMenuProps) => {
  const [ref, focused] = useFocusWithin<HTMLDivElement>();
  const [showStartMenu, setShowStartMenu] = React.useState(false);

  useEffect(() => {
    if (!focused) setShowStartMenu(false);
  }, [focused]);

  const classes = tv({
    slots: {
      menu: 'absolute bottom-full left-0 mb-2 flex w-80 max-w-full gap-2 bg-w95-grey p-1.5 shadow-w95',
      sidewaysText:
        'flex min-w-8 rotate-180 items-center bg-w95-dark-grey px-2 text-xl tracking-widest whitespace-nowrap text-white writing-sideways-rl',
      container: 'flex flex-1 flex-col justify-end',
      divider: 'shadow-windows h-2 w-full',
    },
    variants: {
      active: {
        true: {
          menu: 'visible',
        },
        false: {
          menu: 'invisible',
        },
      },
    },
  })();

  return (
    <div className='h-full' tabIndex={-1} ref={ref}>
      <TaskbarButton active={showStartMenu} onClick={() => setShowStartMenu(!showStartMenu)}>
        Start
      </TaskbarButton>

      <div className={classes.menu({ active: showStartMenu })}>
        <span className={classes.sidewaysText()}>{"Raza's Portfolio"}</span>

        <div className={classes.container()}>
          {children}

          <hr className={classes.divider()} />

          <TaskbarMenuItem
            as='button'
            icon={{
              src: ShutdownIcon,
              alt: '',
            }}
            className='flex h-10 w-full items-center gap-1 p-1 hover:bg-w95-blue hover:text-white focus:bg-w95-blue focus:text-white focus:outline-hidden'
          >
            Shut down...
          </TaskbarMenuItem>
        </div>
      </div>
    </div>
  );
};

/**
 {programs
           .filter((program) => program.includeInStartMenu)
           .map((program, i) => (
 <button
             className='flex h-10 w-full items-center gap-1 p-1 hover:bg-w95-blue hover:text-white focus:bg-w95-blue focus:text-white focus:outline-hidden'
 key={program.id + ' ' + i}
               onClick={() => {
                 console.log(program, context.open);
                context?.open(program);
              }}
            >
              {program.icon && <Image src={program.icon.src} alt={program.icon.alt} className='h-8 w-auto' />}
              <span>{program.name}</span>
           </button>
          ))}
 */

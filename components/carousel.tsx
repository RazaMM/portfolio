'use client';

import React, { useState } from 'react';
import { tv } from 'tailwind-variants';

export type CarouselProps = {
  count: number;
  builder: (index: number) => React.ReactNode;
};

export const Carousel = ({ builder, count }: CarouselProps) => {
  const [index, setIndex] = useState(0);

  const classes = tv({
    slots: {
      base: 'relative flex h-full w-fit flex-col bg-white',
      content: 'flex w-full flex-1',
      buttonContainer: 'sticky top-0 flex w-full justify-between border-b border-black bg-white px-4 py-2',
      button: 'cursor-pointer text-sm select-none',
    },
    variants: {
      direction: {
        right: {
          button: 'ml-auto',
        },
        left: '',
      },
    },
  })();

  return (
    <div className={classes.base()}>
      <div className={classes.buttonContainer()}>
        {index !== 0 && (
          <button className={classes.button({ direction: 'left' })} onClick={() => setIndex((idx) => idx - 1)}>
            &lt;- Previous Page
          </button>
        )}

        {index !== count - 1 && (
          <button className={classes.button({ direction: 'right' })} onClick={() => setIndex((idx) => idx + 1)}>
            Next Page -&gt;
          </button>
        )}
      </div>

      <div className={classes.content()}>{builder(index)}</div>
    </div>
  );
};

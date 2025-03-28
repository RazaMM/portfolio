import React, { PropsWithChildren } from 'react';

export type TaskbarContentProps = PropsWithChildren;
export const TaskbarContent = ({ children }: TaskbarContentProps) => {
  return <div className='ml-6 hidden h-full flex-1 gap-4 sm:flex'>{children}</div>;
};

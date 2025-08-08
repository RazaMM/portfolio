import { StaticImageData } from 'next/image';
import React from 'react';

export type Program = {
  id: string;
  name: string;
  icon?: {
    src: StaticImageData;
    alt: string;
  };
  Component: React.FC;
};

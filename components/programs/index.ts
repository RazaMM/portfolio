'use client';

import React from 'react';
import { StaticImageData } from 'next/image';

// Import all programs here
import Biography from './biography';
import Education from './education';
import Experience from './experience';

export type Program = {
  id: string;
  name: string;
  icon?: {
    src: StaticImageData;
    alt: string;
  };
  Component: React.FC;
  includeInDesktop?: boolean;
  includeInStartMenu?: boolean;
  bounds?: {
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
  };
  resizeable?: boolean;
};

// Ensure that all programs imported above are included in this array
export default [Biography, Education, Experience] as Program[];

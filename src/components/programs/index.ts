'use client';

import React from 'react';
import { StaticImageData } from 'next/image';

// Import all programs here
import Biography from './Biography';
import Education from './Education';
import Experience from './Experience';

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
  minWindowWidth?: number;
  minWindowHeight?: number;
  maxWindowWidth?: number;
  maxWindowHeight?: number;
  resizeable?: boolean;
};

// Ensure that all programs imported above are included in this array
export default [Biography, Education, Experience] as Program[];

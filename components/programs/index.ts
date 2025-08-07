import { StaticImageData } from 'next/image';
import React from 'react';

// Import all programs here
import Attributions from './attributions';
import Biography from './biography';
import Education from './education';
import Experience from './experience';
import Projects from './projects';

export type Program = {
  id: string;
  name: string;
  icon?: {
    src: StaticImageData;
    alt: string;
  };
  Component: React.FC;
};

// Ensure that all programs imported above are included in this array
export default [Biography, Education, Experience, Attributions, Projects] as Program[];

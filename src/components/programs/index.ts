import React from "react";
import { StaticImageData } from "next/image";

// Import all programs here
import Biography from './Biography';

export type Program = {
  id: string;
  name: string;
  icon: {
    src: StaticImageData;
    alt: string;
  }
  Component: React.FC;
  includeInDesktop?: boolean;
  includeInStartMenu?: boolean;
}

// Ensure that all programs imported above are included in this array
export default [
  Biography
] as Program[];
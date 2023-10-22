import React from "react";
import Biography from './Biography';
import { StaticImageData } from "next/image";

export type Program = {
  id: string;
  name: string;
  icon: {
    src: StaticImageData;
    alt: string;
  }
  Component: () => React.JSX.Element;
  includeInDesktop?: boolean;
  includeInStartMenu?: boolean;
}

export default [
  Biography
] as Program[];
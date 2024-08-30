import { createContext } from 'react';
import { type Program } from '@/components/programs';

export type ProgramContextValue = {
  open: (program: Program) => void;
  close: (program: Program) => void;
  getOpen: () => Program[];
  getActive: () => Program | null;
  setActive: (program: Program) => void;
  getStackingOrder: () => Program[];
};

export const ProgramContext = createContext<ProgramContextValue>({
  open: (_program: Program) => {},
  close: (_program: Program) => {},
  getOpen: () => [],
  getActive: () => null,
  setActive: (_program: Program) => {},
  getStackingOrder: () => [],
});

export default ProgramContext;

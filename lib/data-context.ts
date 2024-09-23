import { createContext } from 'react';
import { EntryFieldTypes } from 'contentful';

type Experience = {
  title: string;
  startDate: string;
  endDate: string;
  organizationName: string;
  location: string;
  description: EntryFieldTypes.RichText;
};

export type DataContextValue = {
  experiences: Experience[];
};

export const DataContext = createContext<DataContextValue>({
  experiences: [],
});

export default DataContext;

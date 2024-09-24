import type { Entry, EntryFields } from 'contentful';

export interface TypeExperienceFields {
  title: EntryFields.Symbol;
  organizationName: EntryFields.Symbol;
  location: EntryFields.Symbol;
  startDate: EntryFields.Date;
  endDate?: EntryFields.Date;
  description: EntryFields.RichText;
}

export type TypeExperience = Entry<TypeExperienceFields>;

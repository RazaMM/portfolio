import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypeBlogPostFields {
  title: EntryFields.Symbol;
  heroImage?: Asset;
  description: EntryFields.Symbol;
  content: EntryFields.RichText;
}

export type TypeBlogPost = Entry<TypeBlogPostFields>;

import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful';

export interface TypeExperienceFields {
  title: EntryFieldTypes.Symbol;
  organizationName: EntryFieldTypes.Symbol;
  location: EntryFieldTypes.Symbol;
  startDate: EntryFieldTypes.Date;
  endDate?: EntryFieldTypes.Date;
  description: EntryFieldTypes.RichText;
}

export type TypeExperienceSkeleton = EntrySkeletonType<TypeExperienceFields, 'experience'>;
export type TypeExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeExperienceSkeleton,
  Modifiers,
  Locales
>;
export type TypeExperienceWithoutLinkResolutionResponse = TypeExperience<'WITHOUT_LINK_RESOLUTION'>;
export type TypeExperienceWithoutUnresolvableLinksResponse = TypeExperience<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeExperienceWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeExperience<
  'WITH_ALL_LOCALES',
  Locales
>;
export type TypeExperienceWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> =
  TypeExperience<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeExperienceWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> =
  TypeExperience<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;

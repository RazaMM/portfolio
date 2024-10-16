import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeMathFields {
    title: EntryFieldTypes.Symbol;
    body: EntryFieldTypes.Text;
}

export type TypeMathSkeleton = EntrySkeletonType<TypeMathFields, "math">;
export type TypeMath<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMathSkeleton, Modifiers, Locales>;
export type TypeMathWithoutLinkResolutionResponse = TypeMath<"WITHOUT_LINK_RESOLUTION">;
export type TypeMathWithoutUnresolvableLinksResponse = TypeMath<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeMathWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeMath<"WITH_ALL_LOCALES", Locales>;
export type TypeMathWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeMath<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeMathWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeMath<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

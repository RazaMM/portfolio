export const toTitleCase = (str: string) => {
  const lowercaseWords = [
    'a',
    'an',
    'the',
    'and',
    'but',
    'or',
    'for',
    'nor',
    'on',
    'at',
    'to',
    'by',
    'of',
    'in',
    'with',
  ];

  const specialCases = {
    'co-op': 'Co-op',
    'thesis-based': 'Thesis-based',
    'course-based': 'Course-based',
  };

  if (str in specialCases) {
    return specialCases[str as keyof typeof specialCases];
  }

  return (
    str
      ?.toLowerCase()
      ?.split(/\s+|-|_+/)
      ?.map((word) => (lowercaseWords.includes(word) ? word : word.charAt(0).toUpperCase() + word.slice(1)))
      ?.join(' ') ?? ''
  );
};

import { type Shortcut } from '@/components/layout';
import { type Program } from '@/components/programs';
import homepage from '@/img/homepage.png';

export const programs: Program[] = [];

export const shortcuts: Shortcut[] = [
  {
    href: '/',
    name: 'Back to Home',
    icon: {
      src: homepage,
      alt: '',
    },
  },
];

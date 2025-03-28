import path from 'node:path';
import * as fg from 'fast-glob';

export const getAllSlugs = async () => {
  const dir = path.join(process.cwd(), 'posts');
  const paths = await fg.glob(path.join(dir, '*.mdx'));

  return paths.map((path: string) => ({
    slug: path.replace(dir, '').substring(1).replace('.mdx', ''),
  }));
};

type BlogPost = {
  title: string;
  date: Date;
  path: string;
};

export const getAllPosts = async () => {
  return [
    {
      title: 'Implementing Cubic Bezier Easing in JavaScript',
      date: new Date('2022-02-24'),
      path: '/blog/2025-03-28-implementing-cubic-bezier-easing-in-javascript',
    },
  ] as BlogPost[];
};

import path from 'node:path';
import * as fg from 'fast-glob';
import { toTitleCase } from '@/lib/to-title-case';

export const getAllSlugs = async () => {
  const dir = path.join(process.cwd(), 'posts');
  const paths = await fg.glob(path.join(dir, '*.mdx'));

  return paths.map((path: string) => ({
    slug: path.replace(dir, '').substring(1).replace('.mdx', ''),
  }));
};

export const getPost = async (slug: string) => {
  const { default: Post, frontmatter } = await import(`@/posts/${slug}.mdx`);
  const tokens = slug.split('-');
  const title = toTitleCase(tokens.slice(3).join(' '));
  const date = new Date();

  return {
    Post,
    metadata: {
      title,
      date,
      ...frontmatter,
    },
  };
};

export const getPostMetadata = async (slug: string) => {
  const tokens = slug.split('-');
  const title = toTitleCase(tokens.slice(3).join(' '));
  const date = new Date();

  return {
    title,
    date,
  };
};

export const getAllPosts = async () => {
  return [
    {
      title: 'Implementing Cubic Bezier Easing in JavaScript',
      date: new Date('2022-02-24'),
      path: '/blog/2025-03-28-implementing-cubic-bezier-easing-in-javascript',
    },
  ];
};

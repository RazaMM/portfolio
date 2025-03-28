import path from 'node:path';
import * as fg from 'fast-glob';

export const getAllSlugs = async () => {
  const dir = path.join(process.cwd(), 'posts');
  const paths = await fg.glob(path.join(dir, '*.mdx'));

  return paths.map((path: string) => ({
    slug: path.replace(dir, '').substring(1).replace('.mdx', ''),
  }));
};

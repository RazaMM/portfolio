import * as fg from 'fast-glob';
import path from 'node:path';

export const getAllSlugs = async () => {
  const dir = path.join(process.cwd(), 'posts');
  const paths = await fg.glob(path.join(dir, '*.mdx'));

  return paths.map((path: string) => ({
    slug: path.replace(dir, '').substring(1).replace('.mdx', ''),
  }));
};

type PostMetadata = {
  title: string;
  date: Date;
  description?: string;
  [key: string]: any;
};

export const getPost = async (slug: string) => {
  const { default: Post, frontmatter } = await import(`@/posts/${slug}.mdx`);

  if (!frontmatter.title) {
    throw new Error(`In Post ${slug}: title is missing from frontmatter.`);
  }

  if (!frontmatter.date) {
    throw new Error(`In Post ${slug}: date is missing from frontmatter.`);
  }

  const title = frontmatter.title;
  const date = new Date(Date.parse(frontmatter.date));

  if (isNaN(date.getTime())) {
    throw new Error(`In Post ${slug}: date is not valid.`);
  }

  return {
    Post,
    metadata: {
      ...frontmatter,
      title,
      date,
    } as PostMetadata,
  };
};

import type { MDXComponents } from 'mdx/types';
import Code, { CodeProps } from '@/components/code';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    code: ({ children, className }) => {
      const language = className?.replace(/language-/, '');
      return <Code source={children?.toString() ?? ''} language={language as CodeProps['language']} />;
    },
  };
}

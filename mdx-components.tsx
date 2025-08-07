import Code, { CodeProps } from '@/components/code';
import Math from '@/components/math';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    code: ({ children, className }) => {
      const language = className?.replace(/language-/, '');

      if (language === 'math') {
        return <Math source={children?.toString() ?? ''} />;
      }

      return <Code source={children?.toString() ?? ''} language={language as CodeProps['language']} />;
    },
  };
}
